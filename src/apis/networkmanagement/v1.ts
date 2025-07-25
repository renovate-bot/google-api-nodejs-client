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

export namespace networkmanagement_v1 {
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
   * Network Management API
   *
   * The Network Management API provides a collection of network performance monitoring and diagnostic capabilities.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const networkmanagement = google.networkmanagement('v1');
   * ```
   */
  export class Networkmanagement {
    context: APIRequestContext;
    organizations: Resource$Organizations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.organizations = new Resource$Organizations(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Details of the final state "abort" and associated resource.
   */
  export interface Schema$AbortInfo {
    /**
     * Causes that the analysis is aborted.
     */
    cause?: string | null;
    /**
     * IP address that caused the abort.
     */
    ipAddress?: string | null;
    /**
     * List of project IDs the user specified in the request but lacks access to. In this case, analysis is aborted with the PERMISSION_DENIED cause.
     */
    projectsMissingPermission?: string[] | null;
    /**
     * URI of the resource that caused the abort.
     */
    resourceUri?: string | null;
  }
  /**
   * Wrapper for the App Engine service version attributes.
   */
  export interface Schema$AppEngineVersionEndpoint {
    /**
     * An [App Engine](https://cloud.google.com/appengine) [service version](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions) name.
     */
    uri?: string | null;
  }
  /**
   * For display only. Metadata associated with an App Engine version.
   */
  export interface Schema$AppEngineVersionInfo {
    /**
     * Name of an App Engine version.
     */
    displayName?: string | null;
    /**
     * App Engine execution environment for a version.
     */
    environment?: string | null;
    /**
     * Runtime of the App Engine version.
     */
    runtime?: string | null;
    /**
     * URI of an App Engine version.
     */
    uri?: string | null;
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
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * Wrapper for Cloud Function attributes.
   */
  export interface Schema$CloudFunctionEndpoint {
    /**
     * A [Cloud Function](https://cloud.google.com/functions) name.
     */
    uri?: string | null;
  }
  /**
   * For display only. Metadata associated with a Cloud Function.
   */
  export interface Schema$CloudFunctionInfo {
    /**
     * Name of a Cloud Function.
     */
    displayName?: string | null;
    /**
     * Location in which the Cloud Function is deployed.
     */
    location?: string | null;
    /**
     * URI of a Cloud Function.
     */
    uri?: string | null;
    /**
     * Latest successfully deployed version id of the Cloud Function.
     */
    versionId?: string | null;
  }
  /**
   * Wrapper for Cloud Run revision attributes.
   */
  export interface Schema$CloudRunRevisionEndpoint {
    /**
     * Output only. The URI of the Cloud Run service that the revision belongs to. The format is: projects/{project\}/locations/{location\}/services/{service\}
     */
    serviceUri?: string | null;
    /**
     * A [Cloud Run](https://cloud.google.com/run) [revision](https://cloud.google.com/run/docs/reference/rest/v1/namespaces.revisions/get) URI. The format is: projects/{project\}/locations/{location\}/revisions/{revision\}
     */
    uri?: string | null;
  }
  /**
   * For display only. Metadata associated with a Cloud Run revision.
   */
  export interface Schema$CloudRunRevisionInfo {
    /**
     * Name of a Cloud Run revision.
     */
    displayName?: string | null;
    /**
     * Location in which this revision is deployed.
     */
    location?: string | null;
    /**
     * URI of Cloud Run service this revision belongs to.
     */
    serviceUri?: string | null;
    /**
     * URI of a Cloud Run revision.
     */
    uri?: string | null;
  }
  /**
   * For display only. Metadata associated with a Cloud SQL instance.
   */
  export interface Schema$CloudSQLInstanceInfo {
    /**
     * Name of a Cloud SQL instance.
     */
    displayName?: string | null;
    /**
     * External IP address of a Cloud SQL instance.
     */
    externalIp?: string | null;
    /**
     * Internal IP address of a Cloud SQL instance.
     */
    internalIp?: string | null;
    /**
     * URI of a Cloud SQL instance network or empty string if the instance does not have one.
     */
    networkUri?: string | null;
    /**
     * Region in which the Cloud SQL instance is running.
     */
    region?: string | null;
    /**
     * URI of a Cloud SQL instance.
     */
    uri?: string | null;
  }
  /**
   * A Connectivity Test for a network reachability analysis.
   */
  export interface Schema$ConnectivityTest {
    /**
     * Whether the analysis should skip firewall checking. Default value is false.
     */
    bypassFirewallChecks?: boolean | null;
    /**
     * Output only. The time the test was created.
     */
    createTime?: string | null;
    /**
     * The user-supplied description of the Connectivity Test. Maximum of 512 characters.
     */
    description?: string | null;
    /**
     * Required. Destination specification of the Connectivity Test. You can use a combination of destination IP address, URI of a supported endpoint, project ID, or VPC network to identify the destination location. Reachability analysis proceeds even if the destination location is ambiguous. However, the test result might include endpoints or use a destination that you don't intend to test.
     */
    destination?: Schema$Endpoint;
    /**
     * Output only. The display name of a Connectivity Test.
     */
    displayName?: string | null;
    /**
     * Resource labels to represent user-provided metadata.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. Unique name of the resource using the form: `projects/{project_id\}/locations/global/connectivityTests/{test_id\}`
     */
    name?: string | null;
    /**
     * Output only. The probing details of this test from the latest run, present for applicable tests only. The details are updated when creating a new test, updating an existing test, or triggering a one-time rerun of an existing test.
     */
    probingDetails?: Schema$ProbingDetails;
    /**
     * IP Protocol of the test. When not provided, "TCP" is assumed.
     */
    protocol?: string | null;
    /**
     * Output only. The reachability details of this test from the latest run. The details are updated when creating a new test, updating an existing test, or triggering a one-time rerun of an existing test.
     */
    reachabilityDetails?: Schema$ReachabilityDetails;
    /**
     * Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.
     */
    relatedProjects?: string[] | null;
    /**
     * Output only. The reachability details of this test from the latest run for the return path. The details are updated when creating a new test, updating an existing test, or triggering a one-time rerun of an existing test.
     */
    returnReachabilityDetails?: Schema$ReachabilityDetails;
    /**
     * Whether run analysis for the return path from destination to source. Default value is false.
     */
    roundTrip?: boolean | null;
    /**
     * Required. Source specification of the Connectivity Test. You can use a combination of source IP address, URI of a supported endpoint, project ID, or VPC network to identify the source location. Reachability analysis might proceed even if the source location is ambiguous. However, the test result might include endpoints or use a source that you don't intend to test.
     */
    source?: Schema$Endpoint;
    /**
     * Output only. The time the test's configuration was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Details of the final state "deliver" and associated resource.
   */
  export interface Schema$DeliverInfo {
    /**
     * Recognized type of a Google Service the packet is delivered to (if applicable).
     */
    googleServiceType?: string | null;
    /**
     * IP address of the target (if applicable).
     */
    ipAddress?: string | null;
    /**
     * PSC Google API target the packet is delivered to (if applicable).
     */
    pscGoogleApiTarget?: string | null;
    /**
     * URI of the resource that the packet is delivered to.
     */
    resourceUri?: string | null;
    /**
     * Name of the Cloud Storage Bucket the packet is delivered to (if applicable).
     */
    storageBucket?: string | null;
    /**
     * Target type where the packet is delivered to.
     */
    target?: string | null;
  }
  /**
   * For display only. Metadata associated with a serverless direct VPC egress connection.
   */
  export interface Schema$DirectVpcEgressConnectionInfo {
    /**
     * URI of direct access network.
     */
    networkUri?: string | null;
    /**
     * Region in which the Direct VPC egress is deployed.
     */
    region?: string | null;
    /**
     * Selected starting IP address, from the selected IP range.
     */
    selectedIpAddress?: string | null;
    /**
     * Selected IP range.
     */
    selectedIpRange?: string | null;
    /**
     * URI of direct access subnetwork.
     */
    subnetworkUri?: string | null;
  }
  /**
   * Details of the final state "drop" and associated resource.
   */
  export interface Schema$DropInfo {
    /**
     * Cause that the packet is dropped.
     */
    cause?: string | null;
    /**
     * Destination IP address of the dropped packet (if relevant).
     */
    destinationIp?: string | null;
    /**
     * Region of the dropped packet (if relevant).
     */
    region?: string | null;
    /**
     * URI of the resource that caused the drop.
     */
    resourceUri?: string | null;
    /**
     * Source IP address of the dropped packet (if relevant).
     */
    sourceIp?: string | null;
  }
  /**
   * Representation of a network edge location as per https://cloud.google.com/vpc/docs/edge-locations.
   */
  export interface Schema$EdgeLocation {
    /**
     * Name of the metropolitan area.
     */
    metropolitanArea?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Source or destination of the Connectivity Test.
   */
  export interface Schema$Endpoint {
    /**
     * An [App Engine](https://cloud.google.com/appengine) [service version](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions). Applicable only to source endpoint.
     */
    appEngineVersion?: Schema$AppEngineVersionEndpoint;
    /**
     * A [Cloud Function](https://cloud.google.com/functions). Applicable only to source endpoint.
     */
    cloudFunction?: Schema$CloudFunctionEndpoint;
    /**
     * A [Cloud Run](https://cloud.google.com/run) [revision](https://cloud.google.com/run/docs/reference/rest/v1/namespaces.revisions/get) Applicable only to source endpoint.
     */
    cloudRunRevision?: Schema$CloudRunRevisionEndpoint;
    /**
     * A [Cloud SQL](https://cloud.google.com/sql) instance URI.
     */
    cloudSqlInstance?: string | null;
    /**
     * A forwarding rule and its corresponding IP address represent the frontend configuration of a Google Cloud load balancer. Forwarding rules are also used for protocol forwarding, Private Service Connect and other network services to provide forwarding information in the control plane. Applicable only to destination endpoint. Format: projects/{project\}/global/forwardingRules/{id\} or projects/{project\}/regions/{region\}/forwardingRules/{id\}
     */
    forwardingRule?: string | null;
    /**
     * Output only. Specifies the type of the target of the forwarding rule.
     */
    forwardingRuleTarget?: string | null;
    /**
     * DNS endpoint of [Google Kubernetes Engine cluster control plane](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture). Requires gke_master_cluster to be set, can't be used simultaneoulsly with ip_address or network. Applicable only to destination endpoint.
     */
    fqdn?: string | null;
    /**
     * A cluster URI for [Google Kubernetes Engine cluster control plane](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture).
     */
    gkeMasterCluster?: string | null;
    /**
     * A Compute Engine instance URI.
     */
    instance?: string | null;
    /**
     * The IP address of the endpoint, which can be an external or internal IP.
     */
    ipAddress?: string | null;
    /**
     * Output only. ID of the load balancer the forwarding rule points to. Empty for forwarding rules not related to load balancers.
     */
    loadBalancerId?: string | null;
    /**
     * Output only. Type of the load balancer the forwarding rule points to.
     */
    loadBalancerType?: string | null;
    /**
     * A VPC network URI.
     */
    network?: string | null;
    /**
     * Type of the network where the endpoint is located. Applicable only to source endpoint, as destination network type can be inferred from the source.
     */
    networkType?: string | null;
    /**
     * The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.
     */
    port?: number | null;
    /**
     * Project ID where the endpoint is located. The project ID can be derived from the URI if you provide a endpoint or network URI. The following are two cases where you may need to provide the project ID: 1. Only the IP address is specified, and the IP address is within a Google Cloud project. 2. When you are using Shared VPC and the IP address that you provide is from the service project. In this case, the network that the IP address resides in is defined in the host project.
     */
    projectId?: string | null;
    /**
     * A [Redis Cluster](https://cloud.google.com/memorystore/docs/cluster) URI. Applicable only to destination endpoint.
     */
    redisCluster?: string | null;
    /**
     * A [Redis Instance](https://cloud.google.com/memorystore/docs/redis) URI. Applicable only to destination endpoint.
     */
    redisInstance?: string | null;
  }
  /**
   * For display only. The specification of the endpoints for the test. EndpointInfo is derived from source and destination Endpoint and validated by the backend data plane model.
   */
  export interface Schema$EndpointInfo {
    /**
     * Destination IP address.
     */
    destinationIp?: string | null;
    /**
     * URI of the network where this packet is sent to.
     */
    destinationNetworkUri?: string | null;
    /**
     * Destination port. Only valid when protocol is TCP or UDP.
     */
    destinationPort?: number | null;
    /**
     * IP protocol in string format, for example: "TCP", "UDP", "ICMP".
     */
    protocol?: string | null;
    /**
     * URI of the source telemetry agent this packet originates from.
     */
    sourceAgentUri?: string | null;
    /**
     * Source IP address.
     */
    sourceIp?: string | null;
    /**
     * URI of the network where this packet originates from.
     */
    sourceNetworkUri?: string | null;
    /**
     * Source port. Only valid when protocol is TCP or UDP.
     */
    sourcePort?: number | null;
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
   * For display only. Metadata associated with a VPC firewall rule, an implied VPC firewall rule, or a firewall policy rule.
   */
  export interface Schema$FirewallInfo {
    /**
     * Possible values: ALLOW, DENY, APPLY_SECURITY_PROFILE_GROUP
     */
    action?: string | null;
    /**
     * Possible values: INGRESS, EGRESS
     */
    direction?: string | null;
    /**
     * The display name of the firewall rule. This field might be empty for firewall policy rules.
     */
    displayName?: string | null;
    /**
     * The firewall rule's type.
     */
    firewallRuleType?: string | null;
    /**
     * The URI of the VPC network that the firewall rule is associated with. This field is not applicable to hierarchical firewall policy rules.
     */
    networkUri?: string | null;
    /**
     * The name of the firewall policy that this rule is associated with. This field is not applicable to VPC firewall rules and implied VPC firewall rules.
     */
    policy?: string | null;
    /**
     * The priority of the firewall policy that this rule is associated with. This field is not applicable to VPC firewall rules and implied VPC firewall rules.
     */
    policyPriority?: number | null;
    /**
     * The URI of the firewall policy that this rule is associated with. This field is not applicable to VPC firewall rules and implied VPC firewall rules.
     */
    policyUri?: string | null;
    /**
     * The priority of the firewall rule.
     */
    priority?: number | null;
    /**
     * The target service accounts specified by the firewall rule.
     */
    targetServiceAccounts?: string[] | null;
    /**
     * The target tags defined by the VPC firewall rule. This field is not applicable to firewall policy rules.
     */
    targetTags?: string[] | null;
    /**
     * The URI of the firewall rule. This field is not applicable to implied VPC firewall rules.
     */
    uri?: string | null;
  }
  /**
   * Details of the final state "forward" and associated resource.
   */
  export interface Schema$ForwardInfo {
    /**
     * IP address of the target (if applicable).
     */
    ipAddress?: string | null;
    /**
     * URI of the resource that the packet is forwarded to.
     */
    resourceUri?: string | null;
    /**
     * Target type where this packet is forwarded to.
     */
    target?: string | null;
  }
  /**
   * For display only. Metadata associated with a Compute Engine forwarding rule.
   */
  export interface Schema$ForwardingRuleInfo {
    /**
     * Name of the forwarding rule.
     */
    displayName?: string | null;
    /**
     * Name of the load balancer the forwarding rule belongs to. Empty for forwarding rules not related to load balancers (like PSC forwarding rules).
     */
    loadBalancerName?: string | null;
    /**
     * Port range defined in the forwarding rule that matches the packet.
     */
    matchedPortRange?: string | null;
    /**
     * Protocol defined in the forwarding rule that matches the packet.
     */
    matchedProtocol?: string | null;
    /**
     * Network URI.
     */
    networkUri?: string | null;
    /**
     * PSC Google API target this forwarding rule targets (if applicable).
     */
    pscGoogleApiTarget?: string | null;
    /**
     * URI of the PSC service attachment this forwarding rule targets (if applicable).
     */
    pscServiceAttachmentUri?: string | null;
    /**
     * Region of the forwarding rule. Set only for regional forwarding rules.
     */
    region?: string | null;
    /**
     * Target type of the forwarding rule.
     */
    target?: string | null;
    /**
     * URI of the forwarding rule.
     */
    uri?: string | null;
    /**
     * VIP of the forwarding rule.
     */
    vip?: string | null;
  }
  /**
   * For display only. Metadata associated with a Google Kubernetes Engine (GKE) cluster master.
   */
  export interface Schema$GKEMasterInfo {
    /**
     * URI of a GKE cluster network.
     */
    clusterNetworkUri?: string | null;
    /**
     * URI of a GKE cluster.
     */
    clusterUri?: string | null;
    /**
     * DNS endpoint of a GKE cluster control plane.
     */
    dnsEndpoint?: string | null;
    /**
     * External IP address of a GKE cluster control plane.
     */
    externalIp?: string | null;
    /**
     * Internal IP address of a GKE cluster control plane.
     */
    internalIp?: string | null;
  }
  /**
   * For display only. Details of a Google Service sending packets to a VPC network. Although the source IP might be a publicly routable address, some Google Services use special routes within Google production infrastructure to reach Compute Engine Instances. https://cloud.google.com/vpc/docs/routes#special_return_paths
   */
  export interface Schema$GoogleServiceInfo {
    /**
     * Recognized type of a Google Service.
     */
    googleServiceType?: string | null;
    /**
     * Source IP address.
     */
    sourceIp?: string | null;
  }
  /**
   * Message describing information about the host.
   */
  export interface Schema$Host {
    /**
     * Output only. The cloud instance id of the host.
     */
    cloudInstanceId?: string | null;
    /**
     * Output only. The cloud project id of the host.
     */
    cloudProjectId?: string | null;
    /**
     * Output only. The cloud provider of the host.
     */
    cloudProvider?: string | null;
    /**
     * Output only. The cloud region of the host.
     */
    cloudRegion?: string | null;
    /**
     * Output only. The ids of cloud virtual networks of the host.
     */
    cloudVirtualNetworkIds?: string[] | null;
    /**
     * Output only. The cloud zone of the host.
     */
    cloudZone?: string | null;
    /**
     * Output only. The operating system of the host.
     */
    os?: string | null;
  }
  /**
   * For display only. Metadata associated with a Compute Engine instance.
   */
  export interface Schema$InstanceInfo {
    /**
     * Name of a Compute Engine instance.
     */
    displayName?: string | null;
    /**
     * External IP address of the network interface.
     */
    externalIp?: string | null;
    /**
     * Name of the network interface of a Compute Engine instance.
     */
    interface?: string | null;
    /**
     * Internal IP address of the network interface.
     */
    internalIp?: string | null;
    /**
     * Network tags configured on the instance.
     */
    networkTags?: string[] | null;
    /**
     * URI of a Compute Engine network.
     */
    networkUri?: string | null;
    /**
     * URI of the PSC network attachment the NIC is attached to (if relevant).
     */
    pscNetworkAttachmentUri?: string | null;
    /**
     * Indicates whether the Compute Engine instance is running. Deprecated: use the `status` field instead.
     */
    running?: boolean | null;
    /**
     * Service account authorized for the instance.
     */
    serviceAccount?: string | null;
    /**
     * The status of the instance.
     */
    status?: string | null;
    /**
     * URI of a Compute Engine instance.
     */
    uri?: string | null;
  }
  /**
   * Describes measured latency distribution.
   */
  export interface Schema$LatencyDistribution {
    /**
     * Representative latency percentiles.
     */
    latencyPercentiles?: Schema$LatencyPercentile[];
  }
  /**
   * Latency percentile rank and value.
   */
  export interface Schema$LatencyPercentile {
    /**
     * percent-th percentile of latency observed, in microseconds. Fraction of percent/100 of samples have latency lower or equal to the value of this field.
     */
    latencyMicros?: string | null;
    /**
     * Percentage of samples this data point applies to.
     */
    percent?: number | null;
  }
  /**
   * Response for the `ListConnectivityTests` method.
   */
  export interface Schema$ListConnectivityTestsResponse {
    /**
     * Page token to fetch the next set of Connectivity Tests.
     */
    nextPageToken?: string | null;
    /**
     * List of Connectivity Tests.
     */
    resources?: Schema$ConnectivityTest[];
    /**
     * Locations that could not be reached (when querying all locations with `-`).
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
   * Message for response to listing MonitoringPoints
   */
  export interface Schema$ListMonitoringPointsResponse {
    /**
     * The list of MonitoringPoints.
     */
    monitoringPoints?: Schema$MonitoringPoint[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * Message for response to listing NetworkMonitoringProviders
   */
  export interface Schema$ListNetworkMonitoringProvidersResponse {
    /**
     * The list of NetworkMonitoringProvider
     */
    networkMonitoringProviders?: Schema$NetworkMonitoringProvider[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * Message for response to listing NetworkPaths
   */
  export interface Schema$ListNetworkPathsResponse {
    /**
     * The list of NetworkPath
     */
    networkPaths?: Schema$NetworkPath[];
    /**
     * A token identifying a page of results the server should return.
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
   * Response for the `ListVpcFlowLogsConfigs` method.
   */
  export interface Schema$ListVpcFlowLogsConfigsResponse {
    /**
     * Page token to fetch the next set of configurations.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached (when querying all locations with `-`).
     */
    unreachable?: string[] | null;
    /**
     * List of VPC Flow Log configurations.
     */
    vpcFlowLogsConfigs?: Schema$VpcFlowLogsConfig[];
  }
  /**
   * Message for response to listing WebPaths
   */
  export interface Schema$ListWebPathsResponse {
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * The list of WebPath.
     */
    webPaths?: Schema$WebPath[];
  }
  /**
   * For display only. Metadata associated with a specific load balancer backend.
   */
  export interface Schema$LoadBalancerBackend {
    /**
     * Name of a Compute Engine instance or network endpoint.
     */
    displayName?: string | null;
    /**
     * A list of firewall rule URIs allowing probes from health check IP ranges.
     */
    healthCheckAllowingFirewallRules?: string[] | null;
    /**
     * A list of firewall rule URIs blocking probes from health check IP ranges.
     */
    healthCheckBlockingFirewallRules?: string[] | null;
    /**
     * State of the health check firewall configuration.
     */
    healthCheckFirewallState?: string | null;
    /**
     * URI of a Compute Engine instance or network endpoint.
     */
    uri?: string | null;
  }
  /**
   * For display only. Metadata associated with the load balancer backend.
   */
  export interface Schema$LoadBalancerBackendInfo {
    /**
     * URI of the backend bucket this backend targets (if applicable).
     */
    backendBucketUri?: string | null;
    /**
     * URI of the backend service this backend belongs to (if applicable).
     */
    backendServiceUri?: string | null;
    /**
     * Output only. Health check firewalls configuration state for the backend. This is a result of the static firewall analysis (verifying that health check traffic from required IP ranges to the backend is allowed or not). The backend might still be unhealthy even if these firewalls are configured. Please refer to the documentation for more information: https://cloud.google.com/load-balancing/docs/firewall-rules
     */
    healthCheckFirewallsConfigState?: string | null;
    /**
     * URI of the health check attached to this backend (if applicable).
     */
    healthCheckUri?: string | null;
    /**
     * URI of the instance group this backend belongs to (if applicable).
     */
    instanceGroupUri?: string | null;
    /**
     * URI of the backend instance (if applicable). Populated for instance group backends, and zonal NEG backends.
     */
    instanceUri?: string | null;
    /**
     * Display name of the backend. For example, it might be an instance name for the instance group backends, or an IP address and port for zonal network endpoint group backends.
     */
    name?: string | null;
    /**
     * URI of the network endpoint group this backend belongs to (if applicable).
     */
    networkEndpointGroupUri?: string | null;
    /**
     * PSC Google API target this PSC NEG backend targets (if applicable).
     */
    pscGoogleApiTarget?: string | null;
    /**
     * URI of the PSC service attachment this PSC NEG backend targets (if applicable).
     */
    pscServiceAttachmentUri?: string | null;
  }
  /**
   * For display only. Metadata associated with a load balancer.
   */
  export interface Schema$LoadBalancerInfo {
    /**
     * Information for the loadbalancer backends.
     */
    backends?: Schema$LoadBalancerBackend[];
    /**
     * Type of load balancer's backend configuration.
     */
    backendType?: string | null;
    /**
     * Backend configuration URI.
     */
    backendUri?: string | null;
    /**
     * URI of the health check for the load balancer. Deprecated and no longer populated as different load balancer backends might have different health checks.
     */
    healthCheckUri?: string | null;
    /**
     * Type of the load balancer.
     */
    loadBalancerType?: string | null;
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
   * Message describing MonitoringPoint resource.
   */
  export interface Schema$MonitoringPoint {
    /**
     * Output only. Indicates if automaitic geographic location is enabled for the MonitoringPoint.
     */
    autoGeoLocationEnabled?: boolean | null;
    /**
     * Output only. Connection status of the MonitoringPoint.
     */
    connectionStatus?: string | null;
    /**
     * Output only. The time the MonitoringPoint was created.
     */
    createTime?: string | null;
    /**
     * Output only. Display name of the MonitoringPoint.
     */
    displayName?: string | null;
    /**
     * Output only. The codes of errors detected in the MonitoringPoint.
     */
    errors?: string[] | null;
    /**
     * Output only. The geographical location of the MonitoringPoint. Examples: - "New York, NY, USA" - "Berlin, Germany"
     */
    geoLocation?: string | null;
    /**
     * Output only. The host information of the MonitoringPoint.
     */
    host?: Schema$Host;
    /**
     * Output only. The hostname of the MonitoringPoint.
     */
    hostname?: string | null;
    /**
     * Identifier. Name of the resource. Format: `projects/{project\}/locations/{location\}/networkMonitoringProviders/{network_monitoring_provider\}/monitoringPoints/{monitoring_point\}`
     */
    name?: string | null;
    /**
     * Output only. The network interfaces of the MonitoringPoint.
     */
    networkInterfaces?: Schema$NetworkInterface[];
    /**
     * Output only. IP address visible when MonitoringPoint connects to the provider.
     */
    originatingIp?: string | null;
    /**
     * Output only. The provider tags of the MonitoringPoint.
     */
    providerTags?: Schema$ProviderTag[];
    /**
     * Output only. Deployment type of the MonitoringPoint.
     */
    type?: string | null;
    /**
     * Output only. The time the MonitoringPoint was updated.
     */
    updateTime?: string | null;
    /**
     * Output only. The type of upgrade available for the MonitoringPoint.
     */
    upgradeType?: string | null;
    /**
     * Output only. Version of the software running on the MonitoringPoint.
     */
    version?: string | null;
  }
  /**
   * For display only. Metadata associated with NAT.
   */
  export interface Schema$NatInfo {
    /**
     * The name of Cloud NAT Gateway. Only valid when type is CLOUD_NAT.
     */
    natGatewayName?: string | null;
    /**
     * URI of the network where NAT translation takes place.
     */
    networkUri?: string | null;
    /**
     * Destination IP address after NAT translation.
     */
    newDestinationIp?: string | null;
    /**
     * Destination port after NAT translation. Only valid when protocol is TCP or UDP.
     */
    newDestinationPort?: number | null;
    /**
     * Source IP address after NAT translation.
     */
    newSourceIp?: string | null;
    /**
     * Source port after NAT translation. Only valid when protocol is TCP or UDP.
     */
    newSourcePort?: number | null;
    /**
     * Destination IP address before NAT translation.
     */
    oldDestinationIp?: string | null;
    /**
     * Destination port before NAT translation. Only valid when protocol is TCP or UDP.
     */
    oldDestinationPort?: number | null;
    /**
     * Source IP address before NAT translation.
     */
    oldSourceIp?: string | null;
    /**
     * Source port before NAT translation. Only valid when protocol is TCP or UDP.
     */
    oldSourcePort?: number | null;
    /**
     * IP protocol in string format, for example: "TCP", "UDP", "ICMP".
     */
    protocol?: string | null;
    /**
     * Uri of the Cloud Router. Only valid when type is CLOUD_NAT.
     */
    routerUri?: string | null;
    /**
     * Type of NAT.
     */
    type?: string | null;
  }
  /**
   * For display only. Metadata associated with a Compute Engine network.
   */
  export interface Schema$NetworkInfo {
    /**
     * Name of a Compute Engine network.
     */
    displayName?: string | null;
    /**
     * The IP range of the subnet matching the source IP address of the test.
     */
    matchedIpRange?: string | null;
    /**
     * URI of the subnet matching the source IP address of the test.
     */
    matchedSubnetUri?: string | null;
    /**
     * The region of the subnet matching the source IP address of the test.
     */
    region?: string | null;
    /**
     * URI of a Compute Engine network.
     */
    uri?: string | null;
  }
  /**
   * Message describing network interfaces.
   */
  export interface Schema$NetworkInterface {
    /**
     * Output only. The description of the interface.
     */
    adapterDescription?: string | null;
    /**
     * Output only. The IP address of the interface and subnet mask in CIDR format. Examples: 192.168.1.0/24, 2001:db8::/32
     */
    cidr?: string | null;
    /**
     * Output only. The name of the network interface. Examples: eth0, eno1
     */
    interfaceName?: string | null;
    /**
     * Output only. The IP address of the interface.
     */
    ipAddress?: string | null;
    /**
     * Output only. The MAC address of the interface.
     */
    macAddress?: string | null;
    /**
     * Output only. Speed of the interface in millions of bits per second.
     */
    speed?: string | null;
    /**
     * Output only. The id of the VLAN.
     */
    vlanId?: string | null;
  }
  /**
   * Message describing NetworkMonitoringProvider resource.
   */
  export interface Schema$NetworkMonitoringProvider {
    /**
     * Output only. The time the NetworkMonitoringProvider was created.
     */
    createTime?: string | null;
    /**
     * Output only. Identifier. Name of the resource. Format: `projects/{project\}/locations/{location\}/networkMonitoringProviders/{network_monitoring_provider\}`
     */
    name?: string | null;
    /**
     * Required. Type of the NetworkMonitoringProvider.
     */
    providerType?: string | null;
    /**
     * Output only. Link to the provider's UI.
     */
    providerUri?: string | null;
    /**
     * Output only. State of the NetworkMonitoringProvider.
     */
    state?: string | null;
    /**
     * Output only. The time the NetworkMonitoringProvider was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Message describing NetworkPath resource.
   */
  export interface Schema$NetworkPath {
    /**
     * Output only. The time the NetworkPath was created.
     */
    createTime?: string | null;
    /**
     * Output only. IP address or hostname of the network path destination.
     */
    destination?: string | null;
    /**
     * Output only. Geographical location of the destination MonitoringPoint.
     */
    destinationGeoLocation?: string | null;
    /**
     * Output only. The display name of the network path.
     */
    displayName?: string | null;
    /**
     * Output only. Indicates if the network path is dual ended. When true, the network path is measured both: from both source to destination, and from destination to source. When false, the network path is measured from the source through the destination back to the source (round trip measurement).
     */
    dualEnded?: boolean | null;
    /**
     * Output only. Is monitoring enabled for the network path.
     */
    monitoringEnabled?: boolean | null;
    /**
     * Output only. Display name of the monitoring policy.
     */
    monitoringPolicyDisplayName?: string | null;
    /**
     * Output only. ID of monitoring policy.
     */
    monitoringPolicyId?: string | null;
    /**
     * Output only. The monitoring status of the network path.
     */
    monitoringStatus?: string | null;
    /**
     * Identifier. Name of the resource. Format: `projects/{project\}/locations/{location\}/networkMonitoringProviders/{network_monitoring_provider\}/networkPaths/{network_path\}`
     */
    name?: string | null;
    /**
     * Output only. The network protocol of the network path.
     */
    networkProtocol?: string | null;
    /**
     * Output only. The provider tags of the network path.
     */
    providerTags?: Schema$ProviderTag[];
    /**
     * Output only. Link to provider's UI; link shows the NetworkPath.
     */
    providerUiUri?: string | null;
    /**
     * Output only. Provider's UUID of the source MonitoringPoint. This id may not point to a resource in the GCP.
     */
    sourceMonitoringPointId?: string | null;
    /**
     * Output only. The time the NetworkPath was updated.
     */
    updateTime?: string | null;
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
   * Metadata describing an Operation
   */
  export interface Schema$OperationMetadata {
    /**
     * API version.
     */
    apiVersion?: string | null;
    /**
     * Specifies if cancellation was requested for the operation.
     */
    cancelRequested?: boolean | null;
    /**
     * The time the operation was created.
     */
    createTime?: string | null;
    /**
     * The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Human-readable status of the operation, if any.
     */
    statusDetail?: string | null;
    /**
     * Target of the operation - for example projects/project-1/locations/global/connectivityTests/test-1
     */
    target?: string | null;
    /**
     * Name of the verb executed by the operation.
     */
    verb?: string | null;
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
   * Results of active probing from the last run of the test.
   */
  export interface Schema$ProbingDetails {
    /**
     * The reason probing was aborted.
     */
    abortCause?: string | null;
    /**
     * The EdgeLocation from which a packet, destined to the internet, will egress the Google network. This will only be populated for a connectivity test which has an internet destination address. The absence of this field *must not* be used as an indication that the destination is part of the Google network.
     */
    destinationEgressLocation?: Schema$EdgeLocation;
    /**
     * Probing results for all edge devices.
     */
    edgeResponses?: Schema$SingleEdgeResponse[];
    /**
     * The source and destination endpoints derived from the test input and used for active probing.
     */
    endpointInfo?: Schema$EndpointInfo;
    /**
     * Details about an internal failure or the cancellation of active probing.
     */
    error?: Schema$Status;
    /**
     * Whether all relevant edge devices were probed.
     */
    probedAllDevices?: boolean | null;
    /**
     * Latency as measured by active probing in one direction: from the source to the destination endpoint.
     */
    probingLatency?: Schema$LatencyDistribution;
    /**
     * The overall result of active probing.
     */
    result?: string | null;
    /**
     * Number of probes sent.
     */
    sentProbeCount?: number | null;
    /**
     * Number of probes that reached the destination.
     */
    successfulProbeCount?: number | null;
    /**
     * The time that reachability was assessed through active probing.
     */
    verifyTime?: string | null;
  }
  /**
   * Message describing the provider tag.
   */
  export interface Schema$ProviderTag {
    /**
     * Output only. The category of the provider tag.
     */
    category?: string | null;
    /**
     * Output only. The resource type of the provider tag.
     */
    resourceType?: string | null;
    /**
     * Output only. The value of the provider tag.
     */
    value?: string | null;
  }
  /**
   * For display only. Metadata associated with ProxyConnection.
   */
  export interface Schema$ProxyConnectionInfo {
    /**
     * URI of the network where connection is proxied.
     */
    networkUri?: string | null;
    /**
     * Destination IP address of a new connection.
     */
    newDestinationIp?: string | null;
    /**
     * Destination port of a new connection. Only valid when protocol is TCP or UDP.
     */
    newDestinationPort?: number | null;
    /**
     * Source IP address of a new connection.
     */
    newSourceIp?: string | null;
    /**
     * Source port of a new connection. Only valid when protocol is TCP or UDP.
     */
    newSourcePort?: number | null;
    /**
     * Destination IP address of an original connection
     */
    oldDestinationIp?: string | null;
    /**
     * Destination port of an original connection. Only valid when protocol is TCP or UDP.
     */
    oldDestinationPort?: number | null;
    /**
     * Source IP address of an original connection.
     */
    oldSourceIp?: string | null;
    /**
     * Source port of an original connection. Only valid when protocol is TCP or UDP.
     */
    oldSourcePort?: number | null;
    /**
     * IP protocol in string format, for example: "TCP", "UDP", "ICMP".
     */
    protocol?: string | null;
    /**
     * Uri of proxy subnet.
     */
    subnetUri?: string | null;
  }
  /**
   * Results of the configuration analysis from the last run of the test.
   */
  export interface Schema$ReachabilityDetails {
    /**
     * The details of a failure or a cancellation of reachability analysis.
     */
    error?: Schema$Status;
    /**
     * The overall result of the test's configuration analysis.
     */
    result?: string | null;
    /**
     * Result may contain a list of traces if a test has multiple possible paths in the network, such as when destination endpoint is a load balancer with multiple backends.
     */
    traces?: Schema$Trace[];
    /**
     * The time of the configuration analysis.
     */
    verifyTime?: string | null;
  }
  /**
   * For display only. Metadata associated with a Redis Cluster.
   */
  export interface Schema$RedisClusterInfo {
    /**
     * Discovery endpoint IP address of a Redis Cluster.
     */
    discoveryEndpointIpAddress?: string | null;
    /**
     * Name of a Redis Cluster.
     */
    displayName?: string | null;
    /**
     * Name of the region in which the Redis Cluster is defined. For example, "us-central1".
     */
    location?: string | null;
    /**
     * URI of the network containing the Redis Cluster endpoints in format "projects/{project_id\}/global/networks/{network_id\}".
     */
    networkUri?: string | null;
    /**
     * Secondary endpoint IP address of a Redis Cluster.
     */
    secondaryEndpointIpAddress?: string | null;
    /**
     * URI of a Redis Cluster in format "projects/{project_id\}/locations/{location\}/clusters/{cluster_id\}"
     */
    uri?: string | null;
  }
  /**
   * For display only. Metadata associated with a Cloud Redis Instance.
   */
  export interface Schema$RedisInstanceInfo {
    /**
     * Name of a Cloud Redis Instance.
     */
    displayName?: string | null;
    /**
     * URI of a Cloud Redis Instance network.
     */
    networkUri?: string | null;
    /**
     * Primary endpoint IP address of a Cloud Redis Instance.
     */
    primaryEndpointIp?: string | null;
    /**
     * Read endpoint IP address of a Cloud Redis Instance (if applicable).
     */
    readEndpointIp?: string | null;
    /**
     * Region in which the Cloud Redis Instance is defined.
     */
    region?: string | null;
    /**
     * URI of a Cloud Redis Instance.
     */
    uri?: string | null;
  }
  /**
   * Request for the `RerunConnectivityTest` method.
   */
  export interface Schema$RerunConnectivityTestRequest {}
  /**
   * For display only. Metadata associated with a Compute Engine route.
   */
  export interface Schema$RouteInfo {
    /**
     * For ADVERTISED routes, the URI of their next hop, i.e. the URI of the hybrid endpoint (VPN tunnel, Interconnect attachment, NCC router appliance) the advertised prefix is advertised through, or URI of the source peered network. Deprecated in favor of the next_hop_uri field, not used in new tests.
     */
    advertisedRouteNextHopUri?: string | null;
    /**
     * For ADVERTISED dynamic routes, the URI of the Cloud Router that advertised the corresponding IP prefix.
     */
    advertisedRouteSourceRouterUri?: string | null;
    /**
     * Destination IP range of the route.
     */
    destIpRange?: string | null;
    /**
     * Destination port ranges of the route. POLICY_BASED routes only.
     */
    destPortRanges?: string[] | null;
    /**
     * Name of a route.
     */
    displayName?: string | null;
    /**
     * Instance tags of the route.
     */
    instanceTags?: string[] | null;
    /**
     * For PEERING_SUBNET and PEERING_DYNAMIC routes that are advertised by NCC Hub, the URI of the corresponding route in NCC Hub's routing table.
     */
    nccHubRouteUri?: string | null;
    /**
     * URI of the NCC Hub the route is advertised by. PEERING_SUBNET and PEERING_DYNAMIC routes that are advertised by NCC Hub only.
     */
    nccHubUri?: string | null;
    /**
     * URI of the destination NCC Spoke. PEERING_SUBNET and PEERING_DYNAMIC routes that are advertised by NCC Hub only.
     */
    nccSpokeUri?: string | null;
    /**
     * URI of a VPC network where route is located.
     */
    networkUri?: string | null;
    /**
     * String type of the next hop of the route (for example, "VPN tunnel"). Deprecated in favor of the next_hop_type and next_hop_uri fields, not used in new tests.
     */
    nextHop?: string | null;
    /**
     * URI of a VPC network where the next hop resource is located.
     */
    nextHopNetworkUri?: string | null;
    /**
     * Type of next hop.
     */
    nextHopType?: string | null;
    /**
     * URI of the next hop resource.
     */
    nextHopUri?: string | null;
    /**
     * For PEERING_SUBNET, PEERING_STATIC and PEERING_DYNAMIC routes, the name of the originating SUBNET/STATIC/DYNAMIC route.
     */
    originatingRouteDisplayName?: string | null;
    /**
     * For PEERING_SUBNET and PEERING_STATIC routes, the URI of the originating SUBNET/STATIC route.
     */
    originatingRouteUri?: string | null;
    /**
     * Priority of the route.
     */
    priority?: number | null;
    /**
     * Protocols of the route. POLICY_BASED routes only.
     */
    protocols?: string[] | null;
    /**
     * Region of the route. DYNAMIC, PEERING_DYNAMIC, POLICY_BASED and ADVERTISED routes only. If set for POLICY_BASED route, this is a region of VLAN attachments for Cloud Interconnect the route applies to.
     */
    region?: string | null;
    /**
     * Indicates where route is applicable. Deprecated, routes with NCC_HUB scope are not included in the trace in new tests.
     */
    routeScope?: string | null;
    /**
     * Type of route.
     */
    routeType?: string | null;
    /**
     * Source IP address range of the route. POLICY_BASED routes only.
     */
    srcIpRange?: string | null;
    /**
     * Source port ranges of the route. POLICY_BASED routes only.
     */
    srcPortRanges?: string[] | null;
    /**
     * URI of a route. SUBNET, STATIC, PEERING_SUBNET (only for peering network) and POLICY_BASED routes only.
     */
    uri?: string | null;
  }
  /**
   * For display only. Metadata associated with a serverless public connection.
   */
  export interface Schema$ServerlessExternalConnectionInfo {
    /**
     * Selected starting IP address, from the Google dynamic address pool.
     */
    selectedIpAddress?: string | null;
  }
  /**
   * For display only. Metadata associated with the serverless network endpoint group backend.
   */
  export interface Schema$ServerlessNegInfo {
    /**
     * URI of the serverless network endpoint group.
     */
    negUri?: string | null;
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
   * Probing results for a single edge device.
   */
  export interface Schema$SingleEdgeResponse {
    /**
     * The EdgeLocation from which a packet, destined to the internet, will egress the Google network. This will only be populated for a connectivity test which has an internet destination address. The absence of this field *must not* be used as an indication that the destination is part of the Google network.
     */
    destinationEgressLocation?: Schema$EdgeLocation;
    /**
     * Router name in the format '{router\}.{metroshard\}'. For example: pf01.aaa01, pr02.aaa01.
     */
    destinationRouter?: string | null;
    /**
     * Latency as measured by active probing in one direction: from the source to the destination endpoint.
     */
    probingLatency?: Schema$LatencyDistribution;
    /**
     * The overall result of active probing for this egress device.
     */
    result?: string | null;
    /**
     * Number of probes sent.
     */
    sentProbeCount?: number | null;
    /**
     * Number of probes that reached the destination.
     */
    successfulProbeCount?: number | null;
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
   * A simulated forwarding path is composed of multiple steps. Each step has a well-defined state and an associated configuration.
   */
  export interface Schema$Step {
    /**
     * Display information of the final state "abort" and reason.
     */
    abort?: Schema$AbortInfo;
    /**
     * Display information of an App Engine service version.
     */
    appEngineVersion?: Schema$AppEngineVersionInfo;
    /**
     * This is a step that leads to the final state Drop.
     */
    causesDrop?: boolean | null;
    /**
     * Display information of a Cloud Function.
     */
    cloudFunction?: Schema$CloudFunctionInfo;
    /**
     * Display information of a Cloud Run revision.
     */
    cloudRunRevision?: Schema$CloudRunRevisionInfo;
    /**
     * Display information of a Cloud SQL instance.
     */
    cloudSqlInstance?: Schema$CloudSQLInstanceInfo;
    /**
     * Display information of the final state "deliver" and reason.
     */
    deliver?: Schema$DeliverInfo;
    /**
     * A description of the step. Usually this is a summary of the state.
     */
    description?: string | null;
    /**
     * Display information of a serverless direct VPC egress connection.
     */
    directVpcEgressConnection?: Schema$DirectVpcEgressConnectionInfo;
    /**
     * Display information of the final state "drop" and reason.
     */
    drop?: Schema$DropInfo;
    /**
     * Display information of the source and destination under analysis. The endpoint information in an intermediate state may differ with the initial input, as it might be modified by state like NAT, or Connection Proxy.
     */
    endpoint?: Schema$EndpointInfo;
    /**
     * Display information of a Compute Engine firewall rule.
     */
    firewall?: Schema$FirewallInfo;
    /**
     * Display information of the final state "forward" and reason.
     */
    forward?: Schema$ForwardInfo;
    /**
     * Display information of a Compute Engine forwarding rule.
     */
    forwardingRule?: Schema$ForwardingRuleInfo;
    /**
     * Display information of a Google Kubernetes Engine cluster master.
     */
    gkeMaster?: Schema$GKEMasterInfo;
    /**
     * Display information of a Google service
     */
    googleService?: Schema$GoogleServiceInfo;
    /**
     * Display information of a Compute Engine instance.
     */
    instance?: Schema$InstanceInfo;
    /**
     * Display information of the load balancers. Deprecated in favor of the `load_balancer_backend_info` field, not used in new tests.
     */
    loadBalancer?: Schema$LoadBalancerInfo;
    /**
     * Display information of a specific load balancer backend.
     */
    loadBalancerBackendInfo?: Schema$LoadBalancerBackendInfo;
    /**
     * Display information of a NAT.
     */
    nat?: Schema$NatInfo;
    /**
     * Display information of a Google Cloud network.
     */
    network?: Schema$NetworkInfo;
    /**
     * Project ID that contains the configuration this step is validating.
     */
    projectId?: string | null;
    /**
     * Display information of a ProxyConnection.
     */
    proxyConnection?: Schema$ProxyConnectionInfo;
    /**
     * Display information of a Redis Cluster.
     */
    redisCluster?: Schema$RedisClusterInfo;
    /**
     * Display information of a Redis Instance.
     */
    redisInstance?: Schema$RedisInstanceInfo;
    /**
     * Display information of a Compute Engine route.
     */
    route?: Schema$RouteInfo;
    /**
     * Display information of a serverless public (external) connection.
     */
    serverlessExternalConnection?: Schema$ServerlessExternalConnectionInfo;
    /**
     * Display information of a Serverless network endpoint group backend. Used only for return traces.
     */
    serverlessNeg?: Schema$ServerlessNegInfo;
    /**
     * Each step is in one of the pre-defined states.
     */
    state?: string | null;
    /**
     * Display information of a Storage Bucket. Used only for return traces.
     */
    storageBucket?: Schema$StorageBucketInfo;
    /**
     * Display information of a VPC connector.
     */
    vpcConnector?: Schema$VpcConnectorInfo;
    /**
     * Display information of a Compute Engine VPN gateway.
     */
    vpnGateway?: Schema$VpnGatewayInfo;
    /**
     * Display information of a Compute Engine VPN tunnel.
     */
    vpnTunnel?: Schema$VpnTunnelInfo;
  }
  /**
   * For display only. Metadata associated with Storage Bucket.
   */
  export interface Schema$StorageBucketInfo {
    /**
     * Cloud Storage Bucket name.
     */
    bucket?: string | null;
  }
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
   * Trace represents one simulated packet forwarding path. * Each trace contains multiple ordered steps. * Each step is in a particular state with associated configuration. * State is categorized as final or non-final states. * Each final state has a reason associated. * Each trace must end with a final state (the last step). ``` |---------------------Trace----------------------| Step1(State) Step2(State) --- StepN(State(final)) ```
   */
  export interface Schema$Trace {
    /**
     * Derived from the source and destination endpoints definition specified by user request, and validated by the data plane model. If there are multiple traces starting from different source locations, then the endpoint_info may be different between traces.
     */
    endpointInfo?: Schema$EndpointInfo;
    /**
     * ID of trace. For forward traces, this ID is unique for each trace. For return traces, it matches ID of associated forward trace. A single forward trace can be associated with none, one or more than one return trace.
     */
    forwardTraceId?: number | null;
    /**
     * A trace of a test contains multiple steps from the initial state to the final state (delivered, dropped, forwarded, or aborted). The steps are ordered by the processing sequence within the simulated network state machine. It is critical to preserve the order of the steps and avoid reordering or sorting them.
     */
    steps?: Schema$Step[];
  }
  /**
   * For display only. Metadata associated with a VPC connector.
   */
  export interface Schema$VpcConnectorInfo {
    /**
     * Name of a VPC connector.
     */
    displayName?: string | null;
    /**
     * Location in which the VPC connector is deployed.
     */
    location?: string | null;
    /**
     * URI of a VPC connector.
     */
    uri?: string | null;
  }
  /**
   * A configuration to generate VPC Flow Logs.
   */
  export interface Schema$VpcFlowLogsConfig {
    /**
     * Optional. The aggregation interval for the logs. Default value is INTERVAL_5_SEC.
     */
    aggregationInterval?: string | null;
    /**
     * Output only. The time the config was created.
     */
    createTime?: string | null;
    /**
     * Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum of 512 characters.
     */
    description?: string | null;
    /**
     * Optional. Export filter used to define which VPC Flow Logs should be logged.
     */
    filterExpr?: string | null;
    /**
     * Optional. The value of the field must be in (0, 1]. The sampling rate of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use the state field instead. Default value is 1.0.
     */
    flowSampling?: number | null;
    /**
     * Traffic will be logged from the Interconnect Attachment. Format: projects/{project_id\}/regions/{region\}/interconnectAttachments/{name\}
     */
    interconnectAttachment?: string | null;
    /**
     * Optional. Resource labels to represent user-provided metadata.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. Configures whether all, none or a subset of metadata fields should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA.
     */
    metadata?: string | null;
    /**
     * Optional. Custom metadata fields to include in the reported VPC flow logs. Can only be specified if "metadata" was set to CUSTOM_METADATA.
     */
    metadataFields?: string[] | null;
    /**
     * Identifier. Unique name of the configuration. The name can have one of the following forms: - For project-level configurations: `projects/{project_id\}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id\}` - For organization-level configurations: `organizations/{organization_id\}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id\}`
     */
    name?: string | null;
    /**
     * Optional. The state of the VPC Flow Log configuration. Default value is ENABLED. When creating a new configuration, it must be enabled. Setting state=DISABLED will pause the log generation for this config.
     */
    state?: string | null;
    /**
     * Output only. Describes the state of the configured target resource for diagnostic purposes.
     */
    targetResourceState?: string | null;
    /**
     * Output only. The time the config was updated.
     */
    updateTime?: string | null;
    /**
     * Traffic will be logged from the VPN Tunnel. Format: projects/{project_id\}/regions/{region\}/vpnTunnels/{name\}
     */
    vpnTunnel?: string | null;
  }
  /**
   * For display only. Metadata associated with a Compute Engine VPN gateway.
   */
  export interface Schema$VpnGatewayInfo {
    /**
     * Name of a VPN gateway.
     */
    displayName?: string | null;
    /**
     * IP address of the VPN gateway.
     */
    ipAddress?: string | null;
    /**
     * URI of a Compute Engine network where the VPN gateway is configured.
     */
    networkUri?: string | null;
    /**
     * Name of a Google Cloud region where this VPN gateway is configured.
     */
    region?: string | null;
    /**
     * URI of a VPN gateway.
     */
    uri?: string | null;
    /**
     * A VPN tunnel that is associated with this VPN gateway. There may be multiple VPN tunnels configured on a VPN gateway, and only the one relevant to the test is displayed.
     */
    vpnTunnelUri?: string | null;
  }
  /**
   * For display only. Metadata associated with a Compute Engine VPN tunnel.
   */
  export interface Schema$VpnTunnelInfo {
    /**
     * Name of a VPN tunnel.
     */
    displayName?: string | null;
    /**
     * URI of a Compute Engine network where the VPN tunnel is configured.
     */
    networkUri?: string | null;
    /**
     * Name of a Google Cloud region where this VPN tunnel is configured.
     */
    region?: string | null;
    /**
     * URI of a VPN gateway at remote end of the tunnel.
     */
    remoteGateway?: string | null;
    /**
     * Remote VPN gateway's IP address.
     */
    remoteGatewayIp?: string | null;
    /**
     * Type of the routing policy.
     */
    routingType?: string | null;
    /**
     * URI of the VPN gateway at local end of the tunnel.
     */
    sourceGateway?: string | null;
    /**
     * Local VPN gateway's IP address.
     */
    sourceGatewayIp?: string | null;
    /**
     * URI of a VPN tunnel.
     */
    uri?: string | null;
  }
  /**
   * Message describing WebPath resource.
   */
  export interface Schema$WebPath {
    /**
     * Output only. The time the WebPath was created.
     */
    createTime?: string | null;
    /**
     * Output only. Web monitoring target.
     */
    destination?: string | null;
    /**
     * Output only. Display name of the WebPath.
     */
    displayName?: string | null;
    /**
     * Output only. Monitoring interval.
     */
    interval?: string | null;
    /**
     * Output only. Is monitoring enabled for the WebPath.
     */
    monitoringEnabled?: boolean | null;
    /**
     * Output only. Display name of the monitoring policy.
     */
    monitoringPolicyDisplayName?: string | null;
    /**
     * Output only. ID of the monitoring policy.
     */
    monitoringPolicyId?: string | null;
    /**
     * Output only. The monitoring status of the WebPath.
     */
    monitoringStatus?: string | null;
    /**
     * Identifier. Name of the resource. Format: `projects/{project\}/locations/{location\}/networkMonitoringProviders/{network_monitoring_provider\}/webPaths/{web_path\}`
     */
    name?: string | null;
    /**
     * Output only. The provider tags of the web path.
     */
    providerTags?: Schema$ProviderTag[];
    /**
     * Output only. Link to provider's UI; link shows the WebPath.
     */
    providerUiUri?: string | null;
    /**
     * Output only. Provider's UUID of the related NetworkPath.
     */
    relatedNetworkPathId?: string | null;
    /**
     * Output only. ID of the source MonitoringPoint.
     */
    sourceMonitoringPointId?: string | null;
    /**
     * Output only. The time the WebPath was updated.
     */
    updateTime?: string | null;
    /**
     * Output only. The workflow type of the WebPath.
     */
    workflowType?: string | null;
  }

  export class Resource$Organizations {
    context: APIRequestContext;
    locations: Resource$Organizations$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Organizations$Locations(this.context);
    }
  }

  export class Resource$Organizations$Locations {
    context: APIRequestContext;
    operations: Resource$Organizations$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Organizations$Locations$Operations(
        this.context
      );
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *   const res = await networkmanagement.organizations.locations.get({
     *     // Resource name for the location.
     *     name: 'organizations/my-organization/locations/my-location',
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
      params: Params$Resource$Organizations$Locations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Organizations$Locations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Location>>;
    get(
      params: Params$Resource$Organizations$Locations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Get
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
        {}) as Params$Resource$Organizations$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
     * Lists information about the supported locations for this service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *   const res = await networkmanagement.organizations.locations.list({
     *     // Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     *     extraLocationTypes: 'placeholder-value',
     *     // A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     *     filter: 'placeholder-value',
     *     // The resource that owns the locations collection, if applicable.
     *     name: 'organizations/my-organization',
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
      params: Params$Resource$Organizations$Locations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Locations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListLocationsResponse>>;
    list(
      params: Params$Resource$Organizations$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$List
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
        {}) as Params$Resource$Organizations$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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

  export interface Params$Resource$Organizations$Locations$Get
    extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$List
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

  export class Resource$Organizations$Locations$Operations {
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
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *   const res = await networkmanagement.organizations.locations.operations.cancel(
     *     {
     *       // The name of the operation resource to be cancelled.
     *       name: 'organizations/my-organization/locations/my-location/operations/my-operation',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     },
     *   );
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
      params: Params$Resource$Organizations$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Organizations$Locations$Operations$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    cancel(
      params: Params$Resource$Organizations$Locations$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Organizations$Locations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Organizations$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Operations$Cancel
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
        {}) as Params$Resource$Organizations$Locations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *   const res = await networkmanagement.organizations.locations.operations.delete(
     *     {
     *       // The name of the operation resource to be deleted.
     *       name: 'organizations/my-organization/locations/my-location/operations/my-operation',
     *     },
     *   );
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
      params: Params$Resource$Organizations$Locations$Operations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Organizations$Locations$Operations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Organizations$Locations$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Organizations$Locations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Locations$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Operations$Delete
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
        {}) as Params$Resource$Organizations$Locations$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *   const res = await networkmanagement.organizations.locations.operations.get({
     *     // The name of the operation resource.
     *     name: 'organizations/my-organization/locations/my-location/operations/my-operation',
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
      params: Params$Resource$Organizations$Locations$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Organizations$Locations$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    get(
      params: Params$Resource$Organizations$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Operations$Get
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
        {}) as Params$Resource$Organizations$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *   const res = await networkmanagement.organizations.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'organizations/my-organization/locations/my-location',
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
      params: Params$Resource$Organizations$Locations$Operations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Locations$Operations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>;
    list(
      params: Params$Resource$Organizations$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Operations$List
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
        {}) as Params$Resource$Organizations$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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

  export interface Params$Resource$Organizations$Locations$Operations$Cancel
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
  export interface Params$Resource$Organizations$Locations$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Operations$List
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
    global: Resource$Projects$Locations$Global;
    networkMonitoringProviders: Resource$Projects$Locations$Networkmonitoringproviders;
    vpcFlowLogsConfigs: Resource$Projects$Locations$Vpcflowlogsconfigs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.global = new Resource$Projects$Locations$Global(this.context);
      this.networkMonitoringProviders =
        new Resource$Projects$Locations$Networkmonitoringproviders(
          this.context
        );
      this.vpcFlowLogsConfigs =
        new Resource$Projects$Locations$Vpcflowlogsconfigs(this.context);
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *   const res = await networkmanagement.projects.locations.get({
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

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
     * Lists information about the supported locations for this service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *   const res = await networkmanagement.projects.locations.list({
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

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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

  export class Resource$Projects$Locations$Global {
    context: APIRequestContext;
    connectivityTests: Resource$Projects$Locations$Global$Connectivitytests;
    operations: Resource$Projects$Locations$Global$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.connectivityTests =
        new Resource$Projects$Locations$Global$Connectivitytests(this.context);
      this.operations = new Resource$Projects$Locations$Global$Operations(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Global$Connectivitytests {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.global.connectivityTests.create({
     *       // Required. The parent resource of the Connectivity Test to create: `projects/{project_id\}/locations/global`
     *       parent: 'projects/my-project/locations/global',
     *       // Required. The logical name of the Connectivity Test in your project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the customer project
     *       testId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "bypassFirewallChecks": false,
     *         //   "createTime": "my_createTime",
     *         //   "description": "my_description",
     *         //   "destination": {},
     *         //   "displayName": "my_displayName",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "probingDetails": {},
     *         //   "protocol": "my_protocol",
     *         //   "reachabilityDetails": {},
     *         //   "relatedProjects": [],
     *         //   "returnReachabilityDetails": {},
     *         //   "roundTrip": false,
     *         //   "source": {},
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
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Global$Connectivitytests$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Connectivitytests$Create
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
        {}) as Params$Resource$Projects$Locations$Global$Connectivitytests$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Connectivitytests$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/connectivityTests').replace(
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
     * Deletes a specific `ConnectivityTest`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.global.connectivityTests.delete({
     *       // Required. Connectivity Test resource name using the form: `projects/{project_id\}/locations/global/connectivityTests/{test_id\}`
     *       name: 'projects/my-project/locations/global/connectivityTests/my-connectivityTest',
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
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Global$Connectivitytests$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Connectivitytests$Delete
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
        {}) as Params$Resource$Projects$Locations$Global$Connectivitytests$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Connectivitytests$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
     * Gets the details of a specific Connectivity Test.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.global.connectivityTests.get({
     *       // Required. `ConnectivityTest` resource name using the form: `projects/{project_id\}/locations/global/connectivityTests/{test_id\}`
     *       name: 'projects/my-project/locations/global/connectivityTests/my-connectivityTest',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bypassFirewallChecks": false,
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "destination": {},
     *   //   "displayName": "my_displayName",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "probingDetails": {},
     *   //   "protocol": "my_protocol",
     *   //   "reachabilityDetails": {},
     *   //   "relatedProjects": [],
     *   //   "returnReachabilityDetails": {},
     *   //   "roundTrip": false,
     *   //   "source": {},
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
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Global$Connectivitytests$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ConnectivityTest>>;
    get(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ConnectivityTest>,
      callback: BodyResponseCallback<Schema$ConnectivityTest>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Get,
      callback: BodyResponseCallback<Schema$ConnectivityTest>
    ): void;
    get(callback: BodyResponseCallback<Schema$ConnectivityTest>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Connectivitytests$Get
        | BodyResponseCallback<Schema$ConnectivityTest>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ConnectivityTest>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ConnectivityTest>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ConnectivityTest>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Connectivitytests$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Connectivitytests$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
        createAPIRequest<Schema$ConnectivityTest>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ConnectivityTest>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.global.connectivityTests.getIamPolicy(
     *       {
     *         // Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *         'options.requestedPolicyVersion': 'placeholder-value',
     *         // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *         resource:
     *           'projects/my-project/locations/global/connectivityTests/my-connectivityTest',
     *       },
     *     );
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
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Global$Connectivitytests$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Connectivitytests$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Global$Connectivitytests$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Connectivitytests$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
     * Lists all Connectivity Tests owned by a project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.global.connectivityTests.list({
     *       // Lists the `ConnectivityTests` that match the filter expression. A filter expression filters the resources listed in the response. The expression must be of the form ` ` where operators: `<`, `\>`, `<=`, `\>=`, `!=`, `=`, `:` are supported (colon `:` represents a HAS operator which is roughly synonymous with equality). can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case. Examples: - Filter by name: name = "projects/proj-1/locations/global/connectivityTests/test-1 - Filter by labels: - Resources that have a key called `foo` labels.foo:* - Resources that have a key called `foo` whose value is `bar` labels.foo = bar
     *       filter: 'placeholder-value',
     *       // Field to use to sort the list.
     *       orderBy: 'placeholder-value',
     *       // Number of `ConnectivityTests` to return.
     *       pageSize: 'placeholder-value',
     *       // Page token from an earlier query, as returned in `next_page_token`.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent resource of the Connectivity Tests: `projects/{project_id\}/locations/global`
     *       parent: 'projects/my-project/locations/global',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "resources": [],
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
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Global$Connectivitytests$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListConnectivityTestsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConnectivityTestsResponse>,
      callback: BodyResponseCallback<Schema$ListConnectivityTestsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$List,
      callback: BodyResponseCallback<Schema$ListConnectivityTestsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListConnectivityTestsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Connectivitytests$List
        | BodyResponseCallback<Schema$ListConnectivityTestsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConnectivityTestsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConnectivityTestsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListConnectivityTestsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Connectivitytests$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Connectivitytests$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/connectivityTests').replace(
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
        createAPIRequest<Schema$ListConnectivityTestsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConnectivityTestsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for more details.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.global.connectivityTests.patch({
     *       // Identifier. Unique name of the resource using the form: `projects/{project_id\}/locations/global/connectivityTests/{test_id\}`
     *       name: 'projects/my-project/locations/global/connectivityTests/my-connectivityTest',
     *       // Required. Mask of fields to update. At least one path must be supplied in this field.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "bypassFirewallChecks": false,
     *         //   "createTime": "my_createTime",
     *         //   "description": "my_description",
     *         //   "destination": {},
     *         //   "displayName": "my_displayName",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "probingDetails": {},
     *         //   "protocol": "my_protocol",
     *         //   "reachabilityDetails": {},
     *         //   "relatedProjects": [],
     *         //   "returnReachabilityDetails": {},
     *         //   "roundTrip": false,
     *         //   "source": {},
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
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Global$Connectivitytests$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Connectivitytests$Patch
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
        {}) as Params$Resource$Projects$Locations$Global$Connectivitytests$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Connectivitytests$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
     * Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.global.connectivityTests.rerun({
     *       // Required. Connectivity Test resource name using the form: `projects/{project_id\}/locations/global/connectivityTests/{test_id\}`
     *       name: 'projects/my-project/locations/global/connectivityTests/my-connectivityTest',
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
    rerun(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Rerun,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    rerun(
      params?: Params$Resource$Projects$Locations$Global$Connectivitytests$Rerun,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    rerun(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Rerun,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rerun(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Rerun,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rerun(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Rerun,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rerun(callback: BodyResponseCallback<Schema$Operation>): void;
    rerun(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Connectivitytests$Rerun
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
        {}) as Params$Resource$Projects$Locations$Global$Connectivitytests$Rerun;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Connectivitytests$Rerun;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:rerun').replace(/([^:]\/)\/+/g, '$1'),
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
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.global.connectivityTests.setIamPolicy(
     *       {
     *         // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *         resource:
     *           'projects/my-project/locations/global/connectivityTests/my-connectivityTest',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "policy": {},
     *           //   "updateMask": "my_updateMask"
     *           // }
     *         },
     *       },
     *     );
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
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Global$Connectivitytests$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Connectivitytests$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Global$Connectivitytests$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Connectivitytests$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.global.connectivityTests.testIamPermissions(
     *       {
     *         // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *         resource:
     *           'projects/my-project/locations/global/connectivityTests/my-connectivityTest',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "permissions": []
     *           // }
     *         },
     *       },
     *     );
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
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Testiampermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Global$Connectivitytests$Testiampermissions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Global$Connectivitytests$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Connectivitytests$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Global$Connectivitytests$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Connectivitytests$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Global$Connectivitytests$Create
    extends StandardParameters {
    /**
     * Required. The parent resource of the Connectivity Test to create: `projects/{project_id\}/locations/global`
     */
    parent?: string;
    /**
     * Required. The logical name of the Connectivity Test in your project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the customer project
     */
    testId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ConnectivityTest;
  }
  export interface Params$Resource$Projects$Locations$Global$Connectivitytests$Delete
    extends StandardParameters {
    /**
     * Required. Connectivity Test resource name using the form: `projects/{project_id\}/locations/global/connectivityTests/{test_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Global$Connectivitytests$Get
    extends StandardParameters {
    /**
     * Required. `ConnectivityTest` resource name using the form: `projects/{project_id\}/locations/global/connectivityTests/{test_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Global$Connectivitytests$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Global$Connectivitytests$List
    extends StandardParameters {
    /**
     * Lists the `ConnectivityTests` that match the filter expression. A filter expression filters the resources listed in the response. The expression must be of the form ` ` where operators: `<`, `\>`, `<=`, `\>=`, `!=`, `=`, `:` are supported (colon `:` represents a HAS operator which is roughly synonymous with equality). can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case. Examples: - Filter by name: name = "projects/proj-1/locations/global/connectivityTests/test-1 - Filter by labels: - Resources that have a key called `foo` labels.foo:* - Resources that have a key called `foo` whose value is `bar` labels.foo = bar
     */
    filter?: string;
    /**
     * Field to use to sort the list.
     */
    orderBy?: string;
    /**
     * Number of `ConnectivityTests` to return.
     */
    pageSize?: number;
    /**
     * Page token from an earlier query, as returned in `next_page_token`.
     */
    pageToken?: string;
    /**
     * Required. The parent resource of the Connectivity Tests: `projects/{project_id\}/locations/global`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Global$Connectivitytests$Patch
    extends StandardParameters {
    /**
     * Identifier. Unique name of the resource using the form: `projects/{project_id\}/locations/global/connectivityTests/{test_id\}`
     */
    name?: string;
    /**
     * Required. Mask of fields to update. At least one path must be supplied in this field.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ConnectivityTest;
  }
  export interface Params$Resource$Projects$Locations$Global$Connectivitytests$Rerun
    extends StandardParameters {
    /**
     * Required. Connectivity Test resource name using the form: `projects/{project_id\}/locations/global/connectivityTests/{test_id\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RerunConnectivityTestRequest;
  }
  export interface Params$Resource$Projects$Locations$Global$Connectivitytests$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Global$Connectivitytests$Testiampermissions
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

  export class Resource$Projects$Locations$Global$Operations {
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
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.global.operations.cancel({
     *       // The name of the operation resource to be cancelled.
     *       name: 'projects/my-project/locations/global/operations/my-operation',
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
    cancel(
      params: Params$Resource$Projects$Locations$Global$Operations$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Projects$Locations$Global$Operations$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    cancel(
      params: Params$Resource$Projects$Locations$Global$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Global$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Global$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Operations$Cancel
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
        {}) as Params$Resource$Projects$Locations$Global$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.global.operations.delete({
     *       // The name of the operation resource to be deleted.
     *       name: 'projects/my-project/locations/global/operations/my-operation',
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
    delete(
      params: Params$Resource$Projects$Locations$Global$Operations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Global$Operations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Global$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Global$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Global$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Operations$Delete
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
        {}) as Params$Resource$Projects$Locations$Global$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *   const res = await networkmanagement.projects.locations.global.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/locations/global/operations/my-operation',
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
      params: Params$Resource$Projects$Locations$Global$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Global$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    get(
      params: Params$Resource$Projects$Locations$Global$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Global$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Global$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Global$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Global$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *   const res = await networkmanagement.projects.locations.global.operations.list(
     *     {
     *       // The standard list filter.
     *       filter: 'placeholder-value',
     *       // The name of the operation's parent resource.
     *       name: 'projects/my-project/locations/global',
     *       // The standard list page size.
     *       pageSize: 'placeholder-value',
     *       // The standard list page token.
     *       pageToken: 'placeholder-value',
     *     },
     *   );
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
      params: Params$Resource$Projects$Locations$Global$Operations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Global$Operations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Global$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Global$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Global$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Operations$List
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
        {}) as Params$Resource$Projects$Locations$Global$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Global$Operations$Cancel
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
  export interface Params$Resource$Projects$Locations$Global$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Global$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Global$Operations$List
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

  export class Resource$Projects$Locations$Networkmonitoringproviders {
    context: APIRequestContext;
    monitoringPoints: Resource$Projects$Locations$Networkmonitoringproviders$Monitoringpoints;
    networkPaths: Resource$Projects$Locations$Networkmonitoringproviders$Networkpaths;
    webPaths: Resource$Projects$Locations$Networkmonitoringproviders$Webpaths;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.monitoringPoints =
        new Resource$Projects$Locations$Networkmonitoringproviders$Monitoringpoints(
          this.context
        );
      this.networkPaths =
        new Resource$Projects$Locations$Networkmonitoringproviders$Networkpaths(
          this.context
        );
      this.webPaths =
        new Resource$Projects$Locations$Networkmonitoringproviders$Webpaths(
          this.context
        );
    }

    /**
     * Creates a NetworkMonitoringProvider resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.networkMonitoringProviders.create(
     *       {
     *         // Required. The ID to use for the NetworkMonitoringProvider resource, which will become the final component of the NetworkMonitoringProvider resource's name.
     *         networkMonitoringProviderId: 'placeholder-value',
     *         // Required. Parent value for CreateNetworkMonitoringProviderRequest. Format: projects/{project\}/locations/{location\}
     *         parent: 'projects/my-project/locations/my-location',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "createTime": "my_createTime",
     *           //   "name": "my_name",
     *           //   "providerType": "my_providerType",
     *           //   "providerUri": "my_providerUri",
     *           //   "state": "my_state",
     *           //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Networkmonitoringproviders$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networkmonitoringproviders$Create
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
        {}) as Params$Resource$Projects$Locations$Networkmonitoringproviders$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Networkmonitoringproviders$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/networkMonitoringProviders').replace(
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
     * Deletes a NetworkMonitoringProvider resource and all of its child resources.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.networkMonitoringProviders.delete(
     *       {
     *         // Required. Name of the resource. Format: projects/{project\}/locations/{location\}/networkMonitoringProviders/{network_monitoring_provider\}
     *         name: 'projects/my-project/locations/my-location/networkMonitoringProviders/my-networkMonitoringProvider',
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
    delete(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Networkmonitoringproviders$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networkmonitoringproviders$Delete
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
        {}) as Params$Resource$Projects$Locations$Networkmonitoringproviders$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Networkmonitoringproviders$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
     * Gets the NetworkMonitoringProvider resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.networkMonitoringProviders.get({
     *       // Required. Name of the resource. Format: projects/{project\}/locations/{location\}/networkMonitoringProviders/{network_monitoring_provider\}
     *       name: 'projects/my-project/locations/my-location/networkMonitoringProviders/my-networkMonitoringProvider',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "name": "my_name",
     *   //   "providerType": "my_providerType",
     *   //   "providerUri": "my_providerUri",
     *   //   "state": "my_state",
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
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Networkmonitoringproviders$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$NetworkMonitoringProvider>>;
    get(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$NetworkMonitoringProvider>,
      callback: BodyResponseCallback<Schema$NetworkMonitoringProvider>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Get,
      callback: BodyResponseCallback<Schema$NetworkMonitoringProvider>
    ): void;
    get(callback: BodyResponseCallback<Schema$NetworkMonitoringProvider>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networkmonitoringproviders$Get
        | BodyResponseCallback<Schema$NetworkMonitoringProvider>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NetworkMonitoringProvider>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NetworkMonitoringProvider>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$NetworkMonitoringProvider>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Networkmonitoringproviders$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Networkmonitoringproviders$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
        createAPIRequest<Schema$NetworkMonitoringProvider>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$NetworkMonitoringProvider>(parameters);
      }
    }

    /**
     * Lists NetworkMonitoringProviders for a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.networkMonitoringProviders.list({
     *       // Optional. The maximum number of monitoring points to return. The service may return fewer than this value. If unspecified, at most 20 monitoring points will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. A page token, received from a previous `ListMonitoringPoints` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMonitoringPoints` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. Parent value for ListNetworkMonitoringProvidersRequest. Format: projects/{project\}/locations/{location\}
     *       parent: 'projects/my-project/locations/my-location',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "networkMonitoringProviders": [],
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
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Networkmonitoringproviders$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListNetworkMonitoringProvidersResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNetworkMonitoringProvidersResponse>,
      callback: BodyResponseCallback<Schema$ListNetworkMonitoringProvidersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$List,
      callback: BodyResponseCallback<Schema$ListNetworkMonitoringProvidersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListNetworkMonitoringProvidersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networkmonitoringproviders$List
        | BodyResponseCallback<Schema$ListNetworkMonitoringProvidersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNetworkMonitoringProvidersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNetworkMonitoringProvidersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListNetworkMonitoringProvidersResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Networkmonitoringproviders$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Networkmonitoringproviders$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/networkMonitoringProviders').replace(
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
        createAPIRequest<Schema$ListNetworkMonitoringProvidersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNetworkMonitoringProvidersResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Networkmonitoringproviders$Create
    extends StandardParameters {
    /**
     * Required. The ID to use for the NetworkMonitoringProvider resource, which will become the final component of the NetworkMonitoringProvider resource's name.
     */
    networkMonitoringProviderId?: string;
    /**
     * Required. Parent value for CreateNetworkMonitoringProviderRequest. Format: projects/{project\}/locations/{location\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$NetworkMonitoringProvider;
  }
  export interface Params$Resource$Projects$Locations$Networkmonitoringproviders$Delete
    extends StandardParameters {
    /**
     * Required. Name of the resource. Format: projects/{project\}/locations/{location\}/networkMonitoringProviders/{network_monitoring_provider\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Networkmonitoringproviders$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource. Format: projects/{project\}/locations/{location\}/networkMonitoringProviders/{network_monitoring_provider\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Networkmonitoringproviders$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of monitoring points to return. The service may return fewer than this value. If unspecified, at most 20 monitoring points will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListMonitoringPoints` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMonitoringPoints` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Parent value for ListNetworkMonitoringProvidersRequest. Format: projects/{project\}/locations/{location\}
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Networkmonitoringproviders$Monitoringpoints {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the MonitoringPoint resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.networkMonitoringProviders.monitoringPoints.get(
     *       {
     *         // Required. Name of the resource. Format: projects/{project\}/locations/{location\}/networkMonitoringProviders/{network_monitoring_provider\}/monitoringPoints/{monitoring_point\}
     *         name: 'projects/my-project/locations/my-location/networkMonitoringProviders/my-networkMonitoringProvider/monitoringPoints/my-monitoringPoint',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autoGeoLocationEnabled": false,
     *   //   "connectionStatus": "my_connectionStatus",
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "errors": [],
     *   //   "geoLocation": "my_geoLocation",
     *   //   "host": {},
     *   //   "hostname": "my_hostname",
     *   //   "name": "my_name",
     *   //   "networkInterfaces": [],
     *   //   "originatingIp": "my_originatingIp",
     *   //   "providerTags": [],
     *   //   "type": "my_type",
     *   //   "updateTime": "my_updateTime",
     *   //   "upgradeType": "my_upgradeType",
     *   //   "version": "my_version"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Monitoringpoints$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Networkmonitoringproviders$Monitoringpoints$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$MonitoringPoint>>;
    get(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Monitoringpoints$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Monitoringpoints$Get,
      options: MethodOptions | BodyResponseCallback<Schema$MonitoringPoint>,
      callback: BodyResponseCallback<Schema$MonitoringPoint>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Monitoringpoints$Get,
      callback: BodyResponseCallback<Schema$MonitoringPoint>
    ): void;
    get(callback: BodyResponseCallback<Schema$MonitoringPoint>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networkmonitoringproviders$Monitoringpoints$Get
        | BodyResponseCallback<Schema$MonitoringPoint>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MonitoringPoint>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MonitoringPoint>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$MonitoringPoint>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Networkmonitoringproviders$Monitoringpoints$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Networkmonitoringproviders$Monitoringpoints$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
        createAPIRequest<Schema$MonitoringPoint>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MonitoringPoint>(parameters);
      }
    }

    /**
     * Lists MonitoringPoints for a given network monitoring provider.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.networkMonitoringProviders.monitoringPoints.list(
     *       {
     *         // Optional. The maximum number of monitoring points to return. The service may return fewer than this value. If unspecified, at most 20 monitoring points will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *         pageSize: 'placeholder-value',
     *         // Optional. A page token, received from a previous `ListMonitoringPoints` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMonitoringPoints` must match the call that provided the page token.
     *         pageToken: 'placeholder-value',
     *         // Required. Parent value for ListMonitoringPointsRequest. Format: projects/{project\}/locations/{location\}/networkMonitoringProviders/{network_monitoring_provider\}
     *         parent:
     *           'projects/my-project/locations/my-location/networkMonitoringProviders/my-networkMonitoringProvider',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "monitoringPoints": [],
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
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Monitoringpoints$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Networkmonitoringproviders$Monitoringpoints$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListMonitoringPointsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Monitoringpoints$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Monitoringpoints$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMonitoringPointsResponse>,
      callback: BodyResponseCallback<Schema$ListMonitoringPointsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Monitoringpoints$List,
      callback: BodyResponseCallback<Schema$ListMonitoringPointsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListMonitoringPointsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networkmonitoringproviders$Monitoringpoints$List
        | BodyResponseCallback<Schema$ListMonitoringPointsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMonitoringPointsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMonitoringPointsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListMonitoringPointsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Networkmonitoringproviders$Monitoringpoints$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Networkmonitoringproviders$Monitoringpoints$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/monitoringPoints').replace(
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
        createAPIRequest<Schema$ListMonitoringPointsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMonitoringPointsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Networkmonitoringproviders$Monitoringpoints$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource. Format: projects/{project\}/locations/{location\}/networkMonitoringProviders/{network_monitoring_provider\}/monitoringPoints/{monitoring_point\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Networkmonitoringproviders$Monitoringpoints$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of monitoring points to return. The service may return fewer than this value. If unspecified, at most 20 monitoring points will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListMonitoringPoints` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMonitoringPoints` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Parent value for ListMonitoringPointsRequest. Format: projects/{project\}/locations/{location\}/networkMonitoringProviders/{network_monitoring_provider\}
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Networkmonitoringproviders$Networkpaths {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the NetworkPath resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.networkMonitoringProviders.networkPaths.get(
     *       {
     *         // Required. Name of the resource. Format: projects/{project\}/locations/{location\}/networkMonitoringProviders/{network_monitoring_provider\}/networkPaths/{network_path\}
     *         name: 'projects/my-project/locations/my-location/networkMonitoringProviders/my-networkMonitoringProvider/networkPaths/my-networkPath',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "destination": "my_destination",
     *   //   "destinationGeoLocation": "my_destinationGeoLocation",
     *   //   "displayName": "my_displayName",
     *   //   "dualEnded": false,
     *   //   "monitoringEnabled": false,
     *   //   "monitoringPolicyDisplayName": "my_monitoringPolicyDisplayName",
     *   //   "monitoringPolicyId": "my_monitoringPolicyId",
     *   //   "monitoringStatus": "my_monitoringStatus",
     *   //   "name": "my_name",
     *   //   "networkProtocol": "my_networkProtocol",
     *   //   "providerTags": [],
     *   //   "providerUiUri": "my_providerUiUri",
     *   //   "sourceMonitoringPointId": "my_sourceMonitoringPointId",
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
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Networkpaths$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Networkmonitoringproviders$Networkpaths$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$NetworkPath>>;
    get(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Networkpaths$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Networkpaths$Get,
      options: MethodOptions | BodyResponseCallback<Schema$NetworkPath>,
      callback: BodyResponseCallback<Schema$NetworkPath>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Networkpaths$Get,
      callback: BodyResponseCallback<Schema$NetworkPath>
    ): void;
    get(callback: BodyResponseCallback<Schema$NetworkPath>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networkmonitoringproviders$Networkpaths$Get
        | BodyResponseCallback<Schema$NetworkPath>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$NetworkPath>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$NetworkPath>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$NetworkPath>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Networkmonitoringproviders$Networkpaths$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Networkmonitoringproviders$Networkpaths$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
        createAPIRequest<Schema$NetworkPath>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$NetworkPath>(parameters);
      }
    }

    /**
     * Lists NetworkPaths for a given network monitoring provider.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.networkMonitoringProviders.networkPaths.list(
     *       {
     *         // Optional. The maximum number of network paths to return. The service may return fewer than this value. If unspecified, at most 20 network pathswill be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *         pageSize: 'placeholder-value',
     *         // Optional. A page token, received from a previous `ListNetworkPaths` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListNetworkPaths` must match the call that provided the page token.
     *         pageToken: 'placeholder-value',
     *         // Required. Parent value for ListNetworkPathsRequest. Format: projects/{project\}/locations/{location\}/networkMonitoringProviders/{network_monitoring_provider\}
     *         parent:
     *           'projects/my-project/locations/my-location/networkMonitoringProviders/my-networkMonitoringProvider',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "networkPaths": [],
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
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Networkpaths$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Networkmonitoringproviders$Networkpaths$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListNetworkPathsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Networkpaths$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Networkpaths$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNetworkPathsResponse>,
      callback: BodyResponseCallback<Schema$ListNetworkPathsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Networkpaths$List,
      callback: BodyResponseCallback<Schema$ListNetworkPathsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListNetworkPathsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networkmonitoringproviders$Networkpaths$List
        | BodyResponseCallback<Schema$ListNetworkPathsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNetworkPathsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNetworkPathsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListNetworkPathsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Networkmonitoringproviders$Networkpaths$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Networkmonitoringproviders$Networkpaths$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/networkPaths').replace(
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
        createAPIRequest<Schema$ListNetworkPathsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNetworkPathsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Networkmonitoringproviders$Networkpaths$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource. Format: projects/{project\}/locations/{location\}/networkMonitoringProviders/{network_monitoring_provider\}/networkPaths/{network_path\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Networkmonitoringproviders$Networkpaths$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of network paths to return. The service may return fewer than this value. If unspecified, at most 20 network pathswill be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListNetworkPaths` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListNetworkPaths` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Parent value for ListNetworkPathsRequest. Format: projects/{project\}/locations/{location\}/networkMonitoringProviders/{network_monitoring_provider\}
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Networkmonitoringproviders$Webpaths {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the WebPath resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.networkMonitoringProviders.webPaths.get(
     *       {
     *         // Required. Name of the resource.. Format: projects/{project\}/locations/{location\}/networkMonitoringProviders/{network_monitoring_provider\}/webPaths/{web_path\}
     *         name: 'projects/my-project/locations/my-location/networkMonitoringProviders/my-networkMonitoringProvider/webPaths/my-webPath',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "destination": "my_destination",
     *   //   "displayName": "my_displayName",
     *   //   "interval": "my_interval",
     *   //   "monitoringEnabled": false,
     *   //   "monitoringPolicyDisplayName": "my_monitoringPolicyDisplayName",
     *   //   "monitoringPolicyId": "my_monitoringPolicyId",
     *   //   "monitoringStatus": "my_monitoringStatus",
     *   //   "name": "my_name",
     *   //   "providerTags": [],
     *   //   "providerUiUri": "my_providerUiUri",
     *   //   "relatedNetworkPathId": "my_relatedNetworkPathId",
     *   //   "sourceMonitoringPointId": "my_sourceMonitoringPointId",
     *   //   "updateTime": "my_updateTime",
     *   //   "workflowType": "my_workflowType"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Webpaths$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Networkmonitoringproviders$Webpaths$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebPath>>;
    get(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Webpaths$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Webpaths$Get,
      options: MethodOptions | BodyResponseCallback<Schema$WebPath>,
      callback: BodyResponseCallback<Schema$WebPath>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Webpaths$Get,
      callback: BodyResponseCallback<Schema$WebPath>
    ): void;
    get(callback: BodyResponseCallback<Schema$WebPath>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networkmonitoringproviders$Webpaths$Get
        | BodyResponseCallback<Schema$WebPath>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebPath>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebPath>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebPath>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Networkmonitoringproviders$Webpaths$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Networkmonitoringproviders$Webpaths$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
        createAPIRequest<Schema$WebPath>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebPath>(parameters);
      }
    }

    /**
     * Lists WebPaths for a given network monitoring provider.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.networkMonitoringProviders.webPaths.list(
     *       {
     *         // Optional. The maximum number of web paths to return. The service may return fewer than this value. If unspecified, at most 20 web paths will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *         pageSize: 'placeholder-value',
     *         // Optional. A page token, received from a previous `ListWebPaths` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWebPaths` must match the call that provided the page token.
     *         pageToken: 'placeholder-value',
     *         // Required. Parent value for ListWebPathsRequest. Format: projects/{project\}/locations/{location\}/networkMonitoringProviders/{network_monitoring_provider\}
     *         parent:
     *           'projects/my-project/locations/my-location/networkMonitoringProviders/my-networkMonitoringProvider',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "webPaths": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Webpaths$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Networkmonitoringproviders$Webpaths$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListWebPathsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Webpaths$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Webpaths$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListWebPathsResponse>,
      callback: BodyResponseCallback<Schema$ListWebPathsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Networkmonitoringproviders$Webpaths$List,
      callback: BodyResponseCallback<Schema$ListWebPathsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListWebPathsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Networkmonitoringproviders$Webpaths$List
        | BodyResponseCallback<Schema$ListWebPathsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListWebPathsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListWebPathsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListWebPathsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Networkmonitoringproviders$Webpaths$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Networkmonitoringproviders$Webpaths$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/webPaths').replace(
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
        createAPIRequest<Schema$ListWebPathsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListWebPathsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Networkmonitoringproviders$Webpaths$Get
    extends StandardParameters {
    /**
     * Required. Name of the resource.. Format: projects/{project\}/locations/{location\}/networkMonitoringProviders/{network_monitoring_provider\}/webPaths/{web_path\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Networkmonitoringproviders$Webpaths$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of web paths to return. The service may return fewer than this value. If unspecified, at most 20 web paths will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListWebPaths` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWebPaths` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Parent value for ListWebPathsRequest. Format: projects/{project\}/locations/{location\}/networkMonitoringProviders/{network_monitoring_provider\}
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Vpcflowlogsconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new `VpcFlowLogsConfig`. If a configuration with the exact same settings already exists (even if the ID is different), the creation fails. Notes: 1. Creating a configuration with `state=DISABLED` will fail 2. The following fields are not considered as settings for the purpose of the check mentioned above, therefore - creating another configuration with the same fields but different values for the following fields will fail as well: * name * create_time * update_time * labels * description
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.vpcFlowLogsConfigs.create({
     *       // Required. The parent resource of the VpcFlowLogsConfig to create, in one of the following formats: - For project-level resources: `projects/{project_id\}/locations/global` - For organization-level resources: `organizations/{organization_id\}/locations/global`
     *       parent: 'projects/my-project/locations/my-location',
     *       // Required. ID of the `VpcFlowLogsConfig`.
     *       vpcFlowLogsConfigId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "aggregationInterval": "my_aggregationInterval",
     *         //   "createTime": "my_createTime",
     *         //   "description": "my_description",
     *         //   "filterExpr": "my_filterExpr",
     *         //   "flowSampling": {},
     *         //   "interconnectAttachment": "my_interconnectAttachment",
     *         //   "labels": {},
     *         //   "metadata": "my_metadata",
     *         //   "metadataFields": [],
     *         //   "name": "my_name",
     *         //   "state": "my_state",
     *         //   "targetResourceState": "my_targetResourceState",
     *         //   "updateTime": "my_updateTime",
     *         //   "vpnTunnel": "my_vpnTunnel"
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
      params: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Create
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
        {}) as Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/vpcFlowLogsConfigs').replace(
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
     * Deletes a specific `VpcFlowLogsConfig`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.vpcFlowLogsConfigs.delete({
     *       // Required. The resource name of the VpcFlowLogsConfig, in one of the following formats: - For a project-level resource: `projects/{project_id\}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id\}` - For an organization-level resource: `organizations/{organization_id\}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id\}`
     *       name: 'projects/my-project/locations/my-location/vpcFlowLogsConfigs/my-vpcFlowLogsConfig',
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
      params: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Delete
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
        {}) as Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
     * Gets the details of a specific `VpcFlowLogsConfig`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *   const res = await networkmanagement.projects.locations.vpcFlowLogsConfigs.get(
     *     {
     *       // Required. The resource name of the VpcFlowLogsConfig, in one of the following formats: - For project-level resources: `projects/{project_id\}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id\}` - For organization-level resources: `organizations/{organization_id\}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id\}`
     *       name: 'projects/my-project/locations/my-location/vpcFlowLogsConfigs/my-vpcFlowLogsConfig',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aggregationInterval": "my_aggregationInterval",
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "filterExpr": "my_filterExpr",
     *   //   "flowSampling": {},
     *   //   "interconnectAttachment": "my_interconnectAttachment",
     *   //   "labels": {},
     *   //   "metadata": "my_metadata",
     *   //   "metadataFields": [],
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "targetResourceState": "my_targetResourceState",
     *   //   "updateTime": "my_updateTime",
     *   //   "vpnTunnel": "my_vpnTunnel"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$VpcFlowLogsConfig>>;
    get(
      params: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$VpcFlowLogsConfig>,
      callback: BodyResponseCallback<Schema$VpcFlowLogsConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Get,
      callback: BodyResponseCallback<Schema$VpcFlowLogsConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$VpcFlowLogsConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Get
        | BodyResponseCallback<Schema$VpcFlowLogsConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VpcFlowLogsConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VpcFlowLogsConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$VpcFlowLogsConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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
        createAPIRequest<Schema$VpcFlowLogsConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VpcFlowLogsConfig>(parameters);
      }
    }

    /**
     * Lists all `VpcFlowLogsConfigs` in a given project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.vpcFlowLogsConfigs.list({
     *       // Optional. Lists the `VpcFlowLogsConfigs` that match the filter expression. A filter expression must use the supported [CEL logic operators] (https://cloud.google.com/vpc/docs/about-flow-logs-records#supported_cel_logic_operators).
     *       filter: 'placeholder-value',
     *       // Optional. Field to use to sort the list.
     *       orderBy: 'placeholder-value',
     *       // Optional. Number of `VpcFlowLogsConfigs` to return.
     *       pageSize: 'placeholder-value',
     *       // Optional. Page token from an earlier query, as returned in `next_page_token`.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent resource of the VpcFlowLogsConfig, in one of the following formats: - For project-level resourcs: `projects/{project_id\}/locations/global` - For organization-level resources: `organizations/{organization_id\}/locations/global`
     *       parent: 'projects/my-project/locations/my-location',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": [],
     *   //   "vpcFlowLogsConfigs": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListVpcFlowLogsConfigsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVpcFlowLogsConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListVpcFlowLogsConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$List,
      callback: BodyResponseCallback<Schema$ListVpcFlowLogsConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListVpcFlowLogsConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vpcflowlogsconfigs$List
        | BodyResponseCallback<Schema$ListVpcFlowLogsConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVpcFlowLogsConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVpcFlowLogsConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListVpcFlowLogsConfigsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Vpcflowlogsconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vpcflowlogsconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/vpcFlowLogsConfigs').replace(
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
        createAPIRequest<Schema$ListVpcFlowLogsConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListVpcFlowLogsConfigsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an existing `VpcFlowLogsConfig`. If a configuration with the exact same settings already exists (even if the ID is different), the creation fails. Notes: 1. Updating a configuration with `state=DISABLED` will fail. 2. The following fields are not considered as settings for the purpose of the check mentioned above, therefore - updating another configuration with the same fields but different values for the following fields will fail as well: * name * create_time * update_time * labels * description
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkmanagement.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkmanagement = google.networkmanagement('v1');
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
     *     await networkmanagement.projects.locations.vpcFlowLogsConfigs.patch({
     *       // Identifier. Unique name of the configuration. The name can have one of the following forms: - For project-level configurations: `projects/{project_id\}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id\}` - For organization-level configurations: `organizations/{organization_id\}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id\}`
     *       name: 'projects/my-project/locations/my-location/vpcFlowLogsConfigs/my-vpcFlowLogsConfig',
     *       // Required. Mask of fields to update. At least one path must be supplied in this field. For example, to change the state of the configuration to ENABLED, specify `update_mask` = `"state"`, and the `vpc_flow_logs_config` would be: `vpc_flow_logs_config = { name = "projects/my-project/locations/global/vpcFlowLogsConfigs/my-config" state = "ENABLED" \}`
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "aggregationInterval": "my_aggregationInterval",
     *         //   "createTime": "my_createTime",
     *         //   "description": "my_description",
     *         //   "filterExpr": "my_filterExpr",
     *         //   "flowSampling": {},
     *         //   "interconnectAttachment": "my_interconnectAttachment",
     *         //   "labels": {},
     *         //   "metadata": "my_metadata",
     *         //   "metadataFields": [],
     *         //   "name": "my_name",
     *         //   "state": "my_state",
     *         //   "targetResourceState": "my_targetResourceState",
     *         //   "updateTime": "my_updateTime",
     *         //   "vpnTunnel": "my_vpnTunnel"
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
      params: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Patch
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
        {}) as Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkmanagement.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Create
    extends StandardParameters {
    /**
     * Required. The parent resource of the VpcFlowLogsConfig to create, in one of the following formats: - For project-level resources: `projects/{project_id\}/locations/global` - For organization-level resources: `organizations/{organization_id\}/locations/global`
     */
    parent?: string;
    /**
     * Required. ID of the `VpcFlowLogsConfig`.
     */
    vpcFlowLogsConfigId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VpcFlowLogsConfig;
  }
  export interface Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the VpcFlowLogsConfig, in one of the following formats: - For a project-level resource: `projects/{project_id\}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id\}` - For an organization-level resource: `organizations/{organization_id\}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the VpcFlowLogsConfig, in one of the following formats: - For project-level resources: `projects/{project_id\}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id\}` - For organization-level resources: `organizations/{organization_id\}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Vpcflowlogsconfigs$List
    extends StandardParameters {
    /**
     * Optional. Lists the `VpcFlowLogsConfigs` that match the filter expression. A filter expression must use the supported [CEL logic operators] (https://cloud.google.com/vpc/docs/about-flow-logs-records#supported_cel_logic_operators).
     */
    filter?: string;
    /**
     * Optional. Field to use to sort the list.
     */
    orderBy?: string;
    /**
     * Optional. Number of `VpcFlowLogsConfigs` to return.
     */
    pageSize?: number;
    /**
     * Optional. Page token from an earlier query, as returned in `next_page_token`.
     */
    pageToken?: string;
    /**
     * Required. The parent resource of the VpcFlowLogsConfig, in one of the following formats: - For project-level resourcs: `projects/{project_id\}/locations/global` - For organization-level resources: `organizations/{organization_id\}/locations/global`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Vpcflowlogsconfigs$Patch
    extends StandardParameters {
    /**
     * Identifier. Unique name of the configuration. The name can have one of the following forms: - For project-level configurations: `projects/{project_id\}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id\}` - For organization-level configurations: `organizations/{organization_id\}/locations/global/vpcFlowLogsConfigs/{vpc_flow_logs_config_id\}`
     */
    name?: string;
    /**
     * Required. Mask of fields to update. At least one path must be supplied in this field. For example, to change the state of the configuration to ENABLED, specify `update_mask` = `"state"`, and the `vpc_flow_logs_config` would be: `vpc_flow_logs_config = { name = "projects/my-project/locations/global/vpcFlowLogsConfigs/my-config" state = "ENABLED" \}`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VpcFlowLogsConfig;
  }
}
