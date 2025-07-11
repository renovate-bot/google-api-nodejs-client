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

export namespace alertcenter_v1beta1 {
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
   * Google Workspace Alert Center API
   *
   * Manages alerts on issues affecting your domain. Note: The current version of this API (v1beta1) is available to all Google Workspace customers.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const alertcenter = google.alertcenter('v1beta1');
   * ```
   */
  export class Alertcenter {
    context: APIRequestContext;
    alerts: Resource$Alerts;
    v1beta1: Resource$V1beta1;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.alerts = new Resource$Alerts(this.context);
      this.v1beta1 = new Resource$V1beta1(this.context);
    }
  }

  /**
   * A generic alert for abusive user activity occurring with a customer.
   */
  export interface Schema$AbuseDetected {
    /**
     * List of abusive users/entities to be displayed in a table in the alert.
     */
    additionalDetails?: Schema$EntityList;
    /**
     * Product that the abuse is originating from.
     */
    product?: string | null;
    /**
     * Unique identifier of each sub alert that is onboarded.
     */
    subAlertId?: string | null;
    /**
     * Variation of AbuseDetected alerts. The variation_type determines the texts displayed the alert details. This differs from sub_alert_id because each sub alert can have multiple variation_types, representing different stages of the alert.
     */
    variationType?: string | null;
  }
  /**
   * Alert that is triggered when Google support requests to access customer data.
   */
  export interface Schema$AccessApproval {
    /**
     * Justification for data access based on justification enums.
     */
    justificationReason?: string[] | null;
    /**
     * Office location of Google staff requesting access such as "US".
     */
    officeLocation?: string | null;
    /**
     * Products within scope of the Access Approvals request.
     */
    products?: string[] | null;
    /**
     * ID of the Access Approvals request. This is a helpful field when requesting support from Google.
     */
    requestId?: string | null;
    /**
     * Scope of access, also known as a resource. This is further narrowed down by the product field.
     */
    scope?: string | null;
    /**
     * Support tickets related to this Access Approvals request. Populated if there is an associated case number.
     */
    tickets?: Schema$SupportTicket[];
  }
  /**
   * Details about why an account is receiving an account suspension warning.
   */
  export interface Schema$AccountSuspensionDetails {
    /**
     * The reason why this account is receiving an account suspension warning.
     */
    abuseReason?: string | null;
    /**
     * The name of the product being abused. This is restricted to only the following values: "Gmail" "Google Workspace" "Payments" "Voice" "YouTube" "Other"
     */
    productName?: string | null;
  }
  /**
   * A warning that the customer's account is about to be suspended.
   */
  export interface Schema$AccountSuspensionWarning {
    /**
     * The amount of time remaining to appeal an imminent suspension. After this window has elapsed, the account will be suspended. Only populated if the account suspension is in WARNING state.
     */
    appealWindow?: string | null;
    /**
     * Account suspension warning state.
     */
    state?: string | null;
    /**
     * Details about why an account is being suspended.
     */
    suspensionDetails?: Schema$AccountSuspensionDetails[];
  }
  /**
   * Alerts for user account warning events.
   */
  export interface Schema$AccountWarning {
    /**
     * Required. The email of the user that this event belongs to.
     */
    email?: string | null;
    /**
     * Optional. Details of the login action associated with the warning event. This is only available for: * Suspicious login * Suspicious login (less secure app) * Suspicious programmatic login * User suspended (suspicious activity)
     */
    loginDetails?: Schema$LoginDetails;
  }
  /**
   * Metadata related to the action.
   */
  export interface Schema$ActionInfo {}
  /**
   * Alerts from Google Workspace Security Center rules service configured by an admin.
   */
  export interface Schema$ActivityRule {
    /**
     * List of action names associated with the rule threshold.
     */
    actionNames?: string[] | null;
    /**
     * Rule create timestamp.
     */
    createTime?: string | null;
    /**
     * Description of the rule.
     */
    description?: string | null;
    /**
     * Alert display name.
     */
    displayName?: string | null;
    /**
     * Rule name.
     */
    name?: string | null;
    /**
     * Query that is used to get the data from the associated source.
     */
    query?: string | null;
    /**
     * List of alert IDs superseded by this alert. It is used to indicate that this alert is essentially extension of superseded alerts and we found the relationship after creating these alerts.
     */
    supersededAlerts?: string[] | null;
    /**
     * Alert ID superseding this alert. It is used to indicate that superseding alert is essentially extension of this alert and we found the relationship after creating both alerts.
     */
    supersedingAlert?: string | null;
    /**
     * Alert threshold is for example “COUNT \> 5”.
     */
    threshold?: string | null;
    /**
     * The trigger sources for this rule. * GMAIL_EVENTS * DEVICE_EVENTS * USER_EVENTS
     */
    triggerSource?: string | null;
    /**
     * The timestamp of the last update to the rule.
     */
    updateTime?: string | null;
    /**
     * Rule window size. Possible values are 1 hour or 24 hours.
     */
    windowSize?: string | null;
  }
  /**
   * An alert affecting a customer.
   */
  export interface Schema$Alert {
    /**
     * Output only. The unique identifier for the alert.
     */
    alertId?: string | null;
    /**
     * Output only. The time this alert was created.
     */
    createTime?: string | null;
    /**
     * Output only. The unique identifier of the Google Workspace account of the customer.
     */
    customerId?: string | null;
    /**
     * Optional. The data associated with this alert, for example google.apps.alertcenter.type.DeviceCompromised.
     */
    data?: {[key: string]: any} | null;
    /**
     * Output only. `True` if this alert is marked for deletion.
     */
    deleted?: boolean | null;
    /**
     * Optional. The time the event that caused this alert ceased being active. If provided, the end time must not be earlier than the start time. If not provided, it indicates an ongoing alert.
     */
    endTime?: string | null;
    /**
     * Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform alert updates in order to avoid race conditions: An `etag` is returned in the response which contains alerts, and systems are expected to put that etag in the request to update alert to ensure that their change will be applied to the same version of the alert. If no `etag` is provided in the call to update alert, then the existing alert is overwritten blindly.
     */
    etag?: string | null;
    /**
     * Output only. The metadata associated with this alert.
     */
    metadata?: Schema$AlertMetadata;
    /**
     * Output only. An optional [Security Investigation Tool](https://support.google.com/a/answer/7575955) query for this alert.
     */
    securityInvestigationToolLink?: string | null;
    /**
     * Required. A unique identifier for the system that reported the alert. This is output only after alert is created. Supported sources are any of the following: * Google Operations * Mobile device management * Gmail phishing * Data Loss Prevention * Domain wide takeout * State sponsored attack * Google identity * Apps outage
     */
    source?: string | null;
    /**
     * Required. The time the event that caused this alert was started or detected.
     */
    startTime?: string | null;
    /**
     * Required. The type of the alert. This is output only after alert is created. For a list of available alert types see [Google Workspace Alert types](https://developers.google.com/workspace/admin/alertcenter/reference/alert-types).
     */
    type?: string | null;
    /**
     * Output only. The time this alert was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A customer feedback about an alert.
   */
  export interface Schema$AlertFeedback {
    /**
     * Output only. The alert identifier.
     */
    alertId?: string | null;
    /**
     * Output only. The time this feedback was created.
     */
    createTime?: string | null;
    /**
     * Output only. The unique identifier of the Google Workspace account of the customer.
     */
    customerId?: string | null;
    /**
     * Output only. The email of the user that provided the feedback.
     */
    email?: string | null;
    /**
     * Output only. The unique identifier for the feedback.
     */
    feedbackId?: string | null;
    /**
     * Required. The type of the feedback.
     */
    type?: string | null;
  }
  /**
   * An alert metadata.
   */
  export interface Schema$AlertMetadata {
    /**
     * Output only. The alert identifier.
     */
    alertId?: string | null;
    /**
     * The email address of the user assigned to the alert.
     */
    assignee?: string | null;
    /**
     * Output only. The unique identifier of the Google Workspace account of the customer.
     */
    customerId?: string | null;
    /**
     * Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert metadata from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform metadata updates in order to avoid race conditions: An `etag` is returned in the response which contains alert metadata, and systems are expected to put that etag in the request to update alert metadata to ensure that their change will be applied to the same version of the alert metadata. If no `etag` is provided in the call to update alert metadata, then the existing alert metadata is overwritten blindly.
     */
    etag?: string | null;
    /**
     * The severity value of the alert. Alert Center will set this field at alert creation time, default's to an empty string when it could not be determined. The supported values for update actions on this field are the following: * HIGH * MEDIUM * LOW
     */
    severity?: string | null;
    /**
     * The current status of the alert. The supported values are the following: * NOT_STARTED * IN_PROGRESS * CLOSED
     */
    status?: string | null;
    /**
     * Output only. The time this metadata was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * The explanation message associated with "APNS certificate is expiring soon" and "APNS certificate has expired" alerts.
   */
  export interface Schema$ApnsCertificateExpirationInfo {
    /**
     * The Apple ID used to create the certificate. It may be blank if admins didn't enter it.
     */
    appleId?: string | null;
    /**
     * The expiration date of the APNS certificate.
     */
    expirationTime?: string | null;
    /**
     * The UID of the certificate.
     */
    uid?: string | null;
  }
  /**
   * Alerts from App Maker to notify admins to set up default SQL instance.
   */
  export interface Schema$AppMakerSqlSetupNotification {
    /**
     * List of applications with requests for default SQL set up.
     */
    requestInfo?: Schema$RequestInfo[];
  }
  /**
   * Alerts from AppSettingsChanged bucket Rules configured by Admin which contain the following rules: - Calendar settings changed - Drive settings changed - Email settings changed - Mobile settings changed
   */
  export interface Schema$AppSettingsChanged {
    /**
     * Any other associated alert details, for example, AlertConfiguration.
     */
    alertDetails?: string | null;
    /**
     * Rule name
     */
    name?: string | null;
  }
  /**
   * An outage incident reported for a Google Workspace service.
   */
  export interface Schema$AppsOutage {
    /**
     * Link to the outage event in Google Workspace Status Dashboard
     */
    dashboardUri?: string | null;
    /**
     * Incident tracking ID.
     */
    incidentTrackingId?: string | null;
    /**
     * Indicates new alert details under which the outage is communicated. Only populated when Status is MERGED.
     */
    mergeInfo?: Schema$MergeInfo;
    /**
     * Timestamp by which the next update is expected to arrive.
     */
    nextUpdateTime?: string | null;
    /**
     * List of products impacted by the outage.
     */
    products?: string[] | null;
    /**
     * Timestamp when the outage is expected to be resolved, or has confirmed resolution. Provided only when known.
     */
    resolutionTime?: string | null;
    /**
     * Current outage status.
     */
    status?: string | null;
  }
  /**
   * Attachment with application-specific information about an alert.
   */
  export interface Schema$Attachment {
    /**
     * A CSV file attachment.
     */
    csv?: Schema$Csv;
  }
  /**
   * Alert for setting the domain or IP that malicious email comes from as whitelisted domain or IP in Gmail advanced settings.
   */
  export interface Schema$BadWhitelist {
    /**
     * The domain ID.
     */
    domainId?: Schema$DomainId;
    /**
     * The entity whose actions triggered a Gmail phishing alert.
     */
    maliciousEntity?: Schema$MaliciousEntity;
    /**
     * The list of messages contained by this alert.
     */
    messages?: Schema$GmailMessageInfo[];
    /**
     * The source IP address of the malicious email, for example, `127.0.0.1`.
     */
    sourceIp?: string | null;
  }
  /**
   * A request to perform batch delete on alerts.
   */
  export interface Schema$BatchDeleteAlertsRequest {
    /**
     * Required. The list of alert IDs to delete.
     */
    alertId?: string[] | null;
    /**
     * Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     */
    customerId?: string | null;
  }
  /**
   * Response to batch delete operation on alerts.
   */
  export interface Schema$BatchDeleteAlertsResponse {
    /**
     * The status details for each failed `alert_id`.
     */
    failedAlertStatus?: {[key: string]: Schema$Status} | null;
    /**
     * The successful list of alert IDs.
     */
    successAlertIds?: string[] | null;
  }
  /**
   * A request to perform batch undelete on alerts.
   */
  export interface Schema$BatchUndeleteAlertsRequest {
    /**
     * Required. The list of alert IDs to undelete.
     */
    alertId?: string[] | null;
    /**
     * Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     */
    customerId?: string | null;
  }
  /**
   * Response to batch undelete operation on alerts.
   */
  export interface Schema$BatchUndeleteAlertsResponse {
    /**
     * The status details for each failed `alert_id`.
     */
    failedAlertStatus?: {[key: string]: Schema$Status} | null;
    /**
     * The successful list of alert IDs.
     */
    successAlertIds?: string[] | null;
  }
  /**
   * A reference to a Cloud Pubsub topic. To register for notifications, the owner of the topic must grant `alerts-api-push-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.
   */
  export interface Schema$CloudPubsubTopic {
    /**
     * Optional. The format of the payload that would be sent. If not specified the format will be JSON.
     */
    payloadFormat?: string | null;
    /**
     * The `name` field of a Cloud Pubsub [Topic] (https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic).
     */
    topicName?: string | null;
  }
  /**
   * A representation of a CSV file attachment, as a list of column headers and a list of data rows.
   */
  export interface Schema$Csv {
    /**
     * The list of data rows in a CSV file, as string arrays rather than as a single comma-separated string.
     */
    dataRows?: Schema$CsvRow[];
    /**
     * The list of headers for data columns in a CSV file.
     */
    headers?: string[] | null;
  }
  /**
   * A representation of a single data row in a CSV file.
   */
  export interface Schema$CsvRow {
    /**
     * The data entries in a CSV file row, as a string array rather than a single comma-separated string.
     */
    entries?: string[] | null;
  }
  /**
   * A mobile device compromised alert. Derived from audit logs.
   */
  export interface Schema$DeviceCompromised {
    /**
     * The email of the user this alert was created for.
     */
    email?: string | null;
    /**
     * Required. The list of security events.
     */
    events?: Schema$DeviceCompromisedSecurityDetail[];
  }
  /**
   * Detailed information of a single MDM device compromised event.
   */
  export interface Schema$DeviceCompromisedSecurityDetail {
    /**
     * The device compromised state. Possible values are "`Compromised`" or "`Not Compromised`".
     */
    deviceCompromisedState?: string | null;
    /**
     * Required. The device ID.
     */
    deviceId?: string | null;
    /**
     * The model of the device.
     */
    deviceModel?: string | null;
    /**
     * The type of the device.
     */
    deviceType?: string | null;
    /**
     * Required for iOS, empty for others.
     */
    iosVendorId?: string | null;
    /**
     * The device resource ID.
     */
    resourceId?: string | null;
    /**
     * The serial number of the device.
     */
    serialNumber?: string | null;
  }
  /**
   * Alerts from Device Management Rules configured by Admin.
   */
  export interface Schema$DeviceManagementRule {
    /**
     * Required. The device ID.
     */
    deviceId?: string | null;
    /**
     * The model of the device.
     */
    deviceModel?: string | null;
    /**
     * The type of the device.
     */
    deviceType?: string | null;
    /**
     * The email of the user this alert was created for.
     */
    email?: string | null;
    /**
     * ID of the rule that triggered the alert
     */
    id?: string | null;
    /**
     * Required for iOS, empty for others.
     */
    iosVendorId?: string | null;
    /**
     * Obfuscated ID of the owner of the device
     */
    ownerId?: string | null;
    /**
     * The device resource ID.
     */
    resourceId?: string | null;
    /**
     * Action taken as result of the rule
     */
    ruleAction?: string | null;
    /**
     * The serial number of the device.
     */
    serialNumber?: string | null;
  }
  /**
   * Alerts that get triggered on violations of Data Loss Prevention (DLP) rules.
   */
  export interface Schema$DlpRuleViolation {
    /**
     * Details about the violated DLP rule. Admins can use the predefined detectors provided by Google Cloud DLP https://cloud.google.com/dlp/ when setting up a DLP rule. Matched Cloud DLP detectors in this violation if any will be captured in the MatchInfo.predefined_detector.
     */
    ruleViolationInfo?: Schema$RuleViolationInfo;
  }
  /**
   * Domain ID of Gmail phishing alerts.
   */
  export interface Schema$DomainId {
    /**
     * The primary domain for the customer.
     */
    customerPrimaryDomain?: string | null;
  }
  /**
   * A takeout operation for the entire domain was initiated by an admin. Derived from audit logs.
   */
  export interface Schema$DomainWideTakeoutInitiated {
    /**
     * The email of the admin who initiated the takeout.
     */
    email?: string | null;
    /**
     * The takeout request ID.
     */
    takeoutRequestId?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Individual entity affected by, or related to, an alert.
   */
  export interface Schema$Entity {
    /**
     * Link to a Security Investigation Tool search based on this entity, if available.
     */
    link?: string | null;
    /**
     * Human-readable name of this entity, such as an email address, file ID, or device name.
     */
    name?: string | null;
    /**
     * Extra values beyond name. The order of values should align with headers in EntityList.
     */
    values?: string[] | null;
  }
  /**
   * EntityList stores entities in a format that can be translated to a table in the Alert Center UI.
   */
  export interface Schema$EntityList {
    /**
     * List of entities affected by the alert.
     */
    entities?: Schema$Entity[];
    /**
     * Headers of the values in entities. If no value is defined in Entity, this field should be empty.
     */
    headers?: string[] | null;
    /**
     * Name of the key detail used to display this entity list.
     */
    name?: string | null;
  }
  /**
   * Details of a message in phishing spike alert.
   */
  export interface Schema$GmailMessageInfo {
    /**
     * The `SHA256` hash of email's attachment and all MIME parts.
     */
    attachmentsSha256Hash?: string[] | null;
    /**
     * The date of the event related to this email.
     */
    date?: string | null;
    /**
     * The hash of the message body text.
     */
    md5HashMessageBody?: string | null;
    /**
     * The MD5 Hash of email's subject (only available for reported emails).
     */
    md5HashSubject?: string | null;
    /**
     * The snippet of the message body text (only available for reported emails).
     */
    messageBodySnippet?: string | null;
    /**
     * The message ID.
     */
    messageId?: string | null;
    /**
     * The recipient of this email.
     */
    recipient?: string | null;
    /**
     * The sent time of the email.
     */
    sentTime?: string | null;
    /**
     * The email subject text (only available for reported emails).
     */
    subjectText?: string | null;
  }
  /**
   * An incident reported by Google Operations for a Google Workspace application.
   */
  export interface Schema$GoogleOperations {
    /**
     * The list of emails which correspond to the users directly affected by the incident.
     */
    affectedUserEmails?: string[] | null;
    /**
     * Optional. Application-specific data for an incident, provided when the Google Workspace application which reported the incident cannot be completely restored to a valid state.
     */
    attachmentData?: Schema$Attachment;
    /**
     * A detailed, freeform incident description.
     */
    description?: string | null;
    /**
     * Customer domain for email template personalization.
     */
    domain?: string | null;
    /**
     * A header to display above the incident message. Typically used to attach a localized notice on the timeline for followup comms translations.
     */
    header?: string | null;
    /**
     * A one-line incident description.
     */
    title?: string | null;
  }
  /**
   * Response message for an alert feedback listing request.
   */
  export interface Schema$ListAlertFeedbackResponse {
    /**
     * The list of alert feedback. Feedback entries for each alert are ordered by creation time descending.
     */
    feedback?: Schema$AlertFeedback[];
  }
  /**
   * Response message for an alert listing request.
   */
  export interface Schema$ListAlertsResponse {
    /**
     * The list of alerts.
     */
    alerts?: Schema$Alert[];
    /**
     * The token for the next page. If not empty, indicates that there may be more alerts that match the listing request; this value can be used in a subsequent ListAlertsRequest to get alerts continuing from last result of the current list call.
     */
    nextPageToken?: string | null;
  }
  /**
   * The details of the login action.
   */
  export interface Schema$LoginDetails {
    /**
     * Optional. The human-readable IP address (for example, `11.22.33.44`) that is associated with the warning event.
     */
    ipAddress?: string | null;
    /**
     * Optional. The successful login time that is associated with the warning event. This isn't present for blocked login attempts.
     */
    loginTime?: string | null;
  }
  /**
   * Proto for all phishing alerts with common payload. Supported types are any of the following: * User reported phishing * User reported spam spike * Suspicious message reported * Phishing reclassification * Malware reclassification * Gmail potential employee spoofing
   */
  export interface Schema$MailPhishing {
    /**
     * The domain ID.
     */
    domainId?: Schema$DomainId;
    /**
     * If `true`, the email originated from within the organization.
     */
    isInternal?: boolean | null;
    /**
     * The entity whose actions triggered a Gmail phishing alert.
     */
    maliciousEntity?: Schema$MaliciousEntity;
    /**
     * The list of messages contained by this alert.
     */
    messages?: Schema$GmailMessageInfo[];
    /**
     * System actions on the messages.
     */
    systemActionType?: string | null;
  }
  /**
   * Entity whose actions triggered a Gmail phishing alert.
   */
  export interface Schema$MaliciousEntity {
    /**
     * The header from display name.
     */
    displayName?: string | null;
    /**
     * The actor who triggered a gmail phishing alert.
     */
    entity?: Schema$User;
    /**
     * The sender email address.
     */
    fromHeader?: string | null;
  }
  /**
   * Alert Created by the MSA team for communications necessary for continued use of Google Workspace Products.
   */
  export interface Schema$MandatoryServiceAnnouncement {
    /**
     * Detailed, freeform text describing the announcement
     */
    description?: string | null;
    /**
     * One line summary of the announcement
     */
    title?: string | null;
  }
  /**
   * Proto that contains match information from the condition part of the rule.
   */
  export interface Schema$MatchInfo {
    /**
     * For matched detector predefined by Google.
     */
    predefinedDetector?: Schema$PredefinedDetectorInfo;
    /**
     * For matched detector defined by administrators.
     */
    userDefinedDetector?: Schema$UserDefinedDetectorInfo;
  }
  /**
   * New alert tracking numbers.
   */
  export interface Schema$MergeInfo {
    /**
     * Optional. New alert ID. Reference the [google.apps.alertcenter.Alert] with this ID for the current state.
     */
    newAlertId?: string | null;
    /**
     * The new tracking ID from the parent incident.
     */
    newIncidentTrackingId?: string | null;
  }
  /**
   * Settings for callback notifications. For more details see [Google Workspace Alert Notification](https://developers.google.com/workspace/admin/alertcenter/guides/notifications).
   */
  export interface Schema$Notification {
    /**
     * A Google Cloud Pub/sub topic destination.
     */
    cloudPubsubTopic?: Schema$CloudPubsubTopic;
  }
  /**
   * Alert for a spike in user reported phishing. *Warning*: This type has been deprecated. Use [MailPhishing](https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/MailPhishing) instead.
   */
  export interface Schema$PhishingSpike {
    /**
     * The domain ID.
     */
    domainId?: Schema$DomainId;
    /**
     * If `true`, the email originated from within the organization.
     */
    isInternal?: boolean | null;
    /**
     * The entity whose actions triggered a Gmail phishing alert.
     */
    maliciousEntity?: Schema$MaliciousEntity;
    /**
     * The list of messages contained by this alert.
     */
    messages?: Schema$GmailMessageInfo[];
  }
  /**
   * Detector provided by Google.
   */
  export interface Schema$PredefinedDetectorInfo {
    /**
     * Name that uniquely identifies the detector.
     */
    detectorName?: string | null;
  }
  /**
   * Event occurred when primary admin changed in customer's account. The event are being received from insight forwarder
   */
  export interface Schema$PrimaryAdminChangedEvent {
    /**
     * domain in which actioned occurred
     */
    domain?: string | null;
    /**
     * Email of person who was the primary admin before the action
     */
    previousAdminEmail?: string | null;
    /**
     * Email of person who is the primary admin after the action
     */
    updatedAdminEmail?: string | null;
  }
  /**
   * Alerts from Reporting Rules configured by Admin.
   */
  export interface Schema$ReportingRule {
    /**
     * Any other associated alert details, for example, AlertConfiguration.
     */
    alertDetails?: string | null;
    /**
     * Rule name
     */
    name?: string | null;
    /**
     * Alert Rule query Sample Query query { condition { filter { expected_application_id: 777491262838 expected_event_name: "indexable_content_change" filter_op: IN \} \} conjunction_operator: OR \}
     */
    query?: string | null;
  }
  /**
   * Requests for one application that needs default SQL setup.
   */
  export interface Schema$RequestInfo {
    /**
     * List of app developers who triggered notifications for above application.
     */
    appDeveloperEmail?: string[] | null;
    /**
     * Required. The application that requires the SQL setup.
     */
    appKey?: string | null;
    /**
     * Required. Number of requests sent for this application to set up default SQL instance.
     */
    numberOfRequests?: string | null;
  }
  /**
   * Proto that contains resource information.
   */
  export interface Schema$ResourceInfo {
    /**
     * Chat attachment ID.
     */
    chatAttachmentId?: string | null;
    /**
     * Chat message ID.
     */
    chatMessageId?: string | null;
    /**
     * Id to identify a device. For example, for Android devices, this is the "Android Device Id" and for Chrome OS devices, it's the "Device Virtual Id".
     */
    deviceId?: string | null;
    /**
     * Drive file ID.
     */
    documentId?: string | null;
    /**
     * Title of the resource, for example email subject, or document title.
     */
    resourceTitle?: string | null;
  }
  /**
   * Proto that contains rule information.
   */
  export interface Schema$RuleInfo {
    /**
     * User provided name of the rule.
     */
    displayName?: string | null;
    /**
     * Resource name that uniquely identifies the rule.
     */
    resourceName?: string | null;
  }
  /**
   * Common alert information about violated rules that are configured by Google Workspace administrators.
   */
  export interface Schema$RuleViolationInfo {
    /**
     * Source of the data.
     */
    dataSource?: string | null;
    /**
     * Event associated with this alert after applying the rule.
     */
    eventType?: string | null;
    /**
     * List of matches that were found in the resource content.
     */
    matchInfo?: Schema$MatchInfo[];
    /**
     * Resource recipients. For Drive, they are grantees that the Drive file was shared with at the time of rule triggering. Valid values include user emails, group emails, domains, or 'anyone' if the file was publicly accessible. If the file was private the recipients list will be empty. For Gmail, they are emails of the users or groups that the Gmail message was sent to.
     */
    recipients?: string[] | null;
    /**
     * Details of the resource which violated the rule.
     */
    resourceInfo?: Schema$ResourceInfo;
    /**
     * Details of the violated rule.
     */
    ruleInfo?: Schema$RuleInfo;
    /**
     * Actions suppressed due to other actions with higher priority.
     */
    suppressedActionTypes?: string[] | null;
    /**
     * Trigger of the rule.
     */
    trigger?: string | null;
    /**
     * Metadata related to the triggered actions.
     */
    triggeredActionInfo?: Schema$ActionInfo[];
    /**
     * Actions applied as a consequence of the rule being triggered.
     */
    triggeredActionTypes?: string[] | null;
    /**
     * Email of the user who caused the violation. Value could be empty if not applicable, for example, a violation found by drive continuous scan.
     */
    triggeringUserEmail?: string | null;
  }
  /**
   * Alert that is triggered when Sensitive Admin Action occur in customer account.
   */
  export interface Schema$SensitiveAdminAction {
    /**
     * Email of person who performed the action
     */
    actorEmail?: string | null;
    /**
     * The time at which event occurred
     */
    eventTime?: string | null;
    /**
     * Event occurred when primary admin changed in customer's account
     */
    primaryAdminChangedEvent?: Schema$PrimaryAdminChangedEvent;
    /**
     * Event occurred when SSO Profile created in customer's account
     */
    ssoProfileCreatedEvent?: Schema$SSOProfileCreatedEvent;
    /**
     * Event occurred when SSO Profile deleted in customer's account
     */
    ssoProfileDeletedEvent?: Schema$SSOProfileDeletedEvent;
    /**
     * Event occurred when SSO Profile updated in customer's account
     */
    ssoProfileUpdatedEvent?: Schema$SSOProfileUpdatedEvent;
    /**
     * Event occurred when password was reset for super admin in customer's account
     */
    superAdminPasswordResetEvent?: Schema$SuperAdminPasswordResetEvent;
  }
  /**
   * Customer-level settings.
   */
  export interface Schema$Settings {
    /**
     * The list of notifications.
     */
    notifications?: Schema$Notification[];
  }
  /**
   * Event occurred when SSO Profile created in customer's account. The event are being received from insight forwarder
   */
  export interface Schema$SSOProfileCreatedEvent {
    /**
     * sso profile name which got created
     */
    inboundSsoProfileName?: string | null;
  }
  /**
   * Event occurred when SSO Profile deleted in customer's account. The event are being received from insight forwarder
   */
  export interface Schema$SSOProfileDeletedEvent {
    /**
     * sso profile name which got deleted
     */
    inboundSsoProfileName?: string | null;
  }
  /**
   * Event occurred when SSO Profile updated in customer's account. The event are being received from insight forwarder
   */
  export interface Schema$SSOProfileUpdatedEvent {
    /**
     * changes made to sso profile
     */
    inboundSsoProfileChanges?: string | null;
    /**
     * sso profile name which got updated
     */
    inboundSsoProfileName?: string | null;
  }
  /**
   * A state-sponsored attack alert. Derived from audit logs.
   */
  export interface Schema$StateSponsoredAttack {
    /**
     * The email of the user this incident was created for.
     */
    email?: string | null;
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
   * Event occurred when password was reset for super admin in customer's account. The event are being received from insight forwarder
   */
  export interface Schema$SuperAdminPasswordResetEvent {
    /**
     * email of person whose password was reset
     */
    userEmail?: string | null;
  }
  /**
   * Support ticket related to Access Approvals request
   */
  export interface Schema$SupportTicket {
    /**
     * Support ticket ID
     */
    ticketId?: string | null;
    /**
     * Link to support ticket
     */
    ticketUrl?: string | null;
  }
  /**
   * A mobile suspicious activity alert. Derived from audit logs.
   */
  export interface Schema$SuspiciousActivity {
    /**
     * The email of the user this alert was created for.
     */
    email?: string | null;
    /**
     * Required. The list of security events.
     */
    events?: Schema$SuspiciousActivitySecurityDetail[];
  }
  /**
   * Detailed information of a single MDM suspicious activity event.
   */
  export interface Schema$SuspiciousActivitySecurityDetail {
    /**
     * Required. The device ID.
     */
    deviceId?: string | null;
    /**
     * The model of the device.
     */
    deviceModel?: string | null;
    /**
     * The device property which was changed.
     */
    deviceProperty?: string | null;
    /**
     * The type of the device.
     */
    deviceType?: string | null;
    /**
     * Required for iOS, empty for others.
     */
    iosVendorId?: string | null;
    /**
     * The new value of the device property after the change.
     */
    newValue?: string | null;
    /**
     * The old value of the device property before the change.
     */
    oldValue?: string | null;
    /**
     * The device resource ID.
     */
    resourceId?: string | null;
    /**
     * The serial number of the device.
     */
    serialNumber?: string | null;
  }
  /**
   * Details for an invalid transfer or forward.
   */
  export interface Schema$TransferError {
    /**
     * User's email address. This may be unavailable if the entity was deleted.
     */
    email?: string | null;
    /**
     * Type of entity being transferred to. For ring group members, this should always be USER.
     */
    entityType?: string | null;
    /**
     * Ring group or auto attendant ID. Not set for users.
     */
    id?: string | null;
    /**
     * Reason for the error.
     */
    invalidReason?: string | null;
    /**
     * User's full name, or the ring group / auto attendant name. This may be unavailable if the entity was deleted.
     */
    name?: string | null;
  }
  /**
   * Error related to transferring or forwarding a phone call.
   */
  export interface Schema$TransferMisconfiguration {
    /**
     * Details for each invalid transfer or forward.
     */
    errors?: Schema$TransferError[];
  }
  /**
   * A request to undelete a specific alert that was marked for deletion.
   */
  export interface Schema$UndeleteAlertRequest {
    /**
     * Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     */
    customerId?: string | null;
  }
  /**
   * A user.
   */
  export interface Schema$User {
    /**
     * Display name of the user.
     */
    displayName?: string | null;
    /**
     * Email address of the user.
     */
    emailAddress?: string | null;
  }
  /**
   * Alerts from UserChanges bucket Rules for predefined rules which contain the following rules: - Suspended user made active - New user added - User suspended (by admin) - User granted admin privileges - User admin privileges revoked - User deleted - Users password changed
   */
  export interface Schema$UserChanges {
    /**
     * Rule name
     */
    name?: string | null;
  }
  /**
   * Detector defined by administrators.
   */
  export interface Schema$UserDefinedDetectorInfo {
    /**
     * Display name of the detector.
     */
    displayName?: string | null;
    /**
     * Resource name that uniquely identifies the detector.
     */
    resourceName?: string | null;
  }
  /**
   * Alert that is triggered when a Vault accelerated deletion request is created or canceled.
   */
  export interface Schema$VaultAcceleratedDeletion {
    /**
     * The action can be one of create and cancel
     */
    actionType?: string | null;
    /**
     * Currentlty only Gmail is supported as app type
     */
    appType?: string | null;
    /**
     * The UTC timestamp of when the AD request was created
     */
    createTime?: string | null;
    /**
     * Accelerated deletion request ID intended to be used to construct the Vault UI link to the AD request
     */
    deletionRequestId?: string | null;
    /**
     * Matter ID of the accelerated deletion request intended to be used to construct the Vault UI link to the AD request
     */
    matterId?: string | null;
  }
  /**
   * Issue(s) with sending to voicemail.
   */
  export interface Schema$VoicemailMisconfiguration {
    /**
     * Issue(s) with voicemail recipients.
     */
    errors?: Schema$VoicemailRecipientError[];
  }
  /**
   * Issue(s) with a voicemail recipient.
   */
  export interface Schema$VoicemailRecipientError {
    /**
     * Email address of the invalid recipient. This may be unavailable if the recipient was deleted.
     */
    email?: string | null;
    /**
     * Reason for the error.
     */
    invalidReason?: string | null;
  }
  /**
   * An alert triggered when Google Voice configuration becomes invalid, generally due to an external entity being modified or deleted.
   */
  export interface Schema$VoiceMisconfiguration {
    /**
     * Name of the entity whose configuration is now invalid.
     */
    entityName?: string | null;
    /**
     * Type of the entity whose configuration is now invalid.
     */
    entityType?: string | null;
    /**
     * Link that the admin can follow to fix the issue.
     */
    fixUri?: string | null;
    /**
     * Issue(s) with members of a ring group.
     */
    membersMisconfiguration?: Schema$TransferMisconfiguration;
    /**
     * Issue(s) with transferring or forwarding to an external entity.
     */
    transferMisconfiguration?: Schema$TransferMisconfiguration;
    /**
     * Issue(s) with sending to voicemail.
     */
    voicemailMisconfiguration?: Schema$VoicemailMisconfiguration;
  }

  export class Resource$Alerts {
    context: APIRequestContext;
    feedback: Resource$Alerts$Feedback;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.feedback = new Resource$Alerts$Feedback(this.context);
    }

    /**
     * Performs batch delete operation on alerts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/alertcenter.googleapis.com
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
     * const alertcenter = google.alertcenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.alerts'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await alertcenter.alerts.batchDelete({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alertId": [],
     *       //   "customerId": "my_customerId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "failedAlertStatus": {},
     *   //   "successAlertIds": []
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
    batchDelete(
      params: Params$Resource$Alerts$Batchdelete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchDelete(
      params?: Params$Resource$Alerts$Batchdelete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchDeleteAlertsResponse>>;
    batchDelete(
      params: Params$Resource$Alerts$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Alerts$Batchdelete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchDeleteAlertsResponse>,
      callback: BodyResponseCallback<Schema$BatchDeleteAlertsResponse>
    ): void;
    batchDelete(
      params: Params$Resource$Alerts$Batchdelete,
      callback: BodyResponseCallback<Schema$BatchDeleteAlertsResponse>
    ): void;
    batchDelete(
      callback: BodyResponseCallback<Schema$BatchDeleteAlertsResponse>
    ): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Alerts$Batchdelete
        | BodyResponseCallback<Schema$BatchDeleteAlertsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchDeleteAlertsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchDeleteAlertsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchDeleteAlertsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Alerts$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Alerts$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://alertcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/alerts:batchDelete').replace(
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
        createAPIRequest<Schema$BatchDeleteAlertsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchDeleteAlertsResponse>(parameters);
      }
    }

    /**
     * Performs batch undelete operation on alerts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/alertcenter.googleapis.com
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
     * const alertcenter = google.alertcenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.alerts'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await alertcenter.alerts.batchUndelete({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alertId": [],
     *       //   "customerId": "my_customerId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "failedAlertStatus": {},
     *   //   "successAlertIds": []
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
    batchUndelete(
      params: Params$Resource$Alerts$Batchundelete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchUndelete(
      params?: Params$Resource$Alerts$Batchundelete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchUndeleteAlertsResponse>>;
    batchUndelete(
      params: Params$Resource$Alerts$Batchundelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUndelete(
      params: Params$Resource$Alerts$Batchundelete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchUndeleteAlertsResponse>,
      callback: BodyResponseCallback<Schema$BatchUndeleteAlertsResponse>
    ): void;
    batchUndelete(
      params: Params$Resource$Alerts$Batchundelete,
      callback: BodyResponseCallback<Schema$BatchUndeleteAlertsResponse>
    ): void;
    batchUndelete(
      callback: BodyResponseCallback<Schema$BatchUndeleteAlertsResponse>
    ): void;
    batchUndelete(
      paramsOrCallback?:
        | Params$Resource$Alerts$Batchundelete
        | BodyResponseCallback<Schema$BatchUndeleteAlertsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchUndeleteAlertsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchUndeleteAlertsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchUndeleteAlertsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Alerts$Batchundelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Alerts$Batchundelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://alertcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/alerts:batchUndelete').replace(
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
        createAPIRequest<Schema$BatchUndeleteAlertsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchUndeleteAlertsResponse>(parameters);
      }
    }

    /**
     * Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/alertcenter.googleapis.com
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
     * const alertcenter = google.alertcenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.alerts'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await alertcenter.alerts.delete({
     *     // Required. The identifier of the alert to delete.
     *     alertId: 'placeholder-value',
     *     // Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     *     customerId: 'placeholder-value',
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
      params: Params$Resource$Alerts$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Alerts$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Alerts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Alerts$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Alerts$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Alerts$Delete
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
      let params = (paramsOrCallback || {}) as Params$Resource$Alerts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Alerts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://alertcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/alerts/{alertId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['alertId'],
        pathParams: ['alertId'],
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
     * Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/alertcenter.googleapis.com
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
     * const alertcenter = google.alertcenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.alerts'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await alertcenter.alerts.get({
     *     // Required. The identifier of the alert to retrieve.
     *     alertId: 'placeholder-value',
     *     // Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     *     customerId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alertId": "my_alertId",
     *   //   "createTime": "my_createTime",
     *   //   "customerId": "my_customerId",
     *   //   "data": {},
     *   //   "deleted": false,
     *   //   "endTime": "my_endTime",
     *   //   "etag": "my_etag",
     *   //   "metadata": {},
     *   //   "securityInvestigationToolLink": "my_securityInvestigationToolLink",
     *   //   "source": "my_source",
     *   //   "startTime": "my_startTime",
     *   //   "type": "my_type",
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
      params: Params$Resource$Alerts$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Alerts$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Alert>>;
    get(
      params: Params$Resource$Alerts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Alerts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Alert>,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    get(
      params: Params$Resource$Alerts$Get,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    get(callback: BodyResponseCallback<Schema$Alert>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Alerts$Get
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Alert>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Alerts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Alerts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://alertcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/alerts/{alertId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['alertId'],
        pathParams: ['alertId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Alert>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Alert>(parameters);
      }
    }

    /**
     * Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/alertcenter.googleapis.com
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
     * const alertcenter = google.alertcenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.alerts'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await alertcenter.alerts.getMetadata({
     *     // Required. The identifier of the alert this metadata belongs to.
     *     alertId: 'placeholder-value',
     *     // Optional. The unique identifier of the Google Workspace account of the customer the alert metadata is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     *     customerId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alertId": "my_alertId",
     *   //   "assignee": "my_assignee",
     *   //   "customerId": "my_customerId",
     *   //   "etag": "my_etag",
     *   //   "severity": "my_severity",
     *   //   "status": "my_status",
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
    getMetadata(
      params: Params$Resource$Alerts$Getmetadata,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getMetadata(
      params?: Params$Resource$Alerts$Getmetadata,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AlertMetadata>>;
    getMetadata(
      params: Params$Resource$Alerts$Getmetadata,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getMetadata(
      params: Params$Resource$Alerts$Getmetadata,
      options: MethodOptions | BodyResponseCallback<Schema$AlertMetadata>,
      callback: BodyResponseCallback<Schema$AlertMetadata>
    ): void;
    getMetadata(
      params: Params$Resource$Alerts$Getmetadata,
      callback: BodyResponseCallback<Schema$AlertMetadata>
    ): void;
    getMetadata(callback: BodyResponseCallback<Schema$AlertMetadata>): void;
    getMetadata(
      paramsOrCallback?:
        | Params$Resource$Alerts$Getmetadata
        | BodyResponseCallback<Schema$AlertMetadata>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AlertMetadata>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AlertMetadata>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AlertMetadata>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Alerts$Getmetadata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Alerts$Getmetadata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://alertcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/alerts/{alertId}/metadata').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['alertId'],
        pathParams: ['alertId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AlertMetadata>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AlertMetadata>(parameters);
      }
    }

    /**
     * Lists the alerts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/alertcenter.googleapis.com
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
     * const alertcenter = google.alertcenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.alerts'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await alertcenter.alerts.list({
     *     // Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     *     customerId: 'placeholder-value',
     *     // Optional. A query string for filtering alert results. For more details, see [Query filters](https://developers.google.com/workspace/admin/alertcenter/guides/query-filters) and [Supported query filter fields](https://developers.google.com/workspace/admin/alertcenter/reference/filter-fields#alerts.list).
     *     filter: 'placeholder-value',
     *     // Optional. The sort order of the list results. If not specified results may be returned in arbitrary order. You can sort the results in descending order based on the creation timestamp using `order_by="create_time desc"`. Currently, supported sorting are `create_time asc`, `create_time desc`, `update_time desc`
     *     orderBy: 'placeholder-value',
     *     // Optional. The requested page size. Server may return fewer items than requested. If unspecified, server picks an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results the server should return. If empty, a new iteration is started. To continue an iteration, pass in the value from the previous ListAlertsResponse's next_page_token field.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alerts": [],
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
      params: Params$Resource$Alerts$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Alerts$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAlertsResponse>>;
    list(
      params: Params$Resource$Alerts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Alerts$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListAlertsResponse>,
      callback: BodyResponseCallback<Schema$ListAlertsResponse>
    ): void;
    list(
      params: Params$Resource$Alerts$List,
      callback: BodyResponseCallback<Schema$ListAlertsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAlertsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Alerts$List
        | BodyResponseCallback<Schema$ListAlertsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAlertsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAlertsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAlertsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Alerts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Alerts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://alertcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/alerts').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListAlertsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAlertsResponse>(parameters);
      }
    }

    /**
     * Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/alertcenter.googleapis.com
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
     * const alertcenter = google.alertcenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.alerts'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await alertcenter.alerts.undelete({
     *     // Required. The identifier of the alert to undelete.
     *     alertId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customerId": "my_customerId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alertId": "my_alertId",
     *   //   "createTime": "my_createTime",
     *   //   "customerId": "my_customerId",
     *   //   "data": {},
     *   //   "deleted": false,
     *   //   "endTime": "my_endTime",
     *   //   "etag": "my_etag",
     *   //   "metadata": {},
     *   //   "securityInvestigationToolLink": "my_securityInvestigationToolLink",
     *   //   "source": "my_source",
     *   //   "startTime": "my_startTime",
     *   //   "type": "my_type",
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
    undelete(
      params: Params$Resource$Alerts$Undelete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    undelete(
      params?: Params$Resource$Alerts$Undelete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Alert>>;
    undelete(
      params: Params$Resource$Alerts$Undelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    undelete(
      params: Params$Resource$Alerts$Undelete,
      options: MethodOptions | BodyResponseCallback<Schema$Alert>,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    undelete(
      params: Params$Resource$Alerts$Undelete,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    undelete(callback: BodyResponseCallback<Schema$Alert>): void;
    undelete(
      paramsOrCallback?:
        | Params$Resource$Alerts$Undelete
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Alert>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Alerts$Undelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Alerts$Undelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://alertcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/alerts/{alertId}:undelete').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['alertId'],
        pathParams: ['alertId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Alert>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Alert>(parameters);
      }
    }
  }

  export interface Params$Resource$Alerts$Batchdelete
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchDeleteAlertsRequest;
  }
  export interface Params$Resource$Alerts$Batchundelete
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchUndeleteAlertsRequest;
  }
  export interface Params$Resource$Alerts$Delete extends StandardParameters {
    /**
     * Required. The identifier of the alert to delete.
     */
    alertId?: string;
    /**
     * Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     */
    customerId?: string;
  }
  export interface Params$Resource$Alerts$Get extends StandardParameters {
    /**
     * Required. The identifier of the alert to retrieve.
     */
    alertId?: string;
    /**
     * Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     */
    customerId?: string;
  }
  export interface Params$Resource$Alerts$Getmetadata
    extends StandardParameters {
    /**
     * Required. The identifier of the alert this metadata belongs to.
     */
    alertId?: string;
    /**
     * Optional. The unique identifier of the Google Workspace account of the customer the alert metadata is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     */
    customerId?: string;
  }
  export interface Params$Resource$Alerts$List extends StandardParameters {
    /**
     * Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     */
    customerId?: string;
    /**
     * Optional. A query string for filtering alert results. For more details, see [Query filters](https://developers.google.com/workspace/admin/alertcenter/guides/query-filters) and [Supported query filter fields](https://developers.google.com/workspace/admin/alertcenter/reference/filter-fields#alerts.list).
     */
    filter?: string;
    /**
     * Optional. The sort order of the list results. If not specified results may be returned in arbitrary order. You can sort the results in descending order based on the creation timestamp using `order_by="create_time desc"`. Currently, supported sorting are `create_time asc`, `create_time desc`, `update_time desc`
     */
    orderBy?: string;
    /**
     * Optional. The requested page size. Server may return fewer items than requested. If unspecified, server picks an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return. If empty, a new iteration is started. To continue an iteration, pass in the value from the previous ListAlertsResponse's next_page_token field.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Alerts$Undelete extends StandardParameters {
    /**
     * Required. The identifier of the alert to undelete.
     */
    alertId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UndeleteAlertRequest;
  }

  export class Resource$Alerts$Feedback {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/alertcenter.googleapis.com
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
     * const alertcenter = google.alertcenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.alerts'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await alertcenter.alerts.feedback.create({
     *     // Required. The identifier of the alert this feedback belongs to.
     *     alertId: 'placeholder-value',
     *     // Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     *     customerId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alertId": "my_alertId",
     *       //   "createTime": "my_createTime",
     *       //   "customerId": "my_customerId",
     *       //   "email": "my_email",
     *       //   "feedbackId": "my_feedbackId",
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alertId": "my_alertId",
     *   //   "createTime": "my_createTime",
     *   //   "customerId": "my_customerId",
     *   //   "email": "my_email",
     *   //   "feedbackId": "my_feedbackId",
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
    create(
      params: Params$Resource$Alerts$Feedback$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Alerts$Feedback$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AlertFeedback>>;
    create(
      params: Params$Resource$Alerts$Feedback$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Alerts$Feedback$Create,
      options: MethodOptions | BodyResponseCallback<Schema$AlertFeedback>,
      callback: BodyResponseCallback<Schema$AlertFeedback>
    ): void;
    create(
      params: Params$Resource$Alerts$Feedback$Create,
      callback: BodyResponseCallback<Schema$AlertFeedback>
    ): void;
    create(callback: BodyResponseCallback<Schema$AlertFeedback>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Alerts$Feedback$Create
        | BodyResponseCallback<Schema$AlertFeedback>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AlertFeedback>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AlertFeedback>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AlertFeedback>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Alerts$Feedback$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Alerts$Feedback$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://alertcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/alerts/{alertId}/feedback').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['alertId'],
        pathParams: ['alertId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AlertFeedback>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AlertFeedback>(parameters);
      }
    }

    /**
     * Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/alertcenter.googleapis.com
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
     * const alertcenter = google.alertcenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.alerts'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await alertcenter.alerts.feedback.list({
     *     // Required. The alert identifier. The "-" wildcard could be used to represent all alerts.
     *     alertId: 'placeholder-value',
     *     // Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     *     customerId: 'placeholder-value',
     *     // Optional. A query string for filtering alert feedback results. For more details, see [Query filters](https://developers.google.com/workspace/admin/alertcenter/guides/query-filters) and [Supported query filter fields](https://developers.google.com/workspace/admin/alertcenter/reference/filter-fields#alerts.feedback.list).
     *     filter: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "feedback": []
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
      params: Params$Resource$Alerts$Feedback$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Alerts$Feedback$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAlertFeedbackResponse>>;
    list(
      params: Params$Resource$Alerts$Feedback$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Alerts$Feedback$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAlertFeedbackResponse>,
      callback: BodyResponseCallback<Schema$ListAlertFeedbackResponse>
    ): void;
    list(
      params: Params$Resource$Alerts$Feedback$List,
      callback: BodyResponseCallback<Schema$ListAlertFeedbackResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAlertFeedbackResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Alerts$Feedback$List
        | BodyResponseCallback<Schema$ListAlertFeedbackResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAlertFeedbackResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAlertFeedbackResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAlertFeedbackResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Alerts$Feedback$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Alerts$Feedback$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://alertcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/alerts/{alertId}/feedback').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['alertId'],
        pathParams: ['alertId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAlertFeedbackResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAlertFeedbackResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Alerts$Feedback$Create
    extends StandardParameters {
    /**
     * Required. The identifier of the alert this feedback belongs to.
     */
    alertId?: string;
    /**
     * Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     */
    customerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AlertFeedback;
  }
  export interface Params$Resource$Alerts$Feedback$List
    extends StandardParameters {
    /**
     * Required. The alert identifier. The "-" wildcard could be used to represent all alerts.
     */
    alertId?: string;
    /**
     * Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     */
    customerId?: string;
    /**
     * Optional. A query string for filtering alert feedback results. For more details, see [Query filters](https://developers.google.com/workspace/admin/alertcenter/guides/query-filters) and [Supported query filter fields](https://developers.google.com/workspace/admin/alertcenter/reference/filter-fields#alerts.feedback.list).
     */
    filter?: string;
  }

  export class Resource$V1beta1 {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns customer-level settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/alertcenter.googleapis.com
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
     * const alertcenter = google.alertcenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.alerts'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await alertcenter.getSettings({
     *     // Optional. The unique identifier of the Google Workspace account of the customer the alert settings are associated with. The `customer_id` must/ have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     *     customerId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "notifications": []
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
    getSettings(
      params: Params$Resource$V1beta1$Getsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSettings(
      params?: Params$Resource$V1beta1$Getsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Settings>>;
    getSettings(
      params: Params$Resource$V1beta1$Getsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSettings(
      params: Params$Resource$V1beta1$Getsettings,
      options: MethodOptions | BodyResponseCallback<Schema$Settings>,
      callback: BodyResponseCallback<Schema$Settings>
    ): void;
    getSettings(
      params: Params$Resource$V1beta1$Getsettings,
      callback: BodyResponseCallback<Schema$Settings>
    ): void;
    getSettings(callback: BodyResponseCallback<Schema$Settings>): void;
    getSettings(
      paramsOrCallback?:
        | Params$Resource$V1beta1$Getsettings
        | BodyResponseCallback<Schema$Settings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Settings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Settings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Settings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1beta1$Getsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1beta1$Getsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://alertcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/settings').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Settings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Settings>(parameters);
      }
    }

    /**
     * Updates the customer-level settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/alertcenter.googleapis.com
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
     * const alertcenter = google.alertcenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.alerts'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await alertcenter.updateSettings({
     *     // Optional. The unique identifier of the Google Workspace account of the customer the alert settings are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     *     customerId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "notifications": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "notifications": []
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
    updateSettings(
      params: Params$Resource$V1beta1$Updatesettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateSettings(
      params?: Params$Resource$V1beta1$Updatesettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Settings>>;
    updateSettings(
      params: Params$Resource$V1beta1$Updatesettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSettings(
      params: Params$Resource$V1beta1$Updatesettings,
      options: MethodOptions | BodyResponseCallback<Schema$Settings>,
      callback: BodyResponseCallback<Schema$Settings>
    ): void;
    updateSettings(
      params: Params$Resource$V1beta1$Updatesettings,
      callback: BodyResponseCallback<Schema$Settings>
    ): void;
    updateSettings(callback: BodyResponseCallback<Schema$Settings>): void;
    updateSettings(
      paramsOrCallback?:
        | Params$Resource$V1beta1$Updatesettings
        | BodyResponseCallback<Schema$Settings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Settings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Settings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Settings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1beta1$Updatesettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1beta1$Updatesettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://alertcenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/settings').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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
        createAPIRequest<Schema$Settings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Settings>(parameters);
      }
    }
  }

  export interface Params$Resource$V1beta1$Getsettings
    extends StandardParameters {
    /**
     * Optional. The unique identifier of the Google Workspace account of the customer the alert settings are associated with. The `customer_id` must/ have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     */
    customerId?: string;
  }
  export interface Params$Resource$V1beta1$Updatesettings
    extends StandardParameters {
    /**
     * Optional. The unique identifier of the Google Workspace account of the customer the alert settings are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
     */
    customerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Settings;
  }
}
