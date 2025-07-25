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

export namespace youtube_v3 {
  export interface Options extends GlobalOptions {
    version: 'v3';
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
   * YouTube Data API v3
   *
   * The YouTube Data API v3 is an API that provides access to YouTube data, such as videos, playlists, and channels.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const youtube = google.youtube('v3');
   * ```
   */
  export class Youtube {
    context: APIRequestContext;
    abuseReports: Resource$Abusereports;
    activities: Resource$Activities;
    captions: Resource$Captions;
    channelBanners: Resource$Channelbanners;
    channels: Resource$Channels;
    channelSections: Resource$Channelsections;
    comments: Resource$Comments;
    commentThreads: Resource$Commentthreads;
    i18nLanguages: Resource$I18nlanguages;
    i18nRegions: Resource$I18nregions;
    liveBroadcasts: Resource$Livebroadcasts;
    liveChatBans: Resource$Livechatbans;
    liveChatMessages: Resource$Livechatmessages;
    liveChatModerators: Resource$Livechatmoderators;
    liveStreams: Resource$Livestreams;
    members: Resource$Members;
    membershipsLevels: Resource$Membershipslevels;
    playlistImages: Resource$Playlistimages;
    playlistItems: Resource$Playlistitems;
    playlists: Resource$Playlists;
    search: Resource$Search;
    subscriptions: Resource$Subscriptions;
    superChatEvents: Resource$Superchatevents;
    tests: Resource$Tests;
    thirdPartyLinks: Resource$Thirdpartylinks;
    thumbnails: Resource$Thumbnails;
    videoAbuseReportReasons: Resource$Videoabusereportreasons;
    videoCategories: Resource$Videocategories;
    videos: Resource$Videos;
    videoTrainability: Resource$Videotrainability;
    watermarks: Resource$Watermarks;
    youtube: Resource$Youtube;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.abuseReports = new Resource$Abusereports(this.context);
      this.activities = new Resource$Activities(this.context);
      this.captions = new Resource$Captions(this.context);
      this.channelBanners = new Resource$Channelbanners(this.context);
      this.channels = new Resource$Channels(this.context);
      this.channelSections = new Resource$Channelsections(this.context);
      this.comments = new Resource$Comments(this.context);
      this.commentThreads = new Resource$Commentthreads(this.context);
      this.i18nLanguages = new Resource$I18nlanguages(this.context);
      this.i18nRegions = new Resource$I18nregions(this.context);
      this.liveBroadcasts = new Resource$Livebroadcasts(this.context);
      this.liveChatBans = new Resource$Livechatbans(this.context);
      this.liveChatMessages = new Resource$Livechatmessages(this.context);
      this.liveChatModerators = new Resource$Livechatmoderators(this.context);
      this.liveStreams = new Resource$Livestreams(this.context);
      this.members = new Resource$Members(this.context);
      this.membershipsLevels = new Resource$Membershipslevels(this.context);
      this.playlistImages = new Resource$Playlistimages(this.context);
      this.playlistItems = new Resource$Playlistitems(this.context);
      this.playlists = new Resource$Playlists(this.context);
      this.search = new Resource$Search(this.context);
      this.subscriptions = new Resource$Subscriptions(this.context);
      this.superChatEvents = new Resource$Superchatevents(this.context);
      this.tests = new Resource$Tests(this.context);
      this.thirdPartyLinks = new Resource$Thirdpartylinks(this.context);
      this.thumbnails = new Resource$Thumbnails(this.context);
      this.videoAbuseReportReasons = new Resource$Videoabusereportreasons(
        this.context
      );
      this.videoCategories = new Resource$Videocategories(this.context);
      this.videos = new Resource$Videos(this.context);
      this.videoTrainability = new Resource$Videotrainability(this.context);
      this.watermarks = new Resource$Watermarks(this.context);
      this.youtube = new Resource$Youtube(this.context);
    }
  }

  export interface Schema$AbuseReport {
    abuseTypes?: Schema$AbuseType[];
    description?: string | null;
    relatedEntities?: Schema$RelatedEntity[];
    subject?: Schema$Entity;
  }
  export interface Schema$AbuseType {
    id?: string | null;
  }
  /**
   * Rights management policy for YouTube resources.
   */
  export interface Schema$AccessPolicy {
    /**
     * The value of allowed indicates whether the access to the policy is allowed or denied by default.
     */
    allowed?: boolean | null;
    /**
     * A list of region codes that identify countries where the default policy do not apply.
     */
    exception?: string[] | null;
  }
  /**
   * An *activity* resource contains information about an action that a particular channel, or user, has taken on YouTube.The actions reported in activity feeds include rating a video, sharing a video, marking a video as a favorite, commenting on a video, uploading a video, and so forth. Each activity resource identifies the type of action, the channel associated with the action, and the resource(s) associated with the action, such as the video that was rated or uploaded.
   */
  export interface Schema$Activity {
    /**
     * The contentDetails object contains information about the content associated with the activity. For example, if the snippet.type value is videoRated, then the contentDetails object's content identifies the rated video.
     */
    contentDetails?: Schema$ActivityContentDetails;
    /**
     * Etag of this resource
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the activity.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#activity".
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the activity, including the activity's type and group ID.
     */
    snippet?: Schema$ActivitySnippet;
  }
  /**
   * Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc.
   */
  export interface Schema$ActivityContentDetails {
    /**
     * The bulletin object contains details about a channel bulletin post. This object is only present if the snippet.type is bulletin.
     */
    bulletin?: Schema$ActivityContentDetailsBulletin;
    /**
     * The channelItem object contains details about a resource which was added to a channel. This property is only present if the snippet.type is channelItem.
     */
    channelItem?: Schema$ActivityContentDetailsChannelItem;
    /**
     * The comment object contains information about a resource that received a comment. This property is only present if the snippet.type is comment.
     */
    comment?: Schema$ActivityContentDetailsComment;
    /**
     * The favorite object contains information about a video that was marked as a favorite video. This property is only present if the snippet.type is favorite.
     */
    favorite?: Schema$ActivityContentDetailsFavorite;
    /**
     * The like object contains information about a resource that received a positive (like) rating. This property is only present if the snippet.type is like.
     */
    like?: Schema$ActivityContentDetailsLike;
    /**
     * The playlistItem object contains information about a new playlist item. This property is only present if the snippet.type is playlistItem.
     */
    playlistItem?: Schema$ActivityContentDetailsPlaylistItem;
    /**
     * The promotedItem object contains details about a resource which is being promoted. This property is only present if the snippet.type is promotedItem.
     */
    promotedItem?: Schema$ActivityContentDetailsPromotedItem;
    /**
     * The recommendation object contains information about a recommended resource. This property is only present if the snippet.type is recommendation.
     */
    recommendation?: Schema$ActivityContentDetailsRecommendation;
    /**
     * The social object contains details about a social network post. This property is only present if the snippet.type is social.
     */
    social?: Schema$ActivityContentDetailsSocial;
    /**
     * The subscription object contains information about a channel that a user subscribed to. This property is only present if the snippet.type is subscription.
     */
    subscription?: Schema$ActivityContentDetailsSubscription;
    /**
     * The upload object contains information about the uploaded video. This property is only present if the snippet.type is upload.
     */
    upload?: Schema$ActivityContentDetailsUpload;
  }
  /**
   * Details about a channel bulletin post.
   */
  export interface Schema$ActivityContentDetailsBulletin {
    /**
     * The resourceId object contains information that identifies the resource associated with a bulletin post. @mutable youtube.activities.insert
     */
    resourceId?: Schema$ResourceId;
  }
  /**
   * Details about a resource which was added to a channel.
   */
  export interface Schema$ActivityContentDetailsChannelItem {
    /**
     * The resourceId object contains information that identifies the resource that was added to the channel.
     */
    resourceId?: Schema$ResourceId;
  }
  /**
   * Information about a resource that received a comment.
   */
  export interface Schema$ActivityContentDetailsComment {
    /**
     * The resourceId object contains information that identifies the resource associated with the comment.
     */
    resourceId?: Schema$ResourceId;
  }
  /**
   * Information about a video that was marked as a favorite video.
   */
  export interface Schema$ActivityContentDetailsFavorite {
    /**
     * The resourceId object contains information that identifies the resource that was marked as a favorite.
     */
    resourceId?: Schema$ResourceId;
  }
  /**
   * Information about a resource that received a positive (like) rating.
   */
  export interface Schema$ActivityContentDetailsLike {
    /**
     * The resourceId object contains information that identifies the rated resource.
     */
    resourceId?: Schema$ResourceId;
  }
  /**
   * Information about a new playlist item.
   */
  export interface Schema$ActivityContentDetailsPlaylistItem {
    /**
     * The value that YouTube uses to uniquely identify the playlist.
     */
    playlistId?: string | null;
    /**
     * ID of the item within the playlist.
     */
    playlistItemId?: string | null;
    /**
     * The resourceId object contains information about the resource that was added to the playlist.
     */
    resourceId?: Schema$ResourceId;
  }
  /**
   * Details about a resource which is being promoted.
   */
  export interface Schema$ActivityContentDetailsPromotedItem {
    /**
     * The URL the client should fetch to request a promoted item.
     */
    adTag?: string | null;
    /**
     * The URL the client should ping to indicate that the user clicked through on this promoted item.
     */
    clickTrackingUrl?: string | null;
    /**
     * The URL the client should ping to indicate that the user was shown this promoted item.
     */
    creativeViewUrl?: string | null;
    /**
     * The type of call-to-action, a message to the user indicating action that can be taken.
     */
    ctaType?: string | null;
    /**
     * The custom call-to-action button text. If specified, it will override the default button text for the cta_type.
     */
    customCtaButtonText?: string | null;
    /**
     * The text description to accompany the promoted item.
     */
    descriptionText?: string | null;
    /**
     * The URL the client should direct the user to, if the user chooses to visit the advertiser's website.
     */
    destinationUrl?: string | null;
    /**
     * The list of forecasting URLs. The client should ping all of these URLs when a promoted item is not available, to indicate that a promoted item could have been shown.
     */
    forecastingUrl?: string[] | null;
    /**
     * The list of impression URLs. The client should ping all of these URLs to indicate that the user was shown this promoted item.
     */
    impressionUrl?: string[] | null;
    /**
     * The ID that YouTube uses to uniquely identify the promoted video.
     */
    videoId?: string | null;
  }
  /**
   * Information that identifies the recommended resource.
   */
  export interface Schema$ActivityContentDetailsRecommendation {
    /**
     * The reason that the resource is recommended to the user.
     */
    reason?: string | null;
    /**
     * The resourceId object contains information that identifies the recommended resource.
     */
    resourceId?: Schema$ResourceId;
    /**
     * The seedResourceId object contains information about the resource that caused the recommendation.
     */
    seedResourceId?: Schema$ResourceId;
  }
  /**
   * Details about a social network post.
   */
  export interface Schema$ActivityContentDetailsSocial {
    /**
     * The author of the social network post.
     */
    author?: string | null;
    /**
     * An image of the post's author.
     */
    imageUrl?: string | null;
    /**
     * The URL of the social network post.
     */
    referenceUrl?: string | null;
    /**
     * The resourceId object encapsulates information that identifies the resource associated with a social network post.
     */
    resourceId?: Schema$ResourceId;
    /**
     * The name of the social network.
     */
    type?: string | null;
  }
  /**
   * Information about a channel that a user subscribed to.
   */
  export interface Schema$ActivityContentDetailsSubscription {
    /**
     * The resourceId object contains information that identifies the resource that the user subscribed to.
     */
    resourceId?: Schema$ResourceId;
  }
  /**
   * Information about the uploaded video.
   */
  export interface Schema$ActivityContentDetailsUpload {
    /**
     * The ID that YouTube uses to uniquely identify the uploaded video.
     */
    videoId?: string | null;
  }
  export interface Schema$ActivityListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    items?: Schema$Activity[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#activityListResponse".
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic details about an activity, including title, description, thumbnails, activity type and group. Next ID: 12
   */
  export interface Schema$ActivitySnippet {
    /**
     * The ID that YouTube uses to uniquely identify the channel associated with the activity.
     */
    channelId?: string | null;
    /**
     * Channel title for the channel responsible for this activity
     */
    channelTitle?: string | null;
    /**
     * The description of the resource primarily associated with the activity. @mutable youtube.activities.insert
     */
    description?: string | null;
    /**
     * The group ID associated with the activity. A group ID identifies user events that are associated with the same user and resource. For example, if a user rates a video and marks the same video as a favorite, the entries for those events would have the same group ID in the user's activity feed. In your user interface, you can avoid repetition by grouping events with the same groupId value.
     */
    groupId?: string | null;
    /**
     * The date and time that the video was uploaded.
     */
    publishedAt?: string | null;
    /**
     * A map of thumbnail images associated with the resource that is primarily associated with the activity. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
     */
    thumbnails?: Schema$ThumbnailDetails;
    /**
     * The title of the resource primarily associated with the activity.
     */
    title?: string | null;
    /**
     * The type of activity that the resource describes.
     */
    type?: string | null;
  }
  /**
   * A *caption* resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video.
   */
  export interface Schema$Caption {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the caption track.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#caption".
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the caption.
     */
    snippet?: Schema$CaptionSnippet;
  }
  export interface Schema$CaptionListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of captions that match the request criteria.
     */
    items?: Schema$Caption[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#captionListResponse".
     */
    kind?: string | null;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic details about a caption track, such as its language and name.
   */
  export interface Schema$CaptionSnippet {
    /**
     * The type of audio track associated with the caption track.
     */
    audioTrackType?: string | null;
    /**
     * The reason that YouTube failed to process the caption track. This property is only present if the state property's value is failed.
     */
    failureReason?: string | null;
    /**
     * Indicates whether YouTube synchronized the caption track to the audio track in the video. The value will be true if a sync was explicitly requested when the caption track was uploaded. For example, when calling the captions.insert or captions.update methods, you can set the sync parameter to true to instruct YouTube to sync the uploaded track to the video. If the value is false, YouTube uses the time codes in the uploaded caption track to determine when to display captions.
     */
    isAutoSynced?: boolean | null;
    /**
     * Indicates whether the track contains closed captions for the deaf and hard of hearing. The default value is false.
     */
    isCC?: boolean | null;
    /**
     * Indicates whether the caption track is a draft. If the value is true, then the track is not publicly visible. The default value is false. @mutable youtube.captions.insert youtube.captions.update
     */
    isDraft?: boolean | null;
    /**
     * Indicates whether caption track is formatted for "easy reader," meaning it is at a third-grade level for language learners. The default value is false.
     */
    isEasyReader?: boolean | null;
    /**
     * Indicates whether the caption track uses large text for the vision-impaired. The default value is false.
     */
    isLarge?: boolean | null;
    /**
     * The language of the caption track. The property value is a BCP-47 language tag.
     */
    language?: string | null;
    /**
     * The date and time when the caption track was last updated.
     */
    lastUpdated?: string | null;
    /**
     * The name of the caption track. The name is intended to be visible to the user as an option during playback.
     */
    name?: string | null;
    /**
     * The caption track's status.
     */
    status?: string | null;
    /**
     * The caption track's type.
     */
    trackKind?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the video associated with the caption track. @mutable youtube.captions.insert
     */
    videoId?: string | null;
  }
  /**
   * Brief description of the live stream cdn settings.
   */
  export interface Schema$CdnSettings {
    /**
     * The format of the video stream that you are sending to Youtube.
     */
    format?: string | null;
    /**
     * The frame rate of the inbound video data.
     */
    frameRate?: string | null;
    /**
     * The ingestionInfo object contains information that YouTube provides that you need to transmit your RTMP or HTTP stream to YouTube.
     */
    ingestionInfo?: Schema$IngestionInfo;
    /**
     *  The method or protocol used to transmit the video stream.
     */
    ingestionType?: string | null;
    /**
     * The resolution of the inbound video data.
     */
    resolution?: string | null;
  }
  /**
   * A *channel* resource contains information about a YouTube channel.
   */
  export interface Schema$Channel {
    /**
     * The auditionDetails object encapsulates channel data that is relevant for YouTube Partners during the audition process.
     */
    auditDetails?: Schema$ChannelAuditDetails;
    /**
     * The brandingSettings object encapsulates information about the branding of the channel.
     */
    brandingSettings?: Schema$ChannelBrandingSettings;
    /**
     * The contentDetails object encapsulates information about the channel's content.
     */
    contentDetails?: Schema$ChannelContentDetails;
    /**
     * The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel.
     */
    contentOwnerDetails?: Schema$ChannelContentOwnerDetails;
    /**
     * The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.
     */
    conversionPings?: Schema$ChannelConversionPings;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the channel.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#channel".
     */
    kind?: string | null;
    /**
     * Localizations for different languages
     */
    localizations?: {[key: string]: Schema$ChannelLocalization} | null;
    /**
     * The snippet object contains basic details about the channel, such as its title, description, and thumbnail images.
     */
    snippet?: Schema$ChannelSnippet;
    /**
     * The statistics object encapsulates statistics for the channel.
     */
    statistics?: Schema$ChannelStatistics;
    /**
     * The status object encapsulates information about the privacy status of the channel.
     */
    status?: Schema$ChannelStatus;
    /**
     * The topicDetails object encapsulates information about Freebase topics associated with the channel.
     */
    topicDetails?: Schema$ChannelTopicDetails;
  }
  /**
   * The auditDetails object encapsulates channel data that is relevant for YouTube Partners during the audit process.
   */
  export interface Schema$ChannelAuditDetails {
    /**
     * Whether or not the channel respects the community guidelines.
     */
    communityGuidelinesGoodStanding?: boolean | null;
    /**
     * Whether or not the channel has any unresolved claims.
     */
    contentIdClaimsGoodStanding?: boolean | null;
    /**
     * Whether or not the channel has any copyright strikes.
     */
    copyrightStrikesGoodStanding?: boolean | null;
  }
  /**
   * A channel banner returned as the response to a channel_banner.insert call.
   */
  export interface Schema$ChannelBannerResource {
    etag?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#channelBannerResource".
     */
    kind?: string | null;
    /**
     * The URL of this banner image.
     */
    url?: string | null;
  }
  /**
   * Branding properties of a YouTube channel.
   */
  export interface Schema$ChannelBrandingSettings {
    /**
     * Branding properties for the channel view.
     */
    channel?: Schema$ChannelSettings;
    /**
     * Additional experimental branding properties.
     */
    hints?: Schema$PropertyValue[];
    /**
     * Branding properties for branding images.
     */
    image?: Schema$ImageSettings;
    /**
     * Branding properties for the watch page.
     */
    watch?: Schema$WatchSettings;
  }
  /**
   * Details about the content of a channel.
   */
  export interface Schema$ChannelContentDetails {
    relatedPlaylists?: {
      favorites?: string;
      likes?: string;
      uploads?: string;
      watchHistory?: string;
      watchLater?: string;
    } | null;
  }
  /**
   * The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel.
   */
  export interface Schema$ChannelContentOwnerDetails {
    /**
     * The ID of the content owner linked to the channel.
     */
    contentOwner?: string | null;
    /**
     * The date and time when the channel was linked to the content owner.
     */
    timeLinked?: string | null;
  }
  /**
   * Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.
   */
  export interface Schema$ChannelConversionPing {
    /**
     * Defines the context of the ping.
     */
    context?: string | null;
    /**
     * The url (without the schema) that the player shall send the ping to. It's at caller's descretion to decide which schema to use (http vs https) Example of a returned url: //googleads.g.doubleclick.net/pagead/ viewthroughconversion/962985656/?data=path%3DtHe_path%3Btype%3D cview%3Butuid%3DGISQtTNGYqaYl4sKxoVvKA&labe=default The caller must append biscotti authentication (ms param in case of mobile, for example) to this ping.
     */
    conversionUrl?: string | null;
  }
  /**
   * The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.
   */
  export interface Schema$ChannelConversionPings {
    /**
     * Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.
     */
    pings?: Schema$ChannelConversionPing[];
  }
  export interface Schema$ChannelListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    items?: Schema$Channel[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#channelListResponse".
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Channel localization setting
   */
  export interface Schema$ChannelLocalization {
    /**
     * The localized strings for channel's description.
     */
    description?: string | null;
    /**
     * The localized strings for channel's title.
     */
    title?: string | null;
  }
  export interface Schema$ChannelProfileDetails {
    /**
     * The YouTube channel ID.
     */
    channelId?: string | null;
    /**
     * The channel's URL.
     */
    channelUrl?: string | null;
    /**
     * The channel's display name.
     */
    displayName?: string | null;
    /**
     * The channels's avatar URL.
     */
    profileImageUrl?: string | null;
  }
  export interface Schema$ChannelSection {
    /**
     * The contentDetails object contains details about the channel section content, such as a list of playlists or channels featured in the section.
     */
    contentDetails?: Schema$ChannelSectionContentDetails;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the channel section.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#channelSection".
     */
    kind?: string | null;
    /**
     * Localizations for different languages
     */
    localizations?: {[key: string]: Schema$ChannelSectionLocalization} | null;
    /**
     * The snippet object contains basic details about the channel section, such as its type, style and title.
     */
    snippet?: Schema$ChannelSectionSnippet;
    /**
     * The targeting object contains basic targeting settings about the channel section.
     */
    targeting?: Schema$ChannelSectionTargeting;
  }
  /**
   * Details about a channelsection, including playlists and channels.
   */
  export interface Schema$ChannelSectionContentDetails {
    /**
     * The channel ids for type multiple_channels.
     */
    channels?: string[] | null;
    /**
     * The playlist ids for type single_playlist and multiple_playlists. For singlePlaylist, only one playlistId is allowed.
     */
    playlists?: string[] | null;
  }
  export interface Schema$ChannelSectionListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of ChannelSections that match the request criteria.
     */
    items?: Schema$ChannelSection[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#channelSectionListResponse".
     */
    kind?: string | null;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * ChannelSection localization setting
   */
  export interface Schema$ChannelSectionLocalization {
    /**
     * The localized strings for channel section's title.
     */
    title?: string | null;
  }
  /**
   * Basic details about a channel section, including title, style and position.
   */
  export interface Schema$ChannelSectionSnippet {
    /**
     * The ID that YouTube uses to uniquely identify the channel that published the channel section.
     */
    channelId?: string | null;
    /**
     * The language of the channel section's default title and description.
     */
    defaultLanguage?: string | null;
    /**
     * Localized title, read-only.
     */
    localized?: Schema$ChannelSectionLocalization;
    /**
     * The position of the channel section in the channel.
     */
    position?: number | null;
    /**
     * The style of the channel section.
     */
    style?: string | null;
    /**
     * The channel section's title for multiple_playlists and multiple_channels.
     */
    title?: string | null;
    /**
     * The type of the channel section.
     */
    type?: string | null;
  }
  /**
   * ChannelSection targeting setting.
   */
  export interface Schema$ChannelSectionTargeting {
    /**
     * The country the channel section is targeting.
     */
    countries?: string[] | null;
    /**
     * The language the channel section is targeting.
     */
    languages?: string[] | null;
    /**
     * The region the channel section is targeting.
     */
    regions?: string[] | null;
  }
  /**
   * Branding properties for the channel view.
   */
  export interface Schema$ChannelSettings {
    /**
     * The country of the channel.
     */
    country?: string | null;
    defaultLanguage?: string | null;
    /**
     * Which content tab users should see when viewing the channel.
     */
    defaultTab?: string | null;
    /**
     * Specifies the channel description.
     */
    description?: string | null;
    /**
     * Title for the featured channels tab.
     */
    featuredChannelsTitle?: string | null;
    /**
     * The list of featured channels.
     */
    featuredChannelsUrls?: string[] | null;
    /**
     * Lists keywords associated with the channel, comma-separated.
     */
    keywords?: string | null;
    /**
     * Whether user-submitted comments left on the channel page need to be approved by the channel owner to be publicly visible.
     */
    moderateComments?: boolean | null;
    /**
     * A prominent color that can be rendered on this channel page.
     */
    profileColor?: string | null;
    /**
     * Whether the tab to browse the videos should be displayed.
     */
    showBrowseView?: boolean | null;
    /**
     * Whether related channels should be proposed.
     */
    showRelatedChannels?: boolean | null;
    /**
     * Specifies the channel title.
     */
    title?: string | null;
    /**
     * The ID for a Google Analytics account to track and measure traffic to the channels.
     */
    trackingAnalyticsAccountId?: string | null;
    /**
     * The trailer of the channel, for users that are not subscribers.
     */
    unsubscribedTrailer?: string | null;
  }
  /**
   * Basic details about a channel, including title, description and thumbnails.
   */
  export interface Schema$ChannelSnippet {
    /**
     * The country of the channel.
     */
    country?: string | null;
    /**
     * The custom url of the channel.
     */
    customUrl?: string | null;
    /**
     * The language of the channel's default title and description.
     */
    defaultLanguage?: string | null;
    /**
     * The description of the channel.
     */
    description?: string | null;
    /**
     * Localized title and description, read-only.
     */
    localized?: Schema$ChannelLocalization;
    /**
     * The date and time that the channel was created.
     */
    publishedAt?: string | null;
    /**
     * A map of thumbnail images associated with the channel. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail. When displaying thumbnails in your application, make sure that your code uses the image URLs exactly as they are returned in API responses. For example, your application should not use the http domain instead of the https domain in a URL returned in an API response. Beginning in July 2018, channel thumbnail URLs will only be available in the https domain, which is how the URLs appear in API responses. After that time, you might see broken images in your application if it tries to load YouTube images from the http domain. Thumbnail images might be empty for newly created channels and might take up to one day to populate.
     */
    thumbnails?: Schema$ThumbnailDetails;
    /**
     * The channel's title.
     */
    title?: string | null;
  }
  /**
   * Statistics about a channel: number of subscribers, number of videos in the channel, etc.
   */
  export interface Schema$ChannelStatistics {
    /**
     * The number of comments for the channel.
     */
    commentCount?: string | null;
    /**
     * Whether or not the number of subscribers is shown for this user.
     */
    hiddenSubscriberCount?: boolean | null;
    /**
     * The number of subscribers that the channel has.
     */
    subscriberCount?: string | null;
    /**
     * The number of videos uploaded to the channel.
     */
    videoCount?: string | null;
    /**
     * The number of times the channel has been viewed.
     */
    viewCount?: string | null;
  }
  /**
   * JSON template for the status part of a channel.
   */
  export interface Schema$ChannelStatus {
    /**
     * Whether the channel is considered ypp monetization enabled. See go/yppornot for more details.
     */
    isChannelMonetizationEnabled?: boolean | null;
    /**
     * If true, then the user is linked to either a YouTube username or G+ account. Otherwise, the user doesn't have a public YouTube identity.
     */
    isLinked?: boolean | null;
    /**
     * The long uploads status of this channel. See https://support.google.com/youtube/answer/71673 for more information.
     */
    longUploadsStatus?: string | null;
    madeForKids?: boolean | null;
    /**
     * Privacy status of the channel.
     */
    privacyStatus?: string | null;
    selfDeclaredMadeForKids?: boolean | null;
  }
  /**
   * Freebase topic information related to the channel.
   */
  export interface Schema$ChannelTopicDetails {
    /**
     * A list of Wikipedia URLs that describe the channel's content.
     */
    topicCategories?: string[] | null;
    /**
     * A list of Freebase topic IDs associated with the channel. You can retrieve information about each topic using the Freebase Topic API.
     */
    topicIds?: string[] | null;
  }
  /**
   * Information specific to a store on a merchandising platform linked to a YouTube channel.
   */
  export interface Schema$ChannelToStoreLinkDetails {
    /**
     * Information specific to billing (read-only).
     */
    billingDetails?: Schema$ChannelToStoreLinkDetailsBillingDetails;
    /**
     * Information specific to merchant affiliate program (read-only).
     */
    merchantAffiliateProgramDetails?: Schema$ChannelToStoreLinkDetailsMerchantAffiliateProgramDetails;
    /**
     * Google Merchant Center id of the store.
     */
    merchantId?: string | null;
    /**
     * Name of the store.
     */
    storeName?: string | null;
    /**
     * Landing page of the store.
     */
    storeUrl?: string | null;
  }
  /**
   * Information specific to billing.
   */
  export interface Schema$ChannelToStoreLinkDetailsBillingDetails {
    /**
     * The current billing profile status.
     */
    billingStatus?: string | null;
  }
  /**
   * Information specific to merchant affiliate program.
   */
  export interface Schema$ChannelToStoreLinkDetailsMerchantAffiliateProgramDetails {
    /**
     * The current merchant affiliate program status.
     */
    status?: string | null;
  }
  /**
   * A *comment* represents a single YouTube comment.
   */
  export interface Schema$Comment {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the comment.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#comment".
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the comment.
     */
    snippet?: Schema$CommentSnippet;
  }
  export interface Schema$CommentListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of comments that match the request criteria.
     */
    items?: Schema$Comment[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#commentListResponse".
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic details about a comment, such as its author and text.
   */
  export interface Schema$CommentSnippet {
    authorChannelId?: Schema$CommentSnippetAuthorChannelId;
    /**
     * Link to the author's YouTube channel, if any.
     */
    authorChannelUrl?: string | null;
    /**
     * The name of the user who posted the comment.
     */
    authorDisplayName?: string | null;
    /**
     * The URL for the avatar of the user who posted the comment.
     */
    authorProfileImageUrl?: string | null;
    /**
     * Whether the current viewer can rate this comment.
     */
    canRate?: boolean | null;
    /**
     * The id of the corresponding YouTube channel. In case of a channel comment this is the channel the comment refers to. In case of a video or post comment it's the video/post's channel.
     */
    channelId?: string | null;
    /**
     * The total number of likes this comment has received.
     */
    likeCount?: number | null;
    /**
     * The comment's moderation status. Will not be set if the comments were requested through the id filter.
     */
    moderationStatus?: string | null;
    /**
     * The unique id of the top-level comment, only set for replies.
     */
    parentId?: string | null;
    /**
     * The ID of the post the comment refers to, if any.
     */
    postId?: string | null;
    /**
     * The date and time when the comment was originally published.
     */
    publishedAt?: string | null;
    /**
     * The comment's text. The format is either plain text or HTML dependent on what has been requested. Even the plain text representation may differ from the text originally posted in that it may replace video links with video titles etc.
     */
    textDisplay?: string | null;
    /**
     * The comment's original raw text as initially posted or last updated. The original text will only be returned if it is accessible to the viewer, which is only guaranteed if the viewer is the comment's author.
     */
    textOriginal?: string | null;
    /**
     * The date and time when the comment was last updated.
     */
    updatedAt?: string | null;
    /**
     * The ID of the video the comment refers to, if any.
     */
    videoId?: string | null;
    /**
     * The rating the viewer has given to this comment. For the time being this will never return RATE_TYPE_DISLIKE and instead return RATE_TYPE_NONE. This may change in the future.
     */
    viewerRating?: string | null;
  }
  /**
   * Contains the id of the author's YouTube channel, if any.
   */
  export interface Schema$CommentSnippetAuthorChannelId {
    /**
     * The id of the author's YouTube channel.
     */
    value?: string | null;
  }
  /**
   * A *comment thread* represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies.
   */
  export interface Schema$CommentThread {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the comment thread.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#commentThread".
     */
    kind?: string | null;
    /**
     * The replies object contains a limited number of replies (if any) to the top level comment found in the snippet.
     */
    replies?: Schema$CommentThreadReplies;
    /**
     * The snippet object contains basic details about the comment thread and also the top level comment.
     */
    snippet?: Schema$CommentThreadSnippet;
  }
  export interface Schema$CommentThreadListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of comment threads that match the request criteria.
     */
    items?: Schema$CommentThread[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#commentThreadListResponse".
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Comments written in (direct or indirect) reply to the top level comment.
   */
  export interface Schema$CommentThreadReplies {
    /**
     * A limited number of replies. Unless the number of replies returned equals total_reply_count in the snippet the returned replies are only a subset of the total number of replies.
     */
    comments?: Schema$Comment[];
  }
  /**
   * Basic details about a comment thread.
   */
  export interface Schema$CommentThreadSnippet {
    /**
     * Whether the current viewer of the thread can reply to it. This is viewer specific - other viewers may see a different value for this field.
     */
    canReply?: boolean | null;
    /**
     * The YouTube channel the comments in the thread refer to or the channel with the video the comments refer to. If neither video_id nor post_id is set the comments refer to the channel itself.
     */
    channelId?: string | null;
    /**
     * Whether the thread (and therefore all its comments) is visible to all YouTube users.
     */
    isPublic?: boolean | null;
    /**
     * The ID of the post the comments refer to, if any.
     */
    postId?: string | null;
    /**
     * The top level comment of this thread.
     */
    topLevelComment?: Schema$Comment;
    /**
     * The total number of replies (not including the top level comment).
     */
    totalReplyCount?: number | null;
    /**
     * The ID of the video the comments refer to, if any.
     */
    videoId?: string | null;
  }
  /**
   * Ratings schemes. The country-specific ratings are mostly for movies and shows. LINT.IfChange
   */
  export interface Schema$ContentRating {
    /**
     * The video's Australian Classification Board (ACB) or Australian Communications and Media Authority (ACMA) rating. ACMA ratings are used to classify children's television programming.
     */
    acbRating?: string | null;
    /**
     * The video's rating from Italy's Autorità per le Garanzie nelle Comunicazioni (AGCOM).
     */
    agcomRating?: string | null;
    /**
     * The video's Anatel (Asociación Nacional de Televisión) rating for Chilean television.
     */
    anatelRating?: string | null;
    /**
     * The video's British Board of Film Classification (BBFC) rating.
     */
    bbfcRating?: string | null;
    /**
     * The video's rating from Thailand's Board of Film and Video Censors.
     */
    bfvcRating?: string | null;
    /**
     * The video's rating from the Austrian Board of Media Classification (Bundesministerium für Unterricht, Kunst und Kultur).
     */
    bmukkRating?: string | null;
    /**
     * The video's rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian French-language broadcasts. For more information, see the Canadian Broadcast Standards Council website.
     */
    catvfrRating?: string | null;
    /**
     * Rating system for Canadian TV - Canadian TV Classification System The video's rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian English-language broadcasts. For more information, see the Canadian Broadcast Standards Council website.
     */
    catvRating?: string | null;
    /**
     * The video's Central Board of Film Certification (CBFC - India) rating.
     */
    cbfcRating?: string | null;
    /**
     * The video's Consejo de Calificación Cinematográfica (Chile) rating.
     */
    cccRating?: string | null;
    /**
     * The video's rating from Portugal's Comissão de Classificação de Espect´culos.
     */
    cceRating?: string | null;
    /**
     * The video's rating in Switzerland.
     */
    chfilmRating?: string | null;
    /**
     * The video's Canadian Home Video Rating System (CHVRS) rating.
     */
    chvrsRating?: string | null;
    /**
     * The video's rating from the Commission de Contrôle des Films (Belgium).
     */
    cicfRating?: string | null;
    /**
     * The video's rating from Romania's CONSILIUL NATIONAL AL AUDIOVIZUALULUI (CNA).
     */
    cnaRating?: string | null;
    /**
     * Rating system in France - Commission de classification cinematographique
     */
    cncRating?: string | null;
    /**
     * The video's rating from France's Conseil supérieur de l’audiovisuel, which rates broadcast content.
     */
    csaRating?: string | null;
    /**
     * The video's rating from Luxembourg's Commission de surveillance de la classification des films (CSCF).
     */
    cscfRating?: string | null;
    /**
     * The video's rating in the Czech Republic.
     */
    czfilmRating?: string | null;
    /**
     * The video's Departamento de Justiça, Classificação, Qualificação e Títulos (DJCQT - Brazil) rating.
     */
    djctqRating?: string | null;
    /**
     * Reasons that explain why the video received its DJCQT (Brazil) rating.
     */
    djctqRatingReasons?: string[] | null;
    /**
     * Rating system in Turkey - Evaluation and Classification Board of the Ministry of Culture and Tourism
     */
    ecbmctRating?: string | null;
    /**
     * The video's rating in Estonia.
     */
    eefilmRating?: string | null;
    /**
     * The video's rating in Egypt.
     */
    egfilmRating?: string | null;
    /**
     * The video's Eirin (映倫) rating. Eirin is the Japanese rating system.
     */
    eirinRating?: string | null;
    /**
     * The video's rating from Malaysia's Film Censorship Board.
     */
    fcbmRating?: string | null;
    /**
     * The video's rating from Hong Kong's Office for Film, Newspaper and Article Administration.
     */
    fcoRating?: string | null;
    /**
     * This property has been deprecated. Use the contentDetails.contentRating.cncRating instead.
     */
    fmocRating?: string | null;
    /**
     * The video's rating from South Africa's Film and Publication Board.
     */
    fpbRating?: string | null;
    /**
     * Reasons that explain why the video received its FPB (South Africa) rating.
     */
    fpbRatingReasons?: string[] | null;
    /**
     * The video's Freiwillige Selbstkontrolle der Filmwirtschaft (FSK - Germany) rating.
     */
    fskRating?: string | null;
    /**
     * The video's rating in Greece.
     */
    grfilmRating?: string | null;
    /**
     * The video's Instituto de la Cinematografía y de las Artes Audiovisuales (ICAA - Spain) rating.
     */
    icaaRating?: string | null;
    /**
     * The video's Irish Film Classification Office (IFCO - Ireland) rating. See the IFCO website for more information.
     */
    ifcoRating?: string | null;
    /**
     * The video's rating in Israel.
     */
    ilfilmRating?: string | null;
    /**
     * The video's INCAA (Instituto Nacional de Cine y Artes Audiovisuales - Argentina) rating.
     */
    incaaRating?: string | null;
    /**
     * The video's rating from the Kenya Film Classification Board.
     */
    kfcbRating?: string | null;
    /**
     * The video's NICAM/Kijkwijzer rating from the Nederlands Instituut voor de Classificatie van Audiovisuele Media (Netherlands).
     */
    kijkwijzerRating?: string | null;
    /**
     * The video's Korea Media Rating Board (영상물등급위원회) rating. The KMRB rates videos in South Korea.
     */
    kmrbRating?: string | null;
    /**
     * The video's rating from Indonesia's Lembaga Sensor Film.
     */
    lsfRating?: string | null;
    /**
     * The video's rating from Malta's Film Age-Classification Board.
     */
    mccaaRating?: string | null;
    /**
     * The video's rating from the Danish Film Institute's (Det Danske Filminstitut) Media Council for Children and Young People.
     */
    mccypRating?: string | null;
    /**
     * The video's rating system for Vietnam - MCST
     */
    mcstRating?: string | null;
    /**
     * The video's rating from Singapore's Media Development Authority (MDA) and, specifically, it's Board of Film Censors (BFC).
     */
    mdaRating?: string | null;
    /**
     * The video's rating from Medietilsynet, the Norwegian Media Authority.
     */
    medietilsynetRating?: string | null;
    /**
     * The video's rating from Finland's Kansallinen Audiovisuaalinen Instituutti (National Audiovisual Institute).
     */
    mekuRating?: string | null;
    /**
     * The rating system for MENA countries, a clone of MPAA. It is needed to prevent titles go live w/o additional QC check, since some of them can be inappropriate for the countries at all. See b/33408548 for more details.
     */
    menaMpaaRating?: string | null;
    /**
     * The video's rating from the Ministero dei Beni e delle Attività Culturali e del Turismo (Italy).
     */
    mibacRating?: string | null;
    /**
     * The video's Ministerio de Cultura (Colombia) rating.
     */
    mocRating?: string | null;
    /**
     * The video's rating from Taiwan's Ministry of Culture (文化部).
     */
    moctwRating?: string | null;
    /**
     * The video's Motion Picture Association of America (MPAA) rating.
     */
    mpaaRating?: string | null;
    /**
     * The rating system for trailer, DVD, and Ad in the US. See http://movielabs.com/md/ratings/v2.3/html/US_MPAAT_Ratings.html.
     */
    mpaatRating?: string | null;
    /**
     * The video's rating from the Movie and Television Review and Classification Board (Philippines).
     */
    mtrcbRating?: string | null;
    /**
     * The video's rating in Poland.
     */
    nbcplRating?: string | null;
    /**
     * The video's rating from the Maldives National Bureau of Classification.
     */
    nbcRating?: string | null;
    /**
     * The video's rating from the Bulgarian National Film Center.
     */
    nfrcRating?: string | null;
    /**
     * The video's rating from Nigeria's National Film and Video Censors Board.
     */
    nfvcbRating?: string | null;
    /**
     * The video's rating from the Nacionãlais Kino centrs (National Film Centre of Latvia).
     */
    nkclvRating?: string | null;
    /**
     * The National Media Council ratings system for United Arab Emirates.
     */
    nmcRating?: string | null;
    /**
     * The video's Office of Film and Literature Classification (OFLC - New Zealand) rating.
     */
    oflcRating?: string | null;
    /**
     * The video's rating in Peru.
     */
    pefilmRating?: string | null;
    /**
     * The video's rating from the Hungarian Nemzeti Filmiroda, the Rating Committee of the National Office of Film.
     */
    rcnofRating?: string | null;
    /**
     * The video's rating in Venezuela.
     */
    resorteviolenciaRating?: string | null;
    /**
     * The video's General Directorate of Radio, Television and Cinematography (Mexico) rating.
     */
    rtcRating?: string | null;
    /**
     * The video's rating from Ireland's Raidió Teilifís Éireann.
     */
    rteRating?: string | null;
    /**
     * The video's National Film Registry of the Russian Federation (MKRF - Russia) rating.
     */
    russiaRating?: string | null;
    /**
     * The video's rating in Slovakia.
     */
    skfilmRating?: string | null;
    /**
     * The video's rating in Iceland.
     */
    smaisRating?: string | null;
    /**
     * The video's rating from Statens medieråd (Sweden's National Media Council).
     */
    smsaRating?: string | null;
    /**
     * The video's TV Parental Guidelines (TVPG) rating.
     */
    tvpgRating?: string | null;
    /**
     * A rating that YouTube uses to identify age-restricted content.
     */
    ytRating?: string | null;
  }
  /**
   * Note that there may be a 5-second end-point resolution issue. For instance, if a cuepoint comes in for 22:03:27, we may stuff the cuepoint into 22:03:25 or 22:03:30, depending. This is an artifact of HLS.
   */
  export interface Schema$Cuepoint {
    cueType?: string | null;
    /**
     * The duration of this cuepoint.
     */
    durationSecs?: number | null;
    etag?: string | null;
    /**
     * The identifier for cuepoint resource.
     */
    id?: string | null;
    /**
     * The time when the cuepoint should be inserted by offset to the broadcast actual start time.
     */
    insertionOffsetTimeMs?: string | null;
    /**
     * The wall clock time at which the cuepoint should be inserted. Only one of insertion_offset_time_ms and walltime_ms may be set at a time.
     */
    walltimeMs?: string | null;
  }
  /**
   * Schedule to insert cuepoints into a broadcast by ads automator.
   */
  export interface Schema$CuepointSchedule {
    /**
     * This field is semantically required. If it is set false or not set, other fields in this message will be ignored.
     */
    enabled?: boolean | null;
    /**
     * If set, automatic cuepoint insertion is paused until this timestamp ("No Ad Zone"). The value is specified in ISO 8601 format.
     */
    pauseAdsUntil?: string | null;
    /**
     * Interval frequency in seconds that api uses to insert cuepoints automatically.
     */
    repeatIntervalSecs?: number | null;
    /**
     * The strategy to use when scheduling cuepoints.
     */
    scheduleStrategy?: string | null;
  }
  export interface Schema$Entity {
    id?: string | null;
    typeId?: string | null;
    url?: string | null;
  }
  /**
   * Geographical coordinates of a point, in WGS84.
   */
  export interface Schema$GeoPoint {
    /**
     * Altitude above the reference ellipsoid, in meters.
     */
    altitude?: number | null;
    /**
     * Latitude in degrees.
     */
    latitude?: number | null;
    /**
     * Longitude in degrees.
     */
    longitude?: number | null;
  }
  /**
   * An *i18nLanguage* resource identifies a UI language currently supported by YouTube.
   */
  export interface Schema$I18nLanguage {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the i18n language.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#i18nLanguage".
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the i18n language, such as language code and human-readable name.
     */
    snippet?: Schema$I18nLanguageSnippet;
  }
  export interface Schema$I18nLanguageListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of supported i18n languages. In this map, the i18n language ID is the map key, and its value is the corresponding i18nLanguage resource.
     */
    items?: Schema$I18nLanguage[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#i18nLanguageListResponse".
     */
    kind?: string | null;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic details about an i18n language, such as language code and human-readable name.
   */
  export interface Schema$I18nLanguageSnippet {
    /**
     * A short BCP-47 code that uniquely identifies a language.
     */
    hl?: string | null;
    /**
     * The human-readable name of the language in the language itself.
     */
    name?: string | null;
  }
  /**
   * A *i18nRegion* resource identifies a region where YouTube is available.
   */
  export interface Schema$I18nRegion {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the i18n region.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#i18nRegion".
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the i18n region, such as region code and human-readable name.
     */
    snippet?: Schema$I18nRegionSnippet;
  }
  export interface Schema$I18nRegionListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of regions where YouTube is available. In this map, the i18n region ID is the map key, and its value is the corresponding i18nRegion resource.
     */
    items?: Schema$I18nRegion[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#i18nRegionListResponse".
     */
    kind?: string | null;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic details about an i18n region, such as region code and human-readable name.
   */
  export interface Schema$I18nRegionSnippet {
    /**
     * The region code as a 2-letter ISO country code.
     */
    gl?: string | null;
    /**
     * The human-readable name of the region.
     */
    name?: string | null;
  }
  /**
   * Branding properties for images associated with the channel.
   */
  export interface Schema$ImageSettings {
    /**
     * The URL for the background image shown on the video watch page. The image should be 1200px by 615px, with a maximum file size of 128k.
     */
    backgroundImageUrl?: Schema$LocalizedProperty;
    /**
     * This is generated when a ChannelBanner.Insert request has succeeded for the given channel.
     */
    bannerExternalUrl?: string | null;
    /**
     * Banner image. Desktop size (1060x175).
     */
    bannerImageUrl?: string | null;
    /**
     * Banner image. Mobile size high resolution (1440x395).
     */
    bannerMobileExtraHdImageUrl?: string | null;
    /**
     * Banner image. Mobile size high resolution (1280x360).
     */
    bannerMobileHdImageUrl?: string | null;
    /**
     * Banner image. Mobile size (640x175).
     */
    bannerMobileImageUrl?: string | null;
    /**
     * Banner image. Mobile size low resolution (320x88).
     */
    bannerMobileLowImageUrl?: string | null;
    /**
     * Banner image. Mobile size medium/high resolution (960x263).
     */
    bannerMobileMediumHdImageUrl?: string | null;
    /**
     * Banner image. Tablet size extra high resolution (2560x424).
     */
    bannerTabletExtraHdImageUrl?: string | null;
    /**
     * Banner image. Tablet size high resolution (2276x377).
     */
    bannerTabletHdImageUrl?: string | null;
    /**
     * Banner image. Tablet size (1707x283).
     */
    bannerTabletImageUrl?: string | null;
    /**
     * Banner image. Tablet size low resolution (1138x188).
     */
    bannerTabletLowImageUrl?: string | null;
    /**
     * Banner image. TV size high resolution (1920x1080).
     */
    bannerTvHighImageUrl?: string | null;
    /**
     * Banner image. TV size extra high resolution (2120x1192).
     */
    bannerTvImageUrl?: string | null;
    /**
     * Banner image. TV size low resolution (854x480).
     */
    bannerTvLowImageUrl?: string | null;
    /**
     * Banner image. TV size medium resolution (1280x720).
     */
    bannerTvMediumImageUrl?: string | null;
    /**
     * The image map script for the large banner image.
     */
    largeBrandedBannerImageImapScript?: Schema$LocalizedProperty;
    /**
     * The URL for the 854px by 70px image that appears below the video player in the expanded video view of the video watch page.
     */
    largeBrandedBannerImageUrl?: Schema$LocalizedProperty;
    /**
     * The image map script for the small banner image.
     */
    smallBrandedBannerImageImapScript?: Schema$LocalizedProperty;
    /**
     * The URL for the 640px by 70px banner image that appears below the video player in the default view of the video watch page. The URL for the image that appears above the top-left corner of the video player. This is a 25-pixel-high image with a flexible width that cannot exceed 170 pixels.
     */
    smallBrandedBannerImageUrl?: Schema$LocalizedProperty;
    /**
     * The URL for a 1px by 1px tracking pixel that can be used to collect statistics for views of the channel or video pages.
     */
    trackingImageUrl?: string | null;
    watchIconImageUrl?: string | null;
  }
  /**
   * Describes information necessary for ingesting an RTMP, HTTP, or SRT stream.
   */
  export interface Schema$IngestionInfo {
    /**
     * The backup ingestion URL that you should use to stream video to YouTube. You have the option of simultaneously streaming the content that you are sending to the ingestionAddress to this URL.
     */
    backupIngestionAddress?: string | null;
    /**
     * The primary ingestion URL that you should use to stream video to YouTube. You must stream video to this URL. Depending on which application or tool you use to encode your video stream, you may need to enter the stream URL and stream name separately or you may need to concatenate them in the following format: *STREAM_URL/STREAM_NAME*
     */
    ingestionAddress?: string | null;
    /**
     * This ingestion url may be used instead of backupIngestionAddress in order to stream via RTMPS. Not applicable to non-RTMP streams.
     */
    rtmpsBackupIngestionAddress?: string | null;
    /**
     * This ingestion url may be used instead of ingestionAddress in order to stream via RTMPS. Not applicable to non-RTMP streams.
     */
    rtmpsIngestionAddress?: string | null;
    /**
     * The stream name that YouTube assigns to the video stream.
     */
    streamName?: string | null;
  }
  /**
   * Describes an invideo branding.
   */
  export interface Schema$InvideoBranding {
    /**
     * The bytes the uploaded image. Only used in api to youtube communication.
     */
    imageBytes?: string | null;
    /**
     * The url of the uploaded image. Only used in apiary to api communication.
     */
    imageUrl?: string | null;
    /**
     * The spatial position within the video where the branding watermark will be displayed.
     */
    position?: Schema$InvideoPosition;
    /**
     * The channel to which this branding links. If not present it defaults to the current channel.
     */
    targetChannelId?: string | null;
    /**
     * The temporal position within the video where watermark will be displayed.
     */
    timing?: Schema$InvideoTiming;
  }
  /**
   * Describes the spatial position of a visual widget inside a video. It is a union of various position types, out of which only will be set one.
   */
  export interface Schema$InvideoPosition {
    /**
     * Describes in which corner of the video the visual widget will appear.
     */
    cornerPosition?: string | null;
    /**
     * Defines the position type.
     */
    type?: string | null;
  }
  /**
   * Describes a temporal position of a visual widget inside a video.
   */
  export interface Schema$InvideoTiming {
    /**
     * Defines the duration in milliseconds for which the promotion should be displayed. If missing, the client should use the default.
     */
    durationMs?: string | null;
    /**
     * Defines the time at which the promotion will appear. Depending on the value of type the value of the offsetMs field will represent a time offset from the start or from the end of the video, expressed in milliseconds.
     */
    offsetMs?: string | null;
    /**
     * Describes a timing type. If the value is offsetFromStart, then the offsetMs field represents an offset from the start of the video. If the value is offsetFromEnd, then the offsetMs field represents an offset from the end of the video.
     */
    type?: string | null;
  }
  export interface Schema$LanguageTag {
    value?: string | null;
  }
  export interface Schema$LevelDetails {
    /**
     * The name that should be used when referring to this level.
     */
    displayName?: string | null;
  }
  /**
   * A *liveBroadcast* resource represents an event that will be streamed, via live video, on YouTube.
   */
  export interface Schema$LiveBroadcast {
    /**
     * The contentDetails object contains information about the event's video content, such as whether the content can be shown in an embedded video player or if it will be archived and therefore available for viewing after the event has concluded.
     */
    contentDetails?: Schema$LiveBroadcastContentDetails;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube assigns to uniquely identify the broadcast.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcast".
     */
    kind?: string | null;
    /**
     * The monetizationDetails object contains information about the event's monetization details.
     */
    monetizationDetails?: Schema$LiveBroadcastMonetizationDetails;
    /**
     * The snippet object contains basic details about the event, including its title, description, start time, and end time.
     */
    snippet?: Schema$LiveBroadcastSnippet;
    /**
     * The statistics object contains info about the event's current stats. These include concurrent viewers and total chat count. Statistics can change (in either direction) during the lifetime of an event. Statistics are only returned while the event is live.
     */
    statistics?: Schema$LiveBroadcastStatistics;
    /**
     * The status object contains information about the event's status.
     */
    status?: Schema$LiveBroadcastStatus;
  }
  /**
   * Detailed settings of a broadcast.
   */
  export interface Schema$LiveBroadcastContentDetails {
    /**
     * This value uniquely identifies the live stream bound to the broadcast.
     */
    boundStreamId?: string | null;
    /**
     * The date and time that the live stream referenced by boundStreamId was last updated.
     */
    boundStreamLastUpdateTimeMs?: string | null;
    closedCaptionsType?: string | null;
    /**
     * This setting indicates whether auto start is enabled for this broadcast. The default value for this property is false. This setting can only be used by Events.
     */
    enableAutoStart?: boolean | null;
    /**
     * This setting indicates whether auto stop is enabled for this broadcast. The default value for this property is false. This setting can only be used by Events.
     */
    enableAutoStop?: boolean | null;
    /**
     * This setting indicates whether HTTP POST closed captioning is enabled for this broadcast. The ingestion URL of the closed captions is returned through the liveStreams API. This is mutually exclusive with using the closed_captions_type property, and is equivalent to setting closed_captions_type to CLOSED_CAPTIONS_HTTP_POST.
     */
    enableClosedCaptions?: boolean | null;
    /**
     * This setting indicates whether YouTube should enable content encryption for the broadcast.
     */
    enableContentEncryption?: boolean | null;
    /**
     * This setting determines whether viewers can access DVR controls while watching the video. DVR controls enable the viewer to control the video playback experience by pausing, rewinding, or fast forwarding content. The default value for this property is true. *Important:* You must set the value to true and also set the enableArchive property's value to true if you want to make playback available immediately after the broadcast ends.
     */
    enableDvr?: boolean | null;
    /**
     * This setting indicates whether the broadcast video can be played in an embedded player. If you choose to archive the video (using the enableArchive property), this setting will also apply to the archived video.
     */
    enableEmbed?: boolean | null;
    /**
     * Indicates whether this broadcast has low latency enabled.
     */
    enableLowLatency?: boolean | null;
    /**
     * If both this and enable_low_latency are set, they must match. LATENCY_NORMAL should match enable_low_latency=false LATENCY_LOW should match enable_low_latency=true LATENCY_ULTRA_LOW should have enable_low_latency omitted.
     */
    latencyPreference?: string | null;
    /**
     * The mesh for projecting the video if projection is mesh. The mesh value must be a UTF-8 string containing the base-64 encoding of 3D mesh data that follows the Spherical Video V2 RFC specification for an mshp box, excluding the box size and type but including the following four reserved zero bytes for the version and flags.
     */
    mesh?: string | null;
    /**
     * The monitorStream object contains information about the monitor stream, which the broadcaster can use to review the event content before the broadcast stream is shown publicly.
     */
    monitorStream?: Schema$MonitorStreamInfo;
    /**
     * The projection format of this broadcast. This defaults to rectangular.
     */
    projection?: string | null;
    /**
     * Automatically start recording after the event goes live. The default value for this property is true. *Important:* You must also set the enableDvr property's value to true if you want the playback to be available immediately after the broadcast ends. If you set this property's value to true but do not also set the enableDvr property to true, there may be a delay of around one day before the archived video will be available for playback.
     */
    recordFromStart?: boolean | null;
    /**
     * This setting indicates whether the broadcast should automatically begin with an in-stream slate when you update the broadcast's status to live. After updating the status, you then need to send a liveCuepoints.insert request that sets the cuepoint's eventState to end to remove the in-stream slate and make your broadcast stream visible to viewers.
     */
    startWithSlate?: boolean | null;
    /**
     * The 3D stereo layout of this broadcast. This defaults to mono.
     */
    stereoLayout?: string | null;
  }
  export interface Schema$LiveBroadcastListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of broadcasts that match the request criteria.
     */
    items?: Schema$LiveBroadcast[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#liveBroadcastListResponse".
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Monetization settings of a broadcast.
   */
  export interface Schema$LiveBroadcastMonetizationDetails {
    cuepointSchedule?: Schema$CuepointSchedule;
  }
  /**
   * Basic broadcast information.
   */
  export interface Schema$LiveBroadcastSnippet {
    /**
     * The date and time that the broadcast actually ended. This information is only available once the broadcast's state is complete.
     */
    actualEndTime?: string | null;
    /**
     * The date and time that the broadcast actually started. This information is only available once the broadcast's state is live.
     */
    actualStartTime?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the channel that is publishing the broadcast.
     */
    channelId?: string | null;
    /**
     * The broadcast's description. As with the title, you can set this field by modifying the broadcast resource or by setting the description field of the corresponding video resource.
     */
    description?: string | null;
    /**
     * Indicates whether this broadcast is the default broadcast. Internal only.
     */
    isDefaultBroadcast?: boolean | null;
    /**
     * The id of the live chat for this broadcast.
     */
    liveChatId?: string | null;
    /**
     * The date and time that the broadcast was added to YouTube's live broadcast schedule.
     */
    publishedAt?: string | null;
    /**
     * The date and time that the broadcast is scheduled to end.
     */
    scheduledEndTime?: string | null;
    /**
     * The date and time that the broadcast is scheduled to start.
     */
    scheduledStartTime?: string | null;
    /**
     * A map of thumbnail images associated with the broadcast. For each nested object in this object, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
     */
    thumbnails?: Schema$ThumbnailDetails;
    /**
     * The broadcast's title. Note that the broadcast represents exactly one YouTube video. You can set this field by modifying the broadcast resource or by setting the title field of the corresponding video resource.
     */
    title?: string | null;
  }
  /**
   * Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts.
   */
  export interface Schema$LiveBroadcastStatistics {
    /**
     * The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended.
     */
    concurrentViewers?: string | null;
  }
  /**
   * Live broadcast state.
   */
  export interface Schema$LiveBroadcastStatus {
    /**
     * The broadcast's status. The status can be updated using the API's liveBroadcasts.transition method.
     */
    lifeCycleStatus?: string | null;
    /**
     * Priority of the live broadcast event (internal state).
     */
    liveBroadcastPriority?: string | null;
    /**
     * Whether the broadcast is made for kids or not, decided by YouTube instead of the creator. This field is read only.
     */
    madeForKids?: boolean | null;
    /**
     * The broadcast's privacy status. Note that the broadcast represents exactly one YouTube video, so the privacy settings are identical to those supported for videos. In addition, you can set this field by modifying the broadcast resource or by setting the privacyStatus field of the corresponding video resource.
     */
    privacyStatus?: string | null;
    /**
     * The broadcast's recording status.
     */
    recordingStatus?: string | null;
    /**
     * This field will be set to True if the creator declares the broadcast to be kids only: go/live-cw-work.
     */
    selfDeclaredMadeForKids?: boolean | null;
  }
  /**
   * A `__liveChatBan__` resource represents a ban for a YouTube live chat.
   */
  export interface Schema$LiveChatBan {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube assigns to uniquely identify the ban.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"youtube#liveChatBan"`.
     */
    kind?: string | null;
    /**
     * The `snippet` object contains basic details about the ban.
     */
    snippet?: Schema$LiveChatBanSnippet;
  }
  export interface Schema$LiveChatBanSnippet {
    /**
     * The duration of a ban, only filled if the ban has type TEMPORARY.
     */
    banDurationSeconds?: string | null;
    bannedUserDetails?: Schema$ChannelProfileDetails;
    /**
     * The chat this ban is pertinent to.
     */
    liveChatId?: string | null;
    /**
     * The type of ban.
     */
    type?: string | null;
  }
  export interface Schema$LiveChatFanFundingEventDetails {
    /**
     * A rendered string that displays the fund amount and currency to the user.
     */
    amountDisplayString?: string | null;
    /**
     * The amount of the fund.
     */
    amountMicros?: string | null;
    /**
     * The currency in which the fund was made.
     */
    currency?: string | null;
    /**
     * The comment added by the user to this fan funding event.
     */
    userComment?: string | null;
  }
  export interface Schema$LiveChatGiftMembershipReceivedDetails {
    /**
     * The ID of the membership gifting message that is related to this gift membership. This ID will always refer to a message whose type is 'membershipGiftingEvent'.
     */
    associatedMembershipGiftingMessageId?: string | null;
    /**
     * The ID of the user that made the membership gifting purchase. This matches the `snippet.authorChannelId` of the associated membership gifting message.
     */
    gifterChannelId?: string | null;
    /**
     * The name of the Level at which the viewer is a member. This matches the `snippet.membershipGiftingDetails.giftMembershipsLevelName` of the associated membership gifting message. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled.
     */
    memberLevelName?: string | null;
  }
  export interface Schema$LiveChatMemberMilestoneChatDetails {
    /**
     * The name of the Level at which the viever is a member. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled.
     */
    memberLevelName?: string | null;
    /**
     * The total amount of months (rounded up) the viewer has been a member that granted them this Member Milestone Chat. This is the same number of months as is being displayed to YouTube users.
     */
    memberMonth?: number | null;
    /**
     * The comment added by the member to this Member Milestone Chat. This field is empty for messages without a comment from the member.
     */
    userComment?: string | null;
  }
  export interface Schema$LiveChatMembershipGiftingDetails {
    /**
     * The number of gift memberships purchased by the user.
     */
    giftMembershipsCount?: number | null;
    /**
     * The name of the level of the gift memberships purchased by the user. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled.
     */
    giftMembershipsLevelName?: string | null;
  }
  /**
   * A *liveChatMessage* resource represents a chat message in a YouTube Live Chat.
   */
  export interface Schema$LiveChatMessage {
    /**
     * The authorDetails object contains basic details about the user that posted this message.
     */
    authorDetails?: Schema$LiveChatMessageAuthorDetails;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube assigns to uniquely identify the message.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatMessage".
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the message.
     */
    snippet?: Schema$LiveChatMessageSnippet;
  }
  export interface Schema$LiveChatMessageAuthorDetails {
    /**
     * The YouTube channel ID.
     */
    channelId?: string | null;
    /**
     * The channel's URL.
     */
    channelUrl?: string | null;
    /**
     * The channel's display name.
     */
    displayName?: string | null;
    /**
     * Whether the author is a moderator of the live chat.
     */
    isChatModerator?: boolean | null;
    /**
     * Whether the author is the owner of the live chat.
     */
    isChatOwner?: boolean | null;
    /**
     * Whether the author is a sponsor of the live chat.
     */
    isChatSponsor?: boolean | null;
    /**
     * Whether the author's identity has been verified by YouTube.
     */
    isVerified?: boolean | null;
    /**
     * The channels's avatar URL.
     */
    profileImageUrl?: string | null;
  }
  export interface Schema$LiveChatMessageDeletedDetails {
    deletedMessageId?: string | null;
  }
  export interface Schema$LiveChatMessageListResponse {
    /**
     * Set when there is an active poll.
     */
    activePollItem?: Schema$LiveChatMessage;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    items?: Schema$LiveChatMessage[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatMessageListResponse".
     */
    kind?: string | null;
    nextPageToken?: string | null;
    /**
     * The date and time when the underlying stream went offline.
     */
    offlineAt?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The amount of time the client should wait before polling again.
     */
    pollingIntervalMillis?: number | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  export interface Schema$LiveChatMessageRetractedDetails {
    retractedMessageId?: string | null;
  }
  /**
   * Next ID: 34
   */
  export interface Schema$LiveChatMessageSnippet {
    /**
     * The ID of the user that authored this message, this field is not always filled. textMessageEvent - the user that wrote the message fanFundingEvent - the user that funded the broadcast newSponsorEvent - the user that just became a sponsor memberMilestoneChatEvent - the member that sent the message membershipGiftingEvent - the user that made the purchase giftMembershipReceivedEvent - the user that received the gift membership messageDeletedEvent - the moderator that took the action messageRetractedEvent - the author that retracted their message userBannedEvent - the moderator that took the action superChatEvent - the user that made the purchase superStickerEvent - the user that made the purchase pollEvent - the user that created the poll
     */
    authorChannelId?: string | null;
    /**
     * Contains a string that can be displayed to the user. If this field is not present the message is silent, at the moment only messages of type TOMBSTONE and CHAT_ENDED_EVENT are silent.
     */
    displayMessage?: string | null;
    /**
     * Details about the funding event, this is only set if the type is 'fanFundingEvent'.
     */
    fanFundingEventDetails?: Schema$LiveChatFanFundingEventDetails;
    /**
     * Details about the Gift Membership Received event, this is only set if the type is 'giftMembershipReceivedEvent'.
     */
    giftMembershipReceivedDetails?: Schema$LiveChatGiftMembershipReceivedDetails;
    /**
     * Whether the message has display content that should be displayed to users.
     */
    hasDisplayContent?: boolean | null;
    liveChatId?: string | null;
    /**
     * Details about the Member Milestone Chat event, this is only set if the type is 'memberMilestoneChatEvent'.
     */
    memberMilestoneChatDetails?: Schema$LiveChatMemberMilestoneChatDetails;
    /**
     * Details about the Membership Gifting event, this is only set if the type is 'membershipGiftingEvent'.
     */
    membershipGiftingDetails?: Schema$LiveChatMembershipGiftingDetails;
    messageDeletedDetails?: Schema$LiveChatMessageDeletedDetails;
    messageRetractedDetails?: Schema$LiveChatMessageRetractedDetails;
    /**
     * Details about the New Member Announcement event, this is only set if the type is 'newSponsorEvent'. Please note that "member" is the new term for "sponsor".
     */
    newSponsorDetails?: Schema$LiveChatNewSponsorDetails;
    /**
     * Details about the poll event, this is only set if the type is 'pollEvent'.
     */
    pollDetails?: Schema$LiveChatPollDetails;
    /**
     * The date and time when the message was orignally published.
     */
    publishedAt?: string | null;
    /**
     * Details about the Super Chat event, this is only set if the type is 'superChatEvent'.
     */
    superChatDetails?: Schema$LiveChatSuperChatDetails;
    /**
     * Details about the Super Sticker event, this is only set if the type is 'superStickerEvent'.
     */
    superStickerDetails?: Schema$LiveChatSuperStickerDetails;
    /**
     * Details about the text message, this is only set if the type is 'textMessageEvent'.
     */
    textMessageDetails?: Schema$LiveChatTextMessageDetails;
    /**
     * The type of message, this will always be present, it determines the contents of the message as well as which fields will be present.
     */
    type?: string | null;
    userBannedDetails?: Schema$LiveChatUserBannedMessageDetails;
  }
  /**
   * A *liveChatModerator* resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc.
   */
  export interface Schema$LiveChatModerator {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube assigns to uniquely identify the moderator.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatModerator".
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the moderator.
     */
    snippet?: Schema$LiveChatModeratorSnippet;
  }
  export interface Schema$LiveChatModeratorListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of moderators that match the request criteria.
     */
    items?: Schema$LiveChatModerator[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatModeratorListResponse".
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  export interface Schema$LiveChatModeratorSnippet {
    /**
     * The ID of the live chat this moderator can act on.
     */
    liveChatId?: string | null;
    /**
     * Details about the moderator.
     */
    moderatorDetails?: Schema$ChannelProfileDetails;
  }
  export interface Schema$LiveChatNewSponsorDetails {
    /**
     * If the viewer just had upgraded from a lower level. For viewers that were not members at the time of purchase, this field is false.
     */
    isUpgrade?: boolean | null;
    /**
     * The name of the Level that the viewer just had joined. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled.
     */
    memberLevelName?: string | null;
  }
  export interface Schema$LiveChatPollDetails {
    metadata?: Schema$LiveChatPollDetailsPollMetadata;
    status?: string | null;
  }
  export interface Schema$LiveChatPollDetailsPollMetadata {
    /**
     * The options will be returned in the order that is displayed in 1P
     */
    options?: Schema$LiveChatPollDetailsPollMetadataPollOption[];
    questionText?: string | null;
  }
  export interface Schema$LiveChatPollDetailsPollMetadataPollOption {
    optionText?: string | null;
    tally?: string | null;
  }
  export interface Schema$LiveChatSuperChatDetails {
    /**
     * A rendered string that displays the fund amount and currency to the user.
     */
    amountDisplayString?: string | null;
    /**
     * The amount purchased by the user, in micros (1,750,000 micros = 1.75).
     */
    amountMicros?: string | null;
    /**
     * The currency in which the purchase was made.
     */
    currency?: string | null;
    /**
     * The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1.
     */
    tier?: number | null;
    /**
     * The comment added by the user to this Super Chat event.
     */
    userComment?: string | null;
  }
  export interface Schema$LiveChatSuperStickerDetails {
    /**
     * A rendered string that displays the fund amount and currency to the user.
     */
    amountDisplayString?: string | null;
    /**
     * The amount purchased by the user, in micros (1,750,000 micros = 1.75).
     */
    amountMicros?: string | null;
    /**
     * The currency in which the purchase was made.
     */
    currency?: string | null;
    /**
     * Information about the Super Sticker.
     */
    superStickerMetadata?: Schema$SuperStickerMetadata;
    /**
     * The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1.
     */
    tier?: number | null;
  }
  export interface Schema$LiveChatTextMessageDetails {
    /**
     * The user's message.
     */
    messageText?: string | null;
  }
  export interface Schema$LiveChatUserBannedMessageDetails {
    /**
     * The duration of the ban. This property is only present if the banType is temporary.
     */
    banDurationSeconds?: string | null;
    /**
     * The details of the user that was banned.
     */
    bannedUserDetails?: Schema$ChannelProfileDetails;
    /**
     * The type of ban.
     */
    banType?: string | null;
  }
  /**
   * A live stream describes a live ingestion point.
   */
  export interface Schema$LiveStream {
    /**
     * The cdn object defines the live stream's content delivery network (CDN) settings. These settings provide details about the manner in which you stream your content to YouTube.
     */
    cdn?: Schema$CdnSettings;
    /**
     * The content_details object contains information about the stream, including the closed captions ingestion URL.
     */
    contentDetails?: Schema$LiveStreamContentDetails;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube assigns to uniquely identify the stream.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#liveStream".
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the stream, including its channel, title, and description.
     */
    snippet?: Schema$LiveStreamSnippet;
    /**
     * The status object contains information about live stream's status.
     */
    status?: Schema$LiveStreamStatus;
  }
  export interface Schema$LiveStreamConfigurationIssue {
    /**
     * The long-form description of the issue and how to resolve it.
     */
    description?: string | null;
    /**
     * The short-form reason for this issue.
     */
    reason?: string | null;
    /**
     * How severe this issue is to the stream.
     */
    severity?: string | null;
    /**
     * The kind of error happening.
     */
    type?: string | null;
  }
  /**
   * Detailed settings of a stream.
   */
  export interface Schema$LiveStreamContentDetails {
    /**
     * The ingestion URL where the closed captions of this stream are sent.
     */
    closedCaptionsIngestionUrl?: string | null;
    /**
     * Indicates whether the stream is reusable, which means that it can be bound to multiple broadcasts. It is common for broadcasters to reuse the same stream for many different broadcasts if those broadcasts occur at different times. If you set this value to false, then the stream will not be reusable, which means that it can only be bound to one broadcast. Non-reusable streams differ from reusable streams in the following ways: - A non-reusable stream can only be bound to one broadcast. - A non-reusable stream might be deleted by an automated process after the broadcast ends. - The liveStreams.list method does not list non-reusable streams if you call the method and set the mine parameter to true. The only way to use that method to retrieve the resource for a non-reusable stream is to use the id parameter to identify the stream.
     */
    isReusable?: boolean | null;
  }
  export interface Schema$LiveStreamHealthStatus {
    /**
     * The configurations issues on this stream
     */
    configurationIssues?: Schema$LiveStreamConfigurationIssue[];
    /**
     * The last time this status was updated (in seconds)
     */
    lastUpdateTimeSeconds?: string | null;
    /**
     * The status code of this stream
     */
    status?: string | null;
  }
  export interface Schema$LiveStreamListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of live streams that match the request criteria.
     */
    items?: Schema$LiveStream[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#liveStreamListResponse".
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  export interface Schema$LiveStreamSnippet {
    /**
     * The ID that YouTube uses to uniquely identify the channel that is transmitting the stream.
     */
    channelId?: string | null;
    /**
     * The stream's description. The value cannot be longer than 10000 characters.
     */
    description?: string | null;
    isDefaultStream?: boolean | null;
    /**
     * The date and time that the stream was created.
     */
    publishedAt?: string | null;
    /**
     * The stream's title. The value must be between 1 and 128 characters long.
     */
    title?: string | null;
  }
  /**
   * Brief description of the live stream status.
   */
  export interface Schema$LiveStreamStatus {
    /**
     * The health status of the stream.
     */
    healthStatus?: Schema$LiveStreamHealthStatus;
    streamStatus?: string | null;
  }
  export interface Schema$LocalizedProperty {
    default?: string | null;
    /**
     * The language of the default property.
     */
    defaultLanguage?: Schema$LanguageTag;
    localized?: Schema$LocalizedString[];
  }
  export interface Schema$LocalizedString {
    language?: string | null;
    value?: string | null;
  }
  /**
   * A *member* resource represents a member for a YouTube channel. A member provides recurring monetary support to a creator and receives special benefits.
   */
  export interface Schema$Member {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#member".
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the member.
     */
    snippet?: Schema$MemberSnippet;
  }
  export interface Schema$MemberListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of members that match the request criteria.
     */
    items?: Schema$Member[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#memberListResponse".
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  export interface Schema$MembershipsDetails {
    /**
     * Ids of all levels that the user has access to. This includes the currently active level and all other levels that are included because of a higher purchase.
     */
    accessibleLevels?: string[] | null;
    /**
     * Id of the highest level that the user has access to at the moment.
     */
    highestAccessibleLevel?: string | null;
    /**
     * Display name for the highest level that the user has access to at the moment.
     */
    highestAccessibleLevelDisplayName?: string | null;
    /**
     * Data about memberships duration without taking into consideration pricing levels.
     */
    membershipsDuration?: Schema$MembershipsDuration;
    /**
     * Data about memberships duration on particular pricing levels.
     */
    membershipsDurationAtLevels?: Schema$MembershipsDurationAtLevel[];
  }
  export interface Schema$MembershipsDuration {
    /**
     * The date and time when the user became a continuous member across all levels.
     */
    memberSince?: string | null;
    /**
     * The cumulative time the user has been a member across all levels in complete months (the time is rounded down to the nearest integer).
     */
    memberTotalDurationMonths?: number | null;
  }
  export interface Schema$MembershipsDurationAtLevel {
    /**
     * Pricing level ID.
     */
    level?: string | null;
    /**
     * The date and time when the user became a continuous member for the given level.
     */
    memberSince?: string | null;
    /**
     * The cumulative time the user has been a member for the given level in complete months (the time is rounded down to the nearest integer).
     */
    memberTotalDurationMonths?: number | null;
  }
  /**
   * A *membershipsLevel* resource represents an offer made by YouTube creators for their fans. Users can become members of the channel by joining one of the available levels. They will provide recurring monetary support and receives special benefits.
   */
  export interface Schema$MembershipsLevel {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube assigns to uniquely identify the memberships level.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#membershipsLevelListResponse".
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the level.
     */
    snippet?: Schema$MembershipsLevelSnippet;
  }
  export interface Schema$MembershipsLevelListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of pricing levels offered by a creator to the fans.
     */
    items?: Schema$MembershipsLevel[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#membershipsLevelListResponse".
     */
    kind?: string | null;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  export interface Schema$MembershipsLevelSnippet {
    /**
     * The id of the channel that's offering channel memberships.
     */
    creatorChannelId?: string | null;
    /**
     * Details about the pricing level.
     */
    levelDetails?: Schema$LevelDetails;
  }
  export interface Schema$MemberSnippet {
    /**
     * The id of the channel that's offering memberships.
     */
    creatorChannelId?: string | null;
    /**
     * Details about the member.
     */
    memberDetails?: Schema$ChannelProfileDetails;
    /**
     * Details about the user's membership.
     */
    membershipsDetails?: Schema$MembershipsDetails;
  }
  /**
   * Settings and Info of the monitor stream
   */
  export interface Schema$MonitorStreamInfo {
    /**
     * If you have set the enableMonitorStream property to true, then this property determines the length of the live broadcast delay.
     */
    broadcastStreamDelayMs?: number | null;
    /**
     * HTML code that embeds a player that plays the monitor stream.
     */
    embedHtml?: string | null;
    /**
     * This value determines whether the monitor stream is enabled for the broadcast. If the monitor stream is enabled, then YouTube will broadcast the event content on a special stream intended only for the broadcaster's consumption. The broadcaster can use the stream to review the event content and also to identify the optimal times to insert cuepoints. You need to set this value to true if you intend to have a broadcast delay for your event. *Note:* This property cannot be updated once the broadcast is in the testing or live state.
     */
    enableMonitorStream?: boolean | null;
  }
  /**
   * Paging details for lists of resources, including total number of items available and number of resources returned in a single page.
   */
  export interface Schema$PageInfo {
    /**
     * The number of results included in the API response.
     */
    resultsPerPage?: number | null;
    /**
     * The total number of results in the result set.
     */
    totalResults?: number | null;
  }
  /**
   * A *playlist* resource represents a YouTube playlist. A playlist is a collection of videos that can be viewed sequentially and shared with other users. A playlist can contain up to 200 videos, and YouTube does not limit the number of playlists that each user creates. By default, playlists are publicly visible to other users, but playlists can be public or private. YouTube also uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods.
   */
  export interface Schema$Playlist {
    /**
     * The contentDetails object contains information like video count.
     */
    contentDetails?: Schema$PlaylistContentDetails;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the playlist.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#playlist".
     */
    kind?: string | null;
    /**
     * Localizations for different languages
     */
    localizations?: {[key: string]: Schema$PlaylistLocalization} | null;
    /**
     * The player object contains information that you would use to play the playlist in an embedded player.
     */
    player?: Schema$PlaylistPlayer;
    /**
     * The snippet object contains basic details about the playlist, such as its title and description.
     */
    snippet?: Schema$PlaylistSnippet;
    /**
     * The status object contains status information for the playlist.
     */
    status?: Schema$PlaylistStatus;
  }
  export interface Schema$PlaylistContentDetails {
    /**
     * The number of videos in the playlist.
     */
    itemCount?: number | null;
  }
  export interface Schema$PlaylistImage {
    /**
     * Identifies this resource (playlist id and image type).
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#playlistImages".
     */
    kind?: string | null;
    snippet?: Schema$PlaylistImageSnippet;
  }
  export interface Schema$PlaylistImageListResponse {
    items?: Schema$PlaylistImage[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#playlistImageListResponse".
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
  }
  /**
   * A *playlistImage* resource identifies another resource, such as a image, that is associated with a playlist. In addition, the playlistImage resource contains details about the included resource that pertain specifically to how that resource is used in that playlist. YouTube uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistImages.list method to retrieve image data for any of those playlists. You can also add or remove images from those lists by calling the playlistImages.insert and playlistImages.delete methods.
   */
  export interface Schema$PlaylistImageSnippet {
    /**
     * The image height.
     */
    height?: number | null;
    /**
     * The Playlist ID of the playlist this image is associated with.
     */
    playlistId?: string | null;
    /**
     * The image type.
     */
    type?: string | null;
    /**
     * The image width.
     */
    width?: number | null;
  }
  /**
   * A *playlistItem* resource identifies another resource, such as a video, that is included in a playlist. In addition, the playlistItem resource contains details about the included resource that pertain specifically to how that resource is used in that playlist. YouTube uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods. For example, if a user gives a positive rating to a video, you would insert that video into the liked videos playlist for that user's channel.
   */
  export interface Schema$PlaylistItem {
    /**
     * The contentDetails object is included in the resource if the included item is a YouTube video. The object contains additional information about the video.
     */
    contentDetails?: Schema$PlaylistItemContentDetails;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the playlist item.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItem".
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the playlist item, such as its title and position in the playlist.
     */
    snippet?: Schema$PlaylistItemSnippet;
    /**
     * The status object contains information about the playlist item's privacy status.
     */
    status?: Schema$PlaylistItemStatus;
  }
  export interface Schema$PlaylistItemContentDetails {
    /**
     * The time, measured in seconds from the start of the video, when the video should stop playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) By default, assume that the video.endTime is the end of the video.
     */
    endAt?: string | null;
    /**
     * A user-generated note for this item.
     */
    note?: string | null;
    /**
     * The time, measured in seconds from the start of the video, when the video should start playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) The default value is 0.
     */
    startAt?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify a video. To retrieve the video resource, set the id query parameter to this value in your API request.
     */
    videoId?: string | null;
    /**
     * The date and time that the video was published to YouTube.
     */
    videoPublishedAt?: string | null;
  }
  export interface Schema$PlaylistItemListResponse {
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of playlist items that match the request criteria.
     */
    items?: Schema$PlaylistItem[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#playlistItemListResponse".
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic details about a playlist, including title, description and thumbnails. Basic details of a YouTube Playlist item provided by the author. Next ID: 15
   */
  export interface Schema$PlaylistItemSnippet {
    /**
     * The ID that YouTube uses to uniquely identify the user that added the item to the playlist.
     */
    channelId?: string | null;
    /**
     * Channel title for the channel that the playlist item belongs to.
     */
    channelTitle?: string | null;
    /**
     * The item's description.
     */
    description?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify thGe playlist that the playlist item is in.
     */
    playlistId?: string | null;
    /**
     * The order in which the item appears in the playlist. The value uses a zero-based index, so the first item has a position of 0, the second item has a position of 1, and so forth.
     */
    position?: number | null;
    /**
     * The date and time that the item was added to the playlist.
     */
    publishedAt?: string | null;
    /**
     * The id object contains information that can be used to uniquely identify the resource that is included in the playlist as the playlist item.
     */
    resourceId?: Schema$ResourceId;
    /**
     * A map of thumbnail images associated with the playlist item. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
     */
    thumbnails?: Schema$ThumbnailDetails;
    /**
     * The item's title.
     */
    title?: string | null;
    /**
     * Channel id for the channel this video belongs to.
     */
    videoOwnerChannelId?: string | null;
    /**
     * Channel title for the channel this video belongs to.
     */
    videoOwnerChannelTitle?: string | null;
  }
  /**
   * Information about the playlist item's privacy status.
   */
  export interface Schema$PlaylistItemStatus {
    /**
     * This resource's privacy status.
     */
    privacyStatus?: string | null;
  }
  export interface Schema$PlaylistListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of playlists that match the request criteria
     */
    items?: Schema$Playlist[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#playlistListResponse".
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Playlist localization setting
   */
  export interface Schema$PlaylistLocalization {
    /**
     * The localized strings for playlist's description.
     */
    description?: string | null;
    /**
     * The localized strings for playlist's title.
     */
    title?: string | null;
  }
  export interface Schema$PlaylistPlayer {
    /**
     * An <iframe\> tag that embeds a player that will play the playlist.
     */
    embedHtml?: string | null;
  }
  /**
   * Basic details about a playlist, including title, description and thumbnails.
   */
  export interface Schema$PlaylistSnippet {
    /**
     * The ID that YouTube uses to uniquely identify the channel that published the playlist.
     */
    channelId?: string | null;
    /**
     * The channel title of the channel that the video belongs to.
     */
    channelTitle?: string | null;
    /**
     * The language of the playlist's default title and description.
     */
    defaultLanguage?: string | null;
    /**
     * The playlist's description.
     */
    description?: string | null;
    /**
     * Localized title and description, read-only.
     */
    localized?: Schema$PlaylistLocalization;
    /**
     * The date and time that the playlist was created.
     */
    publishedAt?: string | null;
    /**
     * Keyword tags associated with the playlist.
     */
    tags?: string[] | null;
    /**
     * A map of thumbnail images associated with the playlist. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
     */
    thumbnails?: Schema$ThumbnailDetails;
    /**
     * Note: if the playlist has a custom thumbnail, this field will not be populated. The video id selected by the user that will be used as the thumbnail of this playlist. This field defaults to the first publicly viewable video in the playlist, if: 1. The user has never selected a video to be the thumbnail of the playlist. 2. The user selects a video to be the thumbnail, and then removes that video from the playlist. 3. The user selects a non-owned video to be the thumbnail, but that video becomes private, or gets deleted.
     */
    thumbnailVideoId?: string | null;
    /**
     * The playlist's title.
     */
    title?: string | null;
  }
  export interface Schema$PlaylistStatus {
    /**
     * The playlist's podcast status.
     */
    podcastStatus?: string | null;
    /**
     * The playlist's privacy status.
     */
    privacyStatus?: string | null;
  }
  /**
   * A pair Property / Value.
   */
  export interface Schema$PropertyValue {
    /**
     * A property.
     */
    property?: string | null;
    /**
     * The property's value.
     */
    value?: string | null;
  }
  export interface Schema$RelatedEntity {
    entity?: Schema$Entity;
  }
  /**
   * A resource id is a generic reference that points to another YouTube resource.
   */
  export interface Schema$ResourceId {
    /**
     * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a channel. This property is only present if the resourceId.kind value is youtube#channel.
     */
    channelId?: string | null;
    /**
     * The type of the API resource.
     */
    kind?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a playlist. This property is only present if the resourceId.kind value is youtube#playlist.
     */
    playlistId?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a video. This property is only present if the resourceId.kind value is youtube#video.
     */
    videoId?: string | null;
  }
  export interface Schema$SearchListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * Pagination information for token pagination.
     */
    items?: Schema$SearchResult[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#searchListResponse".
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    regionCode?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * A search result contains information about a YouTube video, channel, or playlist that matches the search parameters specified in an API request. While a search result points to a uniquely identifiable resource, like a video, it does not have its own persistent data.
   */
  export interface Schema$SearchResult {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The id object contains information that can be used to uniquely identify the resource that matches the search request.
     */
    id?: Schema$ResourceId;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#searchResult".
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about a search result, such as its title or description. For example, if the search result is a video, then the title will be the video's title and the description will be the video's description.
     */
    snippet?: Schema$SearchResultSnippet;
  }
  /**
   * Basic details about a search result, including title, description and thumbnails of the item referenced by the search result.
   */
  export interface Schema$SearchResultSnippet {
    /**
     * The value that YouTube uses to uniquely identify the channel that published the resource that the search result identifies.
     */
    channelId?: string | null;
    /**
     * The title of the channel that published the resource that the search result identifies.
     */
    channelTitle?: string | null;
    /**
     * A description of the search result.
     */
    description?: string | null;
    /**
     * It indicates if the resource (video or channel) has upcoming/active live broadcast content. Or it's "none" if there is not any upcoming/active live broadcasts.
     */
    liveBroadcastContent?: string | null;
    /**
     * The creation date and time of the resource that the search result identifies.
     */
    publishedAt?: string | null;
    /**
     * A map of thumbnail images associated with the search result. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
     */
    thumbnails?: Schema$ThumbnailDetails;
    /**
     * The title of the search result.
     */
    title?: string | null;
  }
  /**
   * A *subscription* resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video.
   */
  export interface Schema$Subscription {
    /**
     * The contentDetails object contains basic statistics about the subscription.
     */
    contentDetails?: Schema$SubscriptionContentDetails;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the subscription.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#subscription".
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the subscription, including its title and the channel that the user subscribed to.
     */
    snippet?: Schema$SubscriptionSnippet;
    /**
     * The subscriberSnippet object contains basic details about the subscriber.
     */
    subscriberSnippet?: Schema$SubscriptionSubscriberSnippet;
  }
  /**
   * Details about the content to witch a subscription refers.
   */
  export interface Schema$SubscriptionContentDetails {
    /**
     * The type of activity this subscription is for (only uploads, everything).
     */
    activityType?: string | null;
    /**
     * The number of new items in the subscription since its content was last read.
     */
    newItemCount?: number | null;
    /**
     * The approximate number of items that the subscription points to.
     */
    totalItemCount?: number | null;
  }
  export interface Schema$SubscriptionListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of subscriptions that match the request criteria.
     */
    items?: Schema$Subscription[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#subscriptionListResponse".
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic details about a subscription, including title, description and thumbnails of the subscribed item.
   */
  export interface Schema$SubscriptionSnippet {
    /**
     * The ID that YouTube uses to uniquely identify the subscriber's channel.
     */
    channelId?: string | null;
    /**
     * The subscription's details.
     */
    description?: string | null;
    /**
     * The date and time that the subscription was created.
     */
    publishedAt?: string | null;
    /**
     * The id object contains information about the channel that the user subscribed to.
     */
    resourceId?: Schema$ResourceId;
    /**
     * A map of thumbnail images associated with the video. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
     */
    thumbnails?: Schema$ThumbnailDetails;
    /**
     * The subscription's title.
     */
    title?: string | null;
  }
  /**
   * Basic details about a subscription's subscriber including title, description, channel ID and thumbnails.
   */
  export interface Schema$SubscriptionSubscriberSnippet {
    /**
     * The channel ID of the subscriber.
     */
    channelId?: string | null;
    /**
     * The description of the subscriber.
     */
    description?: string | null;
    /**
     * Thumbnails for this subscriber.
     */
    thumbnails?: Schema$ThumbnailDetails;
    /**
     * The title of the subscriber.
     */
    title?: string | null;
  }
  /**
   * A `__superChatEvent__` resource represents a Super Chat purchase on a YouTube channel.
   */
  export interface Schema$SuperChatEvent {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube assigns to uniquely identify the Super Chat event.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"youtube#superChatEvent"`.
     */
    kind?: string | null;
    /**
     * The `snippet` object contains basic details about the Super Chat event.
     */
    snippet?: Schema$SuperChatEventSnippet;
  }
  export interface Schema$SuperChatEventListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of Super Chat purchases that match the request criteria.
     */
    items?: Schema$SuperChatEvent[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#superChatEventListResponse".
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  export interface Schema$SuperChatEventSnippet {
    /**
     * The purchase amount, in micros of the purchase currency. e.g., 1 is represented as 1000000.
     */
    amountMicros?: string | null;
    /**
     * Channel id where the event occurred.
     */
    channelId?: string | null;
    /**
     * The text contents of the comment left by the user.
     */
    commentText?: string | null;
    /**
     * The date and time when the event occurred.
     */
    createdAt?: string | null;
    /**
     * The currency in which the purchase was made. ISO 4217.
     */
    currency?: string | null;
    /**
     * A rendered string that displays the purchase amount and currency (e.g., "$1.00"). The string is rendered for the given language.
     */
    displayString?: string | null;
    /**
     * True if this event is a Super Sticker event.
     */
    isSuperStickerEvent?: boolean | null;
    /**
     * The tier for the paid message, which is based on the amount of money spent to purchase the message.
     */
    messageType?: number | null;
    /**
     * If this event is a Super Sticker event, this field will contain metadata about the Super Sticker.
     */
    superStickerMetadata?: Schema$SuperStickerMetadata;
    /**
     * Details about the supporter.
     */
    supporterDetails?: Schema$ChannelProfileDetails;
  }
  export interface Schema$SuperStickerMetadata {
    /**
     * Internationalized alt text that describes the sticker image and any animation associated with it.
     */
    altText?: string | null;
    /**
     * Specifies the localization language in which the alt text is returned.
     */
    altTextLanguage?: string | null;
    /**
     * Unique identifier of the Super Sticker. This is a shorter form of the alt_text that includes pack name and a recognizable characteristic of the sticker.
     */
    stickerId?: string | null;
  }
  export interface Schema$TestItem {
    /**
     * Etag for the resource. See https://en.wikipedia.org/wiki/HTTP_ETag.
     */
    etag?: string | null;
    featuredPart?: boolean | null;
    gaia?: string | null;
    id?: string | null;
    snippet?: Schema$TestItemTestItemSnippet;
  }
  export interface Schema$TestItemTestItemSnippet {}
  /**
   * A *third party account link* resource represents a link between a YouTube account or a channel and an account on a third-party service.
   */
  export interface Schema$ThirdPartyLink {
    /**
     * Etag of this resource
     */
    etag?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#thirdPartyLink".
     */
    kind?: string | null;
    /**
     * The linking_token identifies a YouTube account and channel with which the third party account is linked.
     */
    linkingToken?: string | null;
    /**
     * The snippet object contains basic details about the third- party account link.
     */
    snippet?: Schema$ThirdPartyLinkSnippet;
    /**
     * The status object contains information about the status of the link.
     */
    status?: Schema$ThirdPartyLinkStatus;
  }
  export interface Schema$ThirdPartyLinkListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    items?: Schema$ThirdPartyLink[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#thirdPartyLinkListResponse".
     */
    kind?: string | null;
  }
  /**
   * Basic information about a third party account link, including its type and type-specific information.
   */
  export interface Schema$ThirdPartyLinkSnippet {
    /**
     * Information specific to a link between a channel and a store on a merchandising platform.
     */
    channelToStoreLink?: Schema$ChannelToStoreLinkDetails;
    /**
     * Type of the link named after the entities that are being linked.
     */
    type?: string | null;
  }
  /**
   * The third-party link status object contains information about the status of the link.
   */
  export interface Schema$ThirdPartyLinkStatus {
    linkStatus?: string | null;
  }
  /**
   * A thumbnail is an image representing a YouTube resource.
   */
  export interface Schema$Thumbnail {
    /**
     * (Optional) Height of the thumbnail image.
     */
    height?: number | null;
    /**
     * The thumbnail image's URL.
     */
    url?: string | null;
    /**
     * (Optional) Width of the thumbnail image.
     */
    width?: number | null;
  }
  /**
   * Internal representation of thumbnails for a YouTube resource.
   */
  export interface Schema$ThumbnailDetails {
    /**
     * The default image for this resource.
     */
    default?: Schema$Thumbnail;
    /**
     * The high quality image for this resource.
     */
    high?: Schema$Thumbnail;
    /**
     * The maximum resolution quality image for this resource.
     */
    maxres?: Schema$Thumbnail;
    /**
     * The medium quality image for this resource.
     */
    medium?: Schema$Thumbnail;
    /**
     * The standard quality image for this resource.
     */
    standard?: Schema$Thumbnail;
  }
  export interface Schema$ThumbnailSetResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of thumbnails.
     */
    items?: Schema$ThumbnailDetails[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#thumbnailSetResponse".
     */
    kind?: string | null;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Stub token pagination template to suppress results.
   */
  export interface Schema$TokenPagination {}
  /**
   * A *video* resource represents a YouTube video.
   */
  export interface Schema$Video {
    /**
     * Age restriction details related to a video. This data can only be retrieved by the video owner.
     */
    ageGating?: Schema$VideoAgeGating;
    /**
     * The contentDetails object contains information about the video content, including the length of the video and its aspect ratio.
     */
    contentDetails?: Schema$VideoContentDetails;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The fileDetails object encapsulates information about the video file that was uploaded to YouTube, including the file's resolution, duration, audio and video codecs, stream bitrates, and more. This data can only be retrieved by the video owner.
     */
    fileDetails?: Schema$VideoFileDetails;
    /**
     * The ID that YouTube uses to uniquely identify the video.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#video".
     */
    kind?: string | null;
    /**
     * The liveStreamingDetails object contains metadata about a live video broadcast. The object will only be present in a video resource if the video is an upcoming, live, or completed live broadcast.
     */
    liveStreamingDetails?: Schema$VideoLiveStreamingDetails;
    /**
     * The localizations object contains localized versions of the basic details about the video, such as its title and description.
     */
    localizations?: {[key: string]: Schema$VideoLocalization} | null;
    /**
     * The monetizationDetails object encapsulates information about the monetization status of the video.
     */
    monetizationDetails?: Schema$VideoMonetizationDetails;
    paidProductPlacementDetails?: Schema$VideoPaidProductPlacementDetails;
    /**
     * The player object contains information that you would use to play the video in an embedded player.
     */
    player?: Schema$VideoPlayer;
    /**
     * The processingDetails object encapsulates information about YouTube's progress in processing the uploaded video file. The properties in the object identify the current processing status and an estimate of the time remaining until YouTube finishes processing the video. This part also indicates whether different types of data or content, such as file details or thumbnail images, are available for the video. The processingProgress object is designed to be polled so that the video uploaded can track the progress that YouTube has made in processing the uploaded video file. This data can only be retrieved by the video owner.
     */
    processingDetails?: Schema$VideoProcessingDetails;
    /**
     * The projectDetails object contains information about the project specific video metadata. b/157517979: This part was never populated after it was added. However, it sees non-zero traffic because there is generated client code in the wild that refers to it [1]. We keep this field and do NOT remove it because otherwise V3 would return an error when this part gets requested [2]. [1] https://developers.google.com/resources/api-libraries/documentation/youtube/v3/csharp/latest/classGoogle_1_1Apis_1_1YouTube_1_1v3_1_1Data_1_1VideoProjectDetails.html [2] http://google3/video/youtube/src/python/servers/data_api/common.py?l=1565-1569&rcl=344141677
     */
    projectDetails?: Schema$VideoProjectDetails;
    /**
     * The recordingDetails object encapsulates information about the location, date and address where the video was recorded.
     */
    recordingDetails?: Schema$VideoRecordingDetails;
    /**
     * The snippet object contains basic details about the video, such as its title, description, and category.
     */
    snippet?: Schema$VideoSnippet;
    /**
     * The statistics object contains statistics about the video.
     */
    statistics?: Schema$VideoStatistics;
    /**
     * The status object contains information about the video's uploading, processing, and privacy statuses.
     */
    status?: Schema$VideoStatus;
    /**
     * The suggestions object encapsulates suggestions that identify opportunities to improve the video quality or the metadata for the uploaded video. This data can only be retrieved by the video owner.
     */
    suggestions?: Schema$VideoSuggestions;
    /**
     * The topicDetails object encapsulates information about Freebase topics associated with the video.
     */
    topicDetails?: Schema$VideoTopicDetails;
  }
  export interface Schema$VideoAbuseReport {
    /**
     * Additional comments regarding the abuse report.
     */
    comments?: string | null;
    /**
     * The language that the content was viewed in.
     */
    language?: string | null;
    /**
     * The high-level, or primary, reason that the content is abusive. The value is an abuse report reason ID.
     */
    reasonId?: string | null;
    /**
     * The specific, or secondary, reason that this content is abusive (if available). The value is an abuse report reason ID that is a valid secondary reason for the primary reason.
     */
    secondaryReasonId?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the video.
     */
    videoId?: string | null;
  }
  /**
   * A `__videoAbuseReportReason__` resource identifies a reason that a video could be reported as abusive. Video abuse report reasons are used with `video.ReportAbuse`.
   */
  export interface Schema$VideoAbuseReportReason {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID of this abuse report reason.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"youtube#videoAbuseReportReason"`.
     */
    kind?: string | null;
    /**
     * The `snippet` object contains basic details about the abuse report reason.
     */
    snippet?: Schema$VideoAbuseReportReasonSnippet;
  }
  export interface Schema$VideoAbuseReportReasonListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of valid abuse reasons that are used with `video.ReportAbuse`.
     */
    items?: Schema$VideoAbuseReportReason[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"youtube#videoAbuseReportReasonListResponse"`.
     */
    kind?: string | null;
    /**
     * The `visitorId` identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic details about a video category, such as its localized title.
   */
  export interface Schema$VideoAbuseReportReasonSnippet {
    /**
     * The localized label belonging to this abuse report reason.
     */
    label?: string | null;
    /**
     * The secondary reasons associated with this reason, if any are available. (There might be 0 or more.)
     */
    secondaryReasons?: Schema$VideoAbuseReportSecondaryReason[];
  }
  export interface Schema$VideoAbuseReportSecondaryReason {
    /**
     * The ID of this abuse report secondary reason.
     */
    id?: string | null;
    /**
     * The localized label for this abuse report secondary reason.
     */
    label?: string | null;
  }
  export interface Schema$VideoAgeGating {
    /**
     * Indicates whether or not the video has alcoholic beverage content. Only users of legal purchasing age in a particular country, as identified by ICAP, can view the content.
     */
    alcoholContent?: boolean | null;
    /**
     * Age-restricted trailers. For redband trailers and adult-rated video-games. Only users aged 18+ can view the content. The the field is true the content is restricted to viewers aged 18+. Otherwise The field won't be present.
     */
    restricted?: boolean | null;
    /**
     * Video game rating, if any.
     */
    videoGameRating?: string | null;
  }
  /**
   * A *videoCategory* resource identifies a category that has been or could be associated with uploaded videos.
   */
  export interface Schema$VideoCategory {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the video category.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#videoCategory".
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the video category, including its title.
     */
    snippet?: Schema$VideoCategorySnippet;
  }
  export interface Schema$VideoCategoryListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of video categories that can be associated with YouTube videos. In this map, the video category ID is the map key, and its value is the corresponding videoCategory resource.
     */
    items?: Schema$VideoCategory[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#videoCategoryListResponse".
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic details about a video category, such as its localized title.
   */
  export interface Schema$VideoCategorySnippet {
    assignable?: boolean | null;
    /**
     * The YouTube channel that created the video category.
     */
    channelId?: string | null;
    /**
     * The video category's title.
     */
    title?: string | null;
  }
  /**
   * Details about the content of a YouTube Video.
   */
  export interface Schema$VideoContentDetails {
    /**
     * The value of captions indicates whether the video has captions or not.
     */
    caption?: string | null;
    /**
     * Specifies the ratings that the video received under various rating schemes.
     */
    contentRating?: Schema$ContentRating;
    /**
     * The countryRestriction object contains information about the countries where a video is (or is not) viewable.
     */
    countryRestriction?: Schema$AccessPolicy;
    /**
     * The value of definition indicates whether the video is available in high definition or only in standard definition.
     */
    definition?: string | null;
    /**
     * The value of dimension indicates whether the video is available in 3D or in 2D.
     */
    dimension?: string | null;
    /**
     * The length of the video. The tag value is an ISO 8601 duration in the format PT#M#S, in which the letters PT indicate that the value specifies a period of time, and the letters M and S refer to length in minutes and seconds, respectively. The # characters preceding the M and S letters are both integers that specify the number of minutes (or seconds) of the video. For example, a value of PT15M51S indicates that the video is 15 minutes and 51 seconds long.
     */
    duration?: string | null;
    /**
     * Indicates whether the video uploader has provided a custom thumbnail image for the video. This property is only visible to the video uploader.
     */
    hasCustomThumbnail?: boolean | null;
    /**
     * The value of is_license_content indicates whether the video is licensed content.
     */
    licensedContent?: boolean | null;
    /**
     * Specifies the projection format of the video.
     */
    projection?: string | null;
    /**
     * The regionRestriction object contains information about the countries where a video is (or is not) viewable. The object will contain either the contentDetails.regionRestriction.allowed property or the contentDetails.regionRestriction.blocked property.
     */
    regionRestriction?: Schema$VideoContentDetailsRegionRestriction;
  }
  /**
   * DEPRECATED Region restriction of the video.
   */
  export interface Schema$VideoContentDetailsRegionRestriction {
    /**
     * A list of region codes that identify countries where the video is viewable. If this property is present and a country is not listed in its value, then the video is blocked from appearing in that country. If this property is present and contains an empty list, the video is blocked in all countries.
     */
    allowed?: string[] | null;
    /**
     * A list of region codes that identify countries where the video is blocked. If this property is present and a country is not listed in its value, then the video is viewable in that country. If this property is present and contains an empty list, the video is viewable in all countries.
     */
    blocked?: string[] | null;
  }
  /**
   * Describes original video file properties, including technical details about audio and video streams, but also metadata information like content length, digitization time, or geotagging information.
   */
  export interface Schema$VideoFileDetails {
    /**
     * A list of audio streams contained in the uploaded video file. Each item in the list contains detailed metadata about an audio stream.
     */
    audioStreams?: Schema$VideoFileDetailsAudioStream[];
    /**
     * The uploaded video file's combined (video and audio) bitrate in bits per second.
     */
    bitrateBps?: string | null;
    /**
     * The uploaded video file's container format.
     */
    container?: string | null;
    /**
     * The date and time when the uploaded video file was created. The value is specified in ISO 8601 format. Currently, the following ISO 8601 formats are supported: - Date only: YYYY-MM-DD - Naive time: YYYY-MM-DDTHH:MM:SS - Time with timezone: YYYY-MM-DDTHH:MM:SS+HH:MM
     */
    creationTime?: string | null;
    /**
     * The length of the uploaded video in milliseconds.
     */
    durationMs?: string | null;
    /**
     * The uploaded file's name. This field is present whether a video file or another type of file was uploaded.
     */
    fileName?: string | null;
    /**
     * The uploaded file's size in bytes. This field is present whether a video file or another type of file was uploaded.
     */
    fileSize?: string | null;
    /**
     * The uploaded file's type as detected by YouTube's video processing engine. Currently, YouTube only processes video files, but this field is present whether a video file or another type of file was uploaded.
     */
    fileType?: string | null;
    /**
     * A list of video streams contained in the uploaded video file. Each item in the list contains detailed metadata about a video stream.
     */
    videoStreams?: Schema$VideoFileDetailsVideoStream[];
  }
  /**
   * Information about an audio stream.
   */
  export interface Schema$VideoFileDetailsAudioStream {
    /**
     * The audio stream's bitrate, in bits per second.
     */
    bitrateBps?: string | null;
    /**
     * The number of audio channels that the stream contains.
     */
    channelCount?: number | null;
    /**
     * The audio codec that the stream uses.
     */
    codec?: string | null;
    /**
     * A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.
     */
    vendor?: string | null;
  }
  /**
   * Information about a video stream.
   */
  export interface Schema$VideoFileDetailsVideoStream {
    /**
     * The video content's display aspect ratio, which specifies the aspect ratio in which the video should be displayed.
     */
    aspectRatio?: number | null;
    /**
     * The video stream's bitrate, in bits per second.
     */
    bitrateBps?: string | null;
    /**
     * The video codec that the stream uses.
     */
    codec?: string | null;
    /**
     * The video stream's frame rate, in frames per second.
     */
    frameRateFps?: number | null;
    /**
     * The encoded video content's height in pixels.
     */
    heightPixels?: number | null;
    /**
     * The amount that YouTube needs to rotate the original source content to properly display the video.
     */
    rotation?: string | null;
    /**
     * A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.
     */
    vendor?: string | null;
    /**
     * The encoded video content's width in pixels. You can calculate the video's encoding aspect ratio as width_pixels / height_pixels.
     */
    widthPixels?: number | null;
  }
  export interface Schema$VideoGetRatingResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of ratings that match the request criteria.
     */
    items?: Schema$VideoRating[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#videoGetRatingResponse".
     */
    kind?: string | null;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  export interface Schema$VideoListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    items?: Schema$Video[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#videoListResponse".
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Details about the live streaming metadata.
   */
  export interface Schema$VideoLiveStreamingDetails {
    /**
     * The ID of the currently active live chat attached to this video. This field is filled only if the video is a currently live broadcast that has live chat. Once the broadcast transitions to complete this field will be removed and the live chat closed down. For persistent broadcasts that live chat id will no longer be tied to this video but rather to the new video being displayed at the persistent page.
     */
    activeLiveChatId?: string | null;
    /**
     * The time that the broadcast actually ended. This value will not be available until the broadcast is over.
     */
    actualEndTime?: string | null;
    /**
     * The time that the broadcast actually started. This value will not be available until the broadcast begins.
     */
    actualStartTime?: string | null;
    /**
     * The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended.
     */
    concurrentViewers?: string | null;
    /**
     * The time that the broadcast is scheduled to end. If the value is empty or the property is not present, then the broadcast is scheduled to continue indefinitely.
     */
    scheduledEndTime?: string | null;
    /**
     * The time that the broadcast is scheduled to begin.
     */
    scheduledStartTime?: string | null;
  }
  /**
   * Localized versions of certain video properties (e.g. title).
   */
  export interface Schema$VideoLocalization {
    /**
     * Localized version of the video's description.
     */
    description?: string | null;
    /**
     * Localized version of the video's title.
     */
    title?: string | null;
  }
  /**
   * Details about monetization of a YouTube Video.
   */
  export interface Schema$VideoMonetizationDetails {
    /**
     * The value of access indicates whether the video can be monetized or not.
     */
    access?: Schema$AccessPolicy;
  }
  /**
   * Details about paid content, such as paid product placement, sponsorships or endorsement, contained in a YouTube video and a method to inform viewers of paid promotion. This data can only be retrieved by the video owner.
   */
  export interface Schema$VideoPaidProductPlacementDetails {
    /**
     * This boolean represents whether the video contains Paid Product Placement, Studio equivalent: https://screenshot.googleplex.com/4Me79DE6AfT2ktp.png
     */
    hasPaidProductPlacement?: boolean | null;
  }
  /**
   * Player to be used for a video playback.
   */
  export interface Schema$VideoPlayer {
    embedHeight?: string | null;
    /**
     * An <iframe\> tag that embeds a player that will play the video.
     */
    embedHtml?: string | null;
    /**
     * The embed width
     */
    embedWidth?: string | null;
  }
  /**
   * Describes processing status and progress and availability of some other Video resource parts.
   */
  export interface Schema$VideoProcessingDetails {
    /**
     * This value indicates whether video editing suggestions, which might improve video quality or the playback experience, are available for the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
     */
    editorSuggestionsAvailability?: string | null;
    /**
     * This value indicates whether file details are available for the uploaded video. You can retrieve a video's file details by requesting the fileDetails part in your videos.list() request.
     */
    fileDetailsAvailability?: string | null;
    /**
     * The reason that YouTube failed to process the video. This property will only have a value if the processingStatus property's value is failed.
     */
    processingFailureReason?: string | null;
    /**
     * This value indicates whether the video processing engine has generated suggestions that might improve YouTube's ability to process the the video, warnings that explain video processing problems, or errors that cause video processing problems. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
     */
    processingIssuesAvailability?: string | null;
    /**
     * The processingProgress object contains information about the progress YouTube has made in processing the video. The values are really only relevant if the video's processing status is processing.
     */
    processingProgress?: Schema$VideoProcessingDetailsProcessingProgress;
    /**
     * The video's processing status. This value indicates whether YouTube was able to process the video or if the video is still being processed.
     */
    processingStatus?: string | null;
    /**
     * This value indicates whether keyword (tag) suggestions are available for the video. Tags can be added to a video's metadata to make it easier for other users to find the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
     */
    tagSuggestionsAvailability?: string | null;
    /**
     * This value indicates whether thumbnail images have been generated for the video.
     */
    thumbnailsAvailability?: string | null;
  }
  /**
   * Video processing progress and completion time estimate.
   */
  export interface Schema$VideoProcessingDetailsProcessingProgress {
    /**
     * The number of parts of the video that YouTube has already processed. You can estimate the percentage of the video that YouTube has already processed by calculating: 100 * parts_processed / parts_total Note that since the estimated number of parts could increase without a corresponding increase in the number of parts that have already been processed, it is possible that the calculated progress could periodically decrease while YouTube processes a video.
     */
    partsProcessed?: string | null;
    /**
     * An estimate of the total number of parts that need to be processed for the video. The number may be updated with more precise estimates while YouTube processes the video.
     */
    partsTotal?: string | null;
    /**
     * An estimate of the amount of time, in millseconds, that YouTube needs to finish processing the video.
     */
    timeLeftMs?: string | null;
  }
  /**
   * DEPRECATED. b/157517979: This part was never populated after it was added. However, it sees non-zero traffic because there is generated client code in the wild that refers to it [1]. We keep this field and do NOT remove it because otherwise V3 would return an error when this part gets requested [2]. [1] https://developers.google.com/resources/api-libraries/documentation/youtube/v3/csharp/latest/classGoogle_1_1Apis_1_1YouTube_1_1v3_1_1Data_1_1VideoProjectDetails.html [2] http://google3/video/youtube/src/python/servers/data_api/common.py?l=1565-1569&rcl=344141677
   */
  export interface Schema$VideoProjectDetails {}
  /**
   * Basic details about rating of a video.
   */
  export interface Schema$VideoRating {
    /**
     * Rating of a video.
     */
    rating?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the video.
     */
    videoId?: string | null;
  }
  /**
   * Recording information associated with the video.
   */
  export interface Schema$VideoRecordingDetails {
    /**
     * The geolocation information associated with the video.
     */
    location?: Schema$GeoPoint;
    /**
     * The text description of the location where the video was recorded.
     */
    locationDescription?: string | null;
    /**
     * The date and time when the video was recorded.
     */
    recordingDate?: string | null;
  }
  /**
   * Basic details about a video, including title, description, uploader, thumbnails and category.
   */
  export interface Schema$VideoSnippet {
    /**
     * The YouTube video category associated with the video.
     */
    categoryId?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the channel that the video was uploaded to.
     */
    channelId?: string | null;
    /**
     * Channel title for the channel that the video belongs to.
     */
    channelTitle?: string | null;
    /**
     * The default_audio_language property specifies the language spoken in the video's default audio track.
     */
    defaultAudioLanguage?: string | null;
    /**
     * The language of the videos's default snippet.
     */
    defaultLanguage?: string | null;
    /**
     * The video's description. @mutable youtube.videos.insert youtube.videos.update
     */
    description?: string | null;
    /**
     * Indicates if the video is an upcoming/active live broadcast. Or it's "none" if the video is not an upcoming/active live broadcast.
     */
    liveBroadcastContent?: string | null;
    /**
     * Localized snippet selected with the hl parameter. If no such localization exists, this field is populated with the default snippet. (Read-only)
     */
    localized?: Schema$VideoLocalization;
    /**
     * The date and time when the video was uploaded.
     */
    publishedAt?: string | null;
    /**
     * A list of keyword tags associated with the video. Tags may contain spaces.
     */
    tags?: string[] | null;
    /**
     * A map of thumbnail images associated with the video. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
     */
    thumbnails?: Schema$ThumbnailDetails;
    /**
     * The video's title. @mutable youtube.videos.insert youtube.videos.update
     */
    title?: string | null;
  }
  /**
   * Statistics about the video, such as the number of times the video was viewed or liked.
   */
  export interface Schema$VideoStatistics {
    /**
     * The number of comments for the video.
     */
    commentCount?: string | null;
    /**
     * The number of users who have indicated that they disliked the video by giving it a negative rating.
     */
    dislikeCount?: string | null;
    /**
     * The number of users who currently have the video marked as a favorite video.
     */
    favoriteCount?: string | null;
    /**
     * The number of users who have indicated that they liked the video by giving it a positive rating.
     */
    likeCount?: string | null;
    /**
     * The number of times the video has been viewed.
     */
    viewCount?: string | null;
  }
  /**
   * Basic details about a video category, such as its localized title. Next Id: 19
   */
  export interface Schema$VideoStatus {
    /**
     * Indicates if the video contains altered or synthetic media.
     */
    containsSyntheticMedia?: boolean | null;
    /**
     * This value indicates if the video can be embedded on another website. @mutable youtube.videos.insert youtube.videos.update
     */
    embeddable?: boolean | null;
    /**
     * This value explains why a video failed to upload. This property is only present if the uploadStatus property indicates that the upload failed.
     */
    failureReason?: string | null;
    /**
     * The video's license. @mutable youtube.videos.insert youtube.videos.update
     */
    license?: string | null;
    madeForKids?: boolean | null;
    /**
     * The video's privacy status.
     */
    privacyStatus?: string | null;
    /**
     * This value indicates if the extended video statistics on the watch page can be viewed by everyone. Note that the view count, likes, etc will still be visible if this is disabled. @mutable youtube.videos.insert youtube.videos.update
     */
    publicStatsViewable?: boolean | null;
    /**
     * The date and time when the video is scheduled to publish. It can be set only if the privacy status of the video is private..
     */
    publishAt?: string | null;
    /**
     * This value explains why YouTube rejected an uploaded video. This property is only present if the uploadStatus property indicates that the upload was rejected.
     */
    rejectionReason?: string | null;
    selfDeclaredMadeForKids?: boolean | null;
    /**
     * The status of the uploaded video.
     */
    uploadStatus?: string | null;
  }
  /**
   * Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions.
   */
  export interface Schema$VideoSuggestions {
    /**
     * A list of video editing operations that might improve the video quality or playback experience of the uploaded video.
     */
    editorSuggestions?: string[] | null;
    /**
     * A list of errors that will prevent YouTube from successfully processing the uploaded video video. These errors indicate that, regardless of the video's current processing status, eventually, that status will almost certainly be failed.
     */
    processingErrors?: string[] | null;
    /**
     * A list of suggestions that may improve YouTube's ability to process the video.
     */
    processingHints?: string[] | null;
    /**
     * A list of reasons why YouTube may have difficulty transcoding the uploaded video or that might result in an erroneous transcoding. These warnings are generated before YouTube actually processes the uploaded video file. In addition, they identify issues that are unlikely to cause the video processing to fail but that might cause problems such as sync issues, video artifacts, or a missing audio track.
     */
    processingWarnings?: string[] | null;
    /**
     * A list of keyword tags that could be added to the video's metadata to increase the likelihood that users will locate your video when searching or browsing on YouTube.
     */
    tagSuggestions?: Schema$VideoSuggestionsTagSuggestion[];
  }
  /**
   * A single tag suggestion with its relevance information.
   */
  export interface Schema$VideoSuggestionsTagSuggestion {
    /**
     * A set of video categories for which the tag is relevant. You can use this information to display appropriate tag suggestions based on the video category that the video uploader associates with the video. By default, tag suggestions are relevant for all categories if there are no restricts defined for the keyword.
     */
    categoryRestricts?: string[] | null;
    /**
     * The keyword tag suggested for the video.
     */
    tag?: string | null;
  }
  /**
   * Freebase topic information related to the video.
   */
  export interface Schema$VideoTopicDetails {
    /**
     * Similar to topic_id, except that these topics are merely relevant to the video. These are topics that may be mentioned in, or appear in the video. You can retrieve information about each topic using Freebase Topic API.
     */
    relevantTopicIds?: string[] | null;
    /**
     * A list of Wikipedia URLs that provide a high-level description of the video's content.
     */
    topicCategories?: string[] | null;
    /**
     * A list of Freebase topic IDs that are centrally associated with the video. These are topics that are centrally featured in the video, and it can be said that the video is mainly about each of these. You can retrieve information about each topic using the < a href="http://wiki.freebase.com/wiki/Topic_API"\>Freebase Topic API.
     */
    topicIds?: string[] | null;
  }
  /**
   * Specifies who is allowed to train on the video.
   */
  export interface Schema$VideoTrainability {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#videoTrainability".
     */
    kind?: string | null;
    /**
     * Specifies who is allowed to train on the video. Valid values are: - a single string "all" - a single string "none" - a list of allowed parties
     */
    permitted?: string[] | null;
    /**
     * The ID of the video.
     */
    videoId?: string | null;
  }
  /**
   * Branding properties for the watch. All deprecated.
   */
  export interface Schema$WatchSettings {
    /**
     * The text color for the video watch page's branded area.
     */
    backgroundColor?: string | null;
    /**
     * An ID that uniquely identifies a playlist that displays next to the video player.
     */
    featuredPlaylistId?: string | null;
    /**
     * The background color for the video watch page's branded area.
     */
    textColor?: string | null;
  }

  export class Resource$Abusereports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Inserts a new resource into this collection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.abuseReports.insert({
     *     // The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "abuseTypes": [],
     *       //   "description": "my_description",
     *       //   "relatedEntities": [],
     *       //   "subject": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "abuseTypes": [],
     *   //   "description": "my_description",
     *   //   "relatedEntities": [],
     *   //   "subject": {}
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
      params: Params$Resource$Abusereports$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Abusereports$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AbuseReport>>;
    insert(
      params: Params$Resource$Abusereports$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Abusereports$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$AbuseReport>,
      callback: BodyResponseCallback<Schema$AbuseReport>
    ): void;
    insert(
      params: Params$Resource$Abusereports$Insert,
      callback: BodyResponseCallback<Schema$AbuseReport>
    ): void;
    insert(callback: BodyResponseCallback<Schema$AbuseReport>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Abusereports$Insert
        | BodyResponseCallback<Schema$AbuseReport>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AbuseReport>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AbuseReport>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AbuseReport>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Abusereports$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Abusereports$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/abuseReports').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AbuseReport>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AbuseReport>(parameters);
      }
    }
  }

  export interface Params$Resource$Abusereports$Insert
    extends StandardParameters {
    /**
     * The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$AbuseReport;
  }

  export class Resource$Activities {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a list of resources, possibly filtered.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.activities.list({
     *     channelId: 'placeholder-value',
     *
     *     home: 'placeholder-value',
     *     // The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *
     *     mine: 'placeholder-value',
     *     // The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The *part* parameter specifies a comma-separated list of one or more activity resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in an activity resource, the snippet property contains other properties that identify the type of activity, a display title for the activity, and so forth. If you set *part=snippet*, the API response will also contain all of those nested properties.
     *     part: 'placeholder-value',
     *
     *     publishedAfter: 'placeholder-value',
     *
     *     publishedBefore: 'placeholder-value',
     *
     *     regionCode: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
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
      params: Params$Resource$Activities$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Activities$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ActivityListResponse>>;
    list(
      params: Params$Resource$Activities$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Activities$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ActivityListResponse>,
      callback: BodyResponseCallback<Schema$ActivityListResponse>
    ): void;
    list(
      params: Params$Resource$Activities$List,
      callback: BodyResponseCallback<Schema$ActivityListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ActivityListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Activities$List
        | BodyResponseCallback<Schema$ActivityListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ActivityListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ActivityListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ActivityListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Activities$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Activities$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/activities').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ActivityListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ActivityListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Activities$List extends StandardParameters {
    /**
     *
     */
    channelId?: string;
    /**
     *
     */
    home?: boolean;
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     *
     */
    mine?: boolean;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The *part* parameter specifies a comma-separated list of one or more activity resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in an activity resource, the snippet property contains other properties that identify the type of activity, a display title for the activity, and so forth. If you set *part=snippet*, the API response will also contain all of those nested properties.
     */
    part?: string[];
    /**
     *
     */
    publishedAfter?: string;
    /**
     *
     */
    publishedBefore?: string;
    /**
     *
     */
    regionCode?: string;
  }

  export class Resource$Captions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.captions.delete({
     *     id: 'placeholder-value',
     *     // ID of the Google+ Page for the channel that the request is be on behalf of
     *     onBehalfOf: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
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
      params: Params$Resource$Captions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Captions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Captions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Captions$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Captions$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Captions$Delete
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
      let params = (paramsOrCallback || {}) as Params$Resource$Captions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Captions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/captions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id'],
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
     * Downloads a caption track.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.captions.download({
     *     // The ID of the caption track to download, required for One Platform.
     *     id: 'placeholder-value',
     *     // ID of the Google+ Page for the channel that the request is be on behalf of
     *     onBehalfOf: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // Convert the captions into this format. Supported options are sbv, srt, and vtt.
     *     tfmt: 'placeholder-value',
     *     // tlang is the language code; machine translate the captions into this language.
     *     tlang: 'placeholder-value',
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
    download(
      params: Params$Resource$Captions$Download,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    download(
      params?: Params$Resource$Captions$Download,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<unknown>>;
    download(
      params: Params$Resource$Captions$Download,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    download(
      params: Params$Resource$Captions$Download,
      options: MethodOptions | BodyResponseCallback<unknown>,
      callback: BodyResponseCallback<unknown>
    ): void;
    download(
      params: Params$Resource$Captions$Download,
      callback: BodyResponseCallback<unknown>
    ): void;
    download(callback: BodyResponseCallback<unknown>): void;
    download(
      paramsOrCallback?:
        | Params$Resource$Captions$Download
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Captions$Download;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Captions$Download;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/captions/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
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
     * Inserts a new resource into this collection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.captions.insert({
     *     // ID of the Google+ Page for the channel that the request is be on behalf of
     *     onBehalfOf: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *part* parameter specifies the caption resource parts that the API response will include. Set the parameter value to snippet.
     *     part: 'placeholder-value',
     *     // Extra parameter to allow automatically syncing the uploaded caption/transcript with the audio.
     *     sync: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {}
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
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {}
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
      params: Params$Resource$Captions$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Captions$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Caption>>;
    insert(
      params: Params$Resource$Captions$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Captions$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Caption>,
      callback: BodyResponseCallback<Schema$Caption>
    ): void;
    insert(
      params: Params$Resource$Captions$Insert,
      callback: BodyResponseCallback<Schema$Caption>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Caption>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Captions$Insert
        | BodyResponseCallback<Schema$Caption>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Caption>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Caption>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Caption>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Captions$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Captions$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/captions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/youtube/v3/captions').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Caption>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Caption>(parameters);
      }
    }

    /**
     * Retrieves a list of resources, possibly filtered.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.captions.list({
     *     // Returns the captions with the given IDs for Stubby or Apiary.
     *     id: 'placeholder-value',
     *     // ID of the Google+ Page for the channel that the request is on behalf of.
     *     onBehalfOf: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *part* parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet.
     *     part: 'placeholder-value',
     *     // Returns the captions for the specified video.
     *     videoId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "visitorId": "my_visitorId"
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
      params: Params$Resource$Captions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Captions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CaptionListResponse>>;
    list(
      params: Params$Resource$Captions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Captions$List,
      options: MethodOptions | BodyResponseCallback<Schema$CaptionListResponse>,
      callback: BodyResponseCallback<Schema$CaptionListResponse>
    ): void;
    list(
      params: Params$Resource$Captions$List,
      callback: BodyResponseCallback<Schema$CaptionListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$CaptionListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Captions$List
        | BodyResponseCallback<Schema$CaptionListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CaptionListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CaptionListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CaptionListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Captions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Captions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/captions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part', 'videoId'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CaptionListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CaptionListResponse>(parameters);
      }
    }

    /**
     * Updates an existing resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.captions.update({
     *     // ID of the Google+ Page for the channel that the request is on behalf of.
     *     onBehalfOf: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *part* parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet.
     *     part: 'placeholder-value',
     *     // Extra parameter to allow automatically syncing the uploaded caption/transcript with the audio.
     *     sync: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {}
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
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {}
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
      params: Params$Resource$Captions$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Captions$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Caption>>;
    update(
      params: Params$Resource$Captions$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Captions$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Caption>,
      callback: BodyResponseCallback<Schema$Caption>
    ): void;
    update(
      params: Params$Resource$Captions$Update,
      callback: BodyResponseCallback<Schema$Caption>
    ): void;
    update(callback: BodyResponseCallback<Schema$Caption>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Captions$Update
        | BodyResponseCallback<Schema$Caption>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Caption>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Caption>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Caption>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Captions$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Captions$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/captions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/youtube/v3/captions').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Caption>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Caption>(parameters);
      }
    }
  }

  export interface Params$Resource$Captions$Delete extends StandardParameters {
    /**
     *
     */
    id?: string;
    /**
     * ID of the Google+ Page for the channel that the request is be on behalf of
     */
    onBehalfOf?: string;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Captions$Download
    extends StandardParameters {
    /**
     * The ID of the caption track to download, required for One Platform.
     */
    id?: string;
    /**
     * ID of the Google+ Page for the channel that the request is be on behalf of
     */
    onBehalfOf?: string;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * Convert the captions into this format. Supported options are sbv, srt, and vtt.
     */
    tfmt?: string;
    /**
     * tlang is the language code; machine translate the captions into this language.
     */
    tlang?: string;
  }
  export interface Params$Resource$Captions$Insert extends StandardParameters {
    /**
     * ID of the Google+ Page for the channel that the request is be on behalf of
     */
    onBehalfOf?: string;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *part* parameter specifies the caption resource parts that the API response will include. Set the parameter value to snippet.
     */
    part?: string[];
    /**
     * Extra parameter to allow automatically syncing the uploaded caption/transcript with the audio.
     */
    sync?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Caption;

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
  export interface Params$Resource$Captions$List extends StandardParameters {
    /**
     * Returns the captions with the given IDs for Stubby or Apiary.
     */
    id?: string[];
    /**
     * ID of the Google+ Page for the channel that the request is on behalf of.
     */
    onBehalfOf?: string;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *part* parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet.
     */
    part?: string[];
    /**
     * Returns the captions for the specified video.
     */
    videoId?: string;
  }
  export interface Params$Resource$Captions$Update extends StandardParameters {
    /**
     * ID of the Google+ Page for the channel that the request is on behalf of.
     */
    onBehalfOf?: string;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *part* parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet.
     */
    part?: string[];
    /**
     * Extra parameter to allow automatically syncing the uploaded caption/transcript with the audio.
     */
    sync?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Caption;

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

  export class Resource$Channelbanners {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Inserts a new resource into this collection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.upload',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.channelBanners.insert({
     *     // Unused, channel_id is currently derived from the security context of the requestor.
     *     channelId: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "kind": "my_kind",
     *       //   "url": "my_url"
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
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "url": "my_url"
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
      params: Params$Resource$Channelbanners$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Channelbanners$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ChannelBannerResource>>;
    insert(
      params: Params$Resource$Channelbanners$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Channelbanners$Insert,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ChannelBannerResource>,
      callback: BodyResponseCallback<Schema$ChannelBannerResource>
    ): void;
    insert(
      params: Params$Resource$Channelbanners$Insert,
      callback: BodyResponseCallback<Schema$ChannelBannerResource>
    ): void;
    insert(callback: BodyResponseCallback<Schema$ChannelBannerResource>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Channelbanners$Insert
        | BodyResponseCallback<Schema$ChannelBannerResource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ChannelBannerResource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ChannelBannerResource>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ChannelBannerResource>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Channelbanners$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Channelbanners$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/channelBanners/insert').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl + '/upload/youtube/v3/channelBanners/insert'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ChannelBannerResource>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ChannelBannerResource>(parameters);
      }
    }
  }

  export interface Params$Resource$Channelbanners$Insert
    extends StandardParameters {
    /**
     * Unused, channel_id is currently derived from the security context of the requestor.
     */
    channelId?: string;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ChannelBannerResource;

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

  export class Resource$Channels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a list of resources, possibly filtered.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *       'https://www.googleapis.com/auth/youtubepartner-channel-audit',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.channels.list({
     *     // Return the channels within the specified guide category ID.
     *     categoryId: 'placeholder-value',
     *     // Return the channel associated with a YouTube handle.
     *     forHandle: 'placeholder-value',
     *     // Return the channel associated with a YouTube username.
     *     forUsername: 'placeholder-value',
     *     // Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX).
     *     hl: 'placeholder-value',
     *     // Return the channels with the specified IDs.
     *     id: 'placeholder-value',
     *     // Return the channels managed by the authenticated user.
     *     managedByMe: 'placeholder-value',
     *     // The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // Return the ids of channels owned by the authenticated user.
     *     mine: 'placeholder-value',
     *     // Return the channels subscribed to the authenticated user
     *     mySubscribers: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The *part* parameter specifies a comma-separated list of one or more channel resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channel resource, the contentDetails property contains other properties, such as the uploads properties. As such, if you set *part=contentDetails*, the API response will also contain all of those nested properties.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
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
      params: Params$Resource$Channels$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Channels$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ChannelListResponse>>;
    list(
      params: Params$Resource$Channels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Channels$List,
      options: MethodOptions | BodyResponseCallback<Schema$ChannelListResponse>,
      callback: BodyResponseCallback<Schema$ChannelListResponse>
    ): void;
    list(
      params: Params$Resource$Channels$List,
      callback: BodyResponseCallback<Schema$ChannelListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ChannelListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Channels$List
        | BodyResponseCallback<Schema$ChannelListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ChannelListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ChannelListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ChannelListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Channels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Channels$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/channels').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ChannelListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ChannelListResponse>(parameters);
      }
    }

    /**
     * Updates an existing resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.channels.update({
     *     // The *onBehalfOfContentOwner* parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The API currently only allows the parameter value to be set to either brandingSettings or invideoPromotion. (You cannot update both of those parts with a single request.) Note that this method overrides the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "auditDetails": {},
     *       //   "brandingSettings": {},
     *       //   "contentDetails": {},
     *       //   "contentOwnerDetails": {},
     *       //   "conversionPings": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "localizations": {},
     *       //   "snippet": {},
     *       //   "statistics": {},
     *       //   "status": {},
     *       //   "topicDetails": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditDetails": {},
     *   //   "brandingSettings": {},
     *   //   "contentDetails": {},
     *   //   "contentOwnerDetails": {},
     *   //   "conversionPings": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "localizations": {},
     *   //   "snippet": {},
     *   //   "statistics": {},
     *   //   "status": {},
     *   //   "topicDetails": {}
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
      params: Params$Resource$Channels$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Channels$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Channel>>;
    update(
      params: Params$Resource$Channels$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Channels$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    update(
      params: Params$Resource$Channels$Update,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    update(callback: BodyResponseCallback<Schema$Channel>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Channels$Update
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
      let params = (paramsOrCallback || {}) as Params$Resource$Channels$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Channels$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/channels').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
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

  export interface Params$Resource$Channels$List extends StandardParameters {
    /**
     * Return the channels within the specified guide category ID.
     */
    categoryId?: string;
    /**
     * Return the channel associated with a YouTube handle.
     */
    forHandle?: string;
    /**
     * Return the channel associated with a YouTube username.
     */
    forUsername?: string;
    /**
     * Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX).
     */
    hl?: string;
    /**
     * Return the channels with the specified IDs.
     */
    id?: string[];
    /**
     * Return the channels managed by the authenticated user.
     */
    managedByMe?: boolean;
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * Return the ids of channels owned by the authenticated user.
     */
    mine?: boolean;
    /**
     * Return the channels subscribed to the authenticated user
     */
    mySubscribers?: boolean;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The *part* parameter specifies a comma-separated list of one or more channel resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channel resource, the contentDetails property contains other properties, such as the uploads properties. As such, if you set *part=contentDetails*, the API response will also contain all of those nested properties.
     */
    part?: string[];
  }
  export interface Params$Resource$Channels$Update extends StandardParameters {
    /**
     * The *onBehalfOfContentOwner* parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The API currently only allows the parameter value to be set to either brandingSettings or invideoPromotion. (You cannot update both of those parts with a single request.) Note that this method overrides the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }

  export class Resource$Channelsections {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.channelSections.delete({
     *     id: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
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
      params: Params$Resource$Channelsections$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Channelsections$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Channelsections$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Channelsections$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Channelsections$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Channelsections$Delete
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
        {}) as Params$Resource$Channelsections$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Channelsections$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/channelSections').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id'],
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
     * Inserts a new resource into this collection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.channelSections.insert({
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "localizations": {},
     *       //   "snippet": {},
     *       //   "targeting": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "localizations": {},
     *   //   "snippet": {},
     *   //   "targeting": {}
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
      params: Params$Resource$Channelsections$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Channelsections$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ChannelSection>>;
    insert(
      params: Params$Resource$Channelsections$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Channelsections$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$ChannelSection>,
      callback: BodyResponseCallback<Schema$ChannelSection>
    ): void;
    insert(
      params: Params$Resource$Channelsections$Insert,
      callback: BodyResponseCallback<Schema$ChannelSection>
    ): void;
    insert(callback: BodyResponseCallback<Schema$ChannelSection>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Channelsections$Insert
        | BodyResponseCallback<Schema$ChannelSection>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ChannelSection>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ChannelSection>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ChannelSection>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Channelsections$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Channelsections$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/channelSections').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ChannelSection>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ChannelSection>(parameters);
      }
    }

    /**
     * Retrieves a list of resources, possibly filtered.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.channelSections.list({
     *     // Return the ChannelSections owned by the specified channel ID.
     *     channelId: 'placeholder-value',
     *     // Return content in specified language
     *     hl: 'placeholder-value',
     *     // Return the ChannelSections with the given IDs for Stubby or Apiary.
     *     id: 'placeholder-value',
     *     // Return the ChannelSections owned by the authenticated user.
     *     mine: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *part* parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the channelSection. If you set *part=snippet*, the API response will also contain all of those nested properties.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "visitorId": "my_visitorId"
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
      params: Params$Resource$Channelsections$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Channelsections$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ChannelSectionListResponse>>;
    list(
      params: Params$Resource$Channelsections$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Channelsections$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ChannelSectionListResponse>,
      callback: BodyResponseCallback<Schema$ChannelSectionListResponse>
    ): void;
    list(
      params: Params$Resource$Channelsections$List,
      callback: BodyResponseCallback<Schema$ChannelSectionListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ChannelSectionListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Channelsections$List
        | BodyResponseCallback<Schema$ChannelSectionListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ChannelSectionListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ChannelSectionListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ChannelSectionListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Channelsections$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Channelsections$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/channelSections').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ChannelSectionListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ChannelSectionListResponse>(parameters);
      }
    }

    /**
     * Updates an existing resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.channelSections.update({
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "localizations": {},
     *       //   "snippet": {},
     *       //   "targeting": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "localizations": {},
     *   //   "snippet": {},
     *   //   "targeting": {}
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
      params: Params$Resource$Channelsections$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Channelsections$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ChannelSection>>;
    update(
      params: Params$Resource$Channelsections$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Channelsections$Update,
      options: MethodOptions | BodyResponseCallback<Schema$ChannelSection>,
      callback: BodyResponseCallback<Schema$ChannelSection>
    ): void;
    update(
      params: Params$Resource$Channelsections$Update,
      callback: BodyResponseCallback<Schema$ChannelSection>
    ): void;
    update(callback: BodyResponseCallback<Schema$ChannelSection>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Channelsections$Update
        | BodyResponseCallback<Schema$ChannelSection>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ChannelSection>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ChannelSection>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ChannelSection>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Channelsections$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Channelsections$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/channelSections').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ChannelSection>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ChannelSection>(parameters);
      }
    }
  }

  export interface Params$Resource$Channelsections$Delete
    extends StandardParameters {
    /**
     *
     */
    id?: string;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Channelsections$Insert
    extends StandardParameters {
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$ChannelSection;
  }
  export interface Params$Resource$Channelsections$List
    extends StandardParameters {
    /**
     * Return the ChannelSections owned by the specified channel ID.
     */
    channelId?: string;
    /**
     * Return content in specified language
     */
    hl?: string;
    /**
     * Return the ChannelSections with the given IDs for Stubby or Apiary.
     */
    id?: string[];
    /**
     * Return the ChannelSections owned by the authenticated user.
     */
    mine?: boolean;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *part* parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the channelSection. If you set *part=snippet*, the API response will also contain all of those nested properties.
     */
    part?: string[];
  }
  export interface Params$Resource$Channelsections$Update
    extends StandardParameters {
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$ChannelSection;
  }

  export class Resource$Comments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtube.force-ssl'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.comments.delete({
     *     id: 'placeholder-value',
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

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/comments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id'],
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
     * Inserts a new resource into this collection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtube.force-ssl'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.comments.insert({
     *     // The *part* parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {}
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

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/comments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
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
     * Retrieves a list of resources, possibly filtered.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtube.force-ssl'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.comments.list({
     *     // Returns the comments with the given IDs for One Platform.
     *     id: 'placeholder-value',
     *     // The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // Returns replies to the specified comment. Note, currently YouTube features only one level of replies (ie replies to top level comments). However replies to replies may be supported in the future.
     *     parentId: 'placeholder-value',
     *     // The *part* parameter specifies a comma-separated list of one or more comment resource properties that the API response will include.
     *     part: 'placeholder-value',
     *     // The requested text format for the returned comments.
     *     textFormat: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
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
    ): Promise<GaxiosResponseWithHTTP2<Schema$CommentListResponse>>;
    list(
      params: Params$Resource$Comments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Comments$List,
      options: MethodOptions | BodyResponseCallback<Schema$CommentListResponse>,
      callback: BodyResponseCallback<Schema$CommentListResponse>
    ): void;
    list(
      params: Params$Resource$Comments$List,
      callback: BodyResponseCallback<Schema$CommentListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$CommentListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Comments$List
        | BodyResponseCallback<Schema$CommentListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CommentListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CommentListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CommentListResponse>>
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

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/comments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CommentListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CommentListResponse>(parameters);
      }
    }

    /**
     * Expresses the caller's opinion that one or more comments should be flagged as spam.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtube.force-ssl'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.comments.markAsSpam({
     *     // Flags the comments with the given IDs as spam in the caller's opinion.
     *     id: 'placeholder-value',
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
    markAsSpam(
      params: Params$Resource$Comments$Markasspam,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    markAsSpam(
      params?: Params$Resource$Comments$Markasspam,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    markAsSpam(
      params: Params$Resource$Comments$Markasspam,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    markAsSpam(
      params: Params$Resource$Comments$Markasspam,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    markAsSpam(
      params: Params$Resource$Comments$Markasspam,
      callback: BodyResponseCallback<void>
    ): void;
    markAsSpam(callback: BodyResponseCallback<void>): void;
    markAsSpam(
      paramsOrCallback?:
        | Params$Resource$Comments$Markasspam
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
        {}) as Params$Resource$Comments$Markasspam;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Markasspam;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/comments/markAsSpam').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id'],
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
     * Sets the moderation status of one or more comments.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtube.force-ssl'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.comments.setModerationStatus({
     *     // If set to true the author of the comment gets added to the ban list. This means all future comments of the author will autmomatically be rejected. Only valid in combination with STATUS_REJECTED.
     *     banAuthor: 'placeholder-value',
     *     // Modifies the moderation status of the comments with the given IDs
     *     id: 'placeholder-value',
     *     // Specifies the requested moderation status. Note, comments can be in statuses, which are not available through this call. For example, this call does not allow to mark a comment as 'likely spam'. Valid values: 'heldForReview', 'published' or 'rejected'.
     *     moderationStatus: 'placeholder-value',
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
    setModerationStatus(
      params: Params$Resource$Comments$Setmoderationstatus,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setModerationStatus(
      params?: Params$Resource$Comments$Setmoderationstatus,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    setModerationStatus(
      params: Params$Resource$Comments$Setmoderationstatus,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setModerationStatus(
      params: Params$Resource$Comments$Setmoderationstatus,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    setModerationStatus(
      params: Params$Resource$Comments$Setmoderationstatus,
      callback: BodyResponseCallback<void>
    ): void;
    setModerationStatus(callback: BodyResponseCallback<void>): void;
    setModerationStatus(
      paramsOrCallback?:
        | Params$Resource$Comments$Setmoderationstatus
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
        {}) as Params$Resource$Comments$Setmoderationstatus;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Setmoderationstatus;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/comments/setModerationStatus').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id', 'moderationStatus'],
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
     * Updates an existing resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtube.force-ssl'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.comments.update({
     *     // The *part* parameter identifies the properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {}
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

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/comments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
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
     *
     */
    id?: string;
  }
  export interface Params$Resource$Comments$Insert extends StandardParameters {
    /**
     * The *part* parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$Comment;
  }
  export interface Params$Resource$Comments$List extends StandardParameters {
    /**
     * Returns the comments with the given IDs for One Platform.
     */
    id?: string[];
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * Returns replies to the specified comment. Note, currently YouTube features only one level of replies (ie replies to top level comments). However replies to replies may be supported in the future.
     */
    parentId?: string;
    /**
     * The *part* parameter specifies a comma-separated list of one or more comment resource properties that the API response will include.
     */
    part?: string[];
    /**
     * The requested text format for the returned comments.
     */
    textFormat?: string;
  }
  export interface Params$Resource$Comments$Markasspam
    extends StandardParameters {
    /**
     * Flags the comments with the given IDs as spam in the caller's opinion.
     */
    id?: string[];
  }
  export interface Params$Resource$Comments$Setmoderationstatus
    extends StandardParameters {
    /**
     * If set to true the author of the comment gets added to the ban list. This means all future comments of the author will autmomatically be rejected. Only valid in combination with STATUS_REJECTED.
     */
    banAuthor?: boolean;
    /**
     * Modifies the moderation status of the comments with the given IDs
     */
    id?: string[];
    /**
     * Specifies the requested moderation status. Note, comments can be in statuses, which are not available through this call. For example, this call does not allow to mark a comment as 'likely spam'. Valid values: 'heldForReview', 'published' or 'rejected'.
     */
    moderationStatus?: string;
  }
  export interface Params$Resource$Comments$Update extends StandardParameters {
    /**
     * The *part* parameter identifies the properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$Comment;
  }

  export class Resource$Commentthreads {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Inserts a new resource into this collection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtube.force-ssl'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.commentThreads.insert({
     *     // The *part* parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "replies": {},
     *       //   "snippet": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "replies": {},
     *   //   "snippet": {}
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
      params: Params$Resource$Commentthreads$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Commentthreads$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CommentThread>>;
    insert(
      params: Params$Resource$Commentthreads$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Commentthreads$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$CommentThread>,
      callback: BodyResponseCallback<Schema$CommentThread>
    ): void;
    insert(
      params: Params$Resource$Commentthreads$Insert,
      callback: BodyResponseCallback<Schema$CommentThread>
    ): void;
    insert(callback: BodyResponseCallback<Schema$CommentThread>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Commentthreads$Insert
        | BodyResponseCallback<Schema$CommentThread>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CommentThread>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CommentThread>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CommentThread>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Commentthreads$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Commentthreads$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/commentThreads').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CommentThread>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CommentThread>(parameters);
      }
    }

    /**
     * Retrieves a list of resources, possibly filtered.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtube.force-ssl'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.commentThreads.list({
     *     // Returns the comment threads of all videos of the channel and the channel comments as well.
     *     allThreadsRelatedToChannelId: 'placeholder-value',
     *     // Returns the comment threads for all the channel comments (ie does not include comments left on videos).
     *     channelId: 'placeholder-value',
     *     // Returns the comment threads with the given IDs for Stubby or Apiary.
     *     id: 'placeholder-value',
     *     // The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // Limits the returned comment threads to those with the specified moderation status. Not compatible with the 'id' filter. Valid values: published, heldForReview, likelySpam.
     *     moderationStatus: 'placeholder-value',
     *
     *     order: 'placeholder-value',
     *     // The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The *part* parameter specifies a comma-separated list of one or more commentThread resource properties that the API response will include.
     *     part: 'placeholder-value',
     *     // Returns the comment threads of the specified post.
     *     postId: 'placeholder-value',
     *     // Limits the returned comment threads to those matching the specified key words. Not compatible with the 'id' filter.
     *     searchTerms: 'placeholder-value',
     *     // The requested text format for the returned comments.
     *     textFormat: 'placeholder-value',
     *     // Returns the comment threads of the specified video.
     *     videoId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
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
      params: Params$Resource$Commentthreads$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Commentthreads$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CommentThreadListResponse>>;
    list(
      params: Params$Resource$Commentthreads$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Commentthreads$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CommentThreadListResponse>,
      callback: BodyResponseCallback<Schema$CommentThreadListResponse>
    ): void;
    list(
      params: Params$Resource$Commentthreads$List,
      callback: BodyResponseCallback<Schema$CommentThreadListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$CommentThreadListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Commentthreads$List
        | BodyResponseCallback<Schema$CommentThreadListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CommentThreadListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CommentThreadListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CommentThreadListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Commentthreads$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Commentthreads$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/commentThreads').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CommentThreadListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CommentThreadListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Commentthreads$Insert
    extends StandardParameters {
    /**
     * The *part* parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$CommentThread;
  }
  export interface Params$Resource$Commentthreads$List
    extends StandardParameters {
    /**
     * Returns the comment threads of all videos of the channel and the channel comments as well.
     */
    allThreadsRelatedToChannelId?: string;
    /**
     * Returns the comment threads for all the channel comments (ie does not include comments left on videos).
     */
    channelId?: string;
    /**
     * Returns the comment threads with the given IDs for Stubby or Apiary.
     */
    id?: string[];
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * Limits the returned comment threads to those with the specified moderation status. Not compatible with the 'id' filter. Valid values: published, heldForReview, likelySpam.
     */
    moderationStatus?: string;
    /**
     *
     */
    order?: string;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The *part* parameter specifies a comma-separated list of one or more commentThread resource properties that the API response will include.
     */
    part?: string[];
    /**
     * Returns the comment threads of the specified post.
     */
    postId?: string;
    /**
     * Limits the returned comment threads to those matching the specified key words. Not compatible with the 'id' filter.
     */
    searchTerms?: string;
    /**
     * The requested text format for the returned comments.
     */
    textFormat?: string;
    /**
     * Returns the comment threads of the specified video.
     */
    videoId?: string;
  }

  export class Resource$I18nlanguages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a list of resources, possibly filtered.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.i18nLanguages.list({
     *     hl: 'placeholder-value',
     *     // The *part* parameter specifies the i18nLanguage resource properties that the API response will include. Set the parameter value to snippet.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "visitorId": "my_visitorId"
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
      params: Params$Resource$I18nlanguages$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$I18nlanguages$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$I18nLanguageListResponse>>;
    list(
      params: Params$Resource$I18nlanguages$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$I18nlanguages$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$I18nLanguageListResponse>,
      callback: BodyResponseCallback<Schema$I18nLanguageListResponse>
    ): void;
    list(
      params: Params$Resource$I18nlanguages$List,
      callback: BodyResponseCallback<Schema$I18nLanguageListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$I18nLanguageListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$I18nlanguages$List
        | BodyResponseCallback<Schema$I18nLanguageListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$I18nLanguageListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$I18nLanguageListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$I18nLanguageListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$I18nlanguages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$I18nlanguages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/i18nLanguages').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$I18nLanguageListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$I18nLanguageListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$I18nlanguages$List
    extends StandardParameters {
    /**
     *
     */
    hl?: string;
    /**
     * The *part* parameter specifies the i18nLanguage resource properties that the API response will include. Set the parameter value to snippet.
     */
    part?: string[];
  }

  export class Resource$I18nregions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a list of resources, possibly filtered.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.i18nRegions.list({
     *     hl: 'placeholder-value',
     *     // The *part* parameter specifies the i18nRegion resource properties that the API response will include. Set the parameter value to snippet.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "visitorId": "my_visitorId"
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
      params: Params$Resource$I18nregions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$I18nregions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$I18nRegionListResponse>>;
    list(
      params: Params$Resource$I18nregions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$I18nregions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$I18nRegionListResponse>,
      callback: BodyResponseCallback<Schema$I18nRegionListResponse>
    ): void;
    list(
      params: Params$Resource$I18nregions$List,
      callback: BodyResponseCallback<Schema$I18nRegionListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$I18nRegionListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$I18nregions$List
        | BodyResponseCallback<Schema$I18nRegionListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$I18nRegionListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$I18nRegionListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$I18nRegionListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$I18nregions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$I18nregions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/i18nRegions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$I18nRegionListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$I18nRegionListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$I18nregions$List extends StandardParameters {
    /**
     *
     */
    hl?: string;
    /**
     * The *part* parameter specifies the i18nRegion resource properties that the API response will include. Set the parameter value to snippet.
     */
    part?: string[];
  }

  export class Resource$Livebroadcasts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Bind a broadcast to a stream.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveBroadcasts.bind({
     *     // Broadcast to bind to the stream
     *     id: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     *     part: 'placeholder-value',
     *     // Stream to bind, if not set unbind the current one.
     *     streamId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "monetizationDetails": {},
     *   //   "snippet": {},
     *   //   "statistics": {},
     *   //   "status": {}
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
    bind(
      params: Params$Resource$Livebroadcasts$Bind,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    bind(
      params?: Params$Resource$Livebroadcasts$Bind,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LiveBroadcast>>;
    bind(
      params: Params$Resource$Livebroadcasts$Bind,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    bind(
      params: Params$Resource$Livebroadcasts$Bind,
      options: MethodOptions | BodyResponseCallback<Schema$LiveBroadcast>,
      callback: BodyResponseCallback<Schema$LiveBroadcast>
    ): void;
    bind(
      params: Params$Resource$Livebroadcasts$Bind,
      callback: BodyResponseCallback<Schema$LiveBroadcast>
    ): void;
    bind(callback: BodyResponseCallback<Schema$LiveBroadcast>): void;
    bind(
      paramsOrCallback?:
        | Params$Resource$Livebroadcasts$Bind
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LiveBroadcast>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livebroadcasts$Bind;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livebroadcasts$Bind;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveBroadcasts/bind').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id', 'part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveBroadcast>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiveBroadcast>(parameters);
      }
    }

    /**
     * Delete a given broadcast.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveBroadcasts.delete({
     *     // Broadcast to delete.
     *     id: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
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
      params: Params$Resource$Livebroadcasts$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Livebroadcasts$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Livebroadcasts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Livebroadcasts$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Livebroadcasts$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Livebroadcasts$Delete
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
        {}) as Params$Resource$Livebroadcasts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livebroadcasts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveBroadcasts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id'],
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
     * Inserts a new stream for the authenticated user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveBroadcasts.insert({
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, contentDetails, and status.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "monetizationDetails": {},
     *       //   "snippet": {},
     *       //   "statistics": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "monetizationDetails": {},
     *   //   "snippet": {},
     *   //   "statistics": {},
     *   //   "status": {}
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
      params: Params$Resource$Livebroadcasts$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Livebroadcasts$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LiveBroadcast>>;
    insert(
      params: Params$Resource$Livebroadcasts$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Livebroadcasts$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$LiveBroadcast>,
      callback: BodyResponseCallback<Schema$LiveBroadcast>
    ): void;
    insert(
      params: Params$Resource$Livebroadcasts$Insert,
      callback: BodyResponseCallback<Schema$LiveBroadcast>
    ): void;
    insert(callback: BodyResponseCallback<Schema$LiveBroadcast>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Livebroadcasts$Insert
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LiveBroadcast>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livebroadcasts$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livebroadcasts$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveBroadcasts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveBroadcast>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiveBroadcast>(parameters);
      }
    }

    /**
     * Insert cuepoints in a broadcast
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveBroadcasts.insertCuepoint({
     *     // Broadcast to insert ads to, or equivalently `external_video_id` for internal use.
     *     id: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cueType": "my_cueType",
     *       //   "durationSecs": 0,
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "insertionOffsetTimeMs": "my_insertionOffsetTimeMs",
     *       //   "walltimeMs": "my_walltimeMs"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cueType": "my_cueType",
     *   //   "durationSecs": 0,
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "insertionOffsetTimeMs": "my_insertionOffsetTimeMs",
     *   //   "walltimeMs": "my_walltimeMs"
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
    insertCuepoint(
      params: Params$Resource$Livebroadcasts$Insertcuepoint,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insertCuepoint(
      params?: Params$Resource$Livebroadcasts$Insertcuepoint,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Cuepoint>>;
    insertCuepoint(
      params: Params$Resource$Livebroadcasts$Insertcuepoint,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insertCuepoint(
      params: Params$Resource$Livebroadcasts$Insertcuepoint,
      options: MethodOptions | BodyResponseCallback<Schema$Cuepoint>,
      callback: BodyResponseCallback<Schema$Cuepoint>
    ): void;
    insertCuepoint(
      params: Params$Resource$Livebroadcasts$Insertcuepoint,
      callback: BodyResponseCallback<Schema$Cuepoint>
    ): void;
    insertCuepoint(callback: BodyResponseCallback<Schema$Cuepoint>): void;
    insertCuepoint(
      paramsOrCallback?:
        | Params$Resource$Livebroadcasts$Insertcuepoint
        | BodyResponseCallback<Schema$Cuepoint>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Cuepoint>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Cuepoint>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Cuepoint>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livebroadcasts$Insertcuepoint;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livebroadcasts$Insertcuepoint;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveBroadcasts/cuepoint').replace(
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
        createAPIRequest<Schema$Cuepoint>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Cuepoint>(parameters);
      }
    }

    /**
     * Retrieve the list of broadcasts associated with the given channel.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveBroadcasts.list({
     *     // Return broadcasts with a certain status, e.g. active broadcasts.
     *     broadcastStatus: 'placeholder-value',
     *     // Return only broadcasts with the selected type.
     *     broadcastType: 'placeholder-value',
     *     // Return broadcasts with the given ids from Stubby or Apiary.
     *     id: 'placeholder-value',
     *     // The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *
     *     mine: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, status and statistics.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
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
      params: Params$Resource$Livebroadcasts$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Livebroadcasts$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LiveBroadcastListResponse>>;
    list(
      params: Params$Resource$Livebroadcasts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Livebroadcasts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveBroadcastListResponse>,
      callback: BodyResponseCallback<Schema$LiveBroadcastListResponse>
    ): void;
    list(
      params: Params$Resource$Livebroadcasts$List,
      callback: BodyResponseCallback<Schema$LiveBroadcastListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$LiveBroadcastListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Livebroadcasts$List
        | BodyResponseCallback<Schema$LiveBroadcastListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveBroadcastListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveBroadcastListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LiveBroadcastListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livebroadcasts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livebroadcasts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveBroadcasts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveBroadcastListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiveBroadcastListResponse>(parameters);
      }
    }

    /**
     * Transition a broadcast to a given status.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveBroadcasts.transition({
     *     // The status to which the broadcast is going to transition.
     *     broadcastStatus: 'placeholder-value',
     *     // Broadcast to transition.
     *     id: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "monetizationDetails": {},
     *   //   "snippet": {},
     *   //   "statistics": {},
     *   //   "status": {}
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
    transition(
      params: Params$Resource$Livebroadcasts$Transition,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    transition(
      params?: Params$Resource$Livebroadcasts$Transition,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LiveBroadcast>>;
    transition(
      params: Params$Resource$Livebroadcasts$Transition,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    transition(
      params: Params$Resource$Livebroadcasts$Transition,
      options: MethodOptions | BodyResponseCallback<Schema$LiveBroadcast>,
      callback: BodyResponseCallback<Schema$LiveBroadcast>
    ): void;
    transition(
      params: Params$Resource$Livebroadcasts$Transition,
      callback: BodyResponseCallback<Schema$LiveBroadcast>
    ): void;
    transition(callback: BodyResponseCallback<Schema$LiveBroadcast>): void;
    transition(
      paramsOrCallback?:
        | Params$Resource$Livebroadcasts$Transition
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LiveBroadcast>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livebroadcasts$Transition;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livebroadcasts$Transition;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveBroadcasts/transition').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['broadcastStatus', 'id', 'part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveBroadcast>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiveBroadcast>(parameters);
      }
    }

    /**
     * Updates an existing broadcast for the authenticated user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveBroadcasts.update({
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, contentDetails, and status. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a broadcast's privacy status is defined in the status part. As such, if your request is updating a private or unlisted broadcast, and the request's part parameter value includes the status part, the broadcast's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the broadcast will revert to the default privacy setting.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "monetizationDetails": {},
     *       //   "snippet": {},
     *       //   "statistics": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "monetizationDetails": {},
     *   //   "snippet": {},
     *   //   "statistics": {},
     *   //   "status": {}
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
      params: Params$Resource$Livebroadcasts$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Livebroadcasts$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LiveBroadcast>>;
    update(
      params: Params$Resource$Livebroadcasts$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Livebroadcasts$Update,
      options: MethodOptions | BodyResponseCallback<Schema$LiveBroadcast>,
      callback: BodyResponseCallback<Schema$LiveBroadcast>
    ): void;
    update(
      params: Params$Resource$Livebroadcasts$Update,
      callback: BodyResponseCallback<Schema$LiveBroadcast>
    ): void;
    update(callback: BodyResponseCallback<Schema$LiveBroadcast>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Livebroadcasts$Update
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LiveBroadcast>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livebroadcasts$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livebroadcasts$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveBroadcasts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveBroadcast>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiveBroadcast>(parameters);
      }
    }
  }

  export interface Params$Resource$Livebroadcasts$Bind
    extends StandardParameters {
    /**
     * Broadcast to bind to the stream
     */
    id?: string;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     */
    part?: string[];
    /**
     * Stream to bind, if not set unbind the current one.
     */
    streamId?: string;
  }
  export interface Params$Resource$Livebroadcasts$Delete
    extends StandardParameters {
    /**
     * Broadcast to delete.
     */
    id?: string;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
  }
  export interface Params$Resource$Livebroadcasts$Insert
    extends StandardParameters {
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, contentDetails, and status.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$LiveBroadcast;
  }
  export interface Params$Resource$Livebroadcasts$Insertcuepoint
    extends StandardParameters {
    /**
     * Broadcast to insert ads to, or equivalently `external_video_id` for internal use.
     */
    id?: string;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$Cuepoint;
  }
  export interface Params$Resource$Livebroadcasts$List
    extends StandardParameters {
    /**
     * Return broadcasts with a certain status, e.g. active broadcasts.
     */
    broadcastStatus?: string;
    /**
     * Return only broadcasts with the selected type.
     */
    broadcastType?: string;
    /**
     * Return broadcasts with the given ids from Stubby or Apiary.
     */
    id?: string[];
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     *
     */
    mine?: boolean;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, status and statistics.
     */
    part?: string[];
  }
  export interface Params$Resource$Livebroadcasts$Transition
    extends StandardParameters {
    /**
     * The status to which the broadcast is going to transition.
     */
    broadcastStatus?: string;
    /**
     * Broadcast to transition.
     */
    id?: string;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     */
    part?: string[];
  }
  export interface Params$Resource$Livebroadcasts$Update
    extends StandardParameters {
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, contentDetails, and status. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a broadcast's privacy status is defined in the status part. As such, if your request is updating a private or unlisted broadcast, and the request's part parameter value includes the status part, the broadcast's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the broadcast will revert to the default privacy setting.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$LiveBroadcast;
  }

  export class Resource$Livechatbans {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a chat ban.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveChatBans.delete({
     *     id: 'placeholder-value',
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
      params: Params$Resource$Livechatbans$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Livechatbans$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Livechatbans$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Livechatbans$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Livechatbans$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Livechatbans$Delete
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
        {}) as Params$Resource$Livechatbans$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livechatbans$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveChat/bans').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id'],
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
     * Inserts a new resource into this collection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveChatBans.insert({
     *     // The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {}
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
      params: Params$Resource$Livechatbans$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Livechatbans$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LiveChatBan>>;
    insert(
      params: Params$Resource$Livechatbans$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Livechatbans$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$LiveChatBan>,
      callback: BodyResponseCallback<Schema$LiveChatBan>
    ): void;
    insert(
      params: Params$Resource$Livechatbans$Insert,
      callback: BodyResponseCallback<Schema$LiveChatBan>
    ): void;
    insert(callback: BodyResponseCallback<Schema$LiveChatBan>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Livechatbans$Insert
        | BodyResponseCallback<Schema$LiveChatBan>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveChatBan>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveChatBan>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LiveChatBan>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livechatbans$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livechatbans$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveChat/bans').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveChatBan>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiveChatBan>(parameters);
      }
    }
  }

  export interface Params$Resource$Livechatbans$Delete
    extends StandardParameters {
    /**
     *
     */
    id?: string;
  }
  export interface Params$Resource$Livechatbans$Insert
    extends StandardParameters {
    /**
     * The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$LiveChatBan;
  }

  export class Resource$Livechatmessages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a chat message.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveChatMessages.delete({
     *     id: 'placeholder-value',
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
      params: Params$Resource$Livechatmessages$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Livechatmessages$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Livechatmessages$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Livechatmessages$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Livechatmessages$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Livechatmessages$Delete
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
        {}) as Params$Resource$Livechatmessages$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livechatmessages$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveChat/messages').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id'],
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
     * Inserts a new resource into this collection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveChatMessages.insert({
     *     // The *part* parameter serves two purposes. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the parameter value to snippet.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "authorDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "authorDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {}
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
      params: Params$Resource$Livechatmessages$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Livechatmessages$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LiveChatMessage>>;
    insert(
      params: Params$Resource$Livechatmessages$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Livechatmessages$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$LiveChatMessage>,
      callback: BodyResponseCallback<Schema$LiveChatMessage>
    ): void;
    insert(
      params: Params$Resource$Livechatmessages$Insert,
      callback: BodyResponseCallback<Schema$LiveChatMessage>
    ): void;
    insert(callback: BodyResponseCallback<Schema$LiveChatMessage>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Livechatmessages$Insert
        | BodyResponseCallback<Schema$LiveChatMessage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveChatMessage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveChatMessage>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LiveChatMessage>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livechatmessages$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livechatmessages$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveChat/messages').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveChatMessage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiveChatMessage>(parameters);
      }
    }

    /**
     * Retrieves a list of resources, possibly filtered.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveChatMessages.list({
     *     // Specifies the localization language in which the system messages should be returned.
     *     hl: 'placeholder-value',
     *     // The id of the live chat for which comments should be returned.
     *     liveChatId: 'placeholder-value',
     *     // The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. Not used in the streaming RPC.
     *     maxResults: 'placeholder-value',
     *     // The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The *part* parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id, snippet, and authorDetails.
     *     part: 'placeholder-value',
     *     // Specifies the size of the profile image that should be returned for each user.
     *     profileImageSize: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activePollItem": {},
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "offlineAt": "my_offlineAt",
     *   //   "pageInfo": {},
     *   //   "pollingIntervalMillis": 0,
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
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
      params: Params$Resource$Livechatmessages$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Livechatmessages$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LiveChatMessageListResponse>>;
    list(
      params: Params$Resource$Livechatmessages$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Livechatmessages$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveChatMessageListResponse>,
      callback: BodyResponseCallback<Schema$LiveChatMessageListResponse>
    ): void;
    list(
      params: Params$Resource$Livechatmessages$List,
      callback: BodyResponseCallback<Schema$LiveChatMessageListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$LiveChatMessageListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Livechatmessages$List
        | BodyResponseCallback<Schema$LiveChatMessageListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveChatMessageListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveChatMessageListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LiveChatMessageListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livechatmessages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livechatmessages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveChat/messages').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['liveChatId', 'part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveChatMessageListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiveChatMessageListResponse>(parameters);
      }
    }

    /**
     * Transition a durable chat event.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveChatMessages.transition({
     *     // The ID that uniquely identify the chat message event to transition.
     *     id: 'placeholder-value',
     *     // The status to which the chat event is going to transition.
     *     status: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "authorDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {}
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
    transition(
      params: Params$Resource$Livechatmessages$Transition,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    transition(
      params?: Params$Resource$Livechatmessages$Transition,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LiveChatMessage>>;
    transition(
      params: Params$Resource$Livechatmessages$Transition,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    transition(
      params: Params$Resource$Livechatmessages$Transition,
      options: MethodOptions | BodyResponseCallback<Schema$LiveChatMessage>,
      callback: BodyResponseCallback<Schema$LiveChatMessage>
    ): void;
    transition(
      params: Params$Resource$Livechatmessages$Transition,
      callback: BodyResponseCallback<Schema$LiveChatMessage>
    ): void;
    transition(callback: BodyResponseCallback<Schema$LiveChatMessage>): void;
    transition(
      paramsOrCallback?:
        | Params$Resource$Livechatmessages$Transition
        | BodyResponseCallback<Schema$LiveChatMessage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveChatMessage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveChatMessage>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LiveChatMessage>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livechatmessages$Transition;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livechatmessages$Transition;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveChat/messages/transition').replace(
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
        createAPIRequest<Schema$LiveChatMessage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiveChatMessage>(parameters);
      }
    }
  }

  export interface Params$Resource$Livechatmessages$Delete
    extends StandardParameters {
    /**
     *
     */
    id?: string;
  }
  export interface Params$Resource$Livechatmessages$Insert
    extends StandardParameters {
    /**
     * The *part* parameter serves two purposes. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the parameter value to snippet.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$LiveChatMessage;
  }
  export interface Params$Resource$Livechatmessages$List
    extends StandardParameters {
    /**
     * Specifies the localization language in which the system messages should be returned.
     */
    hl?: string;
    /**
     * The id of the live chat for which comments should be returned.
     */
    liveChatId?: string;
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. Not used in the streaming RPC.
     */
    maxResults?: number;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The *part* parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id, snippet, and authorDetails.
     */
    part?: string[];
    /**
     * Specifies the size of the profile image that should be returned for each user.
     */
    profileImageSize?: number;
  }
  export interface Params$Resource$Livechatmessages$Transition
    extends StandardParameters {
    /**
     * The ID that uniquely identify the chat message event to transition.
     */
    id?: string;
    /**
     * The status to which the chat event is going to transition.
     */
    status?: string;
  }

  export class Resource$Livechatmoderators {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a chat moderator.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveChatModerators.delete({
     *     id: 'placeholder-value',
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
      params: Params$Resource$Livechatmoderators$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Livechatmoderators$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Livechatmoderators$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Livechatmoderators$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Livechatmoderators$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Livechatmoderators$Delete
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
        {}) as Params$Resource$Livechatmoderators$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livechatmoderators$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveChat/moderators').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id'],
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
     * Inserts a new resource into this collection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveChatModerators.insert({
     *     // The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {}
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
      params: Params$Resource$Livechatmoderators$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Livechatmoderators$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LiveChatModerator>>;
    insert(
      params: Params$Resource$Livechatmoderators$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Livechatmoderators$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$LiveChatModerator>,
      callback: BodyResponseCallback<Schema$LiveChatModerator>
    ): void;
    insert(
      params: Params$Resource$Livechatmoderators$Insert,
      callback: BodyResponseCallback<Schema$LiveChatModerator>
    ): void;
    insert(callback: BodyResponseCallback<Schema$LiveChatModerator>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Livechatmoderators$Insert
        | BodyResponseCallback<Schema$LiveChatModerator>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveChatModerator>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveChatModerator>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LiveChatModerator>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livechatmoderators$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livechatmoderators$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveChat/moderators').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveChatModerator>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiveChatModerator>(parameters);
      }
    }

    /**
     * Retrieves a list of resources, possibly filtered.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveChatModerators.list({
     *     // The id of the live chat for which moderators should be returned.
     *     liveChatId: 'placeholder-value',
     *     // The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The *part* parameter specifies the liveChatModerator resource parts that the API response will include. Supported values are id and snippet.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
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
      params: Params$Resource$Livechatmoderators$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Livechatmoderators$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LiveChatModeratorListResponse>>;
    list(
      params: Params$Resource$Livechatmoderators$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Livechatmoderators$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveChatModeratorListResponse>,
      callback: BodyResponseCallback<Schema$LiveChatModeratorListResponse>
    ): void;
    list(
      params: Params$Resource$Livechatmoderators$List,
      callback: BodyResponseCallback<Schema$LiveChatModeratorListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$LiveChatModeratorListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Livechatmoderators$List
        | BodyResponseCallback<Schema$LiveChatModeratorListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveChatModeratorListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveChatModeratorListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LiveChatModeratorListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livechatmoderators$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livechatmoderators$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveChat/moderators').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['liveChatId', 'part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveChatModeratorListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiveChatModeratorListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Livechatmoderators$Delete
    extends StandardParameters {
    /**
     *
     */
    id?: string;
  }
  export interface Params$Resource$Livechatmoderators$Insert
    extends StandardParameters {
    /**
     * The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$LiveChatModerator;
  }
  export interface Params$Resource$Livechatmoderators$List
    extends StandardParameters {
    /**
     * The id of the live chat for which moderators should be returned.
     */
    liveChatId?: string;
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The *part* parameter specifies the liveChatModerator resource parts that the API response will include. Supported values are id and snippet.
     */
    part?: string[];
  }

  export class Resource$Livestreams {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes an existing stream for the authenticated user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveStreams.delete({
     *     id: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
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
      params: Params$Resource$Livestreams$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Livestreams$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Livestreams$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Livestreams$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Livestreams$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Livestreams$Delete
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
        {}) as Params$Resource$Livestreams$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livestreams$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveStreams').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id'],
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
     * Inserts a new stream for the authenticated user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveStreams.insert({
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, cdn, content_details, and status.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cdn": {},
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cdn": {},
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {},
     *   //   "status": {}
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
      params: Params$Resource$Livestreams$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Livestreams$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LiveStream>>;
    insert(
      params: Params$Resource$Livestreams$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Livestreams$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$LiveStream>,
      callback: BodyResponseCallback<Schema$LiveStream>
    ): void;
    insert(
      params: Params$Resource$Livestreams$Insert,
      callback: BodyResponseCallback<Schema$LiveStream>
    ): void;
    insert(callback: BodyResponseCallback<Schema$LiveStream>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Livestreams$Insert
        | BodyResponseCallback<Schema$LiveStream>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveStream>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveStream>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LiveStream>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livestreams$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livestreams$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveStreams').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveStream>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiveStream>(parameters);
      }
    }

    /**
     * Retrieve the list of streams associated with the given channel. --
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveStreams.list({
     *     // Return LiveStreams with the given ids from Stubby or Apiary.
     *     id: 'placeholder-value',
     *     // The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *
     *     mine: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The *part* parameter specifies a comma-separated list of one or more liveStream resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, cdn, and status.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
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
      params: Params$Resource$Livestreams$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Livestreams$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LiveStreamListResponse>>;
    list(
      params: Params$Resource$Livestreams$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Livestreams$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveStreamListResponse>,
      callback: BodyResponseCallback<Schema$LiveStreamListResponse>
    ): void;
    list(
      params: Params$Resource$Livestreams$List,
      callback: BodyResponseCallback<Schema$LiveStreamListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$LiveStreamListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Livestreams$List
        | BodyResponseCallback<Schema$LiveStreamListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveStreamListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveStreamListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LiveStreamListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Livestreams$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livestreams$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveStreams').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveStreamListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiveStreamListResponse>(parameters);
      }
    }

    /**
     * Updates an existing stream for the authenticated user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveStreams.update({
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, cdn, and status. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. If the request body does not specify a value for a mutable property, the existing value for that property will be removed.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cdn": {},
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cdn": {},
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {},
     *   //   "status": {}
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
      params: Params$Resource$Livestreams$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Livestreams$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LiveStream>>;
    update(
      params: Params$Resource$Livestreams$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Livestreams$Update,
      options: MethodOptions | BodyResponseCallback<Schema$LiveStream>,
      callback: BodyResponseCallback<Schema$LiveStream>
    ): void;
    update(
      params: Params$Resource$Livestreams$Update,
      callback: BodyResponseCallback<Schema$LiveStream>
    ): void;
    update(callback: BodyResponseCallback<Schema$LiveStream>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Livestreams$Update
        | BodyResponseCallback<Schema$LiveStream>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveStream>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveStream>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LiveStream>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livestreams$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livestreams$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveStreams').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveStream>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiveStream>(parameters);
      }
    }
  }

  export interface Params$Resource$Livestreams$Delete
    extends StandardParameters {
    /**
     *
     */
    id?: string;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
  }
  export interface Params$Resource$Livestreams$Insert
    extends StandardParameters {
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, cdn, content_details, and status.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$LiveStream;
  }
  export interface Params$Resource$Livestreams$List extends StandardParameters {
    /**
     * Return LiveStreams with the given ids from Stubby or Apiary.
     */
    id?: string[];
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     *
     */
    mine?: boolean;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The *part* parameter specifies a comma-separated list of one or more liveStream resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, cdn, and status.
     */
    part?: string[];
  }
  export interface Params$Resource$Livestreams$Update
    extends StandardParameters {
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, cdn, and status. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. If the request body does not specify a value for a mutable property, the existing value for that property will be removed.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$LiveStream;
  }

  export class Resource$Members {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a list of members that match the request criteria for a channel.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube.channel-memberships.creator',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.members.list({
     *     // Comma separated list of channel IDs. Only data about members that are part of this list will be included in the response.
     *     filterByMemberChannelId: 'placeholder-value',
     *     // Filter members in the results set to the ones that have access to a level.
     *     hasAccessToLevel: 'placeholder-value',
     *     // The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // Parameter that specifies which channel members to return.
     *     mode: 'placeholder-value',
     *     // The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The *part* parameter specifies the member resource parts that the API response will include. Set the parameter value to snippet.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
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
      params: Params$Resource$Members$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Members$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$MemberListResponse>>;
    list(
      params: Params$Resource$Members$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Members$List,
      options: MethodOptions | BodyResponseCallback<Schema$MemberListResponse>,
      callback: BodyResponseCallback<Schema$MemberListResponse>
    ): void;
    list(
      params: Params$Resource$Members$List,
      callback: BodyResponseCallback<Schema$MemberListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$MemberListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Members$List
        | BodyResponseCallback<Schema$MemberListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MemberListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MemberListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$MemberListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Members$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Members$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/members').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$MemberListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MemberListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Members$List extends StandardParameters {
    /**
     * Comma separated list of channel IDs. Only data about members that are part of this list will be included in the response.
     */
    filterByMemberChannelId?: string;
    /**
     * Filter members in the results set to the ones that have access to a level.
     */
    hasAccessToLevel?: string;
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * Parameter that specifies which channel members to return.
     */
    mode?: string;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The *part* parameter specifies the member resource parts that the API response will include. Set the parameter value to snippet.
     */
    part?: string[];
  }

  export class Resource$Membershipslevels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a list of all pricing levels offered by a creator to the fans.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube.channel-memberships.creator',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.membershipsLevels.list({
     *     // The *part* parameter specifies the membershipsLevel resource parts that the API response will include. Supported values are id and snippet.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "visitorId": "my_visitorId"
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
      params: Params$Resource$Membershipslevels$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Membershipslevels$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$MembershipsLevelListResponse>>;
    list(
      params: Params$Resource$Membershipslevels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Membershipslevels$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$MembershipsLevelListResponse>,
      callback: BodyResponseCallback<Schema$MembershipsLevelListResponse>
    ): void;
    list(
      params: Params$Resource$Membershipslevels$List,
      callback: BodyResponseCallback<Schema$MembershipsLevelListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$MembershipsLevelListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Membershipslevels$List
        | BodyResponseCallback<Schema$MembershipsLevelListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MembershipsLevelListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MembershipsLevelListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$MembershipsLevelListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Membershipslevels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Membershipslevels$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/membershipsLevels').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$MembershipsLevelListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MembershipsLevelListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Membershipslevels$List
    extends StandardParameters {
    /**
     * The *part* parameter specifies the membershipsLevel resource parts that the API response will include. Supported values are id and snippet.
     */
    part?: string[];
  }

  export class Resource$Playlistimages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.playlistImages.delete({
     *     // Id to identify this image. This is returned from by the List method.
     *     id: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
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
      params: Params$Resource$Playlistimages$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Playlistimages$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Playlistimages$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Playlistimages$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Playlistimages$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Playlistimages$Delete
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
        {}) as Params$Resource$Playlistimages$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Playlistimages$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/playlistImages').replace(
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
     * Inserts a new resource into this collection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.playlistImages.insert({
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The *part* parameter specifies the properties that the API response will include.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {}
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
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {}
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
      params: Params$Resource$Playlistimages$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Playlistimages$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PlaylistImage>>;
    insert(
      params: Params$Resource$Playlistimages$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Playlistimages$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$PlaylistImage>,
      callback: BodyResponseCallback<Schema$PlaylistImage>
    ): void;
    insert(
      params: Params$Resource$Playlistimages$Insert,
      callback: BodyResponseCallback<Schema$PlaylistImage>
    ): void;
    insert(callback: BodyResponseCallback<Schema$PlaylistImage>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Playlistimages$Insert
        | BodyResponseCallback<Schema$PlaylistImage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PlaylistImage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PlaylistImage>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PlaylistImage>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Playlistimages$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Playlistimages$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/playlistImages').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/youtube/v3/playlistImages').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlaylistImage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PlaylistImage>(parameters);
      }
    }

    /**
     * Retrieves a list of resources, possibly filtered.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.playlistImages.list({
     *     // The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // Return PlaylistImages for this playlist id.
     *     parent: 'placeholder-value',
     *     // The *part* parameter specifies a comma-separated list of one or more playlistImage resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken"
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
      params: Params$Resource$Playlistimages$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Playlistimages$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PlaylistImageListResponse>>;
    list(
      params: Params$Resource$Playlistimages$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Playlistimages$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PlaylistImageListResponse>,
      callback: BodyResponseCallback<Schema$PlaylistImageListResponse>
    ): void;
    list(
      params: Params$Resource$Playlistimages$List,
      callback: BodyResponseCallback<Schema$PlaylistImageListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$PlaylistImageListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Playlistimages$List
        | BodyResponseCallback<Schema$PlaylistImageListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PlaylistImageListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PlaylistImageListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PlaylistImageListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Playlistimages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Playlistimages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/playlistImages').replace(
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
        createAPIRequest<Schema$PlaylistImageListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PlaylistImageListResponse>(parameters);
      }
    }

    /**
     * Updates an existing resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.playlistImages.update({
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *part* parameter specifies the properties that the API response will include.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {}
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
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {}
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
      params: Params$Resource$Playlistimages$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Playlistimages$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PlaylistImage>>;
    update(
      params: Params$Resource$Playlistimages$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Playlistimages$Update,
      options: MethodOptions | BodyResponseCallback<Schema$PlaylistImage>,
      callback: BodyResponseCallback<Schema$PlaylistImage>
    ): void;
    update(
      params: Params$Resource$Playlistimages$Update,
      callback: BodyResponseCallback<Schema$PlaylistImage>
    ): void;
    update(callback: BodyResponseCallback<Schema$PlaylistImage>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Playlistimages$Update
        | BodyResponseCallback<Schema$PlaylistImage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PlaylistImage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PlaylistImage>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PlaylistImage>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Playlistimages$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Playlistimages$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/playlistImages').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/youtube/v3/playlistImages').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlaylistImage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PlaylistImage>(parameters);
      }
    }
  }

  export interface Params$Resource$Playlistimages$Delete
    extends StandardParameters {
    /**
     * Id to identify this image. This is returned from by the List method.
     */
    id?: string;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Playlistimages$Insert
    extends StandardParameters {
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The *part* parameter specifies the properties that the API response will include.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$PlaylistImage;

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
  export interface Params$Resource$Playlistimages$List
    extends StandardParameters {
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * Return PlaylistImages for this playlist id.
     */
    parent?: string;
    /**
     * The *part* parameter specifies a comma-separated list of one or more playlistImage resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response.
     */
    part?: string[];
  }
  export interface Params$Resource$Playlistimages$Update
    extends StandardParameters {
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *part* parameter specifies the properties that the API response will include.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$PlaylistImage;

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

  export class Resource$Playlistitems {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.playlistItems.delete({
     *     id: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
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
      params: Params$Resource$Playlistitems$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Playlistitems$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Playlistitems$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Playlistitems$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Playlistitems$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Playlistitems$Delete
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
        {}) as Params$Resource$Playlistitems$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Playlistitems$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/playlistItems').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id'],
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
     * Inserts a new resource into this collection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.playlistItems.insert({
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {},
     *   //   "status": {}
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
      params: Params$Resource$Playlistitems$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Playlistitems$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PlaylistItem>>;
    insert(
      params: Params$Resource$Playlistitems$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Playlistitems$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$PlaylistItem>,
      callback: BodyResponseCallback<Schema$PlaylistItem>
    ): void;
    insert(
      params: Params$Resource$Playlistitems$Insert,
      callback: BodyResponseCallback<Schema$PlaylistItem>
    ): void;
    insert(callback: BodyResponseCallback<Schema$PlaylistItem>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Playlistitems$Insert
        | BodyResponseCallback<Schema$PlaylistItem>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PlaylistItem>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PlaylistItem>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PlaylistItem>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Playlistitems$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Playlistitems$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/playlistItems').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlaylistItem>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PlaylistItem>(parameters);
      }
    }

    /**
     * Retrieves a list of resources, possibly filtered.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.playlistItems.list({
     *     id: 'placeholder-value',
     *     // The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The *part* parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such, if you set *part=snippet*, the API response will contain all of those properties.
     *     part: 'placeholder-value',
     *     // Return the playlist items within the given playlist.
     *     playlistId: 'placeholder-value',
     *     // Return the playlist items associated with the given video ID.
     *     videoId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
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
      params: Params$Resource$Playlistitems$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Playlistitems$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PlaylistItemListResponse>>;
    list(
      params: Params$Resource$Playlistitems$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Playlistitems$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PlaylistItemListResponse>,
      callback: BodyResponseCallback<Schema$PlaylistItemListResponse>
    ): void;
    list(
      params: Params$Resource$Playlistitems$List,
      callback: BodyResponseCallback<Schema$PlaylistItemListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$PlaylistItemListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Playlistitems$List
        | BodyResponseCallback<Schema$PlaylistItemListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PlaylistItemListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PlaylistItemListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PlaylistItemListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Playlistitems$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Playlistitems$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/playlistItems').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlaylistItemListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PlaylistItemListResponse>(parameters);
      }
    }

    /**
     * Updates an existing resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.playlistItems.update({
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist item can specify a start time and end time, which identify the times portion of the video that should play when users watch the video in the playlist. If your request is updating a playlist item that sets these values, and the request's part parameter value includes the contentDetails part, the playlist item's start and end times will be updated to whatever value the request body specifies. If the request body does not specify values, the existing start and end times will be removed and replaced with the default settings.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {},
     *   //   "status": {}
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
      params: Params$Resource$Playlistitems$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Playlistitems$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PlaylistItem>>;
    update(
      params: Params$Resource$Playlistitems$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Playlistitems$Update,
      options: MethodOptions | BodyResponseCallback<Schema$PlaylistItem>,
      callback: BodyResponseCallback<Schema$PlaylistItem>
    ): void;
    update(
      params: Params$Resource$Playlistitems$Update,
      callback: BodyResponseCallback<Schema$PlaylistItem>
    ): void;
    update(callback: BodyResponseCallback<Schema$PlaylistItem>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Playlistitems$Update
        | BodyResponseCallback<Schema$PlaylistItem>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PlaylistItem>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PlaylistItem>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PlaylistItem>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Playlistitems$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Playlistitems$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/playlistItems').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlaylistItem>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PlaylistItem>(parameters);
      }
    }
  }

  export interface Params$Resource$Playlistitems$Delete
    extends StandardParameters {
    /**
     *
     */
    id?: string;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Playlistitems$Insert
    extends StandardParameters {
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$PlaylistItem;
  }
  export interface Params$Resource$Playlistitems$List
    extends StandardParameters {
    /**
     *
     */
    id?: string[];
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The *part* parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such, if you set *part=snippet*, the API response will contain all of those properties.
     */
    part?: string[];
    /**
     * Return the playlist items within the given playlist.
     */
    playlistId?: string;
    /**
     * Return the playlist items associated with the given video ID.
     */
    videoId?: string;
  }
  export interface Params$Resource$Playlistitems$Update
    extends StandardParameters {
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist item can specify a start time and end time, which identify the times portion of the video that should play when users watch the video in the playlist. If your request is updating a playlist item that sets these values, and the request's part parameter value includes the contentDetails part, the playlist item's start and end times will be updated to whatever value the request body specifies. If the request body does not specify values, the existing start and end times will be removed and replaced with the default settings.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$PlaylistItem;
  }

  export class Resource$Playlists {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.playlists.delete({
     *     id: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
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
      params: Params$Resource$Playlists$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Playlists$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Playlists$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Playlists$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Playlists$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Playlists$Delete
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
      let params = (paramsOrCallback || {}) as Params$Resource$Playlists$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Playlists$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/playlists').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id'],
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
     * Inserts a new resource into this collection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.playlists.insert({
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "localizations": {},
     *       //   "player": {},
     *       //   "snippet": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "localizations": {},
     *   //   "player": {},
     *   //   "snippet": {},
     *   //   "status": {}
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
      params: Params$Resource$Playlists$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Playlists$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Playlist>>;
    insert(
      params: Params$Resource$Playlists$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Playlists$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Playlist>,
      callback: BodyResponseCallback<Schema$Playlist>
    ): void;
    insert(
      params: Params$Resource$Playlists$Insert,
      callback: BodyResponseCallback<Schema$Playlist>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Playlist>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Playlists$Insert
        | BodyResponseCallback<Schema$Playlist>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Playlist>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Playlist>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Playlist>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Playlists$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Playlists$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/playlists').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Playlist>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Playlist>(parameters);
      }
    }

    /**
     * Retrieves a list of resources, possibly filtered.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.playlists.list({
     *     // Return the playlists owned by the specified channel ID.
     *     channelId: 'placeholder-value',
     *     // Return content in specified language
     *     hl: 'placeholder-value',
     *     // Return the playlists with the given IDs for Stubby or Apiary.
     *     id: 'placeholder-value',
     *     // The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // Return the playlists owned by the authenticated user.
     *     mine: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The *part* parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set *part=snippet*, the API response will contain all of those properties.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
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
      params: Params$Resource$Playlists$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Playlists$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PlaylistListResponse>>;
    list(
      params: Params$Resource$Playlists$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Playlists$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PlaylistListResponse>,
      callback: BodyResponseCallback<Schema$PlaylistListResponse>
    ): void;
    list(
      params: Params$Resource$Playlists$List,
      callback: BodyResponseCallback<Schema$PlaylistListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$PlaylistListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Playlists$List
        | BodyResponseCallback<Schema$PlaylistListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PlaylistListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PlaylistListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PlaylistListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Playlists$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Playlists$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/playlists').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlaylistListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PlaylistListResponse>(parameters);
      }
    }

    /**
     * Updates an existing resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.playlists.update({
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for mutable properties that are contained in any parts that the request body specifies. For example, a playlist's description is contained in the snippet part, which must be included in the request body. If the request does not specify a value for the snippet.description property, the playlist's existing description will be deleted.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "localizations": {},
     *       //   "player": {},
     *       //   "snippet": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "localizations": {},
     *   //   "player": {},
     *   //   "snippet": {},
     *   //   "status": {}
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
      params: Params$Resource$Playlists$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Playlists$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Playlist>>;
    update(
      params: Params$Resource$Playlists$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Playlists$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Playlist>,
      callback: BodyResponseCallback<Schema$Playlist>
    ): void;
    update(
      params: Params$Resource$Playlists$Update,
      callback: BodyResponseCallback<Schema$Playlist>
    ): void;
    update(callback: BodyResponseCallback<Schema$Playlist>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Playlists$Update
        | BodyResponseCallback<Schema$Playlist>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Playlist>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Playlist>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Playlist>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Playlists$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Playlists$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/playlists').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Playlist>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Playlist>(parameters);
      }
    }
  }

  export interface Params$Resource$Playlists$Delete extends StandardParameters {
    /**
     *
     */
    id?: string;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Playlists$Insert extends StandardParameters {
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$Playlist;
  }
  export interface Params$Resource$Playlists$List extends StandardParameters {
    /**
     * Return the playlists owned by the specified channel ID.
     */
    channelId?: string;
    /**
     * Return content in specified language
     */
    hl?: string;
    /**
     * Return the playlists with the given IDs for Stubby or Apiary.
     */
    id?: string[];
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * Return the playlists owned by the authenticated user.
     */
    mine?: boolean;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The *part* parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set *part=snippet*, the API response will contain all of those properties.
     */
    part?: string[];
  }
  export interface Params$Resource$Playlists$Update extends StandardParameters {
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for mutable properties that are contained in any parts that the request body specifies. For example, a playlist's description is contained in the snippet part, which must be included in the request body. If the request does not specify a value for the snippet.description property, the playlist's existing description will be deleted.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$Playlist;
  }

  export class Resource$Search {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a list of search resources
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.search.list({
     *     // Filter on resources belonging to this channelId.
     *     channelId: 'placeholder-value',
     *     // Add a filter on the channel search.
     *     channelType: 'placeholder-value',
     *     // Filter on the livestream status of the videos.
     *     eventType: 'placeholder-value',
     *     // Search owned by a content owner.
     *     forContentOwner: 'placeholder-value',
     *     // Restrict the search to only retrieve videos uploaded using the project id of the authenticated user.
     *     forDeveloper: 'placeholder-value',
     *     // Search for the private videos of the authenticated user.
     *     forMine: 'placeholder-value',
     *     // Filter on location of the video
     *     location: 'placeholder-value',
     *     // Filter on distance from the location (specified above).
     *     locationRadius: 'placeholder-value',
     *     // The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // Sort order of the results.
     *     order: 'placeholder-value',
     *     // The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The *part* parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet.
     *     part: 'placeholder-value',
     *     // Filter on resources published after this date.
     *     publishedAfter: 'placeholder-value',
     *     // Filter on resources published before this date.
     *     publishedBefore: 'placeholder-value',
     *     // Textual search terms to match.
     *     q: 'placeholder-value',
     *     // Display the content as seen by viewers in this country.
     *     regionCode: 'placeholder-value',
     *     // Return results relevant to this language.
     *     relevanceLanguage: 'placeholder-value',
     *     // Indicates whether the search results should include restricted content as well as standard content.
     *     safeSearch: 'placeholder-value',
     *     // Restrict results to a particular topic.
     *     topicId: 'placeholder-value',
     *     // Restrict results to a particular set of resource types from One Platform.
     *     type: 'placeholder-value',
     *     // Filter on the presence of captions on the videos.
     *     videoCaption: 'placeholder-value',
     *     // Filter on videos in a specific category.
     *     videoCategoryId: 'placeholder-value',
     *     // Filter on the definition of the videos.
     *     videoDefinition: 'placeholder-value',
     *     // Filter on 3d videos.
     *     videoDimension: 'placeholder-value',
     *     // Filter on the duration of the videos.
     *     videoDuration: 'placeholder-value',
     *     // Filter on embeddable videos.
     *     videoEmbeddable: 'placeholder-value',
     *     // Filter on the license of the videos.
     *     videoLicense: 'placeholder-value',
     *
     *     videoPaidProductPlacement: 'placeholder-value',
     *     // Filter on syndicated videos.
     *     videoSyndicated: 'placeholder-value',
     *     // Filter on videos of a specific type.
     *     videoType: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "regionCode": "my_regionCode",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
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
      params: Params$Resource$Search$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Search$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SearchListResponse>>;
    list(
      params: Params$Resource$Search$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Search$List,
      options: MethodOptions | BodyResponseCallback<Schema$SearchListResponse>,
      callback: BodyResponseCallback<Schema$SearchListResponse>
    ): void;
    list(
      params: Params$Resource$Search$List,
      callback: BodyResponseCallback<Schema$SearchListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$SearchListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Search$List
        | BodyResponseCallback<Schema$SearchListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SearchListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Search$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Search$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/search').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SearchListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Search$List extends StandardParameters {
    /**
     * Filter on resources belonging to this channelId.
     */
    channelId?: string;
    /**
     * Add a filter on the channel search.
     */
    channelType?: string;
    /**
     * Filter on the livestream status of the videos.
     */
    eventType?: string;
    /**
     * Search owned by a content owner.
     */
    forContentOwner?: boolean;
    /**
     * Restrict the search to only retrieve videos uploaded using the project id of the authenticated user.
     */
    forDeveloper?: boolean;
    /**
     * Search for the private videos of the authenticated user.
     */
    forMine?: boolean;
    /**
     * Filter on location of the video
     */
    location?: string;
    /**
     * Filter on distance from the location (specified above).
     */
    locationRadius?: string;
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * Sort order of the results.
     */
    order?: string;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The *part* parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet.
     */
    part?: string[];
    /**
     * Filter on resources published after this date.
     */
    publishedAfter?: string;
    /**
     * Filter on resources published before this date.
     */
    publishedBefore?: string;
    /**
     * Textual search terms to match.
     */
    q?: string;
    /**
     * Display the content as seen by viewers in this country.
     */
    regionCode?: string;
    /**
     * Return results relevant to this language.
     */
    relevanceLanguage?: string;
    /**
     * Indicates whether the search results should include restricted content as well as standard content.
     */
    safeSearch?: string;
    /**
     * Restrict results to a particular topic.
     */
    topicId?: string;
    /**
     * Restrict results to a particular set of resource types from One Platform.
     */
    type?: string[];
    /**
     * Filter on the presence of captions on the videos.
     */
    videoCaption?: string;
    /**
     * Filter on videos in a specific category.
     */
    videoCategoryId?: string;
    /**
     * Filter on the definition of the videos.
     */
    videoDefinition?: string;
    /**
     * Filter on 3d videos.
     */
    videoDimension?: string;
    /**
     * Filter on the duration of the videos.
     */
    videoDuration?: string;
    /**
     * Filter on embeddable videos.
     */
    videoEmbeddable?: string;
    /**
     * Filter on the license of the videos.
     */
    videoLicense?: string;
    /**
     *
     */
    videoPaidProductPlacement?: string;
    /**
     * Filter on syndicated videos.
     */
    videoSyndicated?: string;
    /**
     * Filter on videos of a specific type.
     */
    videoType?: string;
  }

  export class Resource$Subscriptions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.subscriptions.delete({
     *     id: 'placeholder-value',
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
      params: Params$Resource$Subscriptions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Subscriptions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Subscriptions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Subscriptions$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Subscriptions$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Subscriptions$Delete
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
        {}) as Params$Resource$Subscriptions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Subscriptions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/subscriptions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id'],
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
     * Inserts a new resource into this collection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.subscriptions.insert({
     *     // The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {},
     *       //   "subscriberSnippet": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {},
     *   //   "subscriberSnippet": {}
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
      params: Params$Resource$Subscriptions$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Subscriptions$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Subscription>>;
    insert(
      params: Params$Resource$Subscriptions$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Subscriptions$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    insert(
      params: Params$Resource$Subscriptions$Insert,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Subscription>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Subscriptions$Insert
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Subscription>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Subscriptions$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Subscriptions$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/subscriptions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Subscription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }

    /**
     * Retrieves a list of resources, possibly filtered.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.subscriptions.list({
     *     // Return the subscriptions of the given channel owner.
     *     channelId: 'placeholder-value',
     *     // Return the subscriptions to the subset of these channels that the authenticated user is subscribed to.
     *     forChannelId: 'placeholder-value',
     *     // Return the subscriptions with the given IDs for Stubby or Apiary.
     *     id: 'placeholder-value',
     *     // The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // Flag for returning the subscriptions of the authenticated user.
     *     mine: 'placeholder-value',
     *
     *     myRecentSubscribers: 'placeholder-value',
     *     // Return the subscribers of the given channel owner.
     *     mySubscribers: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The order of the returned subscriptions
     *     order: 'placeholder-value',
     *     // The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The *part* parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set *part=snippet*, the API response will also contain all of those nested properties.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
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
      params: Params$Resource$Subscriptions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Subscriptions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SubscriptionListResponse>>;
    list(
      params: Params$Resource$Subscriptions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Subscriptions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SubscriptionListResponse>,
      callback: BodyResponseCallback<Schema$SubscriptionListResponse>
    ): void;
    list(
      params: Params$Resource$Subscriptions$List,
      callback: BodyResponseCallback<Schema$SubscriptionListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$SubscriptionListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Subscriptions$List
        | BodyResponseCallback<Schema$SubscriptionListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SubscriptionListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SubscriptionListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SubscriptionListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Subscriptions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Subscriptions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/subscriptions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SubscriptionListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SubscriptionListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Subscriptions$Delete
    extends StandardParameters {
    /**
     *
     */
    id?: string;
  }
  export interface Params$Resource$Subscriptions$Insert
    extends StandardParameters {
    /**
     * The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$Subscription;
  }
  export interface Params$Resource$Subscriptions$List
    extends StandardParameters {
    /**
     * Return the subscriptions of the given channel owner.
     */
    channelId?: string;
    /**
     * Return the subscriptions to the subset of these channels that the authenticated user is subscribed to.
     */
    forChannelId?: string;
    /**
     * Return the subscriptions with the given IDs for Stubby or Apiary.
     */
    id?: string[];
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * Flag for returning the subscriptions of the authenticated user.
     */
    mine?: boolean;
    /**
     *
     */
    myRecentSubscribers?: boolean;
    /**
     * Return the subscribers of the given channel owner.
     */
    mySubscribers?: boolean;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The order of the returned subscriptions
     */
    order?: string;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The *part* parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set *part=snippet*, the API response will also contain all of those nested properties.
     */
    part?: string[];
  }

  export class Resource$Superchatevents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a list of resources, possibly filtered.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.superChatEvents.list({
     *     // Return rendered funding amounts in specified language.
     *     hl: 'placeholder-value',
     *     // The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The *part* parameter specifies the superChatEvent resource parts that the API response will include. This parameter is currently not supported.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
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
      params: Params$Resource$Superchatevents$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Superchatevents$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SuperChatEventListResponse>>;
    list(
      params: Params$Resource$Superchatevents$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Superchatevents$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SuperChatEventListResponse>,
      callback: BodyResponseCallback<Schema$SuperChatEventListResponse>
    ): void;
    list(
      params: Params$Resource$Superchatevents$List,
      callback: BodyResponseCallback<Schema$SuperChatEventListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$SuperChatEventListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Superchatevents$List
        | BodyResponseCallback<Schema$SuperChatEventListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SuperChatEventListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SuperChatEventListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SuperChatEventListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Superchatevents$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Superchatevents$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/superChatEvents').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SuperChatEventListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SuperChatEventListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Superchatevents$List
    extends StandardParameters {
    /**
     * Return rendered funding amounts in specified language.
     */
    hl?: string;
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The *part* parameter specifies the superChatEvent resource parts that the API response will include. This parameter is currently not supported.
     */
    part?: string[];
  }

  export class Resource$Tests {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * POST method.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.tests.insert({
     *     externalChannelId: 'placeholder-value',
     *
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "featuredPart": false,
     *       //   "gaia": "my_gaia",
     *       //   "id": "my_id",
     *       //   "snippet": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "featuredPart": false,
     *   //   "gaia": "my_gaia",
     *   //   "id": "my_id",
     *   //   "snippet": {}
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
      params: Params$Resource$Tests$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Tests$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TestItem>>;
    insert(
      params: Params$Resource$Tests$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Tests$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$TestItem>,
      callback: BodyResponseCallback<Schema$TestItem>
    ): void;
    insert(
      params: Params$Resource$Tests$Insert,
      callback: BodyResponseCallback<Schema$TestItem>
    ): void;
    insert(callback: BodyResponseCallback<Schema$TestItem>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Tests$Insert
        | BodyResponseCallback<Schema$TestItem>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestItem>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestItem>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TestItem>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tests$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tests$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/tests').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestItem>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestItem>(parameters);
      }
    }
  }

  export interface Params$Resource$Tests$Insert extends StandardParameters {
    /**
     *
     */
    externalChannelId?: string;
    /**
     *
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestItem;
  }

  export class Resource$Thirdpartylinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.thirdPartyLinks.delete({
     *     // Channel ID to which changes should be applied, for delegation.
     *     externalChannelId: 'placeholder-value',
     *     // Delete the partner links with the given linking token.
     *     linkingToken: 'placeholder-value',
     *     // Do not use. Required for compatibility.
     *     part: 'placeholder-value',
     *     // Type of the link to be deleted.
     *     type: 'placeholder-value',
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
      params: Params$Resource$Thirdpartylinks$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Thirdpartylinks$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Thirdpartylinks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Thirdpartylinks$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Thirdpartylinks$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Thirdpartylinks$Delete
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
        {}) as Params$Resource$Thirdpartylinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Thirdpartylinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/thirdPartyLinks').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['linkingToken', 'type'],
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
     * Inserts a new resource into this collection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.thirdPartyLinks.insert({
     *     // Channel ID to which changes should be applied, for delegation.
     *     externalChannelId: 'placeholder-value',
     *     // The *part* parameter specifies the thirdPartyLink resource parts that the API request and response will include. Supported values are linkingToken, status, and snippet.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "kind": "my_kind",
     *       //   "linkingToken": "my_linkingToken",
     *       //   "snippet": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "linkingToken": "my_linkingToken",
     *   //   "snippet": {},
     *   //   "status": {}
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
      params: Params$Resource$Thirdpartylinks$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Thirdpartylinks$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ThirdPartyLink>>;
    insert(
      params: Params$Resource$Thirdpartylinks$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Thirdpartylinks$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$ThirdPartyLink>,
      callback: BodyResponseCallback<Schema$ThirdPartyLink>
    ): void;
    insert(
      params: Params$Resource$Thirdpartylinks$Insert,
      callback: BodyResponseCallback<Schema$ThirdPartyLink>
    ): void;
    insert(callback: BodyResponseCallback<Schema$ThirdPartyLink>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Thirdpartylinks$Insert
        | BodyResponseCallback<Schema$ThirdPartyLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ThirdPartyLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ThirdPartyLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ThirdPartyLink>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Thirdpartylinks$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Thirdpartylinks$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/thirdPartyLinks').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ThirdPartyLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ThirdPartyLink>(parameters);
      }
    }

    /**
     * Retrieves a list of resources, possibly filtered.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.thirdPartyLinks.list({
     *     // Channel ID to which changes should be applied, for delegation.
     *     externalChannelId: 'placeholder-value',
     *     // Get a third party link with the given linking token.
     *     linkingToken: 'placeholder-value',
     *     // The *part* parameter specifies the thirdPartyLink resource parts that the API response will include. Supported values are linkingToken, status, and snippet.
     *     part: 'placeholder-value',
     *     // Get a third party link of the given type.
     *     type: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "items": [],
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
    list(
      params: Params$Resource$Thirdpartylinks$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Thirdpartylinks$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ThirdPartyLinkListResponse>>;
    list(
      params: Params$Resource$Thirdpartylinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Thirdpartylinks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ThirdPartyLinkListResponse>,
      callback: BodyResponseCallback<Schema$ThirdPartyLinkListResponse>
    ): void;
    list(
      params: Params$Resource$Thirdpartylinks$List,
      callback: BodyResponseCallback<Schema$ThirdPartyLinkListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ThirdPartyLinkListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Thirdpartylinks$List
        | BodyResponseCallback<Schema$ThirdPartyLinkListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ThirdPartyLinkListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ThirdPartyLinkListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ThirdPartyLinkListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Thirdpartylinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Thirdpartylinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/thirdPartyLinks').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ThirdPartyLinkListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ThirdPartyLinkListResponse>(parameters);
      }
    }

    /**
     * Updates an existing resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.thirdPartyLinks.update({
     *     // Channel ID to which changes should be applied, for delegation.
     *     externalChannelId: 'placeholder-value',
     *     // The *part* parameter specifies the thirdPartyLink resource parts that the API request and response will include. Supported values are linkingToken, status, and snippet.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "kind": "my_kind",
     *       //   "linkingToken": "my_linkingToken",
     *       //   "snippet": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "linkingToken": "my_linkingToken",
     *   //   "snippet": {},
     *   //   "status": {}
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
      params: Params$Resource$Thirdpartylinks$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Thirdpartylinks$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ThirdPartyLink>>;
    update(
      params: Params$Resource$Thirdpartylinks$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Thirdpartylinks$Update,
      options: MethodOptions | BodyResponseCallback<Schema$ThirdPartyLink>,
      callback: BodyResponseCallback<Schema$ThirdPartyLink>
    ): void;
    update(
      params: Params$Resource$Thirdpartylinks$Update,
      callback: BodyResponseCallback<Schema$ThirdPartyLink>
    ): void;
    update(callback: BodyResponseCallback<Schema$ThirdPartyLink>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Thirdpartylinks$Update
        | BodyResponseCallback<Schema$ThirdPartyLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ThirdPartyLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ThirdPartyLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ThirdPartyLink>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Thirdpartylinks$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Thirdpartylinks$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/thirdPartyLinks').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ThirdPartyLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ThirdPartyLink>(parameters);
      }
    }
  }

  export interface Params$Resource$Thirdpartylinks$Delete
    extends StandardParameters {
    /**
     * Channel ID to which changes should be applied, for delegation.
     */
    externalChannelId?: string;
    /**
     * Delete the partner links with the given linking token.
     */
    linkingToken?: string;
    /**
     * Do not use. Required for compatibility.
     */
    part?: string[];
    /**
     * Type of the link to be deleted.
     */
    type?: string;
  }
  export interface Params$Resource$Thirdpartylinks$Insert
    extends StandardParameters {
    /**
     * Channel ID to which changes should be applied, for delegation.
     */
    externalChannelId?: string;
    /**
     * The *part* parameter specifies the thirdPartyLink resource parts that the API request and response will include. Supported values are linkingToken, status, and snippet.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$ThirdPartyLink;
  }
  export interface Params$Resource$Thirdpartylinks$List
    extends StandardParameters {
    /**
     * Channel ID to which changes should be applied, for delegation.
     */
    externalChannelId?: string;
    /**
     * Get a third party link with the given linking token.
     */
    linkingToken?: string;
    /**
     * The *part* parameter specifies the thirdPartyLink resource parts that the API response will include. Supported values are linkingToken, status, and snippet.
     */
    part?: string[];
    /**
     * Get a third party link of the given type.
     */
    type?: string;
  }
  export interface Params$Resource$Thirdpartylinks$Update
    extends StandardParameters {
    /**
     * Channel ID to which changes should be applied, for delegation.
     */
    externalChannelId?: string;
    /**
     * The *part* parameter specifies the thirdPartyLink resource parts that the API request and response will include. Supported values are linkingToken, status, and snippet.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$ThirdPartyLink;
  }

  export class Resource$Thumbnails {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.upload',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.thumbnails.set({
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // Returns the Thumbnail with the given video IDs for Stubby or Apiary.
     *     videoId: 'placeholder-value',
     *
     *     requestBody: {
     *       // request body parameters
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
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "visitorId": "my_visitorId"
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
    set(
      params: Params$Resource$Thumbnails$Set,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    set(
      params?: Params$Resource$Thumbnails$Set,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ThumbnailSetResponse>>;
    set(
      params: Params$Resource$Thumbnails$Set,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    set(
      params: Params$Resource$Thumbnails$Set,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ThumbnailSetResponse>,
      callback: BodyResponseCallback<Schema$ThumbnailSetResponse>
    ): void;
    set(
      params: Params$Resource$Thumbnails$Set,
      callback: BodyResponseCallback<Schema$ThumbnailSetResponse>
    ): void;
    set(callback: BodyResponseCallback<Schema$ThumbnailSetResponse>): void;
    set(
      paramsOrCallback?:
        | Params$Resource$Thumbnails$Set
        | BodyResponseCallback<Schema$ThumbnailSetResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ThumbnailSetResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ThumbnailSetResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ThumbnailSetResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Thumbnails$Set;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Thumbnails$Set;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/thumbnails/set').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/youtube/v3/thumbnails/set').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['videoId'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ThumbnailSetResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ThumbnailSetResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Thumbnails$Set extends StandardParameters {
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * Returns the Thumbnail with the given video IDs for Stubby or Apiary.
     */
    videoId?: string;

    /**
     * Request body metadata
     */
    requestBody?: {};

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

  export class Resource$Videoabusereportreasons {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a list of resources, possibly filtered.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.videoAbuseReportReasons.list({
     *     hl: 'placeholder-value',
     *     // The *part* parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "visitorId": "my_visitorId"
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
      params: Params$Resource$Videoabusereportreasons$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Videoabusereportreasons$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$VideoAbuseReportReasonListResponse>
    >;
    list(
      params: Params$Resource$Videoabusereportreasons$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Videoabusereportreasons$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VideoAbuseReportReasonListResponse>,
      callback: BodyResponseCallback<Schema$VideoAbuseReportReasonListResponse>
    ): void;
    list(
      params: Params$Resource$Videoabusereportreasons$List,
      callback: BodyResponseCallback<Schema$VideoAbuseReportReasonListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$VideoAbuseReportReasonListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Videoabusereportreasons$List
        | BodyResponseCallback<Schema$VideoAbuseReportReasonListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VideoAbuseReportReasonListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VideoAbuseReportReasonListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$VideoAbuseReportReasonListResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Videoabusereportreasons$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videoabusereportreasons$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/videoAbuseReportReasons').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VideoAbuseReportReasonListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VideoAbuseReportReasonListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Videoabusereportreasons$List
    extends StandardParameters {
    /**
     *
     */
    hl?: string;
    /**
     * The *part* parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet.
     */
    part?: string[];
  }

  export class Resource$Videocategories {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a list of resources, possibly filtered.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.videoCategories.list({
     *     hl: 'placeholder-value',
     *     // Returns the video categories with the given IDs for Stubby or Apiary.
     *     id: 'placeholder-value',
     *     // The *part* parameter specifies the videoCategory resource properties that the API response will include. Set the parameter value to snippet.
     *     part: 'placeholder-value',
     *
     *     regionCode: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
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
      params: Params$Resource$Videocategories$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Videocategories$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$VideoCategoryListResponse>>;
    list(
      params: Params$Resource$Videocategories$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Videocategories$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VideoCategoryListResponse>,
      callback: BodyResponseCallback<Schema$VideoCategoryListResponse>
    ): void;
    list(
      params: Params$Resource$Videocategories$List,
      callback: BodyResponseCallback<Schema$VideoCategoryListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$VideoCategoryListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Videocategories$List
        | BodyResponseCallback<Schema$VideoCategoryListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VideoCategoryListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VideoCategoryListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$VideoCategoryListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Videocategories$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videocategories$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/videoCategories').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VideoCategoryListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VideoCategoryListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Videocategories$List
    extends StandardParameters {
    /**
     *
     */
    hl?: string;
    /**
     * Returns the video categories with the given IDs for Stubby or Apiary.
     */
    id?: string[];
    /**
     * The *part* parameter specifies the videoCategory resource properties that the API response will include. Set the parameter value to snippet.
     */
    part?: string[];
    /**
     *
     */
    regionCode?: string;
  }

  export class Resource$Videos {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.videos.delete({
     *     id: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
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
      params: Params$Resource$Videos$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Videos$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    delete(
      params: Params$Resource$Videos$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Videos$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Videos$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Videos$Delete
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
      let params = (paramsOrCallback || {}) as Params$Resource$Videos$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videos$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/videos').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id'],
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
     * Retrieves the ratings that the authorized user gave to a list of specified videos.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.videos.getRating({
     *     id: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "visitorId": "my_visitorId"
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
    getRating(
      params: Params$Resource$Videos$Getrating,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getRating(
      params?: Params$Resource$Videos$Getrating,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$VideoGetRatingResponse>>;
    getRating(
      params: Params$Resource$Videos$Getrating,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getRating(
      params: Params$Resource$Videos$Getrating,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VideoGetRatingResponse>,
      callback: BodyResponseCallback<Schema$VideoGetRatingResponse>
    ): void;
    getRating(
      params: Params$Resource$Videos$Getrating,
      callback: BodyResponseCallback<Schema$VideoGetRatingResponse>
    ): void;
    getRating(
      callback: BodyResponseCallback<Schema$VideoGetRatingResponse>
    ): void;
    getRating(
      paramsOrCallback?:
        | Params$Resource$Videos$Getrating
        | BodyResponseCallback<Schema$VideoGetRatingResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VideoGetRatingResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VideoGetRatingResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$VideoGetRatingResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Videos$Getrating;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videos$Getrating;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/videos/getRating').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VideoGetRatingResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VideoGetRatingResponse>(parameters);
      }
    }

    /**
     * Inserts a new resource into this collection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.upload',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.videos.insert({
     *     // Should auto-levels be applied to the upload.
     *     autoLevels: 'placeholder-value',
     *     // Notify the channel subscribers about the new video. As default, the notification is enabled.
     *     notifySubscribers: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
     *     part: 'placeholder-value',
     *     // Should stabilize be applied to the upload.
     *     stabilize: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "ageGating": {},
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "fileDetails": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "liveStreamingDetails": {},
     *       //   "localizations": {},
     *       //   "monetizationDetails": {},
     *       //   "paidProductPlacementDetails": {},
     *       //   "player": {},
     *       //   "processingDetails": {},
     *       //   "projectDetails": {},
     *       //   "recordingDetails": {},
     *       //   "snippet": {},
     *       //   "statistics": {},
     *       //   "status": {},
     *       //   "suggestions": {},
     *       //   "topicDetails": {}
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
     *   //   "ageGating": {},
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "fileDetails": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "liveStreamingDetails": {},
     *   //   "localizations": {},
     *   //   "monetizationDetails": {},
     *   //   "paidProductPlacementDetails": {},
     *   //   "player": {},
     *   //   "processingDetails": {},
     *   //   "projectDetails": {},
     *   //   "recordingDetails": {},
     *   //   "snippet": {},
     *   //   "statistics": {},
     *   //   "status": {},
     *   //   "suggestions": {},
     *   //   "topicDetails": {}
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
      params: Params$Resource$Videos$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Videos$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Video>>;
    insert(
      params: Params$Resource$Videos$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Videos$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Video>,
      callback: BodyResponseCallback<Schema$Video>
    ): void;
    insert(
      params: Params$Resource$Videos$Insert,
      callback: BodyResponseCallback<Schema$Video>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Video>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Videos$Insert
        | BodyResponseCallback<Schema$Video>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Video>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Video>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Video>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Videos$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videos$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/videos').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/youtube/v3/videos').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Video>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Video>(parameters);
      }
    }

    /**
     * Retrieves a list of resources, possibly filtered.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.videos.list({
     *     // Return the videos that are in the specified chart.
     *     chart: 'placeholder-value',
     *     // Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX).
     *     hl: 'placeholder-value',
     *     // Return videos with the given ids.
     *     id: 'placeholder-value',
     *
     *     locale: 'placeholder-value',
     *
     *     maxHeight: 'placeholder-value',
     *     // The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. *Note:* This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.
     *     maxResults: 'placeholder-value',
     *     // Return the player with maximum height specified in
     *     maxWidth: 'placeholder-value',
     *     // Return videos liked/disliked by the authenticated user. Does not support RateType.RATED_TYPE_NONE.
     *     myRating: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. *Note:* This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.
     *     pageToken: 'placeholder-value',
     *     // The *part* parameter specifies a comma-separated list of one or more video resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a video resource, the snippet property contains the channelId, title, description, tags, and categoryId properties. As such, if you set *part=snippet*, the API response will contain all of those properties.
     *     part: 'placeholder-value',
     *     // Use a chart that is specific to the specified region
     *     regionCode: 'placeholder-value',
     *     // Use chart that is specific to the specified video category
     *     videoCategoryId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
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
      params: Params$Resource$Videos$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Videos$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$VideoListResponse>>;
    list(
      params: Params$Resource$Videos$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Videos$List,
      options: MethodOptions | BodyResponseCallback<Schema$VideoListResponse>,
      callback: BodyResponseCallback<Schema$VideoListResponse>
    ): void;
    list(
      params: Params$Resource$Videos$List,
      callback: BodyResponseCallback<Schema$VideoListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$VideoListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Videos$List
        | BodyResponseCallback<Schema$VideoListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VideoListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VideoListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$VideoListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Videos$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videos$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/videos').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VideoListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VideoListResponse>(parameters);
      }
    }

    /**
     * Adds a like or dislike rating to a video or removes a rating from a video.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.videos.rate({
     *     id: 'placeholder-value',
     *
     *     rating: 'placeholder-value',
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
    rate(
      params: Params$Resource$Videos$Rate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    rate(
      params?: Params$Resource$Videos$Rate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    rate(
      params: Params$Resource$Videos$Rate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rate(
      params: Params$Resource$Videos$Rate,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    rate(
      params: Params$Resource$Videos$Rate,
      callback: BodyResponseCallback<void>
    ): void;
    rate(callback: BodyResponseCallback<void>): void;
    rate(
      paramsOrCallback?:
        | Params$Resource$Videos$Rate
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
      let params = (paramsOrCallback || {}) as Params$Resource$Videos$Rate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videos$Rate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/videos/rate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id', 'rating'],
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
     * Report abuse for a video.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.videos.reportAbuse({
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "comments": "my_comments",
     *       //   "language": "my_language",
     *       //   "reasonId": "my_reasonId",
     *       //   "secondaryReasonId": "my_secondaryReasonId",
     *       //   "videoId": "my_videoId"
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
    reportAbuse(
      params: Params$Resource$Videos$Reportabuse,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    reportAbuse(
      params?: Params$Resource$Videos$Reportabuse,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    reportAbuse(
      params: Params$Resource$Videos$Reportabuse,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reportAbuse(
      params: Params$Resource$Videos$Reportabuse,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    reportAbuse(
      params: Params$Resource$Videos$Reportabuse,
      callback: BodyResponseCallback<void>
    ): void;
    reportAbuse(callback: BodyResponseCallback<void>): void;
    reportAbuse(
      paramsOrCallback?:
        | Params$Resource$Videos$Reportabuse
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
        {}) as Params$Resource$Videos$Reportabuse;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videos$Reportabuse;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/videos/reportAbuse').replace(
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

    /**
     * Updates an existing resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.videos.update({
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a video's privacy setting is contained in the status part. As such, if your request is updating a private video, and the request's part parameter value includes the status part, the video's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the video will revert to the default privacy setting. In addition, not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "ageGating": {},
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "fileDetails": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "liveStreamingDetails": {},
     *       //   "localizations": {},
     *       //   "monetizationDetails": {},
     *       //   "paidProductPlacementDetails": {},
     *       //   "player": {},
     *       //   "processingDetails": {},
     *       //   "projectDetails": {},
     *       //   "recordingDetails": {},
     *       //   "snippet": {},
     *       //   "statistics": {},
     *       //   "status": {},
     *       //   "suggestions": {},
     *       //   "topicDetails": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "ageGating": {},
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "fileDetails": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "liveStreamingDetails": {},
     *   //   "localizations": {},
     *   //   "monetizationDetails": {},
     *   //   "paidProductPlacementDetails": {},
     *   //   "player": {},
     *   //   "processingDetails": {},
     *   //   "projectDetails": {},
     *   //   "recordingDetails": {},
     *   //   "snippet": {},
     *   //   "statistics": {},
     *   //   "status": {},
     *   //   "suggestions": {},
     *   //   "topicDetails": {}
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
      params: Params$Resource$Videos$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Videos$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Video>>;
    update(
      params: Params$Resource$Videos$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Videos$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Video>,
      callback: BodyResponseCallback<Schema$Video>
    ): void;
    update(
      params: Params$Resource$Videos$Update,
      callback: BodyResponseCallback<Schema$Video>
    ): void;
    update(callback: BodyResponseCallback<Schema$Video>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Videos$Update
        | BodyResponseCallback<Schema$Video>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Video>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Video>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Video>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Videos$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videos$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/videos').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Video>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Video>(parameters);
      }
    }
  }

  export interface Params$Resource$Videos$Delete extends StandardParameters {
    /**
     *
     */
    id?: string;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Videos$Getrating extends StandardParameters {
    /**
     *
     */
    id?: string[];
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Videos$Insert extends StandardParameters {
    /**
     * Should auto-levels be applied to the upload.
     */
    autoLevels?: boolean;
    /**
     * Notify the channel subscribers about the new video. As default, the notification is enabled.
     */
    notifySubscribers?: boolean;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
     */
    part?: string[];
    /**
     * Should stabilize be applied to the upload.
     */
    stabilize?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Video;

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
  export interface Params$Resource$Videos$List extends StandardParameters {
    /**
     * Return the videos that are in the specified chart.
     */
    chart?: string;
    /**
     * Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX).
     */
    hl?: string;
    /**
     * Return videos with the given ids.
     */
    id?: string[];
    /**
     *
     */
    locale?: string;
    /**
     *
     */
    maxHeight?: number;
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. *Note:* This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.
     */
    maxResults?: number;
    /**
     * Return the player with maximum height specified in
     */
    maxWidth?: number;
    /**
     * Return videos liked/disliked by the authenticated user. Does not support RateType.RATED_TYPE_NONE.
     */
    myRating?: string;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. *Note:* This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.
     */
    pageToken?: string;
    /**
     * The *part* parameter specifies a comma-separated list of one or more video resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a video resource, the snippet property contains the channelId, title, description, tags, and categoryId properties. As such, if you set *part=snippet*, the API response will contain all of those properties.
     */
    part?: string[];
    /**
     * Use a chart that is specific to the specified region
     */
    regionCode?: string;
    /**
     * Use chart that is specific to the specified video category
     */
    videoCategoryId?: string;
  }
  export interface Params$Resource$Videos$Rate extends StandardParameters {
    /**
     *
     */
    id?: string;
    /**
     *
     */
    rating?: string;
  }
  export interface Params$Resource$Videos$Reportabuse
    extends StandardParameters {
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VideoAbuseReport;
  }
  export interface Params$Resource$Videos$Update extends StandardParameters {
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a video's privacy setting is contained in the status part. As such, if your request is updating a private video, and the request's part parameter value includes the status part, the video's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the video will revert to the default privacy setting. In addition, not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$Video;
  }

  export class Resource$Videotrainability {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns the trainability status of a video.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.videoTrainability.get({
     *     // The ID of the video to retrieve.
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "permitted": [],
     *   //   "videoId": "my_videoId"
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
      params: Params$Resource$Videotrainability$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Videotrainability$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$VideoTrainability>>;
    get(
      params: Params$Resource$Videotrainability$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Videotrainability$Get,
      options: MethodOptions | BodyResponseCallback<Schema$VideoTrainability>,
      callback: BodyResponseCallback<Schema$VideoTrainability>
    ): void;
    get(
      params: Params$Resource$Videotrainability$Get,
      callback: BodyResponseCallback<Schema$VideoTrainability>
    ): void;
    get(callback: BodyResponseCallback<Schema$VideoTrainability>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Videotrainability$Get
        | BodyResponseCallback<Schema$VideoTrainability>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VideoTrainability>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VideoTrainability>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$VideoTrainability>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Videotrainability$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videotrainability$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/videoTrainability').replace(
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
        createAPIRequest<Schema$VideoTrainability>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VideoTrainability>(parameters);
      }
    }
  }

  export interface Params$Resource$Videotrainability$Get
    extends StandardParameters {
    /**
     * The ID of the video to retrieve.
     */
    id?: string;
  }

  export class Resource$Watermarks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Allows upload of watermark image and setting it for a channel.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.upload',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.watermarks.set({
     *     channelId: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "imageBytes": "my_imageBytes",
     *       //   "imageUrl": "my_imageUrl",
     *       //   "position": {},
     *       //   "targetChannelId": "my_targetChannelId",
     *       //   "timing": {}
     *       // }
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
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
    set(
      params: Params$Resource$Watermarks$Set,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    set(
      params?: Params$Resource$Watermarks$Set,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    set(
      params: Params$Resource$Watermarks$Set,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    set(
      params: Params$Resource$Watermarks$Set,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    set(
      params: Params$Resource$Watermarks$Set,
      callback: BodyResponseCallback<void>
    ): void;
    set(callback: BodyResponseCallback<void>): void;
    set(
      paramsOrCallback?:
        | Params$Resource$Watermarks$Set
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
      let params = (paramsOrCallback || {}) as Params$Resource$Watermarks$Set;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Watermarks$Set;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/watermarks/set').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/youtube/v3/watermarks/set').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['channelId'],
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
     * Allows removal of channel watermark.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.watermarks.unset({
     *     channelId: 'placeholder-value',
     *     // *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
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
    unset(
      params: Params$Resource$Watermarks$Unset,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    unset(
      params?: Params$Resource$Watermarks$Unset,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<void>>;
    unset(
      params: Params$Resource$Watermarks$Unset,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    unset(
      params: Params$Resource$Watermarks$Unset,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    unset(
      params: Params$Resource$Watermarks$Unset,
      callback: BodyResponseCallback<void>
    ): void;
    unset(callback: BodyResponseCallback<void>): void;
    unset(
      paramsOrCallback?:
        | Params$Resource$Watermarks$Unset
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
      let params = (paramsOrCallback || {}) as Params$Resource$Watermarks$Unset;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Watermarks$Unset;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/watermarks/unset').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['channelId'],
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

  export interface Params$Resource$Watermarks$Set extends StandardParameters {
    /**
     *
     */
    channelId?: string;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InvideoBranding;

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
  export interface Params$Resource$Watermarks$Unset extends StandardParameters {
    /**
     *
     */
    channelId?: string;
    /**
     * *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }

  export class Resource$Youtube {
    context: APIRequestContext;
    v3: Resource$Youtube$V3;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.v3 = new Resource$Youtube$V3(this.context);
    }
  }

  export class Resource$Youtube$V3 {
    context: APIRequestContext;
    liveChat: Resource$Youtube$V3$Livechat;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.liveChat = new Resource$Youtube$V3$Livechat(this.context);
    }

    /**
     * Updates an existing resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.youtube.v3.updateCommentThreads({
     *     // The *part* parameter specifies a comma-separated list of commentThread resource properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "replies": {},
     *       //   "snippet": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "replies": {},
     *   //   "snippet": {}
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
    updateCommentThreads(
      params: Params$Resource$Youtube$V3$Updatecommentthreads,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateCommentThreads(
      params?: Params$Resource$Youtube$V3$Updatecommentthreads,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CommentThread>>;
    updateCommentThreads(
      params: Params$Resource$Youtube$V3$Updatecommentthreads,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateCommentThreads(
      params: Params$Resource$Youtube$V3$Updatecommentthreads,
      options: MethodOptions | BodyResponseCallback<Schema$CommentThread>,
      callback: BodyResponseCallback<Schema$CommentThread>
    ): void;
    updateCommentThreads(
      params: Params$Resource$Youtube$V3$Updatecommentthreads,
      callback: BodyResponseCallback<Schema$CommentThread>
    ): void;
    updateCommentThreads(
      callback: BodyResponseCallback<Schema$CommentThread>
    ): void;
    updateCommentThreads(
      paramsOrCallback?:
        | Params$Resource$Youtube$V3$Updatecommentthreads
        | BodyResponseCallback<Schema$CommentThread>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CommentThread>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CommentThread>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CommentThread>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Youtube$V3$Updatecommentthreads;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Youtube$V3$Updatecommentthreads;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/commentThreads').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
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
        createAPIRequest<Schema$CommentThread>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CommentThread>(parameters);
      }
    }
  }

  export interface Params$Resource$Youtube$V3$Updatecommentthreads
    extends StandardParameters {
    /**
     * The *part* parameter specifies a comma-separated list of commentThread resource properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$CommentThread;
  }

  export class Resource$Youtube$V3$Livechat {
    context: APIRequestContext;
    messages: Resource$Youtube$V3$Livechat$Messages;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.messages = new Resource$Youtube$V3$Livechat$Messages(this.context);
    }
  }

  export class Resource$Youtube$V3$Livechat$Messages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Allows a user to load live chat through a server-streamed RPC.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
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
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.youtube.v3.liveChat.messages.stream({
     *     // Specifies the localization language in which the system messages should be returned.
     *     hl: 'placeholder-value',
     *     // The id of the live chat for which comments should be returned.
     *     liveChatId: 'placeholder-value',
     *     // The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. Not used in the streaming RPC.
     *     maxResults: 'placeholder-value',
     *     // The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The *part* parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id, snippet, and authorDetails.
     *     part: 'placeholder-value',
     *     // Specifies the size of the profile image that should be returned for each user.
     *     profileImageSize: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activePollItem": {},
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "offlineAt": "my_offlineAt",
     *   //   "pageInfo": {},
     *   //   "pollingIntervalMillis": 0,
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
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
    stream(
      params: Params$Resource$Youtube$V3$Livechat$Messages$Stream,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    stream(
      params?: Params$Resource$Youtube$V3$Livechat$Messages$Stream,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LiveChatMessageListResponse>>;
    stream(
      params: Params$Resource$Youtube$V3$Livechat$Messages$Stream,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    stream(
      params: Params$Resource$Youtube$V3$Livechat$Messages$Stream,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveChatMessageListResponse>,
      callback: BodyResponseCallback<Schema$LiveChatMessageListResponse>
    ): void;
    stream(
      params: Params$Resource$Youtube$V3$Livechat$Messages$Stream,
      callback: BodyResponseCallback<Schema$LiveChatMessageListResponse>
    ): void;
    stream(
      callback: BodyResponseCallback<Schema$LiveChatMessageListResponse>
    ): void;
    stream(
      paramsOrCallback?:
        | Params$Resource$Youtube$V3$Livechat$Messages$Stream
        | BodyResponseCallback<Schema$LiveChatMessageListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveChatMessageListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveChatMessageListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LiveChatMessageListResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Youtube$V3$Livechat$Messages$Stream;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Youtube$V3$Livechat$Messages$Stream;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://youtube.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveChat/messages/stream').replace(
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
        createAPIRequest<Schema$LiveChatMessageListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LiveChatMessageListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Youtube$V3$Livechat$Messages$Stream
    extends StandardParameters {
    /**
     * Specifies the localization language in which the system messages should be returned.
     */
    hl?: string;
    /**
     * The id of the live chat for which comments should be returned.
     */
    liveChatId?: string;
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. Not used in the streaming RPC.
     */
    maxResults?: number;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The *part* parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id, snippet, and authorDetails.
     */
    part?: string[];
    /**
     * Specifies the size of the profile image that should be returned for each user.
     */
    profileImageSize?: number;
  }
}
