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

export namespace securitycenter_v1beta2 {
  export interface Options extends GlobalOptions {
    version: 'v1beta2';
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
   * Security Command Center API
   *
   * Security Command Center API provides access to temporal views of assets and findings within an organization.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const securitycenter = google.securitycenter('v1beta2');
   * ```
   */
  export class Securitycenter {
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
   * Represents an access event.
   */
  export interface Schema$Access {
    /**
     * Caller's IP address, such as "1.1.1.1".
     */
    callerIp?: string | null;
    /**
     * The caller IP's geolocation, which identifies where the call came from.
     */
    callerIpGeo?: Schema$Geolocation;
    /**
     * The method that the service account called, e.g. "SetIamPolicy".
     */
    methodName?: string | null;
    /**
     * Associated email, such as "foo@google.com". The email address of the authenticated user or a service account acting on behalf of a third party principal making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id).
     */
    principalEmail?: string | null;
    /**
     * A string that represents the principal_subject that is associated with the identity. Unlike `principal_email`, `principal_subject` supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format is `principal://iam.googleapis.com/{identity pool name\}/subject/{subject\}`. Some GKE identities, such as GKE_WORKLOAD, FREEFORM, and GKE_HUB_WORKLOAD, still use the legacy format `serviceAccount:{identity pool name\}[{subject\}]`.
     */
    principalSubject?: string | null;
    /**
     * The identity delegation history of an authenticated service account that made the request. The `serviceAccountDelegationInfo[]` object contains information about the real authorities that try to access Google Cloud resources by delegating on a service account. When multiple authorities are present, they are guaranteed to be sorted based on the original ordering of the identity delegation events.
     */
    serviceAccountDelegationInfo?: Schema$ServiceAccountDelegationInfo[];
    /**
     * The name of the service account key that was used to create or exchange credentials when authenticating the service account that made the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID\}/serviceAccounts/{ACCOUNT\}/keys/{key\}".
     */
    serviceAccountKeyName?: string | null;
    /**
     * This is the API service that the service account made a call to, e.g. "iam.googleapis.com"
     */
    serviceName?: string | null;
    /**
     * The caller's user agent string associated with the finding.
     */
    userAgent?: string | null;
    /**
     * Type of user agent associated with the finding. For example, an operating system shell or an embedded or standalone application.
     */
    userAgentFamily?: string | null;
    /**
     * A string that represents a username. The username provided depends on the type of the finding and is likely not an IAM principal. For example, this can be a system username if the finding is related to a virtual machine, or it can be an application login username.
     */
    userName?: string | null;
  }
  /**
   * Conveys information about a Kubernetes access review (such as one returned by a [`kubectl auth can-i`](https://kubernetes.io/docs/reference/access-authn-authz/authorization/#checking-api-access) command) that was involved in a finding.
   */
  export interface Schema$AccessReview {
    /**
     * The API group of the resource. "*" means all.
     */
    group?: string | null;
    /**
     * The name of the resource being requested. Empty means all.
     */
    name?: string | null;
    /**
     * Namespace of the action being requested. Currently, there is no distinction between no namespace and all namespaces. Both are represented by "" (empty).
     */
    ns?: string | null;
    /**
     * The optional resource type requested. "*" means all.
     */
    resource?: string | null;
    /**
     * The optional subresource type.
     */
    subresource?: string | null;
    /**
     * A Kubernetes resource API verb, like get, list, watch, create, update, delete, proxy. "*" means all.
     */
    verb?: string | null;
    /**
     * The API version of the resource. "*" means all.
     */
    version?: string | null;
  }
  /**
   * Information about [Google Cloud Armor Adaptive Protection](https://cloud.google.com/armor/docs/cloud-armor-overview#google-cloud-armor-adaptive-protection).
   */
  export interface Schema$AdaptiveProtection {
    /**
     * A score of 0 means that there is low confidence that the detected event is an actual attack. A score of 1 means that there is high confidence that the detected event is an attack. See the [Adaptive Protection documentation](https://cloud.google.com/armor/docs/adaptive-protection-overview#configure-alert-tuning) for further explanation.
     */
    confidence?: number | null;
  }
  /**
   * Details about resources affected by this finding.
   */
  export interface Schema$AffectedResources {
    /**
     * The count of resources affected by the finding.
     */
    count?: string | null;
  }
  /**
   * Contains information about the AI model associated with the finding.
   */
  export interface Schema$AiModel {
    /**
     * The platform on which the model is deployed.
     */
    deploymentPlatform?: string | null;
    /**
     * The user defined display name of model. Ex. baseline-classification-model
     */
    displayName?: string | null;
    /**
     * The domain of the model, for example, “image-classification”.
     */
    domain?: string | null;
    /**
     * The name of the model library, for example, “transformers”.
     */
    library?: string | null;
    /**
     * The region in which the model is used, for example, “us-central1”.
     */
    location?: string | null;
    /**
     * The name of the AI model, for example, "gemini:1.0.0".
     */
    name?: string | null;
    /**
     * The publisher of the model, for example, “google” or “nvidia”.
     */
    publisher?: string | null;
  }
  /**
   * Allowed IP rule.
   */
  export interface Schema$Allowed {
    /**
     * Optional. Optional list of allowed IP rules.
     */
    ipRules?: Schema$IpRule[];
  }
  /**
   * Represents an application associated with a finding.
   */
  export interface Schema$Application {
    /**
     * The base URI that identifies the network location of the application in which the vulnerability was detected. For example, `http://example.com`.
     */
    baseUri?: string | null;
    /**
     * The full URI with payload that can be used to reproduce the vulnerability. For example, `http://example.com?p=aMmYgI6H`.
     */
    fullUri?: string | null;
  }
  /**
   * Information about DDoS attack volume and classification.
   */
  export interface Schema$Attack {
    /**
     * Type of attack, for example, 'SYN-flood', 'NTP-udp', or 'CHARGEN-udp'.
     */
    classification?: string | null;
    /**
     * Total BPS (bytes per second) volume of attack. Deprecated - refer to volume_bps_long instead.
     */
    volumeBps?: number | null;
    /**
     * Total BPS (bytes per second) volume of attack.
     */
    volumeBpsLong?: string | null;
    /**
     * Total PPS (packets per second) volume of attack. Deprecated - refer to volume_pps_long instead.
     */
    volumePps?: number | null;
    /**
     * Total PPS (packets per second) volume of attack.
     */
    volumePpsLong?: string | null;
  }
  /**
   * An attack exposure contains the results of an attack path simulation run.
   */
  export interface Schema$AttackExposure {
    /**
     * The resource name of the attack path simulation result that contains the details regarding this attack exposure score. Example: `organizations/123/simulations/456/attackExposureResults/789`
     */
    attackExposureResult?: string | null;
    /**
     * The number of high value resources that are exposed as a result of this finding.
     */
    exposedHighValueResourcesCount?: number | null;
    /**
     * The number of high value resources that are exposed as a result of this finding.
     */
    exposedLowValueResourcesCount?: number | null;
    /**
     * The number of medium value resources that are exposed as a result of this finding.
     */
    exposedMediumValueResourcesCount?: number | null;
    /**
     * The most recent time the attack exposure was updated on this finding.
     */
    latestCalculationTime?: string | null;
    /**
     * A number between 0 (inclusive) and infinity that represents how important this finding is to remediate. The higher the score, the more important it is to remediate.
     */
    score?: number | null;
    /**
     * What state this AttackExposure is in. This captures whether or not an attack exposure has been calculated or not.
     */
    state?: string | null;
  }
  /**
   * An AWS account that is a member of an organization.
   */
  export interface Schema$AwsAccount {
    /**
     * The unique identifier (ID) of the account, containing exactly 12 digits.
     */
    id?: string | null;
    /**
     * The friendly name of this account.
     */
    name?: string | null;
  }
  /**
   * AWS metadata associated with the resource, only applicable if the finding's cloud provider is Amazon Web Services.
   */
  export interface Schema$AwsMetadata {
    /**
     * The AWS account associated with the resource.
     */
    account?: Schema$AwsAccount;
    /**
     * The AWS organization associated with the resource.
     */
    organization?: Schema$AwsOrganization;
    /**
     * A list of AWS organizational units associated with the resource, ordered from lowest level (closest to the account) to highest level.
     */
    organizationalUnits?: Schema$AwsOrganizationalUnit[];
  }
  /**
   * An organization is a collection of accounts that are centrally managed together using consolidated billing, organized hierarchically with organizational units (OUs), and controlled with policies.
   */
  export interface Schema$AwsOrganization {
    /**
     * The unique identifier (ID) for the organization. The regex pattern for an organization ID string requires "o-" followed by from 10 to 32 lowercase letters or digits.
     */
    id?: string | null;
  }
  /**
   * An Organizational Unit (OU) is a container of AWS accounts within a root of an organization. Policies that are attached to an OU apply to all accounts contained in that OU and in any child OUs.
   */
  export interface Schema$AwsOrganizationalUnit {
    /**
     * The unique identifier (ID) associated with this OU. The regex pattern for an organizational unit ID string requires "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits. For example, "ou-ab12-cd34ef56".
     */
    id?: string | null;
    /**
     * The friendly name of the OU.
     */
    name?: string | null;
  }
  /**
   * Represents an Azure management group.
   */
  export interface Schema$AzureManagementGroup {
    /**
     * The display name of the Azure management group.
     */
    displayName?: string | null;
    /**
     * The UUID of the Azure management group, for example, `20000000-0001-0000-0000-000000000000`.
     */
    id?: string | null;
  }
  /**
   * Azure metadata associated with the resource, only applicable if the finding's cloud provider is Microsoft Azure.
   */
  export interface Schema$AzureMetadata {
    /**
     * A list of Azure management groups associated with the resource, ordered from lowest level (closest to the subscription) to highest level.
     */
    managementGroups?: Schema$AzureManagementGroup[];
    /**
     * The Azure resource group associated with the resource.
     */
    resourceGroup?: Schema$AzureResourceGroup;
    /**
     * The Azure subscription associated with the resource.
     */
    subscription?: Schema$AzureSubscription;
    /**
     * The Azure Entra tenant associated with the resource.
     */
    tenant?: Schema$AzureTenant;
  }
  /**
   * Represents an Azure resource group.
   */
  export interface Schema$AzureResourceGroup {
    /**
     * The ID of the Azure resource group.
     */
    id?: string | null;
    /**
     * The name of the Azure resource group. This is not a UUID.
     */
    name?: string | null;
  }
  /**
   * Represents an Azure subscription.
   */
  export interface Schema$AzureSubscription {
    /**
     * The display name of the Azure subscription.
     */
    displayName?: string | null;
    /**
     * The UUID of the Azure subscription, for example, `291bba3f-e0a5-47bc-a099-3bdcb2a50a05`.
     */
    id?: string | null;
  }
  /**
   * Represents a Microsoft Entra tenant.
   */
  export interface Schema$AzureTenant {
    /**
     * The display name of the Azure tenant.
     */
    displayName?: string | null;
    /**
     * The ID of the Microsoft Entra tenant, for example, "a11aaa11-aa11-1aa1-11aa-1aaa11a".
     */
    id?: string | null;
  }
  /**
   * Information related to Google Cloud Backup and DR Service findings.
   */
  export interface Schema$BackupDisasterRecovery {
    /**
     * The name of the Backup and DR appliance that captures, moves, and manages the lifecycle of backup data. For example, `backup-server-57137`.
     */
    appliance?: string | null;
    /**
     * The names of Backup and DR applications. An application is a VM, database, or file system on a managed host monitored by a backup and recovery appliance. For example, `centos7-01-vol00`, `centos7-01-vol01`, `centos7-01-vol02`.
     */
    applications?: string[] | null;
    /**
     * The timestamp at which the Backup and DR backup was created.
     */
    backupCreateTime?: string | null;
    /**
     * The name of a Backup and DR template which comprises one or more backup policies. See the [Backup and DR documentation](https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan#temp) for more information. For example, `snap-ov`.
     */
    backupTemplate?: string | null;
    /**
     * The backup type of the Backup and DR image. For example, `Snapshot`, `Remote Snapshot`, `OnVault`.
     */
    backupType?: string | null;
    /**
     * The name of a Backup and DR host, which is managed by the backup and recovery appliance and known to the management console. The host can be of type Generic (for example, Compute Engine, SQL Server, Oracle DB, SMB file system, etc.), vCenter, or an ESX server. See the [Backup and DR documentation on hosts](https://cloud.google.com/backup-disaster-recovery/docs/configuration/manage-hosts-and-their-applications) for more information. For example, `centos7-01`.
     */
    host?: string | null;
    /**
     * The names of Backup and DR policies that are associated with a template and that define when to run a backup, how frequently to run a backup, and how long to retain the backup image. For example, `onvaults`.
     */
    policies?: string[] | null;
    /**
     * The names of Backup and DR advanced policy options of a policy applying to an application. See the [Backup and DR documentation on policy options](https://cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings). For example, `skipofflineappsincongrp, nounmap`.
     */
    policyOptions?: string[] | null;
    /**
     * The name of the Backup and DR resource profile that specifies the storage media for backups of application and VM data. See the [Backup and DR documentation on profiles](https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan#profile). For example, `GCP`.
     */
    profile?: string | null;
    /**
     * The name of the Backup and DR storage pool that the backup and recovery appliance is storing data in. The storage pool could be of type Cloud, Primary, Snapshot, or OnVault. See the [Backup and DR documentation on storage pools](https://cloud.google.com/backup-disaster-recovery/docs/concepts/storage-pools). For example, `DiskPoolOne`.
     */
    storagePool?: string | null;
  }
  /**
   * The destination big query dataset to export findings to.
   */
  export interface Schema$BigQueryDestination {
    /**
     * Required. The relative resource name of the destination dataset, in the form projects/{projectId\}/datasets/{datasetId\}.
     */
    dataset?: string | null;
  }
  /**
   * Contains details about a chokepoint, which is a resource or resource group where high-risk attack paths converge, based on [attack path simulations] (https://cloud.google.com/security-command-center/docs/attack-exposure-learn#attack_path_simulations).
   */
  export interface Schema$Chokepoint {
    /**
     * List of resource names of findings associated with this chokepoint. For example, organizations/123/sources/456/findings/789. This list will have at most 100 findings.
     */
    relatedFindings?: string[] | null;
  }
  /**
   * Fields related to Google Cloud Armor findings.
   */
  export interface Schema$CloudArmor {
    /**
     * Information about potential Layer 7 DDoS attacks identified by [Google Cloud Armor Adaptive Protection](https://cloud.google.com/armor/docs/adaptive-protection-overview).
     */
    adaptiveProtection?: Schema$AdaptiveProtection;
    /**
     * Information about DDoS attack volume and classification.
     */
    attack?: Schema$Attack;
    /**
     * Duration of attack from the start until the current moment (updated every 5 minutes).
     */
    duration?: string | null;
    /**
     * Information about incoming requests evaluated by [Google Cloud Armor security policies](https://cloud.google.com/armor/docs/security-policy-overview).
     */
    requests?: Schema$Requests;
    /**
     * Information about the [Google Cloud Armor security policy](https://cloud.google.com/armor/docs/security-policy-overview) relevant to the finding.
     */
    securityPolicy?: Schema$SecurityPolicy;
    /**
     * Distinguish between volumetric & protocol DDoS attack and application layer attacks. For example, "L3_4" for Layer 3 and Layer 4 DDoS attacks, or "L_7" for Layer 7 DDoS attacks.
     */
    threatVector?: string | null;
  }
  /**
   * CloudControl associated with the finding.
   */
  export interface Schema$CloudControl {
    /**
     * Name of the CloudControl associated with the finding.
     */
    cloudControlName?: string | null;
    /**
     * Policy type of the CloudControl
     */
    policyType?: string | null;
    /**
     * Type of cloud control.
     */
    type?: string | null;
    /**
     * Version of the Cloud Control
     */
    version?: number | null;
  }
  /**
   * The [data profile](https://cloud.google.com/dlp/docs/data-profiles) associated with the finding.
   */
  export interface Schema$CloudDlpDataProfile {
    /**
     * Name of the data profile, for example, `projects/123/locations/europe/tableProfiles/8383929`.
     */
    dataProfile?: string | null;
    /**
     * The resource hierarchy level at which the data profile was generated.
     */
    parentType?: string | null;
  }
  /**
   * Details about the Cloud Data Loss Prevention (Cloud DLP) [inspection job](https://cloud.google.com/dlp/docs/concepts-job-triggers) that produced the finding.
   */
  export interface Schema$CloudDlpInspection {
    /**
     * Whether Cloud DLP scanned the complete resource or a sampled subset.
     */
    fullScan?: boolean | null;
    /**
     * The type of information (or *[infoType](https://cloud.google.com/dlp/docs/infotypes-reference)*) found, for example, `EMAIL_ADDRESS` or `STREET_ADDRESS`.
     */
    infoType?: string | null;
    /**
     * The number of times Cloud DLP found this infoType within this job and resource.
     */
    infoTypeCount?: string | null;
    /**
     * Name of the inspection job, for example, `projects/123/locations/europe/dlpJobs/i-8383929`.
     */
    inspectJob?: string | null;
  }
  /**
   * Metadata taken from a [Cloud Logging LogEntry](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry)
   */
  export interface Schema$CloudLoggingEntry {
    /**
     * A unique identifier for the log entry.
     */
    insertId?: string | null;
    /**
     * The type of the log (part of `log_name`. `log_name` is the resource name of the log to which this log entry belongs). For example: `cloudresourcemanager.googleapis.com/activity`. Note that this field is not URL-encoded, unlike the `LOG_ID` field in `LogEntry`.
     */
    logId?: string | null;
    /**
     * The organization, folder, or project of the monitored resource that produced this log entry.
     */
    resourceContainer?: string | null;
    /**
     * The time the event described by the log entry occurred.
     */
    timestamp?: string | null;
  }
  /**
   * Contains compliance information about a security standard indicating unmet recommendations.
   */
  export interface Schema$Compliance {
    /**
     * Policies within the standard or benchmark, for example, A.12.4.1
     */
    ids?: string[] | null;
    /**
     * Industry-wide compliance standards or benchmarks, such as CIS, PCI, and OWASP.
     */
    standard?: string | null;
    /**
     * Version of the standard or benchmark, for example, 1.1
     */
    version?: string | null;
  }
  /**
   * Compliance Details associated with the finding.
   */
  export interface Schema$ComplianceDetails {
    /**
     * CloudControl associated with the finding
     */
    cloudControl?: Schema$CloudControl;
    /**
     * Cloud Control Deployments associated with the finding. For example, organizations/123/locations/global/cloudControlDeployments/deploymentIdentifier
     */
    cloudControlDeploymentNames?: string[] | null;
    /**
     * Details of Frameworks associated with the finding
     */
    frameworks?: Schema$Framework[];
  }
  /**
   * Configuration of a module.
   */
  export interface Schema$Config {
    /**
     * The state of enablement for the module at its level of the resource hierarchy.
     */
    moduleEnablementState?: string | null;
    /**
     * The configuration value for the module. The absence of this field implies its inheritance from the parent.
     */
    value?: {[key: string]: any} | null;
  }
  /**
   * Contains information about the IP connection associated with the finding.
   */
  export interface Schema$Connection {
    /**
     * Destination IP address. Not present for sockets that are listening and not connected.
     */
    destinationIp?: string | null;
    /**
     * Destination port. Not present for sockets that are listening and not connected.
     */
    destinationPort?: number | null;
    /**
     * IANA Internet Protocol Number such as TCP(6) and UDP(17).
     */
    protocol?: string | null;
    /**
     * Source IP address.
     */
    sourceIp?: string | null;
    /**
     * Source port.
     */
    sourcePort?: number | null;
  }
  /**
   * The email address of a contact.
   */
  export interface Schema$Contact {
    /**
     * An email address. For example, "`person123@company.com`".
     */
    email?: string | null;
  }
  /**
   * Details about specific contacts
   */
  export interface Schema$ContactDetails {
    /**
     * A list of contacts
     */
    contacts?: Schema$Contact[];
  }
  /**
   * Container associated with the finding.
   */
  export interface Schema$Container {
    /**
     * The time that the container was created.
     */
    createTime?: string | null;
    /**
     * Optional container image ID, if provided by the container runtime. Uniquely identifies the container image launched using a container image digest.
     */
    imageId?: string | null;
    /**
     * Container labels, as provided by the container runtime.
     */
    labels?: Schema$Label[];
    /**
     * Name of the container.
     */
    name?: string | null;
    /**
     * Container image URI provided when configuring a pod or container. This string can identify a container image version using mutable tags.
     */
    uri?: string | null;
  }
  /**
   * Resource capturing the settings for the Container Threat Detection service.
   */
  export interface Schema$ContainerThreatDetectionSettings {
    /**
     * The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's configuration.
     */
    modules?: {[key: string]: Schema$Config} | null;
    /**
     * Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string | null;
    /**
     * Output only. The service account used by Container Threat Detection for scanning. Service accounts are scoped at the project level meaning this field will be empty at any level above a project.
     */
    serviceAccount?: string | null;
    /**
     * The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.
     */
    serviceEnablementState?: string | null;
    /**
     * Output only. The time the settings were last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Compliance control associated with the finding.
   */
  export interface Schema$Control {
    /**
     * Name of the Control
     */
    controlName?: string | null;
    /**
     * Display name of the control. For example, AU-02.
     */
    displayName?: string | null;
  }
  /**
   * CVE stands for Common Vulnerabilities and Exposures. Information from the [CVE record](https://www.cve.org/ResourcesSupport/Glossary) that describes this vulnerability.
   */
  export interface Schema$Cve {
    /**
     * Describe Common Vulnerability Scoring System specified at https://www.first.org/cvss/v3.1/specification-document
     */
    cvssv3?: Schema$Cvssv3;
    /**
     * The exploitation activity of the vulnerability in the wild.
     */
    exploitationActivity?: string | null;
    /**
     * Date the first publicly available exploit or PoC was released.
     */
    exploitReleaseDate?: string | null;
    /**
     * Date of the earliest known exploitation.
     */
    firstExploitationDate?: string | null;
    /**
     * The unique identifier for the vulnerability. e.g. CVE-2021-34527
     */
    id?: string | null;
    /**
     * The potential impact of the vulnerability if it was to be exploited.
     */
    impact?: string | null;
    /**
     * Whether or not the vulnerability has been observed in the wild.
     */
    observedInTheWild?: boolean | null;
    /**
     * Additional information about the CVE. e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527
     */
    references?: Schema$Reference[];
    /**
     * Whether upstream fix is available for the CVE.
     */
    upstreamFixAvailable?: boolean | null;
    /**
     * Whether or not the vulnerability was zero day when the finding was published.
     */
    zeroDay?: boolean | null;
  }
  /**
   * Common Vulnerability Scoring System version 3.
   */
  export interface Schema$Cvssv3 {
    /**
     * This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability.
     */
    attackComplexity?: string | null;
    /**
     * Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. This metric reflects the context by which vulnerability exploitation is possible.
     */
    attackVector?: string | null;
    /**
     * This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability.
     */
    availabilityImpact?: string | null;
    /**
     * The base score is a function of the base metric scores.
     */
    baseScore?: number | null;
    /**
     * This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability.
     */
    confidentialityImpact?: string | null;
    /**
     * This metric measures the impact to integrity of a successfully exploited vulnerability.
     */
    integrityImpact?: string | null;
    /**
     * This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability.
     */
    privilegesRequired?: string | null;
    /**
     * The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope.
     */
    scope?: string | null;
    /**
     * This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component.
     */
    userInteraction?: string | null;
  }
  /**
   * CWE stands for Common Weakness Enumeration. Information about this weakness, as described by [CWE](https://cwe.mitre.org/).
   */
  export interface Schema$Cwe {
    /**
     * The CWE identifier, e.g. CWE-94
     */
    id?: string | null;
    /**
     * Any reference to the details on the CWE, for example, https://cwe.mitre.org/data/definitions/94.html
     */
    references?: Schema$Reference[];
  }
  /**
   * Details about a data access attempt made by a principal not authorized under applicable data security policy.
   */
  export interface Schema$DataAccessEvent {
    /**
     * Unique identifier for data access event.
     */
    eventId?: string | null;
    /**
     * Timestamp of data access event.
     */
    eventTime?: string | null;
    /**
     * The operation performed by the principal to access the data.
     */
    operation?: string | null;
    /**
     * The email address of the principal that accessed the data. The principal could be a user account, service account, Google group, or other.
     */
    principalEmail?: string | null;
  }
  /**
   * Represents database access information, such as queries. A database may be a sub-resource of an instance (as in the case of Cloud SQL instances or Cloud Spanner instances), or the database instance itself. Some database resources might not have the [full resource name](https://google.aip.dev/122#full-resource-names) populated because these resource types, such as Cloud SQL databases, are not yet supported by Cloud Asset Inventory. In these cases only the display name is provided.
   */
  export interface Schema$Database {
    /**
     * The human-readable name of the database that the user connected to.
     */
    displayName?: string | null;
    /**
     * The target usernames, roles, or groups of an SQL privilege grant, which is not an IAM policy change.
     */
    grantees?: string[] | null;
    /**
     * Some database resources may not have the [full resource name](https://google.aip.dev/122#full-resource-names) populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. Cloud SQL databases). In these cases only the display name will be provided. The [full resource name](https://google.aip.dev/122#full-resource-names) of the database that the user connected to, if it is supported by Cloud Asset Inventory.
     */
    name?: string | null;
    /**
     * The SQL statement that is associated with the database access.
     */
    query?: string | null;
    /**
     * The username used to connect to the database. The username might not be an IAM principal and does not have a set format.
     */
    userName?: string | null;
    /**
     * The version of the database, for example, POSTGRES_14. See [the complete list](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion).
     */
    version?: string | null;
  }
  /**
   * Details about a data flow event, in which either the data is moved to or is accessed from a non-compliant geo-location, as defined in the applicable data security policy.
   */
  export interface Schema$DataFlowEvent {
    /**
     * Unique identifier for data flow event.
     */
    eventId?: string | null;
    /**
     * Timestamp of data flow event.
     */
    eventTime?: string | null;
    /**
     * The operation performed by the principal for the data flow event.
     */
    operation?: string | null;
    /**
     * The email address of the principal that initiated the data flow event. The principal could be a user account, service account, Google group, or other.
     */
    principalEmail?: string | null;
    /**
     * Non-compliant location of the principal or the data destination.
     */
    violatedLocation?: string | null;
  }
  /**
   * Details about data retention deletion violations, in which the data is non-compliant based on their retention or deletion time, as defined in the applicable data security policy. The Data Retention Deletion (DRD) control is a control of the DSPM (Data Security Posture Management) suite that enables organizations to manage data retention and deletion policies in compliance with regulations, such as GDPR and CRPA. DRD supports two primary policy types: maximum storage length (max TTL) and minimum storage length (min TTL). Both are aimed at helping organizations meet regulatory and data management commitments.
   */
  export interface Schema$DataRetentionDeletionEvent {
    /**
     * Number of objects that violated the policy for this resource. If the number is less than 1,000, then the value of this field is the exact number. If the number of objects that violated the policy is greater than or equal to 1,000, then the value of this field is 1000.
     */
    dataObjectCount?: string | null;
    /**
     * Timestamp indicating when the event was detected.
     */
    eventDetectionTime?: string | null;
    /**
     * Type of the DRD event.
     */
    eventType?: string | null;
    /**
     * Maximum duration of retention allowed from the DRD control. This comes from the DRD control where users set a max TTL for their data. For example, suppose that a user sets the max TTL for a Cloud Storage bucket to 90 days. However, an object in that bucket is 100 days old. In this case, a DataRetentionDeletionEvent will be generated for that Cloud Storage bucket, and the max_retention_allowed is 90 days.
     */
    maxRetentionAllowed?: string | null;
  }
  /**
   * Vertex AI dataset associated with the finding.
   */
  export interface Schema$Dataset {
    /**
     * The user defined display name of dataset, e.g. plants-dataset
     */
    displayName?: string | null;
    /**
     * Resource name of the dataset, e.g. projects/{project\}/locations/{location\}/datasets/2094040236064505856
     */
    name?: string | null;
    /**
     * Data source, such as BigQuery source URI, e.g. bq://scc-nexus-test.AIPPtest.gsod
     */
    source?: string | null;
  }
  /**
   * Denied IP rule.
   */
  export interface Schema$Denied {
    /**
     * Optional. Optional list of denied IP rules.
     */
    ipRules?: Schema$IpRule[];
  }
  /**
   * Details of a subscription.
   */
  export interface Schema$Details {
    /**
     * The time the subscription has or will end.
     */
    endTime?: string | null;
    /**
     * The time the subscription has or will start.
     */
    startTime?: string | null;
    /**
     * The type of subscription
     */
    type?: string | null;
  }
  /**
   * Memory hash detection contributing to the binary family match.
   */
  export interface Schema$Detection {
    /**
     * The name of the binary associated with the memory hash signature detection.
     */
    binary?: string | null;
    /**
     * The percentage of memory page hashes in the signature that were matched.
     */
    percentPagesMatched?: number | null;
  }
  /**
   * Contains information about the disk associated with the finding.
   */
  export interface Schema$Disk {
    /**
     * The name of the disk, for example, "https://www.googleapis.com/compute/v1/projects/{project-id\}/zones/{zone-id\}/disks/{disk-id\}".
     */
    name?: string | null;
  }
  /**
   * Path of the file in terms of underlying disk/partition identifiers.
   */
  export interface Schema$DiskPath {
    /**
     * UUID of the partition (format https://wiki.archlinux.org/title/persistent_block_device_naming#by-uuid)
     */
    partitionUuid?: string | null;
    /**
     * Relative path of the file in the partition as a JSON encoded string. Example: /home/user1/executable_file.sh
     */
    relativePath?: string | null;
  }
  /**
   * The record of a dynamic mute rule that matches the finding.
   */
  export interface Schema$DynamicMuteRecord {
    /**
     * When the dynamic mute rule first matched the finding.
     */
    matchTime?: string | null;
    /**
     * The relative resource name of the mute rule, represented by a mute config, that created this record, for example `organizations/123/muteConfigs/mymuteconfig` or `organizations/123/locations/global/muteConfigs/mymuteconfig`.
     */
    muteConfig?: string | null;
  }
  /**
   * A name-value pair representing an environment variable used in an operating system process.
   */
  export interface Schema$EnvironmentVariable {
    /**
     * Environment variable name as a JSON encoded string.
     */
    name?: string | null;
    /**
     * Environment variable value as a JSON encoded string.
     */
    val?: string | null;
  }
  /**
   * Resource capturing the settings for the Event Threat Detection service.
   */
  export interface Schema$EventThreatDetectionSettings {
    /**
     * The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's configuration.
     */
    modules?: {[key: string]: Schema$Config} | null;
    /**
     * Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     */
    name?: string | null;
    /**
     * The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.
     */
    serviceEnablementState?: string | null;
    /**
     * Output only. The time the settings were last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Resource where data was exfiltrated from or exfiltrated to.
   */
  export interface Schema$ExfilResource {
    /**
     * Subcomponents of the asset that was exfiltrated, like URIs used during exfiltration, table names, databases, and filenames. For example, multiple tables might have been exfiltrated from the same Cloud SQL instance, or multiple files might have been exfiltrated from the same Cloud Storage bucket.
     */
    components?: string[] | null;
    /**
     * The resource's [full resource name](https://cloud.google.com/apis/design/resource_names#full_resource_name).
     */
    name?: string | null;
  }
  /**
   * Exfiltration represents a data exfiltration attempt from one or more sources to one or more targets. The `sources` attribute lists the sources of the exfiltrated data. The `targets` attribute lists the destinations the data was copied to.
   */
  export interface Schema$Exfiltration {
    /**
     * If there are multiple sources, then the data is considered "joined" between them. For instance, BigQuery can join multiple tables, and each table would be considered a source.
     */
    sources?: Schema$ExfilResource[];
    /**
     * If there are multiple targets, each target would get a complete copy of the "joined" source data.
     */
    targets?: Schema$ExfilResource[];
    /**
     * Total exfiltrated bytes processed for the entire job.
     */
    totalExfiltratedBytes?: string | null;
  }
  /**
   * The LRO metadata for a ExportFindings request.
   */
  export interface Schema$ExportFindingsMetadata {
    /**
     * Required. The destination big query dataset to export findings to.
     */
    bigQueryDestination?: Schema$BigQueryDestination;
    /**
     * Optional. Timestamp at which export was started
     */
    exportStartTime?: string | null;
  }
  /**
   * The response to a ExportFindings request. Contains the LRO information.
   */
  export interface Schema$ExportFindingsResponse {}
  /**
   * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
   */
  export interface Schema$Expr {
    /**
     * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.
     */
    expression?: string | null;
    /**
     * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string | null;
    /**
     * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string | null;
  }
  /**
   * File information about the related binary/library used by an executable, or the script used by a script interpreter
   */
  export interface Schema$File {
    /**
     * Prefix of the file contents as a JSON-encoded string.
     */
    contents?: string | null;
    /**
     * Path of the file in terms of underlying disk/partition identifiers.
     */
    diskPath?: Schema$DiskPath;
    /**
     * The length in bytes of the file prefix that was hashed. If hashed_size == size, any hashes reported represent the entire file.
     */
    hashedSize?: string | null;
    /**
     * Operation(s) performed on a file.
     */
    operations?: Schema$FileOperation[];
    /**
     * True when the hash covers only a prefix of the file.
     */
    partiallyHashed?: boolean | null;
    /**
     * Absolute path of the file as a JSON encoded string.
     */
    path?: string | null;
    /**
     * SHA256 hash of the first hashed_size bytes of the file encoded as a hex string. If hashed_size == size, sha256 represents the SHA256 hash of the entire file.
     */
    sha256?: string | null;
    /**
     * Size of the file in bytes.
     */
    size?: string | null;
  }
  /**
   * Operation(s) performed on a file.
   */
  export interface Schema$FileOperation {
    /**
     * The type of the operation
     */
    type?: string | null;
  }
  /**
   * Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.
   */
  export interface Schema$Finding {
    /**
     * Access details associated with the finding, such as more information on the caller, which method was accessed, and from where.
     */
    access?: Schema$Access;
    /**
     * AffectedResources associated with the finding.
     */
    affectedResources?: Schema$AffectedResources;
    /**
     * The AI model associated with the finding.
     */
    aiModel?: Schema$AiModel;
    /**
     * Represents an application associated with the finding.
     */
    application?: Schema$Application;
    /**
     * The results of an attack path simulation relevant to this finding.
     */
    attackExposure?: Schema$AttackExposure;
    /**
     * Fields related to Backup and DR findings.
     */
    backupDisasterRecovery?: Schema$BackupDisasterRecovery;
    /**
     * The canonical name of the finding. It's either "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}", "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}" or "projects/{project_number\}/sources/{source_id\}/findings/{finding_id\}", depending on the closest CRM ancestor of the resource associated with the finding.
     */
    canonicalName?: string | null;
    /**
     * The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION"
     */
    category?: string | null;
    /**
     * Contains details about a chokepoint, which is a resource or resource group where high-risk attack paths converge, based on [attack path simulations] (https://cloud.google.com/security-command-center/docs/attack-exposure-learn#attack_path_simulations). This field cannot be updated. Its value is ignored in all update requests.
     */
    chokepoint?: Schema$Chokepoint;
    /**
     * Fields related to Cloud Armor findings.
     */
    cloudArmor?: Schema$CloudArmor;
    /**
     * Cloud DLP data profile that is associated with the finding.
     */
    cloudDlpDataProfile?: Schema$CloudDlpDataProfile;
    /**
     * Cloud Data Loss Prevention (Cloud DLP) inspection results that are associated with the finding.
     */
    cloudDlpInspection?: Schema$CloudDlpInspection;
    /**
     * Details about the compliance implications of the finding.
     */
    complianceDetails?: Schema$ComplianceDetails;
    /**
     * Contains compliance information for security standards associated to the finding.
     */
    compliances?: Schema$Compliance[];
    /**
     * Contains information about the IP connection associated with the finding.
     */
    connections?: Schema$Connection[];
    /**
     * Output only. Map containing the points of contact for the given finding. The key represents the type of contact, while the value contains a list of all the contacts that pertain. Please refer to: https://cloud.google.com/resource-manager/docs/managing-notification-contacts#notification-categories { "security": { "contacts": [ { "email": "person1@company.com" \}, { "email": "person2@company.com" \} ] \} \}
     */
    contacts?: {[key: string]: Schema$ContactDetails} | null;
    /**
     * Containers associated with the finding. This field provides information for both Kubernetes and non-Kubernetes containers.
     */
    containers?: Schema$Container[];
    /**
     * The time at which the finding was created in Security Command Center.
     */
    createTime?: string | null;
    /**
     * Data access events associated with the finding.
     */
    dataAccessEvents?: Schema$DataAccessEvent[];
    /**
     * Database associated with the finding.
     */
    database?: Schema$Database;
    /**
     * Data flow events associated with the finding.
     */
    dataFlowEvents?: Schema$DataFlowEvent[];
    /**
     * Data retention deletion events associated with the finding.
     */
    dataRetentionDeletionEvents?: Schema$DataRetentionDeletionEvent[];
    /**
     * Contains more details about the finding.
     */
    description?: string | null;
    /**
     * Disk associated with the finding.
     */
    disk?: Schema$Disk;
    /**
     * The time the finding was first detected. If an existing finding is updated, then this is the time the update occurred. For example, if the finding represents an open firewall, this property captures the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding is later resolved, then this time reflects when the finding was resolved. This must not be set to a value greater than the current timestamp.
     */
    eventTime?: string | null;
    /**
     * Represents exfiltrations associated with the finding.
     */
    exfiltration?: Schema$Exfiltration;
    /**
     * Output only. Third party SIEM/SOAR fields within SCC, contains external system information and external system finding fields.
     */
    externalSystems?: {
      [key: string]: Schema$GoogleCloudSecuritycenterV1ExternalSystem;
    } | null;
    /**
     * The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL.
     */
    externalUri?: string | null;
    /**
     * File associated with the finding.
     */
    files?: Schema$File[];
    /**
     * The class of the finding.
     */
    findingClass?: string | null;
    /**
     * Contains details about groups of which this finding is a member. A group is a collection of findings that are related in some way. This field cannot be updated. Its value is ignored in all update requests.
     */
    groupMemberships?: Schema$GroupMembership[];
    /**
     * Represents IAM bindings associated with the finding.
     */
    iamBindings?: Schema$IamBinding[];
    /**
     * Represents what's commonly known as an *indicator of compromise* (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise).
     */
    indicator?: Schema$Indicator;
    /**
     * IP rules associated with the finding.
     */
    ipRules?: Schema$IpRules;
    /**
     * Job associated with the finding.
     */
    job?: Schema$Job;
    /**
     * Signature of the kernel rootkit.
     */
    kernelRootkit?: Schema$KernelRootkit;
    /**
     * Kubernetes resources associated with the finding.
     */
    kubernetes?: Schema$Kubernetes;
    /**
     * The load balancers associated with the finding.
     */
    loadBalancers?: Schema$LoadBalancer[];
    /**
     * Log entries that are relevant to the finding.
     */
    logEntries?: Schema$LogEntry[];
    /**
     * MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org
     */
    mitreAttack?: Schema$MitreAttack;
    /**
     * Unique identifier of the module which generated the finding. Example: folders/598186756061/securityHealthAnalyticsSettings/customModules/56799441161885
     */
    moduleName?: string | null;
    /**
     * Indicates the mute state of a finding (either muted, unmuted or undefined). Unlike other attributes of a finding, a finding provider shouldn't set the value of mute.
     */
    mute?: string | null;
    /**
     * Output only. The mute information regarding this finding.
     */
    muteInfo?: Schema$MuteInfo;
    /**
     * Records additional information about the mute operation, for example, the [mute configuration](/security-command-center/docs/how-to-mute-findings) that muted the finding and the user who muted the finding.
     */
    muteInitiator?: string | null;
    /**
     * Output only. The most recent time this finding was muted or unmuted.
     */
    muteUpdateTime?: string | null;
    /**
     * The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}", "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}", "projects/{project_id\}/sources/{source_id\}/findings/{finding_id\}".
     */
    name?: string | null;
    /**
     * Represents the VPC networks that the resource is attached to.
     */
    networks?: Schema$Network[];
    /**
     * Steps to address the finding.
     */
    nextSteps?: string | null;
    /**
     * Notebook associated with the finding.
     */
    notebook?: Schema$Notebook;
    /**
     * Contains information about the org policies associated with the finding.
     */
    orgPolicies?: Schema$OrgPolicy[];
    /**
     * The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id\}/sources/{source_id\}"
     */
    parent?: string | null;
    /**
     * Output only. The human readable display name of the finding source such as "Event Threat Detection" or "Security Health Analytics".
     */
    parentDisplayName?: string | null;
    /**
     * Represents operating system processes associated with the Finding.
     */
    processes?: Schema$Process[];
    /**
     * For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time.
     */
    resourceName?: string | null;
    /**
     * Output only. User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the finding.
     */
    securityMarks?: Schema$SecurityMarks;
    /**
     * The security posture associated with the finding.
     */
    securityPosture?: Schema$SecurityPosture;
    /**
     * The severity of the finding. This field is managed by the source that writes the finding.
     */
    severity?: string | null;
    /**
     * Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only.
     */
    sourceProperties?: {[key: string]: any} | null;
    /**
     * The state of the finding.
     */
    state?: string | null;
    /**
     * Contains details about a group of security issues that, when the issues occur together, represent a greater risk than when the issues occur independently. A group of such issues is referred to as a toxic combination. This field cannot be updated. Its value is ignored in all update requests.
     */
    toxicCombination?: Schema$ToxicCombination;
    /**
     * VertexAi associated with the finding.
     */
    vertexAi?: Schema$VertexAi;
    /**
     * Represents vulnerability-specific fields like CVE and CVSS scores. CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/)
     */
    vulnerability?: Schema$Vulnerability;
  }
  /**
   * Message that contains the resource name and display name of a folder resource.
   */
  export interface Schema$Folder {
    /**
     * Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    resourceFolder?: string | null;
    /**
     * The user defined display name for this folder.
     */
    resourceFolderDisplayName?: string | null;
  }
  /**
   * Compliance framework associated with the finding.
   */
  export interface Schema$Framework {
    /**
     * Category of the framework associated with the finding. E.g. Security Benchmark, or Assured Workloads
     */
    category?: string[] | null;
    /**
     * The controls associated with the framework.
     */
    controls?: Schema$Control[];
    /**
     * Display name of the framework. For a standard framework, this will look like e.g. PCI DSS 3.2.1, whereas for a custom framework it can be a user defined string like MyFramework
     */
    displayName?: string | null;
    /**
     * Name of the framework associated with the finding
     */
    name?: string | null;
    /**
     * Type of the framework associated with the finding, to specify whether the framework is built-in (pre-defined and immutable) or a custom framework defined by the customer (equivalent to security posture)
     */
    type?: string | null;
  }
  /**
   * Google Cloud metadata associated with the resource. Only applicable if the finding's cloud provider is Google Cloud.
   */
  export interface Schema$GcpMetadata {
    /**
     * Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization.
     */
    folders?: Schema$GoogleCloudSecuritycenterV2Folder[];
    /**
     * The name of the organization that the resource belongs to.
     */
    organization?: string | null;
    /**
     * The full resource name of resource's parent.
     */
    parent?: string | null;
    /**
     * The human readable name of resource's parent.
     */
    parentDisplayName?: string | null;
    /**
     * The full resource name of project that the resource belongs to.
     */
    project?: string | null;
    /**
     * The project ID that the resource belongs to.
     */
    projectDisplayName?: string | null;
  }
  /**
   * Represents a geographical location for a given access.
   */
  export interface Schema$Geolocation {
    /**
     * A CLDR.
     */
    regionCode?: string | null;
  }
  /**
   * Response of asset discovery run
   */
  export interface Schema$GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse {
    /**
     * The duration between asset discovery run start and end
     */
    duration?: string | null;
    /**
     * The state of an asset discovery run.
     */
    state?: string | null;
  }
  /**
   * Configures how to deliver Findings to BigQuery Instance.
   */
  export interface Schema$GoogleCloudSecuritycenterV1BigQueryExport {
    /**
     * Output only. The time at which the BigQuery export was created. This field is set by the server and will be ignored if provided on export on creation.
     */
    createTime?: string | null;
    /**
     * The dataset to write findings' updates to. Its format is "projects/[project_id]/datasets/[bigquery_dataset_id]". BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).
     */
    dataset?: string | null;
    /**
     * The description of the export (max of 1024 characters).
     */
    description?: string | null;
    /**
     * Expression that defines the filter to apply across create/update events of findings. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `\>`, `<`, `\>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes.
     */
    filter?: string | null;
    /**
     * Output only. Email address of the user who last edited the BigQuery export. This field is set by the server and will be ignored if provided on export creation or update.
     */
    mostRecentEditor?: string | null;
    /**
     * The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/{organization_id\}/bigQueryExports/{export_id\}" Example format: "folders/{folder_id\}/bigQueryExports/{export_id\}" Example format: "projects/{project_id\}/bigQueryExports/{export_id\}" This field is provided in responses, and is ignored when provided in create requests.
     */
    name?: string | null;
    /**
     * Output only. The service account that needs permission to create table and upload data to the BigQuery dataset.
     */
    principal?: string | null;
    /**
     * Output only. The most recent time at which the BigQuery export was updated. This field is set by the server and will be ignored if provided on export creation or update.
     */
    updateTime?: string | null;
  }
  /**
   * Represents a Kubernetes RoleBinding or ClusterRoleBinding.
   */
  export interface Schema$GoogleCloudSecuritycenterV1Binding {
    /**
     * Name for the binding.
     */
    name?: string | null;
    /**
     * Namespace for the binding.
     */
    ns?: string | null;
    /**
     * The Role or ClusterRole referenced by the binding.
     */
    role?: Schema$Role;
    /**
     * Represents one or more subjects that are bound to the role. Not always available for PATCH requests.
     */
    subjects?: Schema$Subject[];
  }
  /**
   * The response to a BulkMute request. Contains the LRO information.
   */
  export interface Schema$GoogleCloudSecuritycenterV1BulkMuteFindingsResponse {}
  /**
   * Defines the properties in a custom module configuration for Security Health Analytics. Use the custom module configuration to create custom detectors that generate custom findings for resources that you specify.
   */
  export interface Schema$GoogleCloudSecuritycenterV1CustomConfig {
    /**
     * Custom output properties.
     */
    customOutput?: Schema$GoogleCloudSecuritycenterV1CustomOutputSpec;
    /**
     * Text that describes the vulnerability or misconfiguration that the custom module detects. This explanation is returned with each finding instance to help investigators understand the detected issue. The text must be enclosed in quotation marks.
     */
    description?: string | null;
    /**
     * The CEL expression to evaluate to produce findings. When the expression evaluates to true against a resource, a finding is generated.
     */
    predicate?: Schema$Expr;
    /**
     * An explanation of the recommended steps that security teams can take to resolve the detected issue. This explanation is returned with each finding generated by this module in the `nextSteps` property of the finding JSON.
     */
    recommendation?: string | null;
    /**
     * The resource types that the custom module operates on. Each custom module can specify up to 5 resource types.
     */
    resourceSelector?: Schema$GoogleCloudSecuritycenterV1ResourceSelector;
    /**
     * The severity to assign to findings generated by the module.
     */
    severity?: string | null;
  }
  /**
   * A set of optional name-value pairs that define custom source properties to return with each finding that is generated by the custom module. The custom source properties that are defined here are included in the finding JSON under `sourceProperties`.
   */
  export interface Schema$GoogleCloudSecuritycenterV1CustomOutputSpec {
    /**
     * A list of custom output properties to add to the finding.
     */
    properties?: Schema$GoogleCloudSecuritycenterV1Property[];
  }
  /**
   * An EffectiveSecurityHealthAnalyticsCustomModule is the representation of a Security Health Analytics custom module at a specified level of the resource hierarchy: organization, folder, or project. If a custom module is inherited from a parent organization or folder, the value of the `enablementState` property in EffectiveSecurityHealthAnalyticsCustomModule is set to the value that is effective in the parent, instead of `INHERITED`. For example, if the module is enabled in a parent organization or folder, the effective enablement_state for the module in all child folders or projects is also `enabled`. EffectiveSecurityHealthAnalyticsCustomModule is read-only.
   */
  export interface Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule {
    /**
     * The cloud provider of the custom module.
     */
    cloudProvider?: string | null;
    /**
     * Output only. The user-specified configuration for the module.
     */
    customConfig?: Schema$GoogleCloudSecuritycenterV1CustomConfig;
    /**
     * Output only. The display name for the custom module. The name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only.
     */
    displayName?: string | null;
    /**
     * Output only. The effective state of enablement for the module at the given level of the hierarchy.
     */
    enablementState?: string | null;
    /**
     * Output only. The resource name of the custom module. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule\}", or "folders/{folder\}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule\}", or "projects/{project\}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule\}"
     */
    name?: string | null;
  }
  /**
   * Representation of third party SIEM/SOAR fields within SCC.
   */
  export interface Schema$GoogleCloudSecuritycenterV1ExternalSystem {
    /**
     * References primary/secondary etc assignees in the external system.
     */
    assignees?: string[] | null;
    /**
     * The time when the case was closed, as reported by the external system.
     */
    caseCloseTime?: string | null;
    /**
     * The time when the case was created, as reported by the external system.
     */
    caseCreateTime?: string | null;
    /**
     * The priority of the finding's corresponding case in the external system.
     */
    casePriority?: string | null;
    /**
     * The SLA of the finding's corresponding case in the external system.
     */
    caseSla?: string | null;
    /**
     * The link to the finding's corresponding case in the external system.
     */
    caseUri?: string | null;
    /**
     * The time when the case was last updated, as reported by the external system.
     */
    externalSystemUpdateTime?: string | null;
    /**
     * The identifier that's used to track the finding's corresponding case in the external system.
     */
    externalUid?: string | null;
    /**
     * Full resource name of the external system, for example: "organizations/1234/sources/5678/findings/123456/externalSystems/jira", "folders/1234/sources/5678/findings/123456/externalSystems/jira", "projects/1234/sources/5678/findings/123456/externalSystems/jira"
     */
    name?: string | null;
    /**
     * The most recent status of the finding's corresponding case, as reported by the external system.
     */
    status?: string | null;
    /**
     * Information about the ticket, if any, that is being used to track the resolution of the issue that is identified by this finding.
     */
    ticketInfo?: Schema$TicketInfo;
  }
  /**
   * A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings.
   */
  export interface Schema$GoogleCloudSecuritycenterV1MuteConfig {
    /**
     * Output only. The time at which the mute config was created. This field is set by the server and will be ignored if provided on config creation.
     */
    createTime?: string | null;
    /**
     * A description of the mute config.
     */
    description?: string | null;
    /**
     * The human readable name to be displayed for the mute config.
     */
    displayName?: string | null;
    /**
     * Optional. The expiry of the mute config. Only applicable for dynamic configs. If the expiry is set, when the config expires, it is removed from all findings.
     */
    expiryTime?: string | null;
    /**
     * Required. An expression that defines the filter to apply across create/update events of findings. While creating a filter string, be mindful of the scope in which the mute configuration is being created. E.g., If a filter contains project = X but is created under the project = Y scope, it might not match any findings. The following field and operator combinations are supported: * severity: `=`, `:` * category: `=`, `:` * resource.name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.type: `=`, `:` * finding_class: `=`, `:` * indicator.ip_addresses: `=`, `:` * indicator.domains: `=`, `:`
     */
    filter?: string | null;
    /**
     * Output only. Email address of the user who last edited the mute config. This field is set by the server and will be ignored if provided on config creation or update.
     */
    mostRecentEditor?: string | null;
    /**
     * This field will be ignored if provided on config creation. Format `organizations/{organization\}/muteConfigs/{mute_config\}` `folders/{folder\}/muteConfigs/{mute_config\}` `projects/{project\}/muteConfigs/{mute_config\}` `organizations/{organization\}/locations/global/muteConfigs/{mute_config\}` `folders/{folder\}/locations/global/muteConfigs/{mute_config\}` `projects/{project\}/locations/global/muteConfigs/{mute_config\}`
     */
    name?: string | null;
    /**
     * Optional. The type of the mute config, which determines what type of mute state the config affects. The static mute state takes precedence over the dynamic mute state. Immutable after creation. STATIC by default if not set during creation.
     */
    type?: string | null;
    /**
     * Output only. The most recent time at which the mute config was updated. This field is set by the server and will be ignored if provided on config creation or update.
     */
    updateTime?: string | null;
  }
  /**
   * Cloud SCC's Notification
   */
  export interface Schema$GoogleCloudSecuritycenterV1NotificationMessage {
    /**
     * If it's a Finding based notification config, this field will be populated.
     */
    finding?: Schema$Finding;
    /**
     * Name of the notification config that generated current notification.
     */
    notificationConfigName?: string | null;
    /**
     * The Cloud resource tied to this notification's Finding.
     */
    resource?: Schema$GoogleCloudSecuritycenterV1Resource;
  }
  /**
   * Security Command Center finding. A finding is a record of assessment data (security, risk, health or privacy) ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, an XSS vulnerability in an App Engine application is a finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1Finding {
    /**
     * The canonical name of the finding. It's either "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}", "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}" or "projects/{project_number\}/sources/{source_id\}/findings/{finding_id\}", depending on the closest CRM ancestor of the resource associated with the finding.
     */
    canonicalName?: string | null;
    /**
     * The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION"
     */
    category?: string | null;
    /**
     * The time at which the finding was created in Security Command Center.
     */
    createTime?: string | null;
    /**
     * The time at which the event took place, or when an update to the finding occurred. For example, if the finding represents an open firewall it would capture the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding were to be resolved afterward, this time would reflect when the finding was resolved. Must not be set to a value greater than the current timestamp.
     */
    eventTime?: string | null;
    /**
     * The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL.
     */
    externalUri?: string | null;
    /**
     * The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}"
     */
    name?: string | null;
    /**
     * The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id\}/sources/{source_id\}"
     */
    parent?: string | null;
    /**
     * For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time.
     */
    resourceName?: string | null;
    /**
     * Output only. User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the finding.
     */
    securityMarks?: Schema$GoogleCloudSecuritycenterV1p1beta1SecurityMarks;
    /**
     * The severity of the finding. This field is managed by the source that writes the finding.
     */
    severity?: string | null;
    /**
     * Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only.
     */
    sourceProperties?: {[key: string]: any} | null;
    /**
     * The state of the finding.
     */
    state?: string | null;
  }
  /**
   * Message that contains the resource name and display name of a folder resource.
   */
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1Folder {
    /**
     * Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    resourceFolder?: string | null;
    /**
     * The user defined display name for this folder.
     */
    resourceFolderDisplayName?: string | null;
  }
  /**
   * Security Command Center's Notification
   */
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1NotificationMessage {
    /**
     * If it's a Finding based notification config, this field will be populated.
     */
    finding?: Schema$GoogleCloudSecuritycenterV1p1beta1Finding;
    /**
     * Name of the notification config that generated current notification.
     */
    notificationConfigName?: string | null;
    /**
     * The Cloud resource tied to the notification.
     */
    resource?: Schema$GoogleCloudSecuritycenterV1p1beta1Resource;
  }
  /**
   * Information related to the Google Cloud resource.
   */
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1Resource {
    /**
     * Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization.
     */
    folders?: Schema$GoogleCloudSecuritycenterV1p1beta1Folder[];
    /**
     * The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    name?: string | null;
    /**
     * The full resource name of resource's parent.
     */
    parent?: string | null;
    /**
     * The human readable name of resource's parent.
     */
    parentDisplayName?: string | null;
    /**
     * The full resource name of project that the resource belongs to.
     */
    project?: string | null;
    /**
     * The project id that the resource belongs to.
     */
    projectDisplayName?: string | null;
  }
  /**
   * Response of asset discovery run
   */
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse {
    /**
     * The duration between asset discovery run start and end
     */
    duration?: string | null;
    /**
     * The state of an asset discovery run.
     */
    state?: string | null;
  }
  /**
   * User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.
   */
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1SecurityMarks {
    /**
     * The canonical name of the marks. Examples: "organizations/{organization_id\}/assets/{asset_id\}/securityMarks" "folders/{folder_id\}/assets/{asset_id\}/securityMarks" "projects/{project_number\}/assets/{asset_id\}/securityMarks" "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks" "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks" "projects/{project_number\}/sources/{source_id\}/findings/{finding_id\}/securityMarks"
     */
    canonicalName?: string | null;
    /**
     * Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive)
     */
    marks?: {[key: string]: string} | null;
    /**
     * The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id\}/assets/{asset_id\}/securityMarks" "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks".
     */
    name?: string | null;
  }
  /**
   * An individual name-value pair that defines a custom source property.
   */
  export interface Schema$GoogleCloudSecuritycenterV1Property {
    /**
     * Name of the property for the custom output.
     */
    name?: string | null;
    /**
     * The CEL expression for the custom output. A resource property can be specified to return the value of the property or a text string enclosed in quotation marks.
     */
    valueExpression?: Schema$Expr;
  }
  /**
   * Information related to the Google Cloud resource.
   */
  export interface Schema$GoogleCloudSecuritycenterV1Resource {
    /**
     * The AWS metadata associated with the finding.
     */
    awsMetadata?: Schema$AwsMetadata;
    /**
     * The Azure metadata associated with the finding.
     */
    azureMetadata?: Schema$AzureMetadata;
    /**
     * Indicates which cloud provider the resource resides in.
     */
    cloudProvider?: string | null;
    /**
     * The human readable name of the resource.
     */
    displayName?: string | null;
    /**
     * Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization.
     */
    folders?: Schema$Folder[];
    /**
     * The region or location of the service (if applicable).
     */
    location?: string | null;
    /**
     * The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    name?: string | null;
    /**
     * Indicates which organization or tenant in the cloud provider the finding applies to.
     */
    organization?: string | null;
    /**
     * The full resource name of resource's parent.
     */
    parent?: string | null;
    /**
     * The human readable name of resource's parent.
     */
    parentDisplayName?: string | null;
    /**
     * The full resource name of project that the resource belongs to.
     */
    project?: string | null;
    /**
     * The project ID that the resource belongs to.
     */
    projectDisplayName?: string | null;
    /**
     * Provides the path to the resource within the resource hierarchy.
     */
    resourcePath?: Schema$ResourcePath;
    /**
     * A string representation of the resource path. For Google Cloud, it has the format of `organizations/{organization_id\}/folders/{folder_id\}/folders/{folder_id\}/projects/{project_id\}` where there can be any number of folders. For AWS, it has the format of `org/{organization_id\}/ou/{organizational_unit_id\}/ou/{organizational_unit_id\}/account/{account_id\}` where there can be any number of organizational units. For Azure, it has the format of `mg/{management_group_id\}/mg/{management_group_id\}/subscription/{subscription_id\}/rg/{resource_group_name\}` where there can be any number of management groups.
     */
    resourcePathString?: string | null;
    /**
     * The parent service or product from which the resource is provided, for example, GKE or SNS.
     */
    service?: string | null;
    /**
     * The full resource type of the resource.
     */
    type?: string | null;
  }
  /**
   * Resource for selecting resource type.
   */
  export interface Schema$GoogleCloudSecuritycenterV1ResourceSelector {
    /**
     * The resource types to run the detector on.
     */
    resourceTypes?: string[] | null;
  }
  /**
   * A resource value configuration (RVC) is a mapping configuration of user's resources to resource values. Used in Attack path simulations.
   */
  export interface Schema$GoogleCloudSecuritycenterV1ResourceValueConfig {
    /**
     * Cloud provider this configuration applies to
     */
    cloudProvider?: string | null;
    /**
     * Output only. Timestamp this resource value configuration was created.
     */
    createTime?: string | null;
    /**
     * Description of the resource value configuration.
     */
    description?: string | null;
    /**
     * Name for the resource value configuration
     */
    name?: string | null;
    /**
     * List of resource labels to search for, evaluated with `AND`. For example, `"resource_labels_selector": {"key": "value", "env": "prod"\}` will match resources with labels "key": "value" `AND` "env": "prod" https://cloud.google.com/resource-manager/docs/creating-managing-labels
     */
    resourceLabelsSelector?: {[key: string]: string} | null;
    /**
     * Apply resource_value only to resources that match resource_type. resource_type will be checked with `AND` of other resources. For example, "storage.googleapis.com/Bucket" with resource_value "HIGH" will apply "HIGH" value only to "storage.googleapis.com/Bucket" resources.
     */
    resourceType?: string | null;
    /**
     * Required. Resource value level this expression represents
     */
    resourceValue?: string | null;
    /**
     * Project or folder to scope this configuration to. For example, "project/456" would apply this configuration only to resources in "project/456" scope will be checked with `AND` of other resources.
     */
    scope?: string | null;
    /**
     * A mapping of the sensitivity on Sensitive Data Protection finding to resource values. This mapping can only be used in combination with a resource_type that is related to BigQuery, e.g. "bigquery.googleapis.com/Dataset".
     */
    sensitiveDataProtectionMapping?: Schema$GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping;
    /**
     * Required. Tag values combined with `AND` to check against. For Google Cloud resources, they are tag value IDs in the form of "tagValues/123". Example: `[ "tagValues/123", "tagValues/456", "tagValues/789" ]` https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing
     */
    tagValues?: string[] | null;
    /**
     * Output only. Timestamp this resource value configuration was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Response of asset discovery run
   */
  export interface Schema$GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse {
    /**
     * The duration between asset discovery run start and end
     */
    duration?: string | null;
    /**
     * The state of an asset discovery run.
     */
    state?: string | null;
  }
  /**
   * Represents an instance of a Security Health Analytics custom module, including its full module name, display name, enablement state, and last updated time. You can create a custom module at the organization, folder, or project level. Custom modules that you create at the organization or folder level are inherited by the child folders and projects.
   */
  export interface Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule {
    /**
     * Output only. If empty, indicates that the custom module was created in the organization, folder, or project in which you are viewing the custom module. Otherwise, `ancestor_module` specifies the organization or folder from which the custom module is inherited.
     */
    ancestorModule?: string | null;
    /**
     * The cloud provider of the custom module.
     */
    cloudProvider?: string | null;
    /**
     * The user specified custom configuration for the module.
     */
    customConfig?: Schema$GoogleCloudSecuritycenterV1CustomConfig;
    /**
     * The display name of the Security Health Analytics custom module. This display name becomes the finding category for all findings that are returned by this custom module. The display name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only.
     */
    displayName?: string | null;
    /**
     * The enablement state of the custom module.
     */
    enablementState?: string | null;
    /**
     * Output only. The editor that last updated the custom module.
     */
    lastEditor?: string | null;
    /**
     * Immutable. The resource name of the custom module. Its format is "organizations/{organization\}/securityHealthAnalyticsSettings/customModules/{customModule\}", or "folders/{folder\}/securityHealthAnalyticsSettings/customModules/{customModule\}", or "projects/{project\}/securityHealthAnalyticsSettings/customModules/{customModule\}" The id {customModule\} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits.
     */
    name?: string | null;
    /**
     * Output only. The time at which the custom module was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Resource value mapping for Sensitive Data Protection findings. If any of these mappings have a resource value that is not unspecified, the resource_value field will be ignored when reading this configuration.
   */
  export interface Schema$GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping {
    /**
     * Resource value mapping for high-sensitivity Sensitive Data Protection findings
     */
    highSensitivityMapping?: string | null;
    /**
     * Resource value mapping for medium-sensitivity Sensitive Data Protection findings
     */
    mediumSensitivityMapping?: string | null;
  }
  /**
   * Represents an access event.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Access {
    /**
     * Caller's IP address, such as "1.1.1.1".
     */
    callerIp?: string | null;
    /**
     * The caller IP's geolocation, which identifies where the call came from.
     */
    callerIpGeo?: Schema$GoogleCloudSecuritycenterV2Geolocation;
    /**
     * The method that the service account called, e.g. "SetIamPolicy".
     */
    methodName?: string | null;
    /**
     * Associated email, such as "foo@google.com". The email address of the authenticated user or a service account acting on behalf of a third party principal making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id).
     */
    principalEmail?: string | null;
    /**
     * A string that represents the principal_subject that is associated with the identity. Unlike `principal_email`, `principal_subject` supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format is `principal://iam.googleapis.com/{identity pool name\}/subject/{subject\}`. Some GKE identities, such as GKE_WORKLOAD, FREEFORM, and GKE_HUB_WORKLOAD, still use the legacy format `serviceAccount:{identity pool name\}[{subject\}]`.
     */
    principalSubject?: string | null;
    /**
     * The identity delegation history of an authenticated service account that made the request. The `serviceAccountDelegationInfo[]` object contains information about the real authorities that try to access Google Cloud resources by delegating on a service account. When multiple authorities are present, they are guaranteed to be sorted based on the original ordering of the identity delegation events.
     */
    serviceAccountDelegationInfo?: Schema$GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo[];
    /**
     * The name of the service account key that was used to create or exchange credentials when authenticating the service account that made the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID\}/serviceAccounts/{ACCOUNT\}/keys/{key\}".
     */
    serviceAccountKeyName?: string | null;
    /**
     * This is the API service that the service account made a call to, e.g. "iam.googleapis.com"
     */
    serviceName?: string | null;
    /**
     * The caller's user agent string associated with the finding.
     */
    userAgent?: string | null;
    /**
     * Type of user agent associated with the finding. For example, an operating system shell or an embedded or standalone application.
     */
    userAgentFamily?: string | null;
    /**
     * A string that represents a username. The username provided depends on the type of the finding and is likely not an IAM principal. For example, this can be a system username if the finding is related to a virtual machine, or it can be an application login username.
     */
    userName?: string | null;
  }
  /**
   * Conveys information about a Kubernetes access review (such as one returned by a [`kubectl auth can-i`](https://kubernetes.io/docs/reference/access-authn-authz/authorization/#checking-api-access) command) that was involved in a finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2AccessReview {
    /**
     * The API group of the resource. "*" means all.
     */
    group?: string | null;
    /**
     * The name of the resource being requested. Empty means all.
     */
    name?: string | null;
    /**
     * Namespace of the action being requested. Currently, there is no distinction between no namespace and all namespaces. Both are represented by "" (empty).
     */
    ns?: string | null;
    /**
     * The optional resource type requested. "*" means all.
     */
    resource?: string | null;
    /**
     * The optional subresource type.
     */
    subresource?: string | null;
    /**
     * A Kubernetes resource API verb, like get, list, watch, create, update, delete, proxy. "*" means all.
     */
    verb?: string | null;
    /**
     * The API version of the resource. "*" means all.
     */
    version?: string | null;
  }
  /**
   * Information about [Google Cloud Armor Adaptive Protection](https://cloud.google.com/armor/docs/cloud-armor-overview#google-cloud-armor-adaptive-protection).
   */
  export interface Schema$GoogleCloudSecuritycenterV2AdaptiveProtection {
    /**
     * A score of 0 means that there is low confidence that the detected event is an actual attack. A score of 1 means that there is high confidence that the detected event is an attack. See the [Adaptive Protection documentation](https://cloud.google.com/armor/docs/adaptive-protection-overview#configure-alert-tuning) for further explanation.
     */
    confidence?: number | null;
  }
  /**
   * Details about resources affected by this finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2AffectedResources {
    /**
     * The count of resources affected by the finding.
     */
    count?: string | null;
  }
  /**
   * Contains information about the AI model associated with the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2AiModel {
    /**
     * The platform on which the model is deployed.
     */
    deploymentPlatform?: string | null;
    /**
     * The user defined display name of model. Ex. baseline-classification-model
     */
    displayName?: string | null;
    /**
     * The domain of the model, for example, “image-classification”.
     */
    domain?: string | null;
    /**
     * The name of the model library, for example, “transformers”.
     */
    library?: string | null;
    /**
     * The region in which the model is used, for example, “us-central1”.
     */
    location?: string | null;
    /**
     * The name of the AI model, for example, "gemini:1.0.0".
     */
    name?: string | null;
    /**
     * The publisher of the model, for example, “google” or “nvidia”.
     */
    publisher?: string | null;
  }
  /**
   * Allowed IP rule.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Allowed {
    /**
     * Optional. Optional list of allowed IP rules.
     */
    ipRules?: Schema$GoogleCloudSecuritycenterV2IpRule[];
  }
  /**
   * Represents an application associated with a finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Application {
    /**
     * The base URI that identifies the network location of the application in which the vulnerability was detected. For example, `http://example.com`.
     */
    baseUri?: string | null;
    /**
     * The full URI with payload that could be used to reproduce the vulnerability. For example, `http://example.com?p=aMmYgI6H`.
     */
    fullUri?: string | null;
  }
  /**
   * Information about DDoS attack volume and classification.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Attack {
    /**
     * Type of attack, for example, 'SYN-flood', 'NTP-udp', or 'CHARGEN-udp'.
     */
    classification?: string | null;
    /**
     * Total BPS (bytes per second) volume of attack. Deprecated - refer to volume_bps_long instead.
     */
    volumeBps?: number | null;
    /**
     * Total BPS (bytes per second) volume of attack.
     */
    volumeBpsLong?: string | null;
    /**
     * Total PPS (packets per second) volume of attack. Deprecated - refer to volume_pps_long instead.
     */
    volumePps?: number | null;
    /**
     * Total PPS (packets per second) volume of attack.
     */
    volumePpsLong?: string | null;
  }
  /**
   * An attack exposure contains the results of an attack path simulation run.
   */
  export interface Schema$GoogleCloudSecuritycenterV2AttackExposure {
    /**
     * The resource name of the attack path simulation result that contains the details regarding this attack exposure score. Example: `organizations/123/simulations/456/attackExposureResults/789`
     */
    attackExposureResult?: string | null;
    /**
     * The number of high value resources that are exposed as a result of this finding.
     */
    exposedHighValueResourcesCount?: number | null;
    /**
     * The number of high value resources that are exposed as a result of this finding.
     */
    exposedLowValueResourcesCount?: number | null;
    /**
     * The number of medium value resources that are exposed as a result of this finding.
     */
    exposedMediumValueResourcesCount?: number | null;
    /**
     * The most recent time the attack exposure was updated on this finding.
     */
    latestCalculationTime?: string | null;
    /**
     * A number between 0 (inclusive) and infinity that represents how important this finding is to remediate. The higher the score, the more important it is to remediate.
     */
    score?: number | null;
    /**
     * Output only. What state this AttackExposure is in. This captures whether or not an attack exposure has been calculated or not.
     */
    state?: string | null;
  }
  /**
   * An AWS account that is a member of an organization.
   */
  export interface Schema$GoogleCloudSecuritycenterV2AwsAccount {
    /**
     * The unique identifier (ID) of the account, containing exactly 12 digits.
     */
    id?: string | null;
    /**
     * The friendly name of this account.
     */
    name?: string | null;
  }
  /**
   * AWS metadata associated with the resource, only applicable if the finding's cloud provider is Amazon Web Services.
   */
  export interface Schema$GoogleCloudSecuritycenterV2AwsMetadata {
    /**
     * The AWS account associated with the resource.
     */
    account?: Schema$GoogleCloudSecuritycenterV2AwsAccount;
    /**
     * The AWS organization associated with the resource.
     */
    organization?: Schema$GoogleCloudSecuritycenterV2AwsOrganization;
    /**
     * A list of AWS organizational units associated with the resource, ordered from lowest level (closest to the account) to highest level.
     */
    organizationalUnits?: Schema$GoogleCloudSecuritycenterV2AwsOrganizationalUnit[];
  }
  /**
   * An organization is a collection of accounts that are centrally managed together using consolidated billing, organized hierarchically with organizational units (OUs), and controlled with policies.
   */
  export interface Schema$GoogleCloudSecuritycenterV2AwsOrganization {
    /**
     * The unique identifier (ID) for the organization. The regex pattern for an organization ID string requires "o-" followed by from 10 to 32 lowercase letters or digits.
     */
    id?: string | null;
  }
  /**
   * An Organizational Unit (OU) is a container of AWS accounts within a root of an organization. Policies that are attached to an OU apply to all accounts contained in that OU and in any child OUs.
   */
  export interface Schema$GoogleCloudSecuritycenterV2AwsOrganizationalUnit {
    /**
     * The unique identifier (ID) associated with this OU. The regex pattern for an organizational unit ID string requires "ou-" followed by from 4 to 32 lowercase letters or digits (the ID of the root that contains the OU). This string is followed by a second "-" dash and from 8 to 32 additional lowercase letters or digits. For example, "ou-ab12-cd34ef56".
     */
    id?: string | null;
    /**
     * The friendly name of the OU.
     */
    name?: string | null;
  }
  /**
   * Represents an Azure management group.
   */
  export interface Schema$GoogleCloudSecuritycenterV2AzureManagementGroup {
    /**
     * The display name of the Azure management group.
     */
    displayName?: string | null;
    /**
     * The UUID of the Azure management group, for example, `20000000-0001-0000-0000-000000000000`.
     */
    id?: string | null;
  }
  /**
   * Azure metadata associated with the resource, only applicable if the finding's cloud provider is Microsoft Azure.
   */
  export interface Schema$GoogleCloudSecuritycenterV2AzureMetadata {
    /**
     * A list of Azure management groups associated with the resource, ordered from lowest level (closest to the subscription) to highest level.
     */
    managementGroups?: Schema$GoogleCloudSecuritycenterV2AzureManagementGroup[];
    /**
     * The Azure resource group associated with the resource.
     */
    resourceGroup?: Schema$GoogleCloudSecuritycenterV2AzureResourceGroup;
    /**
     * The Azure subscription associated with the resource.
     */
    subscription?: Schema$GoogleCloudSecuritycenterV2AzureSubscription;
    /**
     * The Azure Entra tenant associated with the resource.
     */
    tenant?: Schema$GoogleCloudSecuritycenterV2AzureTenant;
  }
  /**
   * Represents an Azure resource group.
   */
  export interface Schema$GoogleCloudSecuritycenterV2AzureResourceGroup {
    /**
     * The ID of the Azure resource group.
     */
    id?: string | null;
    /**
     * The name of the Azure resource group. This is not a UUID.
     */
    name?: string | null;
  }
  /**
   * Represents an Azure subscription.
   */
  export interface Schema$GoogleCloudSecuritycenterV2AzureSubscription {
    /**
     * The display name of the Azure subscription.
     */
    displayName?: string | null;
    /**
     * The UUID of the Azure subscription, for example, `291bba3f-e0a5-47bc-a099-3bdcb2a50a05`.
     */
    id?: string | null;
  }
  /**
   * Represents a Microsoft Entra tenant.
   */
  export interface Schema$GoogleCloudSecuritycenterV2AzureTenant {
    /**
     * The display name of the Azure tenant.
     */
    displayName?: string | null;
    /**
     * The ID of the Microsoft Entra tenant, for example, "a11aaa11-aa11-1aa1-11aa-1aaa11a".
     */
    id?: string | null;
  }
  /**
   * Information related to Google Cloud Backup and DR Service findings.
   */
  export interface Schema$GoogleCloudSecuritycenterV2BackupDisasterRecovery {
    /**
     * The name of the Backup and DR appliance that captures, moves, and manages the lifecycle of backup data. For example, `backup-server-57137`.
     */
    appliance?: string | null;
    /**
     * The names of Backup and DR applications. An application is a VM, database, or file system on a managed host monitored by a backup and recovery appliance. For example, `centos7-01-vol00`, `centos7-01-vol01`, `centos7-01-vol02`.
     */
    applications?: string[] | null;
    /**
     * The timestamp at which the Backup and DR backup was created.
     */
    backupCreateTime?: string | null;
    /**
     * The name of a Backup and DR template which comprises one or more backup policies. See the [Backup and DR documentation](https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan#temp) for more information. For example, `snap-ov`.
     */
    backupTemplate?: string | null;
    /**
     * The backup type of the Backup and DR image. For example, `Snapshot`, `Remote Snapshot`, `OnVault`.
     */
    backupType?: string | null;
    /**
     * The name of a Backup and DR host, which is managed by the backup and recovery appliance and known to the management console. The host can be of type Generic (for example, Compute Engine, SQL Server, Oracle DB, SMB file system, etc.), vCenter, or an ESX server. See the [Backup and DR documentation on hosts](https://cloud.google.com/backup-disaster-recovery/docs/configuration/manage-hosts-and-their-applications) for more information. For example, `centos7-01`.
     */
    host?: string | null;
    /**
     * The names of Backup and DR policies that are associated with a template and that define when to run a backup, how frequently to run a backup, and how long to retain the backup image. For example, `onvaults`.
     */
    policies?: string[] | null;
    /**
     * The names of Backup and DR advanced policy options of a policy applying to an application. See the [Backup and DR documentation on policy options](https://cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings). For example, `skipofflineappsincongrp, nounmap`.
     */
    policyOptions?: string[] | null;
    /**
     * The name of the Backup and DR resource profile that specifies the storage media for backups of application and VM data. See the [Backup and DR documentation on profiles](https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan#profile). For example, `GCP`.
     */
    profile?: string | null;
    /**
     * The name of the Backup and DR storage pool that the backup and recovery appliance is storing data in. The storage pool could be of type Cloud, Primary, Snapshot, or OnVault. See the [Backup and DR documentation on storage pools](https://cloud.google.com/backup-disaster-recovery/docs/concepts/storage-pools). For example, `DiskPoolOne`.
     */
    storagePool?: string | null;
  }
  /**
   * Configures how to deliver Findings to BigQuery Instance.
   */
  export interface Schema$GoogleCloudSecuritycenterV2BigQueryExport {
    /**
     * Output only. The time at which the BigQuery export was created. This field is set by the server and will be ignored if provided on export on creation.
     */
    createTime?: string | null;
    /**
     * The dataset to write findings' updates to. Its format is "projects/[project_id]/datasets/[bigquery_dataset_id]". BigQuery dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).
     */
    dataset?: string | null;
    /**
     * The description of the export (max of 1024 characters).
     */
    description?: string | null;
    /**
     * Expression that defines the filter to apply across create/update events of findings. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `\>`, `<`, `\>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes.
     */
    filter?: string | null;
    /**
     * Output only. Email address of the user who last edited the BigQuery export. This field is set by the server and will be ignored if provided on export creation or update.
     */
    mostRecentEditor?: string | null;
    /**
     * Identifier. The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. The following list shows some examples: + `organizations/{organization_id\}/locations/{location_id\}/bigQueryExports/{export_id\}` + `folders/{folder_id\}/locations/{location_id\}/bigQueryExports/{export_id\}` + `projects/{project_id\}/locations/{location_id\}/bigQueryExports/{export_id\}` This field is provided in responses, and is ignored when provided in create requests.
     */
    name?: string | null;
    /**
     * Output only. The service account that needs permission to create table and upload data to the BigQuery dataset.
     */
    principal?: string | null;
    /**
     * Output only. The most recent time at which the BigQuery export was updated. This field is set by the server and will be ignored if provided on export creation or update.
     */
    updateTime?: string | null;
  }
  /**
   * Represents a Kubernetes RoleBinding or ClusterRoleBinding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Binding {
    /**
     * Name for the binding.
     */
    name?: string | null;
    /**
     * Namespace for the binding.
     */
    ns?: string | null;
    /**
     * The Role or ClusterRole referenced by the binding.
     */
    role?: Schema$GoogleCloudSecuritycenterV2Role;
    /**
     * Represents one or more subjects that are bound to the role. Not always available for PATCH requests.
     */
    subjects?: Schema$GoogleCloudSecuritycenterV2Subject[];
  }
  /**
   * The response to a BulkMute request. Contains the LRO information.
   */
  export interface Schema$GoogleCloudSecuritycenterV2BulkMuteFindingsResponse {}
  /**
   * Contains details about a chokepoint, which is a resource or resource group where high-risk attack paths converge, based on [attack path simulations] (https://cloud.google.com/security-command-center/docs/attack-exposure-learn#attack_path_simulations).
   */
  export interface Schema$GoogleCloudSecuritycenterV2Chokepoint {
    /**
     * List of resource names of findings associated with this chokepoint. For example, organizations/123/sources/456/findings/789. This list will have at most 100 findings.
     */
    relatedFindings?: string[] | null;
  }
  /**
   * Fields related to Google Cloud Armor findings.
   */
  export interface Schema$GoogleCloudSecuritycenterV2CloudArmor {
    /**
     * Information about potential Layer 7 DDoS attacks identified by [Google Cloud Armor Adaptive Protection](https://cloud.google.com/armor/docs/adaptive-protection-overview).
     */
    adaptiveProtection?: Schema$GoogleCloudSecuritycenterV2AdaptiveProtection;
    /**
     * Information about DDoS attack volume and classification.
     */
    attack?: Schema$GoogleCloudSecuritycenterV2Attack;
    /**
     * Duration of attack from the start until the current moment (updated every 5 minutes).
     */
    duration?: string | null;
    /**
     * Information about incoming requests evaluated by [Google Cloud Armor security policies](https://cloud.google.com/armor/docs/security-policy-overview).
     */
    requests?: Schema$GoogleCloudSecuritycenterV2Requests;
    /**
     * Information about the [Google Cloud Armor security policy](https://cloud.google.com/armor/docs/security-policy-overview) relevant to the finding.
     */
    securityPolicy?: Schema$GoogleCloudSecuritycenterV2SecurityPolicy;
    /**
     * Distinguish between volumetric & protocol DDoS attack and application layer attacks. For example, "L3_4" for Layer 3 and Layer 4 DDoS attacks, or "L_7" for Layer 7 DDoS attacks.
     */
    threatVector?: string | null;
  }
  /**
   * CloudControl associated with the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2CloudControl {
    /**
     * Name of the CloudControl associated with the finding.
     */
    cloudControlName?: string | null;
    /**
     * Policy type of the CloudControl
     */
    policyType?: string | null;
    /**
     * Type of cloud control.
     */
    type?: string | null;
    /**
     * Version of the Cloud Control
     */
    version?: number | null;
  }
  /**
   * The [data profile](https://cloud.google.com/dlp/docs/data-profiles) associated with the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2CloudDlpDataProfile {
    /**
     * Name of the data profile, for example, `projects/123/locations/europe/tableProfiles/8383929`.
     */
    dataProfile?: string | null;
    /**
     * The resource hierarchy level at which the data profile was generated.
     */
    parentType?: string | null;
  }
  /**
   * Details about the Cloud Data Loss Prevention (Cloud DLP) [inspection job](https://cloud.google.com/dlp/docs/concepts-job-triggers) that produced the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2CloudDlpInspection {
    /**
     * Whether Cloud DLP scanned the complete resource or a sampled subset.
     */
    fullScan?: boolean | null;
    /**
     * The type of information (or *[infoType](https://cloud.google.com/dlp/docs/infotypes-reference)*) found, for example, `EMAIL_ADDRESS` or `STREET_ADDRESS`.
     */
    infoType?: string | null;
    /**
     * The number of times Cloud DLP found this infoType within this job and resource.
     */
    infoTypeCount?: string | null;
    /**
     * Name of the inspection job, for example, `projects/123/locations/europe/dlpJobs/i-8383929`.
     */
    inspectJob?: string | null;
  }
  /**
   * Metadata taken from a [Cloud Logging LogEntry](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry)
   */
  export interface Schema$GoogleCloudSecuritycenterV2CloudLoggingEntry {
    /**
     * A unique identifier for the log entry.
     */
    insertId?: string | null;
    /**
     * The type of the log (part of `log_name`. `log_name` is the resource name of the log to which this log entry belongs). For example: `cloudresourcemanager.googleapis.com/activity` Note that this field is not URL-encoded, unlike in `LogEntry`.
     */
    logId?: string | null;
    /**
     * The organization, folder, or project of the monitored resource that produced this log entry.
     */
    resourceContainer?: string | null;
    /**
     * The time the event described by the log entry occurred.
     */
    timestamp?: string | null;
  }
  /**
   * Contains compliance information about a security standard indicating unmet recommendations.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Compliance {
    /**
     * Policies within the standard or benchmark, for example, A.12.4.1
     */
    ids?: string[] | null;
    /**
     * Industry-wide compliance standards or benchmarks, such as CIS, PCI, and OWASP.
     */
    standard?: string | null;
    /**
     * Version of the standard or benchmark, for example, 1.1
     */
    version?: string | null;
  }
  /**
   * Compliance Details associated with the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2ComplianceDetails {
    /**
     * CloudControl associated with the finding
     */
    cloudControl?: Schema$GoogleCloudSecuritycenterV2CloudControl;
    /**
     * Cloud Control Deployments associated with the finding. For example, organizations/123/locations/global/cloudControlDeployments/deploymentIdentifier
     */
    cloudControlDeploymentNames?: string[] | null;
    /**
     * Details of Frameworks associated with the finding
     */
    frameworks?: Schema$GoogleCloudSecuritycenterV2Framework[];
  }
  /**
   * Contains information about the IP connection associated with the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Connection {
    /**
     * Destination IP address. Not present for sockets that are listening and not connected.
     */
    destinationIp?: string | null;
    /**
     * Destination port. Not present for sockets that are listening and not connected.
     */
    destinationPort?: number | null;
    /**
     * IANA Internet Protocol Number such as TCP(6) and UDP(17).
     */
    protocol?: string | null;
    /**
     * Source IP address.
     */
    sourceIp?: string | null;
    /**
     * Source port.
     */
    sourcePort?: number | null;
  }
  /**
   * The email address of a contact.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Contact {
    /**
     * An email address. For example, "`person123@company.com`".
     */
    email?: string | null;
  }
  /**
   * Details about specific contacts
   */
  export interface Schema$GoogleCloudSecuritycenterV2ContactDetails {
    /**
     * A list of contacts
     */
    contacts?: Schema$GoogleCloudSecuritycenterV2Contact[];
  }
  /**
   * Container associated with the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Container {
    /**
     * The time that the container was created.
     */
    createTime?: string | null;
    /**
     * Optional container image ID, if provided by the container runtime. Uniquely identifies the container image launched using a container image digest.
     */
    imageId?: string | null;
    /**
     * Container labels, as provided by the container runtime.
     */
    labels?: Schema$GoogleCloudSecuritycenterV2Label[];
    /**
     * Name of the container.
     */
    name?: string | null;
    /**
     * Container image URI provided when configuring a pod or container. This string can identify a container image version using mutable tags.
     */
    uri?: string | null;
  }
  /**
   * Compliance control associated with the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Control {
    /**
     * Name of the Control
     */
    controlName?: string | null;
    /**
     * Display name of the control. For example, AU-02.
     */
    displayName?: string | null;
  }
  /**
   * CVE stands for Common Vulnerabilities and Exposures. Information from the [CVE record](https://www.cve.org/ResourcesSupport/Glossary) that describes this vulnerability.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Cve {
    /**
     * Describe Common Vulnerability Scoring System specified at https://www.first.org/cvss/v3.1/specification-document
     */
    cvssv3?: Schema$GoogleCloudSecuritycenterV2Cvssv3;
    /**
     * The exploitation activity of the vulnerability in the wild.
     */
    exploitationActivity?: string | null;
    /**
     * Date the first publicly available exploit or PoC was released.
     */
    exploitReleaseDate?: string | null;
    /**
     * Date of the earliest known exploitation.
     */
    firstExploitationDate?: string | null;
    /**
     * The unique identifier for the vulnerability. e.g. CVE-2021-34527
     */
    id?: string | null;
    /**
     * The potential impact of the vulnerability if it was to be exploited.
     */
    impact?: string | null;
    /**
     * Whether or not the vulnerability has been observed in the wild.
     */
    observedInTheWild?: boolean | null;
    /**
     * Additional information about the CVE. e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527
     */
    references?: Schema$GoogleCloudSecuritycenterV2Reference[];
    /**
     * Whether upstream fix is available for the CVE.
     */
    upstreamFixAvailable?: boolean | null;
    /**
     * Whether or not the vulnerability was zero day when the finding was published.
     */
    zeroDay?: boolean | null;
  }
  /**
   * Common Vulnerability Scoring System version 3.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Cvssv3 {
    /**
     * This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability.
     */
    attackComplexity?: string | null;
    /**
     * Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. This metric reflects the context by which vulnerability exploitation is possible.
     */
    attackVector?: string | null;
    /**
     * This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability.
     */
    availabilityImpact?: string | null;
    /**
     * The base score is a function of the base metric scores.
     */
    baseScore?: number | null;
    /**
     * This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability.
     */
    confidentialityImpact?: string | null;
    /**
     * This metric measures the impact to integrity of a successfully exploited vulnerability.
     */
    integrityImpact?: string | null;
    /**
     * This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability.
     */
    privilegesRequired?: string | null;
    /**
     * The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope.
     */
    scope?: string | null;
    /**
     * This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component.
     */
    userInteraction?: string | null;
  }
  /**
   * CWE stands for Common Weakness Enumeration. Information about this weakness, as described by [CWE](https://cwe.mitre.org/).
   */
  export interface Schema$GoogleCloudSecuritycenterV2Cwe {
    /**
     * The CWE identifier, e.g. CWE-94
     */
    id?: string | null;
    /**
     * Any reference to the details on the CWE, for example, https://cwe.mitre.org/data/definitions/94.html
     */
    references?: Schema$GoogleCloudSecuritycenterV2Reference[];
  }
  /**
   * Details about a data access attempt made by a principal not authorized under applicable data security policy.
   */
  export interface Schema$GoogleCloudSecuritycenterV2DataAccessEvent {
    /**
     * Unique identifier for data access event.
     */
    eventId?: string | null;
    /**
     * Timestamp of data access event.
     */
    eventTime?: string | null;
    /**
     * The operation performed by the principal to access the data.
     */
    operation?: string | null;
    /**
     * The email address of the principal that accessed the data. The principal could be a user account, service account, Google group, or other.
     */
    principalEmail?: string | null;
  }
  /**
   * Represents database access information, such as queries. A database may be a sub-resource of an instance (as in the case of Cloud SQL instances or Cloud Spanner instances), or the database instance itself. Some database resources might not have the [full resource name](https://google.aip.dev/122#full-resource-names) populated because these resource types, such as Cloud SQL databases, are not yet supported by Cloud Asset Inventory. In these cases only the display name is provided.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Database {
    /**
     * The human-readable name of the database that the user connected to.
     */
    displayName?: string | null;
    /**
     * The target usernames, roles, or groups of an SQL privilege grant, which is not an IAM policy change.
     */
    grantees?: string[] | null;
    /**
     * Some database resources may not have the [full resource name](https://google.aip.dev/122#full-resource-names) populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. Cloud SQL databases). In these cases only the display name will be provided. The [full resource name](https://google.aip.dev/122#full-resource-names) of the database that the user connected to, if it is supported by Cloud Asset Inventory.
     */
    name?: string | null;
    /**
     * The SQL statement that is associated with the database access.
     */
    query?: string | null;
    /**
     * The username used to connect to the database. The username might not be an IAM principal and does not have a set format.
     */
    userName?: string | null;
    /**
     * The version of the database, for example, POSTGRES_14. See [the complete list](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion).
     */
    version?: string | null;
  }
  /**
   * Details about a data flow event, in which either the data is moved to or is accessed from a non-compliant geo-location, as defined in the applicable data security policy.
   */
  export interface Schema$GoogleCloudSecuritycenterV2DataFlowEvent {
    /**
     * Unique identifier for data flow event.
     */
    eventId?: string | null;
    /**
     * Timestamp of data flow event.
     */
    eventTime?: string | null;
    /**
     * The operation performed by the principal for the data flow event.
     */
    operation?: string | null;
    /**
     * The email address of the principal that initiated the data flow event. The principal could be a user account, service account, Google group, or other.
     */
    principalEmail?: string | null;
    /**
     * Non-compliant location of the principal or the data destination.
     */
    violatedLocation?: string | null;
  }
  /**
   * Details about data retention deletion violations, in which the data is non-compliant based on their retention or deletion time, as defined in the applicable data security policy. The Data Retention Deletion (DRD) control is a control of the DSPM (Data Security Posture Management) suite that enables organizations to manage data retention and deletion policies in compliance with regulations, such as GDPR and CRPA. DRD supports two primary policy types: maximum storage length (max TTL) and minimum storage length (min TTL). Both are aimed at helping organizations meet regulatory and data management commitments.
   */
  export interface Schema$GoogleCloudSecuritycenterV2DataRetentionDeletionEvent {
    /**
     * Number of objects that violated the policy for this resource. If the number is less than 1,000, then the value of this field is the exact number. If the number of objects that violated the policy is greater than or equal to 1,000, then the value of this field is 1000.
     */
    dataObjectCount?: string | null;
    /**
     * Timestamp indicating when the event was detected.
     */
    eventDetectionTime?: string | null;
    /**
     * Type of the DRD event.
     */
    eventType?: string | null;
    /**
     * Maximum duration of retention allowed from the DRD control. This comes from the DRD control where users set a max TTL for their data. For example, suppose that a user sets the max TTL for a Cloud Storage bucket to 90 days. However, an object in that bucket is 100 days old. In this case, a DataRetentionDeletionEvent will be generated for that Cloud Storage bucket, and the max_retention_allowed is 90 days.
     */
    maxRetentionAllowed?: string | null;
  }
  /**
   * Vertex AI dataset associated with the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Dataset {
    /**
     * The user defined display name of dataset, e.g. plants-dataset
     */
    displayName?: string | null;
    /**
     * Resource name of the dataset, e.g. projects/{project\}/locations/{location\}/datasets/2094040236064505856
     */
    name?: string | null;
    /**
     * Data source, such as a BigQuery source URI, e.g. bq://scc-nexus-test.AIPPtest.gsod
     */
    source?: string | null;
  }
  /**
   * Denied IP rule.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Denied {
    /**
     * Optional. Optional list of denied IP rules.
     */
    ipRules?: Schema$GoogleCloudSecuritycenterV2IpRule[];
  }
  /**
   * Memory hash detection contributing to the binary family match.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Detection {
    /**
     * The name of the binary associated with the memory hash signature detection.
     */
    binary?: string | null;
    /**
     * The percentage of memory page hashes in the signature that were matched.
     */
    percentPagesMatched?: number | null;
  }
  /**
   * Contains information about the disk associated with the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Disk {
    /**
     * The name of the disk, for example, "https://www.googleapis.com/compute/v1/projects/{project-id\}/zones/{zone-id\}/disks/{disk-id\}".
     */
    name?: string | null;
  }
  /**
   * Path of the file in terms of underlying disk/partition identifiers.
   */
  export interface Schema$GoogleCloudSecuritycenterV2DiskPath {
    /**
     * UUID of the partition (format https://wiki.archlinux.org/title/persistent_block_device_naming#by-uuid)
     */
    partitionUuid?: string | null;
    /**
     * Relative path of the file in the partition as a JSON encoded string. Example: /home/user1/executable_file.sh
     */
    relativePath?: string | null;
  }
  /**
   * The record of a dynamic mute rule that matches the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2DynamicMuteRecord {
    /**
     * When the dynamic mute rule first matched the finding.
     */
    matchTime?: string | null;
    /**
     * The relative resource name of the mute rule, represented by a mute config, that created this record, for example `organizations/123/muteConfigs/mymuteconfig` or `organizations/123/locations/global/muteConfigs/mymuteconfig`.
     */
    muteConfig?: string | null;
  }
  /**
   * A name-value pair representing an environment variable used in an operating system process.
   */
  export interface Schema$GoogleCloudSecuritycenterV2EnvironmentVariable {
    /**
     * Environment variable name as a JSON encoded string.
     */
    name?: string | null;
    /**
     * Environment variable value as a JSON encoded string.
     */
    val?: string | null;
  }
  /**
   * Resource where data was exfiltrated from or exfiltrated to.
   */
  export interface Schema$GoogleCloudSecuritycenterV2ExfilResource {
    /**
     * Subcomponents of the asset that was exfiltrated, like URIs used during exfiltration, table names, databases, and filenames. For example, multiple tables might have been exfiltrated from the same Cloud SQL instance, or multiple files might have been exfiltrated from the same Cloud Storage bucket.
     */
    components?: string[] | null;
    /**
     * The resource's [full resource name](https://cloud.google.com/apis/design/resource_names#full_resource_name).
     */
    name?: string | null;
  }
  /**
   * Exfiltration represents a data exfiltration attempt from one or more sources to one or more targets. The `sources` attribute lists the sources of the exfiltrated data. The `targets` attribute lists the destinations the data was copied to.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Exfiltration {
    /**
     * If there are multiple sources, then the data is considered "joined" between them. For instance, BigQuery can join multiple tables, and each table would be considered a source.
     */
    sources?: Schema$GoogleCloudSecuritycenterV2ExfilResource[];
    /**
     * If there are multiple targets, each target would get a complete copy of the "joined" source data.
     */
    targets?: Schema$GoogleCloudSecuritycenterV2ExfilResource[];
    /**
     * Total exfiltrated bytes processed for the entire job.
     */
    totalExfiltratedBytes?: string | null;
  }
  /**
   * Representation of third party SIEM/SOAR fields within SCC.
   */
  export interface Schema$GoogleCloudSecuritycenterV2ExternalSystem {
    /**
     * References primary/secondary etc assignees in the external system.
     */
    assignees?: string[] | null;
    /**
     * The time when the case was closed, as reported by the external system.
     */
    caseCloseTime?: string | null;
    /**
     * The time when the case was created, as reported by the external system.
     */
    caseCreateTime?: string | null;
    /**
     * The priority of the finding's corresponding case in the external system.
     */
    casePriority?: string | null;
    /**
     * The SLA of the finding's corresponding case in the external system.
     */
    caseSla?: string | null;
    /**
     * The link to the finding's corresponding case in the external system.
     */
    caseUri?: string | null;
    /**
     * The time when the case was last updated, as reported by the external system.
     */
    externalSystemUpdateTime?: string | null;
    /**
     * The identifier that's used to track the finding's corresponding case in the external system.
     */
    externalUid?: string | null;
    /**
     * Full resource name of the external system. The following list shows some examples: + `organizations/1234/sources/5678/findings/123456/externalSystems/jira` + `organizations/1234/sources/5678/locations/us/findings/123456/externalSystems/jira` + `folders/1234/sources/5678/findings/123456/externalSystems/jira` + `folders/1234/sources/5678/locations/us/findings/123456/externalSystems/jira` + `projects/1234/sources/5678/findings/123456/externalSystems/jira` + `projects/1234/sources/5678/locations/us/findings/123456/externalSystems/jira`
     */
    name?: string | null;
    /**
     * The most recent status of the finding's corresponding case, as reported by the external system.
     */
    status?: string | null;
    /**
     * Information about the ticket, if any, that is being used to track the resolution of the issue that is identified by this finding.
     */
    ticketInfo?: Schema$GoogleCloudSecuritycenterV2TicketInfo;
  }
  /**
   * File information about the related binary/library used by an executable, or the script used by a script interpreter
   */
  export interface Schema$GoogleCloudSecuritycenterV2File {
    /**
     * Prefix of the file contents as a JSON-encoded string.
     */
    contents?: string | null;
    /**
     * Path of the file in terms of underlying disk/partition identifiers.
     */
    diskPath?: Schema$GoogleCloudSecuritycenterV2DiskPath;
    /**
     * The length in bytes of the file prefix that was hashed. If hashed_size == size, any hashes reported represent the entire file.
     */
    hashedSize?: string | null;
    /**
     * Operation(s) performed on a file.
     */
    operations?: Schema$GoogleCloudSecuritycenterV2FileOperation[];
    /**
     * True when the hash covers only a prefix of the file.
     */
    partiallyHashed?: boolean | null;
    /**
     * Absolute path of the file as a JSON encoded string.
     */
    path?: string | null;
    /**
     * SHA256 hash of the first hashed_size bytes of the file encoded as a hex string. If hashed_size == size, sha256 represents the SHA256 hash of the entire file.
     */
    sha256?: string | null;
    /**
     * Size of the file in bytes.
     */
    size?: string | null;
  }
  /**
   * Operation(s) performed on a file.
   */
  export interface Schema$GoogleCloudSecuritycenterV2FileOperation {
    /**
     * The type of the operation
     */
    type?: string | null;
  }
  /**
   * Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Finding {
    /**
     * Access details associated with the finding, such as more information on the caller, which method was accessed, and from where.
     */
    access?: Schema$GoogleCloudSecuritycenterV2Access;
    /**
     * AffectedResources associated with the finding.
     */
    affectedResources?: Schema$GoogleCloudSecuritycenterV2AffectedResources;
    /**
     * The AI model associated with the finding.
     */
    aiModel?: Schema$GoogleCloudSecuritycenterV2AiModel;
    /**
     * Represents an application associated with the finding.
     */
    application?: Schema$GoogleCloudSecuritycenterV2Application;
    /**
     * The results of an attack path simulation relevant to this finding.
     */
    attackExposure?: Schema$GoogleCloudSecuritycenterV2AttackExposure;
    /**
     * Fields related to Backup and DR findings.
     */
    backupDisasterRecovery?: Schema$GoogleCloudSecuritycenterV2BackupDisasterRecovery;
    /**
     * Output only. The canonical name of the finding. The following list shows some examples: + `organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}` + `organizations/{organization_id\}/sources/{source_id\}/locations/{location_id\}/findings/{finding_id\}` + `folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}` + `folders/{folder_id\}/sources/{source_id\}/locations/{location_id\}/findings/{finding_id\}` + `projects/{project_id\}/sources/{source_id\}/findings/{finding_id\}` + `projects/{project_id\}/sources/{source_id\}/locations/{location_id\}/findings/{finding_id\}` The prefix is the closest CRM ancestor of the resource associated with the finding.
     */
    canonicalName?: string | null;
    /**
     * Immutable. The additional taxonomy group within findings from a given source. Example: "XSS_FLASH_INJECTION"
     */
    category?: string | null;
    /**
     * Contains details about a chokepoint, which is a resource or resource group where high-risk attack paths converge, based on [attack path simulations] (https://cloud.google.com/security-command-center/docs/attack-exposure-learn#attack_path_simulations). This field cannot be updated. Its value is ignored in all update requests.
     */
    chokepoint?: Schema$GoogleCloudSecuritycenterV2Chokepoint;
    /**
     * Fields related to Cloud Armor findings.
     */
    cloudArmor?: Schema$GoogleCloudSecuritycenterV2CloudArmor;
    /**
     * Cloud DLP data profile that is associated with the finding.
     */
    cloudDlpDataProfile?: Schema$GoogleCloudSecuritycenterV2CloudDlpDataProfile;
    /**
     * Cloud Data Loss Prevention (Cloud DLP) inspection results that are associated with the finding.
     */
    cloudDlpInspection?: Schema$GoogleCloudSecuritycenterV2CloudDlpInspection;
    /**
     * Details about the compliance implications of the finding.
     */
    complianceDetails?: Schema$GoogleCloudSecuritycenterV2ComplianceDetails;
    /**
     * Contains compliance information for security standards associated to the finding.
     */
    compliances?: Schema$GoogleCloudSecuritycenterV2Compliance[];
    /**
     * Contains information about the IP connection associated with the finding.
     */
    connections?: Schema$GoogleCloudSecuritycenterV2Connection[];
    /**
     * Output only. Map containing the points of contact for the given finding. The key represents the type of contact, while the value contains a list of all the contacts that pertain. Please refer to: https://cloud.google.com/resource-manager/docs/managing-notification-contacts#notification-categories { "security": { "contacts": [ { "email": "person1@company.com" \}, { "email": "person2@company.com" \} ] \} \}
     */
    contacts?: {
      [key: string]: Schema$GoogleCloudSecuritycenterV2ContactDetails;
    } | null;
    /**
     * Containers associated with the finding. This field provides information for both Kubernetes and non-Kubernetes containers.
     */
    containers?: Schema$GoogleCloudSecuritycenterV2Container[];
    /**
     * Output only. The time at which the finding was created in Security Command Center.
     */
    createTime?: string | null;
    /**
     * Data access events associated with the finding.
     */
    dataAccessEvents?: Schema$GoogleCloudSecuritycenterV2DataAccessEvent[];
    /**
     * Database associated with the finding.
     */
    database?: Schema$GoogleCloudSecuritycenterV2Database;
    /**
     * Data flow events associated with the finding.
     */
    dataFlowEvents?: Schema$GoogleCloudSecuritycenterV2DataFlowEvent[];
    /**
     * Data retention deletion events associated with the finding.
     */
    dataRetentionDeletionEvents?: Schema$GoogleCloudSecuritycenterV2DataRetentionDeletionEvent[];
    /**
     * Contains more details about the finding.
     */
    description?: string | null;
    /**
     * Disk associated with the finding.
     */
    disk?: Schema$GoogleCloudSecuritycenterV2Disk;
    /**
     * The time the finding was first detected. If an existing finding is updated, then this is the time the update occurred. For example, if the finding represents an open firewall, this property captures the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding is later resolved, then this time reflects when the finding was resolved. This must not be set to a value greater than the current timestamp.
     */
    eventTime?: string | null;
    /**
     * Represents exfiltrations associated with the finding.
     */
    exfiltration?: Schema$GoogleCloudSecuritycenterV2Exfiltration;
    /**
     * Output only. Third party SIEM/SOAR fields within SCC, contains external system information and external system finding fields.
     */
    externalSystems?: {
      [key: string]: Schema$GoogleCloudSecuritycenterV2ExternalSystem;
    } | null;
    /**
     * The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL.
     */
    externalUri?: string | null;
    /**
     * File associated with the finding.
     */
    files?: Schema$GoogleCloudSecuritycenterV2File[];
    /**
     * The class of the finding.
     */
    findingClass?: string | null;
    /**
     * Contains details about groups of which this finding is a member. A group is a collection of findings that are related in some way. This field cannot be updated. Its value is ignored in all update requests.
     */
    groupMemberships?: Schema$GoogleCloudSecuritycenterV2GroupMembership[];
    /**
     * Represents IAM bindings associated with the finding.
     */
    iamBindings?: Schema$GoogleCloudSecuritycenterV2IamBinding[];
    /**
     * Represents what's commonly known as an *indicator of compromise* (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise).
     */
    indicator?: Schema$GoogleCloudSecuritycenterV2Indicator;
    /**
     * IP rules associated with the finding.
     */
    ipRules?: Schema$GoogleCloudSecuritycenterV2IpRules;
    /**
     * Job associated with the finding.
     */
    job?: Schema$GoogleCloudSecuritycenterV2Job;
    /**
     * Signature of the kernel rootkit.
     */
    kernelRootkit?: Schema$GoogleCloudSecuritycenterV2KernelRootkit;
    /**
     * Kubernetes resources associated with the finding.
     */
    kubernetes?: Schema$GoogleCloudSecuritycenterV2Kubernetes;
    /**
     * The load balancers associated with the finding.
     */
    loadBalancers?: Schema$GoogleCloudSecuritycenterV2LoadBalancer[];
    /**
     * Log entries that are relevant to the finding.
     */
    logEntries?: Schema$GoogleCloudSecuritycenterV2LogEntry[];
    /**
     * MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org
     */
    mitreAttack?: Schema$GoogleCloudSecuritycenterV2MitreAttack;
    /**
     * Unique identifier of the module which generated the finding. Example: folders/598186756061/securityHealthAnalyticsSettings/customModules/56799441161885
     */
    moduleName?: string | null;
    /**
     * Indicates the mute state of a finding (either muted, unmuted or undefined). Unlike other attributes of a finding, a finding provider shouldn't set the value of mute.
     */
    mute?: string | null;
    /**
     * Output only. The mute information regarding this finding.
     */
    muteInfo?: Schema$GoogleCloudSecuritycenterV2MuteInfo;
    /**
     * Records additional information about the mute operation, for example, the [mute configuration](https://cloud.google.com/security-command-center/docs/how-to-mute-findings) that muted the finding and the user who muted the finding.
     */
    muteInitiator?: string | null;
    /**
     * Output only. The most recent time this finding was muted or unmuted.
     */
    muteUpdateTime?: string | null;
    /**
     * Identifier. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. The following list shows some examples: + `organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}` + `organizations/{organization_id\}/sources/{source_id\}/locations/{location_id\}/findings/{finding_id\}` + `folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}` + `folders/{folder_id\}/sources/{source_id\}/locations/{location_id\}/findings/{finding_id\}` + `projects/{project_id\}/sources/{source_id\}/findings/{finding_id\}` + `projects/{project_id\}/sources/{source_id\}/locations/{location_id\}/findings/{finding_id\}`
     */
    name?: string | null;
    /**
     * Represents the VPC networks that the resource is attached to.
     */
    networks?: Schema$GoogleCloudSecuritycenterV2Network[];
    /**
     * Steps to address the finding.
     */
    nextSteps?: string | null;
    /**
     * Notebook associated with the finding.
     */
    notebook?: Schema$GoogleCloudSecuritycenterV2Notebook;
    /**
     * Contains information about the org policies associated with the finding.
     */
    orgPolicies?: Schema$GoogleCloudSecuritycenterV2OrgPolicy[];
    /**
     * The relative resource name of the source and location the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. The following list shows some examples: + `organizations/{organization_id\}/sources/{source_id\}` + `folders/{folders_id\}/sources/{source_id\}` + `projects/{projects_id\}/sources/{source_id\}` + `organizations/{organization_id\}/sources/{source_id\}/locations/{location_id\}` + `folders/{folders_id\}/sources/{source_id\}/locations/{location_id\}` + `projects/{projects_id\}/sources/{source_id\}/locations/{location_id\}`
     */
    parent?: string | null;
    /**
     * Output only. The human readable display name of the finding source such as "Event Threat Detection" or "Security Health Analytics".
     */
    parentDisplayName?: string | null;
    /**
     * Represents operating system processes associated with the Finding.
     */
    processes?: Schema$GoogleCloudSecuritycenterV2Process[];
    /**
     * Immutable. For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string.
     */
    resourceName?: string | null;
    /**
     * Output only. User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the finding.
     */
    securityMarks?: Schema$GoogleCloudSecuritycenterV2SecurityMarks;
    /**
     * The security posture associated with the finding.
     */
    securityPosture?: Schema$GoogleCloudSecuritycenterV2SecurityPosture;
    /**
     * The severity of the finding. This field is managed by the source that writes the finding.
     */
    severity?: string | null;
    /**
     * Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only.
     */
    sourceProperties?: {[key: string]: any} | null;
    /**
     * Output only. The state of the finding.
     */
    state?: string | null;
    /**
     * Contains details about a group of security issues that, when the issues occur together, represent a greater risk than when the issues occur independently. A group of such issues is referred to as a toxic combination. This field cannot be updated. Its value is ignored in all update requests.
     */
    toxicCombination?: Schema$GoogleCloudSecuritycenterV2ToxicCombination;
    /**
     * VertexAi associated with the finding.
     */
    vertexAi?: Schema$GoogleCloudSecuritycenterV2VertexAi;
    /**
     * Represents vulnerability-specific fields like CVE and CVSS scores. CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/)
     */
    vulnerability?: Schema$GoogleCloudSecuritycenterV2Vulnerability;
  }
  /**
   * Message that contains the resource name and display name of a folder resource.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Folder {
    /**
     * Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    resourceFolder?: string | null;
    /**
     * The user defined display name for this folder.
     */
    resourceFolderDisplayName?: string | null;
  }
  /**
   * Compliance framework associated with the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Framework {
    /**
     * Category of the framework associated with the finding. E.g. Security Benchmark, or Assured Workloads
     */
    category?: string[] | null;
    /**
     * The controls associated with the framework.
     */
    controls?: Schema$GoogleCloudSecuritycenterV2Control[];
    /**
     * Display name of the framework. For a standard framework, this will look like e.g. PCI DSS 3.2.1, whereas for a custom framework it can be a user defined string like MyFramework
     */
    displayName?: string | null;
    /**
     * Name of the framework associated with the finding
     */
    name?: string | null;
    /**
     * Type of the framework associated with the finding, to specify whether the framework is built-in (pre-defined and immutable) or a custom framework defined by the customer (equivalent to security posture)
     */
    type?: string | null;
  }
  /**
   * Represents a geographical location for a given access.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Geolocation {
    /**
     * A CLDR.
     */
    regionCode?: string | null;
  }
  /**
   * Contains details about groups of which this finding is a member. A group is a collection of findings that are related in some way.
   */
  export interface Schema$GoogleCloudSecuritycenterV2GroupMembership {
    /**
     * ID of the group.
     */
    groupId?: string | null;
    /**
     * Type of group.
     */
    groupType?: string | null;
  }
  /**
   * Represents a particular IAM binding, which captures a member's role addition, removal, or state.
   */
  export interface Schema$GoogleCloudSecuritycenterV2IamBinding {
    /**
     * The action that was performed on a Binding.
     */
    action?: string | null;
    /**
     * A single identity requesting access for a Cloud Platform resource, for example, "foo@google.com".
     */
    member?: string | null;
    /**
     * Role that is assigned to "members". For example, "roles/viewer", "roles/editor", or "roles/owner".
     */
    role?: string | null;
  }
  /**
   * Represents what's commonly known as an _indicator of compromise_ (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise).
   */
  export interface Schema$GoogleCloudSecuritycenterV2Indicator {
    /**
     * List of domains associated to the Finding.
     */
    domains?: string[] | null;
    /**
     * The list of IP addresses that are associated with the finding.
     */
    ipAddresses?: string[] | null;
    /**
     * The list of matched signatures indicating that the given process is present in the environment.
     */
    signatures?: Schema$GoogleCloudSecuritycenterV2ProcessSignature[];
    /**
     * The list of URIs associated to the Findings.
     */
    uris?: string[] | null;
  }
  /**
   * IP rule information.
   */
  export interface Schema$GoogleCloudSecuritycenterV2IpRule {
    /**
     * Optional. An optional list of ports to which this rule applies. This field is only applicable for the UDP or (S)TCP protocols. Each entry must be either an integer or a range including a min and max port number.
     */
    portRanges?: Schema$GoogleCloudSecuritycenterV2PortRange[];
    /**
     * The IP protocol this rule applies to. This value can either be one of the following well known protocol strings (TCP, UDP, ICMP, ESP, AH, IPIP, SCTP) or a string representation of the integer value.
     */
    protocol?: string | null;
  }
  /**
   * IP rules associated with the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2IpRules {
    /**
     * Tuple with allowed rules.
     */
    allowed?: Schema$GoogleCloudSecuritycenterV2Allowed;
    /**
     * Tuple with denied rules.
     */
    denied?: Schema$GoogleCloudSecuritycenterV2Denied;
    /**
     * If destination IP ranges are specified, the firewall rule applies only to traffic that has a destination IP address in these ranges. These ranges must be expressed in CIDR format. Only supports IPv4.
     */
    destinationIpRanges?: string[] | null;
    /**
     * The direction that the rule is applicable to, one of ingress or egress.
     */
    direction?: string | null;
    /**
     * Name of the network protocol service, such as FTP, that is exposed by the open port. Follows the naming convention available at: https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml.
     */
    exposedServices?: string[] | null;
    /**
     * If source IP ranges are specified, the firewall rule applies only to traffic that has a source IP address in these ranges. These ranges must be expressed in CIDR format. Only supports IPv4.
     */
    sourceIpRanges?: string[] | null;
  }
  /**
   * Security Command Center Issue.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Issue {
    /**
     * Output only. The time the issue was created.
     */
    createTime?: string | null;
    /**
     * The description of the issue in Markdown format.
     */
    description?: string | null;
    /**
     * The finding category or rule name that generated the issue.
     */
    detection?: string | null;
    /**
     * The domains of the issue.
     */
    domains?: Schema$GoogleCloudSecuritycenterV2IssueDomain[];
    /**
     * The exposure score of the issue.
     */
    exposureScore?: number | null;
    /**
     * The type of the issue.
     */
    issueType?: string | null;
    /**
     * The time the issue was last observed.
     */
    lastObservationTime?: string | null;
    /**
     * The mute information of the issue.
     */
    mute?: Schema$GoogleCloudSecuritycenterV2IssueMute;
    /**
     * Identifier. The name of the issue. Format: organizations/{organization\}/locations/{location\}/issues/{issue\}
     */
    name?: string | null;
    /**
     * The primary resource associated with the issue.
     */
    primaryResource?: Schema$GoogleCloudSecuritycenterV2IssueResource;
    /**
     * The findings related to the issue.
     */
    relatedFindings?: Schema$GoogleCloudSecuritycenterV2IssueFinding[];
    /**
     * Approaches to remediate the issue in Markdown format.
     */
    remediations?: string[] | null;
    /**
     * Additional resources associated with the issue.
     */
    secondaryResources?: Schema$GoogleCloudSecuritycenterV2IssueResource[];
    /**
     * The security context of the issue.
     */
    securityContexts?: Schema$GoogleCloudSecuritycenterV2IssueSecurityContext[];
    /**
     * The severity of the issue.
     */
    severity?: string | null;
    /**
     * Output only. The state of the issue.
     */
    state?: string | null;
    /**
     * Output only. The time the issue was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * The domains of an issue.
   */
  export interface Schema$GoogleCloudSecuritycenterV2IssueDomain {
    /**
     * The domain category of the issue.
     */
    domainCategory?: string | null;
  }
  /**
   * Finding related to an issue.
   */
  export interface Schema$GoogleCloudSecuritycenterV2IssueFinding {
    /**
     * The CVE of the finding.
     */
    cve?: Schema$GoogleCloudSecuritycenterV2IssueFindingCve;
    /**
     * The name of the finding.
     */
    name?: string | null;
    /**
     * The security bulletin of the finding.
     */
    securityBulletin?: Schema$GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin;
  }
  /**
   * The CVE of the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2IssueFindingCve {
    /**
     * The CVE name.
     */
    name?: string | null;
  }
  /**
   * The security bulletin of the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin {
    /**
     * The security bulletin name.
     */
    name?: string | null;
  }
  /**
   * The mute information of the issue.
   */
  export interface Schema$GoogleCloudSecuritycenterV2IssueMute {
    /**
     * The email address of the user who last changed the mute state of the issue.
     */
    muteInitiator?: string | null;
    /**
     * The user-provided reason for muting the issue.
     */
    muteReason?: string | null;
    /**
     * Output only. The mute state of the issue.
     */
    muteState?: string | null;
    /**
     * The time the issue was muted.
     */
    muteUpdateTime?: string | null;
  }
  /**
   * A resource associated with the an issue.
   */
  export interface Schema$GoogleCloudSecuritycenterV2IssueResource {
    /**
     * The AWS metadata of the resource associated with the issue. Only populated for AWS resources.
     */
    awsMetadata?: Schema$GoogleCloudSecuritycenterV2IssueResourceAwsMetadata;
    /**
     * The Azure metadata of the resource associated with the issue. Only populated for Azure resources.
     */
    azureMetadata?: Schema$GoogleCloudSecuritycenterV2IssueResourceAzureMetadata;
    /**
     * The cloud provider of the resource associated with the issue.
     */
    cloudProvider?: string | null;
    /**
     * The resource-type specific display name of the resource associated with the issue.
     */
    displayName?: string | null;
    /**
     * The Google Cloud metadata of the resource associated with the issue. Only populated for Google Cloud resources.
     */
    googleCloudMetadata?: Schema$GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata;
    /**
     * The full resource name of the resource associated with the issue.
     */
    name?: string | null;
    /**
     * The type of the resource associated with the issue.
     */
    type?: string | null;
  }
  /**
   * The AWS metadata of a resource associated with an issue.
   */
  export interface Schema$GoogleCloudSecuritycenterV2IssueResourceAwsMetadata {
    /**
     * The AWS account of the resource associated with the issue.
     */
    account?: Schema$GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount;
  }
  /**
   * The AWS account of the resource associated with the issue.
   */
  export interface Schema$GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount {
    /**
     * The AWS account ID of the resource associated with the issue.
     */
    id?: string | null;
    /**
     * The AWS account name of the resource associated with the issue.
     */
    name?: string | null;
  }
  /**
   * The Azure metadata of a resource associated with an issue.
   */
  export interface Schema$GoogleCloudSecuritycenterV2IssueResourceAzureMetadata {
    /**
     * The Azure subscription of the resource associated with the issue.
     */
    subscription?: Schema$GoogleCloudSecuritycenterV2IssueResourceAzureMetadataAzureSubscription;
  }
  /**
   * The Azure subscription of the resource associated with the issue.
   */
  export interface Schema$GoogleCloudSecuritycenterV2IssueResourceAzureMetadataAzureSubscription {
    /**
     * The Azure subscription display name of the resource associated with the issue.
     */
    displayName?: string | null;
    /**
     * The Azure subscription ID of the resource associated with the issue.
     */
    id?: string | null;
  }
  /**
   * Google Cloud metadata of a resource associated with an issue.
   */
  export interface Schema$GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata {
    /**
     * The project ID that the resource associated with the issue belongs to.
     */
    projectId?: string | null;
  }
  /**
   * Security context associated with an issue.
   */
  export interface Schema$GoogleCloudSecuritycenterV2IssueSecurityContext {
    /**
     * The aggregated count of the security context.
     */
    aggregatedCount?: Schema$GoogleCloudSecuritycenterV2IssueSecurityContextAggregatedCount;
    /**
     * The context of the security context.
     */
    context?: Schema$GoogleCloudSecuritycenterV2IssueSecurityContextContext;
  }
  /**
   * Aggregated count of a security context.
   */
  export interface Schema$GoogleCloudSecuritycenterV2IssueSecurityContextAggregatedCount {
    /**
     * Aggregation key.
     */
    key?: string | null;
    /**
     * Aggregation value.
     */
    value?: number | null;
  }
  /**
   * Context of a security context.
   */
  export interface Schema$GoogleCloudSecuritycenterV2IssueSecurityContextContext {
    /**
     * Context type.
     */
    type?: string | null;
    /**
     * Context values.
     */
    values?: string[] | null;
  }
  /**
   * Describes a job
   */
  export interface Schema$GoogleCloudSecuritycenterV2Job {
    /**
     * Optional. If the job did not complete successfully, this field describes why.
     */
    errorCode?: number | null;
    /**
     * Optional. Gives the location where the job ran, such as `US` or `europe-west1`
     */
    location?: string | null;
    /**
     * The fully-qualified name for a job. e.g. `projects//jobs/`
     */
    name?: string | null;
    /**
     * Output only. State of the job, such as `RUNNING` or `PENDING`.
     */
    state?: string | null;
  }
  /**
   * Kernel mode rootkit signatures.
   */
  export interface Schema$GoogleCloudSecuritycenterV2KernelRootkit {
    /**
     * Rootkit name, when available.
     */
    name?: string | null;
    /**
     * True if unexpected modifications of kernel code memory are present.
     */
    unexpectedCodeModification?: boolean | null;
    /**
     * True if `ftrace` points are present with callbacks pointing to regions that are not in the expected kernel or module code range.
     */
    unexpectedFtraceHandler?: boolean | null;
    /**
     * True if interrupt handlers that are are not in the expected kernel or module code regions are present.
     */
    unexpectedInterruptHandler?: boolean | null;
    /**
     * True if kernel code pages that are not in the expected kernel or module code regions are present.
     */
    unexpectedKernelCodePages?: boolean | null;
    /**
     * True if `kprobe` points are present with callbacks pointing to regions that are not in the expected kernel or module code range.
     */
    unexpectedKprobeHandler?: boolean | null;
    /**
     * True if unexpected processes in the scheduler run queue are present. Such processes are in the run queue, but not in the process task list.
     */
    unexpectedProcessesInRunqueue?: boolean | null;
    /**
     * True if unexpected modifications of kernel read-only data memory are present.
     */
    unexpectedReadOnlyDataModification?: boolean | null;
    /**
     * True if system call handlers that are are not in the expected kernel or module code regions are present.
     */
    unexpectedSystemCallHandler?: boolean | null;
  }
  /**
   * Kubernetes-related attributes.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Kubernetes {
    /**
     * Provides information on any Kubernetes access reviews (privilege checks) relevant to the finding.
     */
    accessReviews?: Schema$GoogleCloudSecuritycenterV2AccessReview[];
    /**
     * Provides Kubernetes role binding information for findings that involve [RoleBindings or ClusterRoleBindings](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control).
     */
    bindings?: Schema$GoogleCloudSecuritycenterV2Binding[];
    /**
     * GKE [node pools](https://cloud.google.com/kubernetes-engine/docs/concepts/node-pools) associated with the finding. This field contains node pool information for each node, when it is available.
     */
    nodePools?: Schema$GoogleCloudSecuritycenterV2NodePool[];
    /**
     * Provides Kubernetes [node](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture#nodes) information.
     */
    nodes?: Schema$GoogleCloudSecuritycenterV2Node[];
    /**
     * Kubernetes objects related to the finding.
     */
    objects?: Schema$GoogleCloudSecuritycenterV2Object[];
    /**
     * Kubernetes [Pods](https://cloud.google.com/kubernetes-engine/docs/concepts/pod) associated with the finding. This field contains Pod records for each container that is owned by a Pod.
     */
    pods?: Schema$GoogleCloudSecuritycenterV2Pod[];
    /**
     * Provides Kubernetes role information for findings that involve [Roles or ClusterRoles](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control).
     */
    roles?: Schema$GoogleCloudSecuritycenterV2Role[];
  }
  /**
   * Represents a generic name-value label. A label has separate name and value fields to support filtering with the `contains()` function. For more information, see [Filtering on array-type fields](https://cloud.google.com/security-command-center/docs/how-to-api-list-findings#array-contains-filtering).
   */
  export interface Schema$GoogleCloudSecuritycenterV2Label {
    /**
     * Name of the label.
     */
    name?: string | null;
    /**
     * Value that corresponds to the label's name.
     */
    value?: string | null;
  }
  /**
   * Contains information related to the load balancer associated with the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2LoadBalancer {
    /**
     * The name of the load balancer associated with the finding.
     */
    name?: string | null;
  }
  /**
   * An individual entry in a log.
   */
  export interface Schema$GoogleCloudSecuritycenterV2LogEntry {
    /**
     * An individual entry in a log stored in Cloud Logging.
     */
    cloudLoggingEntry?: Schema$GoogleCloudSecuritycenterV2CloudLoggingEntry;
  }
  /**
   * A signature corresponding to memory page hashes.
   */
  export interface Schema$GoogleCloudSecuritycenterV2MemoryHashSignature {
    /**
     * The binary family.
     */
    binaryFamily?: string | null;
    /**
     * The list of memory hash detections contributing to the binary family match.
     */
    detections?: Schema$GoogleCloudSecuritycenterV2Detection[];
  }
  /**
   * MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org
   */
  export interface Schema$GoogleCloudSecuritycenterV2MitreAttack {
    /**
     * Additional MITRE ATT&CK tactics related to this finding, if any.
     */
    additionalTactics?: string[] | null;
    /**
     * Additional MITRE ATT&CK techniques related to this finding, if any, along with any of their respective parent techniques.
     */
    additionalTechniques?: string[] | null;
    /**
     * The MITRE ATT&CK tactic most closely represented by this finding, if any.
     */
    primaryTactic?: string | null;
    /**
     * The MITRE ATT&CK technique most closely represented by this finding, if any. primary_techniques is a repeated field because there are multiple levels of MITRE ATT&CK techniques. If the technique most closely represented by this finding is a sub-technique (e.g. `SCANNING_IP_BLOCKS`), both the sub-technique and its parent technique(s) will be listed (e.g. `SCANNING_IP_BLOCKS`, `ACTIVE_SCANNING`).
     */
    primaryTechniques?: string[] | null;
    /**
     * The MITRE ATT&CK version referenced by the above fields. E.g. "8".
     */
    version?: string | null;
  }
  /**
   * A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings.
   */
  export interface Schema$GoogleCloudSecuritycenterV2MuteConfig {
    /**
     * Output only. The time at which the mute config was created. This field is set by the server and will be ignored if provided on config creation.
     */
    createTime?: string | null;
    /**
     * A description of the mute config.
     */
    description?: string | null;
    /**
     * Optional. The expiry of the mute config. Only applicable for dynamic configs. If the expiry is set, when the config expires, it is removed from all findings.
     */
    expiryTime?: string | null;
    /**
     * Required. An expression that defines the filter to apply across create/update events of findings. While creating a filter string, be mindful of the scope in which the mute configuration is being created. E.g., If a filter contains project = X but is created under the project = Y scope, it might not match any findings. The following field and operator combinations are supported: * severity: `=`, `:` * category: `=`, `:` * resource.name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.type: `=`, `:` * finding_class: `=`, `:` * indicator.ip_addresses: `=`, `:` * indicator.domains: `=`, `:`
     */
    filter?: string | null;
    /**
     * Output only. Email address of the user who last edited the mute config. This field is set by the server and will be ignored if provided on config creation or update.
     */
    mostRecentEditor?: string | null;
    /**
     * Identifier. This field will be ignored if provided on config creation. The following list shows some examples of the format: + `organizations/{organization\}/muteConfigs/{mute_config\}` + `organizations/{organization\}locations/{location\}//muteConfigs/{mute_config\}` + `folders/{folder\}/muteConfigs/{mute_config\}` + `folders/{folder\}/locations/{location\}/muteConfigs/{mute_config\}` + `projects/{project\}/muteConfigs/{mute_config\}` + `projects/{project\}/locations/{location\}/muteConfigs/{mute_config\}`
     */
    name?: string | null;
    /**
     * Required. The type of the mute config, which determines what type of mute state the config affects. Immutable after creation.
     */
    type?: string | null;
    /**
     * Output only. The most recent time at which the mute config was updated. This field is set by the server and will be ignored if provided on config creation or update.
     */
    updateTime?: string | null;
  }
  /**
   * Mute information about the finding, including whether the finding has a static mute or any matching dynamic mute rules.
   */
  export interface Schema$GoogleCloudSecuritycenterV2MuteInfo {
    /**
     * The list of dynamic mute rules that currently match the finding.
     */
    dynamicMuteRecords?: Schema$GoogleCloudSecuritycenterV2DynamicMuteRecord[];
    /**
     * If set, the static mute applied to this finding. Static mutes override dynamic mutes. If unset, there is no static mute.
     */
    staticMute?: Schema$GoogleCloudSecuritycenterV2StaticMute;
  }
  /**
   * Contains information about a VPC network associated with the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Network {
    /**
     * The name of the VPC network resource, for example, `//compute.googleapis.com/projects/my-project/global/networks/my-network`.
     */
    name?: string | null;
  }
  /**
   * Kubernetes nodes associated with the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Node {
    /**
     * [Full resource name](https://google.aip.dev/122#full-resource-names) of the Compute Engine VM running the cluster node.
     */
    name?: string | null;
  }
  /**
   * Provides GKE node pool information.
   */
  export interface Schema$GoogleCloudSecuritycenterV2NodePool {
    /**
     * Kubernetes node pool name.
     */
    name?: string | null;
    /**
     * Nodes associated with the finding.
     */
    nodes?: Schema$GoogleCloudSecuritycenterV2Node[];
  }
  /**
   * Represents a Jupyter notebook IPYNB file, such as a [Colab Enterprise notebook](https://cloud.google.com/colab/docs/introduction) file, that is associated with a finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Notebook {
    /**
     * The user ID of the latest author to modify the notebook.
     */
    lastAuthor?: string | null;
    /**
     * The name of the notebook.
     */
    name?: string | null;
    /**
     * The most recent time the notebook was updated.
     */
    notebookUpdateTime?: string | null;
    /**
     * The source notebook service, for example, "Colab Enterprise".
     */
    service?: string | null;
  }
  /**
   * Cloud SCC's Notification
   */
  export interface Schema$GoogleCloudSecuritycenterV2NotificationMessage {
    /**
     * If it's a Finding based notification config, this field will be populated.
     */
    finding?: Schema$GoogleCloudSecuritycenterV2Finding;
    /**
     * Name of the notification config that generated current notification.
     */
    notificationConfigName?: string | null;
    /**
     * The Cloud resource tied to this notification's Finding.
     */
    resource?: Schema$GoogleCloudSecuritycenterV2Resource;
  }
  /**
   * Kubernetes object related to the finding, uniquely identified by GKNN. Used if the object Kind is not one of Pod, Node, NodePool, Binding, or AccessReview.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Object {
    /**
     * Pod containers associated with this finding, if any.
     */
    containers?: Schema$GoogleCloudSecuritycenterV2Container[];
    /**
     * Kubernetes object group, such as "policy.k8s.io/v1".
     */
    group?: string | null;
    /**
     * Kubernetes object kind, such as "Namespace".
     */
    kind?: string | null;
    /**
     * Kubernetes object name. For details see https://kubernetes.io/docs/concepts/overview/working-with-objects/names/.
     */
    name?: string | null;
    /**
     * Kubernetes object namespace. Must be a valid DNS label. Named "ns" to avoid collision with C++ namespace keyword. For details see https://kubernetes.io/docs/tasks/administer-cluster/namespaces/.
     */
    ns?: string | null;
  }
  /**
   * Contains information about the org policies associated with the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2OrgPolicy {
    /**
     * Identifier. The resource name of the org policy. Example: "organizations/{organization_id\}/policies/{constraint_name\}"
     */
    name?: string | null;
  }
  /**
   * Package is a generic definition of a package.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Package {
    /**
     * The CPE URI where the vulnerability was detected.
     */
    cpeUri?: string | null;
    /**
     * The name of the package where the vulnerability was detected.
     */
    packageName?: string | null;
    /**
     * Type of package, for example, os, maven, or go.
     */
    packageType?: string | null;
    /**
     * The version of the package.
     */
    packageVersion?: string | null;
  }
  /**
   * Vertex AI training pipeline associated with the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Pipeline {
    /**
     * The user-defined display name of pipeline, e.g. plants-classification
     */
    displayName?: string | null;
    /**
     * Resource name of the pipeline, e.g. projects/{project\}/locations/{location\}/trainingPipelines/5253428229225578496
     */
    name?: string | null;
  }
  /**
   * A Kubernetes Pod.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Pod {
    /**
     * Pod containers associated with this finding, if any.
     */
    containers?: Schema$GoogleCloudSecuritycenterV2Container[];
    /**
     * Pod labels. For Kubernetes containers, these are applied to the container.
     */
    labels?: Schema$GoogleCloudSecuritycenterV2Label[];
    /**
     * Kubernetes Pod name.
     */
    name?: string | null;
    /**
     * Kubernetes Pod namespace.
     */
    ns?: string | null;
  }
  /**
   * The policy field that violates the deployed posture and its expected and detected values.
   */
  export interface Schema$GoogleCloudSecuritycenterV2PolicyDriftDetails {
    /**
     * The detected value that violates the deployed posture, for example, `false` or `allowed_values={"projects/22831892"\}`.
     */
    detectedValue?: string | null;
    /**
     * The value of this field that was configured in a posture, for example, `true` or `allowed_values={"projects/29831892"\}`.
     */
    expectedValue?: string | null;
    /**
     * The name of the updated field, for example constraint.implementation.policy_rules[0].enforce
     */
    field?: string | null;
  }
  /**
   * A port range which is inclusive of the min and max values. Values are between 0 and 2^16-1. The max can be equal / must be not smaller than the min value. If min and max are equal this indicates that it is a single port.
   */
  export interface Schema$GoogleCloudSecuritycenterV2PortRange {
    /**
     * Maximum port value.
     */
    max?: string | null;
    /**
     * Minimum port value.
     */
    min?: string | null;
  }
  /**
   * Represents an operating system process.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Process {
    /**
     * Process arguments as JSON encoded strings.
     */
    args?: string[] | null;
    /**
     * True if `args` is incomplete.
     */
    argumentsTruncated?: boolean | null;
    /**
     * File information for the process executable.
     */
    binary?: Schema$GoogleCloudSecuritycenterV2File;
    /**
     * Process environment variables.
     */
    envVariables?: Schema$GoogleCloudSecuritycenterV2EnvironmentVariable[];
    /**
     * True if `env_variables` is incomplete.
     */
    envVariablesTruncated?: boolean | null;
    /**
     * File information for libraries loaded by the process.
     */
    libraries?: Schema$GoogleCloudSecuritycenterV2File[];
    /**
     * The process name, as displayed in utilities like `top` and `ps`. This name can be accessed through `/proc/[pid]/comm` and changed with `prctl(PR_SET_NAME)`.
     */
    name?: string | null;
    /**
     * The parent process ID.
     */
    parentPid?: string | null;
    /**
     * The process ID.
     */
    pid?: string | null;
    /**
     * When the process represents the invocation of a script, `binary` provides information about the interpreter, while `script` provides information about the script file provided to the interpreter.
     */
    script?: Schema$GoogleCloudSecuritycenterV2File;
    /**
     * The ID of the user that executed the process. E.g. If this is the root user this will always be 0.
     */
    userId?: string | null;
  }
  /**
   * Indicates what signature matched this process.
   */
  export interface Schema$GoogleCloudSecuritycenterV2ProcessSignature {
    /**
     * Signature indicating that a binary family was matched.
     */
    memoryHashSignature?: Schema$GoogleCloudSecuritycenterV2MemoryHashSignature;
    /**
     * Describes the type of resource associated with the signature.
     */
    signatureType?: string | null;
    /**
     * Signature indicating that a YARA rule was matched.
     */
    yaraRuleSignature?: Schema$GoogleCloudSecuritycenterV2YaraRuleSignature;
  }
  /**
   * Additional Links
   */
  export interface Schema$GoogleCloudSecuritycenterV2Reference {
    /**
     * Source of the reference e.g. NVD
     */
    source?: string | null;
    /**
     * Uri for the mentioned source e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527.
     */
    uri?: string | null;
  }
  /**
   * Information about the requests relevant to the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Requests {
    /**
     * Allowed RPS (requests per second) over the long term.
     */
    longTermAllowed?: number | null;
    /**
     * Denied RPS (requests per second) over the long term.
     */
    longTermDenied?: number | null;
    /**
     * For 'Increasing deny ratio', the ratio is the denied traffic divided by the allowed traffic. For 'Allowed traffic spike', the ratio is the allowed traffic in the short term divided by allowed traffic in the long term.
     */
    ratio?: number | null;
    /**
     * Allowed RPS (requests per second) in the short term.
     */
    shortTermAllowed?: number | null;
  }
  /**
   * Information related to the Google Cloud resource.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Resource {
    /**
     * The AWS metadata associated with the finding.
     */
    awsMetadata?: Schema$GoogleCloudSecuritycenterV2AwsMetadata;
    /**
     * The Azure metadata associated with the finding.
     */
    azureMetadata?: Schema$GoogleCloudSecuritycenterV2AzureMetadata;
    /**
     * Indicates which cloud provider the finding is from.
     */
    cloudProvider?: string | null;
    /**
     * The human readable name of the resource.
     */
    displayName?: string | null;
    /**
     * The Google Cloud metadata associated with the finding.
     */
    gcpMetadata?: Schema$GcpMetadata;
    /**
     * The region or location of the service (if applicable).
     */
    location?: string | null;
    /**
     * The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    name?: string | null;
    /**
     * Provides the path to the resource within the resource hierarchy.
     */
    resourcePath?: Schema$GoogleCloudSecuritycenterV2ResourcePath;
    /**
     * A string representation of the resource path. For Google Cloud, it has the format of `organizations/{organization_id\}/folders/{folder_id\}/folders/{folder_id\}/projects/{project_id\}` where there can be any number of folders. For AWS, it has the format of `org/{organization_id\}/ou/{organizational_unit_id\}/ou/{organizational_unit_id\}/account/{account_id\}` where there can be any number of organizational units. For Azure, it has the format of `mg/{management_group_id\}/mg/{management_group_id\}/subscription/{subscription_id\}/rg/{resource_group_name\}` where there can be any number of management groups.
     */
    resourcePathString?: string | null;
    /**
     * The service or resource provider associated with the resource.
     */
    service?: string | null;
    /**
     * The full resource type of the resource.
     */
    type?: string | null;
  }
  /**
   * Represents the path of resources leading up to the resource this finding is about.
   */
  export interface Schema$GoogleCloudSecuritycenterV2ResourcePath {
    /**
     * The list of nodes that make the up resource path, ordered from lowest level to highest level.
     */
    nodes?: Schema$GoogleCloudSecuritycenterV2ResourcePathNode[];
  }
  /**
   * A node within the resource path. Each node represents a resource within the resource hierarchy.
   */
  export interface Schema$GoogleCloudSecuritycenterV2ResourcePathNode {
    /**
     * The display name of the resource this node represents.
     */
    displayName?: string | null;
    /**
     * The ID of the resource this node represents.
     */
    id?: string | null;
    /**
     * The type of resource this node represents.
     */
    nodeType?: string | null;
  }
  /**
   * A resource value configuration (RVC) is a mapping configuration of user's resources to resource values. Used in Attack path simulations.
   */
  export interface Schema$GoogleCloudSecuritycenterV2ResourceValueConfig {
    /**
     * Cloud provider this configuration applies to
     */
    cloudProvider?: string | null;
    /**
     * Output only. Timestamp this resource value configuration was created.
     */
    createTime?: string | null;
    /**
     * Description of the resource value configuration.
     */
    description?: string | null;
    /**
     * Identifier. Name for the resource value configuration
     */
    name?: string | null;
    /**
     * List of resource labels to search for, evaluated with `AND`. For example, "resource_labels_selector": {"key": "value", "env": "prod"\} will match resources with labels "key": "value" `AND` "env": "prod" https://cloud.google.com/resource-manager/docs/creating-managing-labels
     */
    resourceLabelsSelector?: {[key: string]: string} | null;
    /**
     * Apply resource_value only to resources that match resource_type. resource_type will be checked with `AND` of other resources. For example, "storage.googleapis.com/Bucket" with resource_value "HIGH" will apply "HIGH" value only to "storage.googleapis.com/Bucket" resources.
     */
    resourceType?: string | null;
    /**
     * Resource value level this expression represents Only required when there is no Sensitive Data Protection mapping in the request
     */
    resourceValue?: string | null;
    /**
     * Project or folder to scope this configuration to. For example, "project/456" would apply this configuration only to resources in "project/456" scope and will be checked with `AND` of other resources.
     */
    scope?: string | null;
    /**
     * A mapping of the sensitivity on Sensitive Data Protection finding to resource values. This mapping can only be used in combination with a resource_type that is related to BigQuery, e.g. "bigquery.googleapis.com/Dataset".
     */
    sensitiveDataProtectionMapping?: Schema$GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping;
    /**
     * Tag values combined with `AND` to check against. For Google Cloud resources, they are tag value IDs in the form of "tagValues/123". Example: `[ "tagValues/123", "tagValues/456", "tagValues/789" ]` https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing
     */
    tagValues?: string[] | null;
    /**
     * Output only. Timestamp this resource value configuration was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Kubernetes Role or ClusterRole.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Role {
    /**
     * Role type.
     */
    kind?: string | null;
    /**
     * Role name.
     */
    name?: string | null;
    /**
     * Role namespace.
     */
    ns?: string | null;
  }
  /**
   * SecurityBulletin are notifications of vulnerabilities of Google products.
   */
  export interface Schema$GoogleCloudSecuritycenterV2SecurityBulletin {
    /**
     * ID of the bulletin corresponding to the vulnerability.
     */
    bulletinId?: string | null;
    /**
     * Submission time of this Security Bulletin.
     */
    submissionTime?: string | null;
    /**
     * This represents a version that the cluster receiving this notification should be upgraded to, based on its current version. For example, 1.15.0
     */
    suggestedUpgradeVersion?: string | null;
  }
  /**
   * User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.
   */
  export interface Schema$GoogleCloudSecuritycenterV2SecurityMarks {
    /**
     * The canonical name of the marks. The following list shows some examples: + `organizations/{organization_id\}/assets/{asset_id\}/securityMarks` + `organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks` + `organizations/{organization_id\}/sources/{source_id\}/locations/{location\}/findings/{finding_id\}/securityMarks` + `folders/{folder_id\}/assets/{asset_id\}/securityMarks` + `folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks` + `folders/{folder_id\}/sources/{source_id\}/locations/{location\}/findings/{finding_id\}/securityMarks` + `projects/{project_number\}/assets/{asset_id\}/securityMarks` + `projects/{project_number\}/sources/{source_id\}/findings/{finding_id\}/securityMarks` + `projects/{project_number\}/sources/{source_id\}/locations/{location\}/findings/{finding_id\}/securityMarks`
     */
    canonicalName?: string | null;
    /**
     * Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive)
     */
    marks?: {[key: string]: string} | null;
    /**
     * The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name The following list shows some examples: + `organizations/{organization_id\}/assets/{asset_id\}/securityMarks` + `organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks` + `organizations/{organization_id\}/sources/{source_id\}/locations/{location\}/findings/{finding_id\}/securityMarks`
     */
    name?: string | null;
  }
  /**
   * Information about the [Google Cloud Armor security policy](https://cloud.google.com/armor/docs/security-policy-overview) relevant to the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2SecurityPolicy {
    /**
     * The name of the Google Cloud Armor security policy, for example, "my-security-policy".
     */
    name?: string | null;
    /**
     * Whether or not the associated rule or policy is in preview mode.
     */
    preview?: boolean | null;
    /**
     * The type of Google Cloud Armor security policy for example, 'backend security policy', 'edge security policy', 'network edge security policy', or 'always-on DDoS protection'.
     */
    type?: string | null;
  }
  /**
   * Represents a posture that is deployed on Google Cloud by the Security Command Center Posture Management service. A posture contains one or more policy sets. A policy set is a group of policies that enforce a set of security rules on Google Cloud.
   */
  export interface Schema$GoogleCloudSecuritycenterV2SecurityPosture {
    /**
     * The name of the updated policy, for example, `projects/{project_id\}/policies/{constraint_name\}`.
     */
    changedPolicy?: string | null;
    /**
     * Name of the posture, for example, `CIS-Posture`.
     */
    name?: string | null;
    /**
     * The ID of the updated policy, for example, `compute-policy-1`.
     */
    policy?: string | null;
    /**
     * The details about a change in an updated policy that violates the deployed posture.
     */
    policyDriftDetails?: Schema$GoogleCloudSecuritycenterV2PolicyDriftDetails[];
    /**
     * The name of the updated policy set, for example, `cis-policyset`.
     */
    policySet?: string | null;
    /**
     * The name of the posture deployment, for example, `organizations/{org_id\}/posturedeployments/{posture_deployment_id\}`.
     */
    postureDeployment?: string | null;
    /**
     * The project, folder, or organization on which the posture is deployed, for example, `projects/{project_number\}`.
     */
    postureDeploymentResource?: string | null;
    /**
     * The version of the posture, for example, `c7cfa2a8`.
     */
    revisionId?: string | null;
  }
  /**
   * Resource value mapping for Sensitive Data Protection findings If any of these mappings have a resource value that is not unspecified, the resource_value field will be ignored when reading this configuration.
   */
  export interface Schema$GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping {
    /**
     * Resource value mapping for high-sensitivity Sensitive Data Protection findings
     */
    highSensitivityMapping?: string | null;
    /**
     * Resource value mapping for medium-sensitivity Sensitive Data Protection findings
     */
    mediumSensitivityMapping?: string | null;
  }
  /**
   * Identity delegation history of an authenticated service account.
   */
  export interface Schema$GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo {
    /**
     * The email address of a Google account.
     */
    principalEmail?: string | null;
    /**
     * A string representing the principal_subject associated with the identity. As compared to `principal_email`, supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name\}/subjects/{subject\}` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name\}[{subject\}]`
     */
    principalSubject?: string | null;
  }
  /**
   * Information about the static mute state. A static mute state overrides any dynamic mute rules that apply to this finding. The static mute state can be set by a static mute rule or by muting the finding directly.
   */
  export interface Schema$GoogleCloudSecuritycenterV2StaticMute {
    /**
     * When the static mute was applied.
     */
    applyTime?: string | null;
    /**
     * The static mute state. If the value is `MUTED` or `UNMUTED`, then the finding's overall mute state will have the same value.
     */
    state?: string | null;
  }
  /**
   * Represents a Kubernetes subject.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Subject {
    /**
     * Authentication type for the subject.
     */
    kind?: string | null;
    /**
     * Name for the subject.
     */
    name?: string | null;
    /**
     * Namespace for the subject.
     */
    ns?: string | null;
  }
  /**
   * Information about the ticket, if any, that is being used to track the resolution of the issue that is identified by this finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2TicketInfo {
    /**
     * The assignee of the ticket in the ticket system.
     */
    assignee?: string | null;
    /**
     * The description of the ticket in the ticket system.
     */
    description?: string | null;
    /**
     * The identifier of the ticket in the ticket system.
     */
    id?: string | null;
    /**
     * The latest status of the ticket, as reported by the ticket system.
     */
    status?: string | null;
    /**
     * The time when the ticket was last updated, as reported by the ticket system.
     */
    updateTime?: string | null;
    /**
     * The link to the ticket in the ticket system.
     */
    uri?: string | null;
  }
  /**
   * Contains details about a group of security issues that, when the issues occur together, represent a greater risk than when the issues occur independently. A group of such issues is referred to as a toxic combination.
   */
  export interface Schema$GoogleCloudSecuritycenterV2ToxicCombination {
    /**
     * The [Attack exposure score](https://cloud.google.com/security-command-center/docs/attack-exposure-learn#attack_exposure_scores) of this toxic combination. The score is a measure of how much this toxic combination exposes one or more high-value resources to potential attack.
     */
    attackExposureScore?: number | null;
    /**
     * List of resource names of findings associated with this toxic combination. For example, `organizations/123/sources/456/findings/789`.
     */
    relatedFindings?: string[] | null;
  }
  /**
   * Vertex AI-related information associated with the finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV2VertexAi {
    /**
     * Datasets associated with the finding.
     */
    datasets?: Schema$GoogleCloudSecuritycenterV2Dataset[];
    /**
     * Pipelines associated with the finding.
     */
    pipelines?: Schema$GoogleCloudSecuritycenterV2Pipeline[];
  }
  /**
   * Refers to common vulnerability fields e.g. cve, cvss, cwe etc.
   */
  export interface Schema$GoogleCloudSecuritycenterV2Vulnerability {
    /**
     * CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/)
     */
    cve?: Schema$GoogleCloudSecuritycenterV2Cve;
    /**
     * Represents one or more Common Weakness Enumeration (CWE) information on this vulnerability.
     */
    cwes?: Schema$GoogleCloudSecuritycenterV2Cwe[];
    /**
     * The fixed package is relevant to the finding.
     */
    fixedPackage?: Schema$GoogleCloudSecuritycenterV2Package;
    /**
     * The offending package is relevant to the finding.
     */
    offendingPackage?: Schema$GoogleCloudSecuritycenterV2Package;
    /**
     * Provider provided risk_score based on multiple factors. The higher the risk score, the more risky the vulnerability is.
     */
    providerRiskScore?: string | null;
    /**
     * Represents whether the vulnerability is reachable (detected via static analysis)
     */
    reachable?: boolean | null;
    /**
     * The security bulletin is relevant to this finding.
     */
    securityBulletin?: Schema$GoogleCloudSecuritycenterV2SecurityBulletin;
  }
  /**
   * A signature corresponding to a YARA rule.
   */
  export interface Schema$GoogleCloudSecuritycenterV2YaraRuleSignature {
    /**
     * The name of the YARA rule.
     */
    yaraRule?: string | null;
  }
  /**
   * Contains details about groups of which this finding is a member. A group is a collection of findings that are related in some way.
   */
  export interface Schema$GroupMembership {
    /**
     * ID of the group.
     */
    groupId?: string | null;
    /**
     * Type of group.
     */
    groupType?: string | null;
  }
  /**
   * Represents a particular IAM binding, which captures a member's role addition, removal, or state.
   */
  export interface Schema$IamBinding {
    /**
     * The action that was performed on a Binding.
     */
    action?: string | null;
    /**
     * A single identity requesting access for a Cloud Platform resource, for example, "foo@google.com".
     */
    member?: string | null;
    /**
     * Role that is assigned to "members". For example, "roles/viewer", "roles/editor", or "roles/owner".
     */
    role?: string | null;
  }
  /**
   * Represents what's commonly known as an _indicator of compromise_ (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise).
   */
  export interface Schema$Indicator {
    /**
     * List of domains associated to the Finding.
     */
    domains?: string[] | null;
    /**
     * The list of IP addresses that are associated with the finding.
     */
    ipAddresses?: string[] | null;
    /**
     * The list of matched signatures indicating that the given process is present in the environment.
     */
    signatures?: Schema$ProcessSignature[];
    /**
     * The list of URIs associated to the Findings.
     */
    uris?: string[] | null;
  }
  /**
   * IP rule information.
   */
  export interface Schema$IpRule {
    /**
     * Optional. An optional list of ports to which this rule applies. This field is only applicable for the UDP or (S)TCP protocols. Each entry must be either an integer or a range including a min and max port number.
     */
    portRanges?: Schema$PortRange[];
    /**
     * The IP protocol this rule applies to. This value can either be one of the following well known protocol strings (TCP, UDP, ICMP, ESP, AH, IPIP, SCTP) or a string representation of the integer value.
     */
    protocol?: string | null;
  }
  /**
   * IP rules associated with the finding.
   */
  export interface Schema$IpRules {
    /**
     * Tuple with allowed rules.
     */
    allowed?: Schema$Allowed;
    /**
     * Tuple with denied rules.
     */
    denied?: Schema$Denied;
    /**
     * If destination IP ranges are specified, the firewall rule applies only to traffic that has a destination IP address in these ranges. These ranges must be expressed in CIDR format. Only supports IPv4.
     */
    destinationIpRanges?: string[] | null;
    /**
     * The direction that the rule is applicable to, one of ingress or egress.
     */
    direction?: string | null;
    /**
     * Name of the network protocol service, such as FTP, that is exposed by the open port. Follows the naming convention available at: https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml.
     */
    exposedServices?: string[] | null;
    /**
     * If source IP ranges are specified, the firewall rule applies only to traffic that has a source IP address in these ranges. These ranges must be expressed in CIDR format. Only supports IPv4.
     */
    sourceIpRanges?: string[] | null;
  }
  /**
   * Describes a job
   */
  export interface Schema$Job {
    /**
     * Optional. If the job did not complete successfully, this field describes why.
     */
    errorCode?: number | null;
    /**
     * Optional. Gives the location where the job ran, such as `US` or `europe-west1`
     */
    location?: string | null;
    /**
     * The fully-qualified name for a job. e.g. `projects//jobs/`
     */
    name?: string | null;
    /**
     * Output only. State of the job, such as `RUNNING` or `PENDING`.
     */
    state?: string | null;
  }
  /**
   * Kernel mode rootkit signatures.
   */
  export interface Schema$KernelRootkit {
    /**
     * Rootkit name, when available.
     */
    name?: string | null;
    /**
     * True if unexpected modifications of kernel code memory are present.
     */
    unexpectedCodeModification?: boolean | null;
    /**
     * True if `ftrace` points are present with callbacks pointing to regions that are not in the expected kernel or module code range.
     */
    unexpectedFtraceHandler?: boolean | null;
    /**
     * True if interrupt handlers that are are not in the expected kernel or module code regions are present.
     */
    unexpectedInterruptHandler?: boolean | null;
    /**
     * True if kernel code pages that are not in the expected kernel or module code regions are present.
     */
    unexpectedKernelCodePages?: boolean | null;
    /**
     * True if `kprobe` points are present with callbacks pointing to regions that are not in the expected kernel or module code range.
     */
    unexpectedKprobeHandler?: boolean | null;
    /**
     * True if unexpected processes in the scheduler run queue are present. Such processes are in the run queue, but not in the process task list.
     */
    unexpectedProcessesInRunqueue?: boolean | null;
    /**
     * True if unexpected modifications of kernel read-only data memory are present.
     */
    unexpectedReadOnlyDataModification?: boolean | null;
    /**
     * True if system call handlers that are are not in the expected kernel or module code regions are present.
     */
    unexpectedSystemCallHandler?: boolean | null;
  }
  /**
   * Kubernetes-related attributes.
   */
  export interface Schema$Kubernetes {
    /**
     * Provides information on any Kubernetes access reviews (privilege checks) relevant to the finding.
     */
    accessReviews?: Schema$AccessReview[];
    /**
     * Provides Kubernetes role binding information for findings that involve [RoleBindings or ClusterRoleBindings](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control).
     */
    bindings?: Schema$GoogleCloudSecuritycenterV1Binding[];
    /**
     * GKE [node pools](https://cloud.google.com/kubernetes-engine/docs/concepts/node-pools) associated with the finding. This field contains node pool information for each node, when it is available.
     */
    nodePools?: Schema$NodePool[];
    /**
     * Provides Kubernetes [node](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture#nodes) information.
     */
    nodes?: Schema$Node[];
    /**
     * Kubernetes objects related to the finding.
     */
    objects?: Schema$Object[];
    /**
     * Kubernetes [Pods](https://cloud.google.com/kubernetes-engine/docs/concepts/pod) associated with the finding. This field contains Pod records for each container that is owned by a Pod.
     */
    pods?: Schema$Pod[];
    /**
     * Provides Kubernetes role information for findings that involve [Roles or ClusterRoles](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control).
     */
    roles?: Schema$Role[];
  }
  /**
   * Represents a generic name-value label. A label has separate name and value fields to support filtering with the `contains()` function. For more information, see [Filtering on array-type fields](https://cloud.google.com/security-command-center/docs/how-to-api-list-findings#array-contains-filtering).
   */
  export interface Schema$Label {
    /**
     * Name of the label.
     */
    name?: string | null;
    /**
     * Value that corresponds to the label's name.
     */
    value?: string | null;
  }
  /**
   * Contains information related to the load balancer associated with the finding.
   */
  export interface Schema$LoadBalancer {
    /**
     * The name of the load balancer associated with the finding.
     */
    name?: string | null;
  }
  /**
   * An individual entry in a log.
   */
  export interface Schema$LogEntry {
    /**
     * An individual entry in a log stored in Cloud Logging.
     */
    cloudLoggingEntry?: Schema$CloudLoggingEntry;
  }
  /**
   * A signature corresponding to memory page hashes.
   */
  export interface Schema$MemoryHashSignature {
    /**
     * The binary family.
     */
    binaryFamily?: string | null;
    /**
     * The list of memory hash detections contributing to the binary family match.
     */
    detections?: Schema$Detection[];
  }
  /**
   * MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org
   */
  export interface Schema$MitreAttack {
    /**
     * Additional MITRE ATT&CK tactics related to this finding, if any.
     */
    additionalTactics?: string[] | null;
    /**
     * Additional MITRE ATT&CK techniques related to this finding, if any, along with any of their respective parent techniques.
     */
    additionalTechniques?: string[] | null;
    /**
     * The MITRE ATT&CK tactic most closely represented by this finding, if any.
     */
    primaryTactic?: string | null;
    /**
     * The MITRE ATT&CK technique most closely represented by this finding, if any. primary_techniques is a repeated field because there are multiple levels of MITRE ATT&CK techniques. If the technique most closely represented by this finding is a sub-technique (e.g. `SCANNING_IP_BLOCKS`), both the sub-technique and its parent technique(s) will be listed (e.g. `SCANNING_IP_BLOCKS`, `ACTIVE_SCANNING`).
     */
    primaryTechniques?: string[] | null;
    /**
     * The MITRE ATT&CK version referenced by the above fields. E.g. "8".
     */
    version?: string | null;
  }
  /**
   * Mute information about the finding, including whether the finding has a static mute or any matching dynamic mute rules.
   */
  export interface Schema$MuteInfo {
    /**
     * The list of dynamic mute rules that currently match the finding.
     */
    dynamicMuteRecords?: Schema$DynamicMuteRecord[];
    /**
     * If set, the static mute applied to this finding. Static mutes override dynamic mutes. If unset, there is no static mute.
     */
    staticMute?: Schema$StaticMute;
  }
  /**
   * Contains information about a VPC network associated with the finding.
   */
  export interface Schema$Network {
    /**
     * The name of the VPC network resource, for example, `//compute.googleapis.com/projects/my-project/global/networks/my-network`.
     */
    name?: string | null;
  }
  /**
   * Kubernetes nodes associated with the finding.
   */
  export interface Schema$Node {
    /**
     * [Full resource name](https://google.aip.dev/122#full-resource-names) of the Compute Engine VM running the cluster node.
     */
    name?: string | null;
  }
  /**
   * Provides GKE node pool information.
   */
  export interface Schema$NodePool {
    /**
     * Kubernetes node pool name.
     */
    name?: string | null;
    /**
     * Nodes associated with the finding.
     */
    nodes?: Schema$Node[];
  }
  /**
   * Represents a Jupyter notebook IPYNB file, such as a [Colab Enterprise notebook](https://cloud.google.com/colab/docs/introduction) file, that is associated with a finding.
   */
  export interface Schema$Notebook {
    /**
     * The user ID of the latest author to modify the notebook.
     */
    lastAuthor?: string | null;
    /**
     * The name of the notebook.
     */
    name?: string | null;
    /**
     * The most recent time the notebook was updated.
     */
    notebookUpdateTime?: string | null;
    /**
     * The source notebook service, for example, "Colab Enterprise".
     */
    service?: string | null;
  }
  /**
   * Kubernetes object related to the finding, uniquely identified by GKNN. Used if the object Kind is not one of Pod, Node, NodePool, Binding, or AccessReview.
   */
  export interface Schema$Object {
    /**
     * Pod containers associated with this finding, if any.
     */
    containers?: Schema$Container[];
    /**
     * Kubernetes object group, such as "policy.k8s.io/v1".
     */
    group?: string | null;
    /**
     * Kubernetes object kind, such as "Namespace".
     */
    kind?: string | null;
    /**
     * Kubernetes object name. For details see https://kubernetes.io/docs/concepts/overview/working-with-objects/names/.
     */
    name?: string | null;
    /**
     * Kubernetes object namespace. Must be a valid DNS label. Named "ns" to avoid collision with C++ namespace keyword. For details see https://kubernetes.io/docs/tasks/administer-cluster/namespaces/.
     */
    ns?: string | null;
  }
  /**
   * Contains information about the org policies associated with the finding.
   */
  export interface Schema$OrgPolicy {
    /**
     * The resource name of the org policy. Example: "organizations/{organization_id\}/policies/{constraint_name\}"
     */
    name?: string | null;
  }
  /**
   * Package is a generic definition of a package.
   */
  export interface Schema$Package {
    /**
     * The CPE URI where the vulnerability was detected.
     */
    cpeUri?: string | null;
    /**
     * The name of the package where the vulnerability was detected.
     */
    packageName?: string | null;
    /**
     * Type of package, for example, os, maven, or go.
     */
    packageType?: string | null;
    /**
     * The version of the package.
     */
    packageVersion?: string | null;
  }
  /**
   * Vertex AI training pipeline associated with the finding.
   */
  export interface Schema$Pipeline {
    /**
     * The user defined display name of pipeline, e.g. plants-classification
     */
    displayName?: string | null;
    /**
     * Resource name of the pipeline, e.g. projects/{project\}/locations/{location\}/trainingPipelines/5253428229225578496
     */
    name?: string | null;
  }
  /**
   * A Kubernetes Pod.
   */
  export interface Schema$Pod {
    /**
     * Pod containers associated with this finding, if any.
     */
    containers?: Schema$Container[];
    /**
     * Pod labels. For Kubernetes containers, these are applied to the container.
     */
    labels?: Schema$Label[];
    /**
     * Kubernetes Pod name.
     */
    name?: string | null;
    /**
     * Kubernetes Pod namespace.
     */
    ns?: string | null;
  }
  /**
   * The policy field that violates the deployed posture and its expected and detected values.
   */
  export interface Schema$PolicyDriftDetails {
    /**
     * The detected value that violates the deployed posture, for example, `false` or `allowed_values={"projects/22831892"\}`.
     */
    detectedValue?: string | null;
    /**
     * The value of this field that was configured in a posture, for example, `true` or `allowed_values={"projects/29831892"\}`.
     */
    expectedValue?: string | null;
    /**
     * The name of the updated field, for example constraint.implementation.policy_rules[0].enforce
     */
    field?: string | null;
  }
  /**
   * A port range which is inclusive of the min and max values. Values are between 0 and 2^16-1. The max can be equal / must be not smaller than the min value. If min and max are equal this indicates that it is a single port.
   */
  export interface Schema$PortRange {
    /**
     * Maximum port value.
     */
    max?: string | null;
    /**
     * Minimum port value.
     */
    min?: string | null;
  }
  /**
   * Represents an operating system process.
   */
  export interface Schema$Process {
    /**
     * Process arguments as JSON encoded strings.
     */
    args?: string[] | null;
    /**
     * True if `args` is incomplete.
     */
    argumentsTruncated?: boolean | null;
    /**
     * File information for the process executable.
     */
    binary?: Schema$File;
    /**
     * Process environment variables.
     */
    envVariables?: Schema$EnvironmentVariable[];
    /**
     * True if `env_variables` is incomplete.
     */
    envVariablesTruncated?: boolean | null;
    /**
     * File information for libraries loaded by the process.
     */
    libraries?: Schema$File[];
    /**
     * The process name, as displayed in utilities like `top` and `ps`. This name can be accessed through `/proc/[pid]/comm` and changed with `prctl(PR_SET_NAME)`.
     */
    name?: string | null;
    /**
     * The parent process ID.
     */
    parentPid?: string | null;
    /**
     * The process ID.
     */
    pid?: string | null;
    /**
     * When the process represents the invocation of a script, `binary` provides information about the interpreter, while `script` provides information about the script file provided to the interpreter.
     */
    script?: Schema$File;
    /**
     * The ID of the user that executed the process. E.g. If this is the root user this will always be 0.
     */
    userId?: string | null;
  }
  /**
   * Indicates what signature matched this process.
   */
  export interface Schema$ProcessSignature {
    /**
     * Signature indicating that a binary family was matched.
     */
    memoryHashSignature?: Schema$MemoryHashSignature;
    /**
     * Describes the type of resource associated with the signature.
     */
    signatureType?: string | null;
    /**
     * Signature indicating that a YARA rule was matched.
     */
    yaraRuleSignature?: Schema$YaraRuleSignature;
  }
  /**
   * Resource capturing the settings for the Rapid Vulnerability Detection service.
   */
  export interface Schema$RapidVulnerabilityDetectionSettings {
    /**
     * The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.
     */
    modules?: {[key: string]: Schema$Config} | null;
    /**
     * The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization\}/rapidVulnerabilityDetectionSettings * folders/{folder\}/rapidVulnerabilityDetectionSettings * projects/{project\}/rapidVulnerabilityDetectionSettings
     */
    name?: string | null;
    /**
     * The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.
     */
    serviceEnablementState?: string | null;
    /**
     * Output only. The time the settings were last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Additional Links
   */
  export interface Schema$Reference {
    /**
     * Source of the reference e.g. NVD
     */
    source?: string | null;
    /**
     * Uri for the mentioned source e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527.
     */
    uri?: string | null;
  }
  /**
   * Information about the requests relevant to the finding.
   */
  export interface Schema$Requests {
    /**
     * Allowed RPS (requests per second) over the long term.
     */
    longTermAllowed?: number | null;
    /**
     * Denied RPS (requests per second) over the long term.
     */
    longTermDenied?: number | null;
    /**
     * For 'Increasing deny ratio', the ratio is the denied traffic divided by the allowed traffic. For 'Allowed traffic spike', the ratio is the allowed traffic in the short term divided by allowed traffic in the long term.
     */
    ratio?: number | null;
    /**
     * Allowed RPS (requests per second) in the short term.
     */
    shortTermAllowed?: number | null;
  }
  /**
   * Represents the path of resources leading up to the resource this finding is about.
   */
  export interface Schema$ResourcePath {
    /**
     * The list of nodes that make the up resource path, ordered from lowest level to highest level.
     */
    nodes?: Schema$ResourcePathNode[];
  }
  /**
   * A node within the resource path. Each node represents a resource within the resource hierarchy.
   */
  export interface Schema$ResourcePathNode {
    /**
     * The display name of the resource this node represents.
     */
    displayName?: string | null;
    /**
     * The ID of the resource this node represents.
     */
    id?: string | null;
    /**
     * The type of resource this node represents.
     */
    nodeType?: string | null;
  }
  /**
   * Kubernetes Role or ClusterRole.
   */
  export interface Schema$Role {
    /**
     * Role type.
     */
    kind?: string | null;
    /**
     * Role name.
     */
    name?: string | null;
    /**
     * Role namespace.
     */
    ns?: string | null;
  }
  /**
   * SecurityBulletin are notifications of vulnerabilities of Google products.
   */
  export interface Schema$SecurityBulletin {
    /**
     * ID of the bulletin corresponding to the vulnerability.
     */
    bulletinId?: string | null;
    /**
     * Submission time of this Security Bulletin.
     */
    submissionTime?: string | null;
    /**
     * This represents a version that the cluster receiving this notification should be upgraded to, based on its current version. For example, 1.15.0
     */
    suggestedUpgradeVersion?: string | null;
  }
  /**
   * Resource capturing the settings for Security Center.
   */
  export interface Schema$SecurityCenterSettings {
    /**
     * The resource name of the project to send logs to. This project must be part of the organization this resource resides in. The format is `projects/{project_id\}`. An empty value disables logging. This value is only referenced by services that support log sink. Please refer to the documentation for an updated list of compatible services. This may only be specified for organization level onboarding.
     */
    logSinkProject?: string | null;
    /**
     * The resource name of the SecurityCenterSettings. Format: organizations/{organization\}/securityCenterSettings Format: folders/{folder\}/securityCenterSettings Format: projects/{project\}/securityCenterSettings
     */
    name?: string | null;
    /**
     * Output only. Timestamp of when the customer organization was onboarded to SCC.
     */
    onboardingTime?: string | null;
    /**
     * Output only. The organization level service account to be used for security center components.
     */
    orgServiceAccount?: string | null;
  }
  /**
   * Resource capturing the settings for the Security Health Analytics service.
   */
  export interface Schema$SecurityHealthAnalyticsSettings {
    /**
     * The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's configuration.
     */
    modules?: {[key: string]: Schema$Config} | null;
    /**
     * Identifier. The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     */
    name?: string | null;
    /**
     * Output only. The service account used by Security Health Analytics detectors.
     */
    serviceAccount?: string | null;
    /**
     * The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.
     */
    serviceEnablementState?: string | null;
    /**
     * Output only. The time the settings were last updated.
     */
    updateTime?: string | null;
  }
  /**
   * User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.
   */
  export interface Schema$SecurityMarks {
    /**
     * The canonical name of the marks. Examples: "organizations/{organization_id\}/assets/{asset_id\}/securityMarks" "folders/{folder_id\}/assets/{asset_id\}/securityMarks" "projects/{project_number\}/assets/{asset_id\}/securityMarks" "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks" "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks" "projects/{project_number\}/sources/{source_id\}/findings/{finding_id\}/securityMarks"
     */
    canonicalName?: string | null;
    /**
     * Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive)
     */
    marks?: {[key: string]: string} | null;
    /**
     * The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id\}/assets/{asset_id\}/securityMarks" "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks".
     */
    name?: string | null;
  }
  /**
   * Information about the [Google Cloud Armor security policy](https://cloud.google.com/armor/docs/security-policy-overview) relevant to the finding.
   */
  export interface Schema$SecurityPolicy {
    /**
     * The name of the Google Cloud Armor security policy, for example, "my-security-policy".
     */
    name?: string | null;
    /**
     * Whether or not the associated rule or policy is in preview mode.
     */
    preview?: boolean | null;
    /**
     * The type of Google Cloud Armor security policy for example, 'backend security policy', 'edge security policy', 'network edge security policy', or 'always-on DDoS protection'.
     */
    type?: string | null;
  }
  /**
   * Represents a posture that is deployed on Google Cloud by the Security Command Center Posture Management service. A posture contains one or more policy sets. A policy set is a group of policies that enforce a set of security rules on Google Cloud.
   */
  export interface Schema$SecurityPosture {
    /**
     * The name of the updated policy, for example, `projects/{project_id\}/policies/{constraint_name\}`.
     */
    changedPolicy?: string | null;
    /**
     * Name of the posture, for example, `CIS-Posture`.
     */
    name?: string | null;
    /**
     * The ID of the updated policy, for example, `compute-policy-1`.
     */
    policy?: string | null;
    /**
     * The details about a change in an updated policy that violates the deployed posture.
     */
    policyDriftDetails?: Schema$PolicyDriftDetails[];
    /**
     * The name of the updated policyset, for example, `cis-policyset`.
     */
    policySet?: string | null;
    /**
     * The name of the posture deployment, for example, `organizations/{org_id\}/posturedeployments/{posture_deployment_id\}`.
     */
    postureDeployment?: string | null;
    /**
     * The project, folder, or organization on which the posture is deployed, for example, `projects/{project_number\}`.
     */
    postureDeploymentResource?: string | null;
    /**
     * The version of the posture, for example, `c7cfa2a8`.
     */
    revisionId?: string | null;
  }
  /**
   * Identity delegation history of an authenticated service account.
   */
  export interface Schema$ServiceAccountDelegationInfo {
    /**
     * The email address of a Google account.
     */
    principalEmail?: string | null;
    /**
     * A string representing the principal_subject associated with the identity. As compared to `principal_email`, supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name\}/subjects/{subject\}` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name\}[{subject\}]`
     */
    principalSubject?: string | null;
  }
  /**
   * Information about the static mute state. A static mute state overrides any dynamic mute rules that apply to this finding. The static mute state can be set by a static mute rule or by muting the finding directly.
   */
  export interface Schema$StaticMute {
    /**
     * When the static mute was applied.
     */
    applyTime?: string | null;
    /**
     * The static mute state. If the value is `MUTED` or `UNMUTED`, then the finding's overall mute state will have the same value.
     */
    state?: string | null;
  }
  /**
   * Represents a Kubernetes subject.
   */
  export interface Schema$Subject {
    /**
     * Authentication type for the subject.
     */
    kind?: string | null;
    /**
     * Name for the subject.
     */
    name?: string | null;
    /**
     * Namespace for the subject.
     */
    ns?: string | null;
  }
  /**
   * Resource capturing the state of an organization's subscription.
   */
  export interface Schema$Subscription {
    /**
     * The details of the most recent active subscription. If there has never been a subscription this will be empty.
     */
    details?: Schema$Details;
    /**
     * The resource name of the subscription. Format: organizations/{organization\}/subscription
     */
    name?: string | null;
    /**
     * The tier of SCC features this organization currently has access to.
     */
    tier?: string | null;
  }
  /**
   * Information about the ticket, if any, that is being used to track the resolution of the issue that is identified by this finding.
   */
  export interface Schema$TicketInfo {
    /**
     * The assignee of the ticket in the ticket system.
     */
    assignee?: string | null;
    /**
     * The description of the ticket in the ticket system.
     */
    description?: string | null;
    /**
     * The identifier of the ticket in the ticket system.
     */
    id?: string | null;
    /**
     * The latest status of the ticket, as reported by the ticket system.
     */
    status?: string | null;
    /**
     * The time when the ticket was last updated, as reported by the ticket system.
     */
    updateTime?: string | null;
    /**
     * The link to the ticket in the ticket system.
     */
    uri?: string | null;
  }
  /**
   * Contains details about a group of security issues that, when the issues occur together, represent a greater risk than when the issues occur independently. A group of such issues is referred to as a toxic combination.
   */
  export interface Schema$ToxicCombination {
    /**
     * The [Attack exposure score](https://cloud.google.com/security-command-center/docs/attack-exposure-learn#attack_exposure_scores) of this toxic combination. The score is a measure of how much this toxic combination exposes one or more high-value resources to potential attack.
     */
    attackExposureScore?: number | null;
    /**
     * List of resource names of findings associated with this toxic combination. For example, `organizations/123/sources/456/findings/789`.
     */
    relatedFindings?: string[] | null;
  }
  /**
   * Vertex AI-related information associated with the finding.
   */
  export interface Schema$VertexAi {
    /**
     * Datasets associated with the finding.
     */
    datasets?: Schema$Dataset[];
    /**
     * Pipelines associated with the finding.
     */
    pipelines?: Schema$Pipeline[];
  }
  /**
   * Resource capturing the settings for the Virtual Machine Threat Detection service.
   */
  export interface Schema$VirtualMachineThreatDetectionSettings {
    /**
     * The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's configuration.
     */
    modules?: {[key: string]: Schema$Config} | null;
    /**
     * Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     */
    name?: string | null;
    /**
     * Output only. The service account used by Virtual Machine Threat Detection detectors.
     */
    serviceAccount?: string | null;
    /**
     * The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.
     */
    serviceEnablementState?: string | null;
    /**
     * Output only. The time the settings were last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Refers to common vulnerability fields e.g. cve, cvss, cwe etc.
   */
  export interface Schema$Vulnerability {
    /**
     * CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/)
     */
    cve?: Schema$Cve;
    /**
     * Represents one or more Common Weakness Enumeration (CWE) information on this vulnerability.
     */
    cwes?: Schema$Cwe[];
    /**
     * The fixed package is relevant to the finding.
     */
    fixedPackage?: Schema$Package;
    /**
     * The offending package is relevant to the finding.
     */
    offendingPackage?: Schema$Package;
    /**
     * Provider provided risk_score based on multiple factors. The higher the risk score, the more risky the vulnerability is.
     */
    providerRiskScore?: string | null;
    /**
     * Represents whether the vulnerability is reachable (detected via static analysis)
     */
    reachable?: boolean | null;
    /**
     * The security bulletin is relevant to this finding.
     */
    securityBulletin?: Schema$SecurityBulletin;
  }
  /**
   * Vulnerability count by severity.
   */
  export interface Schema$VulnerabilityCountBySeverity {
    /**
     * Key is the Severity enum.
     */
    severityToFindingCount?: {[key: string]: string} | null;
  }
  /**
   * Result containing the properties and count of a VulnerabilitySnapshot request.
   */
  export interface Schema$VulnerabilitySnapshot {
    /**
     * The cloud provider for the vulnerability snapshot.
     */
    cloudProvider?: string | null;
    /**
     * The vulnerability count by severity.
     */
    findingCount?: Schema$VulnerabilityCountBySeverity;
    /**
     * Identifier. The vulnerability snapshot name. Format: //locations//vulnerabilitySnapshots/
     */
    name?: string | null;
    /**
     * The time that the snapshot was taken.
     */
    snapshotTime?: string | null;
  }
  /**
   * Resource capturing the settings for the Web Security Scanner service.
   */
  export interface Schema$WebSecurityScannerSettings {
    /**
     * The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's configuration.
     */
    modules?: {[key: string]: Schema$Config} | null;
    /**
     * Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     */
    name?: string | null;
    /**
     * The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.
     */
    serviceEnablementState?: string | null;
    /**
     * Output only. The time the settings were last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A signature corresponding to a YARA rule.
   */
  export interface Schema$YaraRuleSignature {
    /**
     * The name of the YARA rule.
     */
    yaraRule?: string | null;
  }

  export class Resource$Folders {
    context: APIRequestContext;
    containerThreatDetectionSettings: Resource$Folders$Containerthreatdetectionsettings;
    eventThreatDetectionSettings: Resource$Folders$Eventthreatdetectionsettings;
    rapidVulnerabilityDetectionSettings: Resource$Folders$Rapidvulnerabilitydetectionsettings;
    securityHealthAnalyticsSettings: Resource$Folders$Securityhealthanalyticssettings;
    virtualMachineThreatDetectionSettings: Resource$Folders$Virtualmachinethreatdetectionsettings;
    webSecurityScannerSettings: Resource$Folders$Websecurityscannersettings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.containerThreatDetectionSettings =
        new Resource$Folders$Containerthreatdetectionsettings(this.context);
      this.eventThreatDetectionSettings =
        new Resource$Folders$Eventthreatdetectionsettings(this.context);
      this.rapidVulnerabilityDetectionSettings =
        new Resource$Folders$Rapidvulnerabilitydetectionsettings(this.context);
      this.securityHealthAnalyticsSettings =
        new Resource$Folders$Securityhealthanalyticssettings(this.context);
      this.virtualMachineThreatDetectionSettings =
        new Resource$Folders$Virtualmachinethreatdetectionsettings(
          this.context
        );
      this.webSecurityScannerSettings =
        new Resource$Folders$Websecurityscannersettings(this.context);
    }

    /**
     * Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.folders.getContainerThreatDetectionSettings({
     *     // Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *     name: 'folders/my-folder/containerThreatDetectionSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getContainerThreatDetectionSettings(
      params: Params$Resource$Folders$Getcontainerthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getContainerThreatDetectionSettings(
      params?: Params$Resource$Folders$Getcontainerthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Folders$Getcontainerthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Folders$Getcontainerthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Folders$Getcontainerthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Getcontainerthreatdetectionsettings
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Getcontainerthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Getcontainerthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Get the EventThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetEventThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateEventThreatDetectionSettings for this purpose.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.folders.getEventThreatDetectionSettings({
     *     // Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     *     name: 'folders/my-folder/eventThreatDetectionSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getEventThreatDetectionSettings(
      params: Params$Resource$Folders$Geteventthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getEventThreatDetectionSettings(
      params?: Params$Resource$Folders$Geteventthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>;
    getEventThreatDetectionSettings(
      params: Params$Resource$Folders$Geteventthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getEventThreatDetectionSettings(
      params: Params$Resource$Folders$Geteventthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    getEventThreatDetectionSettings(
      params: Params$Resource$Folders$Geteventthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    getEventThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    getEventThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Geteventthreatdetectionsettings
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Geteventthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Geteventthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Get the RapidVulnerabilityDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetRapidVulnerabilityDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateRapidVulnerabilityDetectionSettings for this purpose.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.folders.getRapidVulnerabilityDetectionSettings({
     *       // Required. The name of the RapidVulnerabilityDetectionSettings to retrieve. Formats: * organizations/{organization\}/rapidVulnerabilityDetectionSettings * folders/{folder\}/rapidVulnerabilityDetectionSettings * projects/{project\}/rapidVulnerabilityDetectionSettings
     *       name: 'folders/my-folder/rapidVulnerabilityDetectionSettings',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Folders$Getrapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getRapidVulnerabilityDetectionSettings(
      params?: Params$Resource$Folders$Getrapidvulnerabilitydetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
    >;
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Folders$Getrapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Folders$Getrapidvulnerabilitydetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Folders$Getrapidvulnerabilitydetectionsettings,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Getrapidvulnerabilitydetectionsettings
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Getrapidvulnerabilitydetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Getrapidvulnerabilitydetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Get the SecurityCenterSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.folders.getSecurityCenterSettings({
     *     // Required. The name of the SecurityCenterSettings to retrieve. Format: organizations/{organization\}/securityCenterSettings Format: folders/{folder\}/securityCenterSettings Format: projects/{project\}/securityCenterSettings
     *     name: 'folders/my-folder/securityCenterSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "logSinkProject": "my_logSinkProject",
     *   //   "name": "my_name",
     *   //   "onboardingTime": "my_onboardingTime",
     *   //   "orgServiceAccount": "my_orgServiceAccount"
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
    getSecurityCenterSettings(
      params: Params$Resource$Folders$Getsecuritycentersettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSecurityCenterSettings(
      params?: Params$Resource$Folders$Getsecuritycentersettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityCenterSettings>>;
    getSecurityCenterSettings(
      params: Params$Resource$Folders$Getsecuritycentersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSecurityCenterSettings(
      params: Params$Resource$Folders$Getsecuritycentersettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityCenterSettings>,
      callback: BodyResponseCallback<Schema$SecurityCenterSettings>
    ): void;
    getSecurityCenterSettings(
      params: Params$Resource$Folders$Getsecuritycentersettings,
      callback: BodyResponseCallback<Schema$SecurityCenterSettings>
    ): void;
    getSecurityCenterSettings(
      callback: BodyResponseCallback<Schema$SecurityCenterSettings>
    ): void;
    getSecurityCenterSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Getsecuritycentersettings
        | BodyResponseCallback<Schema$SecurityCenterSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityCenterSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityCenterSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityCenterSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Getsecuritycentersettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Getsecuritycentersettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SecurityCenterSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityCenterSettings>(parameters);
      }
    }

    /**
     * Get the SecurityHealthAnalyticsSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetSecurityHealthAnalyticsSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateSecurityHealthAnalyticsSettings for this purpose.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.folders.getSecurityHealthAnalyticsSettings({
     *     // Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     *     name: 'folders/my-folder/securityHealthAnalyticsSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Folders$Getsecurityhealthanalyticssettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSecurityHealthAnalyticsSettings(
      params?: Params$Resource$Folders$Getsecurityhealthanalyticssettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>;
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Folders$Getsecurityhealthanalyticssettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Folders$Getsecurityhealthanalyticssettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Folders$Getsecurityhealthanalyticssettings,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    getSecurityHealthAnalyticsSettings(
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    getSecurityHealthAnalyticsSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Getsecurityhealthanalyticssettings
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Getsecurityhealthanalyticssettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Getsecurityhealthanalyticssettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters
        );
      }
    }

    /**
     * Get the VirtualMachineThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetVirtualMachineThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateVirtualMachineThreatDetectionSettings for this purpose.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.folders.getVirtualMachineThreatDetectionSettings({
     *       // Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     *       name: 'folders/my-folder/virtualMachineThreatDetectionSettings',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Folders$Getvirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getVirtualMachineThreatDetectionSettings(
      params?: Params$Resource$Folders$Getvirtualmachinethreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
    >;
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Folders$Getvirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Folders$Getvirtualmachinethreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Folders$Getvirtualmachinethreatdetectionsettings,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Getvirtualmachinethreatdetectionsettings
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Getvirtualmachinethreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Getvirtualmachinethreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Get the WebSecurityScannerSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetWebSecurityScannerSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateWebSecurityScannerSettings for this purpose.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.folders.getWebSecurityScannerSettings({
     *     // Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     *     name: 'folders/my-folder/webSecurityScannerSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getWebSecurityScannerSettings(
      params: Params$Resource$Folders$Getwebsecurityscannersettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getWebSecurityScannerSettings(
      params?: Params$Resource$Folders$Getwebsecurityscannersettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>;
    getWebSecurityScannerSettings(
      params: Params$Resource$Folders$Getwebsecurityscannersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getWebSecurityScannerSettings(
      params: Params$Resource$Folders$Getwebsecurityscannersettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    getWebSecurityScannerSettings(
      params: Params$Resource$Folders$Getwebsecurityscannersettings,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    getWebSecurityScannerSettings(
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    getWebSecurityScannerSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Getwebsecurityscannersettings
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Getwebsecurityscannersettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Getwebsecurityscannersettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WebSecurityScannerSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebSecurityScannerSettings>(parameters);
      }
    }

    /**
     * Update the ContainerThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.folders.updateContainerThreatDetectionSettings({
     *       // Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *       name: 'folders/my-folder/containerThreatDetectionSettings',
     *       // The list of fields to be updated.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceAccount": "my_serviceAccount",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Folders$Updatecontainerthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateContainerThreatDetectionSettings(
      params?: Params$Resource$Folders$Updatecontainerthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Folders$Updatecontainerthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Folders$Updatecontainerthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Folders$Updatecontainerthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Updatecontainerthreatdetectionsettings
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Updatecontainerthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Updatecontainerthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Update the EventThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.folders.updateEventThreatDetectionSettings({
     *     // Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     *     name: 'folders/my-folder/eventThreatDetectionSettings',
     *     // The list of fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "modules": {},
     *       //   "name": "my_name",
     *       //   "serviceEnablementState": "my_serviceEnablementState",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateEventThreatDetectionSettings(
      params: Params$Resource$Folders$Updateeventthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateEventThreatDetectionSettings(
      params?: Params$Resource$Folders$Updateeventthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>;
    updateEventThreatDetectionSettings(
      params: Params$Resource$Folders$Updateeventthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateEventThreatDetectionSettings(
      params: Params$Resource$Folders$Updateeventthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    updateEventThreatDetectionSettings(
      params: Params$Resource$Folders$Updateeventthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    updateEventThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    updateEventThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Updateeventthreatdetectionsettings
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Updateeventthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Updateeventthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Update the RapidVulnerabilityDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.folders.updateRapidVulnerabilityDetectionSettings({
     *       // The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization\}/rapidVulnerabilityDetectionSettings * folders/{folder\}/rapidVulnerabilityDetectionSettings * projects/{project\}/rapidVulnerabilityDetectionSettings
     *       name: 'folders/my-folder/rapidVulnerabilityDetectionSettings',
     *       // The list of fields to be updated.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Folders$Updaterapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateRapidVulnerabilityDetectionSettings(
      params?: Params$Resource$Folders$Updaterapidvulnerabilitydetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
    >;
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Folders$Updaterapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Folders$Updaterapidvulnerabilitydetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Folders$Updaterapidvulnerabilitydetectionsettings,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Updaterapidvulnerabilitydetectionsettings
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Updaterapidvulnerabilitydetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Updaterapidvulnerabilitydetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Update the SecurityHealthAnalyticsSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.folders.updateSecurityHealthAnalyticsSettings({
     *       // Identifier. The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     *       name: 'folders/my-folder/securityHealthAnalyticsSettings',
     *       // The list of fields to be updated.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceAccount": "my_serviceAccount",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Folders$Updatesecurityhealthanalyticssettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateSecurityHealthAnalyticsSettings(
      params?: Params$Resource$Folders$Updatesecurityhealthanalyticssettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>;
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Folders$Updatesecurityhealthanalyticssettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Folders$Updatesecurityhealthanalyticssettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Folders$Updatesecurityhealthanalyticssettings,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Updatesecurityhealthanalyticssettings
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Updatesecurityhealthanalyticssettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Updatesecurityhealthanalyticssettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters
        );
      }
    }

    /**
     * Update the VirtualMachineThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.folders.updateVirtualMachineThreatDetectionSettings({
     *       // Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     *       name: 'folders/my-folder/virtualMachineThreatDetectionSettings',
     *       // The list of fields to be updated.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceAccount": "my_serviceAccount",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Folders$Updatevirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateVirtualMachineThreatDetectionSettings(
      params?: Params$Resource$Folders$Updatevirtualmachinethreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
    >;
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Folders$Updatevirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Folders$Updatevirtualmachinethreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Folders$Updatevirtualmachinethreatdetectionsettings,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Updatevirtualmachinethreatdetectionsettings
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Updatevirtualmachinethreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Updatevirtualmachinethreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Update the WebSecurityScannerSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.folders.updateWebSecurityScannerSettings({
     *     // Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     *     name: 'folders/my-folder/webSecurityScannerSettings',
     *     // The list of fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "modules": {},
     *       //   "name": "my_name",
     *       //   "serviceEnablementState": "my_serviceEnablementState",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateWebSecurityScannerSettings(
      params: Params$Resource$Folders$Updatewebsecurityscannersettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateWebSecurityScannerSettings(
      params?: Params$Resource$Folders$Updatewebsecurityscannersettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Folders$Updatewebsecurityscannersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Folders$Updatewebsecurityscannersettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Folders$Updatewebsecurityscannersettings,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    updateWebSecurityScannerSettings(
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    updateWebSecurityScannerSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Updatewebsecurityscannersettings
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Updatewebsecurityscannersettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Updatewebsecurityscannersettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WebSecurityScannerSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebSecurityScannerSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Folders$Getcontainerthreatdetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Geteventthreatdetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Getrapidvulnerabilitydetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the RapidVulnerabilityDetectionSettings to retrieve. Formats: * organizations/{organization\}/rapidVulnerabilityDetectionSettings * folders/{folder\}/rapidVulnerabilityDetectionSettings * projects/{project\}/rapidVulnerabilityDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Getsecuritycentersettings
    extends StandardParameters {
    /**
     * Required. The name of the SecurityCenterSettings to retrieve. Format: organizations/{organization\}/securityCenterSettings Format: folders/{folder\}/securityCenterSettings Format: projects/{project\}/securityCenterSettings
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Getsecurityhealthanalyticssettings
    extends StandardParameters {
    /**
     * Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Getvirtualmachinethreatdetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Getwebsecurityscannersettings
    extends StandardParameters {
    /**
     * Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Updatecontainerthreatdetectionsettings
    extends StandardParameters {
    /**
     * Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ContainerThreatDetectionSettings;
  }
  export interface Params$Resource$Folders$Updateeventthreatdetectionsettings
    extends StandardParameters {
    /**
     * Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EventThreatDetectionSettings;
  }
  export interface Params$Resource$Folders$Updaterapidvulnerabilitydetectionsettings
    extends StandardParameters {
    /**
     * The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization\}/rapidVulnerabilityDetectionSettings * folders/{folder\}/rapidVulnerabilityDetectionSettings * projects/{project\}/rapidVulnerabilityDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RapidVulnerabilityDetectionSettings;
  }
  export interface Params$Resource$Folders$Updatesecurityhealthanalyticssettings
    extends StandardParameters {
    /**
     * Identifier. The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SecurityHealthAnalyticsSettings;
  }
  export interface Params$Resource$Folders$Updatevirtualmachinethreatdetectionsettings
    extends StandardParameters {
    /**
     * Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VirtualMachineThreatDetectionSettings;
  }
  export interface Params$Resource$Folders$Updatewebsecurityscannersettings
    extends StandardParameters {
    /**
     * Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WebSecurityScannerSettings;
  }

  export class Resource$Folders$Containerthreatdetectionsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.folders.containerThreatDetectionSettings.calculate({
     *       // Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *       name: 'folders/my-folder/containerThreatDetectionSettings',
     *       // Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     *       showEligibleModulesOnly: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Folders$Containerthreatdetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Folders$Containerthreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    calculate(
      params: Params$Resource$Folders$Containerthreatdetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Folders$Containerthreatdetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Folders$Containerthreatdetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Folders$Containerthreatdetectionsettings$Calculate
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Containerthreatdetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Containerthreatdetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Containerthreatdetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
    /**
     * Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Folders$Eventthreatdetectionsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective EventThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.folders.eventThreatDetectionSettings.calculate({
     *       // Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     *       name: 'folders/my-folder/eventThreatDetectionSettings',
     *       // Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     *       showEligibleModulesOnly: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Folders$Eventthreatdetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Folders$Eventthreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>;
    calculate(
      params: Params$Resource$Folders$Eventthreatdetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Folders$Eventthreatdetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Folders$Eventthreatdetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Folders$Eventthreatdetectionsettings$Calculate
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Eventthreatdetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Eventthreatdetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Eventthreatdetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     */
    name?: string;
    /**
     * Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Folders$Rapidvulnerabilitydetectionsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective RapidVulnerabilityDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.folders.rapidVulnerabilityDetectionSettings.calculate({
     *       // Required. The name of the RapidVulnerabilityDetectionSettings to calculate. Formats: * organizations/{organization\}/rapidVulnerabilityDetectionSettings * folders/{folder\}/rapidVulnerabilityDetectionSettings * projects/{project\}/rapidVulnerabilityDetectionSettings
     *       name: 'folders/my-folder/rapidVulnerabilityDetectionSettings',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Folders$Rapidvulnerabilitydetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Folders$Rapidvulnerabilitydetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
    >;
    calculate(
      params: Params$Resource$Folders$Rapidvulnerabilitydetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Folders$Rapidvulnerabilitydetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Folders$Rapidvulnerabilitydetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Folders$Rapidvulnerabilitydetectionsettings$Calculate
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Rapidvulnerabilitydetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Rapidvulnerabilitydetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Rapidvulnerabilitydetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the RapidVulnerabilityDetectionSettings to calculate. Formats: * organizations/{organization\}/rapidVulnerabilityDetectionSettings * folders/{folder\}/rapidVulnerabilityDetectionSettings * projects/{project\}/rapidVulnerabilityDetectionSettings
     */
    name?: string;
  }

  export class Resource$Folders$Securityhealthanalyticssettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective SecurityHealthAnalyticsSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.folders.securityHealthAnalyticsSettings.calculate({
     *       // Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     *       name: 'folders/my-folder/securityHealthAnalyticsSettings',
     *       // Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     *       showEligibleModulesOnly: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Folders$Securityhealthanalyticssettings$Calculate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>;
    calculate(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    calculate(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Calculate,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Folders$Securityhealthanalyticssettings$Calculate
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Securityhealthanalyticssettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Securityhealthanalyticssettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Securityhealthanalyticssettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     */
    name?: string;
    /**
     * Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Folders$Virtualmachinethreatdetectionsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective VirtualMachineThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.folders.virtualMachineThreatDetectionSettings.calculate(
     *       {
     *         // Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     *         name: 'folders/my-folder/virtualMachineThreatDetectionSettings',
     *         // Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     *         showEligibleModulesOnly: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Folders$Virtualmachinethreatdetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Folders$Virtualmachinethreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
    >;
    calculate(
      params: Params$Resource$Folders$Virtualmachinethreatdetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Folders$Virtualmachinethreatdetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Folders$Virtualmachinethreatdetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Folders$Virtualmachinethreatdetectionsettings$Calculate
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Virtualmachinethreatdetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Virtualmachinethreatdetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Virtualmachinethreatdetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     */
    name?: string;
    /**
     * Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Folders$Websecurityscannersettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.folders.webSecurityScannerSettings.calculate(
     *     {
     *       // Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     *       name: 'folders/my-folder/webSecurityScannerSettings',
     *       // Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     *       showEligibleModulesOnly: 'placeholder-value',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Folders$Websecurityscannersettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Folders$Websecurityscannersettings$Calculate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>;
    calculate(
      params: Params$Resource$Folders$Websecurityscannersettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Folders$Websecurityscannersettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    calculate(
      params: Params$Resource$Folders$Websecurityscannersettings$Calculate,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Folders$Websecurityscannersettings$Calculate
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Websecurityscannersettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Websecurityscannersettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$WebSecurityScannerSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebSecurityScannerSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Folders$Websecurityscannersettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     */
    name?: string;
    /**
     * Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Organizations {
    context: APIRequestContext;
    containerThreatDetectionSettings: Resource$Organizations$Containerthreatdetectionsettings;
    eventThreatDetectionSettings: Resource$Organizations$Eventthreatdetectionsettings;
    rapidVulnerabilityDetectionSettings: Resource$Organizations$Rapidvulnerabilitydetectionsettings;
    securityHealthAnalyticsSettings: Resource$Organizations$Securityhealthanalyticssettings;
    virtualMachineThreatDetectionSettings: Resource$Organizations$Virtualmachinethreatdetectionsettings;
    webSecurityScannerSettings: Resource$Organizations$Websecurityscannersettings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.containerThreatDetectionSettings =
        new Resource$Organizations$Containerthreatdetectionsettings(
          this.context
        );
      this.eventThreatDetectionSettings =
        new Resource$Organizations$Eventthreatdetectionsettings(this.context);
      this.rapidVulnerabilityDetectionSettings =
        new Resource$Organizations$Rapidvulnerabilitydetectionsettings(
          this.context
        );
      this.securityHealthAnalyticsSettings =
        new Resource$Organizations$Securityhealthanalyticssettings(
          this.context
        );
      this.virtualMachineThreatDetectionSettings =
        new Resource$Organizations$Virtualmachinethreatdetectionsettings(
          this.context
        );
      this.webSecurityScannerSettings =
        new Resource$Organizations$Websecurityscannersettings(this.context);
    }

    /**
     * Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.organizations.getContainerThreatDetectionSettings({
     *       // Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *       name: 'organizations/my-organization/containerThreatDetectionSettings',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getContainerThreatDetectionSettings(
      params: Params$Resource$Organizations$Getcontainerthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getContainerThreatDetectionSettings(
      params?: Params$Resource$Organizations$Getcontainerthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Organizations$Getcontainerthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Organizations$Getcontainerthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Organizations$Getcontainerthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Getcontainerthreatdetectionsettings
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Getcontainerthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Getcontainerthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Get the EventThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetEventThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateEventThreatDetectionSettings for this purpose.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.organizations.getEventThreatDetectionSettings({
     *       // Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     *       name: 'organizations/my-organization/eventThreatDetectionSettings',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getEventThreatDetectionSettings(
      params: Params$Resource$Organizations$Geteventthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getEventThreatDetectionSettings(
      params?: Params$Resource$Organizations$Geteventthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>;
    getEventThreatDetectionSettings(
      params: Params$Resource$Organizations$Geteventthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getEventThreatDetectionSettings(
      params: Params$Resource$Organizations$Geteventthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    getEventThreatDetectionSettings(
      params: Params$Resource$Organizations$Geteventthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    getEventThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    getEventThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Geteventthreatdetectionsettings
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Geteventthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Geteventthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Get the RapidVulnerabilityDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetRapidVulnerabilityDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateRapidVulnerabilityDetectionSettings for this purpose.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.organizations.getRapidVulnerabilityDetectionSettings({
     *       // Required. The name of the RapidVulnerabilityDetectionSettings to retrieve. Formats: * organizations/{organization\}/rapidVulnerabilityDetectionSettings * folders/{folder\}/rapidVulnerabilityDetectionSettings * projects/{project\}/rapidVulnerabilityDetectionSettings
     *       name: 'organizations/my-organization/rapidVulnerabilityDetectionSettings',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Organizations$Getrapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getRapidVulnerabilityDetectionSettings(
      params?: Params$Resource$Organizations$Getrapidvulnerabilitydetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
    >;
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Organizations$Getrapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Organizations$Getrapidvulnerabilitydetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Organizations$Getrapidvulnerabilitydetectionsettings,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Getrapidvulnerabilitydetectionsettings
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Getrapidvulnerabilitydetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Getrapidvulnerabilitydetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Get the SecurityCenterSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.organizations.getSecurityCenterSettings({
     *     // Required. The name of the SecurityCenterSettings to retrieve. Format: organizations/{organization\}/securityCenterSettings Format: folders/{folder\}/securityCenterSettings Format: projects/{project\}/securityCenterSettings
     *     name: 'organizations/my-organization/securityCenterSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "logSinkProject": "my_logSinkProject",
     *   //   "name": "my_name",
     *   //   "onboardingTime": "my_onboardingTime",
     *   //   "orgServiceAccount": "my_orgServiceAccount"
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
    getSecurityCenterSettings(
      params: Params$Resource$Organizations$Getsecuritycentersettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSecurityCenterSettings(
      params?: Params$Resource$Organizations$Getsecuritycentersettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityCenterSettings>>;
    getSecurityCenterSettings(
      params: Params$Resource$Organizations$Getsecuritycentersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSecurityCenterSettings(
      params: Params$Resource$Organizations$Getsecuritycentersettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityCenterSettings>,
      callback: BodyResponseCallback<Schema$SecurityCenterSettings>
    ): void;
    getSecurityCenterSettings(
      params: Params$Resource$Organizations$Getsecuritycentersettings,
      callback: BodyResponseCallback<Schema$SecurityCenterSettings>
    ): void;
    getSecurityCenterSettings(
      callback: BodyResponseCallback<Schema$SecurityCenterSettings>
    ): void;
    getSecurityCenterSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Getsecuritycentersettings
        | BodyResponseCallback<Schema$SecurityCenterSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityCenterSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityCenterSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityCenterSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Getsecuritycentersettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Getsecuritycentersettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SecurityCenterSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityCenterSettings>(parameters);
      }
    }

    /**
     * Get the SecurityHealthAnalyticsSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetSecurityHealthAnalyticsSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateSecurityHealthAnalyticsSettings for this purpose.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.organizations.getSecurityHealthAnalyticsSettings({
     *       // Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     *       name: 'organizations/my-organization/securityHealthAnalyticsSettings',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Organizations$Getsecurityhealthanalyticssettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSecurityHealthAnalyticsSettings(
      params?: Params$Resource$Organizations$Getsecurityhealthanalyticssettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>;
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Organizations$Getsecurityhealthanalyticssettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Organizations$Getsecurityhealthanalyticssettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Organizations$Getsecurityhealthanalyticssettings,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    getSecurityHealthAnalyticsSettings(
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    getSecurityHealthAnalyticsSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Getsecurityhealthanalyticssettings
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Getsecurityhealthanalyticssettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Getsecurityhealthanalyticssettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters
        );
      }
    }

    /**
     * Get the Subscription resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.organizations.getSubscription({
     *     // Required. The name of the subscription to retrieve. Format: organizations/{organization\}/subscription
     *     name: 'organizations/my-organization/subscription',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "details": {},
     *   //   "name": "my_name",
     *   //   "tier": "my_tier"
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
    getSubscription(
      params: Params$Resource$Organizations$Getsubscription,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSubscription(
      params?: Params$Resource$Organizations$Getsubscription,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Subscription>>;
    getSubscription(
      params: Params$Resource$Organizations$Getsubscription,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSubscription(
      params: Params$Resource$Organizations$Getsubscription,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    getSubscription(
      params: Params$Resource$Organizations$Getsubscription,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    getSubscription(callback: BodyResponseCallback<Schema$Subscription>): void;
    getSubscription(
      paramsOrCallback?:
        | Params$Resource$Organizations$Getsubscription
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
        {}) as Params$Resource$Organizations$Getsubscription;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Getsubscription;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Subscription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }

    /**
     * Get the VirtualMachineThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetVirtualMachineThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateVirtualMachineThreatDetectionSettings for this purpose.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.organizations.getVirtualMachineThreatDetectionSettings(
     *       {
     *         // Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     *         name: 'organizations/my-organization/virtualMachineThreatDetectionSettings',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Organizations$Getvirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getVirtualMachineThreatDetectionSettings(
      params?: Params$Resource$Organizations$Getvirtualmachinethreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
    >;
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Organizations$Getvirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Organizations$Getvirtualmachinethreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Organizations$Getvirtualmachinethreatdetectionsettings,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Getvirtualmachinethreatdetectionsettings
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Getvirtualmachinethreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Getvirtualmachinethreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Get the WebSecurityScannerSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetWebSecurityScannerSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateWebSecurityScannerSettings for this purpose.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.organizations.getWebSecurityScannerSettings({
     *     // Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     *     name: 'organizations/my-organization/webSecurityScannerSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getWebSecurityScannerSettings(
      params: Params$Resource$Organizations$Getwebsecurityscannersettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getWebSecurityScannerSettings(
      params?: Params$Resource$Organizations$Getwebsecurityscannersettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>;
    getWebSecurityScannerSettings(
      params: Params$Resource$Organizations$Getwebsecurityscannersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getWebSecurityScannerSettings(
      params: Params$Resource$Organizations$Getwebsecurityscannersettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    getWebSecurityScannerSettings(
      params: Params$Resource$Organizations$Getwebsecurityscannersettings,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    getWebSecurityScannerSettings(
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    getWebSecurityScannerSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Getwebsecurityscannersettings
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Getwebsecurityscannersettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Getwebsecurityscannersettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WebSecurityScannerSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebSecurityScannerSettings>(parameters);
      }
    }

    /**
     * Update the ContainerThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.organizations.updateContainerThreatDetectionSettings({
     *       // Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *       name: 'organizations/my-organization/containerThreatDetectionSettings',
     *       // The list of fields to be updated.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceAccount": "my_serviceAccount",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Organizations$Updatecontainerthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateContainerThreatDetectionSettings(
      params?: Params$Resource$Organizations$Updatecontainerthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Organizations$Updatecontainerthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Organizations$Updatecontainerthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Organizations$Updatecontainerthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Updatecontainerthreatdetectionsettings
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Updatecontainerthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Updatecontainerthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Update the EventThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.organizations.updateEventThreatDetectionSettings({
     *       // Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     *       name: 'organizations/my-organization/eventThreatDetectionSettings',
     *       // The list of fields to be updated.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateEventThreatDetectionSettings(
      params: Params$Resource$Organizations$Updateeventthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateEventThreatDetectionSettings(
      params?: Params$Resource$Organizations$Updateeventthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>;
    updateEventThreatDetectionSettings(
      params: Params$Resource$Organizations$Updateeventthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateEventThreatDetectionSettings(
      params: Params$Resource$Organizations$Updateeventthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    updateEventThreatDetectionSettings(
      params: Params$Resource$Organizations$Updateeventthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    updateEventThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    updateEventThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Updateeventthreatdetectionsettings
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Updateeventthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Updateeventthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Update the RapidVulnerabilityDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.organizations.updateRapidVulnerabilityDetectionSettings(
     *       {
     *         // The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization\}/rapidVulnerabilityDetectionSettings * folders/{folder\}/rapidVulnerabilityDetectionSettings * projects/{project\}/rapidVulnerabilityDetectionSettings
     *         name: 'organizations/my-organization/rapidVulnerabilityDetectionSettings',
     *         // The list of fields to be updated.
     *         updateMask: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "modules": {},
     *           //   "name": "my_name",
     *           //   "serviceEnablementState": "my_serviceEnablementState",
     *           //   "updateTime": "my_updateTime"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Organizations$Updaterapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateRapidVulnerabilityDetectionSettings(
      params?: Params$Resource$Organizations$Updaterapidvulnerabilitydetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
    >;
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Organizations$Updaterapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Organizations$Updaterapidvulnerabilitydetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Organizations$Updaterapidvulnerabilitydetectionsettings,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Updaterapidvulnerabilitydetectionsettings
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Updaterapidvulnerabilitydetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Updaterapidvulnerabilitydetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Update the SecurityHealthAnalyticsSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.organizations.updateSecurityHealthAnalyticsSettings({
     *       // Identifier. The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     *       name: 'organizations/my-organization/securityHealthAnalyticsSettings',
     *       // The list of fields to be updated.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceAccount": "my_serviceAccount",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Organizations$Updatesecurityhealthanalyticssettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateSecurityHealthAnalyticsSettings(
      params?: Params$Resource$Organizations$Updatesecurityhealthanalyticssettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>;
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Organizations$Updatesecurityhealthanalyticssettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Organizations$Updatesecurityhealthanalyticssettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Organizations$Updatesecurityhealthanalyticssettings,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Updatesecurityhealthanalyticssettings
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Updatesecurityhealthanalyticssettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Updatesecurityhealthanalyticssettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters
        );
      }
    }

    /**
     * Update the VirtualMachineThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.organizations.updateVirtualMachineThreatDetectionSettings(
     *       {
     *         // Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     *         name: 'organizations/my-organization/virtualMachineThreatDetectionSettings',
     *         // The list of fields to be updated.
     *         updateMask: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "modules": {},
     *           //   "name": "my_name",
     *           //   "serviceAccount": "my_serviceAccount",
     *           //   "serviceEnablementState": "my_serviceEnablementState",
     *           //   "updateTime": "my_updateTime"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Organizations$Updatevirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateVirtualMachineThreatDetectionSettings(
      params?: Params$Resource$Organizations$Updatevirtualmachinethreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
    >;
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Organizations$Updatevirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Organizations$Updatevirtualmachinethreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Organizations$Updatevirtualmachinethreatdetectionsettings,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Updatevirtualmachinethreatdetectionsettings
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Updatevirtualmachinethreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Updatevirtualmachinethreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Update the WebSecurityScannerSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.organizations.updateWebSecurityScannerSettings({
     *       // Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     *       name: 'organizations/my-organization/webSecurityScannerSettings',
     *       // The list of fields to be updated.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateWebSecurityScannerSettings(
      params: Params$Resource$Organizations$Updatewebsecurityscannersettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateWebSecurityScannerSettings(
      params?: Params$Resource$Organizations$Updatewebsecurityscannersettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Organizations$Updatewebsecurityscannersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Organizations$Updatewebsecurityscannersettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Organizations$Updatewebsecurityscannersettings,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    updateWebSecurityScannerSettings(
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    updateWebSecurityScannerSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Updatewebsecurityscannersettings
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Updatewebsecurityscannersettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Updatewebsecurityscannersettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WebSecurityScannerSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebSecurityScannerSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Getcontainerthreatdetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Geteventthreatdetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Getrapidvulnerabilitydetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the RapidVulnerabilityDetectionSettings to retrieve. Formats: * organizations/{organization\}/rapidVulnerabilityDetectionSettings * folders/{folder\}/rapidVulnerabilityDetectionSettings * projects/{project\}/rapidVulnerabilityDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Getsecuritycentersettings
    extends StandardParameters {
    /**
     * Required. The name of the SecurityCenterSettings to retrieve. Format: organizations/{organization\}/securityCenterSettings Format: folders/{folder\}/securityCenterSettings Format: projects/{project\}/securityCenterSettings
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Getsecurityhealthanalyticssettings
    extends StandardParameters {
    /**
     * Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Getsubscription
    extends StandardParameters {
    /**
     * Required. The name of the subscription to retrieve. Format: organizations/{organization\}/subscription
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Getvirtualmachinethreatdetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Getwebsecurityscannersettings
    extends StandardParameters {
    /**
     * Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Updatecontainerthreatdetectionsettings
    extends StandardParameters {
    /**
     * Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ContainerThreatDetectionSettings;
  }
  export interface Params$Resource$Organizations$Updateeventthreatdetectionsettings
    extends StandardParameters {
    /**
     * Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EventThreatDetectionSettings;
  }
  export interface Params$Resource$Organizations$Updaterapidvulnerabilitydetectionsettings
    extends StandardParameters {
    /**
     * The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization\}/rapidVulnerabilityDetectionSettings * folders/{folder\}/rapidVulnerabilityDetectionSettings * projects/{project\}/rapidVulnerabilityDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RapidVulnerabilityDetectionSettings;
  }
  export interface Params$Resource$Organizations$Updatesecurityhealthanalyticssettings
    extends StandardParameters {
    /**
     * Identifier. The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SecurityHealthAnalyticsSettings;
  }
  export interface Params$Resource$Organizations$Updatevirtualmachinethreatdetectionsettings
    extends StandardParameters {
    /**
     * Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VirtualMachineThreatDetectionSettings;
  }
  export interface Params$Resource$Organizations$Updatewebsecurityscannersettings
    extends StandardParameters {
    /**
     * Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WebSecurityScannerSettings;
  }

  export class Resource$Organizations$Containerthreatdetectionsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.organizations.containerThreatDetectionSettings.calculate(
     *       {
     *         // Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *         name: 'organizations/my-organization/containerThreatDetectionSettings',
     *         // Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     *         showEligibleModulesOnly: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Organizations$Containerthreatdetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Organizations$Containerthreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    calculate(
      params: Params$Resource$Organizations$Containerthreatdetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Containerthreatdetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Containerthreatdetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Organizations$Containerthreatdetectionsettings$Calculate
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Containerthreatdetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Containerthreatdetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Containerthreatdetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
    /**
     * Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Organizations$Eventthreatdetectionsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective EventThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.organizations.eventThreatDetectionSettings.calculate({
     *       // Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     *       name: 'organizations/my-organization/eventThreatDetectionSettings',
     *       // Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     *       showEligibleModulesOnly: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Organizations$Eventthreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>;
    calculate(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Organizations$Eventthreatdetectionsettings$Calculate
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Eventthreatdetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Eventthreatdetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Eventthreatdetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     */
    name?: string;
    /**
     * Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Organizations$Rapidvulnerabilitydetectionsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective RapidVulnerabilityDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.organizations.rapidVulnerabilityDetectionSettings.calculate(
     *       {
     *         // Required. The name of the RapidVulnerabilityDetectionSettings to calculate. Formats: * organizations/{organization\}/rapidVulnerabilityDetectionSettings * folders/{folder\}/rapidVulnerabilityDetectionSettings * projects/{project\}/rapidVulnerabilityDetectionSettings
     *         name: 'organizations/my-organization/rapidVulnerabilityDetectionSettings',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Organizations$Rapidvulnerabilitydetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Organizations$Rapidvulnerabilitydetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
    >;
    calculate(
      params: Params$Resource$Organizations$Rapidvulnerabilitydetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Rapidvulnerabilitydetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Rapidvulnerabilitydetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Organizations$Rapidvulnerabilitydetectionsettings$Calculate
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Rapidvulnerabilitydetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Rapidvulnerabilitydetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Rapidvulnerabilitydetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the RapidVulnerabilityDetectionSettings to calculate. Formats: * organizations/{organization\}/rapidVulnerabilityDetectionSettings * folders/{folder\}/rapidVulnerabilityDetectionSettings * projects/{project\}/rapidVulnerabilityDetectionSettings
     */
    name?: string;
  }

  export class Resource$Organizations$Securityhealthanalyticssettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective SecurityHealthAnalyticsSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.organizations.securityHealthAnalyticsSettings.calculate(
     *       {
     *         // Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     *         name: 'organizations/my-organization/securityHealthAnalyticsSettings',
     *         // Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     *         showEligibleModulesOnly: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Organizations$Securityhealthanalyticssettings$Calculate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>;
    calculate(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Calculate,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Organizations$Securityhealthanalyticssettings$Calculate
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Securityhealthanalyticssettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Securityhealthanalyticssettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Securityhealthanalyticssettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     */
    name?: string;
    /**
     * Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Organizations$Virtualmachinethreatdetectionsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective VirtualMachineThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.organizations.virtualMachineThreatDetectionSettings.calculate(
     *       {
     *         // Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     *         name: 'organizations/my-organization/virtualMachineThreatDetectionSettings',
     *         // Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     *         showEligibleModulesOnly: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Organizations$Virtualmachinethreatdetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Organizations$Virtualmachinethreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
    >;
    calculate(
      params: Params$Resource$Organizations$Virtualmachinethreatdetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Virtualmachinethreatdetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Virtualmachinethreatdetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Organizations$Virtualmachinethreatdetectionsettings$Calculate
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Virtualmachinethreatdetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Virtualmachinethreatdetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Virtualmachinethreatdetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     */
    name?: string;
    /**
     * Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Organizations$Websecurityscannersettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.organizations.webSecurityScannerSettings.calculate({
     *       // Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     *       name: 'organizations/my-organization/webSecurityScannerSettings',
     *       // Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     *       showEligibleModulesOnly: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Organizations$Websecurityscannersettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Organizations$Websecurityscannersettings$Calculate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>;
    calculate(
      params: Params$Resource$Organizations$Websecurityscannersettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Websecurityscannersettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Websecurityscannersettings$Calculate,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Organizations$Websecurityscannersettings$Calculate
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Websecurityscannersettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Websecurityscannersettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$WebSecurityScannerSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebSecurityScannerSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Websecurityscannersettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     */
    name?: string;
    /**
     * Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    containerThreatDetectionSettings: Resource$Projects$Containerthreatdetectionsettings;
    eventThreatDetectionSettings: Resource$Projects$Eventthreatdetectionsettings;
    locations: Resource$Projects$Locations;
    rapidVulnerabilityDetectionSettings: Resource$Projects$Rapidvulnerabilitydetectionsettings;
    securityHealthAnalyticsSettings: Resource$Projects$Securityhealthanalyticssettings;
    virtualMachineThreatDetectionSettings: Resource$Projects$Virtualmachinethreatdetectionsettings;
    webSecurityScannerSettings: Resource$Projects$Websecurityscannersettings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.containerThreatDetectionSettings =
        new Resource$Projects$Containerthreatdetectionsettings(this.context);
      this.eventThreatDetectionSettings =
        new Resource$Projects$Eventthreatdetectionsettings(this.context);
      this.locations = new Resource$Projects$Locations(this.context);
      this.rapidVulnerabilityDetectionSettings =
        new Resource$Projects$Rapidvulnerabilitydetectionsettings(this.context);
      this.securityHealthAnalyticsSettings =
        new Resource$Projects$Securityhealthanalyticssettings(this.context);
      this.virtualMachineThreatDetectionSettings =
        new Resource$Projects$Virtualmachinethreatdetectionsettings(
          this.context
        );
      this.webSecurityScannerSettings =
        new Resource$Projects$Websecurityscannersettings(this.context);
    }

    /**
     * Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.projects.getContainerThreatDetectionSettings(
     *     {
     *       // Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *       name: 'projects/my-project/containerThreatDetectionSettings',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Getcontainerthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getContainerThreatDetectionSettings(
      params?: Params$Resource$Projects$Getcontainerthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Getcontainerthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Getcontainerthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Getcontainerthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Getcontainerthreatdetectionsettings
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getcontainerthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Getcontainerthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Get the EventThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetEventThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateEventThreatDetectionSettings for this purpose.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.projects.getEventThreatDetectionSettings({
     *     // Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     *     name: 'projects/my-project/eventThreatDetectionSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getEventThreatDetectionSettings(
      params: Params$Resource$Projects$Geteventthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getEventThreatDetectionSettings(
      params?: Params$Resource$Projects$Geteventthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>;
    getEventThreatDetectionSettings(
      params: Params$Resource$Projects$Geteventthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getEventThreatDetectionSettings(
      params: Params$Resource$Projects$Geteventthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    getEventThreatDetectionSettings(
      params: Params$Resource$Projects$Geteventthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    getEventThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    getEventThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Geteventthreatdetectionsettings
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Geteventthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Geteventthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Get the RapidVulnerabilityDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetRapidVulnerabilityDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateRapidVulnerabilityDetectionSettings for this purpose.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.projects.getRapidVulnerabilityDetectionSettings({
     *       // Required. The name of the RapidVulnerabilityDetectionSettings to retrieve. Formats: * organizations/{organization\}/rapidVulnerabilityDetectionSettings * folders/{folder\}/rapidVulnerabilityDetectionSettings * projects/{project\}/rapidVulnerabilityDetectionSettings
     *       name: 'projects/my-project/rapidVulnerabilityDetectionSettings',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Projects$Getrapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getRapidVulnerabilityDetectionSettings(
      params?: Params$Resource$Projects$Getrapidvulnerabilitydetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
    >;
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Projects$Getrapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Projects$Getrapidvulnerabilitydetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Projects$Getrapidvulnerabilitydetectionsettings,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Getrapidvulnerabilitydetectionsettings
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getrapidvulnerabilitydetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Getrapidvulnerabilitydetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Get the SecurityCenterSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.projects.getSecurityCenterSettings({
     *     // Required. The name of the SecurityCenterSettings to retrieve. Format: organizations/{organization\}/securityCenterSettings Format: folders/{folder\}/securityCenterSettings Format: projects/{project\}/securityCenterSettings
     *     name: 'projects/my-project/securityCenterSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "logSinkProject": "my_logSinkProject",
     *   //   "name": "my_name",
     *   //   "onboardingTime": "my_onboardingTime",
     *   //   "orgServiceAccount": "my_orgServiceAccount"
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
    getSecurityCenterSettings(
      params: Params$Resource$Projects$Getsecuritycentersettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSecurityCenterSettings(
      params?: Params$Resource$Projects$Getsecuritycentersettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityCenterSettings>>;
    getSecurityCenterSettings(
      params: Params$Resource$Projects$Getsecuritycentersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSecurityCenterSettings(
      params: Params$Resource$Projects$Getsecuritycentersettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityCenterSettings>,
      callback: BodyResponseCallback<Schema$SecurityCenterSettings>
    ): void;
    getSecurityCenterSettings(
      params: Params$Resource$Projects$Getsecuritycentersettings,
      callback: BodyResponseCallback<Schema$SecurityCenterSettings>
    ): void;
    getSecurityCenterSettings(
      callback: BodyResponseCallback<Schema$SecurityCenterSettings>
    ): void;
    getSecurityCenterSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Getsecuritycentersettings
        | BodyResponseCallback<Schema$SecurityCenterSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityCenterSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityCenterSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityCenterSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getsecuritycentersettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getsecuritycentersettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SecurityCenterSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityCenterSettings>(parameters);
      }
    }

    /**
     * Get the SecurityHealthAnalyticsSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetSecurityHealthAnalyticsSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateSecurityHealthAnalyticsSettings for this purpose.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.projects.getSecurityHealthAnalyticsSettings({
     *     // Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     *     name: 'projects/my-project/securityHealthAnalyticsSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Projects$Getsecurityhealthanalyticssettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSecurityHealthAnalyticsSettings(
      params?: Params$Resource$Projects$Getsecurityhealthanalyticssettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>;
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Projects$Getsecurityhealthanalyticssettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Projects$Getsecurityhealthanalyticssettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Projects$Getsecurityhealthanalyticssettings,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    getSecurityHealthAnalyticsSettings(
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    getSecurityHealthAnalyticsSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Getsecurityhealthanalyticssettings
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getsecurityhealthanalyticssettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Getsecurityhealthanalyticssettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters
        );
      }
    }

    /**
     * Get the VirtualMachineThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetVirtualMachineThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateVirtualMachineThreatDetectionSettings for this purpose.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.projects.getVirtualMachineThreatDetectionSettings({
     *       // Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     *       name: 'projects/my-project/virtualMachineThreatDetectionSettings',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Projects$Getvirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getVirtualMachineThreatDetectionSettings(
      params?: Params$Resource$Projects$Getvirtualmachinethreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
    >;
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Projects$Getvirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Projects$Getvirtualmachinethreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Projects$Getvirtualmachinethreatdetectionsettings,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Getvirtualmachinethreatdetectionsettings
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getvirtualmachinethreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Getvirtualmachinethreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Get the WebSecurityScannerSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetWebSecurityScannerSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateWebSecurityScannerSettings for this purpose.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.projects.getWebSecurityScannerSettings({
     *     // Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     *     name: 'projects/my-project/webSecurityScannerSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getWebSecurityScannerSettings(
      params: Params$Resource$Projects$Getwebsecurityscannersettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getWebSecurityScannerSettings(
      params?: Params$Resource$Projects$Getwebsecurityscannersettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>;
    getWebSecurityScannerSettings(
      params: Params$Resource$Projects$Getwebsecurityscannersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getWebSecurityScannerSettings(
      params: Params$Resource$Projects$Getwebsecurityscannersettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    getWebSecurityScannerSettings(
      params: Params$Resource$Projects$Getwebsecurityscannersettings,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    getWebSecurityScannerSettings(
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    getWebSecurityScannerSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Getwebsecurityscannersettings
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getwebsecurityscannersettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getwebsecurityscannersettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WebSecurityScannerSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebSecurityScannerSettings>(parameters);
      }
    }

    /**
     * Update the ContainerThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.projects.updateContainerThreatDetectionSettings({
     *       // Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *       name: 'projects/my-project/containerThreatDetectionSettings',
     *       // The list of fields to be updated.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceAccount": "my_serviceAccount",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Updatecontainerthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateContainerThreatDetectionSettings(
      params?: Params$Resource$Projects$Updatecontainerthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Updatecontainerthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Updatecontainerthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Updatecontainerthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Updatecontainerthreatdetectionsettings
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Updatecontainerthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Updatecontainerthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Update the EventThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.projects.updateEventThreatDetectionSettings({
     *     // Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     *     name: 'projects/my-project/eventThreatDetectionSettings',
     *     // The list of fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "modules": {},
     *       //   "name": "my_name",
     *       //   "serviceEnablementState": "my_serviceEnablementState",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateEventThreatDetectionSettings(
      params: Params$Resource$Projects$Updateeventthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateEventThreatDetectionSettings(
      params?: Params$Resource$Projects$Updateeventthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>;
    updateEventThreatDetectionSettings(
      params: Params$Resource$Projects$Updateeventthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateEventThreatDetectionSettings(
      params: Params$Resource$Projects$Updateeventthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    updateEventThreatDetectionSettings(
      params: Params$Resource$Projects$Updateeventthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    updateEventThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    updateEventThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Updateeventthreatdetectionsettings
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Updateeventthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Updateeventthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Update the RapidVulnerabilityDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.projects.updateRapidVulnerabilityDetectionSettings({
     *       // The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization\}/rapidVulnerabilityDetectionSettings * folders/{folder\}/rapidVulnerabilityDetectionSettings * projects/{project\}/rapidVulnerabilityDetectionSettings
     *       name: 'projects/my-project/rapidVulnerabilityDetectionSettings',
     *       // The list of fields to be updated.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Projects$Updaterapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateRapidVulnerabilityDetectionSettings(
      params?: Params$Resource$Projects$Updaterapidvulnerabilitydetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
    >;
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Projects$Updaterapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Projects$Updaterapidvulnerabilitydetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Projects$Updaterapidvulnerabilitydetectionsettings,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Updaterapidvulnerabilitydetectionsettings
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Updaterapidvulnerabilitydetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Updaterapidvulnerabilitydetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Update the SecurityHealthAnalyticsSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.projects.updateSecurityHealthAnalyticsSettings({
     *       // Identifier. The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     *       name: 'projects/my-project/securityHealthAnalyticsSettings',
     *       // The list of fields to be updated.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceAccount": "my_serviceAccount",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Projects$Updatesecurityhealthanalyticssettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateSecurityHealthAnalyticsSettings(
      params?: Params$Resource$Projects$Updatesecurityhealthanalyticssettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>;
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Projects$Updatesecurityhealthanalyticssettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Projects$Updatesecurityhealthanalyticssettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Projects$Updatesecurityhealthanalyticssettings,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Updatesecurityhealthanalyticssettings
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Updatesecurityhealthanalyticssettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Updatesecurityhealthanalyticssettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters
        );
      }
    }

    /**
     * Update the VirtualMachineThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.projects.updateVirtualMachineThreatDetectionSettings({
     *       // Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     *       name: 'projects/my-project/virtualMachineThreatDetectionSettings',
     *       // The list of fields to be updated.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceAccount": "my_serviceAccount",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Projects$Updatevirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateVirtualMachineThreatDetectionSettings(
      params?: Params$Resource$Projects$Updatevirtualmachinethreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
    >;
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Projects$Updatevirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Projects$Updatevirtualmachinethreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Projects$Updatevirtualmachinethreatdetectionsettings,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Updatevirtualmachinethreatdetectionsettings
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Updatevirtualmachinethreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Updatevirtualmachinethreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Update the WebSecurityScannerSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.projects.updateWebSecurityScannerSettings({
     *     // Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     *     name: 'projects/my-project/webSecurityScannerSettings',
     *     // The list of fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "modules": {},
     *       //   "name": "my_name",
     *       //   "serviceEnablementState": "my_serviceEnablementState",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateWebSecurityScannerSettings(
      params: Params$Resource$Projects$Updatewebsecurityscannersettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateWebSecurityScannerSettings(
      params?: Params$Resource$Projects$Updatewebsecurityscannersettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Projects$Updatewebsecurityscannersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Projects$Updatewebsecurityscannersettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Projects$Updatewebsecurityscannersettings,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    updateWebSecurityScannerSettings(
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    updateWebSecurityScannerSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Updatewebsecurityscannersettings
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Updatewebsecurityscannersettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Updatewebsecurityscannersettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WebSecurityScannerSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebSecurityScannerSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Getcontainerthreatdetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Geteventthreatdetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Getrapidvulnerabilitydetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the RapidVulnerabilityDetectionSettings to retrieve. Formats: * organizations/{organization\}/rapidVulnerabilityDetectionSettings * folders/{folder\}/rapidVulnerabilityDetectionSettings * projects/{project\}/rapidVulnerabilityDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Getsecuritycentersettings
    extends StandardParameters {
    /**
     * Required. The name of the SecurityCenterSettings to retrieve. Format: organizations/{organization\}/securityCenterSettings Format: folders/{folder\}/securityCenterSettings Format: projects/{project\}/securityCenterSettings
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Getsecurityhealthanalyticssettings
    extends StandardParameters {
    /**
     * Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Getvirtualmachinethreatdetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Getwebsecurityscannersettings
    extends StandardParameters {
    /**
     * Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Updatecontainerthreatdetectionsettings
    extends StandardParameters {
    /**
     * Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ContainerThreatDetectionSettings;
  }
  export interface Params$Resource$Projects$Updateeventthreatdetectionsettings
    extends StandardParameters {
    /**
     * Identifier. The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EventThreatDetectionSettings;
  }
  export interface Params$Resource$Projects$Updaterapidvulnerabilitydetectionsettings
    extends StandardParameters {
    /**
     * The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization\}/rapidVulnerabilityDetectionSettings * folders/{folder\}/rapidVulnerabilityDetectionSettings * projects/{project\}/rapidVulnerabilityDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RapidVulnerabilityDetectionSettings;
  }
  export interface Params$Resource$Projects$Updatesecurityhealthanalyticssettings
    extends StandardParameters {
    /**
     * Identifier. The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SecurityHealthAnalyticsSettings;
  }
  export interface Params$Resource$Projects$Updatevirtualmachinethreatdetectionsettings
    extends StandardParameters {
    /**
     * Identifier. The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VirtualMachineThreatDetectionSettings;
  }
  export interface Params$Resource$Projects$Updatewebsecurityscannersettings
    extends StandardParameters {
    /**
     * Identifier. The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WebSecurityScannerSettings;
  }

  export class Resource$Projects$Containerthreatdetectionsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.projects.containerThreatDetectionSettings.calculate({
     *       // Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *       name: 'projects/my-project/containerThreatDetectionSettings',
     *       // Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     *       showEligibleModulesOnly: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Projects$Containerthreatdetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Projects$Containerthreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    calculate(
      params: Params$Resource$Projects$Containerthreatdetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Projects$Containerthreatdetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Projects$Containerthreatdetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Projects$Containerthreatdetectionsettings$Calculate
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Containerthreatdetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Containerthreatdetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Containerthreatdetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
    /**
     * Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Projects$Eventthreatdetectionsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective EventThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.projects.eventThreatDetectionSettings.calculate({
     *       // Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     *       name: 'projects/my-project/eventThreatDetectionSettings',
     *       // Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     *       showEligibleModulesOnly: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Projects$Eventthreatdetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Projects$Eventthreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>;
    calculate(
      params: Params$Resource$Projects$Eventthreatdetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Projects$Eventthreatdetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Projects$Eventthreatdetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Projects$Eventthreatdetectionsettings$Calculate
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Eventthreatdetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Eventthreatdetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Eventthreatdetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     */
    name?: string;
    /**
     * Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    clusters: Resource$Projects$Locations$Clusters;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.clusters = new Resource$Projects$Locations$Clusters(this.context);
    }
  }

  export class Resource$Projects$Locations$Clusters {
    context: APIRequestContext;
    containerThreatDetectionSettings: Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.containerThreatDetectionSettings =
        new Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings(
          this.context
        );
    }

    /**
     * Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.projects.locations.clusters.getContainerThreatDetectionSettings(
     *       {
     *         // Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *         name: 'projects/my-project/locations/my-location/clusters/my-cluster/containerThreatDetectionSettings',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Locations$Clusters$Getcontainerthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getContainerThreatDetectionSettings(
      params?: Params$Resource$Projects$Locations$Clusters$Getcontainerthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Locations$Clusters$Getcontainerthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Locations$Clusters$Getcontainerthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Locations$Clusters$Getcontainerthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Getcontainerthreatdetectionsettings
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Getcontainerthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Getcontainerthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters
        );
      }
    }

    /**
     * Update the ContainerThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.projects.locations.clusters.updateContainerThreatDetectionSettings(
     *       {
     *         // Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *         name: 'projects/my-project/locations/my-location/clusters/my-cluster/containerThreatDetectionSettings',
     *         // The list of fields to be updated.
     *         updateMask: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "modules": {},
     *           //   "name": "my_name",
     *           //   "serviceAccount": "my_serviceAccount",
     *           //   "serviceEnablementState": "my_serviceEnablementState",
     *           //   "updateTime": "my_updateTime"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Locations$Clusters$Updatecontainerthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateContainerThreatDetectionSettings(
      params?: Params$Resource$Projects$Locations$Clusters$Updatecontainerthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Locations$Clusters$Updatecontainerthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Locations$Clusters$Updatecontainerthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Locations$Clusters$Updatecontainerthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Updatecontainerthreatdetectionsettings
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Updatecontainerthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Updatecontainerthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Clusters$Getcontainerthreatdetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Updatecontainerthreatdetectionsettings
    extends StandardParameters {
    /**
     * Identifier. The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ContainerThreatDetectionSettings;
  }

  export class Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.projects.locations.clusters.containerThreatDetectionSettings.calculate(
     *       {
     *         // Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *         name: 'projects/my-project/locations/my-location/clusters/my-cluster/containerThreatDetectionSettings',
     *         // Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     *         showEligibleModulesOnly: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    calculate(
      params: Params$Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings$Calculate
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
    /**
     * Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Projects$Rapidvulnerabilitydetectionsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective RapidVulnerabilityDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.projects.rapidVulnerabilityDetectionSettings.calculate(
     *       {
     *         // Required. The name of the RapidVulnerabilityDetectionSettings to calculate. Formats: * organizations/{organization\}/rapidVulnerabilityDetectionSettings * folders/{folder\}/rapidVulnerabilityDetectionSettings * projects/{project\}/rapidVulnerabilityDetectionSettings
     *         name: 'projects/my-project/rapidVulnerabilityDetectionSettings',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Projects$Rapidvulnerabilitydetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Projects$Rapidvulnerabilitydetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
    >;
    calculate(
      params: Params$Resource$Projects$Rapidvulnerabilitydetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Projects$Rapidvulnerabilitydetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Projects$Rapidvulnerabilitydetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Projects$Rapidvulnerabilitydetectionsettings$Calculate
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Rapidvulnerabilitydetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Rapidvulnerabilitydetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Rapidvulnerabilitydetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the RapidVulnerabilityDetectionSettings to calculate. Formats: * organizations/{organization\}/rapidVulnerabilityDetectionSettings * folders/{folder\}/rapidVulnerabilityDetectionSettings * projects/{project\}/rapidVulnerabilityDetectionSettings
     */
    name?: string;
  }

  export class Resource$Projects$Securityhealthanalyticssettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective SecurityHealthAnalyticsSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.projects.securityHealthAnalyticsSettings.calculate({
     *       // Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     *       name: 'projects/my-project/securityHealthAnalyticsSettings',
     *       // Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     *       showEligibleModulesOnly: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Projects$Securityhealthanalyticssettings$Calculate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>;
    calculate(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    calculate(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Calculate,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Projects$Securityhealthanalyticssettings$Calculate
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Securityhealthanalyticssettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Securityhealthanalyticssettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Securityhealthanalyticssettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     */
    name?: string;
    /**
     * Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Projects$Virtualmachinethreatdetectionsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective VirtualMachineThreatDetectionSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.projects.virtualMachineThreatDetectionSettings.calculate(
     *       {
     *         // Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     *         name: 'projects/my-project/virtualMachineThreatDetectionSettings',
     *         // Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     *         showEligibleModulesOnly: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Projects$Virtualmachinethreatdetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Projects$Virtualmachinethreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
    >;
    calculate(
      params: Params$Resource$Projects$Virtualmachinethreatdetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Projects$Virtualmachinethreatdetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Projects$Virtualmachinethreatdetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Projects$Virtualmachinethreatdetectionsettings$Calculate
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Virtualmachinethreatdetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Virtualmachinethreatdetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Virtualmachinethreatdetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     */
    name?: string;
    /**
     * Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Projects$Websecurityscannersettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res =
     *     await securitycenter.projects.webSecurityScannerSettings.calculate({
     *       // Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     *       name: 'projects/my-project/webSecurityScannerSettings',
     *       // Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     *       showEligibleModulesOnly: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Projects$Websecurityscannersettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Projects$Websecurityscannersettings$Calculate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>;
    calculate(
      params: Params$Resource$Projects$Websecurityscannersettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Projects$Websecurityscannersettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    calculate(
      params: Params$Resource$Projects$Websecurityscannersettings$Calculate,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Projects$Websecurityscannersettings$Calculate
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Websecurityscannersettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Websecurityscannersettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$WebSecurityScannerSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebSecurityScannerSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Websecurityscannersettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     */
    name?: string;
    /**
     * Optional. When set, will only retrieve the modules that are in scope. By default, all modules will be shown.
     */
    showEligibleModulesOnly?: boolean;
  }
}
