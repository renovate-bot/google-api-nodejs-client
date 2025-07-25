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

export namespace cloudbuild_v2 {
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
   * Cloud Build API
   *
   * Creates and manages builds on Google Cloud Platform.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const cloudbuild = google.cloudbuild('v2');
   * ```
   */
  export class Cloudbuild {
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
   * Message for creating repositoritories in batch.
   */
  export interface Schema$BatchCreateRepositoriesRequest {
    /**
     * Required. The request messages specifying the repositories to create.
     */
    requests?: Schema$CreateRepositoryRequest[];
  }
  /**
   * Message for response of creating repositories in batch.
   */
  export interface Schema$BatchCreateRepositoriesResponse {
    /**
     * Repository resources created.
     */
    repositories?: Schema$Repository[];
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
   * Configuration for connections to Bitbucket Cloud.
   */
  export interface Schema$BitbucketCloudConfig {
    /**
     * Required. An access token with the `webhook`, `repository`, `repository:admin` and `pullrequest` scope access. It can be either a workspace, project or repository access token. It's recommended to use a system account to generate these credentials.
     */
    authorizerCredential?: Schema$UserCredential;
    /**
     * Required. An access token with the `repository` access. It can be either a workspace, project or repository access token. It's recommended to use a system account to generate the credentials.
     */
    readAuthorizerCredential?: Schema$UserCredential;
    /**
     * Required. SecretManager resource containing the webhook secret used to verify webhook events, formatted as `projects/x/secrets/x/versions/x`.
     */
    webhookSecretSecretVersion?: string | null;
    /**
     * Required. The Bitbucket Cloud Workspace ID to be connected to Google Cloud Platform.
     */
    workspace?: string | null;
  }
  /**
   * Configuration for connections to Bitbucket Data Center.
   */
  export interface Schema$BitbucketDataCenterConfig {
    /**
     * Required. A http access token with the `REPO_ADMIN` scope access.
     */
    authorizerCredential?: Schema$UserCredential;
    /**
     * Required. The URI of the Bitbucket Data Center instance or cluster this connection is for.
     */
    hostUri?: string | null;
    /**
     * Required. A http access token with the `REPO_READ` access.
     */
    readAuthorizerCredential?: Schema$UserCredential;
    /**
     * Output only. Version of the Bitbucket Data Center running on the `host_uri`.
     */
    serverVersion?: string | null;
    /**
     * Optional. Configuration for using Service Directory to privately connect to a Bitbucket Data Center. This should only be set if the Bitbucket Data Center is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the Bitbucket Data Center will be made over the public internet.
     */
    serviceDirectoryConfig?: Schema$GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig;
    /**
     * Optional. SSL certificate to use for requests to the Bitbucket Data Center.
     */
    sslCa?: string | null;
    /**
     * Required. Immutable. SecretManager resource containing the webhook secret used to verify webhook events, formatted as `projects/x/secrets/x/versions/x`.
     */
    webhookSecretSecretVersion?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * ChildStatusReference is used to point to the statuses of individual TaskRuns and Runs within this PipelineRun.
   */
  export interface Schema$ChildStatusReference {
    /**
     * Name is the name of the TaskRun or Run this is referencing.
     */
    name?: string | null;
    /**
     * PipelineTaskName is the name of the PipelineTask this is referencing.
     */
    pipelineTaskName?: string | null;
    /**
     * Output only. Type of the child reference.
     */
    type?: string | null;
    /**
     * WhenExpressions is the list of checks guarding the execution of the PipelineTask
     */
    whenExpressions?: Schema$WhenExpression[];
  }
  /**
   * A connection to a SCM like GitHub, GitHub Enterprise, Bitbucket Data Center, Bitbucket Cloud or GitLab.
   */
  export interface Schema$Connection {
    /**
     * Optional. Allows clients to store small amounts of arbitrary data.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Configuration for connections to Bitbucket Cloud.
     */
    bitbucketCloudConfig?: Schema$BitbucketCloudConfig;
    /**
     * Configuration for connections to Bitbucket Data Center.
     */
    bitbucketDataCenterConfig?: Schema$BitbucketDataCenterConfig;
    /**
     * Output only. Server assigned timestamp for when the connection was created.
     */
    createTime?: string | null;
    /**
     * Optional. If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled.
     */
    disabled?: boolean | null;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string | null;
    /**
     * Configuration for connections to github.com.
     */
    githubConfig?: Schema$GitHubConfig;
    /**
     * Configuration for connections to an instance of GitHub Enterprise.
     */
    githubEnterpriseConfig?: Schema$GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig;
    /**
     * Configuration for connections to gitlab.com or an instance of GitLab Enterprise.
     */
    gitlabConfig?: Schema$GoogleDevtoolsCloudbuildV2GitLabConfig;
    /**
     * Output only. Installation state of the Connection.
     */
    installationState?: Schema$InstallationState;
    /**
     * Immutable. The resource name of the connection, in the format `projects/{project\}/locations/{location\}/connections/{connection_id\}`.
     */
    name?: string | null;
    /**
     * Output only. Set to true when the connection is being set up or updated in the background.
     */
    reconciling?: boolean | null;
    /**
     * Output only. Server assigned timestamp for when the connection was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Message for creating a Repository.
   */
  export interface Schema$CreateRepositoryRequest {
    /**
     * Required. The connection to contain the repository. If the request is part of a BatchCreateRepositoriesRequest, this field should be empty or match the parent specified there.
     */
    parent?: string | null;
    /**
     * Required. The repository to create.
     */
    repository?: Schema$Repository;
    /**
     * Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@.
     */
    repositoryId?: string | null;
  }
  /**
   * EmbeddedTask defines a Task that is embedded in a Pipeline.
   */
  export interface Schema$EmbeddedTask {
    /**
     * User annotations. See https://google.aip.dev/128#annotations
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Spec to instantiate this TaskRun.
     */
    taskSpec?: Schema$TaskSpec;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Represents an empty Volume source.
   */
  export interface Schema$EmptyDirVolumeSource {}
  /**
   * Environment variable.
   */
  export interface Schema$EnvVar {
    /**
     * Name of the environment variable.
     */
    name?: string | null;
    /**
     * Value of the environment variable.
     */
    value?: string | null;
  }
  /**
   * ExecAction describes a "run in container" action.
   */
  export interface Schema$ExecAction {
    /**
     * Optional. Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. +optional
     */
    command?: string[] | null;
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
   * Response for fetching git refs
   */
  export interface Schema$FetchGitRefsResponse {
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * Name of the refs fetched.
     */
    refNames?: string[] | null;
  }
  /**
   * Response message for FetchLinkableRepositories.
   */
  export interface Schema$FetchLinkableRepositoriesResponse {
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * repositories ready to be created.
     */
    repositories?: Schema$Repository[];
  }
  /**
   * Message for fetching SCM read token.
   */
  export interface Schema$FetchReadTokenRequest {}
  /**
   * Message for responding to get read token.
   */
  export interface Schema$FetchReadTokenResponse {
    /**
     * Expiration timestamp. Can be empty if unknown or non-expiring.
     */
    expirationTime?: string | null;
    /**
     * The token content.
     */
    token?: string | null;
  }
  /**
   * Message for fetching SCM read/write token.
   */
  export interface Schema$FetchReadWriteTokenRequest {}
  /**
   * Message for responding to get read/write token.
   */
  export interface Schema$FetchReadWriteTokenResponse {
    /**
     * Expiration timestamp. Can be empty if unknown or non-expiring.
     */
    expirationTime?: string | null;
    /**
     * The token content.
     */
    token?: string | null;
  }
  /**
   * Configuration for connections to github.com.
   */
  export interface Schema$GitHubConfig {
    /**
     * Optional. GitHub App installation id.
     */
    appInstallationId?: string | null;
    /**
     * Optional. OAuth credential of the account that authorized the Cloud Build GitHub App. It is recommended to use a robot account instead of a human user account. The OAuth token must be tied to the Cloud Build GitHub App.
     */
    authorizerCredential?: Schema$OAuthCredential;
  }
  /**
   * Conditions defines a readiness condition for a Knative resource.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV2Condition {
    /**
     * LastTransitionTime is the last time the condition transitioned from one status to another.
     */
    lastTransitionTime?: string | null;
    /**
     * A human readable message indicating details about the transition.
     */
    message?: string | null;
    /**
     * The reason for the condition's last transition.
     */
    reason?: string | null;
    /**
     * Severity with which to treat failures of this type of condition.
     */
    severity?: string | null;
    /**
     * Status of the condition.
     */
    status?: string | null;
    /**
     * Type of condition.
     */
    type?: string | null;
  }
  /**
   * Configuration for connections to an instance of GitHub Enterprise.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig {
    /**
     * Required. API Key used for authentication of webhook events.
     */
    apiKey?: string | null;
    /**
     * Optional. Id of the GitHub App created from the manifest.
     */
    appId?: string | null;
    /**
     * Optional. ID of the installation of the GitHub App.
     */
    appInstallationId?: string | null;
    /**
     * Optional. The URL-friendly name of the GitHub App.
     */
    appSlug?: string | null;
    /**
     * Required. The URI of the GitHub Enterprise host this connection is for.
     */
    hostUri?: string | null;
    /**
     * Optional. SecretManager resource containing the private key of the GitHub App, formatted as `projects/x/secrets/x/versions/x`.
     */
    privateKeySecretVersion?: string | null;
    /**
     * Output only. GitHub Enterprise version installed at the host_uri.
     */
    serverVersion?: string | null;
    /**
     * Optional. Configuration for using Service Directory to privately connect to a GitHub Enterprise server. This should only be set if the GitHub Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitHub Enterprise server will be made over the public internet.
     */
    serviceDirectoryConfig?: Schema$GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig;
    /**
     * Optional. SSL certificate to use for requests to GitHub Enterprise.
     */
    sslCa?: string | null;
    /**
     * Optional. SecretManager resource containing the webhook secret of the GitHub App, formatted as `projects/x/secrets/x/versions/x`.
     */
    webhookSecretSecretVersion?: string | null;
  }
  /**
   * Configuration for connections to gitlab.com or an instance of GitLab Enterprise.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV2GitLabConfig {
    /**
     * Required. A GitLab personal access token with the `api` scope access.
     */
    authorizerCredential?: Schema$UserCredential;
    /**
     * Optional. The URI of the GitLab Enterprise host this connection is for. If not specified, the default value is https://gitlab.com.
     */
    hostUri?: string | null;
    /**
     * Required. A GitLab personal access token with the minimum `read_api` scope access.
     */
    readAuthorizerCredential?: Schema$UserCredential;
    /**
     * Output only. Version of the GitLab Enterprise server running on the `host_uri`.
     */
    serverVersion?: string | null;
    /**
     * Optional. Configuration for using Service Directory to privately connect to a GitLab Enterprise server. This should only be set if the GitLab Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, calls to the GitLab Enterprise server will be made over the public internet.
     */
    serviceDirectoryConfig?: Schema$GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig;
    /**
     * Optional. SSL certificate to use for requests to GitLab Enterprise.
     */
    sslCa?: string | null;
    /**
     * Required. Immutable. SecretManager resource containing the webhook secret of a GitLab Enterprise project, formatted as `projects/x/secrets/x/versions/x`.
     */
    webhookSecretSecretVersion?: string | null;
  }
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV2OperationMetadata {
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
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
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
   * ServiceDirectoryConfig represents Service Directory configuration for a connection.
   */
  export interface Schema$GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig {
    /**
     * Required. The Service Directory service name. Format: projects/{project\}/locations/{location\}/namespaces/{namespace\}/services/{service\}.
     */
    service?: string | null;
  }
  /**
   * Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; \} service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); \} Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); \} Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
   */
  export interface Schema$HttpBody {
    /**
     * The HTTP Content-Type header value specifying the content type of the body.
     */
    contentType?: string | null;
    /**
     * The HTTP request/response body as raw binary.
     */
    data?: string | null;
    /**
     * Application specific response metadata. Must be set in the first response for streaming APIs.
     */
    extensions?: Array<{[key: string]: any}> | null;
  }
  /**
   * Describes stage and necessary actions to be taken by the user to complete the installation. Used for GitHub and GitHub Enterprise based connections.
   */
  export interface Schema$InstallationState {
    /**
     * Output only. Link to follow for next action. Empty string if the installation is already complete.
     */
    actionUri?: string | null;
    /**
     * Output only. Message of what the user should do next to continue the installation. Empty string if the installation is already complete.
     */
    message?: string | null;
    /**
     * Output only. Current step of the installation process.
     */
    stage?: string | null;
  }
  /**
   * Message for response to listing Connections.
   */
  export interface Schema$ListConnectionsResponse {
    /**
     * The list of Connections.
     */
    connections?: Schema$Connection[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
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
   * Message for response to listing Repositories.
   */
  export interface Schema$ListRepositoriesResponse {
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * The list of Repositories.
     */
    repositories?: Schema$Repository[];
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
   * Represents an OAuth token of the account that authorized the Connection, and associated metadata.
   */
  export interface Schema$OAuthCredential {
    /**
     * Optional. A SecretManager resource containing the OAuth token that authorizes the Cloud Build connection. Format: `projects/x/secrets/x/versions/x`.
     */
    oauthTokenSecretVersion?: string | null;
    /**
     * Output only. The username associated to this token.
     */
    username?: string | null;
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
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     */
    cancelRequested?: boolean | null;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Human-readable status of the operation, if any.
     */
    statusDetail?: string | null;
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
   * Param defined with name and value. PipelineRef can be used to refer to a specific instance of a Pipeline.
   */
  export interface Schema$Param {
    /**
     * Name of the parameter.
     */
    name?: string | null;
    /**
     * Value of the parameter.
     */
    value?: Schema$ParamValue;
  }
  /**
   * ParamSpec defines parameters needed beyond typed inputs (such as resources). Parameter values are provided by users as inputs on a TaskRun or PipelineRun.
   */
  export interface Schema$ParamSpec {
    /**
     * The default value a parameter takes if no input value is supplied
     */
    default?: Schema$ParamValue;
    /**
     * Description of the ParamSpec
     */
    description?: string | null;
    /**
     * Name of the ParamSpec
     */
    name?: string | null;
    /**
     * Type of ParamSpec
     */
    type?: string | null;
  }
  /**
   * Parameter value.
   */
  export interface Schema$ParamValue {
    /**
     * Value of the parameter if type is array.
     */
    arrayVal?: string[] | null;
    /**
     * Optional. Value of the parameter if type is object.
     */
    objectVal?: {[key: string]: string} | null;
    /**
     * Value of the parameter if type is string.
     */
    stringVal?: string | null;
    /**
     * Type of parameter.
     */
    type?: string | null;
  }
  /**
   * PipelineRef can be used to refer to a specific instance of a Pipeline.
   */
  export interface Schema$PipelineRef {
    /**
     * Optional. Name of the Pipeline.
     */
    name?: string | null;
    /**
     * Params contains the parameters used to identify the referenced Tekton resource. Example entries might include "repo" or "path" but the set of params ultimately depends on the chosen resolver.
     */
    params?: Schema$Param[];
    /**
     * Resolver is the name of the resolver that should perform resolution of the referenced Tekton resource.
     */
    resolver?: string | null;
  }
  /**
   * A value produced by a Pipeline.
   */
  export interface Schema$PipelineResult {
    /**
     * Output only. Description of the result.
     */
    description?: string | null;
    /**
     * Output only. Name of the result.
     */
    name?: string | null;
    /**
     * Output only. The type of data that the result holds.
     */
    type?: string | null;
    /**
     * Output only. Value of the result.
     */
    value?: Schema$ResultValue;
  }
  /**
   * Message describing PipelineRun object
   */
  export interface Schema$PipelineRun {
    /**
     * User annotations. See https://google.aip.dev/128#annotations
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. List of TaskRun and Run names and PipelineTask names for children of this PipelineRun.
     */
    childReferences?: Schema$ChildStatusReference[];
    /**
     * Output only. Time the pipeline completed.
     */
    completionTime?: string | null;
    /**
     * Output only. Kubernetes Conditions convention for PipelineRun status and error.
     */
    conditions?: Schema$GoogleDevtoolsCloudbuildV2Condition[];
    /**
     * Output only. Time at which the request to create the `PipelineRun` was received.
     */
    createTime?: string | null;
    /**
     * Needed for declarative-friendly resources.
     */
    etag?: string | null;
    /**
     * Output only. FinallyStartTime is when all non-finally tasks have been completed and only finally tasks are being executed. +optional
     */
    finallyStartTime?: string | null;
    /**
     * Output only. GCB default params.
     */
    gcbParams?: {[key: string]: string} | null;
    /**
     * Output only. The `PipelineRun` name with format `projects/{project\}/locations/{location\}/pipelineRuns/{pipeline_run\}`
     */
    name?: string | null;
    /**
     * Params is a list of parameter names and values.
     */
    params?: Schema$Param[];
    /**
     * PipelineRef refer to a specific instance of a Pipeline.
     */
    pipelineRef?: Schema$PipelineRef;
    /**
     * Pipelinerun status the user can provide. Used for cancellation.
     */
    pipelineRunStatus?: string | null;
    /**
     * PipelineSpec defines the desired state of Pipeline.
     */
    pipelineSpec?: Schema$PipelineSpec;
    /**
     * Output only. Inline pipelineSpec yaml string, used by workflow run requests.
     */
    pipelineSpecYaml?: string | null;
    /**
     * Optional. Provenance configuration.
     */
    provenance?: Schema$Provenance;
    /**
     * Output only. The `Record` of this `PipelineRun`. Format: `projects/{project\}/locations/{location\}/results/{result_id\}/records/{record_id\}`
     */
    record?: string | null;
    /**
     * Output only. The exact PipelineSpec used to instantiate the run.
     */
    resolvedPipelineSpec?: Schema$PipelineSpec;
    /**
     * Optional. Output only. List of results written out by the pipeline's containers
     */
    results?: Schema$PipelineRunResult[];
    /**
     * Optional. Security configuration.
     */
    security?: Schema$Security;
    /**
     * Service account used in the Pipeline. Deprecated; please use security.service_account instead.
     */
    serviceAccount?: string | null;
    /**
     * Output only. List of tasks that were skipped due to when expressions evaluating to false.
     */
    skippedTasks?: Schema$SkippedTask[];
    /**
     * Output only. Time the pipeline is actually started.
     */
    startTime?: string | null;
    /**
     * Time after which the Pipeline times out. Currently three keys are accepted in the map pipeline, tasks and finally with Timeouts.pipeline \>= Timeouts.tasks + Timeouts.finally
     */
    timeouts?: Schema$TimeoutFields;
    /**
     * Output only. A unique identifier for the `PipelineRun`.
     */
    uid?: string | null;
    /**
     * Output only. Time at which the request to update the `PipelineRun` was received.
     */
    updateTime?: string | null;
    /**
     * Optional. Worker configuration.
     */
    worker?: Schema$Worker;
    /**
     * Output only. The WorkerPool used to run this PipelineRun.
     */
    workerPool?: string | null;
    /**
     * Output only. The Workflow used to create this PipelineRun.
     */
    workflow?: string | null;
    /**
     * Workspaces is a list of WorkspaceBindings from volumes to workspaces.
     */
    workspaces?: Schema$WorkspaceBinding[];
  }
  /**
   * PipelineRunResult used to describe the results of a pipeline
   */
  export interface Schema$PipelineRunResult {
    /**
     * Output only. Name of the TaskRun
     */
    name?: string | null;
    /**
     * Output only. Value of the result.
     */
    value?: Schema$ResultValue;
  }
  /**
   * PipelineSpec defines the desired state of Pipeline.
   */
  export interface Schema$PipelineSpec {
    /**
     * List of Tasks that execute just before leaving the Pipeline i.e. either after all Tasks are finished executing successfully or after a failure which would result in ending the Pipeline.
     */
    finallyTasks?: Schema$PipelineTask[];
    /**
     * Output only. auto-generated yaml that is output only for display purpose for workflows using pipeline_spec, used by UI/gcloud cli for Workflows.
     */
    generatedYaml?: string | null;
    /**
     * List of parameters.
     */
    params?: Schema$ParamSpec[];
    /**
     * Optional. Output only. List of results written out by the pipeline's containers
     */
    results?: Schema$PipelineResult[];
    /**
     * List of Tasks that execute when this Pipeline is run.
     */
    tasks?: Schema$PipelineTask[];
    /**
     * Workspaces declares a set of named workspaces that are expected to be provided by a PipelineRun.
     */
    workspaces?: Schema$PipelineWorkspaceDeclaration[];
  }
  /**
   * PipelineTask defines a task in a Pipeline.
   */
  export interface Schema$PipelineTask {
    /**
     * Name of the task.
     */
    name?: string | null;
    /**
     * Params is a list of parameter names and values.
     */
    params?: Schema$Param[];
    /**
     * Retries represents how many times this task should be retried in case of task failure.
     */
    retries?: number | null;
    /**
     * RunAfter is the list of PipelineTask names that should be executed before this Task executes. (Used to force a specific ordering in graph execution.)
     */
    runAfter?: string[] | null;
    /**
     * Reference to a specific instance of a task.
     */
    taskRef?: Schema$TaskRef;
    /**
     * Spec to instantiate this TaskRun.
     */
    taskSpec?: Schema$EmbeddedTask;
    /**
     * Time after which the TaskRun times out. Defaults to 1 hour. Specified TaskRun timeout should be less than 24h.
     */
    timeout?: string | null;
    /**
     * Conditions that need to be true for the task to run.
     */
    whenExpressions?: Schema$WhenExpression[];
    /**
     * Workspaces maps workspaces from the pipeline spec to the workspaces declared in the Task.
     */
    workspaces?: Schema$WorkspacePipelineTaskBinding[];
  }
  /**
   * Workspaces declares a set of named workspaces that are expected to be provided by a PipelineRun.
   */
  export interface Schema$PipelineWorkspaceDeclaration {
    /**
     * Description is a human readable string describing how the workspace will be used in the Pipeline.
     */
    description?: string | null;
    /**
     * Name is the name of a workspace to be provided by a PipelineRun.
     */
    name?: string | null;
    /**
     * Optional marks a Workspace as not being required in PipelineRuns. By default this field is false and so declared workspaces are required.
     */
    optional?: boolean | null;
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
   * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
   */
  export interface Schema$Probe {
    /**
     * Optional. Exec specifies the action to take. +optional
     */
    exec?: Schema$ExecAction;
    /**
     * Optional. How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. +optional
     */
    periodSeconds?: number | null;
  }
  /**
   * PropertySpec holds information about a property in an object.
   */
  export interface Schema$PropertySpec {
    /**
     * A type for the object.
     */
    type?: string | null;
  }
  /**
   * Provenance configuration.
   */
  export interface Schema$Provenance {
    /**
     * Optional. Provenance push mode.
     */
    enabled?: string | null;
    /**
     * Optional. Provenance region.
     */
    region?: string | null;
    /**
     * Optional. Where provenance is stored.
     */
    storage?: string | null;
  }
  /**
   * A repository associated to a parent connection.
   */
  export interface Schema$Repository {
    /**
     * Optional. Allows clients to store small amounts of arbitrary data.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. Server assigned timestamp for when the connection was created.
     */
    createTime?: string | null;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string | null;
    /**
     * Immutable. Resource name of the repository, in the format `projects/x/locations/x/connections/x/repositories/x`.
     */
    name?: string | null;
    /**
     * Required. Git Clone HTTPS URI.
     */
    remoteUri?: string | null;
    /**
     * Output only. Server assigned timestamp for when the connection was updated.
     */
    updateTime?: string | null;
    /**
     * Output only. External ID of the webhook created for the repository.
     */
    webhookId?: string | null;
  }
  /**
   * ResultValue holds different types of data for a single result.
   */
  export interface Schema$ResultValue {
    /**
     * Value of the result if type is array.
     */
    arrayVal?: string[] | null;
    /**
     * Value of the result if type is object.
     */
    objectVal?: {[key: string]: string} | null;
    /**
     * Value of the result if type is string.
     */
    stringVal?: string | null;
    /**
     * Output only. The type of data that the result holds.
     */
    type?: string | null;
  }
  /**
   * Represents the custom metadata of the RunWorkflow long-running operation.
   */
  export interface Schema$RunWorkflowCustomOperationMetadata {
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
     * Output only. ID of the pipeline run created by RunWorkflow.
     */
    pipelineRunId?: string | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    requestedCancellation?: boolean | null;
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
   * Secret Volume Source.
   */
  export interface Schema$SecretVolumeSource {
    /**
     * Name of the secret referenced by the WorkspaceBinding.
     */
    secretName?: string | null;
    /**
     * Optional. Resource name of the SecretVersion. In format: projects/x/secrets/x/versions/x
     */
    secretVersion?: string | null;
  }
  /**
   * Security configuration.
   */
  export interface Schema$Security {
    /**
     * Optional. Privilege mode.
     */
    privilegeMode?: string | null;
    /**
     * IAM service account whose credentials will be used at runtime.
     */
    serviceAccount?: string | null;
  }
  /**
   * Security options the container should be run with.
   */
  export interface Schema$SecurityContext {
    /**
     * Optional. AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows. +optional
     */
    allowPrivilegeEscalation?: boolean | null;
    /**
     * Run container in privileged mode.
     */
    privileged?: boolean | null;
    /**
     * Optional. The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. +optional
     */
    runAsGroup?: string | null;
    /**
     * Optional. Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. +optional
     */
    runAsNonRoot?: boolean | null;
    /**
     * Optional. The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. +optional
     */
    runAsUser?: string | null;
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
   * Sidecars run alongside the Task's step containers.
   */
  export interface Schema$Sidecar {
    /**
     * Arguments to the entrypoint.
     */
    args?: string[] | null;
    /**
     * Entrypoint array.
     */
    command?: string[] | null;
    /**
     * List of environment variables to set in the container.
     */
    env?: Schema$EnvVar[];
    /**
     * Docker image name.
     */
    image?: string | null;
    /**
     * Name of the Sidecar.
     */
    name?: string | null;
    /**
     * Optional. Periodic probe of Sidecar service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes +optional
     */
    readinessProbe?: Schema$Probe;
    /**
     * The contents of an executable file to execute.
     */
    script?: string | null;
    /**
     * Optional. Security options the container should be run with.
     */
    securityContext?: Schema$SecurityContext;
    /**
     * Pod volumes to mount into the container's filesystem.
     */
    volumeMounts?: Schema$VolumeMount[];
    /**
     * Container's working directory.
     */
    workingDir?: string | null;
  }
  /**
   * SkippedTask is used to describe the Tasks that were skipped due to their When Expressions evaluating to False.
   */
  export interface Schema$SkippedTask {
    /**
     * Name is the Pipeline Task name
     */
    name?: string | null;
    /**
     * Output only. Reason is the cause of the PipelineTask being skipped.
     */
    reason?: string | null;
    /**
     * WhenExpressions is the list of checks guarding the execution of the PipelineTask
     */
    whenExpressions?: Schema$WhenExpression[];
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
   * Step embeds the Container type, which allows it to include fields not provided by Container.
   */
  export interface Schema$Step {
    /**
     * Arguments to the entrypoint.
     */
    args?: string[] | null;
    /**
     * Entrypoint array.
     */
    command?: string[] | null;
    /**
     * List of environment variables to set in the container.
     */
    env?: Schema$EnvVar[];
    /**
     * Docker image name.
     */
    image?: string | null;
    /**
     * Name of the container specified as a DNS_LABEL.
     */
    name?: string | null;
    /**
     * Optional. OnError defines the exiting behavior on error can be set to [ continue | stopAndFail ]
     */
    onError?: string | null;
    /**
     * Optional. Optional parameters passed to the StepAction.
     */
    params?: Schema$Param[];
    /**
     * Optional. Optional reference to a remote StepAction.
     */
    ref?: Schema$StepRef;
    /**
     * The contents of an executable file to execute.
     */
    script?: string | null;
    /**
     * Optional. SecurityContext defines the security options the Step should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/ +optional
     */
    securityContext?: Schema$SecurityContext;
    /**
     * Time after which the Step times out. Defaults to never.
     */
    timeout?: string | null;
    /**
     * Pod volumes to mount into the container's filesystem.
     */
    volumeMounts?: Schema$VolumeMount[];
    /**
     * Container's working directory.
     */
    workingDir?: string | null;
  }
  /**
   * A reference to a remote Step, i.e. a StepAction.
   */
  export interface Schema$StepRef {
    /**
     * Optional. Name of the step.
     */
    name?: string | null;
    /**
     * Optional. Parameters used to control the resolution.
     */
    params?: Schema$Param[];
    /**
     * Optional. Type of the resolver.
     */
    resolver?: string | null;
  }
  /**
   * StepTemplate can be used as the basis for all step containers within the Task, so that the steps inherit settings on the base container.
   */
  export interface Schema$StepTemplate {
    /**
     * Optional. List of environment variables to set in the Step. Cannot be updated.
     */
    env?: Schema$EnvVar[];
    /**
     * Optional. Pod volumes to mount into the container's filesystem.
     */
    volumeMounts?: Schema$VolumeMount[];
  }
  /**
   * TaskRef can be used to refer to a specific instance of a task. PipelineRef can be used to refer to a specific instance of a Pipeline.
   */
  export interface Schema$TaskRef {
    /**
     * Optional. Name of the task.
     */
    name?: string | null;
    /**
     * Params contains the parameters used to identify the referenced Tekton resource. Example entries might include "repo" or "path" but the set of params ultimately depends on the chosen resolver.
     */
    params?: Schema$Param[];
    /**
     * Resolver is the name of the resolver that should perform resolution of the referenced Tekton resource.
     */
    resolver?: string | null;
  }
  /**
   * TaskResult is used to describe the results of a task.
   */
  export interface Schema$TaskResult {
    /**
     * Description of the result.
     */
    description?: string | null;
    /**
     * Name of the result.
     */
    name?: string | null;
    /**
     * When type is OBJECT, this map holds the names of fields inside that object along with the type of data each field holds.
     */
    properties?: {[key: string]: Schema$PropertySpec} | null;
    /**
     * The type of data that the result holds.
     */
    type?: string | null;
    /**
     * Optional. Optionally used to initialize a Task's result with a Step's result.
     */
    value?: Schema$ParamValue;
  }
  /**
   * TaskSpec contains the Spec to instantiate a TaskRun.
   */
  export interface Schema$TaskSpec {
    /**
     * Description of the task.
     */
    description?: string | null;
    /**
     * Sidecars that run alongside the Task’s step containers that should be added to this Task.
     */
    managedSidecars?: string[] | null;
    /**
     * List of parameters.
     */
    params?: Schema$ParamSpec[];
    /**
     * Values that this Task can output.
     */
    results?: Schema$TaskResult[];
    /**
     * Sidecars that run alongside the Task's step containers.
     */
    sidecars?: Schema$Sidecar[];
    /**
     * Steps of the task.
     */
    steps?: Schema$Step[];
    /**
     * Optional. StepTemplate can be used as the basis for all step containers within the Task, so that the steps inherit settings on the base container.
     */
    stepTemplate?: Schema$StepTemplate;
    /**
     * A collection of volumes that are available to mount into steps.
     */
    volumes?: Schema$VolumeSource[];
    /**
     * The volumes that this Task requires.
     */
    workspaces?: Schema$WorkspaceDeclaration[];
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
   * TimeoutFields allows granular specification of pipeline, task, and finally timeouts
   */
  export interface Schema$TimeoutFields {
    /**
     * Finally sets the maximum allowed duration of this pipeline's finally
     */
    finally?: string | null;
    /**
     * Pipeline sets the maximum allowed duration for execution of the entire pipeline. The sum of individual timeouts for tasks and finally must not exceed this value.
     */
    pipeline?: string | null;
    /**
     * Tasks sets the maximum allowed duration of this pipeline's tasks
     */
    tasks?: string | null;
  }
  /**
   * Represents a personal access token that authorized the Connection, and associated metadata.
   */
  export interface Schema$UserCredential {
    /**
     * Output only. The username associated to this token.
     */
    username?: string | null;
    /**
     * Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: `projects/x/secrets/x/versions/x`.
     */
    userTokenSecretVersion?: string | null;
  }
  /**
   * Pod volumes to mount into the container's filesystem.
   */
  export interface Schema$VolumeMount {
    /**
     * Path within the container at which the volume should be mounted. Must not contain ':'.
     */
    mountPath?: string | null;
    /**
     * Name of the volume.
     */
    name?: string | null;
    /**
     * Mounted read-only if true, read-write otherwise (false or unspecified).
     */
    readOnly?: boolean | null;
    /**
     * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
     */
    subPath?: string | null;
    /**
     * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root).
     */
    subPathExpr?: string | null;
  }
  /**
   * Volumes available to mount.
   */
  export interface Schema$VolumeSource {
    /**
     * A temporary directory that shares a pod's lifetime.
     */
    emptyDir?: Schema$EmptyDirVolumeSource;
    /**
     * Name of the Volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     */
    name?: string | null;
  }
  /**
   * Conditions that need to be true for the task to run.
   */
  export interface Schema$WhenExpression {
    /**
     * Operator that represents an Input's relationship to the values
     */
    expressionOperator?: string | null;
    /**
     * Input is the string for guard checking which can be a static input or an output from a parent Task.
     */
    input?: string | null;
    /**
     * Values is an array of strings, which is compared against the input, for guard checking.
     */
    values?: string[] | null;
  }
  /**
   * Configuration for the worker.
   */
  export interface Schema$Worker {
    /**
     * Optional. Machine type of a worker, default is "e2-standard-2".
     */
    machineType?: string | null;
  }
  /**
   * WorkspaceBinding maps a workspace to a Volume. PipelineRef can be used to refer to a specific instance of a Pipeline.
   */
  export interface Schema$WorkspaceBinding {
    /**
     * Name of the workspace.
     */
    name?: string | null;
    /**
     * Secret Volume Source.
     */
    secret?: Schema$SecretVolumeSource;
    /**
     * Optional. SubPath is optionally a directory on the volume which should be used for this binding (i.e. the volume will be mounted at this sub directory). +optional
     */
    subPath?: string | null;
  }
  /**
   * WorkspaceDeclaration is a declaration of a volume that a Task requires.
   */
  export interface Schema$WorkspaceDeclaration {
    /**
     * Description is a human readable description of this volume.
     */
    description?: string | null;
    /**
     * MountPath overrides the directory that the volume will be made available at.
     */
    mountPath?: string | null;
    /**
     * Name is the name by which you can bind the volume at runtime.
     */
    name?: string | null;
    /**
     * Optional. Optional marks a Workspace as not being required in TaskRuns. By default this field is false and so declared workspaces are required.
     */
    optional?: boolean | null;
    /**
     * ReadOnly dictates whether a mounted volume is writable.
     */
    readOnly?: boolean | null;
  }
  /**
   * WorkspacePipelineTaskBinding maps workspaces from the PipelineSpec to the workspaces declared in the Task.
   */
  export interface Schema$WorkspacePipelineTaskBinding {
    /**
     * Name of the workspace as declared by the task.
     */
    name?: string | null;
    /**
     * Optional. SubPath is optionally a directory on the volume which should be used for this binding (i.e. the volume will be mounted at this sub directory). +optional
     */
    subPath?: string | null;
    /**
     * Name of the workspace declared by the pipeline.
     */
    workspace?: string | null;
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
    connections: Resource$Projects$Locations$Connections;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.connections = new Resource$Projects$Locations$Connections(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v2');
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
     *   const res = await cloudbuild.projects.locations.get({
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

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v2');
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
     *   const res = await cloudbuild.projects.locations.list({
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

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}/locations').replace(
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

  export class Resource$Projects$Locations$Connections {
    context: APIRequestContext;
    repositories: Resource$Projects$Locations$Connections$Repositories;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.repositories =
        new Resource$Projects$Locations$Connections$Repositories(this.context);
    }

    /**
     * Creates a Connection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v2');
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
     *   const res = await cloudbuild.projects.locations.connections.create({
     *     // Required. The ID to use for the Connection, which will become the final component of the Connection's resource name. Names must be unique per-project per-location. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@.
     *     connectionId: 'placeholder-value',
     *     // Required. Project and location where the connection will be created. Format: `projects/x/locations/x`.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "bitbucketCloudConfig": {},
     *       //   "bitbucketDataCenterConfig": {},
     *       //   "createTime": "my_createTime",
     *       //   "disabled": false,
     *       //   "etag": "my_etag",
     *       //   "githubConfig": {},
     *       //   "githubEnterpriseConfig": {},
     *       //   "gitlabConfig": {},
     *       //   "installationState": {},
     *       //   "name": "my_name",
     *       //   "reconciling": false,
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
      params: Params$Resource$Projects$Locations$Connections$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Connections$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Connections$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connections$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connections$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Create
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
        {}) as Params$Resource$Projects$Locations$Connections$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Connections$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/connections').replace(
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
     * Deletes a single connection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v2');
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
     *   const res = await cloudbuild.projects.locations.connections.delete({
     *     // The current etag of the connection. If an etag is provided and does not match the current etag of the connection, deletion will be blocked and an ABORTED error will be returned.
     *     etag: 'placeholder-value',
     *     // Required. The name of the Connection to delete. Format: `projects/x/locations/x/connections/x`.
     *     name: 'projects/my-project/locations/my-location/connections/my-connection',
     *     // If set, validate the request, but do not actually post it.
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
      params: Params$Resource$Projects$Locations$Connections$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Connections$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Delete
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
        {}) as Params$Resource$Projects$Locations$Connections$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Connections$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * FetchLinkableRepositories get repositories from SCM that are accessible and could be added to the connection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v2');
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
     *     await cloudbuild.projects.locations.connections.fetchLinkableRepositories({
     *       // Required. The name of the Connection. Format: `projects/x/locations/x/connections/x`.
     *       connection:
     *         'projects/my-project/locations/my-location/connections/my-connection',
     *       // Number of results to return in the list. Default to 20.
     *       pageSize: 'placeholder-value',
     *       // Page start.
     *       pageToken: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "repositories": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    fetchLinkableRepositories(
      params: Params$Resource$Projects$Locations$Connections$Fetchlinkablerepositories,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetchLinkableRepositories(
      params?: Params$Resource$Projects$Locations$Connections$Fetchlinkablerepositories,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$FetchLinkableRepositoriesResponse>
    >;
    fetchLinkableRepositories(
      params: Params$Resource$Projects$Locations$Connections$Fetchlinkablerepositories,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchLinkableRepositories(
      params: Params$Resource$Projects$Locations$Connections$Fetchlinkablerepositories,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchLinkableRepositoriesResponse>,
      callback: BodyResponseCallback<Schema$FetchLinkableRepositoriesResponse>
    ): void;
    fetchLinkableRepositories(
      params: Params$Resource$Projects$Locations$Connections$Fetchlinkablerepositories,
      callback: BodyResponseCallback<Schema$FetchLinkableRepositoriesResponse>
    ): void;
    fetchLinkableRepositories(
      callback: BodyResponseCallback<Schema$FetchLinkableRepositoriesResponse>
    ): void;
    fetchLinkableRepositories(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Fetchlinkablerepositories
        | BodyResponseCallback<Schema$FetchLinkableRepositoriesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchLinkableRepositoriesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchLinkableRepositoriesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$FetchLinkableRepositoriesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Fetchlinkablerepositories;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Fetchlinkablerepositories;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v2/{+connection}:fetchLinkableRepositories'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['connection'],
        pathParams: ['connection'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FetchLinkableRepositoriesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchLinkableRepositoriesResponse>(
          parameters
        );
      }
    }

    /**
     * Gets details of a single connection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v2');
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
     *   const res = await cloudbuild.projects.locations.connections.get({
     *     // Required. The name of the Connection to retrieve. Format: `projects/x/locations/x/connections/x`.
     *     name: 'projects/my-project/locations/my-location/connections/my-connection',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "bitbucketCloudConfig": {},
     *   //   "bitbucketDataCenterConfig": {},
     *   //   "createTime": "my_createTime",
     *   //   "disabled": false,
     *   //   "etag": "my_etag",
     *   //   "githubConfig": {},
     *   //   "githubEnterpriseConfig": {},
     *   //   "gitlabConfig": {},
     *   //   "installationState": {},
     *   //   "name": "my_name",
     *   //   "reconciling": false,
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
      params: Params$Resource$Projects$Locations$Connections$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Connections$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Connection>>;
    get(
      params: Params$Resource$Projects$Locations$Connections$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Connection>,
      callback: BodyResponseCallback<Schema$Connection>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Get,
      callback: BodyResponseCallback<Schema$Connection>
    ): void;
    get(callback: BodyResponseCallback<Schema$Connection>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Get
        | BodyResponseCallback<Schema$Connection>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Connection>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Connection>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Connection>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Connections$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Connection>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Connection>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v2');
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
     *   const res = await cloudbuild.projects.locations.connections.getIamPolicy({
     *     // Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *     'options.requestedPolicyVersion': 'placeholder-value',
     *     // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/connections/my-connection',
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
      params: Params$Resource$Projects$Locations$Connections$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Connections$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Connections$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Connections$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Connections$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Connections$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+resource}:getIamPolicy').replace(
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
     * Lists Connections in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v2');
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
     *   const res = await cloudbuild.projects.locations.connections.list({
     *     // Number of results to return in the list.
     *     pageSize: 'placeholder-value',
     *     // Page start.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent, which owns this collection of Connections. Format: `projects/x/locations/x`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. If set to true, the response will return partial results when some regions are unreachable. If set to false, the response will fail if any region is unreachable.
     *     returnPartialSuccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "connections": [],
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
      params: Params$Resource$Projects$Locations$Connections$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Connections$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListConnectionsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Connections$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConnectionsResponse>,
      callback: BodyResponseCallback<Schema$ListConnectionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$List,
      callback: BodyResponseCallback<Schema$ListConnectionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListConnectionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$List
        | BodyResponseCallback<Schema$ListConnectionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConnectionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConnectionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListConnectionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Connections$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/connections').replace(
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
        createAPIRequest<Schema$ListConnectionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConnectionsResponse>(parameters);
      }
    }

    /**
     * Updates a single connection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v2');
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
     *   const res = await cloudbuild.projects.locations.connections.patch({
     *     // If set to true, and the connection is not found a new connection will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input connection has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties).
     *     allowMissing: 'placeholder-value',
     *     // The current etag of the connection. If an etag is provided and does not match the current etag of the connection, update will be blocked and an ABORTED error will be returned.
     *     etag: 'placeholder-value',
     *     // Immutable. The resource name of the connection, in the format `projects/{project\}/locations/{location\}/connections/{connection_id\}`.
     *     name: 'projects/my-project/locations/my-location/connections/my-connection',
     *     // The list of fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "bitbucketCloudConfig": {},
     *       //   "bitbucketDataCenterConfig": {},
     *       //   "createTime": "my_createTime",
     *       //   "disabled": false,
     *       //   "etag": "my_etag",
     *       //   "githubConfig": {},
     *       //   "githubEnterpriseConfig": {},
     *       //   "gitlabConfig": {},
     *       //   "installationState": {},
     *       //   "name": "my_name",
     *       //   "reconciling": false,
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
      params: Params$Resource$Projects$Locations$Connections$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Connections$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Connections$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Connections$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Connections$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Patch
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
        {}) as Params$Resource$Projects$Locations$Connections$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Connections$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * ProcessWebhook is called by the external SCM for notifying of events.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v2');
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
     *   const res = await cloudbuild.projects.locations.connections.processWebhook({
     *     // Required. Project and location where the webhook will be received. Format: `projects/x/locations/x`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Arbitrary additional key to find the matching repository for a webhook event if needed.
     *     webhookKey: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentType": "my_contentType",
     *       //   "data": "my_data",
     *       //   "extensions": []
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
    processWebhook(
      params: Params$Resource$Projects$Locations$Connections$Processwebhook,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    processWebhook(
      params?: Params$Resource$Projects$Locations$Connections$Processwebhook,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    processWebhook(
      params: Params$Resource$Projects$Locations$Connections$Processwebhook,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    processWebhook(
      params: Params$Resource$Projects$Locations$Connections$Processwebhook,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    processWebhook(
      params: Params$Resource$Projects$Locations$Connections$Processwebhook,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    processWebhook(callback: BodyResponseCallback<Schema$Empty>): void;
    processWebhook(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Processwebhook
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
        {}) as Params$Resource$Projects$Locations$Connections$Processwebhook;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Processwebhook;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/connections:processWebhook').replace(
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

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v2');
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
     *   const res = await cloudbuild.projects.locations.connections.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource:
     *       'projects/my-project/locations/my-location/connections/my-connection',
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
      params: Params$Resource$Projects$Locations$Connections$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Connections$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Connections$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Connections$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Connections$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Connections$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+resource}:setIamPolicy').replace(
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
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v2');
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
     *     await cloudbuild.projects.locations.connections.testIamPermissions({
     *       // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/connections/my-connection',
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
      params: Params$Resource$Projects$Locations$Connections$Testiampermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Connections$Testiampermissions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Connections$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Connections$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Connections$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Connections$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+resource}:testIamPermissions').replace(
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

  export interface Params$Resource$Projects$Locations$Connections$Create
    extends StandardParameters {
    /**
     * Required. The ID to use for the Connection, which will become the final component of the Connection's resource name. Names must be unique per-project per-location. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@.
     */
    connectionId?: string;
    /**
     * Required. Project and location where the connection will be created. Format: `projects/x/locations/x`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Connection;
  }
  export interface Params$Resource$Projects$Locations$Connections$Delete
    extends StandardParameters {
    /**
     * The current etag of the connection. If an etag is provided and does not match the current etag of the connection, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * Required. The name of the Connection to delete. Format: `projects/x/locations/x/connections/x`.
     */
    name?: string;
    /**
     * If set, validate the request, but do not actually post it.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Connections$Fetchlinkablerepositories
    extends StandardParameters {
    /**
     * Required. The name of the Connection. Format: `projects/x/locations/x/connections/x`.
     */
    connection?: string;
    /**
     * Number of results to return in the list. Default to 20.
     */
    pageSize?: number;
    /**
     * Page start.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Get
    extends StandardParameters {
    /**
     * Required. The name of the Connection to retrieve. Format: `projects/x/locations/x/connections/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Connections$List
    extends StandardParameters {
    /**
     * Number of results to return in the list.
     */
    pageSize?: number;
    /**
     * Page start.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of Connections. Format: `projects/x/locations/x`.
     */
    parent?: string;
    /**
     * Optional. If set to true, the response will return partial results when some regions are unreachable. If set to false, the response will fail if any region is unreachable.
     */
    returnPartialSuccess?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Connections$Patch
    extends StandardParameters {
    /**
     * If set to true, and the connection is not found a new connection will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input connection has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties).
     */
    allowMissing?: boolean;
    /**
     * The current etag of the connection. If an etag is provided and does not match the current etag of the connection, update will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * Immutable. The resource name of the connection, in the format `projects/{project\}/locations/{location\}/connections/{connection_id\}`.
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Connection;
  }
  export interface Params$Resource$Projects$Locations$Connections$Processwebhook
    extends StandardParameters {
    /**
     * Required. Project and location where the webhook will be received. Format: `projects/x/locations/x`.
     */
    parent?: string;
    /**
     * Arbitrary additional key to find the matching repository for a webhook event if needed.
     */
    webhookKey?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpBody;
  }
  export interface Params$Resource$Projects$Locations$Connections$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Connections$Testiampermissions
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

  export class Resource$Projects$Locations$Connections$Repositories {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Fetches read token of a given repository.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v2');
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
     *     await cloudbuild.projects.locations.connections.repositories.accessReadToken(
     *       {
     *         // Required. The resource name of the repository in the format `projects/x/locations/x/connections/x/repositories/x`.
     *         repository:
     *           'projects/my-project/locations/my-location/connections/my-connection/repositories/my-repositorie',
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
     *   // {
     *   //   "expirationTime": "my_expirationTime",
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
    accessReadToken(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Accessreadtoken,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    accessReadToken(
      params?: Params$Resource$Projects$Locations$Connections$Repositories$Accessreadtoken,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$FetchReadTokenResponse>>;
    accessReadToken(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Accessreadtoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    accessReadToken(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Accessreadtoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchReadTokenResponse>,
      callback: BodyResponseCallback<Schema$FetchReadTokenResponse>
    ): void;
    accessReadToken(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Accessreadtoken,
      callback: BodyResponseCallback<Schema$FetchReadTokenResponse>
    ): void;
    accessReadToken(
      callback: BodyResponseCallback<Schema$FetchReadTokenResponse>
    ): void;
    accessReadToken(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Repositories$Accessreadtoken
        | BodyResponseCallback<Schema$FetchReadTokenResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchReadTokenResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchReadTokenResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$FetchReadTokenResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Repositories$Accessreadtoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Repositories$Accessreadtoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+repository}:accessReadToken').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['repository'],
        pathParams: ['repository'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FetchReadTokenResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchReadTokenResponse>(parameters);
      }
    }

    /**
     * Fetches read/write token of a given repository.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v2');
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
     *     await cloudbuild.projects.locations.connections.repositories.accessReadWriteToken(
     *       {
     *         // Required. The resource name of the repository in the format `projects/x/locations/x/connections/x/repositories/x`.
     *         repository:
     *           'projects/my-project/locations/my-location/connections/my-connection/repositories/my-repositorie',
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
     *   // {
     *   //   "expirationTime": "my_expirationTime",
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
    accessReadWriteToken(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Accessreadwritetoken,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    accessReadWriteToken(
      params?: Params$Resource$Projects$Locations$Connections$Repositories$Accessreadwritetoken,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$FetchReadWriteTokenResponse>>;
    accessReadWriteToken(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Accessreadwritetoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    accessReadWriteToken(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Accessreadwritetoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchReadWriteTokenResponse>,
      callback: BodyResponseCallback<Schema$FetchReadWriteTokenResponse>
    ): void;
    accessReadWriteToken(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Accessreadwritetoken,
      callback: BodyResponseCallback<Schema$FetchReadWriteTokenResponse>
    ): void;
    accessReadWriteToken(
      callback: BodyResponseCallback<Schema$FetchReadWriteTokenResponse>
    ): void;
    accessReadWriteToken(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Repositories$Accessreadwritetoken
        | BodyResponseCallback<Schema$FetchReadWriteTokenResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchReadWriteTokenResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchReadWriteTokenResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$FetchReadWriteTokenResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Repositories$Accessreadwritetoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Repositories$Accessreadwritetoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+repository}:accessReadWriteToken').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['repository'],
        pathParams: ['repository'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FetchReadWriteTokenResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchReadWriteTokenResponse>(parameters);
      }
    }

    /**
     * Creates multiple repositories inside a connection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v2');
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
     *     await cloudbuild.projects.locations.connections.repositories.batchCreate({
     *       // Required. The connection to contain all the repositories being created. Format: projects/x/locations/x/connections/x The parent field in the CreateRepositoryRequest messages must either be empty or match this field.
     *       parent:
     *         'projects/my-project/locations/my-location/connections/my-connection',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "requests": []
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
    batchCreate(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Batchcreate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchCreate(
      params?: Params$Resource$Projects$Locations$Connections$Repositories$Batchcreate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    batchCreate(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Batchcreate,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Batchcreate,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    batchCreate(callback: BodyResponseCallback<Schema$Operation>): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Repositories$Batchcreate
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
        {}) as Params$Resource$Projects$Locations$Connections$Repositories$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Repositories$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/repositories:batchCreate').replace(
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
     * Creates a Repository.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v2');
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
     *     await cloudbuild.projects.locations.connections.repositories.create({
     *       // Required. The connection to contain the repository. If the request is part of a BatchCreateRepositoriesRequest, this field should be empty or match the parent specified there.
     *       parent:
     *         'projects/my-project/locations/my-location/connections/my-connection',
     *       // Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@.
     *       repositoryId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "annotations": {},
     *         //   "createTime": "my_createTime",
     *         //   "etag": "my_etag",
     *         //   "name": "my_name",
     *         //   "remoteUri": "my_remoteUri",
     *         //   "updateTime": "my_updateTime",
     *         //   "webhookId": "my_webhookId"
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
      params: Params$Resource$Projects$Locations$Connections$Repositories$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Connections$Repositories$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Repositories$Create
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
        {}) as Params$Resource$Projects$Locations$Connections$Repositories$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Repositories$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/repositories').replace(
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
     * Deletes a single repository.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v2');
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
     *     await cloudbuild.projects.locations.connections.repositories.delete({
     *       // The current etag of the repository. If an etag is provided and does not match the current etag of the repository, deletion will be blocked and an ABORTED error will be returned.
     *       etag: 'placeholder-value',
     *       // Required. The name of the Repository to delete. Format: `projects/x/locations/x/connections/x/repositories/x`.
     *       name: 'projects/my-project/locations/my-location/connections/my-connection/repositories/my-repositorie',
     *       // If set, validate the request, but do not actually post it.
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
      params: Params$Resource$Projects$Locations$Connections$Repositories$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Connections$Repositories$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Repositories$Delete
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
        {}) as Params$Resource$Projects$Locations$Connections$Repositories$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Repositories$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Fetch the list of branches or tags for a given repository.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v2');
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
     *     await cloudbuild.projects.locations.connections.repositories.fetchGitRefs({
     *       // Optional. Number of results to return in the list. Default to 20.
     *       pageSize: 'placeholder-value',
     *       // Optional. Page start.
     *       pageToken: 'placeholder-value',
     *       // Type of refs to fetch
     *       refType: 'placeholder-value',
     *       // Required. The resource name of the repository in the format `projects/x/locations/x/connections/x/repositories/x`.
     *       repository:
     *         'projects/my-project/locations/my-location/connections/my-connection/repositories/my-repositorie',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "refNames": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    fetchGitRefs(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Fetchgitrefs,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetchGitRefs(
      params?: Params$Resource$Projects$Locations$Connections$Repositories$Fetchgitrefs,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$FetchGitRefsResponse>>;
    fetchGitRefs(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Fetchgitrefs,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchGitRefs(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Fetchgitrefs,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchGitRefsResponse>,
      callback: BodyResponseCallback<Schema$FetchGitRefsResponse>
    ): void;
    fetchGitRefs(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Fetchgitrefs,
      callback: BodyResponseCallback<Schema$FetchGitRefsResponse>
    ): void;
    fetchGitRefs(
      callback: BodyResponseCallback<Schema$FetchGitRefsResponse>
    ): void;
    fetchGitRefs(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Repositories$Fetchgitrefs
        | BodyResponseCallback<Schema$FetchGitRefsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchGitRefsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchGitRefsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$FetchGitRefsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Repositories$Fetchgitrefs;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Repositories$Fetchgitrefs;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+repository}:fetchGitRefs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['repository'],
        pathParams: ['repository'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FetchGitRefsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchGitRefsResponse>(parameters);
      }
    }

    /**
     * Gets details of a single repository.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v2');
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
     *   const res = await cloudbuild.projects.locations.connections.repositories.get({
     *     // Required. The name of the Repository to retrieve. Format: `projects/x/locations/x/connections/x/repositories/x`.
     *     name: 'projects/my-project/locations/my-location/connections/my-connection/repositories/my-repositorie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "createTime": "my_createTime",
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "remoteUri": "my_remoteUri",
     *   //   "updateTime": "my_updateTime",
     *   //   "webhookId": "my_webhookId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Connections$Repositories$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Connections$Repositories$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Repository>>;
    get(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Repository>,
      callback: BodyResponseCallback<Schema$Repository>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Repositories$Get,
      callback: BodyResponseCallback<Schema$Repository>
    ): void;
    get(callback: BodyResponseCallback<Schema$Repository>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Repositories$Get
        | BodyResponseCallback<Schema$Repository>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Repository>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Repository>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Repository>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Repositories$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Repositories$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Repository>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Repository>(parameters);
      }
    }

    /**
     * Lists Repositories in a given connection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v2');
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
     *   const res = await cloudbuild.projects.locations.connections.repositories.list(
     *     {
     *       // A filter expression that filters resources listed in the response. Expressions must follow API improvement proposal [AIP-160](https://google.aip.dev/160). e.g. `remote_uri:"https://github.com*"`.
     *       filter: 'placeholder-value',
     *       // Number of results to return in the list.
     *       pageSize: 'placeholder-value',
     *       // Page start.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent, which owns this collection of Repositories. Format: `projects/x/locations/x/connections/x`.
     *       parent:
     *         'projects/my-project/locations/my-location/connections/my-connection',
     *       // Optional. If set to true, the response will return partial results when some regions are unreachable. If set to false, the response will fail if any region is unreachable.
     *       returnPartialSuccess: 'placeholder-value',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "repositories": [],
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
      params: Params$Resource$Projects$Locations$Connections$Repositories$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Connections$Repositories$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListRepositoriesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Connections$Repositories$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Repositories$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRepositoriesResponse>,
      callback: BodyResponseCallback<Schema$ListRepositoriesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Repositories$List,
      callback: BodyResponseCallback<Schema$ListRepositoriesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRepositoriesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Repositories$List
        | BodyResponseCallback<Schema$ListRepositoriesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRepositoriesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRepositoriesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListRepositoriesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Repositories$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Repositories$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/repositories').replace(
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
        createAPIRequest<Schema$ListRepositoriesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRepositoriesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Connections$Repositories$Accessreadtoken
    extends StandardParameters {
    /**
     * Required. The resource name of the repository in the format `projects/x/locations/x/connections/x/repositories/x`.
     */
    repository?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FetchReadTokenRequest;
  }
  export interface Params$Resource$Projects$Locations$Connections$Repositories$Accessreadwritetoken
    extends StandardParameters {
    /**
     * Required. The resource name of the repository in the format `projects/x/locations/x/connections/x/repositories/x`.
     */
    repository?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FetchReadWriteTokenRequest;
  }
  export interface Params$Resource$Projects$Locations$Connections$Repositories$Batchcreate
    extends StandardParameters {
    /**
     * Required. The connection to contain all the repositories being created. Format: projects/x/locations/x/connections/x The parent field in the CreateRepositoryRequest messages must either be empty or match this field.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchCreateRepositoriesRequest;
  }
  export interface Params$Resource$Projects$Locations$Connections$Repositories$Create
    extends StandardParameters {
    /**
     * Required. The connection to contain the repository. If the request is part of a BatchCreateRepositoriesRequest, this field should be empty or match the parent specified there.
     */
    parent?: string;
    /**
     * Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@.
     */
    repositoryId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Repository;
  }
  export interface Params$Resource$Projects$Locations$Connections$Repositories$Delete
    extends StandardParameters {
    /**
     * The current etag of the repository. If an etag is provided and does not match the current etag of the repository, deletion will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * Required. The name of the Repository to delete. Format: `projects/x/locations/x/connections/x/repositories/x`.
     */
    name?: string;
    /**
     * If set, validate the request, but do not actually post it.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Connections$Repositories$Fetchgitrefs
    extends StandardParameters {
    /**
     * Optional. Number of results to return in the list. Default to 20.
     */
    pageSize?: number;
    /**
     * Optional. Page start.
     */
    pageToken?: string;
    /**
     * Type of refs to fetch
     */
    refType?: string;
    /**
     * Required. The resource name of the repository in the format `projects/x/locations/x/connections/x/repositories/x`.
     */
    repository?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Repositories$Get
    extends StandardParameters {
    /**
     * Required. The name of the Repository to retrieve. Format: `projects/x/locations/x/connections/x/repositories/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Repositories$List
    extends StandardParameters {
    /**
     * A filter expression that filters resources listed in the response. Expressions must follow API improvement proposal [AIP-160](https://google.aip.dev/160). e.g. `remote_uri:"https://github.com*"`.
     */
    filter?: string;
    /**
     * Number of results to return in the list.
     */
    pageSize?: number;
    /**
     * Page start.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of Repositories. Format: `projects/x/locations/x/connections/x`.
     */
    parent?: string;
    /**
     * Optional. If set to true, the response will return partial results when some regions are unreachable. If set to false, the response will fail if any region is unreachable.
     */
    returnPartialSuccess?: boolean;
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
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v2');
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
     *   const res = await cloudbuild.projects.locations.operations.cancel({
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

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbuild.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const cloudbuild = google.cloudbuild('v2');
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
     *   const res = await cloudbuild.projects.locations.operations.get({
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

      const rootUrl = options.rootUrl || 'https://cloudbuild.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
}
