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

export namespace clouddeploy_v1 {
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
   * Cloud Deploy API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const clouddeploy = google.clouddeploy('v1');
   * ```
   */
  export class Clouddeploy {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * The request object used by `AbandonRelease`.
   */
  export interface Schema$AbandonReleaseRequest {}
  /**
   * The response object for `AbandonRelease`.
   */
  export interface Schema$AbandonReleaseResponse {}
  /**
   * An advanceChildRollout Job.
   */
  export interface Schema$AdvanceChildRolloutJob {}
  /**
   * AdvanceChildRolloutJobRun contains information specific to a advanceChildRollout `JobRun`.
   */
  export interface Schema$AdvanceChildRolloutJobRun {
    /**
     * Output only. Name of the `ChildRollout`. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}/releases/{release\}/rollouts/{rollout\}`.
     */
    rollout?: string | null;
    /**
     * Output only. the ID of the ChildRollout's Phase.
     */
    rolloutPhaseId?: string | null;
  }
  /**
   * Contains the information of an automated advance-rollout operation.
   */
  export interface Schema$AdvanceRolloutOperation {
    /**
     * Output only. The phase the rollout will be advanced to.
     */
    destinationPhase?: string | null;
    /**
     * Output only. The name of the rollout that initiates the `AutomationRun`.
     */
    rollout?: string | null;
    /**
     * Output only. The phase of a deployment that initiated the operation.
     */
    sourcePhase?: string | null;
    /**
     * Output only. How long the operation will be paused.
     */
    wait?: string | null;
  }
  /**
   * The request object used by `AdvanceRollout`.
   */
  export interface Schema$AdvanceRolloutRequest {
    /**
     * Optional. Deploy policies to override. Format is `projects/{project\}/locations/{location\}/deployPolicies/{deployPolicy\}`.
     */
    overrideDeployPolicy?: string[] | null;
    /**
     * Required. The phase ID to advance the `Rollout` to.
     */
    phaseId?: string | null;
  }
  /**
   * The response object from `AdvanceRollout`.
   */
  export interface Schema$AdvanceRolloutResponse {}
  /**
   * The `AdvanceRollout` automation rule will automatically advance a successful Rollout to the next phase.
   */
  export interface Schema$AdvanceRolloutRule {
    /**
     * Output only. Information around the state of the Automation rule.
     */
    condition?: Schema$AutomationRuleCondition;
    /**
     * Required. ID of the rule. This id must be unique in the `Automation` resource to which this rule belongs. The format is `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`.
     */
    id?: string | null;
    /**
     * Optional. Proceeds only after phase name matched any one in the list. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$`.
     */
    sourcePhases?: string[] | null;
    /**
     * Optional. How long to wait after a rollout is finished.
     */
    wait?: string | null;
  }
  /**
   * Information specifying an Anthos Cluster.
   */
  export interface Schema$AnthosCluster {
    /**
     * Optional. Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project\}/locations/{location\}/memberships/{membership_name\}`.
     */
    membership?: string | null;
  }
  /**
   * The request object used by `ApproveRollout`.
   */
  export interface Schema$ApproveRolloutRequest {
    /**
     * Required. True = approve; false = reject
     */
    approved?: boolean | null;
    /**
     * Optional. Deploy policies to override. Format is `projects/{project\}/locations/{location\}/deployPolicies/{deployPolicy\}`.
     */
    overrideDeployPolicy?: string[] | null;
  }
  /**
   * The response object from `ApproveRollout`.
   */
  export interface Schema$ApproveRolloutResponse {}
  /**
   * Information about entities associated with a `Target`.
   */
  export interface Schema$AssociatedEntities {
    /**
     * Optional. Information specifying Anthos clusters as associated entities.
     */
    anthosClusters?: Schema$AnthosCluster[];
    /**
     * Optional. Information specifying GKE clusters as associated entities.
     */
    gkeClusters?: Schema$GkeCluster[];
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \}, { "log_type": "ADMIN_READ" \} ] \}, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" \}, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] \} ] \} ] \} For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.
   */
  export interface Schema$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \} ] \} This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
   */
  export interface Schema$AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[] | null;
    /**
     * The log type that this config enables.
     */
    logType?: string | null;
  }
  /**
   * An `Automation` resource in the Cloud Deploy API. An `Automation` enables the automation of manually driven actions for a Delivery Pipeline, which includes Release promotion among Targets, Rollout repair and Rollout deployment strategy advancement. The intention of Automation is to reduce manual intervention in the continuous delivery process.
   */
  export interface Schema$Automation {
    /**
     * Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash (`/`). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots(`.`), not longer than 253 characters in total, followed by a slash (`/`). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. Time at which the automation was created.
     */
    createTime?: string | null;
    /**
     * Optional. Description of the `Automation`. Max length is 255 characters.
     */
    description?: string | null;
    /**
     * Optional. The weak etag of the `Automation` resource. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string | null;
    /**
     * Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 63 characters.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Name of the `Automation`. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{delivery_pipeline\}/automations/{automation\}`.
     */
    name?: string | null;
    /**
     * Required. List of Automation rules associated with the Automation resource. Must have at least one rule and limited to 250 rules per Delivery Pipeline. Note: the order of the rules here is not the same as the order of execution.
     */
    rules?: Schema$AutomationRule[];
    /**
     * Required. Selected resources to which the automation will be applied.
     */
    selector?: Schema$AutomationResourceSelector;
    /**
     * Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources.
     */
    serviceAccount?: string | null;
    /**
     * Optional. When Suspended, automation is deactivated from execution.
     */
    suspended?: boolean | null;
    /**
     * Output only. Unique identifier of the `Automation`.
     */
    uid?: string | null;
    /**
     * Output only. Time at which the automation was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Payload proto for "clouddeploy.googleapis.com/automation" Platform Log event that describes the Automation related events.
   */
  export interface Schema$AutomationEvent {
    /**
     * The name of the `AutomationRun`.
     */
    automation?: string | null;
    /**
     * Debug message for when there is an update on the AutomationRun. Provides further details about the resource creation or state change.
     */
    message?: string | null;
    /**
     * Unique identifier of the `DeliveryPipeline`.
     */
    pipelineUid?: string | null;
    /**
     * Type of this notification, e.g. for a Pub/Sub failure.
     */
    type?: string | null;
  }
  /**
   * AutomationResourceSelector contains the information to select the resources to which an Automation is going to be applied.
   */
  export interface Schema$AutomationResourceSelector {
    /**
     * Optional. Contains attributes about a target.
     */
    targets?: Schema$TargetAttribute[];
  }
  /**
   * AutomationRolloutMetadata contains Automation-related actions that were performed on a rollout.
   */
  export interface Schema$AutomationRolloutMetadata {
    /**
     * Output only. The names of the AutomationRuns initiated by an advance rollout rule.
     */
    advanceAutomationRuns?: string[] | null;
    /**
     * Output only. The name of the AutomationRun initiated by a promote release rule.
     */
    promoteAutomationRun?: string | null;
    /**
     * Output only. The names of the AutomationRuns initiated by a repair rollout rule.
     */
    repairAutomationRuns?: string[] | null;
  }
  /**
   * `AutomationRule` defines the automation activities.
   */
  export interface Schema$AutomationRule {
    /**
     * Optional. The `AdvanceRolloutRule` will automatically advance a successful Rollout.
     */
    advanceRolloutRule?: Schema$AdvanceRolloutRule;
    /**
     * Optional. `PromoteReleaseRule` will automatically promote a release from the current target to a specified target.
     */
    promoteReleaseRule?: Schema$PromoteReleaseRule;
    /**
     * Optional. The `RepairRolloutRule` will automatically repair a failed rollout.
     */
    repairRolloutRule?: Schema$RepairRolloutRule;
    /**
     * Optional. The `TimedPromoteReleaseRule` will automatically promote a release from the current target(s) to the specified target(s) on a configured schedule.
     */
    timedPromoteReleaseRule?: Schema$TimedPromoteReleaseRule;
  }
  /**
   * `AutomationRuleCondition` contains conditions relevant to an `Automation` rule.
   */
  export interface Schema$AutomationRuleCondition {
    /**
     * Optional. Details around targets enumerated in the rule.
     */
    targetsPresentCondition?: Schema$TargetsPresentCondition;
    /**
     * Optional. TimedPromoteReleaseCondition contains rule conditions specific to a an Automation with a timed promote release rule defined.
     */
    timedPromoteReleaseCondition?: Schema$TimedPromoteReleaseCondition;
  }
  /**
   * An `AutomationRun` resource in the Cloud Deploy API. An `AutomationRun` represents an execution instance of an automation rule.
   */
  export interface Schema$AutomationRun {
    /**
     * Output only. Advances a rollout to the next phase.
     */
    advanceRolloutOperation?: Schema$AdvanceRolloutOperation;
    /**
     * Output only. The ID of the automation that initiated the operation.
     */
    automationId?: string | null;
    /**
     * Output only. Snapshot of the Automation taken at AutomationRun creation time.
     */
    automationSnapshot?: Schema$Automation;
    /**
     * Output only. Time at which the `AutomationRun` was created.
     */
    createTime?: string | null;
    /**
     * Output only. The weak etag of the `AutomationRun` resource. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string | null;
    /**
     * Output only. Time the `AutomationRun` expires. An `AutomationRun` expires after 14 days from its creation date.
     */
    expireTime?: string | null;
    /**
     * Output only. Name of the `AutomationRun`. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{delivery_pipeline\}/automationRuns/{automation_run\}`.
     */
    name?: string | null;
    /**
     * Output only. Contains information about what policies prevented the `AutomationRun` from proceeding.
     */
    policyViolation?: Schema$PolicyViolation;
    /**
     * Output only. Promotes a release to a specified 'Target'.
     */
    promoteReleaseOperation?: Schema$PromoteReleaseOperation;
    /**
     * Output only. Repairs a failed 'Rollout'.
     */
    repairRolloutOperation?: Schema$RepairRolloutOperation;
    /**
     * Output only. The ID of the automation rule that initiated the operation.
     */
    ruleId?: string | null;
    /**
     * Output only. Email address of the user-managed IAM service account that performs the operations against Cloud Deploy resources.
     */
    serviceAccount?: string | null;
    /**
     * Output only. Current state of the `AutomationRun`.
     */
    state?: string | null;
    /**
     * Output only. Explains the current state of the `AutomationRun`. Present only when an explanation is needed.
     */
    stateDescription?: string | null;
    /**
     * Output only. The ID of the source target that initiates the `AutomationRun`. The value of this field is the last segment of a target name.
     */
    targetId?: string | null;
    /**
     * Output only. Promotes a release to a specified 'Target' as defined in a Timed Promote Release rule.
     */
    timedPromoteReleaseOperation?: Schema$TimedPromoteReleaseOperation;
    /**
     * Output only. Time at which the automationRun was updated.
     */
    updateTime?: string | null;
    /**
     * Output only. Earliest time the `AutomationRun` will attempt to resume. Wait-time is configured by `wait` in automation rule.
     */
    waitUntilTime?: string | null;
  }
  /**
   * Payload proto for "clouddeploy.googleapis.com/automation_run" Platform Log event that describes the AutomationRun related events.
   */
  export interface Schema$AutomationRunEvent {
    /**
     * Identifier of the `Automation`.
     */
    automationId?: string | null;
    /**
     * The name of the `AutomationRun`.
     */
    automationRun?: string | null;
    /**
     * ID of the `Target` to which the `AutomationRun` is created.
     */
    destinationTargetId?: string | null;
    /**
     * Debug message for when there is an update on the AutomationRun. Provides further details about the resource creation or state change.
     */
    message?: string | null;
    /**
     * Unique identifier of the `DeliveryPipeline`.
     */
    pipelineUid?: string | null;
    /**
     * Identifier of the `Automation` rule.
     */
    ruleId?: string | null;
    /**
     * Type of this notification, e.g. for a Pub/Sub failure.
     */
    type?: string | null;
  }
  /**
   * Associates `members`, or principals, with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    condition?: Schema$Expr;
    /**
     * Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid\}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid\}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid\}.svc.id.goog[{namespace\}/{kubernetes-sa\}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid\}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain\}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/subject/{subject_attribute_value\}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/group/{group_id\}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/attribute.{attribute_name\}/{attribute_value\}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/x`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/subject/{subject_attribute_value\}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/group/{group_id\}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/attribute.{attribute_name\}/{attribute_value\}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/x`: All identities in a workload identity pool. * `deleted:user:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid\}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid\}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid\}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/subject/{subject_attribute_value\}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles).
     */
    role?: string | null;
  }
  /**
   * Description of an a image to use during Skaffold rendering.
   */
  export interface Schema$BuildArtifact {
    /**
     * Optional. Image name in Skaffold configuration.
     */
    image?: string | null;
    /**
     * Optional. Image tag to use. This will generally be the full path to an image, such as "gcr.io/my-project/busybox:1.2.3" or "gcr.io/my-project/busybox@sha256:abc123".
     */
    tag?: string | null;
  }
  /**
   * Canary represents the canary deployment strategy.
   */
  export interface Schema$Canary {
    /**
     * Optional. Configures the progressive based deployment for a Target.
     */
    canaryDeployment?: Schema$CanaryDeployment;
    /**
     * Optional. Configures the progressive based deployment for a Target, but allows customizing at the phase level where a phase represents each of the percentage deployments.
     */
    customCanaryDeployment?: Schema$CustomCanaryDeployment;
    /**
     * Optional. Runtime specific configurations for the deployment strategy. The runtime configuration is used to determine how Cloud Deploy will split traffic to enable a progressive deployment.
     */
    runtimeConfig?: Schema$RuntimeConfig;
  }
  /**
   * CanaryDeployment represents the canary deployment configuration
   */
  export interface Schema$CanaryDeployment {
    /**
     * Required. The percentage based deployments that will occur as a part of a `Rollout`. List is expected in ascending order and each integer n is 0 <= n < 100. If the GatewayServiceMesh is configured for Kubernetes, then the range for n is 0 <= n <= 100.
     */
    percentages?: number[] | null;
    /**
     * Optional. Configuration for the postdeploy job of the last phase. If this is not configured, there will be no postdeploy job for this phase.
     */
    postdeploy?: Schema$Postdeploy;
    /**
     * Optional. Configuration for the predeploy job of the first phase. If this is not configured, there will be no predeploy job for this phase.
     */
    predeploy?: Schema$Predeploy;
    /**
     * Optional. Whether to run verify tests after each percentage deployment via `skaffold verify`.
     */
    verify?: boolean | null;
  }
  /**
   * The request object used by `CancelAutomationRun`.
   */
  export interface Schema$CancelAutomationRunRequest {}
  /**
   * The response object from `CancelAutomationRun`.
   */
  export interface Schema$CancelAutomationRunResponse {}
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * The request object used by `CancelRollout`.
   */
  export interface Schema$CancelRolloutRequest {
    /**
     * Optional. Deploy policies to override. Format is `projects/{project\}/locations/{location\}/deployPolicies/{deployPolicy\}`.
     */
    overrideDeployPolicy?: string[] | null;
  }
  /**
   * The response object from `CancelRollout`.
   */
  export interface Schema$CancelRolloutResponse {}
  /**
   * ChildRollouts job composition
   */
  export interface Schema$ChildRolloutJobs {
    /**
     * Output only. List of AdvanceChildRolloutJobs
     */
    advanceRolloutJobs?: Schema$Job[];
    /**
     * Output only. List of CreateChildRolloutJobs
     */
    createRolloutJobs?: Schema$Job[];
  }
  /**
   * CloudRunConfig contains the Cloud Run runtime configuration.
   */
  export interface Schema$CloudRunConfig {
    /**
     * Optional. Whether Cloud Deploy should update the traffic stanza in a Cloud Run Service on the user's behalf to facilitate traffic splitting. This is required to be true for CanaryDeployments, but optional for CustomCanaryDeployments.
     */
    automaticTrafficControl?: boolean | null;
    /**
     * Optional. A list of tags that are added to the canary revision while the canary phase is in progress.
     */
    canaryRevisionTags?: string[] | null;
    /**
     * Optional. A list of tags that are added to the prior revision while the canary phase is in progress.
     */
    priorRevisionTags?: string[] | null;
    /**
     * Optional. A list of tags that are added to the final stable revision when the stable phase is applied.
     */
    stableRevisionTags?: string[] | null;
  }
  /**
   * Information specifying where to deploy a Cloud Run Service.
   */
  export interface Schema$CloudRunLocation {
    /**
     * Required. The location for the Cloud Run Service. Format must be `projects/{project\}/locations/{location\}`.
     */
    location?: string | null;
  }
  /**
   * CloudRunMetadata contains information from a Cloud Run deployment.
   */
  export interface Schema$CloudRunMetadata {
    /**
     * Output only. The name of the Cloud Run job that is associated with a `Rollout`. Format is `projects/{project\}/locations/{location\}/jobs/{job_name\}`.
     */
    job?: string | null;
    /**
     * Output only. The Cloud Run Revision id associated with a `Rollout`.
     */
    revision?: string | null;
    /**
     * Output only. The name of the Cloud Run Service that is associated with a `Rollout`. Format is `projects/{project\}/locations/{location\}/services/{service\}`.
     */
    service?: string | null;
    /**
     * Output only. The Cloud Run Service urls that are associated with a `Rollout`.
     */
    serviceUrls?: string[] | null;
  }
  /**
   * CloudRunRenderMetadata contains Cloud Run information associated with a `Release` render.
   */
  export interface Schema$CloudRunRenderMetadata {
    /**
     * Output only. The name of the Cloud Run Service in the rendered manifest. Format is `projects/{project\}/locations/{location\}/services/{service\}`.
     */
    service?: string | null;
  }
  /**
   * Service-wide configuration.
   */
  export interface Schema$Config {
    /**
     * Default Skaffold version that is assigned when a Release is created without specifying a Skaffold version.
     */
    defaultSkaffoldVersion?: string | null;
    /**
     * Name of the configuration.
     */
    name?: string | null;
    /**
     * All supported versions of Skaffold.
     */
    supportedVersions?: Schema$SkaffoldVersion[];
  }
  /**
   * A createChildRollout Job.
   */
  export interface Schema$CreateChildRolloutJob {}
  /**
   * CreateChildRolloutJobRun contains information specific to a createChildRollout `JobRun`.
   */
  export interface Schema$CreateChildRolloutJobRun {
    /**
     * Output only. Name of the `ChildRollout`. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}/releases/{release\}/rollouts/{rollout\}`.
     */
    rollout?: string | null;
    /**
     * Output only. The ID of the childRollout Phase initiated by this JobRun.
     */
    rolloutPhaseId?: string | null;
  }
  /**
   * CustomCanaryDeployment represents the custom canary deployment configuration.
   */
  export interface Schema$CustomCanaryDeployment {
    /**
     * Required. Configuration for each phase in the canary deployment in the order executed.
     */
    phaseConfigs?: Schema$PhaseConfig[];
  }
  /**
   * CustomMetadata contains information from a user-defined operation.
   */
  export interface Schema$CustomMetadata {
    /**
     * Output only. Key-value pairs provided by the user-defined operation.
     */
    values?: {[key: string]: string} | null;
  }
  /**
   * Information specifying a Custom Target.
   */
  export interface Schema$CustomTarget {
    /**
     * Required. The name of the CustomTargetType. Format must be `projects/{project\}/locations/{location\}/customTargetTypes/{custom_target_type\}`.
     */
    customTargetType?: string | null;
  }
  /**
   * CustomTargetDeployMetadata contains information from a Custom Target deploy operation.
   */
  export interface Schema$CustomTargetDeployMetadata {
    /**
     * Output only. Skip message provided in the results of a custom deploy operation.
     */
    skipMessage?: string | null;
  }
  /**
   * CustomTargetSkaffoldActions represents the `CustomTargetType` configuration using Skaffold custom actions.
   */
  export interface Schema$CustomTargetSkaffoldActions {
    /**
     * Required. The Skaffold custom action responsible for deploy operations.
     */
    deployAction?: string | null;
    /**
     * Optional. List of Skaffold modules Cloud Deploy will include in the Skaffold Config as required before performing diagnose.
     */
    includeSkaffoldModules?: Schema$SkaffoldModules[];
    /**
     * Optional. The Skaffold custom action responsible for render operations. If not provided then Cloud Deploy will perform the render operations via `skaffold render`.
     */
    renderAction?: string | null;
  }
  /**
   * A `CustomTargetType` resource in the Cloud Deploy API. A `CustomTargetType` defines a type of custom target that can be referenced in a `Target` in order to facilitate deploying to other systems besides the supported runtimes.
   */
  export interface Schema$CustomTargetType {
    /**
     * Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. Time at which the `CustomTargetType` was created.
     */
    createTime?: string | null;
    /**
     * Optional. Configures render and deploy for the `CustomTargetType` using Skaffold custom actions.
     */
    customActions?: Schema$CustomTargetSkaffoldActions;
    /**
     * Output only. Resource id of the `CustomTargetType`.
     */
    customTargetTypeId?: string | null;
    /**
     * Optional. Description of the `CustomTargetType`. Max length is 255 characters.
     */
    description?: string | null;
    /**
     * Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string | null;
    /**
     * Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. Name of the `CustomTargetType`. Format is `projects/{project\}/locations/{location\}/customTargetTypes/{customTargetType\}`. The `customTargetType` component must match `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`
     */
    name?: string | null;
    /**
     * Output only. Unique identifier of the `CustomTargetType`.
     */
    uid?: string | null;
    /**
     * Output only. Most recent time at which the `CustomTargetType` was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Payload proto for "clouddeploy.googleapis.com/customtargettype_notification" Platform Log event that describes the failure to send a custom target type status change Pub/Sub notification.
   */
  export interface Schema$CustomTargetTypeNotificationEvent {
    /**
     * The name of the `CustomTargetType`.
     */
    customTargetType?: string | null;
    /**
     * Unique identifier of the `CustomTargetType`.
     */
    customTargetTypeUid?: string | null;
    /**
     * Debug message for when a notification fails to send.
     */
    message?: string | null;
    /**
     * Type of this notification, e.g. for a Pub/Sub failure.
     */
    type?: string | null;
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$Date {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | null;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | null;
  }
  /**
   * Execution using the default Cloud Build pool.
   */
  export interface Schema$DefaultPool {
    /**
     * Optional. Cloud Storage location where execution outputs should be stored. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.
     */
    artifactStorage?: string | null;
    /**
     * Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used.
     */
    serviceAccount?: string | null;
  }
  /**
   * A `DeliveryPipeline` resource in the Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress.
   */
  export interface Schema$DeliveryPipeline {
    /**
     * Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. Information around the state of the Delivery Pipeline.
     */
    condition?: Schema$PipelineCondition;
    /**
     * Output only. Time at which the pipeline was created.
     */
    createTime?: string | null;
    /**
     * Optional. Description of the `DeliveryPipeline`. Max length is 255 characters.
     */
    description?: string | null;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string | null;
    /**
     * Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. Name of the `DeliveryPipeline`. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}`. The `deliveryPipeline` component must match `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`
     */
    name?: string | null;
    /**
     * Optional. SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.
     */
    serialPipeline?: Schema$SerialPipeline;
    /**
     * Optional. When suspended, no new releases or rollouts can be created, but in-progress ones will complete.
     */
    suspended?: boolean | null;
    /**
     * Output only. Unique identifier of the `DeliveryPipeline`.
     */
    uid?: string | null;
    /**
     * Output only. Most recent time at which the pipeline was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Contains criteria for selecting DeliveryPipelines.
   */
  export interface Schema$DeliveryPipelineAttribute {
    /**
     * Optional. ID of the `DeliveryPipeline`. The value of this field could be one of the following: * The last segment of a pipeline name * "*", all delivery pipelines in a location
     */
    id?: string | null;
    /**
     * DeliveryPipeline labels.
     */
    labels?: {[key: string]: string} | null;
  }
  /**
   * Payload proto for "clouddeploy.googleapis.com/deliverypipeline_notification" Platform Log event that describes the failure to send delivery pipeline status change Pub/Sub notification.
   */
  export interface Schema$DeliveryPipelineNotificationEvent {
    /**
     * The name of the `Delivery Pipeline`.
     */
    deliveryPipeline?: string | null;
    /**
     * Debug message for when a notification fails to send.
     */
    message?: string | null;
    /**
     * Unique identifier of the `DeliveryPipeline`.
     */
    pipelineUid?: string | null;
    /**
     * Type of this notification, e.g. for a Pub/Sub failure.
     */
    type?: string | null;
  }
  /**
   * The artifacts produced by a deploy operation.
   */
  export interface Schema$DeployArtifact {
    /**
     * Output only. URI of a directory containing the artifacts. All paths are relative to this location.
     */
    artifactUri?: string | null;
    /**
     * Output only. File paths of the manifests applied during the deploy operation relative to the URI.
     */
    manifestPaths?: string[] | null;
  }
  /**
   * A deploy Job.
   */
  export interface Schema$DeployJob {}
  /**
   * DeployJobRun contains information specific to a deploy `JobRun`.
   */
  export interface Schema$DeployJobRun {
    /**
     * Output only. The artifact of a deploy job run, if available.
     */
    artifact?: Schema$DeployArtifact;
    /**
     * Output only. The resource name of the Cloud Build `Build` object that is used to deploy. Format is `projects/{project\}/locations/{location\}/builds/{build\}`.
     */
    build?: string | null;
    /**
     * Output only. The reason the deploy failed. This will always be unspecified while the deploy is in progress or if it succeeded.
     */
    failureCause?: string | null;
    /**
     * Output only. Additional information about the deploy failure, if available.
     */
    failureMessage?: string | null;
    /**
     * Output only. Metadata containing information about the deploy job run.
     */
    metadata?: Schema$DeployJobRunMetadata;
  }
  /**
   * DeployJobRunMetadata surfaces information associated with a `DeployJobRun` to the user.
   */
  export interface Schema$DeployJobRunMetadata {
    /**
     * Output only. The name of the Cloud Run Service that is associated with a `DeployJobRun`.
     */
    cloudRun?: Schema$CloudRunMetadata;
    /**
     * Output only. Custom metadata provided by user-defined deploy operation.
     */
    custom?: Schema$CustomMetadata;
    /**
     * Output only. Custom Target metadata associated with a `DeployJobRun`.
     */
    customTarget?: Schema$CustomTargetDeployMetadata;
  }
  /**
   * Deployment job composition.
   */
  export interface Schema$DeploymentJobs {
    /**
     * Output only. The deploy Job. This is the deploy job in the phase.
     */
    deployJob?: Schema$Job;
    /**
     * Output only. The postdeploy Job, which is the last job on the phase.
     */
    postdeployJob?: Schema$Job;
    /**
     * Output only. The predeploy Job, which is the first job on the phase.
     */
    predeployJob?: Schema$Job;
    /**
     * Output only. The verify Job. Runs after a deploy if the deploy succeeds.
     */
    verifyJob?: Schema$Job;
  }
  /**
   * DeployParameters contains deploy parameters information.
   */
  export interface Schema$DeployParameters {
    /**
     * Optional. Deploy parameters are applied to targets with match labels. If unspecified, deploy parameters are applied to all targets (including child targets of a multi-target).
     */
    matchTargetLabels?: {[key: string]: string} | null;
    /**
     * Required. Values are deploy parameters in key-value pairs.
     */
    values?: {[key: string]: string} | null;
  }
  /**
   * A `DeployPolicy` resource in the Cloud Deploy API. A `DeployPolicy` inhibits manual or automation-driven actions within a Delivery Pipeline or Target.
   */
  export interface Schema$DeployPolicy {
    /**
     * Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash (`/`). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots(`.`), not longer than 253 characters in total, followed by a slash (`/`). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. Time at which the deploy policy was created.
     */
    createTime?: string | null;
    /**
     * Optional. Description of the `DeployPolicy`. Max length is 255 characters.
     */
    description?: string | null;
    /**
     * The weak etag of the `DeployPolicy` resource. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string | null;
    /**
     * Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Name of the `DeployPolicy`. Format is `projects/{project\}/locations/{location\}/deployPolicies/{deployPolicy\}`. The `deployPolicy` component must match `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`
     */
    name?: string | null;
    /**
     * Required. Rules to apply. At least one rule must be present.
     */
    rules?: Schema$PolicyRule[];
    /**
     * Required. Selected resources to which the policy will be applied. At least one selector is required. If one selector matches the resource the policy applies. For example, if there are two selectors and the action being attempted matches one of them, the policy will apply to that action.
     */
    selectors?: Schema$DeployPolicyResourceSelector[];
    /**
     * Optional. When suspended, the policy will not prevent actions from occurring, even if the action violates the policy.
     */
    suspended?: boolean | null;
    /**
     * Output only. Unique identifier of the `DeployPolicy`.
     */
    uid?: string | null;
    /**
     * Output only. Most recent time at which the deploy policy was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Payload proto for "clouddeploy.googleapis.com/deploypolicy_evaluation" Platform Log event that describes the deploy policy evaluation event.
   */
  export interface Schema$DeployPolicyEvaluationEvent {
    /**
     * Whether the request is allowed. Allowed is set as true if: (1) the request complies with the policy; or (2) the request doesn't comply with the policy but the policy was overridden; or (3) the request doesn't comply with the policy but the policy was suspended
     */
    allowed?: boolean | null;
    /**
     * The name of the `Delivery Pipeline`.
     */
    deliveryPipeline?: string | null;
    /**
     * The name of the `DeployPolicy`.
     */
    deployPolicy?: string | null;
    /**
     * Unique identifier of the `DeployPolicy`.
     */
    deployPolicyUid?: string | null;
    /**
     * What invoked the action (e.g. a user or automation).
     */
    invoker?: string | null;
    /**
     * Debug message for when a deploy policy event occurs.
     */
    message?: string | null;
    /**
     * Things that could have overridden the policy verdict. Overrides together with verdict decide whether the request is allowed.
     */
    overrides?: string[] | null;
    /**
     * Unique identifier of the `Delivery Pipeline`.
     */
    pipelineUid?: string | null;
    /**
     * Rule id.
     */
    rule?: string | null;
    /**
     * Rule type (e.g. Restrict Rollouts).
     */
    ruleType?: string | null;
    /**
     * The name of the `Target`. This is an optional field, as a `Target` may not always be applicable to a policy.
     */
    target?: string | null;
    /**
     * Unique identifier of the `Target`. This is an optional field, as a `Target` may not always be applicable to a policy.
     */
    targetUid?: string | null;
    /**
     * The policy verdict of the request.
     */
    verdict?: string | null;
  }
  /**
   * Payload proto for "clouddeploy.googleapis.com/deploypolicy_notification". Platform Log event that describes the failure to send a pub/sub notification when there is a DeployPolicy status change.
   */
  export interface Schema$DeployPolicyNotificationEvent {
    /**
     * The name of the `DeployPolicy`.
     */
    deployPolicy?: string | null;
    /**
     * Unique identifier of the deploy policy.
     */
    deployPolicyUid?: string | null;
    /**
     * Debug message for when a deploy policy fails to send a pub/sub notification.
     */
    message?: string | null;
    /**
     * Type of this notification, e.g. for a Pub/Sub failure.
     */
    type?: string | null;
  }
  /**
   * Contains information on the resources to select for a deploy policy. Attributes provided must all match the resource in order for policy restrictions to apply. For example, if delivery pipelines attributes given are an id "prod" and labels "foo: bar", a delivery pipeline resource must match both that id and have that label in order to be subject to the policy.
   */
  export interface Schema$DeployPolicyResourceSelector {
    /**
     * Optional. Contains attributes about a delivery pipeline.
     */
    deliveryPipeline?: Schema$DeliveryPipelineAttribute;
    /**
     * Optional. Contains attributes about a target.
     */
    target?: Schema$TargetAttribute;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Configuration of the environment to use when calling Skaffold.
   */
  export interface Schema$ExecutionConfig {
    /**
     * Optional. Cloud Storage location in which to store execution outputs. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.
     */
    artifactStorage?: string | null;
    /**
     * Optional. Use default Cloud Build pool.
     */
    defaultPool?: Schema$DefaultPool;
    /**
     * Optional. Execution timeout for a Cloud Build Execution. This must be between 10m and 24h in seconds format. If unspecified, a default timeout of 1h is used.
     */
    executionTimeout?: string | null;
    /**
     * Optional. Use private Cloud Build pool.
     */
    privatePool?: Schema$PrivatePool;
    /**
     * Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used.
     */
    serviceAccount?: string | null;
    /**
     * Required. Usages when this configuration should be applied.
     */
    usages?: string[] | null;
    /**
     * Optional. If true, additional logging will be enabled when running builds in this execution environment.
     */
    verbose?: boolean | null;
    /**
     * Optional. The resource name of the `WorkerPool`, with the format `projects/{project\}/locations/{location\}/workerPools/{worker_pool\}`. If this optional field is unspecified, the default Cloud Build pool will be used.
     */
    workerPool?: string | null;
  }
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
   * Information about the Kubernetes Gateway API service mesh configuration.
   */
  export interface Schema$GatewayServiceMesh {
    /**
     * Required. Name of the Kubernetes Deployment whose traffic is managed by the specified HTTPRoute and Service.
     */
    deployment?: string | null;
    /**
     * Required. Name of the Gateway API HTTPRoute.
     */
    httpRoute?: string | null;
    /**
     * Optional. The label to use when selecting Pods for the Deployment and Service resources. This label must already be present in both resources.
     */
    podSelectorLabel?: string | null;
    /**
     * Optional. Route destinations allow configuring the Gateway API HTTPRoute to be deployed to additional clusters. This option is available for multi-cluster service mesh set ups that require the route to exist in the clusters that call the service. If unspecified, the HTTPRoute will only be deployed to the Target cluster.
     */
    routeDestinations?: Schema$RouteDestinations;
    /**
     * Optional. The time to wait for route updates to propagate. The maximum configurable time is 3 hours, in seconds format. If unspecified, there is no wait time.
     */
    routeUpdateWaitTime?: string | null;
    /**
     * Required. Name of the Kubernetes Service.
     */
    service?: string | null;
    /**
     * Optional. The amount of time to migrate traffic back from the canary Service to the original Service during the stable phase deployment. If specified, must be between 15s and 3600s. If unspecified, there is no cutback time.
     */
    stableCutbackDuration?: string | null;
  }
  /**
   * Information specifying a GKE Cluster.
   */
  export interface Schema$GkeCluster {
    /**
     * Optional. Information specifying a GKE Cluster. Format is `projects/{project_id\}/locations/{location_id\}/clusters/{cluster_id\}`.
     */
    cluster?: string | null;
    /**
     * Optional. If set, the cluster will be accessed using the DNS endpoint. Note that both `dns_endpoint` and `internal_ip` cannot be set to true.
     */
    dnsEndpoint?: boolean | null;
    /**
     * Optional. If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept). Note that `internal_ip` and `dns_endpoint` cannot both be set to true.
     */
    internalIp?: boolean | null;
    /**
     * Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server.
     */
    proxyUrl?: string | null;
  }
  /**
   * The request object used by `IgnoreJob`.
   */
  export interface Schema$IgnoreJobRequest {
    /**
     * Required. The job ID for the Job to ignore.
     */
    jobId?: string | null;
    /**
     * Optional. Deploy policies to override. Format is `projects/{project\}/locations/{location\}/deployPolicies/{deployPolicy\}`.
     */
    overrideDeployPolicy?: string[] | null;
    /**
     * Required. The phase ID the Job to ignore belongs to.
     */
    phaseId?: string | null;
  }
  /**
   * The response object from `IgnoreJob`.
   */
  export interface Schema$IgnoreJobResponse {}
  /**
   * Job represents an operation for a `Rollout`.
   */
  export interface Schema$Job {
    /**
     * Output only. An advanceChildRollout Job.
     */
    advanceChildRolloutJob?: Schema$AdvanceChildRolloutJob;
    /**
     * Output only. A createChildRollout Job.
     */
    createChildRolloutJob?: Schema$CreateChildRolloutJob;
    /**
     * Output only. A deploy Job.
     */
    deployJob?: Schema$DeployJob;
    /**
     * Output only. The ID of the Job.
     */
    id?: string | null;
    /**
     * Output only. The name of the `JobRun` responsible for the most recent invocation of this Job.
     */
    jobRun?: string | null;
    /**
     * Output only. A postdeploy Job.
     */
    postdeployJob?: Schema$PostdeployJob;
    /**
     * Output only. A predeploy Job.
     */
    predeployJob?: Schema$PredeployJob;
    /**
     * Output only. Additional information on why the Job was skipped, if available.
     */
    skipMessage?: string | null;
    /**
     * Output only. The current state of the Job.
     */
    state?: string | null;
    /**
     * Output only. A verify Job.
     */
    verifyJob?: Schema$VerifyJob;
  }
  /**
   * A `JobRun` resource in the Cloud Deploy API. A `JobRun` contains information of a single `Rollout` job evaluation.
   */
  export interface Schema$JobRun {
    /**
     * Output only. Information specific to an advanceChildRollout `JobRun`
     */
    advanceChildRolloutJobRun?: Schema$AdvanceChildRolloutJobRun;
    /**
     * Output only. Information specific to a createChildRollout `JobRun`.
     */
    createChildRolloutJobRun?: Schema$CreateChildRolloutJobRun;
    /**
     * Output only. Time at which the `JobRun` was created.
     */
    createTime?: string | null;
    /**
     * Output only. Information specific to a deploy `JobRun`.
     */
    deployJobRun?: Schema$DeployJobRun;
    /**
     * Output only. Time at which the `JobRun` ended.
     */
    endTime?: string | null;
    /**
     * Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string | null;
    /**
     * Output only. ID of the `Rollout` job this `JobRun` corresponds to.
     */
    jobId?: string | null;
    /**
     * Output only. Name of the `JobRun`. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}/releases/{releases\}/rollouts/{rollouts\}/jobRuns/{uuid\}`.
     */
    name?: string | null;
    /**
     * Output only. ID of the `Rollout` phase this `JobRun` belongs in.
     */
    phaseId?: string | null;
    /**
     * Output only. Information specific to a postdeploy `JobRun`.
     */
    postdeployJobRun?: Schema$PostdeployJobRun;
    /**
     * Output only. Information specific to a predeploy `JobRun`.
     */
    predeployJobRun?: Schema$PredeployJobRun;
    /**
     * Output only. Time at which the `JobRun` was started.
     */
    startTime?: string | null;
    /**
     * Output only. The current state of the `JobRun`.
     */
    state?: string | null;
    /**
     * Output only. Unique identifier of the `JobRun`.
     */
    uid?: string | null;
    /**
     * Output only. Information specific to a verify `JobRun`.
     */
    verifyJobRun?: Schema$VerifyJobRun;
  }
  /**
   * Payload proto for "clouddeploy.googleapis.com/jobrun_notification" Platform Log event that describes the failure to send JobRun resource update Pub/Sub notification.
   */
  export interface Schema$JobRunNotificationEvent {
    /**
     * The name of the `JobRun`.
     */
    jobRun?: string | null;
    /**
     * Debug message for when a notification fails to send.
     */
    message?: string | null;
    /**
     * Unique identifier of the `DeliveryPipeline`.
     */
    pipelineUid?: string | null;
    /**
     * The name of the `Release`.
     */
    release?: string | null;
    /**
     * Unique identifier of the `Release`.
     */
    releaseUid?: string | null;
    /**
     * The name of the `Rollout`.
     */
    rollout?: string | null;
    /**
     * Unique identifier of the `Rollout`.
     */
    rolloutUid?: string | null;
    /**
     * ID of the `Target`.
     */
    targetId?: string | null;
    /**
     * Type of this notification, e.g. for a Pub/Sub failure.
     */
    type?: string | null;
  }
  /**
   * KubernetesConfig contains the Kubernetes runtime configuration.
   */
  export interface Schema$KubernetesConfig {
    /**
     * Optional. Kubernetes Gateway API service mesh configuration.
     */
    gatewayServiceMesh?: Schema$GatewayServiceMesh;
    /**
     * Optional. Kubernetes Service networking configuration.
     */
    serviceNetworking?: Schema$ServiceNetworking;
  }
  /**
   * The response object from `ListAutomationRuns`.
   */
  export interface Schema$ListAutomationRunsResponse {
    /**
     * The `AutomationRuns` objects.
     */
    automationRuns?: Schema$AutomationRun[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response object from `ListAutomations`.
   */
  export interface Schema$ListAutomationsResponse {
    /**
     * The `Automation` objects.
     */
    automations?: Schema$Automation[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response object from `ListCustomTargetTypes.`
   */
  export interface Schema$ListCustomTargetTypesResponse {
    /**
     * The `CustomTargetType` objects.
     */
    customTargetTypes?: Schema$CustomTargetType[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response object from `ListDeliveryPipelines`.
   */
  export interface Schema$ListDeliveryPipelinesResponse {
    /**
     * The `DeliveryPipeline` objects.
     */
    deliveryPipelines?: Schema$DeliveryPipeline[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response object from `ListDeployPolicies`.
   */
  export interface Schema$ListDeployPoliciesResponse {
    /**
     * The `DeployPolicy` objects.
     */
    deployPolicies?: Schema$DeployPolicy[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * ListJobRunsResponse is the response object returned by `ListJobRuns`.
   */
  export interface Schema$ListJobRunsResponse {
    /**
     * The `JobRun` objects.
     */
    jobRuns?: Schema$JobRun[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached
     */
    unreachable?: string[] | null;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$Location[];
    /**
     * The standard List next-page token.
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
   * The response object from `ListReleases`.
   */
  export interface Schema$ListReleasesResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The `Release` objects.
     */
    releases?: Schema$Release[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * ListRolloutsResponse is the response object returned by `ListRollouts`.
   */
  export interface Schema$ListRolloutsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The `Rollout` objects.
     */
    rollouts?: Schema$Rollout[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response object from `ListTargets`.
   */
  export interface Schema$ListTargetsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The `Target` objects.
     */
    targets?: Schema$Target[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * A resource that represents a Google Cloud location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"\}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `"us-east1"`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`
     */
    name?: string | null;
  }
  /**
   * Metadata includes information associated with a `Rollout`.
   */
  export interface Schema$Metadata {
    /**
     * Output only. AutomationRolloutMetadata contains the information about the interactions between Automation service and this rollout.
     */
    automation?: Schema$AutomationRolloutMetadata;
    /**
     * Output only. The name of the Cloud Run Service that is associated with a `Rollout`.
     */
    cloudRun?: Schema$CloudRunMetadata;
    /**
     * Output only. Custom metadata provided by user-defined `Rollout` operations.
     */
    custom?: Schema$CustomMetadata;
  }
  /**
   * Information specifying a multiTarget.
   */
  export interface Schema$MultiTarget {
    /**
     * Required. The target_ids of this multiTarget.
     */
    targetIds?: string[] | null;
  }
  /**
   * One-time window within which actions are restricted. For example, blocking actions over New Year's Eve from December 31st at 5pm to January 1st at 9am.
   */
  export interface Schema$OneTimeWindow {
    /**
     * Required. End date.
     */
    endDate?: Schema$Date;
    /**
     * Required. End time (exclusive). You may use 24:00 for the end of the day.
     */
    endTime?: Schema$TimeOfDay;
    /**
     * Required. Start date.
     */
    startDate?: Schema$Date;
    /**
     * Required. Start time (inclusive). Use 00:00 for the beginning of the day.
     */
    startTime?: Schema$TimeOfDay;
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
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * Output only. API version used to start the operation.
     */
    apiVersion?: string | null;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    requestedCancellation?: boolean | null;
    /**
     * Output only. Human-readable status of the operation, if any.
     */
    statusMessage?: string | null;
    /**
     * Output only. Server-defined resource path for the target of the operation.
     */
    target?: string | null;
    /**
     * Output only. Name of the verb executed by the operation.
     */
    verb?: string | null;
  }
  /**
   * Phase represents a collection of jobs that are logically grouped together for a `Rollout`.
   */
  export interface Schema$Phase {
    /**
     * Output only. ChildRollout job composition.
     */
    childRolloutJobs?: Schema$ChildRolloutJobs;
    /**
     * Output only. Deployment job composition.
     */
    deploymentJobs?: Schema$DeploymentJobs;
    /**
     * Output only. The ID of the Phase.
     */
    id?: string | null;
    /**
     * Output only. Additional information on why the Phase was skipped, if available.
     */
    skipMessage?: string | null;
    /**
     * Output only. Current state of the Phase.
     */
    state?: string | null;
  }
  /**
   * Contains the paths to the artifacts, relative to the URI, for a phase.
   */
  export interface Schema$PhaseArtifact {
    /**
     * Output only. File path of the directory of rendered job manifests relative to the URI. This is only set if it is applicable.
     */
    jobManifestsPath?: string | null;
    /**
     * Output only. File path of the rendered manifest relative to the URI.
     */
    manifestPath?: string | null;
    /**
     * Output only. File path of the resolved Skaffold configuration relative to the URI.
     */
    skaffoldConfigPath?: string | null;
  }
  /**
   * PhaseConfig represents the configuration for a phase in the custom canary deployment.
   */
  export interface Schema$PhaseConfig {
    /**
     * Required. Percentage deployment for the phase.
     */
    percentage?: number | null;
    /**
     * Required. The ID to assign to the `Rollout` phase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$`.
     */
    phaseId?: string | null;
    /**
     * Optional. Configuration for the postdeploy job of this phase. If this is not configured, there will be no postdeploy job for this phase.
     */
    postdeploy?: Schema$Postdeploy;
    /**
     * Optional. Configuration for the predeploy job of this phase. If this is not configured, there will be no predeploy job for this phase.
     */
    predeploy?: Schema$Predeploy;
    /**
     * Optional. Skaffold profiles to use when rendering the manifest for this phase. These are in addition to the profiles list specified in the `DeliveryPipeline` stage.
     */
    profiles?: string[] | null;
    /**
     * Optional. Whether to run verify tests after the deployment via `skaffold verify`.
     */
    verify?: boolean | null;
  }
  /**
   * PipelineCondition contains all conditions relevant to a Delivery Pipeline.
   */
  export interface Schema$PipelineCondition {
    /**
     * Details around the Pipeline's overall status.
     */
    pipelineReadyCondition?: Schema$PipelineReadyCondition;
    /**
     * Details around targets enumerated in the pipeline.
     */
    targetsPresentCondition?: Schema$TargetsPresentCondition;
    /**
     * Details on the whether the targets enumerated in the pipeline are of the same type.
     */
    targetsTypeCondition?: Schema$TargetsTypeCondition;
  }
  /**
   * PipelineReadyCondition contains information around the status of the Pipeline.
   */
  export interface Schema$PipelineReadyCondition {
    /**
     * True if the Pipeline is in a valid state. Otherwise at least one condition in `PipelineCondition` is in an invalid state. Iterate over those conditions and see which condition(s) has status = false to find out what is wrong with the Pipeline.
     */
    status?: boolean | null;
    /**
     * Last time the condition was updated.
     */
    updateTime?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    version?: number | null;
  }
  /**
   * Deploy Policy rule.
   */
  export interface Schema$PolicyRule {
    /**
     * Optional. Rollout restrictions.
     */
    rolloutRestriction?: Schema$RolloutRestriction;
  }
  /**
   * Returned from an action if one or more policies were violated, and therefore the action was prevented. Contains information about what policies were violated and why.
   */
  export interface Schema$PolicyViolation {
    /**
     * Policy violation details.
     */
    policyViolationDetails?: Schema$PolicyViolationDetails[];
  }
  /**
   * Policy violation details.
   */
  export interface Schema$PolicyViolationDetails {
    /**
     * User readable message about why the request violated a policy. This is not intended for machine parsing.
     */
    failureMessage?: string | null;
    /**
     * Name of the policy that was violated. Policy resource will be in the format of `projects/{project\}/locations/{location\}/policies/{policy\}`.
     */
    policy?: string | null;
    /**
     * Id of the rule that triggered the policy violation.
     */
    ruleId?: string | null;
  }
  /**
   * Postdeploy contains the postdeploy job configuration information.
   */
  export interface Schema$Postdeploy {
    /**
     * Optional. A sequence of Skaffold custom actions to invoke during execution of the postdeploy job.
     */
    actions?: string[] | null;
  }
  /**
   * A postdeploy Job.
   */
  export interface Schema$PostdeployJob {
    /**
     * Output only. The custom actions that the postdeploy Job executes.
     */
    actions?: string[] | null;
  }
  /**
   * PostdeployJobRun contains information specific to a postdeploy `JobRun`.
   */
  export interface Schema$PostdeployJobRun {
    /**
     * Output only. The resource name of the Cloud Build `Build` object that is used to execute the custom actions associated with the postdeploy Job. Format is `projects/{project\}/locations/{location\}/builds/{build\}`.
     */
    build?: string | null;
    /**
     * Output only. The reason the postdeploy failed. This will always be unspecified while the postdeploy is in progress or if it succeeded.
     */
    failureCause?: string | null;
    /**
     * Output only. Additional information about the postdeploy failure, if available.
     */
    failureMessage?: string | null;
  }
  /**
   * Predeploy contains the predeploy job configuration information.
   */
  export interface Schema$Predeploy {
    /**
     * Optional. A sequence of Skaffold custom actions to invoke during execution of the predeploy job.
     */
    actions?: string[] | null;
  }
  /**
   * A predeploy Job.
   */
  export interface Schema$PredeployJob {
    /**
     * Output only. The custom actions that the predeploy Job executes.
     */
    actions?: string[] | null;
  }
  /**
   * PredeployJobRun contains information specific to a predeploy `JobRun`.
   */
  export interface Schema$PredeployJobRun {
    /**
     * Output only. The resource name of the Cloud Build `Build` object that is used to execute the custom actions associated with the predeploy Job. Format is `projects/{project\}/locations/{location\}/builds/{build\}`.
     */
    build?: string | null;
    /**
     * Output only. The reason the predeploy failed. This will always be unspecified while the predeploy is in progress or if it succeeded.
     */
    failureCause?: string | null;
    /**
     * Output only. Additional information about the predeploy failure, if available.
     */
    failureMessage?: string | null;
  }
  /**
   * Execution using a private Cloud Build pool.
   */
  export interface Schema$PrivatePool {
    /**
     * Optional. Cloud Storage location where execution outputs should be stored. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.
     */
    artifactStorage?: string | null;
    /**
     * Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used.
     */
    serviceAccount?: string | null;
    /**
     * Required. Resource name of the Cloud Build worker pool to use. The format is `projects/{project\}/locations/{location\}/workerPools/{pool\}`.
     */
    workerPool?: string | null;
  }
  /**
   * Contains the information of an automated promote-release operation.
   */
  export interface Schema$PromoteReleaseOperation {
    /**
     * Output only. The starting phase of the rollout created by this operation.
     */
    phase?: string | null;
    /**
     * Output only. The name of the rollout that initiates the `AutomationRun`.
     */
    rollout?: string | null;
    /**
     * Output only. The ID of the target that represents the promotion stage to which the release will be promoted. The value of this field is the last segment of a target name.
     */
    targetId?: string | null;
    /**
     * Output only. How long the operation will be paused.
     */
    wait?: string | null;
  }
  /**
   * The `PromoteRelease` rule will automatically promote a release from the current target to a specified target.
   */
  export interface Schema$PromoteReleaseRule {
    /**
     * Output only. Information around the state of the Automation rule.
     */
    condition?: Schema$AutomationRuleCondition;
    /**
     * Optional. The starting phase of the rollout created by this operation. Default to the first phase.
     */
    destinationPhase?: string | null;
    /**
     * Optional. The ID of the stage in the pipeline to which this `Release` is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following: * The last segment of a target name * "@next", the next target in the promotion sequence
     */
    destinationTargetId?: string | null;
    /**
     * Required. ID of the rule. This id must be unique in the `Automation` resource to which this rule belongs. The format is `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`.
     */
    id?: string | null;
    /**
     * Optional. How long the release need to be paused until being promoted to the next target.
     */
    wait?: string | null;
  }
  /**
   * A `Release` resource in the Cloud Deploy API. A `Release` defines a specific Skaffold configuration instance that can be deployed.
   */
  export interface Schema$Release {
    /**
     * Output only. Indicates whether this is an abandoned release.
     */
    abandoned?: boolean | null;
    /**
     * Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Optional. List of artifacts to pass through to Skaffold command.
     */
    buildArtifacts?: Schema$BuildArtifact[];
    /**
     * Output only. Information around the state of the Release.
     */
    condition?: Schema$ReleaseCondition;
    /**
     * Output only. Time at which the `Release` was created.
     */
    createTime?: string | null;
    /**
     * Output only. Snapshot of the custom target types referenced by the targets taken at release creation time.
     */
    customTargetTypeSnapshots?: Schema$CustomTargetType[];
    /**
     * Output only. Snapshot of the parent pipeline taken at release creation time.
     */
    deliveryPipelineSnapshot?: Schema$DeliveryPipeline;
    /**
     * Optional. The deploy parameters to use for all targets in this release.
     */
    deployParameters?: {[key: string]: string} | null;
    /**
     * Optional. Description of the `Release`. Max length is 255 characters.
     */
    description?: string | null;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string | null;
    /**
     * Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. Name of the `Release`. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}/releases/{release\}`. The `release` component must match `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`
     */
    name?: string | null;
    /**
     * Output only. Time at which the render completed.
     */
    renderEndTime?: string | null;
    /**
     * Output only. Time at which the render began.
     */
    renderStartTime?: string | null;
    /**
     * Output only. Current state of the render operation.
     */
    renderState?: string | null;
    /**
     * Optional. Filepath of the Skaffold config inside of the config URI.
     */
    skaffoldConfigPath?: string | null;
    /**
     * Optional. Cloud Storage URI of tar.gz archive containing Skaffold configuration.
     */
    skaffoldConfigUri?: string | null;
    /**
     * Optional. The Skaffold version to use when operating on this release, such as "1.20.0". Not all versions are valid; Cloud Deploy supports a specific set of versions. If unset, the most recent supported Skaffold version will be used.
     */
    skaffoldVersion?: string | null;
    /**
     * Output only. Map from target ID to the target artifacts created during the render operation.
     */
    targetArtifacts?: {[key: string]: Schema$TargetArtifact} | null;
    /**
     * Output only. Map from target ID to details of the render operation for that target.
     */
    targetRenders?: {[key: string]: Schema$TargetRender} | null;
    /**
     * Output only. Snapshot of the targets taken at release creation time.
     */
    targetSnapshots?: Schema$Target[];
    /**
     * Output only. Unique identifier of the `Release`.
     */
    uid?: string | null;
  }
  /**
   * ReleaseCondition contains all conditions relevant to a Release.
   */
  export interface Schema$ReleaseCondition {
    /**
     * Details around the Releases's overall status.
     */
    releaseReadyCondition?: Schema$ReleaseReadyCondition;
    /**
     * Details around the support state of the release's Skaffold version.
     */
    skaffoldSupportedCondition?: Schema$SkaffoldSupportedCondition;
  }
  /**
   * Payload proto for "clouddeploy.googleapis.com/release_notification" Platform Log event that describes the failure to send release status change Pub/Sub notification.
   */
  export interface Schema$ReleaseNotificationEvent {
    /**
     * Debug message for when a notification fails to send.
     */
    message?: string | null;
    /**
     * Unique identifier of the `DeliveryPipeline`.
     */
    pipelineUid?: string | null;
    /**
     * The name of the `Release`.
     */
    release?: string | null;
    /**
     * Unique identifier of the `Release`.
     */
    releaseUid?: string | null;
    /**
     * Type of this notification, e.g. for a Pub/Sub failure.
     */
    type?: string | null;
  }
  /**
   * ReleaseReadyCondition contains information around the status of the Release. If a release is not ready, you cannot create a rollout with the release.
   */
  export interface Schema$ReleaseReadyCondition {
    /**
     * True if the Release is in a valid state. Otherwise at least one condition in `ReleaseCondition` is in an invalid state. Iterate over those conditions and see which condition(s) has status = false to find out what is wrong with the Release.
     */
    status?: boolean | null;
  }
  /**
   * Payload proto for "clouddeploy.googleapis.com/release_render" Platform Log event that describes the render status change.
   */
  export interface Schema$ReleaseRenderEvent {
    /**
     * Debug message for when a render transition occurs. Provides further details as rendering progresses through render states.
     */
    message?: string | null;
    /**
     * Unique identifier of the `DeliveryPipeline`.
     */
    pipelineUid?: string | null;
    /**
     * The name of the release. release_uid is not in this log message because we write some of these log messages at release creation time, before we've generated the uid.
     */
    release?: string | null;
    /**
     * The state of the release render.
     */
    releaseRenderState?: string | null;
    /**
     * Type of this notification, e.g. for a release render state change event.
     */
    type?: string | null;
  }
  /**
   * RenderMetadata includes information associated with a `Release` render.
   */
  export interface Schema$RenderMetadata {
    /**
     * Output only. Metadata associated with rendering for Cloud Run.
     */
    cloudRun?: Schema$CloudRunRenderMetadata;
    /**
     * Output only. Custom metadata provided by user-defined render operation.
     */
    custom?: Schema$CustomMetadata;
  }
  /**
   * RepairPhase tracks the repair attempts that have been made for each `RepairPhaseConfig` specified in the `Automation` resource.
   */
  export interface Schema$RepairPhase {
    /**
     * Output only. Records of the retry attempts for retry repair mode.
     */
    retry?: Schema$RetryPhase;
    /**
     * Output only. Rollback attempt for rollback repair mode .
     */
    rollback?: Schema$RollbackAttempt;
  }
  /**
   * Configuration of the repair phase.
   */
  export interface Schema$RepairPhaseConfig {
    /**
     * Optional. Retries a failed job.
     */
    retry?: Schema$Retry;
    /**
     * Optional. Rolls back a `Rollout`.
     */
    rollback?: Schema$Rollback;
  }
  /**
   * Contains the information for an automated `repair rollout` operation.
   */
  export interface Schema$RepairRolloutOperation {
    /**
     * Output only. The index of the current repair action in the repair sequence.
     */
    currentRepairPhaseIndex?: string | null;
    /**
     * Output only. The job ID for the Job to repair.
     */
    jobId?: string | null;
    /**
     * Output only. The phase ID of the phase that includes the job being repaired.
     */
    phaseId?: string | null;
    /**
     * Output only. Records of the repair attempts. Each repair phase may have multiple retry attempts or single rollback attempt.
     */
    repairPhases?: Schema$RepairPhase[];
    /**
     * Output only. The name of the rollout that initiates the `AutomationRun`.
     */
    rollout?: string | null;
  }
  /**
   * The `RepairRolloutRule` automation rule will automatically repair a failed `Rollout`.
   */
  export interface Schema$RepairRolloutRule {
    /**
     * Output only. Information around the state of the 'Automation' rule.
     */
    condition?: Schema$AutomationRuleCondition;
    /**
     * Required. ID of the rule. This id must be unique in the `Automation` resource to which this rule belongs. The format is `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`.
     */
    id?: string | null;
    /**
     * Optional. Jobs to repair. Proceeds only after job name matched any one in the list, or for all jobs if unspecified or empty. The phase that includes the job must match the phase ID specified in `source_phase`. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$`.
     */
    jobs?: string[] | null;
    /**
     * Optional. Phases within which jobs are subject to automatic repair actions on failure. Proceeds only after phase name matched any one in the list, or for all phases if unspecified. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$`.
     */
    phases?: string[] | null;
    /**
     * Required. Defines the types of automatic repair phases for failed jobs.
     */
    repairPhases?: Schema$RepairPhaseConfig[];
  }
  /**
   * Retries the failed job.
   */
  export interface Schema$Retry {
    /**
     * Required. Total number of retries. Retry is skipped if set to 0; The minimum value is 1, and the maximum value is 10.
     */
    attempts?: string | null;
    /**
     * Optional. The pattern of how wait time will be increased. Default is linear. Backoff mode will be ignored if `wait` is 0.
     */
    backoffMode?: string | null;
    /**
     * Optional. How long to wait for the first retry. Default is 0, and the maximum value is 14d.
     */
    wait?: string | null;
  }
  /**
   * RetryAttempt represents an action of retrying the failed Cloud Deploy job.
   */
  export interface Schema$RetryAttempt {
    /**
     * Output only. The index of this retry attempt.
     */
    attempt?: string | null;
    /**
     * Output only. Valid state of this retry action.
     */
    state?: string | null;
    /**
     * Output only. Description of the state of the Retry.
     */
    stateDesc?: string | null;
    /**
     * Output only. How long the operation will be paused.
     */
    wait?: string | null;
  }
  /**
   * RetryJobRequest is the request object used by `RetryJob`.
   */
  export interface Schema$RetryJobRequest {
    /**
     * Required. The job ID for the Job to retry.
     */
    jobId?: string | null;
    /**
     * Optional. Deploy policies to override. Format is `projects/{project\}/locations/{location\}/deployPolicies/{deployPolicy\}`.
     */
    overrideDeployPolicy?: string[] | null;
    /**
     * Required. The phase ID the Job to retry belongs to.
     */
    phaseId?: string | null;
  }
  /**
   * The response object from 'RetryJob'.
   */
  export interface Schema$RetryJobResponse {}
  /**
   * RetryPhase contains the retry attempts and the metadata for initiating a new attempt.
   */
  export interface Schema$RetryPhase {
    /**
     * Output only. Detail of a retry action.
     */
    attempts?: Schema$RetryAttempt[];
    /**
     * Output only. The pattern of how the wait time of the retry attempt is calculated.
     */
    backoffMode?: string | null;
    /**
     * Output only. The number of attempts that have been made.
     */
    totalAttempts?: string | null;
  }
  /**
   * Rolls back a `Rollout`.
   */
  export interface Schema$Rollback {
    /**
     * Optional. The starting phase ID for the `Rollout`. If unspecified, the `Rollout` will start in the stable phase.
     */
    destinationPhase?: string | null;
    /**
     * Optional. If pending rollout exists on the target, the rollback operation will be aborted.
     */
    disableRollbackIfRolloutPending?: boolean | null;
  }
  /**
   * RollbackAttempt represents an action of rolling back a Cloud Deploy 'Target'.
   */
  export interface Schema$RollbackAttempt {
    /**
     * Output only. The phase to which the rollout will be rolled back to.
     */
    destinationPhase?: string | null;
    /**
     * Output only. If active rollout exists on the target, abort this rollback.
     */
    disableRollbackIfRolloutPending?: boolean | null;
    /**
     * Output only. ID of the rollback `Rollout` to create.
     */
    rolloutId?: string | null;
    /**
     * Output only. Valid state of this rollback action.
     */
    state?: string | null;
    /**
     * Output only. Description of the state of the Rollback.
     */
    stateDesc?: string | null;
  }
  /**
   * Configs for the Rollback rollout.
   */
  export interface Schema$RollbackTargetConfig {
    /**
     * Optional. The rollback `Rollout` to create.
     */
    rollout?: Schema$Rollout;
    /**
     * Optional. The starting phase ID for the `Rollout`. If unspecified, the `Rollout` will start in the stable phase.
     */
    startingPhaseId?: string | null;
  }
  /**
   * The request object for `RollbackTarget`.
   */
  export interface Schema$RollbackTargetRequest {
    /**
     * Optional. Deploy policies to override. Format is `projects/{project\}/locations/{location\}/deployPolicies/{deploy_policy\}`.
     */
    overrideDeployPolicy?: string[] | null;
    /**
     * Optional. ID of the `Release` to roll back to. If this isn't specified, the previous successful `Rollout` to the specified target will be used to determine the `Release`.
     */
    releaseId?: string | null;
    /**
     * Optional. Configs for the rollback `Rollout`.
     */
    rollbackConfig?: Schema$RollbackTargetConfig;
    /**
     * Required. ID of the rollback `Rollout` to create.
     */
    rolloutId?: string | null;
    /**
     * Optional. If provided, this must be the latest `Rollout` that is on the `Target`.
     */
    rolloutToRollBack?: string | null;
    /**
     * Required. ID of the `Target` that is being rolled back.
     */
    targetId?: string | null;
    /**
     * Optional. If set to true, the request is validated and the user is provided with a `RollbackTargetResponse`.
     */
    validateOnly?: boolean | null;
  }
  /**
   * The response object from `RollbackTarget`.
   */
  export interface Schema$RollbackTargetResponse {
    /**
     * The config of the rollback `Rollout` created or will be created.
     */
    rollbackConfig?: Schema$RollbackTargetConfig;
  }
  /**
   * A `Rollout` resource in the Cloud Deploy API. A `Rollout` contains information around a specific deployment to a `Target`.
   */
  export interface Schema$Rollout {
    /**
     * Output only. The AutomationRun actively repairing the rollout.
     */
    activeRepairAutomationRun?: string | null;
    /**
     * Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. Approval state of the `Rollout`.
     */
    approvalState?: string | null;
    /**
     * Output only. Time at which the `Rollout` was approved.
     */
    approveTime?: string | null;
    /**
     * Output only. Name of the `ControllerRollout`. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}/releases/{release\}/rollouts/{rollout\}`.
     */
    controllerRollout?: string | null;
    /**
     * Output only. Time at which the `Rollout` was created.
     */
    createTime?: string | null;
    /**
     * Output only. Time at which the `Rollout` finished deploying.
     */
    deployEndTime?: string | null;
    /**
     * Output only. The reason this rollout failed. This will always be unspecified while the rollout is in progress.
     */
    deployFailureCause?: string | null;
    /**
     * Output only. The resource name of the Cloud Build `Build` object that is used to deploy the Rollout. Format is `projects/{project\}/locations/{location\}/builds/{build\}`.
     */
    deployingBuild?: string | null;
    /**
     * Output only. Time at which the `Rollout` started deploying.
     */
    deployStartTime?: string | null;
    /**
     * Optional. Description of the `Rollout` for user purposes. Max length is 255 characters.
     */
    description?: string | null;
    /**
     * Output only. Time at which the `Rollout` was enqueued.
     */
    enqueueTime?: string | null;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string | null;
    /**
     * Output only. Additional information about the rollout failure, if available.
     */
    failureReason?: string | null;
    /**
     * Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Metadata contains information about the rollout.
     */
    metadata?: Schema$Metadata;
    /**
     * Identifier. Name of the `Rollout`. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}/releases/{release\}/rollouts/{rollout\}`. The `rollout` component must match `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`
     */
    name?: string | null;
    /**
     * Output only. The phases that represent the workflows of this `Rollout`.
     */
    phases?: Schema$Phase[];
    /**
     * Output only. Name of the `Rollout` that is rolled back by this `Rollout`. Empty if this `Rollout` wasn't created as a rollback.
     */
    rollbackOfRollout?: string | null;
    /**
     * Output only. Names of `Rollouts` that rolled back this `Rollout`.
     */
    rolledBackByRollouts?: string[] | null;
    /**
     * Output only. Current state of the `Rollout`.
     */
    state?: string | null;
    /**
     * Required. The ID of Target to which this `Rollout` is deploying.
     */
    targetId?: string | null;
    /**
     * Output only. Unique identifier of the `Rollout`.
     */
    uid?: string | null;
  }
  /**
   * Payload proto for "clouddeploy.googleapis.com/rollout_notification" Platform Log event that describes the failure to send rollout status change Pub/Sub notification.
   */
  export interface Schema$RolloutNotificationEvent {
    /**
     * Debug message for when a notification fails to send.
     */
    message?: string | null;
    /**
     * Unique identifier of the `DeliveryPipeline`.
     */
    pipelineUid?: string | null;
    /**
     * The name of the `Release`.
     */
    release?: string | null;
    /**
     * Unique identifier of the `Release`.
     */
    releaseUid?: string | null;
    /**
     * The name of the `Rollout`.
     */
    rollout?: string | null;
    /**
     * Unique identifier of the `Rollout`.
     */
    rolloutUid?: string | null;
    /**
     * ID of the `Target` that the rollout is deployed to.
     */
    targetId?: string | null;
    /**
     * Type of this notification, e.g. for a Pub/Sub failure.
     */
    type?: string | null;
  }
  /**
   * Rollout restrictions.
   */
  export interface Schema$RolloutRestriction {
    /**
     * Optional. Rollout actions to be restricted as part of the policy. If left empty, all actions will be restricted.
     */
    actions?: string[] | null;
    /**
     * Required. Restriction rule ID. Required and must be unique within a DeployPolicy. The format is `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`.
     */
    id?: string | null;
    /**
     * Optional. What invoked the action. If left empty, all invoker types will be restricted.
     */
    invokers?: string[] | null;
    /**
     * Required. Time window within which actions are restricted.
     */
    timeWindows?: Schema$TimeWindows;
  }
  /**
   * Payload proto for "clouddeploy.googleapis.com/rollout_update" Platform Log event that describes the rollout update event.
   */
  export interface Schema$RolloutUpdateEvent {
    /**
     * Debug message for when a rollout update event occurs.
     */
    message?: string | null;
    /**
     * Unique identifier of the pipeline.
     */
    pipelineUid?: string | null;
    /**
     * The name of the `Release`.
     */
    release?: string | null;
    /**
     * Unique identifier of the release.
     */
    releaseUid?: string | null;
    /**
     * The name of the rollout. rollout_uid is not in this log message because we write some of these log messages at rollout creation time, before we've generated the uid.
     */
    rollout?: string | null;
    /**
     * The type of the rollout update.
     */
    rolloutUpdateType?: string | null;
    /**
     * ID of the target.
     */
    targetId?: string | null;
    /**
     * Type of this notification, e.g. for a rollout update event.
     */
    type?: string | null;
  }
  /**
   * Information about route destinations for the Gateway API service mesh.
   */
  export interface Schema$RouteDestinations {
    /**
     * Required. The clusters where the Gateway API HTTPRoute resource will be deployed to. Valid entries include the associated entities IDs configured in the Target resource and "@self" to include the Target cluster.
     */
    destinationIds?: string[] | null;
    /**
     * Optional. Whether to propagate the Kubernetes Service to the route destination clusters. The Service will always be deployed to the Target cluster even if the HTTPRoute is not. This option may be used to facilitate successful DNS lookup in the route destination clusters. Can only be set to true if destinations are specified.
     */
    propagateService?: boolean | null;
  }
  /**
   * RuntimeConfig contains the runtime specific configurations for a deployment strategy.
   */
  export interface Schema$RuntimeConfig {
    /**
     * Optional. Cloud Run runtime configuration.
     */
    cloudRun?: Schema$CloudRunConfig;
    /**
     * Optional. Kubernetes runtime configuration.
     */
    kubernetes?: Schema$KubernetesConfig;
  }
  /**
   * SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.
   */
  export interface Schema$SerialPipeline {
    /**
     * Optional. Each stage specifies configuration for a `Target`. The ordering of this list defines the promotion flow.
     */
    stages?: Schema$Stage[];
  }
  /**
   * Information about the Kubernetes Service networking configuration.
   */
  export interface Schema$ServiceNetworking {
    /**
     * Required. Name of the Kubernetes Deployment whose traffic is managed by the specified Service.
     */
    deployment?: string | null;
    /**
     * Optional. Whether to disable Pod overprovisioning. If Pod overprovisioning is disabled then Cloud Deploy will limit the number of total Pods used for the deployment strategy to the number of Pods the Deployment has on the cluster.
     */
    disablePodOverprovisioning?: boolean | null;
    /**
     * Optional. The label to use when selecting Pods for the Deployment resource. This label must already be present in the Deployment.
     */
    podSelectorLabel?: string | null;
    /**
     * Required. Name of the Kubernetes Service.
     */
    service?: string | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`
     */
    updateMask?: string | null;
  }
  /**
   * Cloud Build V2 Repository containing Skaffold Configs.
   */
  export interface Schema$SkaffoldGCBRepoSource {
    /**
     * Optional. Relative path from the repository root to the Skaffold Config file.
     */
    path?: string | null;
    /**
     * Optional. Branch or tag to use when cloning the repository.
     */
    ref?: string | null;
    /**
     * Required. Name of the Cloud Build V2 Repository. Format is projects/{project\}/locations/{location\}/connections/{connection\}/repositories/{repository\}.
     */
    repository?: string | null;
  }
  /**
   * Cloud Storage bucket containing Skaffold Config modules.
   */
  export interface Schema$SkaffoldGCSSource {
    /**
     * Optional. Relative path from the source to the Skaffold file.
     */
    path?: string | null;
    /**
     * Required. Cloud Storage source paths to copy recursively. For example, providing "gs://my-bucket/dir/configs/x" will result in Skaffold copying all files within the "dir/configs" directory in the bucket "my-bucket".
     */
    source?: string | null;
  }
  /**
   * Git repository containing Skaffold Config modules.
   */
  export interface Schema$SkaffoldGitSource {
    /**
     * Optional. Relative path from the repository root to the Skaffold file.
     */
    path?: string | null;
    /**
     * Optional. Git branch or tag to use when cloning the repository.
     */
    ref?: string | null;
    /**
     * Required. Git repository the package should be cloned from.
     */
    repo?: string | null;
  }
  /**
   * Skaffold Config modules and their remote source.
   */
  export interface Schema$SkaffoldModules {
    /**
     * Optional. The Skaffold Config modules to use from the specified source.
     */
    configs?: string[] | null;
    /**
     * Optional. Remote git repository containing the Skaffold Config modules.
     */
    git?: Schema$SkaffoldGitSource;
    /**
     * Optional. Cloud Build V2 repository containing the Skaffold Config modules.
     */
    googleCloudBuildRepo?: Schema$SkaffoldGCBRepoSource;
    /**
     * Optional. Cloud Storage bucket containing the Skaffold Config modules.
     */
    googleCloudStorage?: Schema$SkaffoldGCSSource;
  }
  /**
   * SkaffoldSupportedCondition contains information about when support for the release's version of Skaffold ends.
   */
  export interface Schema$SkaffoldSupportedCondition {
    /**
     * The time at which this release's version of Skaffold will enter maintenance mode.
     */
    maintenanceModeTime?: string | null;
    /**
     * The Skaffold support state for this release's version of Skaffold.
     */
    skaffoldSupportState?: string | null;
    /**
     * True if the version of Skaffold used by this release is supported.
     */
    status?: boolean | null;
    /**
     * The time at which this release's version of Skaffold will no longer be supported.
     */
    supportExpirationTime?: string | null;
  }
  /**
   * Details of a supported Skaffold version.
   */
  export interface Schema$SkaffoldVersion {
    /**
     * The time at which this version of Skaffold will enter maintenance mode.
     */
    maintenanceModeTime?: string | null;
    /**
     * Date when this version is expected to no longer be supported.
     */
    supportEndDate?: Schema$Date;
    /**
     * The time at which this version of Skaffold will no longer be supported.
     */
    supportExpirationTime?: string | null;
    /**
     * Release version number. For example, "1.20.3".
     */
    version?: string | null;
  }
  /**
   * Stage specifies a location to which to deploy.
   */
  export interface Schema$Stage {
    /**
     * Optional. The deploy parameters to use for the target in this stage.
     */
    deployParameters?: Schema$DeployParameters[];
    /**
     * Optional. Skaffold profiles to use when rendering the manifest for this stage's `Target`.
     */
    profiles?: string[] | null;
    /**
     * Optional. The strategy to use for a `Rollout` to this stage.
     */
    strategy?: Schema$Strategy;
    /**
     * Optional. The target_id to which this stage points. This field refers exclusively to the last segment of a target name. For example, this field would just be `my-target` (rather than `projects/project/locations/location/targets/my-target`). The location of the `Target` is inferred to be the same as the location of the `DeliveryPipeline` that contains this `Stage`.
     */
    targetId?: string | null;
  }
  /**
   * Standard represents the standard deployment strategy.
   */
  export interface Schema$Standard {
    /**
     * Optional. Configuration for the postdeploy job. If this is not configured, the postdeploy job will not be present.
     */
    postdeploy?: Schema$Postdeploy;
    /**
     * Optional. Configuration for the predeploy job. If this is not configured, the predeploy job will not be present.
     */
    predeploy?: Schema$Predeploy;
    /**
     * Optional. Whether to verify a deployment via `skaffold verify`.
     */
    verify?: boolean | null;
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
   * Strategy contains deployment strategy information.
   */
  export interface Schema$Strategy {
    /**
     * Optional. Canary deployment strategy provides progressive percentage based deployments to a Target.
     */
    canary?: Schema$Canary;
    /**
     * Optional. Standard deployment strategy executes a single deploy and allows verifying the deployment.
     */
    standard?: Schema$Standard;
  }
  /**
   * A `Target` resource in the Cloud Deploy API. A `Target` defines a location to which a Skaffold configuration can be deployed.
   */
  export interface Schema$Target {
    /**
     * Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Optional. Information specifying an Anthos Cluster.
     */
    anthosCluster?: Schema$AnthosCluster;
    /**
     * Optional. Map of entity IDs to their associated entities. Associated entities allows specifying places other than the deployment target for specific features. For example, the Gateway API canary can be configured to deploy the HTTPRoute to a different cluster(s) than the deployment cluster using associated entities. An entity ID must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$`.
     */
    associatedEntities?: {[key: string]: Schema$AssociatedEntities} | null;
    /**
     * Output only. Time at which the `Target` was created.
     */
    createTime?: string | null;
    /**
     * Optional. Information specifying a Custom Target.
     */
    customTarget?: Schema$CustomTarget;
    /**
     * Optional. The deploy parameters to use for this target.
     */
    deployParameters?: {[key: string]: string} | null;
    /**
     * Optional. Description of the `Target`. Max length is 255 characters.
     */
    description?: string | null;
    /**
     * Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string | null;
    /**
     * Optional. Configurations for all execution that relates to this `Target`. Each `ExecutionEnvironmentUsage` value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the `RENDER` and `DEPLOY` `ExecutionEnvironmentUsage` values. When no configurations are specified, execution will use the default specified in `DefaultPool`.
     */
    executionConfigs?: Schema$ExecutionConfig[];
    /**
     * Optional. Information specifying a GKE Cluster.
     */
    gke?: Schema$GkeCluster;
    /**
     * Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. Information specifying a multiTarget.
     */
    multiTarget?: Schema$MultiTarget;
    /**
     * Identifier. Name of the `Target`. Format is `projects/{project\}/locations/{location\}/targets/{target\}`. The `target` component must match `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`
     */
    name?: string | null;
    /**
     * Optional. Whether or not the `Target` requires approval.
     */
    requireApproval?: boolean | null;
    /**
     * Optional. Information specifying a Cloud Run deployment target.
     */
    run?: Schema$CloudRunLocation;
    /**
     * Output only. Resource id of the `Target`.
     */
    targetId?: string | null;
    /**
     * Output only. Unique identifier of the `Target`.
     */
    uid?: string | null;
    /**
     * Output only. Most recent time at which the `Target` was updated.
     */
    updateTime?: string | null;
  }
  /**
   * The artifacts produced by a target render operation.
   */
  export interface Schema$TargetArtifact {
    /**
     * Output only. URI of a directory containing the artifacts. This contains deployment configuration used by Skaffold during a rollout, and all paths are relative to this location.
     */
    artifactUri?: string | null;
    /**
     * Output only. File path of the rendered manifest relative to the URI for the stable phase.
     */
    manifestPath?: string | null;
    /**
     * Output only. Map from the phase ID to the phase artifacts for the `Target`.
     */
    phaseArtifacts?: {[key: string]: Schema$PhaseArtifact} | null;
    /**
     * Output only. File path of the resolved Skaffold configuration for the stable phase, relative to the URI.
     */
    skaffoldConfigPath?: string | null;
  }
  /**
   * Contains criteria for selecting Targets. This could be used to select targets for a Deploy Policy or for an Automation.
   */
  export interface Schema$TargetAttribute {
    /**
     * Optional. ID of the `Target`. The value of this field could be one of the following: * The last segment of a target name * "*", all targets in a location
     */
    id?: string | null;
    /**
     * Target labels.
     */
    labels?: {[key: string]: string} | null;
  }
  /**
   * Payload proto for "clouddeploy.googleapis.com/target_notification" Platform Log event that describes the failure to send target status change Pub/Sub notification.
   */
  export interface Schema$TargetNotificationEvent {
    /**
     * Debug message for when a notification fails to send.
     */
    message?: string | null;
    /**
     * The name of the `Target`.
     */
    target?: string | null;
    /**
     * Type of this notification, e.g. for a Pub/Sub failure.
     */
    type?: string | null;
  }
  /**
   * Details of rendering for a single target.
   */
  export interface Schema$TargetRender {
    /**
     * Output only. Reason this render failed. This will always be unspecified while the render in progress.
     */
    failureCause?: string | null;
    /**
     * Output only. Additional information about the render failure, if available.
     */
    failureMessage?: string | null;
    /**
     * Output only. Metadata related to the `Release` render for this Target.
     */
    metadata?: Schema$RenderMetadata;
    /**
     * Output only. The resource name of the Cloud Build `Build` object that is used to render the manifest for this target. Format is `projects/{project\}/locations/{location\}/builds/{build\}`.
     */
    renderingBuild?: string | null;
    /**
     * Output only. Current state of the render operation for this Target.
     */
    renderingState?: string | null;
  }
  /**
   * The targets involved in a single timed promotion.
   */
  export interface Schema$Targets {
    /**
     * Optional. The destination target ID.
     */
    destinationTargetId?: string | null;
    /**
     * Optional. The source target ID.
     */
    sourceTargetId?: string | null;
  }
  /**
   * `TargetsPresentCondition` contains information on any Targets referenced in the Delivery Pipeline that do not actually exist.
   */
  export interface Schema$TargetsPresentCondition {
    /**
     * The list of Target names that do not exist. For example, `projects/{project_id\}/locations/{location_name\}/targets/{target_name\}`.
     */
    missingTargets?: string[] | null;
    /**
     * True if there aren't any missing Targets.
     */
    status?: boolean | null;
    /**
     * Last time the condition was updated.
     */
    updateTime?: string | null;
  }
  /**
   * TargetsTypeCondition contains information on whether the Targets defined in the Delivery Pipeline are of the same type.
   */
  export interface Schema$TargetsTypeCondition {
    /**
     * Human readable error message.
     */
    errorDetails?: string | null;
    /**
     * True if the targets are all a comparable type. For example this is true if all targets are GKE clusters. This is false if some targets are Cloud Run targets and others are GKE clusters.
     */
    status?: boolean | null;
  }
  /**
   * The request object used by `TerminateJobRun`.
   */
  export interface Schema$TerminateJobRunRequest {
    /**
     * Optional. Deploy policies to override. Format is `projects/{project\}/locations/{location\}/deployPolicies/{deployPolicy\}`.
     */
    overrideDeployPolicy?: string[] | null;
  }
  /**
   * The response object from `TerminateJobRun`.
   */
  export interface Schema$TerminateJobRunResponse {}
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
  }
  /**
   * `TimedPromoteReleaseCondition` contains conditions specific to an Automation with a Timed Promote Release rule defined.
   */
  export interface Schema$TimedPromoteReleaseCondition {
    /**
     * Output only. When the next scheduled promotion(s) will occur.
     */
    nextPromotionTime?: string | null;
    /**
     * Output only. A list of targets involved in the upcoming timed promotion(s).
     */
    targetsList?: Schema$Targets[];
  }
  /**
   * Contains the information of an automated timed promote-release operation.
   */
  export interface Schema$TimedPromoteReleaseOperation {
    /**
     * Output only. The starting phase of the rollout created by this operation.
     */
    phase?: string | null;
    /**
     * Output only. The name of the release to be promoted.
     */
    release?: string | null;
    /**
     * Output only. The ID of the target that represents the promotion stage to which the release will be promoted. The value of this field is the last segment of a target name.
     */
    targetId?: string | null;
  }
  /**
   * The `TimedPromoteReleaseRule` will automatically promote a release from the current target(s) to the specified target(s) on a configured schedule.
   */
  export interface Schema$TimedPromoteReleaseRule {
    /**
     * Output only. Information around the state of the Automation rule.
     */
    condition?: Schema$AutomationRuleCondition;
    /**
     * Optional. The starting phase of the rollout created by this rule. Default to the first phase.
     */
    destinationPhase?: string | null;
    /**
     * Optional. The ID of the stage in the pipeline to which this `Release` is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following: * The last segment of a target name * "@next", the next target in the promotion sequence
     */
    destinationTargetId?: string | null;
    /**
     * Required. ID of the rule. This ID must be unique in the `Automation` resource to which this rule belongs. The format is `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`.
     */
    id?: string | null;
    /**
     * Required. Schedule in crontab format. e.g. "0 9 * * 1" for every Monday at 9am.
     */
    schedule?: string | null;
    /**
     * Required. The time zone in IANA format [IANA Time Zone Database](https://www.iana.org/time-zones) (e.g. America/New_York).
     */
    timeZone?: string | null;
  }
  /**
   * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
   */
  export interface Schema$TimeOfDay {
    /**
     * Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours?: number | null;
    /**
     * Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.
     */
    minutes?: number | null;
    /**
     * Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.
     */
    nanos?: number | null;
    /**
     * Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | null;
  }
  /**
   * Time windows within which actions are restricted. See the [documentation](https://cloud.google.com/deploy/docs/deploy-policy#dates_times) for more information on how to configure dates/times.
   */
  export interface Schema$TimeWindows {
    /**
     * Optional. One-time windows within which actions are restricted.
     */
    oneTimeWindows?: Schema$OneTimeWindow[];
    /**
     * Required. The time zone in IANA format [IANA Time Zone Database](https://www.iana.org/time-zones) (e.g. America/New_York).
     */
    timeZone?: string | null;
    /**
     * Optional. Recurring weekly windows within which actions are restricted.
     */
    weeklyWindows?: Schema$WeeklyWindow[];
  }
  /**
   * A verify Job.
   */
  export interface Schema$VerifyJob {}
  /**
   * VerifyJobRun contains information specific to a verify `JobRun`.
   */
  export interface Schema$VerifyJobRun {
    /**
     * Output only. URI of a directory containing the verify artifacts. This contains the Skaffold event log.
     */
    artifactUri?: string | null;
    /**
     * Output only. The resource name of the Cloud Build `Build` object that is used to verify. Format is `projects/{project\}/locations/{location\}/builds/{build\}`.
     */
    build?: string | null;
    /**
     * Output only. File path of the Skaffold event log relative to the artifact URI.
     */
    eventLogPath?: string | null;
    /**
     * Output only. The reason the verify failed. This will always be unspecified while the verify is in progress or if it succeeded.
     */
    failureCause?: string | null;
    /**
     * Output only. Additional information about the verify failure, if available.
     */
    failureMessage?: string | null;
  }
  /**
   * Weekly windows. For example, blocking actions every Saturday and Sunday. Another example would be blocking actions every weekday from 5pm to midnight.
   */
  export interface Schema$WeeklyWindow {
    /**
     * Optional. Days of week. If left empty, all days of the week will be included.
     */
    daysOfWeek?: string[] | null;
    /**
     * Optional. End time (exclusive). Use 24:00 to indicate midnight. If you specify end_time you must also specify start_time. If left empty, this will block for the entire day for the days specified in days_of_week.
     */
    endTime?: Schema$TimeOfDay;
    /**
     * Optional. Start time (inclusive). Use 00:00 for the beginning of the day. If you specify start_time you must also specify end_time. If left empty, this will block for the entire day for the days specified in days_of_week.
     */
    startTime?: Schema$TimeOfDay;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    customTargetTypes: Resource$Projects$Locations$Customtargettypes;
    deliveryPipelines: Resource$Projects$Locations$Deliverypipelines;
    deployPolicies: Resource$Projects$Locations$Deploypolicies;
    operations: Resource$Projects$Locations$Operations;
    targets: Resource$Projects$Locations$Targets;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.customTargetTypes =
        new Resource$Projects$Locations$Customtargettypes(this.context);
      this.deliveryPipelines =
        new Resource$Projects$Locations$Deliverypipelines(this.context);
      this.deployPolicies = new Resource$Projects$Locations$Deploypolicies(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.targets = new Resource$Projects$Locations$Targets(this.context);
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.get({
     *     // Resource name for the location.
     *     name: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "labels": {},
     *   //   "locationId": "my_locationId",
     *   //   "metadata": {},
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
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Location>>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Location>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$Location>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * Gets the configuration for a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.getConfig({
     *     // Required. Name of requested configuration.
     *     name: 'projects/my-project/locations/my-location/config',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "defaultSkaffoldVersion": "my_defaultSkaffoldVersion",
     *   //   "name": "my_name",
     *   //   "supportedVersions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getConfig(
      params: Params$Resource$Projects$Locations$Getconfig,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getConfig(
      params?: Params$Resource$Projects$Locations$Getconfig,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Config>>;
    getConfig(
      params: Params$Resource$Projects$Locations$Getconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getConfig(
      params: Params$Resource$Projects$Locations$Getconfig,
      options: MethodOptions | BodyResponseCallback<Schema$Config>,
      callback: BodyResponseCallback<Schema$Config>
    ): void;
    getConfig(
      params: Params$Resource$Projects$Locations$Getconfig,
      callback: BodyResponseCallback<Schema$Config>
    ): void;
    getConfig(callback: BodyResponseCallback<Schema$Config>): void;
    getConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Getconfig
        | BodyResponseCallback<Schema$Config>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Config>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Config>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Config>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Getconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Getconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$Config>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Config>(parameters);
      }
    }

    /**
     * Lists information about the supported locations for this service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.list({
     *     // Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     *     extraLocationTypes: 'placeholder-value',
     *     // A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     *     filter: 'placeholder-value',
     *     // The resource that owns the locations collection, if applicable.
     *     name: 'projects/my-project',
     *     // The maximum number of results to return. If not set, the service selects a default.
     *     pageSize: 'placeholder-value',
     *     // A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "locations": [],
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
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListLocationsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListLocationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/locations').replace(
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
        createAPIRequest<Schema$ListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Getconfig
    extends StandardParameters {
    /**
     * Required. Name of requested configuration.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     */
    extraLocationTypes?: string[];
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The maximum number of results to return. If not set, the service selects a default.
     */
    pageSize?: number;
    /**
     * A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Customtargettypes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new CustomTargetType in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.customTargetTypes.create({
     *     // Required. ID of the `CustomTargetType`.
     *     customTargetTypeId: 'placeholder-value',
     *     // Required. The parent collection in which the `CustomTargetType` must be created. The format is `projects/{project_id\}/locations/{location_name\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "createTime": "my_createTime",
     *       //   "customActions": {},
     *       //   "customTargetTypeId": "my_customTargetTypeId",
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
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
    create(
      params: Params$Resource$Projects$Locations$Customtargettypes$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Customtargettypes$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Customtargettypes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Customtargettypes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Customtargettypes$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Customtargettypes$Create
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Customtargettypes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Customtargettypes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/customTargetTypes').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a single CustomTargetType.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.customTargetTypes.delete({
     *     // Optional. If set to true, then deleting an already deleted or non-existing `CustomTargetType` will succeed.
     *     allowMissing: 'placeholder-value',
     *     // Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     *     etag: 'placeholder-value',
     *     // Required. The name of the `CustomTargetType` to delete. Format must be `projects/{project_id\}/locations/{location_name\}/customTargetTypes/{custom_target_type\}`.
     *     name: 'projects/my-project/locations/my-location/customTargetTypes/my-customTargetType',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Optional. If set to true, the request is validated but no actual change is made.
     *     validateOnly: 'placeholder-value',
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
    delete(
      params: Params$Resource$Projects$Locations$Customtargettypes$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Customtargettypes$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Customtargettypes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Customtargettypes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Customtargettypes$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Customtargettypes$Delete
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Customtargettypes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Customtargettypes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets details of a single CustomTargetType.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.customTargetTypes.get({
     *     // Required. Name of the `CustomTargetType`. Format must be `projects/{project_id\}/locations/{location_name\}/customTargetTypes/{custom_target_type\}`.
     *     name: 'projects/my-project/locations/my-location/customTargetTypes/my-customTargetType',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "createTime": "my_createTime",
     *   //   "customActions": {},
     *   //   "customTargetTypeId": "my_customTargetTypeId",
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "uid": "my_uid",
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
      params: Params$Resource$Projects$Locations$Customtargettypes$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Customtargettypes$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CustomTargetType>>;
    get(
      params: Params$Resource$Projects$Locations$Customtargettypes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Customtargettypes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CustomTargetType>,
      callback: BodyResponseCallback<Schema$CustomTargetType>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Customtargettypes$Get,
      callback: BodyResponseCallback<Schema$CustomTargetType>
    ): void;
    get(callback: BodyResponseCallback<Schema$CustomTargetType>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Customtargettypes$Get
        | BodyResponseCallback<Schema$CustomTargetType>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomTargetType>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomTargetType>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CustomTargetType>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Customtargettypes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Customtargettypes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$CustomTargetType>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomTargetType>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.customTargetTypes.getIamPolicy({
     *       // Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *       'options.requestedPolicyVersion': 'placeholder-value',
     *       // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/customTargetTypes/my-customTargetType',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Customtargettypes$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Customtargettypes$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Customtargettypes$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Customtargettypes$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Customtargettypes$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Customtargettypes$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Customtargettypes$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Customtargettypes$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Lists CustomTargetTypes in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.customTargetTypes.list({
     *     // Optional. Filter custom target types to be returned. See https://google.aip.dev/160 for more details.
     *     filter: 'placeholder-value',
     *     // Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of `CustomTargetType` objects to return. The service may return fewer than this value. If unspecified, at most 50 `CustomTargetType` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListCustomTargetTypes` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent that owns this collection of custom target types. Format must be `projects/{project_id\}/locations/{location_name\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customTargetTypes": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Customtargettypes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Customtargettypes$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListCustomTargetTypesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Customtargettypes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Customtargettypes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCustomTargetTypesResponse>,
      callback: BodyResponseCallback<Schema$ListCustomTargetTypesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Customtargettypes$List,
      callback: BodyResponseCallback<Schema$ListCustomTargetTypesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListCustomTargetTypesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Customtargettypes$List
        | BodyResponseCallback<Schema$ListCustomTargetTypesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCustomTargetTypesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCustomTargetTypesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListCustomTargetTypesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Customtargettypes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Customtargettypes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/customTargetTypes').replace(
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
        createAPIRequest<Schema$ListCustomTargetTypesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCustomTargetTypesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a single CustomTargetType.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.customTargetTypes.patch({
     *     // Optional. If set to true, updating a `CustomTargetType` that does not exist will result in the creation of a new `CustomTargetType`.
     *     allowMissing: 'placeholder-value',
     *     // Identifier. Name of the `CustomTargetType`. Format is `projects/{project\}/locations/{location\}/customTargetTypes/{customTargetType\}`. The `customTargetType` component must match `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`
     *     name: 'projects/my-project/locations/my-location/customTargetTypes/my-customTargetType',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. Field mask is used to specify the fields to be overwritten by the update in the `CustomTargetType` resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it's in the mask. If the user doesn't provide a mask then all fields are overwritten.
     *     updateMask: 'placeholder-value',
     *     // Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "createTime": "my_createTime",
     *       //   "customActions": {},
     *       //   "customTargetTypeId": "my_customTargetTypeId",
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Projects$Locations$Customtargettypes$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Customtargettypes$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Customtargettypes$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Customtargettypes$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Customtargettypes$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Customtargettypes$Patch
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Customtargettypes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Customtargettypes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.customTargetTypes.setIamPolicy({
     *       // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/customTargetTypes/my-customTargetType',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "policy": {},
     *         //   "updateMask": "my_updateMask"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Customtargettypes$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Customtargettypes$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Customtargettypes$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Customtargettypes$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Customtargettypes$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Customtargettypes$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Customtargettypes$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Customtargettypes$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Customtargettypes$Create
    extends StandardParameters {
    /**
     * Required. ID of the `CustomTargetType`.
     */
    customTargetTypeId?: string;
    /**
     * Required. The parent collection in which the `CustomTargetType` must be created. The format is `projects/{project_id\}/locations/{location_name\}`.
     */
    parent?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomTargetType;
  }
  export interface Params$Resource$Projects$Locations$Customtargettypes$Delete
    extends StandardParameters {
    /**
     * Optional. If set to true, then deleting an already deleted or non-existing `CustomTargetType` will succeed.
     */
    allowMissing?: boolean;
    /**
     * Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Required. The name of the `CustomTargetType` to delete. Format must be `projects/{project_id\}/locations/{location_name\}/customTargetTypes/{custom_target_type\}`.
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. If set to true, the request is validated but no actual change is made.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Customtargettypes$Get
    extends StandardParameters {
    /**
     * Required. Name of the `CustomTargetType`. Format must be `projects/{project_id\}/locations/{location_name\}/customTargetTypes/{custom_target_type\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Customtargettypes$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Customtargettypes$List
    extends StandardParameters {
    /**
     * Optional. Filter custom target types to be returned. See https://google.aip.dev/160 for more details.
     */
    filter?: string;
    /**
     * Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of `CustomTargetType` objects to return. The service may return fewer than this value. If unspecified, at most 50 `CustomTargetType` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListCustomTargetTypes` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent that owns this collection of custom target types. Format must be `projects/{project_id\}/locations/{location_name\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Customtargettypes$Patch
    extends StandardParameters {
    /**
     * Optional. If set to true, updating a `CustomTargetType` that does not exist will result in the creation of a new `CustomTargetType`.
     */
    allowMissing?: boolean;
    /**
     * Identifier. Name of the `CustomTargetType`. Format is `projects/{project\}/locations/{location\}/customTargetTypes/{customTargetType\}`. The `customTargetType` component must match `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten by the update in the `CustomTargetType` resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it's in the mask. If the user doesn't provide a mask then all fields are overwritten.
     */
    updateMask?: string;
    /**
     * Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomTargetType;
  }
  export interface Params$Resource$Projects$Locations$Customtargettypes$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }

  export class Resource$Projects$Locations$Deliverypipelines {
    context: APIRequestContext;
    automationRuns: Resource$Projects$Locations$Deliverypipelines$Automationruns;
    automations: Resource$Projects$Locations$Deliverypipelines$Automations;
    releases: Resource$Projects$Locations$Deliverypipelines$Releases;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.automationRuns =
        new Resource$Projects$Locations$Deliverypipelines$Automationruns(
          this.context
        );
      this.automations =
        new Resource$Projects$Locations$Deliverypipelines$Automations(
          this.context
        );
      this.releases =
        new Resource$Projects$Locations$Deliverypipelines$Releases(
          this.context
        );
    }

    /**
     * Creates a new DeliveryPipeline in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.deliveryPipelines.create({
     *     // Required. ID of the `DeliveryPipeline`.
     *     deliveryPipelineId: 'placeholder-value',
     *     // Required. The parent collection in which the `DeliveryPipeline` must be created. The format is `projects/{project_id\}/locations/{location_name\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "condition": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "serialPipeline": {},
     *       //   "suspended": false,
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
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
    create(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Create
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/deliveryPipelines').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a single DeliveryPipeline.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.deliveryPipelines.delete({
     *     // Optional. If set to true, then deleting an already deleted or non-existing `DeliveryPipeline` will succeed.
     *     allowMissing: 'placeholder-value',
     *     // Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     *     etag: 'placeholder-value',
     *     // Optional. If set to true, all child resources under this pipeline will also be deleted. Otherwise, the request will only work if the pipeline has no child resources.
     *     force: 'placeholder-value',
     *     // Required. The name of the `DeliveryPipeline` to delete. The format is `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}`.
     *     name: 'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Optional. If set, validate the request and preview the review, but do not actually post it.
     *     validateOnly: 'placeholder-value',
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
    delete(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Delete
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets details of a single DeliveryPipeline.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.deliveryPipelines.get({
     *     // Required. Name of the `DeliveryPipeline`. Format must be `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}`.
     *     name: 'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "condition": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "serialPipeline": {},
     *   //   "suspended": false,
     *   //   "uid": "my_uid",
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
      params: Params$Resource$Projects$Locations$Deliverypipelines$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DeliveryPipeline>>;
    get(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DeliveryPipeline>,
      callback: BodyResponseCallback<Schema$DeliveryPipeline>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Get,
      callback: BodyResponseCallback<Schema$DeliveryPipeline>
    ): void;
    get(callback: BodyResponseCallback<Schema$DeliveryPipeline>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Get
        | BodyResponseCallback<Schema$DeliveryPipeline>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DeliveryPipeline>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DeliveryPipeline>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DeliveryPipeline>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Deliverypipelines$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$DeliveryPipeline>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DeliveryPipeline>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.getIamPolicy({
     *       // Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *       'options.requestedPolicyVersion': 'placeholder-value',
     *       // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Lists DeliveryPipelines in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.deliveryPipelines.list({
     *     // Filter pipelines to be returned. See https://google.aip.dev/160 for more details.
     *     filter: 'placeholder-value',
     *     // Field to sort by. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // The maximum number of pipelines to return. The service may return fewer than this value. If unspecified, at most 50 pipelines will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListDeliveryPipelines` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent, which owns this collection of pipelines. Format must be `projects/{project_id\}/locations/{location_name\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deliveryPipelines": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Deliverypipelines$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDeliveryPipelinesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Deliverypipelines$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Deliverypipelines$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDeliveryPipelinesResponse>,
      callback: BodyResponseCallback<Schema$ListDeliveryPipelinesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Deliverypipelines$List,
      callback: BodyResponseCallback<Schema$ListDeliveryPipelinesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListDeliveryPipelinesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$List
        | BodyResponseCallback<Schema$ListDeliveryPipelinesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDeliveryPipelinesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDeliveryPipelinesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDeliveryPipelinesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/deliveryPipelines').replace(
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
        createAPIRequest<Schema$ListDeliveryPipelinesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDeliveryPipelinesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the parameters of a single DeliveryPipeline.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.deliveryPipelines.patch({
     *     // Optional. If set to true, updating a `DeliveryPipeline` that does not exist will result in the creation of a new `DeliveryPipeline`.
     *     allowMissing: 'placeholder-value',
     *     // Identifier. Name of the `DeliveryPipeline`. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}`. The `deliveryPipeline` component must match `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`
     *     name: 'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. Field mask is used to specify the fields to be overwritten by the update in the `DeliveryPipeline` resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it's in the mask. If the user doesn't provide a mask then all fields are overwritten.
     *     updateMask: 'placeholder-value',
     *     // Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "condition": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "serialPipeline": {},
     *       //   "suspended": false,
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Patch
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Creates a `Rollout` to roll back the specified target.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.rollbackTarget({
     *       // Required. The `DeliveryPipeline` for which the rollback `Rollout` must be created. The format is `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}`.
     *       name: 'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "overrideDeployPolicy": [],
     *         //   "releaseId": "my_releaseId",
     *         //   "rollbackConfig": {},
     *         //   "rolloutId": "my_rolloutId",
     *         //   "rolloutToRollBack": "my_rolloutToRollBack",
     *         //   "targetId": "my_targetId",
     *         //   "validateOnly": false
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "rollbackConfig": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    rollbackTarget(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Rollbacktarget,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    rollbackTarget(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Rollbacktarget,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RollbackTargetResponse>>;
    rollbackTarget(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Rollbacktarget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rollbackTarget(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Rollbacktarget,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RollbackTargetResponse>,
      callback: BodyResponseCallback<Schema$RollbackTargetResponse>
    ): void;
    rollbackTarget(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Rollbacktarget,
      callback: BodyResponseCallback<Schema$RollbackTargetResponse>
    ): void;
    rollbackTarget(
      callback: BodyResponseCallback<Schema$RollbackTargetResponse>
    ): void;
    rollbackTarget(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Rollbacktarget
        | BodyResponseCallback<Schema$RollbackTargetResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RollbackTargetResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RollbackTargetResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RollbackTargetResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Rollbacktarget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Rollbacktarget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:rollbackTarget').replace(
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
        createAPIRequest<Schema$RollbackTargetResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RollbackTargetResponse>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.setIamPolicy({
     *       // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "policy": {},
     *         //   "updateMask": "my_updateMask"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.testIamPermissions({
     *       // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "permissions": []
     *         // }
     *       },
     *     });
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
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Testiampermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Testiampermissions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
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
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Deliverypipelines$Create
    extends StandardParameters {
    /**
     * Required. ID of the `DeliveryPipeline`.
     */
    deliveryPipelineId?: string;
    /**
     * Required. The parent collection in which the `DeliveryPipeline` must be created. The format is `projects/{project_id\}/locations/{location_name\}`.
     */
    parent?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeliveryPipeline;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Delete
    extends StandardParameters {
    /**
     * Optional. If set to true, then deleting an already deleted or non-existing `DeliveryPipeline` will succeed.
     */
    allowMissing?: boolean;
    /**
     * Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Optional. If set to true, all child resources under this pipeline will also be deleted. Otherwise, the request will only work if the pipeline has no child resources.
     */
    force?: boolean;
    /**
     * Required. The name of the `DeliveryPipeline` to delete. The format is `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}`.
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. If set, validate the request and preview the review, but do not actually post it.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Get
    extends StandardParameters {
    /**
     * Required. Name of the `DeliveryPipeline`. Format must be `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$List
    extends StandardParameters {
    /**
     * Filter pipelines to be returned. See https://google.aip.dev/160 for more details.
     */
    filter?: string;
    /**
     * Field to sort by. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * The maximum number of pipelines to return. The service may return fewer than this value. If unspecified, at most 50 pipelines will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListDeliveryPipelines` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of pipelines. Format must be `projects/{project_id\}/locations/{location_name\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Patch
    extends StandardParameters {
    /**
     * Optional. If set to true, updating a `DeliveryPipeline` that does not exist will result in the creation of a new `DeliveryPipeline`.
     */
    allowMissing?: boolean;
    /**
     * Identifier. Name of the `DeliveryPipeline`. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}`. The `deliveryPipeline` component must match `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten by the update in the `DeliveryPipeline` resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it's in the mask. If the user doesn't provide a mask then all fields are overwritten.
     */
    updateMask?: string;
    /**
     * Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeliveryPipeline;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Rollbacktarget
    extends StandardParameters {
    /**
     * Required. The `DeliveryPipeline` for which the rollback `Rollout` must be created. The format is `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RollbackTargetRequest;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Deliverypipelines$Automationruns {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Cancels an AutomationRun. The `state` of the `AutomationRun` after cancelling is `CANCELLED`. `CancelAutomationRun` can be called on AutomationRun in the state `IN_PROGRESS` and `PENDING`; AutomationRun in a different state returns an `FAILED_PRECONDITION` error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.automationRuns.cancel(
     *       {
     *         // Required. Name of the `AutomationRun`. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{delivery_pipeline\}/automationRuns/{automation_run\}`.
     *         name: 'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline/automationRuns/my-automationRun',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {}
     *         },
     *       },
     *     );
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
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CancelAutomationRunResponse>>;
    cancel(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$Cancel,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CancelAutomationRunResponse>,
      callback: BodyResponseCallback<Schema$CancelAutomationRunResponse>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$Cancel,
      callback: BodyResponseCallback<Schema$CancelAutomationRunResponse>
    ): void;
    cancel(
      callback: BodyResponseCallback<Schema$CancelAutomationRunResponse>
    ): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$Cancel
        | BodyResponseCallback<Schema$CancelAutomationRunResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CancelAutomationRunResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CancelAutomationRunResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CancelAutomationRunResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$CancelAutomationRunResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CancelAutomationRunResponse>(parameters);
      }
    }

    /**
     * Gets details of a single AutomationRun.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.automationRuns.get({
     *       // Required. Name of the `AutomationRun`. Format must be `projects/{project\}/locations/{location\}/deliveryPipelines/{delivery_pipeline\}/automationRuns/{automation_run\}`.
     *       name: 'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline/automationRuns/my-automationRun',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "advanceRolloutOperation": {},
     *   //   "automationId": "my_automationId",
     *   //   "automationSnapshot": {},
     *   //   "createTime": "my_createTime",
     *   //   "etag": "my_etag",
     *   //   "expireTime": "my_expireTime",
     *   //   "name": "my_name",
     *   //   "policyViolation": {},
     *   //   "promoteReleaseOperation": {},
     *   //   "repairRolloutOperation": {},
     *   //   "ruleId": "my_ruleId",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "state": "my_state",
     *   //   "stateDescription": "my_stateDescription",
     *   //   "targetId": "my_targetId",
     *   //   "timedPromoteReleaseOperation": {},
     *   //   "updateTime": "my_updateTime",
     *   //   "waitUntilTime": "my_waitUntilTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AutomationRun>>;
    get(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AutomationRun>,
      callback: BodyResponseCallback<Schema$AutomationRun>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$Get,
      callback: BodyResponseCallback<Schema$AutomationRun>
    ): void;
    get(callback: BodyResponseCallback<Schema$AutomationRun>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$Get
        | BodyResponseCallback<Schema$AutomationRun>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AutomationRun>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AutomationRun>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AutomationRun>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$AutomationRun>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AutomationRun>(parameters);
      }
    }

    /**
     * Lists AutomationRuns in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.automationRuns.list({
     *       // Filter automationRuns to be returned. All fields can be used in the filter.
     *       filter: 'placeholder-value',
     *       // Field to sort by.
     *       orderBy: 'placeholder-value',
     *       // The maximum number of automationRuns to return. The service may return fewer than this value. If unspecified, at most 50 automationRuns will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     *       pageSize: 'placeholder-value',
     *       // A page token, received from a previous `ListAutomationRuns` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent `Delivery Pipeline`, which owns this collection of automationRuns. Format must be `projects/{project\}/locations/{location\}/deliveryPipelines/{delivery_pipeline\}`.
     *       parent:
     *         'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "automationRuns": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAutomationRunsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAutomationRunsResponse>,
      callback: BodyResponseCallback<Schema$ListAutomationRunsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$List,
      callback: BodyResponseCallback<Schema$ListAutomationRunsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAutomationRunsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$List
        | BodyResponseCallback<Schema$ListAutomationRunsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAutomationRunsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAutomationRunsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAutomationRunsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/automationRuns').replace(
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
        createAPIRequest<Schema$ListAutomationRunsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAutomationRunsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$Cancel
    extends StandardParameters {
    /**
     * Required. Name of the `AutomationRun`. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{delivery_pipeline\}/automationRuns/{automation_run\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelAutomationRunRequest;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$Get
    extends StandardParameters {
    /**
     * Required. Name of the `AutomationRun`. Format must be `projects/{project\}/locations/{location\}/deliveryPipelines/{delivery_pipeline\}/automationRuns/{automation_run\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Automationruns$List
    extends StandardParameters {
    /**
     * Filter automationRuns to be returned. All fields can be used in the filter.
     */
    filter?: string;
    /**
     * Field to sort by.
     */
    orderBy?: string;
    /**
     * The maximum number of automationRuns to return. The service may return fewer than this value. If unspecified, at most 50 automationRuns will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListAutomationRuns` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent `Delivery Pipeline`, which owns this collection of automationRuns. Format must be `projects/{project\}/locations/{location\}/deliveryPipelines/{delivery_pipeline\}`.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Deliverypipelines$Automations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new Automation in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.automations.create({
     *       // Required. ID of the `Automation`.
     *       automationId: 'placeholder-value',
     *       // Required. The parent collection in which the `Automation` must be created. The format is `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}`.
     *       parent:
     *         'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline',
     *       // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *       // Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     *       validateOnly: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "annotations": {},
     *         //   "createTime": "my_createTime",
     *         //   "description": "my_description",
     *         //   "etag": "my_etag",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "rules": [],
     *         //   "selector": {},
     *         //   "serviceAccount": "my_serviceAccount",
     *         //   "suspended": false,
     *         //   "uid": "my_uid",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
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
    create(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automations$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Automations$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automations$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automations$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automations$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Automations$Create
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Automations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Automations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/automations').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a single Automation resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.automations.delete({
     *       // Optional. If set to true, then deleting an already deleted or non-existing `Automation` will succeed.
     *       allowMissing: 'placeholder-value',
     *       // Optional. The weak etag of the request. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     *       etag: 'placeholder-value',
     *       // Required. The name of the `Automation` to delete. The format is `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}/automations/{automation_name\}`.
     *       name: 'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline/automations/my-automation',
     *       // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *       // Optional. If set, validate the request and verify whether the resource exists, but do not actually post it.
     *       validateOnly: 'placeholder-value',
     *     });
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
    delete(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Automations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automations$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Automations$Delete
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Automations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Automations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets details of a single Automation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.automations.get({
     *       // Required. Name of the `Automation`. Format must be `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}/automations/{automation_name\}`.
     *       name: 'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline/automations/my-automation',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "rules": [],
     *   //   "selector": {},
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "suspended": false,
     *   //   "uid": "my_uid",
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
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Automations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Automation>>;
    get(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Automation>,
      callback: BodyResponseCallback<Schema$Automation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automations$Get,
      callback: BodyResponseCallback<Schema$Automation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Automation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Automations$Get
        | BodyResponseCallback<Schema$Automation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Automation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Automation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Automation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Automations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Automations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$Automation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Automation>(parameters);
      }
    }

    /**
     * Lists Automations in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.automations.list({
     *       // Filter automations to be returned. All fields can be used in the filter.
     *       filter: 'placeholder-value',
     *       // Field to sort by.
     *       orderBy: 'placeholder-value',
     *       // The maximum number of automations to return. The service may return fewer than this value. If unspecified, at most 50 automations will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     *       pageSize: 'placeholder-value',
     *       // A page token, received from a previous `ListAutomations` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent `Delivery Pipeline`, which owns this collection of automations. Format must be `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}`.
     *       parent:
     *         'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "automations": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Automations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAutomationsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAutomationsResponse>,
      callback: BodyResponseCallback<Schema$ListAutomationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automations$List,
      callback: BodyResponseCallback<Schema$ListAutomationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAutomationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Automations$List
        | BodyResponseCallback<Schema$ListAutomationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAutomationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAutomationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAutomationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Automations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Automations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/automations').replace(
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
        createAPIRequest<Schema$ListAutomationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAutomationsResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single Automation resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.automations.patch({
     *       // Optional. If set to true, updating a `Automation` that does not exist will result in the creation of a new `Automation`.
     *       allowMissing: 'placeholder-value',
     *       // Output only. Name of the `Automation`. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{delivery_pipeline\}/automations/{automation\}`.
     *       name: 'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline/automations/my-automation',
     *       // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *       // Required. Field mask is used to specify the fields to be overwritten by the update in the `Automation` resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it's in the mask. If the user doesn't provide a mask then all fields are overwritten.
     *       updateMask: 'placeholder-value',
     *       // Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     *       validateOnly: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "annotations": {},
     *         //   "createTime": "my_createTime",
     *         //   "description": "my_description",
     *         //   "etag": "my_etag",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "rules": [],
     *         //   "selector": {},
     *         //   "serviceAccount": "my_serviceAccount",
     *         //   "suspended": false,
     *         //   "uid": "my_uid",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
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
    patch(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automations$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Automations$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automations$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automations$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Automations$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Automations$Patch
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Automations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Automations$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Deliverypipelines$Automations$Create
    extends StandardParameters {
    /**
     * Required. ID of the `Automation`.
     */
    automationId?: string;
    /**
     * Required. The parent collection in which the `Automation` must be created. The format is `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}`.
     */
    parent?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Automation;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Automations$Delete
    extends StandardParameters {
    /**
     * Optional. If set to true, then deleting an already deleted or non-existing `Automation` will succeed.
     */
    allowMissing?: boolean;
    /**
     * Optional. The weak etag of the request. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Required. The name of the `Automation` to delete. The format is `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}/automations/{automation_name\}`.
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. If set, validate the request and verify whether the resource exists, but do not actually post it.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Automations$Get
    extends StandardParameters {
    /**
     * Required. Name of the `Automation`. Format must be `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}/automations/{automation_name\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Automations$List
    extends StandardParameters {
    /**
     * Filter automations to be returned. All fields can be used in the filter.
     */
    filter?: string;
    /**
     * Field to sort by.
     */
    orderBy?: string;
    /**
     * The maximum number of automations to return. The service may return fewer than this value. If unspecified, at most 50 automations will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListAutomations` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent `Delivery Pipeline`, which owns this collection of automations. Format must be `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Automations$Patch
    extends StandardParameters {
    /**
     * Optional. If set to true, updating a `Automation` that does not exist will result in the creation of a new `Automation`.
     */
    allowMissing?: boolean;
    /**
     * Output only. Name of the `Automation`. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{delivery_pipeline\}/automations/{automation\}`.
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten by the update in the `Automation` resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it's in the mask. If the user doesn't provide a mask then all fields are overwritten.
     */
    updateMask?: string;
    /**
     * Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Automation;
  }

  export class Resource$Projects$Locations$Deliverypipelines$Releases {
    context: APIRequestContext;
    rollouts: Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.rollouts =
        new Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts(
          this.context
        );
    }

    /**
     * Abandons a Release in the Delivery Pipeline.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.releases.abandon({
     *       // Required. Name of the Release. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}/releases/{release\}`.
     *       name: 'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline/releases/my-release',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     });
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
    abandon(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Abandon,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    abandon(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Abandon,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AbandonReleaseResponse>>;
    abandon(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Abandon,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    abandon(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Abandon,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AbandonReleaseResponse>,
      callback: BodyResponseCallback<Schema$AbandonReleaseResponse>
    ): void;
    abandon(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Abandon,
      callback: BodyResponseCallback<Schema$AbandonReleaseResponse>
    ): void;
    abandon(
      callback: BodyResponseCallback<Schema$AbandonReleaseResponse>
    ): void;
    abandon(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Releases$Abandon
        | BodyResponseCallback<Schema$AbandonReleaseResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AbandonReleaseResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AbandonReleaseResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AbandonReleaseResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Abandon;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Abandon;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:abandon').replace(
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
        createAPIRequest<Schema$AbandonReleaseResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AbandonReleaseResponse>(parameters);
      }
    }

    /**
     * Creates a new Release in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.releases.create({
     *       // Optional. Deploy policies to override. Format is `projects/{project\}/locations/{location\}/deployPolicies/{deployPolicy\}`.
     *       overrideDeployPolicy: 'placeholder-value',
     *       // Required. The parent collection in which the `Release` is created. The format is `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}`.
     *       parent:
     *         'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline',
     *       // Required. ID of the `Release`.
     *       releaseId: 'placeholder-value',
     *       // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *       // Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     *       validateOnly: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "abandoned": false,
     *         //   "annotations": {},
     *         //   "buildArtifacts": [],
     *         //   "condition": {},
     *         //   "createTime": "my_createTime",
     *         //   "customTargetTypeSnapshots": [],
     *         //   "deliveryPipelineSnapshot": {},
     *         //   "deployParameters": {},
     *         //   "description": "my_description",
     *         //   "etag": "my_etag",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "renderEndTime": "my_renderEndTime",
     *         //   "renderStartTime": "my_renderStartTime",
     *         //   "renderState": "my_renderState",
     *         //   "skaffoldConfigPath": "my_skaffoldConfigPath",
     *         //   "skaffoldConfigUri": "my_skaffoldConfigUri",
     *         //   "skaffoldVersion": "my_skaffoldVersion",
     *         //   "targetArtifacts": {},
     *         //   "targetRenders": {},
     *         //   "targetSnapshots": [],
     *         //   "uid": "my_uid"
     *         // }
     *       },
     *     });
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
    create(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Releases$Create
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/releases').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets details of a single Release.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.releases.get({
     *       // Required. Name of the `Release`. Format must be `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}/releases/{release_name\}`.
     *       name: 'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline/releases/my-release',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "abandoned": false,
     *   //   "annotations": {},
     *   //   "buildArtifacts": [],
     *   //   "condition": {},
     *   //   "createTime": "my_createTime",
     *   //   "customTargetTypeSnapshots": [],
     *   //   "deliveryPipelineSnapshot": {},
     *   //   "deployParameters": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "renderEndTime": "my_renderEndTime",
     *   //   "renderStartTime": "my_renderStartTime",
     *   //   "renderState": "my_renderState",
     *   //   "skaffoldConfigPath": "my_skaffoldConfigPath",
     *   //   "skaffoldConfigUri": "my_skaffoldConfigUri",
     *   //   "skaffoldVersion": "my_skaffoldVersion",
     *   //   "targetArtifacts": {},
     *   //   "targetRenders": {},
     *   //   "targetSnapshots": [],
     *   //   "uid": "my_uid"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Release>>;
    get(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Release>,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Get,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    get(callback: BodyResponseCallback<Schema$Release>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Releases$Get
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Release>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$Release>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Release>(parameters);
      }
    }

    /**
     * Lists Releases in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.releases.list({
     *       // Optional. Filter releases to be returned. See https://google.aip.dev/160 for more details.
     *       filter: 'placeholder-value',
     *       // Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.
     *       orderBy: 'placeholder-value',
     *       // Optional. The maximum number of `Release` objects to return. The service may return fewer than this value. If unspecified, at most 50 `Release` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. A page token, received from a previous `ListReleases` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The `DeliveryPipeline` which owns this collection of `Release` objects.
     *       parent:
     *         'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "releases": [],
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Releases$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListReleasesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReleasesResponse>,
      callback: BodyResponseCallback<Schema$ListReleasesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$List,
      callback: BodyResponseCallback<Schema$ListReleasesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReleasesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Releases$List
        | BodyResponseCallback<Schema$ListReleasesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReleasesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReleasesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListReleasesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Releases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Releases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/releases').replace(
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
        createAPIRequest<Schema$ListReleasesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListReleasesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Deliverypipelines$Releases$Abandon
    extends StandardParameters {
    /**
     * Required. Name of the Release. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}/releases/{release\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AbandonReleaseRequest;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Releases$Create
    extends StandardParameters {
    /**
     * Optional. Deploy policies to override. Format is `projects/{project\}/locations/{location\}/deployPolicies/{deployPolicy\}`.
     */
    overrideDeployPolicy?: string[];
    /**
     * Required. The parent collection in which the `Release` is created. The format is `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}`.
     */
    parent?: string;
    /**
     * Required. ID of the `Release`.
     */
    releaseId?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Release;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Releases$Get
    extends StandardParameters {
    /**
     * Required. Name of the `Release`. Format must be `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}/releases/{release_name\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Releases$List
    extends StandardParameters {
    /**
     * Optional. Filter releases to be returned. See https://google.aip.dev/160 for more details.
     */
    filter?: string;
    /**
     * Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of `Release` objects to return. The service may return fewer than this value. If unspecified, at most 50 `Release` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListReleases` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The `DeliveryPipeline` which owns this collection of `Release` objects.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts {
    context: APIRequestContext;
    jobRuns: Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.jobRuns =
        new Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns(
          this.context
        );
    }

    /**
     * Advances a Rollout in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.advance(
     *       {
     *         // Required. Name of the Rollout. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}/releases/{release\}/rollouts/{rollout\}`.
     *         name: 'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline/releases/my-release/rollouts/my-rollout',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "overrideDeployPolicy": [],
     *           //   "phaseId": "my_phaseId"
     *           // }
     *         },
     *       },
     *     );
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
    advance(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Advance,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    advance(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Advance,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AdvanceRolloutResponse>>;
    advance(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Advance,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    advance(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Advance,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AdvanceRolloutResponse>,
      callback: BodyResponseCallback<Schema$AdvanceRolloutResponse>
    ): void;
    advance(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Advance,
      callback: BodyResponseCallback<Schema$AdvanceRolloutResponse>
    ): void;
    advance(
      callback: BodyResponseCallback<Schema$AdvanceRolloutResponse>
    ): void;
    advance(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Advance
        | BodyResponseCallback<Schema$AdvanceRolloutResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AdvanceRolloutResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AdvanceRolloutResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AdvanceRolloutResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Advance;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Advance;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:advance').replace(
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
        createAPIRequest<Schema$AdvanceRolloutResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AdvanceRolloutResponse>(parameters);
      }
    }

    /**
     * Approves a Rollout.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.approve(
     *       {
     *         // Required. Name of the Rollout. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}/releases/{release\}/rollouts/{rollout\}`.
     *         name: 'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline/releases/my-release/rollouts/my-rollout',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "approved": false,
     *           //   "overrideDeployPolicy": []
     *           // }
     *         },
     *       },
     *     );
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
    approve(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Approve,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    approve(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Approve,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ApproveRolloutResponse>>;
    approve(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Approve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    approve(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Approve,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ApproveRolloutResponse>,
      callback: BodyResponseCallback<Schema$ApproveRolloutResponse>
    ): void;
    approve(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Approve,
      callback: BodyResponseCallback<Schema$ApproveRolloutResponse>
    ): void;
    approve(
      callback: BodyResponseCallback<Schema$ApproveRolloutResponse>
    ): void;
    approve(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Approve
        | BodyResponseCallback<Schema$ApproveRolloutResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ApproveRolloutResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ApproveRolloutResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ApproveRolloutResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Approve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Approve;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:approve').replace(
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
        createAPIRequest<Schema$ApproveRolloutResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ApproveRolloutResponse>(parameters);
      }
    }

    /**
     * Cancels a Rollout in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.cancel(
     *       {
     *         // Required. Name of the Rollout. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}/releases/{release\}/rollouts/{rollout\}`.
     *         name: 'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline/releases/my-release/rollouts/my-rollout',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "overrideDeployPolicy": []
     *           // }
     *         },
     *       },
     *     );
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
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CancelRolloutResponse>>;
    cancel(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Cancel,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CancelRolloutResponse>,
      callback: BodyResponseCallback<Schema$CancelRolloutResponse>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Cancel,
      callback: BodyResponseCallback<Schema$CancelRolloutResponse>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$CancelRolloutResponse>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Cancel
        | BodyResponseCallback<Schema$CancelRolloutResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CancelRolloutResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CancelRolloutResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CancelRolloutResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$CancelRolloutResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CancelRolloutResponse>(parameters);
      }
    }

    /**
     * Creates a new Rollout in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.create(
     *       {
     *         // Optional. Deploy policies to override. Format is `projects/{project\}/locations/{location\}/deployPolicies/{deployPolicy\}`.
     *         overrideDeployPolicy: 'placeholder-value',
     *         // Required. The parent collection in which the `Rollout` must be created. The format is `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}/releases/{release_name\}`.
     *         parent:
     *           'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline/releases/my-release',
     *         // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *         requestId: 'placeholder-value',
     *         // Required. ID of the `Rollout`.
     *         rolloutId: 'placeholder-value',
     *         // Optional. The starting phase ID for the `Rollout`. If empty the `Rollout` will start at the first phase.
     *         startingPhaseId: 'placeholder-value',
     *         // Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     *         validateOnly: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "activeRepairAutomationRun": "my_activeRepairAutomationRun",
     *           //   "annotations": {},
     *           //   "approvalState": "my_approvalState",
     *           //   "approveTime": "my_approveTime",
     *           //   "controllerRollout": "my_controllerRollout",
     *           //   "createTime": "my_createTime",
     *           //   "deployEndTime": "my_deployEndTime",
     *           //   "deployFailureCause": "my_deployFailureCause",
     *           //   "deployStartTime": "my_deployStartTime",
     *           //   "deployingBuild": "my_deployingBuild",
     *           //   "description": "my_description",
     *           //   "enqueueTime": "my_enqueueTime",
     *           //   "etag": "my_etag",
     *           //   "failureReason": "my_failureReason",
     *           //   "labels": {},
     *           //   "metadata": {},
     *           //   "name": "my_name",
     *           //   "phases": [],
     *           //   "rollbackOfRollout": "my_rollbackOfRollout",
     *           //   "rolledBackByRollouts": [],
     *           //   "state": "my_state",
     *           //   "targetId": "my_targetId",
     *           //   "uid": "my_uid"
     *           // }
     *         },
     *       },
     *     );
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
    create(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Create
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/rollouts').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets details of a single Rollout.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.get(
     *       {
     *         // Required. Name of the `Rollout`. Format must be `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}/releases/{release_name\}/rollouts/{rollout_name\}`.
     *         name: 'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline/releases/my-release/rollouts/my-rollout',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeRepairAutomationRun": "my_activeRepairAutomationRun",
     *   //   "annotations": {},
     *   //   "approvalState": "my_approvalState",
     *   //   "approveTime": "my_approveTime",
     *   //   "controllerRollout": "my_controllerRollout",
     *   //   "createTime": "my_createTime",
     *   //   "deployEndTime": "my_deployEndTime",
     *   //   "deployFailureCause": "my_deployFailureCause",
     *   //   "deployStartTime": "my_deployStartTime",
     *   //   "deployingBuild": "my_deployingBuild",
     *   //   "description": "my_description",
     *   //   "enqueueTime": "my_enqueueTime",
     *   //   "etag": "my_etag",
     *   //   "failureReason": "my_failureReason",
     *   //   "labels": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "phases": [],
     *   //   "rollbackOfRollout": "my_rollbackOfRollout",
     *   //   "rolledBackByRollouts": [],
     *   //   "state": "my_state",
     *   //   "targetId": "my_targetId",
     *   //   "uid": "my_uid"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Rollout>>;
    get(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Rollout>,
      callback: BodyResponseCallback<Schema$Rollout>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Get,
      callback: BodyResponseCallback<Schema$Rollout>
    ): void;
    get(callback: BodyResponseCallback<Schema$Rollout>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Get
        | BodyResponseCallback<Schema$Rollout>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Rollout>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Rollout>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Rollout>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$Rollout>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Rollout>(parameters);
      }
    }

    /**
     * Ignores the specified Job in a Rollout.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.ignoreJob(
     *       {
     *         // Required. Name of the Rollout. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}/releases/{release\}/rollouts/{rollout\}`.
     *         rollout:
     *           'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline/releases/my-release/rollouts/my-rollout',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "jobId": "my_jobId",
     *           //   "overrideDeployPolicy": [],
     *           //   "phaseId": "my_phaseId"
     *           // }
     *         },
     *       },
     *     );
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
    ignoreJob(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Ignorejob,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    ignoreJob(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Ignorejob,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$IgnoreJobResponse>>;
    ignoreJob(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Ignorejob,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    ignoreJob(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Ignorejob,
      options: MethodOptions | BodyResponseCallback<Schema$IgnoreJobResponse>,
      callback: BodyResponseCallback<Schema$IgnoreJobResponse>
    ): void;
    ignoreJob(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Ignorejob,
      callback: BodyResponseCallback<Schema$IgnoreJobResponse>
    ): void;
    ignoreJob(callback: BodyResponseCallback<Schema$IgnoreJobResponse>): void;
    ignoreJob(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Ignorejob
        | BodyResponseCallback<Schema$IgnoreJobResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IgnoreJobResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IgnoreJobResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$IgnoreJobResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Ignorejob;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Ignorejob;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+rollout}:ignoreJob').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['rollout'],
        pathParams: ['rollout'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$IgnoreJobResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IgnoreJobResponse>(parameters);
      }
    }

    /**
     * Lists Rollouts in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.list(
     *       {
     *         // Optional. Filter rollouts to be returned. See https://google.aip.dev/160 for more details.
     *         filter: 'placeholder-value',
     *         // Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.
     *         orderBy: 'placeholder-value',
     *         // Optional. The maximum number of `Rollout` objects to return. The service may return fewer than this value. If unspecified, at most 50 `Rollout` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     *         pageSize: 'placeholder-value',
     *         // Optional. A page token, received from a previous `ListRollouts` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     *         pageToken: 'placeholder-value',
     *         // Required. The `Release` which owns this collection of `Rollout` objects.
     *         parent:
     *           'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline/releases/my-release',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "rollouts": [],
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListRolloutsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRolloutsResponse>,
      callback: BodyResponseCallback<Schema$ListRolloutsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$List,
      callback: BodyResponseCallback<Schema$ListRolloutsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRolloutsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$List
        | BodyResponseCallback<Schema$ListRolloutsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRolloutsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRolloutsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListRolloutsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/rollouts').replace(
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
        createAPIRequest<Schema$ListRolloutsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRolloutsResponse>(parameters);
      }
    }

    /**
     * Retries the specified Job in a Rollout.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.retryJob(
     *       {
     *         // Required. Name of the Rollout. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}/releases/{release\}/rollouts/{rollout\}`.
     *         rollout:
     *           'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline/releases/my-release/rollouts/my-rollout',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "jobId": "my_jobId",
     *           //   "overrideDeployPolicy": [],
     *           //   "phaseId": "my_phaseId"
     *           // }
     *         },
     *       },
     *     );
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
    retryJob(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Retryjob,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    retryJob(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Retryjob,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RetryJobResponse>>;
    retryJob(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Retryjob,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retryJob(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Retryjob,
      options: MethodOptions | BodyResponseCallback<Schema$RetryJobResponse>,
      callback: BodyResponseCallback<Schema$RetryJobResponse>
    ): void;
    retryJob(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Retryjob,
      callback: BodyResponseCallback<Schema$RetryJobResponse>
    ): void;
    retryJob(callback: BodyResponseCallback<Schema$RetryJobResponse>): void;
    retryJob(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Retryjob
        | BodyResponseCallback<Schema$RetryJobResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RetryJobResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RetryJobResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RetryJobResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Retryjob;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Retryjob;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+rollout}:retryJob').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['rollout'],
        pathParams: ['rollout'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RetryJobResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RetryJobResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Advance
    extends StandardParameters {
    /**
     * Required. Name of the Rollout. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}/releases/{release\}/rollouts/{rollout\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AdvanceRolloutRequest;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Approve
    extends StandardParameters {
    /**
     * Required. Name of the Rollout. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}/releases/{release\}/rollouts/{rollout\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ApproveRolloutRequest;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Cancel
    extends StandardParameters {
    /**
     * Required. Name of the Rollout. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}/releases/{release\}/rollouts/{rollout\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelRolloutRequest;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Create
    extends StandardParameters {
    /**
     * Optional. Deploy policies to override. Format is `projects/{project\}/locations/{location\}/deployPolicies/{deployPolicy\}`.
     */
    overrideDeployPolicy?: string[];
    /**
     * Required. The parent collection in which the `Rollout` must be created. The format is `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}/releases/{release_name\}`.
     */
    parent?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. ID of the `Rollout`.
     */
    rolloutId?: string;
    /**
     * Optional. The starting phase ID for the `Rollout`. If empty the `Rollout` will start at the first phase.
     */
    startingPhaseId?: string;
    /**
     * Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Rollout;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Get
    extends StandardParameters {
    /**
     * Required. Name of the `Rollout`. Format must be `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}/releases/{release_name\}/rollouts/{rollout_name\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Ignorejob
    extends StandardParameters {
    /**
     * Required. Name of the Rollout. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}/releases/{release\}/rollouts/{rollout\}`.
     */
    rollout?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$IgnoreJobRequest;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$List
    extends StandardParameters {
    /**
     * Optional. Filter rollouts to be returned. See https://google.aip.dev/160 for more details.
     */
    filter?: string;
    /**
     * Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of `Rollout` objects to return. The service may return fewer than this value. If unspecified, at most 50 `Rollout` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListRollouts` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The `Release` which owns this collection of `Rollout` objects.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Retryjob
    extends StandardParameters {
    /**
     * Required. Name of the Rollout. Format is `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}/releases/{release\}/rollouts/{rollout\}`.
     */
    rollout?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RetryJobRequest;
  }

  export class Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets details of a single JobRun.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.jobRuns.get(
     *       {
     *         // Required. Name of the `JobRun`. Format must be `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}/releases/{release_name\}/rollouts/{rollout_name\}/jobRuns/{job_run_name\}`.
     *         name: 'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline/releases/my-release/rollouts/my-rollout/jobRuns/my-jobRun',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "advanceChildRolloutJobRun": {},
     *   //   "createChildRolloutJobRun": {},
     *   //   "createTime": "my_createTime",
     *   //   "deployJobRun": {},
     *   //   "endTime": "my_endTime",
     *   //   "etag": "my_etag",
     *   //   "jobId": "my_jobId",
     *   //   "name": "my_name",
     *   //   "phaseId": "my_phaseId",
     *   //   "postdeployJobRun": {},
     *   //   "predeployJobRun": {},
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "uid": "my_uid",
     *   //   "verifyJobRun": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$JobRun>>;
    get(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$Get,
      options: MethodOptions | BodyResponseCallback<Schema$JobRun>,
      callback: BodyResponseCallback<Schema$JobRun>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$Get,
      callback: BodyResponseCallback<Schema$JobRun>
    ): void;
    get(callback: BodyResponseCallback<Schema$JobRun>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$Get
        | BodyResponseCallback<Schema$JobRun>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$JobRun>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$JobRun>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$JobRun>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$JobRun>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$JobRun>(parameters);
      }
    }

    /**
     * Lists JobRuns in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.jobRuns.list(
     *       {
     *         // Optional. Filter results to be returned. See https://google.aip.dev/160 for more details.
     *         filter: 'placeholder-value',
     *         // Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.
     *         orderBy: 'placeholder-value',
     *         // Optional. The maximum number of `JobRun` objects to return. The service may return fewer than this value. If unspecified, at most 50 `JobRun` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     *         pageSize: 'placeholder-value',
     *         // Optional. A page token, received from a previous `ListJobRuns` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     *         pageToken: 'placeholder-value',
     *         // Required. The `Rollout` which owns this collection of `JobRun` objects.
     *         parent:
     *           'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline/releases/my-release/rollouts/my-rollout',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "jobRuns": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListJobRunsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListJobRunsResponse>,
      callback: BodyResponseCallback<Schema$ListJobRunsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$List,
      callback: BodyResponseCallback<Schema$ListJobRunsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListJobRunsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$List
        | BodyResponseCallback<Schema$ListJobRunsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListJobRunsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListJobRunsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListJobRunsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/jobRuns').replace(
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
        createAPIRequest<Schema$ListJobRunsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListJobRunsResponse>(parameters);
      }
    }

    /**
     * Terminates a Job Run in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *     await clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.jobRuns.terminate(
     *       {
     *         // Required. Name of the `JobRun`. Format must be `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}/releases/{release\}/rollouts/{rollout\}/jobRuns/{jobRun\}`.
     *         name: 'projects/my-project/locations/my-location/deliveryPipelines/my-deliveryPipeline/releases/my-release/rollouts/my-rollout/jobRuns/my-jobRun',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "overrideDeployPolicy": []
     *           // }
     *         },
     *       },
     *     );
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
    terminate(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$Terminate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    terminate(
      params?: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$Terminate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TerminateJobRunResponse>>;
    terminate(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$Terminate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    terminate(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$Terminate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TerminateJobRunResponse>,
      callback: BodyResponseCallback<Schema$TerminateJobRunResponse>
    ): void;
    terminate(
      params: Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$Terminate,
      callback: BodyResponseCallback<Schema$TerminateJobRunResponse>
    ): void;
    terminate(
      callback: BodyResponseCallback<Schema$TerminateJobRunResponse>
    ): void;
    terminate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$Terminate
        | BodyResponseCallback<Schema$TerminateJobRunResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TerminateJobRunResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TerminateJobRunResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TerminateJobRunResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$Terminate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$Terminate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:terminate').replace(
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
        createAPIRequest<Schema$TerminateJobRunResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TerminateJobRunResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$Get
    extends StandardParameters {
    /**
     * Required. Name of the `JobRun`. Format must be `projects/{project_id\}/locations/{location_name\}/deliveryPipelines/{pipeline_name\}/releases/{release_name\}/rollouts/{rollout_name\}/jobRuns/{job_run_name\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$List
    extends StandardParameters {
    /**
     * Optional. Filter results to be returned. See https://google.aip.dev/160 for more details.
     */
    filter?: string;
    /**
     * Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of `JobRun` objects to return. The service may return fewer than this value. If unspecified, at most 50 `JobRun` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListJobRuns` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The `Rollout` which owns this collection of `JobRun` objects.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Deliverypipelines$Releases$Rollouts$Jobruns$Terminate
    extends StandardParameters {
    /**
     * Required. Name of the `JobRun`. Format must be `projects/{project\}/locations/{location\}/deliveryPipelines/{deliveryPipeline\}/releases/{release\}/rollouts/{rollout\}/jobRuns/{jobRun\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TerminateJobRunRequest;
  }

  export class Resource$Projects$Locations$Deploypolicies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new DeployPolicy in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.deployPolicies.create({
     *     // Required. ID of the `DeployPolicy`.
     *     deployPolicyId: 'placeholder-value',
     *     // Required. The parent collection in which the `DeployPolicy` must be created. The format is `projects/{project_id\}/locations/{location_name\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "rules": [],
     *       //   "selectors": [],
     *       //   "suspended": false,
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
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
    create(
      params: Params$Resource$Projects$Locations$Deploypolicies$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Deploypolicies$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Deploypolicies$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Deploypolicies$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Deploypolicies$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deploypolicies$Create
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deploypolicies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Deploypolicies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/deployPolicies').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a single DeployPolicy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.deployPolicies.delete({
     *     // Optional. If set to true, then deleting an already deleted or non-existing `DeployPolicy` will succeed.
     *     allowMissing: 'placeholder-value',
     *     // Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     *     etag: 'placeholder-value',
     *     // Required. The name of the `DeployPolicy` to delete. The format is `projects/{project_id\}/locations/{location_name\}/deployPolicies/{deploy_policy_name\}`.
     *     name: 'projects/my-project/locations/my-location/deployPolicies/my-deployPolicie',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Optional. If set, validate the request and preview the review, but do not actually post it.
     *     validateOnly: 'placeholder-value',
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
    delete(
      params: Params$Resource$Projects$Locations$Deploypolicies$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Deploypolicies$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Deploypolicies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Deploypolicies$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Deploypolicies$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deploypolicies$Delete
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deploypolicies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Deploypolicies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets details of a single DeployPolicy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.deployPolicies.get({
     *     // Required. Name of the `DeployPolicy`. Format must be `projects/{project_id\}/locations/{location_name\}/deployPolicies/{deploy_policy_name\}`.
     *     name: 'projects/my-project/locations/my-location/deployPolicies/my-deployPolicie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "rules": [],
     *   //   "selectors": [],
     *   //   "suspended": false,
     *   //   "uid": "my_uid",
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
      params: Params$Resource$Projects$Locations$Deploypolicies$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Deploypolicies$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DeployPolicy>>;
    get(
      params: Params$Resource$Projects$Locations$Deploypolicies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Deploypolicies$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DeployPolicy>,
      callback: BodyResponseCallback<Schema$DeployPolicy>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Deploypolicies$Get,
      callback: BodyResponseCallback<Schema$DeployPolicy>
    ): void;
    get(callback: BodyResponseCallback<Schema$DeployPolicy>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deploypolicies$Get
        | BodyResponseCallback<Schema$DeployPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DeployPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DeployPolicy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DeployPolicy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deploypolicies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Deploypolicies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$DeployPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DeployPolicy>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.deployPolicies.getIamPolicy({
     *     // Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *     'options.requestedPolicyVersion': 'placeholder-value',
     *     // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/deployPolicies/my-deployPolicie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Deploypolicies$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Deploypolicies$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Deploypolicies$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Deploypolicies$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Deploypolicies$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deploypolicies$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deploypolicies$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deploypolicies$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Lists DeployPolicies in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.deployPolicies.list({
     *     // Filter deploy policies to be returned. See https://google.aip.dev/160 for more details. All fields can be used in the filter.
     *     filter: 'placeholder-value',
     *     // Field to sort by. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // The maximum number of deploy policies to return. The service may return fewer than this value. If unspecified, at most 50 deploy policies will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListDeployPolicies` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent, which owns this collection of deploy policies. Format must be `projects/{project_id\}/locations/{location_name\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deployPolicies": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Deploypolicies$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Deploypolicies$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDeployPoliciesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Deploypolicies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Deploypolicies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDeployPoliciesResponse>,
      callback: BodyResponseCallback<Schema$ListDeployPoliciesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Deploypolicies$List,
      callback: BodyResponseCallback<Schema$ListDeployPoliciesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListDeployPoliciesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deploypolicies$List
        | BodyResponseCallback<Schema$ListDeployPoliciesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDeployPoliciesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDeployPoliciesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDeployPoliciesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deploypolicies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Deploypolicies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/deployPolicies').replace(
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
        createAPIRequest<Schema$ListDeployPoliciesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDeployPoliciesResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single DeployPolicy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.deployPolicies.patch({
     *     // Optional. If set to true, updating a `DeployPolicy` that does not exist will result in the creation of a new `DeployPolicy`.
     *     allowMissing: 'placeholder-value',
     *     // Output only. Name of the `DeployPolicy`. Format is `projects/{project\}/locations/{location\}/deployPolicies/{deployPolicy\}`. The `deployPolicy` component must match `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`
     *     name: 'projects/my-project/locations/my-location/deployPolicies/my-deployPolicie',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. Field mask is used to specify the fields to be overwritten by the update in the `DeployPolicy` resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it's in the mask. If the user doesn't provide a mask then all fields are overwritten.
     *     updateMask: 'placeholder-value',
     *     // Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "rules": [],
     *       //   "selectors": [],
     *       //   "suspended": false,
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Projects$Locations$Deploypolicies$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Deploypolicies$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Deploypolicies$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Deploypolicies$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Deploypolicies$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deploypolicies$Patch
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deploypolicies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Deploypolicies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.deployPolicies.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/deployPolicies/my-deployPolicie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Deploypolicies$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Deploypolicies$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Deploypolicies$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Deploypolicies$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Deploypolicies$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Deploypolicies$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Deploypolicies$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Deploypolicies$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Deploypolicies$Create
    extends StandardParameters {
    /**
     * Required. ID of the `DeployPolicy`.
     */
    deployPolicyId?: string;
    /**
     * Required. The parent collection in which the `DeployPolicy` must be created. The format is `projects/{project_id\}/locations/{location_name\}`.
     */
    parent?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeployPolicy;
  }
  export interface Params$Resource$Projects$Locations$Deploypolicies$Delete
    extends StandardParameters {
    /**
     * Optional. If set to true, then deleting an already deleted or non-existing `DeployPolicy` will succeed.
     */
    allowMissing?: boolean;
    /**
     * Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Required. The name of the `DeployPolicy` to delete. The format is `projects/{project_id\}/locations/{location_name\}/deployPolicies/{deploy_policy_name\}`.
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. If set, validate the request and preview the review, but do not actually post it.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Deploypolicies$Get
    extends StandardParameters {
    /**
     * Required. Name of the `DeployPolicy`. Format must be `projects/{project_id\}/locations/{location_name\}/deployPolicies/{deploy_policy_name\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Deploypolicies$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Deploypolicies$List
    extends StandardParameters {
    /**
     * Filter deploy policies to be returned. See https://google.aip.dev/160 for more details. All fields can be used in the filter.
     */
    filter?: string;
    /**
     * Field to sort by. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * The maximum number of deploy policies to return. The service may return fewer than this value. If unspecified, at most 50 deploy policies will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListDeployPolicies` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of deploy policies. Format must be `projects/{project_id\}/locations/{location_name\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Deploypolicies$Patch
    extends StandardParameters {
    /**
     * Optional. If set to true, updating a `DeployPolicy` that does not exist will result in the creation of a new `DeployPolicy`.
     */
    allowMissing?: boolean;
    /**
     * Output only. Name of the `DeployPolicy`. Format is `projects/{project\}/locations/{location\}/deployPolicies/{deployPolicy\}`. The `deployPolicy` component must match `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten by the update in the `DeployPolicy` resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it's in the mask. If the user doesn't provide a mask then all fields are overwritten.
     */
    updateMask?: string;
    /**
     * Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeployPolicy;
  }
  export interface Params$Resource$Projects$Locations$Deploypolicies$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }

  export class Resource$Projects$Locations$Operations {
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
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
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
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Cancel
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
        {}) as Params$Resource$Projects$Locations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.operations.delete({
     *     // The name of the operation resource to be deleted.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
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
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Delete
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
        {}) as Params$Resource$Projects$Locations$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
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
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location',
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
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/operations').replace(
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
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel
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
  export interface Params$Resource$Projects$Locations$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List
    extends StandardParameters {
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

  export class Resource$Projects$Locations$Targets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new Target in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.targets.create({
     *     // Required. The parent collection in which the `Target` must be created. The format is `projects/{project_id\}/locations/{location_name\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. ID of the `Target`.
     *     targetId: 'placeholder-value',
     *     // Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "anthosCluster": {},
     *       //   "associatedEntities": {},
     *       //   "createTime": "my_createTime",
     *       //   "customTarget": {},
     *       //   "deployParameters": {},
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "executionConfigs": [],
     *       //   "gke": {},
     *       //   "labels": {},
     *       //   "multiTarget": {},
     *       //   "name": "my_name",
     *       //   "requireApproval": false,
     *       //   "run": {},
     *       //   "targetId": "my_targetId",
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
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
    create(
      params: Params$Resource$Projects$Locations$Targets$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Targets$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Targets$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Targets$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Targets$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Targets$Create
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Targets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Targets$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/targets').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a single Target.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.targets.delete({
     *     // Optional. If set to true, then deleting an already deleted or non-existing `Target` will succeed.
     *     allowMissing: 'placeholder-value',
     *     // Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     *     etag: 'placeholder-value',
     *     // Required. The name of the `Target` to delete. The format is `projects/{project_id\}/locations/{location_name\}/targets/{target_name\}`.
     *     name: 'projects/my-project/locations/my-location/targets/my-target',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Optional. If set, validate the request and preview the review, but do not actually post it.
     *     validateOnly: 'placeholder-value',
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
    delete(
      params: Params$Resource$Projects$Locations$Targets$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Targets$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Targets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Targets$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Targets$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Targets$Delete
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Targets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Targets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets details of a single Target.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.targets.get({
     *     // Required. Name of the `Target`. Format must be `projects/{project_id\}/locations/{location_name\}/targets/{target_name\}`.
     *     name: 'projects/my-project/locations/my-location/targets/my-target',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "anthosCluster": {},
     *   //   "associatedEntities": {},
     *   //   "createTime": "my_createTime",
     *   //   "customTarget": {},
     *   //   "deployParameters": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "executionConfigs": [],
     *   //   "gke": {},
     *   //   "labels": {},
     *   //   "multiTarget": {},
     *   //   "name": "my_name",
     *   //   "requireApproval": false,
     *   //   "run": {},
     *   //   "targetId": "my_targetId",
     *   //   "uid": "my_uid",
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
      params: Params$Resource$Projects$Locations$Targets$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Targets$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Target>>;
    get(
      params: Params$Resource$Projects$Locations$Targets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Targets$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Target>,
      callback: BodyResponseCallback<Schema$Target>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Targets$Get,
      callback: BodyResponseCallback<Schema$Target>
    ): void;
    get(callback: BodyResponseCallback<Schema$Target>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Targets$Get
        | BodyResponseCallback<Schema$Target>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Target>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Target>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Target>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Targets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Targets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$Target>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Target>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.targets.getIamPolicy({
     *     // Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *     'options.requestedPolicyVersion': 'placeholder-value',
     *     // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/targets/my-target',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Targets$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Targets$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Targets$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Targets$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Targets$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Targets$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Targets$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Targets$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Lists Targets in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.targets.list({
     *     // Optional. Filter targets to be returned. See https://google.aip.dev/160 for more details.
     *     filter: 'placeholder-value',
     *     // Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of `Target` objects to return. The service may return fewer than this value. If unspecified, at most 50 `Target` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListTargets` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent, which owns this collection of targets. Format must be `projects/{project_id\}/locations/{location_name\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "targets": [],
     *   //   "unreachable": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Targets$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Targets$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListTargetsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Targets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Targets$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListTargetsResponse>,
      callback: BodyResponseCallback<Schema$ListTargetsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Targets$List,
      callback: BodyResponseCallback<Schema$ListTargetsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTargetsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Targets$List
        | BodyResponseCallback<Schema$ListTargetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTargetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTargetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListTargetsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Targets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Targets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/targets').replace(
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
        createAPIRequest<Schema$ListTargetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListTargetsResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single Target.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.targets.patch({
     *     // Optional. If set to true, updating a `Target` that does not exist will result in the creation of a new `Target`.
     *     allowMissing: 'placeholder-value',
     *     // Identifier. Name of the `Target`. Format is `projects/{project\}/locations/{location\}/targets/{target\}`. The `target` component must match `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`
     *     name: 'projects/my-project/locations/my-location/targets/my-target',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. Field mask is used to specify the fields to be overwritten by the update in the `Target` resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it's in the mask. If the user doesn't provide a mask then all fields are overwritten.
     *     updateMask: 'placeholder-value',
     *     // Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "anthosCluster": {},
     *       //   "associatedEntities": {},
     *       //   "createTime": "my_createTime",
     *       //   "customTarget": {},
     *       //   "deployParameters": {},
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "executionConfigs": [],
     *       //   "gke": {},
     *       //   "labels": {},
     *       //   "multiTarget": {},
     *       //   "name": "my_name",
     *       //   "requireApproval": false,
     *       //   "run": {},
     *       //   "targetId": "my_targetId",
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Projects$Locations$Targets$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Targets$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Targets$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Targets$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Targets$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Targets$Patch
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Targets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Targets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.targets.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/targets/my-target',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Targets$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Targets$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Targets$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Targets$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Targets$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Targets$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Targets$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Targets$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/clouddeploy.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const clouddeploy = google.clouddeploy('v1');
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
     *   const res = await clouddeploy.projects.locations.targets.testIamPermissions({
     *     // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/targets/my-target',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "permissions": []
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
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Targets$Testiampermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Targets$Testiampermissions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Targets$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Targets$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Targets$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Targets$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Targets$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Targets$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://clouddeploy.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
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
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Targets$Create
    extends StandardParameters {
    /**
     * Required. The parent collection in which the `Target` must be created. The format is `projects/{project_id\}/locations/{location_name\}`.
     */
    parent?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. ID of the `Target`.
     */
    targetId?: string;
    /**
     * Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Target;
  }
  export interface Params$Resource$Projects$Locations$Targets$Delete
    extends StandardParameters {
    /**
     * Optional. If set to true, then deleting an already deleted or non-existing `Target` will succeed.
     */
    allowMissing?: boolean;
    /**
     * Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Required. The name of the `Target` to delete. The format is `projects/{project_id\}/locations/{location_name\}/targets/{target_name\}`.
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. If set, validate the request and preview the review, but do not actually post it.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Targets$Get
    extends StandardParameters {
    /**
     * Required. Name of the `Target`. Format must be `projects/{project_id\}/locations/{location_name\}/targets/{target_name\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Targets$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Targets$List
    extends StandardParameters {
    /**
     * Optional. Filter targets to be returned. See https://google.aip.dev/160 for more details.
     */
    filter?: string;
    /**
     * Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of `Target` objects to return. The service may return fewer than this value. If unspecified, at most 50 `Target` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListTargets` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of targets. Format must be `projects/{project_id\}/locations/{location_name\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Targets$Patch
    extends StandardParameters {
    /**
     * Optional. If set to true, updating a `Target` that does not exist will result in the creation of a new `Target`.
     */
    allowMissing?: boolean;
    /**
     * Identifier. Name of the `Target`. Format is `projects/{project\}/locations/{location\}/targets/{target\}`. The `target` component must match `[a-z]([a-z0-9-]{0,61\}[a-z0-9])?`
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten by the update in the `Target` resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it's in the mask. If the user doesn't provide a mask then all fields are overwritten.
     */
    updateMask?: string;
    /**
     * Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Target;
  }
  export interface Params$Resource$Projects$Locations$Targets$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Targets$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }
}
