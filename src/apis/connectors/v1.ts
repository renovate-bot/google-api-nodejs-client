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

export namespace connectors_v1 {
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
   * Connectors API
   *
   * Enables users to create and manage connections to Google Cloud services and third-party business applications using the Connectors interface.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const connectors = google.connectors('v1');
   * ```
   */
  export class Connectors {
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
   * AuthConfig defines details of a authentication type.
   */
  export interface Schema$AuthConfig {
    /**
     * Optional. List containing additional auth configs.
     */
    additionalVariables?: Schema$ConfigVariable[];
    /**
     * Optional. Identifier key for auth config
     */
    authKey?: string | null;
    /**
     * Optional. The type of authentication configured.
     */
    authType?: string | null;
    /**
     * Oauth2AuthCodeFlow.
     */
    oauth2AuthCodeFlow?: Schema$Oauth2AuthCodeFlow;
    /**
     * Oauth2AuthCodeFlowGoogleManaged.
     */
    oauth2AuthCodeFlowGoogleManaged?: Schema$Oauth2AuthCodeFlowGoogleManaged;
    /**
     * Oauth2ClientCredentials.
     */
    oauth2ClientCredentials?: Schema$Oauth2ClientCredentials;
    /**
     * Oauth2JwtBearer.
     */
    oauth2JwtBearer?: Schema$Oauth2JwtBearer;
    /**
     * SSH Public Key.
     */
    sshPublicKey?: Schema$SshPublicKey;
    /**
     * UserPassword.
     */
    userPassword?: Schema$UserPassword;
  }
  /**
   * AuthConfigTemplate defines required field over an authentication type.
   */
  export interface Schema$AuthConfigTemplate {
    /**
     * Identifier key for auth config
     */
    authKey?: string | null;
    /**
     * The type of authentication configured.
     */
    authType?: string | null;
    /**
     * Config variables to describe an `AuthConfig` for a `Connection`.
     */
    configVariableTemplates?: Schema$ConfigVariableTemplate[];
    /**
     * Connector specific description for an authentication template.
     */
    description?: string | null;
    /**
     * Display name for authentication template.
     */
    displayName?: string | null;
    /**
     * Whether the auth config is the default one.
     */
    isDefault?: boolean | null;
  }
  /**
   * AuthField defines a field in an authentication type.
   */
  export interface Schema$AuthField {
    /**
     * Data type of the field.
     */
    dataType?: string | null;
    /**
     * Description of the field.
     */
    description?: string | null;
    /**
     * Key of the field.
     */
    key?: string | null;
  }
  /**
   * AuthObject defines a JSON schema of an authentication type.
   */
  export interface Schema$AuthObject {
    /**
     * Whether the object has additional properties.
     */
    additionalProperties?: boolean | null;
    /**
     * Auth key of the object.
     */
    authKey?: string | null;
    /**
     * Auth type of the object.
     */
    authType?: string | null;
    /**
     * Description of the object.
     */
    description?: string | null;
    /**
     * Whether the object is the default one.
     */
    isDefault?: boolean | null;
    /**
     * Properties of the object.
     */
    properties?: {[key: string]: Schema$AuthProperty} | null;
    /**
     * Type of the object.
     */
    type?: string | null;
  }
  /**
   * This configuration captures the details required to render an authorization link for the OAuth Authorization Code Flow.
   */
  export interface Schema$AuthorizationCodeLink {
    /**
     * Optional. The client ID assigned to the Google Cloud Connectors OAuth app for the connector data source.
     */
    clientId?: string | null;
    /**
     * Optional. The client secret assigned to the Google Cloud Connectors OAuth app for the connector data source.
     */
    clientSecret?: Schema$Secret;
    /**
     * Optional. Whether to enable PKCE for the auth code flow.
     */
    enablePkce?: boolean | null;
    /**
     * Optional. Omit query params from the redirect URI.
     */
    omitQueryParams?: boolean | null;
    /**
     * Optional. The scopes for which the user will authorize Google Cloud Connectors on the connector data source.
     */
    scopes?: string[] | null;
    /**
     * Optional. The base URI the user must click to trigger the authorization code login flow.
     */
    uri?: string | null;
  }
  /**
   * AuthProperty defines a property of an authentication type.
   */
  export interface Schema$AuthProperty {
    /**
     * Description of the property.
     */
    description?: string | null;
    /**
     * Type of the property.
     */
    type?: string | null;
  }
  /**
   * AuthSchema defines the schema of an authentication type.
   */
  export interface Schema$AuthSchema {
    /**
     * List of AuthFields.
     */
    authFields?: Schema$AuthField[];
    /**
     * Auth key of the schema.
     */
    authKey?: string | null;
    /**
     * Auth type of the schema.
     */
    authType?: string | null;
    /**
     * Description of the schema.
     */
    description?: string | null;
    /**
     * Display name of the schema.
     */
    displayName?: string | null;
    /**
     * Whether the auth schema is the default one.
     */
    isDefault?: boolean | null;
  }
  /**
   * Billing config for the connection.
   */
  export interface Schema$BillingConfig {
    /**
     * Output only. Billing category for the connector.
     */
    billingCategory?: string | null;
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
   * ConfigVariable represents a configuration variable present in a Connection. or AuthConfig.
   */
  export interface Schema$ConfigVariable {
    /**
     * Value is a bool.
     */
    boolValue?: boolean | null;
    /**
     * Value is a Encryption Key.
     */
    encryptionKeyValue?: Schema$EncryptionKey;
    /**
     * Value is an integer
     */
    intValue?: string | null;
    /**
     * Optional. Key of the config variable.
     */
    key?: string | null;
    /**
     * Value is a secret.
     */
    secretValue?: Schema$Secret;
    /**
     * Value is a string.
     */
    stringValue?: string | null;
  }
  /**
   * ConfigVariableTemplate provides metadata about a `ConfigVariable` that is used in a Connection.
   */
  export interface Schema$ConfigVariableTemplate {
    /**
     * Optional. Authorization code link options. To be populated if `ValueType` is `AUTHORIZATION_CODE`
     */
    authorizationCodeLink?: Schema$AuthorizationCodeLink;
    /**
     * Optional. Description.
     */
    description?: string | null;
    /**
     * Optional. Display name of the parameter.
     */
    displayName?: string | null;
    /**
     * Optional. Enum options. To be populated if `ValueType` is `ENUM`
     */
    enumOptions?: Schema$EnumOption[];
    /**
     * Optional. enum source denotes the source of api to fill the enum options
     */
    enumSource?: string | null;
    /**
     * Optional. Indicates if current template is part of advanced settings
     */
    isAdvanced?: boolean | null;
    /**
     * Optional. Key of the config variable.
     */
    key?: string | null;
    /**
     * Optional. Location Tyep denotes where this value should be sent in BYOC connections.
     */
    locationType?: string | null;
    /**
     * Optional. MultipleSelectConfig represents the multiple options for a config variable.
     */
    multipleSelectConfig?: Schema$MultipleSelectConfig;
    /**
     * Optional. Flag represents that this `ConfigVariable` must be provided for a connection.
     */
    required?: boolean | null;
    /**
     * Optional. Condition under which a field would be required. The condition can be represented in the form of a logical expression.
     */
    requiredCondition?: Schema$LogicalExpression;
    /**
     * Optional. Role grant configuration for the config variable.
     */
    roleGrant?: Schema$RoleGrant;
    /**
     * Output only. State of the config variable.
     */
    state?: string | null;
    /**
     * Optional. Regular expression in RE2 syntax used for validating the `value` of a `ConfigVariable`.
     */
    validationRegex?: string | null;
    /**
     * Optional. Type of the parameter: string, int, bool etc. consider custom type for the benefit for the validation.
     */
    valueType?: string | null;
  }
  /**
   * Connection represents an instance of connector.
   */
  export interface Schema$Connection {
    /**
     * Optional. Async operations enabled for the connection. If Async Operations is enabled, Connection allows the customers to initiate async long running operations using the actions API.
     */
    asyncOperationsEnabled?: boolean | null;
    /**
     * Optional. Configuration for establishing the connection's authentication with an external system.
     */
    authConfig?: Schema$AuthConfig;
    /**
     * Optional. Auth override enabled for the connection. If Auth Override is enabled, Connection allows the backend service auth to be overridden in the entities/actions API.
     */
    authOverrideEnabled?: boolean | null;
    /**
     * Output only. Billing config for the connection.
     */
    billingConfig?: Schema$BillingConfig;
    /**
     * Optional. Configuration for configuring the connection with an external system.
     */
    configVariables?: Schema$ConfigVariable[];
    /**
     * Output only. Connection revision. This field is only updated when the connection is created or updated by User.
     */
    connectionRevision?: string | null;
    /**
     * Required. Connector version on which the connection is created. The format is: projects/x/locations/x/providers/x/connectors/x/versions/x Only global location is supported for ConnectorVersion resource.
     */
    connectorVersion?: string | null;
    /**
     * Output only. Infra configs supported by Connector Version.
     */
    connectorVersionInfraConfig?: Schema$ConnectorVersionInfraConfig;
    /**
     * Output only. Flag to mark the version indicating the launch stage.
     */
    connectorVersionLaunchStage?: string | null;
    /**
     * Output only. Created time.
     */
    createTime?: string | null;
    /**
     * Optional. Description of the resource.
     */
    description?: string | null;
    /**
     * Optional. Configuration of the Connector's destination. Only accepted for Connectors that accepts user defined destination(s).
     */
    destinationConfigs?: Schema$DestinationConfig[];
    /**
     * Output only. GCR location where the envoy image is stored. formatted like: gcr.io/{bucketName\}/{imageName\}
     */
    envoyImageLocation?: string | null;
    /**
     * Optional. Additional Oauth2.0 Auth config for EUA. If the connection is configured using non-OAuth authentication but OAuth needs to be used for EUA, this field can be populated with the OAuth config. This should be a OAuth2AuthCodeFlow Auth type only.
     */
    euaOauthAuthConfig?: Schema$AuthConfig;
    /**
     * Optional. Eventing config of a connection
     */
    eventingConfig?: Schema$EventingConfig;
    /**
     * Optional. Eventing enablement type. Will be nil if eventing is not enabled.
     */
    eventingEnablementType?: string | null;
    /**
     * Output only. Eventing Runtime Data.
     */
    eventingRuntimeData?: Schema$EventingRuntimeData;
    /**
     * Optional. Fallback on admin credentials for the connection. If this both auth_override_enabled and fallback_on_admin_credentials are set to true, the connection will use the admin credentials if the dynamic auth header is not present during auth override.
     */
    fallbackOnAdminCredentials?: boolean | null;
    /**
     * Output only. The name of the Hostname of the Service Directory service with TLS.
     */
    host?: string | null;
    /**
     * Output only. GCR location where the runtime image is stored. formatted like: gcr.io/{bucketName\}/{imageName\}
     */
    imageLocation?: string | null;
    /**
     * Output only. Is trusted tester program enabled for the project.
     */
    isTrustedTester?: boolean | null;
    /**
     * Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. Configuration that indicates whether or not the Connection can be edited.
     */
    lockConfig?: Schema$LockConfig;
    /**
     * Optional. Log configuration for the connection.
     */
    logConfig?: Schema$ConnectorsLogConfig;
    /**
     * Output only. Resource name of the Connection. Format: projects/{project\}/locations/{location\}/connections/{connection\}
     */
    name?: string | null;
    /**
     * Optional. Node configuration for the connection.
     */
    nodeConfig?: Schema$NodeConfig;
    /**
     * Optional. Service account needed for runtime plane to access Google Cloud resources.
     */
    serviceAccount?: string | null;
    /**
     * Output only. The name of the Service Directory service name. Used for Private Harpoon to resolve the ILB address. e.g. "projects/cloud-connectors-e2e-testing/locations/us-central1/namespaces/istio-system/services/istio-ingressgateway-connectors"
     */
    serviceDirectory?: string | null;
    /**
     * Optional. Ssl config of a connection
     */
    sslConfig?: Schema$SslConfig;
    /**
     * Output only. Current status of the connection.
     */
    status?: Schema$ConnectionStatus;
    /**
     * Output only. This subscription type enum states the subscription type of the project.
     */
    subscriptionType?: string | null;
    /**
     * Optional. Suspended indicates if a user has suspended a connection or not.
     */
    suspended?: boolean | null;
    /**
     * Output only. The name of the Service Directory service with TLS.
     */
    tlsServiceDirectory?: string | null;
    /**
     * Optional. Traffic shaping configuration for the connection.
     */
    trafficShapingConfigs?: Schema$TrafficShapingConfig[];
    /**
     * Output only. Updated time.
     */
    updateTime?: string | null;
  }
  /**
   * ConnectionSchemaMetadata is the singleton resource of each connection. It includes the entity and action names of runtime resources exposed by a connection backend.
   */
  export interface Schema$ConnectionSchemaMetadata {
    /**
     * Output only. List of actions.
     */
    actions?: string[] | null;
    /**
     * Output only. List of entity names.
     */
    entities?: string[] | null;
    /**
     * Error message for users.
     */
    errorMessage?: string | null;
    /**
     * Output only. Resource name. Format: projects/{project\}/locations/{location\}/connections/{connection\}/connectionSchemaMetadata
     */
    name?: string | null;
    /**
     * Output only. Timestamp when the connection runtime schema refresh was triggered.
     */
    refreshTime?: string | null;
    /**
     * Output only. The current state of runtime schema.
     */
    state?: string | null;
    /**
     * Output only. Timestamp when the connection runtime schema was updated.
     */
    updateTime?: string | null;
  }
  /**
   * ConnectionStatus indicates the state of the connection.
   */
  export interface Schema$ConnectionStatus {
    /**
     * Description.
     */
    description?: string | null;
    /**
     * State.
     */
    state?: string | null;
    /**
     * Status provides detailed information for the state.
     */
    status?: string | null;
  }
  /**
   * Connectors indicates a specific connector type, e.x. Salesforce, SAP etc.
   */
  export interface Schema$Connector {
    /**
     * Output only. Category of the connector.
     */
    category?: string | null;
    /**
     * Output only. The type of the connector.
     */
    connectorType?: string | null;
    /**
     * Output only. Created time.
     */
    createTime?: string | null;
    /**
     * Output only. Description of the resource.
     */
    description?: string | null;
    /**
     * Output only. Display name.
     */
    displayName?: string | null;
    /**
     * Output only. Link to documentation page.
     */
    documentationUri?: string | null;
    /**
     * Output only. Eventing details. Will be null if eventing is not supported.
     */
    eventingDetails?: Schema$EventingDetails;
    /**
     * Output only. Link to external page.
     */
    externalUri?: string | null;
    /**
     * Output only. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Flag to mark the version indicating the launch stage.
     */
    launchStage?: string | null;
    /**
     * Output only. Marketplace connector details. Will be null if the connector is not marketplace connector.
     */
    marketplaceConnectorDetails?: Schema$MarketplaceConnectorDetails;
    /**
     * Output only. Resource name of the Connector. Format: projects/{project\}/locations/{location\}/providers/{provider\}/connectors/{connector\} Only global location is supported for Connector resource.
     */
    name?: string | null;
    /**
     * Output only. Tags of the connector.
     */
    tags?: string[] | null;
    /**
     * Output only. Updated time.
     */
    updateTime?: string | null;
    /**
     * Output only. Cloud storage location of icons etc consumed by UI.
     */
    webAssetsLocation?: string | null;
  }
  /**
   * This cofiguration provides infra configs like rate limit threshold which need to be configurable for every connector version
   */
  export interface Schema$ConnectorInfraConfig {
    /**
     * Indicates that the Cloud Run CPU should always be allocated.
     */
    alwaysAllocateCpu?: boolean | null;
    /**
     * The window used for ratelimiting runtime requests to connections.
     */
    connectionRatelimitWindowSeconds?: string | null;
    /**
     * Indicate whether connector versioning is enabled.
     */
    connectorVersioningEnabled?: boolean | null;
    /**
     * Indicate whether connector is deployed on GKE/CloudRun
     */
    deploymentModel?: string | null;
    /**
     * HPA autoscaling config.
     */
    hpaConfig?: Schema$HPAConfig;
    /**
     * Max QPS supported for internal requests originating from Connd.
     */
    internalclientRatelimitThreshold?: string | null;
    /**
     * Max Instance Request Conncurrency for Cloud Run service.
     */
    maxInstanceRequestConcurrency?: number | null;
    /**
     * Indicate whether connector is being migrated to cloud run deployment model.
     */
    migrateDeploymentModel?: boolean | null;
    /**
     * Indicate whether connector is being migrated to TLS.
     */
    migrateTls?: boolean | null;
    /**
     * Indicate whether connector is being migrated to use direct VPC egress.
     */
    networkEgressMode?: string | null;
    /**
     * Indicate whether cloud spanner is required for connector job.
     */
    provisionCloudSpanner?: boolean | null;
    /**
     * Indicate whether memstore is required for connector job.
     */
    provisionMemstore?: boolean | null;
    /**
     * Max QPS supported by the connector version before throttling of requests.
     */
    ratelimitThreshold?: string | null;
    /**
     * System resource limits.
     */
    resourceLimits?: Schema$ResourceLimits;
    /**
     * System resource requests.
     */
    resourceRequests?: Schema$ResourceRequests;
    /**
     * The name of shared connector deployment.
     */
    sharedDeployment?: string | null;
  }
  /**
   * Log configuration for the connection.
   */
  export interface Schema$ConnectorsLogConfig {
    /**
     * Optional. Enabled represents whether logging is enabled or not for a connection.
     */
    enabled?: boolean | null;
    /**
     * Optional. Log configuration level.
     */
    level?: string | null;
  }
  /**
   * ConnectorVersion indicates a specific version of a connector.
   */
  export interface Schema$ConnectorVersion {
    /**
     * Output only. List of auth configs supported by the Connector Version.
     */
    authConfigTemplates?: Schema$AuthConfigTemplate[];
    /**
     * Output only. Flag to mark the dynamic auth override.
     */
    authOverrideEnabled?: boolean | null;
    /**
     * Output only. List of config variables needed to create a connection.
     */
    configVariableTemplates?: Schema$ConfigVariableTemplate[];
    /**
     * Output only. Infra configs supported by Connector.
     */
    connectorInfraConfig?: Schema$ConnectorInfraConfig;
    /**
     * Output only. Created time.
     */
    createTime?: string | null;
    /**
     * Output only. List of destination configs needed to create a connection.
     */
    destinationConfigTemplates?: Schema$DestinationConfigTemplate[];
    /**
     * Output only. Display name.
     */
    displayName?: string | null;
    /**
     * Output only. Configuration for Egress Control.
     */
    egressControlConfig?: Schema$EgressControlConfig;
    /**
     * Output only. Eventing configuration supported by the Connector.
     */
    eventingConfigTemplate?: Schema$EventingConfigTemplate;
    /**
     * Output only. Is custom actions supported.
     */
    isCustomActionsSupported?: boolean | null;
    /**
     * Output only. Is custom entities supported.
     */
    isCustomEntitiesSupported?: boolean | null;
    /**
     * Output only. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Flag to mark the version indicating the launch stage.
     */
    launchStage?: string | null;
    /**
     * Output only. Resource name of the Version. Format: projects/{project\}/locations/{location\}/providers/{provider\}/connectors/{connector\}/versions/{version\} Only global location is supported for Connector resource.
     */
    name?: string | null;
    /**
     * Output only. ReleaseVersion of the connector, for example: "1.0.1-alpha".
     */
    releaseVersion?: string | null;
    /**
     * Output only. Role grant configuration for this config variable. It will be DEPRECATED soon.
     */
    roleGrant?: Schema$RoleGrant;
    /**
     * Output only. Role grant configurations for this connector version.
     */
    roleGrants?: Schema$RoleGrant[];
    /**
     * Connection Schema Refresh Config
     */
    schemaRefreshConfig?: Schema$SchemaRefreshConfig;
    /**
     * Output only. Ssl configuration supported by the Connector.
     */
    sslConfigTemplate?: Schema$SslConfigTemplate;
    /**
     * Output only. Information about the runtime features supported by the Connector.
     */
    supportedRuntimeFeatures?: Schema$SupportedRuntimeFeatures;
    /**
     * Output only. Supported standard actions.
     */
    supportedStandardActions?: Schema$StandardAction[];
    /**
     * Output only. Supported standard entities.
     */
    supportedStandardEntities?: Schema$StandardEntity[];
    /**
     * Output only. Unsupported connection types.
     */
    unsupportedConnectionTypes?: string[] | null;
    /**
     * Output only. Updated time.
     */
    updateTime?: string | null;
    /**
     * Output only. VPCSC config for the connector.
     */
    vpcscConfig?: Schema$VpcscConfig;
  }
  /**
   * This configuration provides infra configs like rate limit threshold which need to be configurable for every connector version
   */
  export interface Schema$ConnectorVersionInfraConfig {
    /**
     * Output only. The window used for ratelimiting runtime requests to connections.
     */
    connectionRatelimitWindowSeconds?: string | null;
    /**
     * Output only. Indicates whether connector is deployed on GKE/CloudRun
     */
    deploymentModel?: string | null;
    /**
     * Output only. Status of the deployment model migration.
     */
    deploymentModelMigrationState?: string | null;
    /**
     * Output only. HPA autoscaling config.
     */
    hpaConfig?: Schema$HPAConfig;
    /**
     * Output only. Max QPS supported for internal requests originating from Connd.
     */
    internalclientRatelimitThreshold?: string | null;
    /**
     * Output only. Max instance request concurrency.
     */
    maxInstanceRequestConcurrency?: number | null;
    /**
     * Output only. Max QPS supported by the connector version before throttling of requests.
     */
    ratelimitThreshold?: string | null;
    /**
     * Output only. System resource limits.
     */
    resourceLimits?: Schema$ResourceLimits;
    /**
     * Output only. System resource requests.
     */
    resourceRequests?: Schema$ResourceRequests;
    /**
     * Output only. The name of shared connector deployment.
     */
    sharedDeployment?: string | null;
    /**
     * Output only. Status of the TLS migration.
     */
    tlsMigrationState?: string | null;
  }
  /**
   * CustomConnector represents the custom connector defined by the customer as part of byoc.
   */
  export interface Schema$CustomConnector {
    /**
     * Output only. Active connector versions.
     */
    activeConnectorVersions?: string[] | null;
    /**
     * Output only. All connector versions.
     */
    allConnectorVersions?: string[] | null;
    /**
     * Output only. All marketplace versions.
     */
    allMarketplaceVersions?: string[] | null;
    /**
     * Output only. Created time.
     */
    createTime?: string | null;
    /**
     * Required. Type of the custom connector.
     */
    customConnectorType?: string | null;
    /**
     * Optional. Description of the resource.
     */
    description?: string | null;
    /**
     * Optional. Display name.
     */
    displayName?: string | null;
    /**
     * Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. Logo of the resource.
     */
    logo?: string | null;
    /**
     * Identifier. Resource name of the CustomConnector. Format: projects/{project\}/locations/{location\}/customConnectors/{connector\}
     */
    name?: string | null;
    /**
     * Output only. Published marketplace versions.
     */
    publishedMarketplaceVersions?: string[] | null;
    /**
     * Output only. Updated time.
     */
    updateTime?: string | null;
  }
  /**
   * CustomConnectorVersion indicates a specific version of a connector.
   */
  export interface Schema$CustomConnectorVersion {
    /**
     * Optional. Indicates if Async Operations/Connector Job is supported. This is only available for SDK based custom connectors.
     */
    asyncOperationsSupport?: boolean | null;
    /**
     * Optional. Authentication config for accessing connector service (facade). This is used only when enable_backend_destination_config is true.
     */
    authConfig?: Schema$AuthConfig;
    /**
     * Optional. Auth Config Templates is only used when connector backend is enabled. This is used to specify the auth configs supported by the connector backend service to talk to the actual application backend.
     */
    authConfigTemplates?: Schema$AuthConfigTemplate[];
    /**
     * Optional. Auth override support.
     */
    authOverrideSupport?: boolean | null;
    /**
     * Optional. Backend variable templates is only used when connector backend is enabled. This is used to specify the variables required by the connector backend service to talk to the actual application backend. This translates to additional variable templates in the connection config.
     */
    backendVariableTemplates?: Schema$ConfigVariableTemplate[];
    /**
     * Output only. Created time.
     */
    createTime?: string | null;
    /**
     * Optional. Destination config(s) for accessing connector service (facade). This is used only when enable_backend_destination_config is true.
     */
    destinationConfigs?: Schema$DestinationConfig[];
    /**
     * Optional. Indicates if an intermediatory connectorservice is used as backend. When this is enabled, the connector destination and connector auth config are required. For SDK based connectors, this is always enabled.
     */
    enableBackendDestinationConfig?: boolean | null;
    /**
     * Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Identifier. Resource name of the Version. Format: projects/{project\}/locations/{location\}/customConnectors/{custom_connector\}/customConnectorVersions/{custom_connector_version\}
     */
    name?: string | null;
    /**
     * Optional. Partner metadata details. This should be populated only when publishing the custom connector to partner connector.
     */
    partnerMetadata?: Schema$PartnerMetadata;
    /**
     * Output only. Publish status of a custom connector.
     */
    publishStatus?: Schema$PublishStatus;
    /**
     * Optional. Service account used by runtime plane to access auth config secrets.
     */
    serviceAccount?: string | null;
    /**
     * Optional. Location of the custom connector spec. This is only used for Open API based custom connectors. The location can be either a public url like `https://public-url.com/spec` Or a Google Cloud Storage location like `gs:///`.
     */
    specLocation?: string | null;
    /**
     * Output only. Server URLs parsed from the Open API spec. This is only used for Open API based custom connectors.
     */
    specServerUrls?: string[] | null;
    /**
     * Output only. State of the custom connector version.
     */
    state?: string | null;
    /**
     * Output only. Updated time.
     */
    updateTime?: string | null;
  }
  /**
   * Time window specified for daily operations.
   */
  export interface Schema$DailyCycle {
    /**
     * Output only. Duration of the time window, set by service producer.
     */
    duration?: string | null;
    /**
     * Time within the day to start the operations.
     */
    startTime?: Schema$TimeOfDay;
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
   * Dead Letter configuration details provided by the user.
   */
  export interface Schema$DeadLetterConfig {
    /**
     * Optional. Project which has the topic given.
     */
    projectId?: string | null;
    /**
     * Optional. Topic to push events which couldn't be processed.
     */
    topic?: string | null;
  }
  /**
   * DenyMaintenancePeriod definition. Maintenance is forbidden within the deny period. The start_date must be less than the end_date.
   */
  export interface Schema$DenyMaintenancePeriod {
    /**
     * Deny period end date. This can be: * A full date, with non-zero year, month and day values. * A month and day value, with a zero year. Allows recurring deny periods each year. Date matching this period will have to be before the end.
     */
    endDate?: Schema$Date;
    /**
     * Deny period start date. This can be: * A full date, with non-zero year, month and day values. * A month and day value, with a zero year. Allows recurring deny periods each year. Date matching this period will have to be the same or after the start.
     */
    startDate?: Schema$Date;
    /**
     * Time in UTC when the Blackout period starts on start_date and ends on end_date. This can be: * Full time. * All zeros for 00:00:00 UTC
     */
    time?: Schema$TimeOfDay;
  }
  /**
   * Request message for ConnectorsService.DeprecateCustomConnectorVersion
   */
  export interface Schema$DeprecateCustomConnectorVersionRequest {}
  export interface Schema$Destination {
    /**
     * For publicly routable host.
     */
    host?: string | null;
    /**
     * The port is the target port number that is accepted by the destination.
     */
    port?: number | null;
    /**
     * PSC service attachments. Format: projects/x/regions/x/serviceAttachments/x
     */
    serviceAttachment?: string | null;
  }
  /**
   * Define the Connectors target endpoint.
   */
  export interface Schema$DestinationConfig {
    /**
     * The destinations for the key.
     */
    destinations?: Schema$Destination[];
    /**
     * The key is the destination identifier that is supported by the Connector.
     */
    key?: string | null;
  }
  /**
   * DestinationConfigTemplate defines required destinations supported by the Connector.
   */
  export interface Schema$DestinationConfigTemplate {
    /**
     * Autocomplete suggestions for destination URL field.
     */
    autocompleteSuggestions?: string[] | null;
    /**
     * The default port.
     */
    defaultPort?: number | null;
    /**
     * Description.
     */
    description?: string | null;
    /**
     * Display name of the parameter.
     */
    displayName?: string | null;
    /**
     * Whether the current destination tempalate is part of Advanced settings
     */
    isAdvanced?: boolean | null;
    /**
     * Key of the destination.
     */
    key?: string | null;
    /**
     * The maximum number of destinations supported for this key.
     */
    max?: number | null;
    /**
     * The minimum number of destinations supported for this key.
     */
    min?: number | null;
    /**
     * Whether port number should be provided by customers.
     */
    portFieldType?: string | null;
    /**
     * Regex pattern for host.
     */
    regexPattern?: string | null;
  }
  /**
   * Egress control config for connector runtime. These configurations define the rules to identify which outbound domains/hosts needs to be whitelisted. It may be a static information for a particular connector version or it is derived from the configurations provided by the customer in Connection resource.
   */
  export interface Schema$EgressControlConfig {
    /**
     * Static Comma separated backends which are common for all Connection resources. Supported formats for each backend are host:port or just host (host can be ip address or domain name).
     */
    backends?: string | null;
    /**
     * Extractions Rules to extract the backends from customer provided configuration.
     */
    extractionRules?: Schema$ExtractionRules;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Regional encryption config for CMEK details.
   */
  export interface Schema$EncryptionConfig {
    /**
     * Optional. Encryption type for the region.
     */
    encryptionType?: string | null;
    /**
     * Optional. KMS crypto key. This field accepts identifiers of the form `projects/{project\}/locations/{location\}/keyRings/{key_ring\}/cryptoKeys/ {crypto_key\}`
     */
    kmsKeyName?: string | null;
  }
  /**
   * Encryption Key value.
   */
  export interface Schema$EncryptionKey {
    /**
     * Optional. The [KMS key name] with which the content of the Operation is encrypted. The expected format: `projects/x/locations/x/keyRings/x/cryptoKeys/x`. Will be empty string if google managed.
     */
    kmsKeyName?: string | null;
    /**
     * Type.
     */
    type?: string | null;
  }
  /**
   * Endpoint message includes details of the Destination endpoint.
   */
  export interface Schema$EndPoint {
    /**
     * Optional. The URI of the Endpoint.
     */
    endpointUri?: string | null;
    /**
     * Optional. List of Header to be added to the Endpoint.
     */
    headers?: Schema$Header[];
  }
  /**
   * represents the Connector's Endpoint Attachment resource
   */
  export interface Schema$EndpointAttachment {
    /**
     * Output only. Created time.
     */
    createTime?: string | null;
    /**
     * Optional. Description of the resource.
     */
    description?: string | null;
    /**
     * Optional. The Private Service Connect Connection Endpoint Global Access. https://cloud.google.com/vpc/docs/about-accessing-vpc-hosted-services-endpoints#global-access
     */
    endpointGlobalAccess?: boolean | null;
    /**
     * Output only. The Private Service Connect connection endpoint ip
     */
    endpointIp?: string | null;
    /**
     * Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Resource name of the Endpoint Attachment. Format: projects/{project\}/locations/{location\}/endpointAttachments/{endpoint_attachment\}
     */
    name?: string | null;
    /**
     * Required. The path of the service attachment
     */
    serviceAttachment?: string | null;
    /**
     * Output only. The Private Service Connect Connection Endpoint State. This value is only available in the Full view.
     */
    state?: string | null;
    /**
     * Output only. Updated time.
     */
    updateTime?: string | null;
  }
  /**
   * AuthConfig defines details of a authentication type.
   */
  export interface Schema$EndUserAuthentication {
    /**
     * Optional. Config variables for the EndUserAuthentication.
     */
    configVariables?: Schema$EndUserAuthenticationConfigVariable[];
    /**
     * Output only. Created time.
     */
    createTime?: string | null;
    /**
     * Optional. Destination configs for the EndUserAuthentication.
     */
    destinationConfigs?: Schema$DestinationConfig[];
    /**
     * Optional. The EndUserAuthenticationConfig for the EndUserAuthentication.
     */
    endUserAuthenticationConfig?: Schema$EndUserAuthenticationConfig;
    /**
     * Optional. Labels for the EndUserAuthentication.
     */
    labels?: string[] | null;
    /**
     * Required. Identifier. Resource name of the EndUserAuthentication. Format: projects/{project\}/locations/{location\}/connections/{connection\}/endUserAuthentications/{end_user_authentication\}
     */
    name?: string | null;
    /**
     * Optional. The destination to hit when we receive an event
     */
    notifyEndpointDestination?: Schema$EndUserAuthenticationNotifyEndpointDestination;
    /**
     * Optional. Roles for the EndUserAuthentication.
     */
    roles?: string[] | null;
    /**
     * Optional. Status of the EndUserAuthentication.
     */
    status?: Schema$EndUserAuthenticationEndUserAuthenticationStatus;
    /**
     * Output only. Updated time.
     */
    updateTime?: string | null;
    /**
     * Optional. The user id of the user.
     */
    userId?: string | null;
  }
  /**
   * EndUserAuthenticationConfig defines details of a authentication configuration for EUC
   */
  export interface Schema$EndUserAuthenticationConfig {
    /**
     * Optional. List containing additional auth configs.
     */
    additionalVariables?: Schema$EndUserAuthenticationConfigVariable[];
    /**
     * Identifier key for auth config
     */
    authKey?: string | null;
    /**
     * The type of authentication configured.
     */
    authType?: string | null;
    /**
     * Oauth2AuthCodeFlow.
     */
    oauth2AuthCodeFlow?: Schema$EndUserAuthenticationConfigOauth2AuthCodeFlow;
    /**
     * Oauth2AuthCodeFlowGoogleManaged.
     */
    oauth2AuthCodeFlowGoogleManaged?: Schema$EndUserAuthenticationConfigOauth2AuthCodeFlowGoogleManaged;
    /**
     * Oauth2ClientCredentials.
     */
    oauth2ClientCredentials?: Schema$EndUserAuthenticationConfigOauth2ClientCredentials;
    /**
     * Oauth2JwtBearer.
     */
    oauth2JwtBearer?: Schema$EndUserAuthenticationConfigOauth2JwtBearer;
    /**
     * SSH Public Key.
     */
    sshPublicKey?: Schema$EndUserAuthenticationConfigSshPublicKey;
    /**
     * UserPassword.
     */
    userPassword?: Schema$EndUserAuthenticationConfigUserPassword;
  }
  /**
   * Parameters to support Oauth 2.0 Auth Code Grant Authentication. See https://www.rfc-editor.org/rfc/rfc6749#section-1.3.1 for more details.
   */
  export interface Schema$EndUserAuthenticationConfigOauth2AuthCodeFlow {
    /**
     * Optional. Authorization code to be exchanged for access and refresh tokens.
     */
    authCode?: string | null;
    /**
     * Optional. Auth URL for Authorization Code Flow
     */
    authUri?: string | null;
    /**
     * Optional. Client ID for user-provided OAuth app.
     */
    clientId?: string | null;
    /**
     * Optional. Client secret for user-provided OAuth app.
     */
    clientSecret?: Schema$EUASecret;
    /**
     * Optional. Whether to enable PKCE when the user performs the auth code flow.
     */
    enablePkce?: boolean | null;
    /**
     * Optional. Auth Code Data
     */
    oauthTokenData?: Schema$OAuthTokenData;
    /**
     * Optional. PKCE verifier to be used during the auth code exchange.
     */
    pkceVerifier?: string | null;
    /**
     * Optional. Redirect URI to be provided during the auth code exchange.
     */
    redirectUri?: string | null;
    /**
     * Optional. Scopes the connection will request when the user performs the auth code flow.
     */
    scopes?: string[] | null;
  }
  /**
   * Parameters to support Oauth 2.0 Auth Code Grant Authentication using Google Provided OAuth Client. See https://tools.ietf.org/html/rfc6749#section-1.3.1 for more details.
   */
  export interface Schema$EndUserAuthenticationConfigOauth2AuthCodeFlowGoogleManaged {
    /**
     * Optional. Authorization code to be exchanged for access and refresh tokens.
     */
    authCode?: string | null;
    /**
     * Auth Code Data
     */
    oauthTokenData?: Schema$OAuthTokenData;
    /**
     * Optional. Redirect URI to be provided during the auth code exchange.
     */
    redirectUri?: string | null;
    /**
     * Required. Scopes the connection will request when the user performs the auth code flow.
     */
    scopes?: string[] | null;
  }
  /**
   * Parameters to support Oauth 2.0 Client Credentials Grant Authentication. See https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details.
   */
  export interface Schema$EndUserAuthenticationConfigOauth2ClientCredentials {
    /**
     * The client identifier.
     */
    clientId?: string | null;
    /**
     * Required. string value or secret version containing the client secret.
     */
    clientSecret?: Schema$EUASecret;
  }
  /**
   * Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details.
   */
  export interface Schema$EndUserAuthenticationConfigOauth2JwtBearer {
    /**
     * Required. secret version/value reference containing a PKCS#8 PEM-encoded private key associated with the Client Certificate. This private key will be used to sign JWTs used for the jwt-bearer authorization grant. Specified in the form as: `projects/x/strings/x/versions/x`.
     */
    clientKey?: Schema$EUASecret;
    /**
     * JwtClaims providers fields to generate the token.
     */
    jwtClaims?: Schema$EndUserAuthenticationConfigOauth2JwtBearerJwtClaims;
  }
  /**
   * JWT claims used for the jwt-bearer authorization grant.
   */
  export interface Schema$EndUserAuthenticationConfigOauth2JwtBearerJwtClaims {
    /**
     * Value for the "aud" claim.
     */
    audience?: string | null;
    /**
     * Value for the "iss" claim.
     */
    issuer?: string | null;
    /**
     * Value for the "sub" claim.
     */
    subject?: string | null;
  }
  /**
   * Parameters to support Ssh public key Authentication.
   */
  export interface Schema$EndUserAuthenticationConfigSshPublicKey {
    /**
     * Format of SSH Client cert.
     */
    certType?: string | null;
    /**
     * Required. SSH Client Cert. It should contain both public and private key.
     */
    sshClientCert?: Schema$EUASecret;
    /**
     * Required. Password (passphrase) for ssh client certificate if it has one.
     */
    sshClientCertPass?: Schema$EUASecret;
    /**
     * The user account used to authenticate.
     */
    username?: string | null;
  }
  /**
   * Parameters to support Username and Password Authentication.
   */
  export interface Schema$EndUserAuthenticationConfigUserPassword {
    /**
     * Required. string value or secret version reference containing the password.
     */
    password?: Schema$EUASecret;
    /**
     * Username.
     */
    username?: string | null;
  }
  /**
   * EndUserAuthenticationConfigVariable represents a configuration variable present in a EndUserAuthentication.
   */
  export interface Schema$EndUserAuthenticationConfigVariable {
    /**
     * Value is a bool.
     */
    boolValue?: boolean | null;
    /**
     * Value is an integer
     */
    intValue?: string | null;
    /**
     * Required. Key of the config variable.
     */
    key?: string | null;
    /**
     * Value is a secret
     */
    secretValue?: Schema$EUASecret;
    /**
     * Value is a string.
     */
    stringValue?: string | null;
  }
  /**
   * EndUserAuthentication Status denotes the status of the EndUserAuthentication resource.
   */
  export interface Schema$EndUserAuthenticationEndUserAuthenticationStatus {
    /**
     * Output only. Description of the state.
     */
    description?: string | null;
    /**
     * Output only. State of Event Subscription resource.
     */
    state?: string | null;
  }
  /**
   * Message for NotifyEndpointDestination Destination to hit when the refresh token is expired.
   */
  export interface Schema$EndUserAuthenticationNotifyEndpointDestination {
    /**
     * Optional. OPTION 1: Hit an endpoint when the refresh token is expired.
     */
    endpoint?: Schema$EndUserAuthenticationNotifyEndpointDestinationEndPoint;
    /**
     * Required. Service account needed for runtime plane to notify the backend.
     */
    serviceAccount?: string | null;
    /**
     * Required. type of the destination
     */
    type?: string | null;
  }
  /**
   * Endpoint message includes details of the Destination endpoint.
   */
  export interface Schema$EndUserAuthenticationNotifyEndpointDestinationEndPoint {
    /**
     * Required. The URI of the Endpoint.
     */
    endpointUri?: string | null;
    /**
     * Optional. List of Header to be added to the Endpoint.
     */
    headers?: Schema$EndUserAuthenticationNotifyEndpointDestinationEndPointHeader[];
  }
  /**
   * Header details for a given header to be added to Endpoint.
   */
  export interface Schema$EndUserAuthenticationNotifyEndpointDestinationEndPointHeader {
    /**
     * Required. Key of Header.
     */
    key?: string | null;
    /**
     * Required. Value of Header.
     */
    value?: string | null;
  }
  /**
   * Data enrichment configuration.
   */
  export interface Schema$EnrichmentConfig {
    /**
     * Optional. Append ACL to the event.
     */
    appendAcl?: boolean | null;
  }
  /**
   * EnumOption definition
   */
  export interface Schema$EnumOption {
    /**
     * Optional. Display name of the option.
     */
    displayName?: string | null;
    /**
     * Optional. Id of the option.
     */
    id?: string | null;
  }
  /**
   * EUASecret provides a reference to entries in Secret Manager.
   */
  export interface Schema$EUASecret {
    /**
     * Optional. The plain string value of the secret.
     */
    secretValue?: string | null;
    /**
     * Optional. The resource name of the secret version in the format, format as: `projects/x/secrets/x/versions/x`.
     */
    secretVersion?: string | null;
  }
  /**
   * Eventing Configuration of a connection next: 19
   */
  export interface Schema$EventingConfig {
    /**
     * Optional. Additional eventing related field values
     */
    additionalVariables?: Schema$ConfigVariable[];
    /**
     * Optional. Auth details for the webhook adapter.
     */
    authConfig?: Schema$AuthConfig;
    /**
     * Optional. Dead letter configuration for eventing of a connection.
     */
    deadLetterConfig?: Schema$DeadLetterConfig;
    /**
     * Optional. Data enrichment configuration.
     */
    enrichmentConfig?: Schema$EnrichmentConfig;
    /**
     * Optional. Enrichment Enabled.
     */
    enrichmentEnabled?: boolean | null;
    /**
     * Optional. Ingress endpoint of the event listener. This is used only when private connectivity is enabled.
     */
    eventsListenerIngressEndpoint?: string | null;
    /**
     * Optional. Auth details for the event listener.
     */
    listenerAuthConfig?: Schema$AuthConfig;
    /**
     * Optional. List of projects to be allowlisted for the service attachment created in the tenant project for eventing ingress.
     */
    privateConnectivityAllowlistedProjects?: string[] | null;
    /**
     * Optional. Private Connectivity Enabled.
     */
    privateConnectivityEnabled?: boolean | null;
    /**
     * Optional. Proxy for Eventing auto-registration.
     */
    proxyDestinationConfig?: Schema$DestinationConfig;
    /**
     * Optional. Registration endpoint for auto registration.
     */
    registrationDestinationConfig?: Schema$DestinationConfig;
    /**
     * Optional. Ssl config of a connection
     */
    sslConfig?: Schema$SslConfig;
  }
  /**
   * Eventing Config details of a connector version. next: 14
   */
  export interface Schema$EventingConfigTemplate {
    /**
     * Additional fields that need to be rendered.
     */
    additionalVariables?: Schema$ConfigVariableTemplate[];
    /**
     * AuthConfigTemplates represents the auth values for the webhook adapter.
     */
    authConfigTemplates?: Schema$AuthConfigTemplate[];
    /**
     * Auto refresh to extend webhook life.
     */
    autoRefresh?: boolean | null;
    /**
     * Auto Registration supported.
     */
    autoRegistrationSupported?: boolean | null;
    /**
     * Encryption key (can be either Google managed or CMEK).
     */
    encryptionKeyTemplate?: Schema$ConfigVariableTemplate;
    /**
     * Enrichment Supported.
     */
    enrichmentSupported?: boolean | null;
    /**
     * The type of the event listener for a specific connector.
     */
    eventListenerType?: string | null;
    /**
     * Is Eventing Supported.
     */
    isEventingSupported?: boolean | null;
    /**
     * ListenerAuthConfigTemplates represents the auth values for the event listener.
     */
    listenerAuthConfigTemplates?: Schema$AuthConfigTemplate[];
    /**
     * Proxy destination config template.
     */
    proxyDestinationConfig?: Schema$DestinationConfigTemplate;
    /**
     * Registration host destination config template.
     */
    registrationDestinationConfig?: Schema$DestinationConfigTemplate;
    /**
     * SSL Config template for the connector version.
     */
    sslConfigTemplate?: Schema$SslConfigTemplate;
    /**
     * Trigger Config fields that needs to be rendered
     */
    triggerConfigVariables?: Schema$ConfigVariableTemplate[];
  }
  /**
   * Eventing Details message.
   */
  export interface Schema$EventingDetails {
    /**
     * Output only. Custom Event Types.
     */
    customEventTypes?: boolean | null;
    /**
     * Output only. Description.
     */
    description?: string | null;
    /**
     * Output only. Link to public documentation.
     */
    documentationLink?: string | null;
    /**
     * Output only. Cloud storage location of the icon.
     */
    iconLocation?: string | null;
    /**
     * Output only. Eventing Launch Stage.
     */
    launchStage?: string | null;
    /**
     * Output only. Name of the Eventing trigger.
     */
    name?: string | null;
    /**
     * Output only. Array of search keywords.
     */
    searchTags?: string[] | null;
    /**
     * Output only. The type of the event listener for a specific connector.
     */
    type?: string | null;
  }
  /**
   * Eventing runtime data has the details related to eventing managed by the system.
   */
  export interface Schema$EventingRuntimeData {
    /**
     * Output only. Events listener endpoint. The value will populated after provisioning the events listener.
     */
    eventsListenerEndpoint?: string | null;
    /**
     * Output only. Events listener PSC Service attachment. The value will be populated after provisioning the events listener with private connectivity enabled.
     */
    eventsListenerPscSa?: string | null;
    /**
     * Output only. Current status of eventing.
     */
    status?: Schema$EventingStatus;
    /**
     * Output only. Webhook data.
     */
    webhookData?: Schema$WebhookData;
    /**
     * Output only. Webhook subscriptions.
     */
    webhookSubscriptions?: Schema$WebhookSubscriptions;
  }
  /**
   * EventingStatus indicates the state of eventing.
   */
  export interface Schema$EventingStatus {
    /**
     * Output only. Description of error if State is set to "ERROR".
     */
    description?: string | null;
    /**
     * Output only. State.
     */
    state?: string | null;
  }
  /**
   * represents the Connector's EventSubscription resource
   */
  export interface Schema$EventSubscription {
    /**
     * Output only. Created time.
     */
    createTime?: string | null;
    /**
     * Optional. The destination to hit when we receive an event
     */
    destinations?: Schema$EventSubscriptionDestination;
    /**
     * Optional. Event type id of the event of current EventSubscription.
     */
    eventTypeId?: string | null;
    /**
     * Optional. JMS is the source for the event listener.
     */
    jms?: Schema$JMS;
    /**
     * Required. Identifier. Resource name of the EventSubscription. Format: projects/{project\}/locations/{location\}/connections/{connection\}/eventSubscriptions/{event_subscription\}
     */
    name?: string | null;
    /**
     * Optional. Status indicates the status of the event subscription resource
     */
    status?: Schema$EventSubscriptionStatus;
    /**
     * Optional. name of the Subscriber for the current EventSubscription.
     */
    subscriber?: string | null;
    /**
     * Optional. Link for Subscriber of the current EventSubscription.
     */
    subscriberLink?: string | null;
    /**
     * Optional. Configuration for configuring the trigger
     */
    triggerConfigVariables?: Schema$ConfigVariable[];
    /**
     * Output only. Updated time.
     */
    updateTime?: string | null;
  }
  /**
   * Message for EventSubscription Destination to act on receiving an event
   */
  export interface Schema$EventSubscriptionDestination {
    /**
     * OPTION 1: Hit an endpoint when we receive an event.
     */
    endpoint?: Schema$EndPoint;
    /**
     * OPTION 3: Write the event to Pub/Sub topic.
     */
    pubsub?: Schema$PubSub;
    /**
     * Optional. Service account needed for runtime plane to trigger IP workflow.
     */
    serviceAccount?: string | null;
    /**
     * Optional. type of the destination
     */
    type?: string | null;
  }
  /**
   * EventSubscription Status denotes the status of the EventSubscription resource.
   */
  export interface Schema$EventSubscriptionStatus {
    /**
     * Output only. Description of the state.
     */
    description?: string | null;
    /**
     * Output only. State of Event Subscription resource.
     */
    state?: string | null;
  }
  /**
   * EventType includes fields.
   */
  export interface Schema$EventType {
    /**
     * Output only. Created time.
     */
    createTime?: string | null;
    /**
     * Output only. Schema of the event payload after enriched. Will be null if read before send is not supported.
     */
    enrichedEventPayloadSchema?: string | null;
    /**
     * Output only. Runtime entity type name. Will be null if entity type map is not available. Used for read before send feature.
     */
    entityType?: string | null;
    /**
     * Output only. Schema of webhook event payload.
     */
    eventPayloadSchema?: string | null;
    /**
     * Output only. Event type id. Example: `ticket.created`.
     */
    eventTypeId?: string | null;
    /**
     * Output only. Id path denotes the path of id in webhook payload.
     */
    idPath?: string | null;
    /**
     * Output only. Resource name of the eventtype. Format: projects/{project\}/locations/{location\}/providers/{provider\}/connectors/{connector\}/versions/{version\}/eventtypes/{eventtype\} Only global location is supported for Connector resource.
     */
    name?: string | null;
    /**
     * Output only. Updated time.
     */
    updateTime?: string | null;
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
   * Extraction Rule.
   */
  export interface Schema$ExtractionRule {
    /**
     * Regex used to extract backend details from source. If empty, whole source value will be used.
     */
    extractionRegex?: string | null;
    /**
     * Source on which the rule is applied.
     */
    source?: Schema$Source;
  }
  /**
   * Extraction Rules to identity the backends from customer provided configuration in Connection resource.
   */
  export interface Schema$ExtractionRules {
    /**
     * Collection of Extraction Rule.
     */
    extractionRule?: Schema$ExtractionRule[];
  }
  /**
   * Response message for Connectors.GetAuthSchema.
   */
  export interface Schema$FetchAuthSchemaResponse {
    /**
     * List of AuthSchemas.
     */
    authSchemas?: Schema$AuthSchema[];
    /**
     * JSON schema of the AuthSchemas. This is only populated if the view is JSON_SCHEMA. The schema is in draft-07 format.
     */
    jsonSchema?: Schema$JsonAuthSchema;
  }
  /**
   * Metadata of an entity field.
   */
  export interface Schema$Field {
    /**
     * The following map contains fields that are not explicitly mentioned above,this give connectors the flexibility to add new metadata fields.
     */
    additionalDetails?: {[key: string]: any} | null;
    /**
     * The data type of the Field.
     */
    dataType?: string | null;
    /**
     * The following field specifies the default value of the Field provided by the external system if a value is not provided.
     */
    defaultValue?: any | null;
    /**
     * A brief description of the Field.
     */
    description?: string | null;
    /**
     * Name of the Field.
     */
    field?: string | null;
    /**
     * JsonSchema representation of this entity's schema
     */
    jsonSchema?: Schema$JsonSchema;
    /**
     * The following boolean field specifies if the current Field acts as a primary key or id if the parent is of type entity.
     */
    key?: boolean | null;
    /**
     * Specifies whether a null value is allowed.
     */
    nullable?: boolean | null;
    /**
     * Specifies if the Field is readonly.
     */
    readonly?: boolean | null;
  }
  /**
   * Field that needs to be compared.
   */
  export interface Schema$FieldComparison {
    /**
     * Boolean value
     */
    boolValue?: boolean | null;
    /**
     * Optional. Comparator to use for comparing the field value.
     */
    comparator?: string | null;
    /**
     * Integer value
     */
    intValue?: string | null;
    /**
     * Optional. Key of the field.
     */
    key?: string | null;
    /**
     * String value
     */
    stringValue?: string | null;
  }
  /**
   * Header details for a given header to be added to Endpoint.
   */
  export interface Schema$Header {
    /**
     * Optional. Key of Header.
     */
    key?: string | null;
    /**
     * Optional. Value of Header.
     */
    value?: string | null;
  }
  /**
   * Autoscaling config for connector deployment system metrics.
   */
  export interface Schema$HPAConfig {
    /**
     * Output only. Percent CPU utilization where HPA triggers autoscaling.
     */
    cpuUtilizationThreshold?: string | null;
    /**
     * Output only. Percent Memory utilization where HPA triggers autoscaling.
     */
    memoryUtilizationThreshold?: string | null;
  }
  /**
   * Metadata of an input parameter.
   */
  export interface Schema$InputParameter {
    /**
     * The data type of the Parameter.
     */
    dataType?: string | null;
    /**
     * The following field specifies the default value of the Parameter provided by the external system if a value is not provided.
     */
    defaultValue?: any | null;
    /**
     * A brief description of the Parameter.
     */
    description?: string | null;
    /**
     * JsonSchema representation of this action's parameter
     */
    jsonSchema?: Schema$JsonSchema;
    /**
     * Specifies whether a null value is allowed.
     */
    nullable?: boolean | null;
    /**
     * Name of the Parameter.
     */
    parameter?: string | null;
  }
  /**
   * Instance represents the interface for SLM services to actuate the state of control plane resources. Example Instance in JSON, where consumer-project-number=123456, producer-project-id=cloud-sql: ```json Instance: { "name": "projects/123456/locations/us-east1/instances/prod-instance", "create_time": { "seconds": 1526406431, \}, "labels": { "env": "prod", "foo": "bar" \}, "state": READY, "software_versions": { "software_update": "cloud-sql-09-28-2018", \}, "maintenance_policy_names": { "UpdatePolicy": "projects/123456/locations/us-east1/maintenancePolicies/prod-update-policy", \} "tenant_project_id": "cloud-sql-test-tenant", "producer_metadata": { "cloud-sql-tier": "basic", "cloud-sql-instance-size": "1G", \}, "provisioned_resources": [ { "resource-type": "compute-instance", "resource-url": "https://www.googleapis.com/compute/v1/projects/cloud-sql/zones/us-east1-b/instances/vm-1", \} ], "maintenance_schedules": { "csa_rollout": { "start_time": { "seconds": 1526406431, \}, "end_time": { "seconds": 1535406431, \}, \}, "ncsa_rollout": { "start_time": { "seconds": 1526406431, \}, "end_time": { "seconds": 1535406431, \}, \} \}, "consumer_defined_name": "my-sql-instance1", \} ``` LINT.IfChange
   */
  export interface Schema$Instance {
    /**
     * consumer_defined_name is the name of the instance set by the service consumers. Generally this is different from the `name` field which reperesents the system-assigned id of the instance which the service consumers do not recognize. This is a required field for tenants onboarding to Maintenance Window notifications (go/slm-rollout-maintenance-policies#prerequisites).
     */
    consumerDefinedName?: string | null;
    /**
     * Optional. The consumer_project_number associated with this Apigee instance. This field is added specifically to support Apigee integration with SLM Rollout and UMM. It represents the numerical project ID of the GCP project that consumes this Apigee instance. It is used for SLM rollout notifications and UMM integration, enabling proper mapping to customer projects and log delivery for Apigee instances. This field complements consumer_project_id and may be used for specific Apigee scenarios where the numerical ID is required.
     */
    consumerProjectNumber?: string | null;
    /**
     * Output only. Timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. The instance_type of this instance of format: projects/{project_number\}/locations/{location_id\}/instanceTypes/{instance_type_id\}. Instance Type represents a high-level tier or SKU of the service that this instance belong to. When enabled(eg: Maintenance Rollout), Rollout uses 'instance_type' along with 'software_versions' to determine whether instance needs an update or not.
     */
    instanceType?: string | null;
    /**
     * Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_settings.maintenance_policies is set.
     */
    maintenancePolicyNames?: {[key: string]: string} | null;
    /**
     * The MaintenanceSchedule contains the scheduling information of published maintenance schedule with same key as software_versions.
     */
    maintenanceSchedules?: {[key: string]: Schema$MaintenanceSchedule} | null;
    /**
     * Optional. The MaintenanceSettings associated with instance.
     */
    maintenanceSettings?: Schema$MaintenanceSettings;
    /**
     * Unique name of the resource. It uses the form: `projects/{project_number\}/locations/{location_id\}/instances/{instance_id\}` Note: This name is passed, stored and logged across the rollout system. So use of consumer project_id or any other consumer PII in the name is strongly discouraged for wipeout (go/wipeout) compliance. See go/elysium/project_ids#storage-guidance for more details.
     */
    name?: string | null;
    /**
     * Optional. notification_parameter are information that service producers may like to include that is not relevant to Rollout. This parameter will only be passed to Gamma and Cloud Logging for notification/logging purpose.
     */
    notificationParameters?: {
      [key: string]: Schema$NotificationParameter;
    } | null;
    /**
     * Output only. Custom string attributes used primarily to expose producer-specific information in monitoring dashboards. See go/get-instance-metadata.
     */
    producerMetadata?: {[key: string]: string} | null;
    /**
     * Output only. The list of data plane resources provisioned for this instance, e.g. compute VMs. See go/get-instance-metadata.
     */
    provisionedResources?: Schema$ProvisionedResource[];
    /**
     * Link to the SLM instance template. Only populated when updating SLM instances via SSA's Actuation service adaptor. Service producers with custom control plane (e.g. Cloud SQL) doesn't need to populate this field. Instead they should use software_versions.
     */
    slmInstanceTemplate?: string | null;
    /**
     * Output only. SLO metadata for instance classification in the Standardized dataplane SLO platform. See go/cloud-ssa-standard-slo for feature description.
     */
    sloMetadata?: Schema$SloMetadata;
    /**
     * Software versions that are used to deploy this instance. This can be mutated by rollout services.
     */
    softwareVersions?: {[key: string]: string} | null;
    /**
     * Output only. Current lifecycle state of the resource (e.g. if it's being created or ready to use).
     */
    state?: string | null;
    /**
     * Output only. ID of the associated GCP tenant project. See go/get-instance-metadata.
     */
    tenantProjectId?: string | null;
    /**
     * Output only. Timestamp when the resource was last modified.
     */
    updateTime?: string | null;
  }
  /**
   * JMS message denotes the source of the event
   */
  export interface Schema$JMS {
    /**
     * Optional. Name of the JMS source. i.e. queueName or topicName
     */
    name?: string | null;
    /**
     * Optional. Type of the JMS Source. i.e. Queue or Topic
     */
    type?: string | null;
  }
  /**
   * JsonAuthSchema defines the JSON schema of all authentication types.
   */
  export interface Schema$JsonAuthSchema {
    /**
     * JSON schema of the AuthSchemas.
     */
    $schema?: string | null;
    /**
     * List of AuthObjects.
     */
    oneOf?: Schema$AuthObject[];
  }
  /**
   * JsonSchema representation of schema metadata
   */
  export interface Schema$JsonSchema {
    /**
     * Additional details apart from standard json schema fields, this gives flexibility to store metadata about the schema
     */
    additionalDetails?: {[key: string]: any} | null;
    /**
     * The default value of the field or object described by this schema.
     */
    default?: any | null;
    /**
     * A description of this schema.
     */
    description?: string | null;
    /**
     * Possible values for an enumeration. This works in conjunction with `type` to represent types with a fixed set of legal values
     */
    enum?: any[] | null;
    /**
     * Format of the value as per https://json-schema.org/understanding-json-schema/reference/string.html#format
     */
    format?: string | null;
    /**
     * Schema that applies to array values, applicable only if this is of type `array`.
     */
    items?: Schema$JsonSchema;
    /**
     * JDBC datatype of the field.
     */
    jdbcType?: string | null;
    /**
     * The child schemas, applicable only if this is of type `object`. The key is the name of the property and the value is the json schema that describes that property
     */
    properties?: {[key: string]: Schema$JsonSchema} | null;
    /**
     * Whether this property is required.
     */
    required?: string[] | null;
    /**
     * JSON Schema Validation: A Vocabulary for Structural Validation of JSON
     */
    type?: string[] | null;
  }
  /**
   * JWT claims used for the jwt-bearer authorization grant.
   */
  export interface Schema$JwtClaims {
    /**
     * Optional. Value for the "aud" claim.
     */
    audience?: string | null;
    /**
     * Optional. Value for the "iss" claim.
     */
    issuer?: string | null;
    /**
     * Optional. Value for the "sub" claim.
     */
    subject?: string | null;
  }
  /**
   * Response message for ListActions API
   */
  export interface Schema$ListActionsResponse {
    /**
     * list of actions
     */
    actions?: Schema$RuntimeActionSchema[];
    /**
     * token for next page
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ConnectorsService.ListConnections
   */
  export interface Schema$ListConnectionsResponse {
    /**
     * Connections.
     */
    connections?: Schema$Connection[];
    /**
     * Next page token.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for Connectors.ListConnectors.
   */
  export interface Schema$ListConnectorsResponse {
    /**
     * A list of connectors.
     */
    connectors?: Schema$Connector[];
    /**
     * Next page token.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for Connectors.ListConnectorVersions.
   */
  export interface Schema$ListConnectorVersionsResponse {
    /**
     * A list of connector versions.
     */
    connectorVersions?: Schema$ConnectorVersion[];
    /**
     * Next page token.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for Connectors.ListCustomConnectors.
   */
  export interface Schema$ListCustomConnectorsResponse {
    /**
     * A list of customConnectors.
     */
    customConnectors?: Schema$CustomConnector[];
    /**
     * Next page token.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for Connectors.ListCustomConnectorVersions.
   */
  export interface Schema$ListCustomConnectorVersionsResponse {
    /**
     * A list of connector versions.
     */
    customConnectorVersions?: Schema$CustomConnectorVersion[];
    /**
     * Next page token.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for ConnectorsService.ListEndpointAttachments
   */
  export interface Schema$ListEndpointAttachmentsResponse {
    /**
     * EndpointAttachments.
     */
    endpointAttachments?: Schema$EndpointAttachment[];
    /**
     * Next page token.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for ConnectorsService.ListEndUserAuthentications
   */
  export interface Schema$ListEndUserAuthenticationsResponse {
    /**
     * Subscriptions.
     */
    endUserAuthentications?: Schema$EndUserAuthentication[];
    /**
     * Next page token.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Expected request for ListenEvent API.
   */
  export interface Schema$ListenEventRequest {
    /**
     * Optional. Request payload.
     */
    payload?: {[key: string]: any} | null;
  }
  /**
   * Expected response for ListenEvent API.
   */
  export interface Schema$ListenEventResponse {}
  /**
   * Response message for ListEntityTypes API
   */
  export interface Schema$ListEntityTypesResponse {
    /**
     * list of entity types
     */
    entityTypes?: Schema$RuntimeEntitySchema[];
    /**
     * token for next page
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ConnectorsService.ListEventSubscriptions
   */
  export interface Schema$ListEventSubscriptionsResponse {
    /**
     * Subscriptions.
     */
    eventSubscriptions?: Schema$EventSubscription[];
    /**
     * Next page token.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for Connectors.ListEventTypes.
   */
  export interface Schema$ListEventTypesResponse {
    /**
     * A list of connector versions.
     */
    eventTypes?: Schema$EventType[];
    /**
     * Next page token.
     */
    nextPageToken?: string | null;
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
   * Response message for ConnectorsService.ListManagedZones
   */
  export interface Schema$ListManagedZonesResponse {
    /**
     * ManagedZones.
     */
    managedZones?: Schema$ManagedZone[];
    /**
     * Next page token.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
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
   * Response message for Connectors.ListProviders.
   */
  export interface Schema$ListProvidersResponse {
    /**
     * Next page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of providers.
     */
    providers?: Schema$Provider[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for ConnectorsService.ListRuntimeActionSchemas.
   */
  export interface Schema$ListRuntimeActionSchemasResponse {
    /**
     * Next page token.
     */
    nextPageToken?: string | null;
    /**
     * Runtime action schemas.
     */
    runtimeActionSchemas?: Schema$RuntimeActionSchema[];
  }
  /**
   * Response message for ConnectorsService.ListRuntimeEntitySchemas.
   */
  export interface Schema$ListRuntimeEntitySchemasResponse {
    /**
     * Next page token.
     */
    nextPageToken?: string | null;
    /**
     * Runtime entity schemas.
     */
    runtimeEntitySchemas?: Schema$RuntimeEntitySchema[];
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
   * Determines whether or no a connection is locked. If locked, a reason must be specified.
   */
  export interface Schema$LockConfig {
    /**
     * Optional. Indicates whether or not the connection is locked.
     */
    locked?: boolean | null;
    /**
     * Optional. Describes why a connection is locked.
     */
    reason?: string | null;
  }
  /**
   * Struct for representing boolean expressions.
   */
  export interface Schema$LogicalExpression {
    /**
     * Optional. A list of fields to be compared.
     */
    fieldComparisons?: Schema$FieldComparison[];
    /**
     * Optional. A list of nested conditions to be compared.
     */
    logicalExpressions?: Schema$LogicalExpression[];
    /**
     * Optional. The logical operator to use between the fields and conditions.
     */
    logicalOperator?: string | null;
  }
  /**
   * Defines policies to service maintenance events.
   */
  export interface Schema$MaintenancePolicy {
    /**
     * Output only. The time when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.
     */
    description?: string | null;
    /**
     * Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. MaintenancePolicy name using the form: `projects/{project_id\}/locations/{location_id\}/maintenancePolicies/{maintenance_policy_id\}` where {project_id\} refers to a GCP consumer project ID, {location_id\} refers to a GCP region/zone, {maintenance_policy_id\} must be 1-63 characters long and match the regular expression `[a-z0-9]([-a-z0-9]*[a-z0-9])?`.
     */
    name?: string | null;
    /**
     * Optional. The state of the policy.
     */
    state?: string | null;
    /**
     * Maintenance policy applicable to instance update.
     */
    updatePolicy?: Schema$UpdatePolicy;
    /**
     * Output only. The time when the resource was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Maintenance schedule which is exposed to customer and potentially end user, indicating published upcoming future maintenance schedule
   */
  export interface Schema$MaintenanceSchedule {
    /**
     * This field is deprecated, and will be always set to true since reschedule can happen multiple times now. This field should not be removed until all service producers remove this for their customers.
     */
    canReschedule?: boolean | null;
    /**
     * The scheduled end time for the maintenance.
     */
    endTime?: string | null;
    /**
     * The rollout management policy this maintenance schedule is associated with. When doing reschedule update request, the reschedule should be against this given policy.
     */
    rolloutManagementPolicy?: string | null;
    /**
     * schedule_deadline_time is the time deadline any schedule start time cannot go beyond, including reschedule. It's normally the initial schedule start time plus maintenance window length (1 day or 1 week). Maintenance cannot be scheduled to start beyond this deadline.
     */
    scheduleDeadlineTime?: string | null;
    /**
     * The scheduled start time for the maintenance.
     */
    startTime?: string | null;
  }
  /**
   * Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance.
   */
  export interface Schema$MaintenanceSettings {
    /**
     * Optional. Exclude instance from maintenance. When true, rollout service will not attempt maintenance on the instance. Rollout service will include the instance in reported rollout progress as not attempted.
     */
    exclude?: boolean | null;
    /**
     * Optional. If the update call is triggered from rollback, set the value as true.
     */
    isRollback?: boolean | null;
    /**
     * Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_policy_names is set. If only the name is needed, then only populate MaintenancePolicy.name.
     */
    maintenancePolicies?: {[key: string]: Schema$MaintenancePolicy} | null;
  }
  /**
   * MaintenanceWindow definition.
   */
  export interface Schema$MaintenanceWindow {
    /**
     * Daily cycle.
     */
    dailyCycle?: Schema$DailyCycle;
    /**
     * Weekly cycle.
     */
    weeklyCycle?: Schema$WeeklyCycle;
  }
  /**
   * represents the Connector's Managed Zone resource
   */
  export interface Schema$ManagedZone {
    /**
     * Output only. Created time.
     */
    createTime?: string | null;
    /**
     * Optional. Description of the resource.
     */
    description?: string | null;
    /**
     * Required. DNS Name of the resource
     */
    dns?: string | null;
    /**
     * Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Resource name of the Managed Zone. Format: projects/{project\}/locations/global/managedZones/{managed_zone\}
     */
    name?: string | null;
    /**
     * Required. The name of the Target Project
     */
    targetProject?: string | null;
    /**
     * Required. The name of the Target Project VPC Network
     */
    targetVpc?: string | null;
    /**
     * Output only. Updated time.
     */
    updateTime?: string | null;
  }
  /**
   * Marketplace connector details.
   */
  export interface Schema$MarketplaceConnectorDetails {
    /**
     * Marketplace product name.
     */
    marketplaceProduct?: string | null;
    /**
     * Marketplace product ID.
     */
    marketplaceProductId?: string | null;
    /**
     * Marketplace product URL.
     */
    marketplaceProductUri?: string | null;
    /**
     * The name of the partner.
     */
    partner?: string | null;
  }
  /**
   * MultipleSelectConfig represents the multiple options for a config variable.
   */
  export interface Schema$MultipleSelectConfig {
    /**
     * Optional. Allow custom values.
     */
    allowCustomValues?: boolean | null;
    /**
     * Required. Multiple select options.
     */
    multipleSelectOptions?: Schema$MultipleSelectOption[];
    /**
     * Required. Value separator. Only "," can be used for OAuth auth code flow scope field.
     */
    valueSeparator?: string | null;
  }
  /**
   * MultiplSelecteOption represents the single option for a config variable.
   */
  export interface Schema$MultipleSelectOption {
    /**
     * Optional. Value of the option.
     */
    description?: string | null;
    /**
     * Required. Display name of the option.
     */
    displayName?: string | null;
    /**
     * Required. Key of the option.
     */
    key?: string | null;
    /**
     * Optional. Indicates if the option is preselected.
     */
    preselected?: boolean | null;
  }
  /**
   * Regional Network Config.
   */
  export interface Schema$NetworkConfig {
    /**
     * Output only. Egress IPs
     */
    egressIps?: string[] | null;
    /**
     * Optional. Egress mode for the network.
     */
    egressMode?: string | null;
  }
  /**
   * Node configuration for the connection.
   */
  export interface Schema$NodeConfig {
    /**
     * Optional. Maximum number of nodes in the runtime nodes.
     */
    maxNodeCount?: number | null;
    /**
     * Optional. Minimum number of nodes in the runtime nodes.
     */
    minNodeCount?: number | null;
  }
  /**
   * Node information for custom per-node SLO implementations. SSA does not support per-node SLO, but producers can populate per-node information in SloMetadata for custom precomputations. SSA Eligibility Exporter will emit per-node metric based on this information.
   */
  export interface Schema$NodeSloMetadata {
    /**
     * The location of the node, if different from instance location.
     */
    location?: string | null;
    /**
     * The id of the node. This should be equal to SaasInstanceNode.node_id.
     */
    nodeId?: string | null;
    /**
     * If present, this will override eligibility for the node coming from instance or exclusions for specified SLIs.
     */
    perSliEligibility?: Schema$PerSliSloEligibility;
  }
  /**
   * Contains notification related data.
   */
  export interface Schema$NotificationParameter {
    /**
     * Optional. Array of string values. e.g. instance's replica information.
     */
    values?: string[] | null;
  }
  /**
   * Parameters to support Oauth 2.0 Auth Code Grant Authentication. See https://www.rfc-editor.org/rfc/rfc6749#section-1.3.1 for more details.
   */
  export interface Schema$Oauth2AuthCodeFlow {
    /**
     * Optional. Authorization code to be exchanged for access and refresh tokens.
     */
    authCode?: string | null;
    /**
     * Optional. Auth URL for Authorization Code Flow
     */
    authUri?: string | null;
    /**
     * Optional. Client ID for user-provided OAuth app.
     */
    clientId?: string | null;
    /**
     * Optional. Client secret for user-provided OAuth app.
     */
    clientSecret?: Schema$Secret;
    /**
     * Optional. Whether to enable PKCE when the user performs the auth code flow.
     */
    enablePkce?: boolean | null;
    /**
     * Optional. PKCE verifier to be used during the auth code exchange.
     */
    pkceVerifier?: string | null;
    /**
     * Optional. Redirect URI to be provided during the auth code exchange.
     */
    redirectUri?: string | null;
    /**
     * Optional. Scopes the connection will request when the user performs the auth code flow.
     */
    scopes?: string[] | null;
  }
  /**
   * Parameters to support Oauth 2.0 Auth Code Grant Authentication using Google Provided OAuth Client. See https://tools.ietf.org/html/rfc6749#section-1.3.1 for more details.
   */
  export interface Schema$Oauth2AuthCodeFlowGoogleManaged {
    /**
     * Optional. Authorization code to be exchanged for access and refresh tokens.
     */
    authCode?: string | null;
    /**
     * Optional. Redirect URI to be provided during the auth code exchange.
     */
    redirectUri?: string | null;
    /**
     * Required. Scopes the connection will request when the user performs the auth code flow.
     */
    scopes?: string[] | null;
  }
  /**
   * Parameters to support Oauth 2.0 Client Credentials Grant Authentication. See https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details.
   */
  export interface Schema$Oauth2ClientCredentials {
    /**
     * Optional. The client identifier.
     */
    clientId?: string | null;
    /**
     * Optional. Secret version reference containing the client secret.
     */
    clientSecret?: Schema$Secret;
  }
  /**
   * Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details.
   */
  export interface Schema$Oauth2JwtBearer {
    /**
     * Optional. Secret version reference containing a PKCS#8 PEM-encoded private key associated with the Client Certificate. This private key will be used to sign JWTs used for the jwt-bearer authorization grant. Specified in the form as: `projects/x/secrets/x/versions/x`.
     */
    clientKey?: Schema$Secret;
    /**
     * Optional. JwtClaims providers fields to generate the token.
     */
    jwtClaims?: Schema$JwtClaims;
  }
  /**
   * pass only at create and not update using updateMask Auth Code Data
   */
  export interface Schema$OAuthTokenData {
    /**
     * Optional. Access token for the connection.
     */
    accessToken?: Schema$EUASecret;
    /**
     * Optional. Timestamp when the access token was created.
     */
    createTime?: string | null;
    /**
     * Optional. Time in seconds when the access token expires.
     */
    expiry?: string | null;
    /**
     * Optional. Refresh token for the connection.
     */
    refreshToken?: Schema$EUASecret;
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
   * Partner metadata details. This will be populated when publishing the custom connector as a partner connector version. On publishing, parntner connector version will be created using the fields in PartnerMetadata.
   */
  export interface Schema$PartnerMetadata {
    /**
     * Required. Whether the user has accepted the Google Cloud Platform Terms of Service (https://cloud.google.com/terms/) and the Google Cloud Marketplace Terms of Service (https://cloud.google.com/terms/marketplace/launcher?hl=en).
     */
    acceptGcpTos?: boolean | null;
    /**
     * Optional. Additional comments for the submission.
     */
    additionalComments?: string | null;
    /**
     * Required. Confirmation that connector meets all applicable requirements mentioned in the Partner Connector Publishing requirements list and Partner onboardiong requirements list (https://cloud.google.com/marketplace/docs/partners/get-started#requirements).
     */
    confirmPartnerRequirements?: boolean | null;
    /**
     * Required. Public URL for the demo video.
     */
    demoUri?: string | null;
    /**
     * Output only. Has dynamic open api spec uri.
     */
    hasDynamicSpecUri?: boolean | null;
    /**
     * Required. Integration example templates for the custom connector.
     */
    integrationTemplates?: string | null;
    /**
     * Output only. Local spec path. Required if has_dynamic_spec_uri is true.
     */
    localSpecPath?: string | null;
    /**
     * Optional. Marketplace product name.
     */
    marketplaceProduct?: string | null;
    /**
     * Required. Marketplace product ID.
     */
    marketplaceProductId?: string | null;
    /**
     * Optional. Marketplace product project ID.
     */
    marketplaceProductProjectId?: string | null;
    /**
     * Optional. Marketplace product URL.
     */
    marketplaceProductUri?: string | null;
    /**
     * Required. Partner name.
     */
    partner?: string | null;
    /**
     * Required. Partner connector display name.
     */
    partnerConnectorDisplayName?: string | null;
    /**
     * Output only. Publish request time.
     */
    publishRequestTime?: string | null;
    /**
     * Required. Target application for which partner connector is built.
     */
    targetApplication?: string | null;
    /**
     * Required. Target customer segment for the partner connector.
     */
    targetCustomerSegment?: string | null;
    /**
     * Required. Details about partner connector use cases.
     */
    useCases?: string | null;
  }
  /**
   * PerSliSloEligibility is a mapping from an SLI name to eligibility.
   */
  export interface Schema$PerSliSloEligibility {
    /**
     * An entry in the eligibilities map specifies an eligibility for a particular SLI for the given instance. The SLI key in the name must be a valid SLI name specified in the Eligibility Exporter binary flags otherwise an error will be emitted by Eligibility Exporter and the oncaller will be alerted. If an SLI has been defined in the binary flags but the eligibilities map does not contain it, the corresponding SLI time series will not be emitted by the Eligibility Exporter. This ensures a smooth rollout and compatibility between the data produced by different versions of the Eligibility Exporters. If eligibilities map contains a key for an SLI which has not been declared in the binary flags, there will be an error message emitted in the Eligibility Exporter log and the metric for the SLI in question will not be emitted.
     */
    eligibilities?: {[key: string]: Schema$SloEligibility} | null;
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
   * Provider indicates the owner who provides the connectors.
   */
  export interface Schema$Provider {
    /**
     * Output only. Created time.
     */
    createTime?: string | null;
    /**
     * Output only. Description of the resource.
     */
    description?: string | null;
    /**
     * Output only. Display name.
     */
    displayName?: string | null;
    /**
     * Output only. Link to documentation page.
     */
    documentationUri?: string | null;
    /**
     * Output only. Link to external page.
     */
    externalUri?: string | null;
    /**
     * Output only. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Flag to mark the version indicating the launch stage.
     */
    launchStage?: string | null;
    /**
     * Output only. Resource name of the Provider. Format: projects/{project\}/locations/{location\}/providers/{provider\} Only global location is supported for Provider resource.
     */
    name?: string | null;
    /**
     * Output only. Updated time.
     */
    updateTime?: string | null;
    /**
     * Output only. Cloud storage location of icons etc consumed by UI.
     */
    webAssetsLocation?: string | null;
  }
  /**
   * Describes provisioned dataplane resources.
   */
  export interface Schema$ProvisionedResource {
    /**
     * Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider's VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with 'compute-', for example: 'compute-instance', 'compute-disk', 'compute-autoscaler'.
     */
    resourceType?: string | null;
    /**
     * URL identifying the resource, e.g. "https://www.googleapis.com/compute/v1/projects/...)".
     */
    resourceUrl?: string | null;
  }
  /**
   * Request message for ConnectorsService.PublishCustomConnectorVersion
   */
  export interface Schema$PublishCustomConnectorVersionRequest {
    /**
     * Required. Partner metadata details for validating and publishing the custom connector as a partner connector version.
     */
    partnerMetadata?: Schema$PartnerMetadata;
  }
  /**
   * Publish status of a custom connector.
   */
  export interface Schema$PublishStatus {
    /**
     * Output only. Partner connector name. Will be set on the custom connector. Format: providers/partner/connectors//versions/
     */
    publishedAs?: string | null;
    /**
     * Output only. Custom connector name. Will be set on the partner connector. Format: providers/customconnectors/connectors//versions/
     */
    publishedSource?: string | null;
    /**
     * Output only. Publish state of the custom connector.
     */
    publishState?: string | null;
    /**
     * Output only. Publish time.
     */
    publishTime?: string | null;
  }
  /**
   * Pub/Sub message includes details of the Destination Pub/Sub topic.
   */
  export interface Schema$PubSub {
    /**
     * Optional. Pub/Sub message attributes to be added to the Pub/Sub message.
     */
    attributes?: {[key: string]: string} | null;
    /**
     * Optional. Configuration for configuring the trigger
     */
    configVariables?: Schema$ConfigVariable[];
    /**
     * Required. The project id which has the Pub/Sub topic.
     */
    projectId?: string | null;
    /**
     * Required. The topic id of the Pub/Sub topic.
     */
    topicId?: string | null;
  }
  /**
   * Request message for ConnectorsService.RefreshConnectionSchemaMetadata.
   */
  export interface Schema$RefreshConnectionSchemaMetadataRequest {}
  /**
   * Regional Settings details.
   */
  export interface Schema$RegionalSettings {
    /**
     * Optional. Regional encryption config to hold CMEK details.
     */
    encryptionConfig?: Schema$EncryptionConfig;
    /**
     * Output only. Resource name of the Connection. Format: projects/{project\}/locations/{location\}/regionalSettings
     */
    name?: string | null;
    /**
     * Optional. Regional network config.
     */
    networkConfig?: Schema$NetworkConfig;
    /**
     * Output only. Specifies whether the region is provisioned.
     */
    provisioned?: boolean | null;
  }
  /**
   * Request message for ConnectorsService.RepairEventing
   */
  export interface Schema$RepairEventingRequest {}
  /**
   * Resource definition
   */
  export interface Schema$Resource {
    /**
     * Optional. Template to uniquely represent a Google Cloud resource in a format IAM expects This is a template that can have references to other values provided in the config variable template.
     */
    pathTemplate?: string | null;
    /**
     * Optional. Different types of resource supported.
     */
    type?: string | null;
  }
  /**
   * Resource limits defined for connection pods of a given connector type.
   */
  export interface Schema$ResourceLimits {
    /**
     * Output only. CPU limit.
     */
    cpu?: string | null;
    /**
     * Output only. Memory limit.
     */
    memory?: string | null;
  }
  /**
   * Resource requests defined for connection pods of a given connector type.
   */
  export interface Schema$ResourceRequests {
    /**
     * Output only. CPU request.
     */
    cpu?: string | null;
    /**
     * Output only. Memory request.
     */
    memory?: string | null;
  }
  /**
   * Metadata of result field.
   */
  export interface Schema$ResultMetadata {
    /**
     * The data type of the field.
     */
    dataType?: string | null;
    /**
     * The following field specifies the default value of the Parameter provided by the external system if a value is not provided.
     */
    defaultValue?: any | null;
    /**
     * A brief description of the field.
     */
    description?: string | null;
    /**
     * Name of the result field.
     */
    field?: string | null;
    /**
     * JsonSchema representation of this action's result
     */
    jsonSchema?: Schema$JsonSchema;
    /**
     * Specifies whether a null value is allowed.
     */
    nullable?: boolean | null;
  }
  /**
   * Request message for ConnectorsService.RefreshEventSubscription
   */
  export interface Schema$RetryEventSubscriptionRequest {}
  /**
   * This configuration defines all the Cloud IAM roles that needs to be granted to a particular Google Cloud resource for the selected principal like service account. These configurations will let UI display to customers what IAM roles need to be granted by them. Or these configurations can be used by the UI to render a 'grant' button to do the same on behalf of the user.
   */
  export interface Schema$RoleGrant {
    /**
     * Optional. Template that UI can use to provide helper text to customers.
     */
    helperTextTemplate?: string | null;
    /**
     * Optional. Principal/Identity for whom the role need to assigned.
     */
    principal?: string | null;
    /**
     * Optional. Resource on which the roles needs to be granted for the principal.
     */
    resource?: Schema$Resource;
    /**
     * Optional. List of roles that need to be granted.
     */
    roles?: string[] | null;
  }
  /**
   * Schema of a runtime action.
   */
  export interface Schema$RuntimeActionSchema {
    /**
     * Output only. Name of the action.
     */
    action?: string | null;
    /**
     * Output only. Brief Description of action
     */
    description?: string | null;
    /**
     * Output only. Display Name of action to be shown on client side
     */
    displayName?: string | null;
    /**
     * Output only. JsonSchema representation of this action's input metadata
     */
    inputJsonSchema?: Schema$JsonSchema;
    /**
     * Output only. List of input parameter metadata for the action.
     */
    inputParameters?: Schema$InputParameter[];
    /**
     * Output only. Input schema as string.
     */
    inputSchemaAsString?: string | null;
    /**
     * Output only. JsonSchema representation of this action's result metadata
     */
    resultJsonSchema?: Schema$JsonSchema;
    /**
     * Output only. List of result field metadata.
     */
    resultMetadata?: Schema$ResultMetadata[];
    /**
     * Output only. Result schema as string.
     */
    resultSchemaAsString?: string | null;
  }
  /**
   * RuntimeConfig is the singleton resource of each location. It includes generic resource configs consumed by control plane and runtime plane like: pub/sub topic/subscription resource name, Cloud Storage location storing schema etc.
   */
  export interface Schema$RuntimeConfig {
    /**
     * Output only. Pub/Sub subscription for connd to receive message. E.g. projects/{project-id\}/subscriptions/{topic-id\}
     */
    conndSubscription?: string | null;
    /**
     * Output only. Pub/Sub topic for connd to send message. E.g. projects/{project-id\}/topics/{topic-id\}
     */
    conndTopic?: string | null;
    /**
     * Output only. Pub/Sub subscription for control plane to receive message. E.g. projects/{project-id\}/subscriptions/{topic-id\}
     */
    controlPlaneSubscription?: string | null;
    /**
     * Output only. Pub/Sub topic for control plne to send message. communication. E.g. projects/{project-id\}/topics/{topic-id\}
     */
    controlPlaneTopic?: string | null;
    /**
     * Output only. location_id of the runtime location. E.g. "us-west1".
     */
    locationId?: string | null;
    /**
     * Output only. Name of the runtimeConfig resource. Format: projects/{project\}/locations/{location\}/runtimeConfig
     */
    name?: string | null;
    /**
     * Output only. The endpoint of the connectors runtime ingress.
     */
    runtimeEndpoint?: string | null;
    /**
     * Output only. The Cloud Storage bucket that stores connector's schema reports.
     */
    schemaGcsBucket?: string | null;
    /**
     * Output only. The name of the Service Directory service name.
     */
    serviceDirectory?: string | null;
    /**
     * Output only. The state of the location.
     */
    state?: string | null;
  }
  /**
   * Schema of a runtime entity.
   */
  export interface Schema$RuntimeEntitySchema {
    /**
     * Output only. Name of the entity.
     */
    entity?: string | null;
    /**
     * Output only. List of fields in the entity.
     */
    fields?: Schema$Field[];
    /**
     * Output only. JsonSchema representation of this entity's metadata
     */
    jsonSchema?: Schema$JsonSchema;
    /**
     * List of operations supported by this entity
     */
    operations?: string[] | null;
  }
  /**
   * Configure the schedule.
   */
  export interface Schema$Schedule {
    /**
     * Allows to define schedule that runs specified day of the week.
     */
    day?: string | null;
    /**
     * Output only. Duration of the time window, set by service producer.
     */
    duration?: string | null;
    /**
     * Time within the window to start the operations.
     */
    startTime?: Schema$TimeOfDay;
  }
  /**
   * Config for connection schema refresh
   */
  export interface Schema$SchemaRefreshConfig {
    /**
     * Whether to use displayName for actions in UI.
     */
    useActionDisplayNames?: boolean | null;
    /**
     * Whether to use synchronous schema refresh.
     */
    useSynchronousSchemaRefresh?: boolean | null;
  }
  /**
   * SearchConnectionInstance represents an instance of connector with specific fields
   */
  export interface Schema$SearchConnectionInstance {
    /**
     * Output only. Schema of a runtime action.
     */
    actionSchema?: Schema$RuntimeActionSchema;
    /**
     * Output only. Connection details
     */
    connection?: Schema$Connection;
    /**
     * Output only. Schema of a runtime entity.
     */
    entitySchema?: Schema$RuntimeEntitySchema;
  }
  /**
   * Response message for Connectors.SearchConnections.
   */
  export interface Schema$SearchConnectionsResponse {
    /**
     * A list of connectors.
     */
    connections?: Schema$SearchConnectionInstance[];
    /**
     * Optional. page_token
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Secret provides a reference to entries in Secret Manager.
   */
  export interface Schema$Secret {
    /**
     * Optional. The resource name of the secret version in the format, format as: `projects/x/secrets/x/versions/x`.
     */
    secretVersion?: string | null;
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
   * Global Settings details.
   */
  export interface Schema$Settings {
    /**
     * Output only. Resource name of the Connection. Format: projects/{project\}/locations/global/settings\}
     */
    name?: string | null;
    /**
     * Output only. Flag indicates if user is in PayG model
     */
    payg?: boolean | null;
    /**
     * Output only. Tenant project id of the consumer project.
     */
    tenantProjectId?: string | null;
    /**
     * Optional. Flag indicates whether vpc-sc is enabled.
     */
    vpcsc?: boolean | null;
  }
  /**
   * SloEligibility is a tuple containing eligibility value: true if an instance is eligible for SLO calculation or false if it should be excluded from all SLO-related calculations along with a user-defined reason.
   */
  export interface Schema$SloEligibility {
    /**
     * Whether an instance is eligible or ineligible.
     */
    eligible?: boolean | null;
    /**
     * User-defined reason for the current value of instance eligibility. Usually, this can be directly mapped to the internal state. An empty reason is allowed.
     */
    reason?: string | null;
  }
  /**
   * SloMetadata contains resources required for proper SLO classification of the instance.
   */
  export interface Schema$SloMetadata {
    /**
     * Optional. List of nodes. Some producers need to use per-node metadata to calculate SLO. This field allows such producers to publish per-node SLO meta data, which will be consumed by SSA Eligibility Exporter and published in the form of per node metric to Monarch.
     */
    nodes?: Schema$NodeSloMetadata[];
    /**
     * Optional. Multiple per-instance SLI eligibilities which apply for individual SLIs.
     */
    perSliEligibility?: Schema$PerSliSloEligibility;
    /**
     * Name of the SLO tier the Instance belongs to. This name will be expected to match the tiers specified in the service SLO configuration. Field is mandatory and must not be empty.
     */
    tier?: string | null;
  }
  /**
   * Source to extract the backend from.
   */
  export interface Schema$Source {
    /**
     * Field identifier. For example config variable name.
     */
    fieldId?: string | null;
    /**
     * Type of the source.
     */
    sourceType?: string | null;
  }
  /**
   * Parameters to support Ssh public key Authentication.
   */
  export interface Schema$SshPublicKey {
    /**
     * Optional. Format of SSH Client cert.
     */
    certType?: string | null;
    /**
     * Optional. SSH Client Cert. It should contain both public and private key.
     */
    sshClientCert?: Schema$Secret;
    /**
     * Optional. Password (passphrase) for ssh client certificate if it has one.
     */
    sshClientCertPass?: Schema$Secret;
    /**
     * Optional. The user account used to authenticate.
     */
    username?: string | null;
  }
  /**
   * SSL Configuration of a connection
   */
  export interface Schema$SslConfig {
    /**
     * Optional. Additional SSL related field values
     */
    additionalVariables?: Schema$ConfigVariable[];
    /**
     * Optional. Client Certificate
     */
    clientCertificate?: Schema$Secret;
    /**
     * Optional. Type of Client Cert (PEM/JKS/.. etc.)
     */
    clientCertType?: string | null;
    /**
     * Optional. Client Private Key
     */
    clientPrivateKey?: Schema$Secret;
    /**
     * Optional. Secret containing the passphrase protecting the Client Private Key
     */
    clientPrivateKeyPass?: Schema$Secret;
    /**
     * Optional. Private Server Certificate. Needs to be specified if trust model is `PRIVATE`.
     */
    privateServerCertificate?: Schema$Secret;
    /**
     * Optional. Type of Server Cert (PEM/JKS/.. etc.)
     */
    serverCertType?: string | null;
    /**
     * Optional. Trust Model of the SSL connection
     */
    trustModel?: string | null;
    /**
     * Optional. Controls the ssl type for the given connector version.
     */
    type?: string | null;
    /**
     * Optional. Bool for enabling SSL
     */
    useSsl?: boolean | null;
  }
  /**
   * Ssl config details of a connector version
   */
  export interface Schema$SslConfigTemplate {
    /**
     * Any additional fields that need to be rendered
     */
    additionalVariables?: Schema$ConfigVariableTemplate[];
    /**
     * List of supported Client Cert Types
     */
    clientCertType?: string[] | null;
    /**
     * Boolean for determining if the connector version mandates TLS.
     */
    isTlsMandatory?: boolean | null;
    /**
     * List of supported Server Cert Types
     */
    serverCertType?: string[] | null;
    /**
     * Controls the ssl type for the given connector version
     */
    sslType?: string | null;
  }
  /**
   * Standard action
   */
  export interface Schema$StandardAction {
    /**
     * Name of the standard action.
     */
    name?: string | null;
  }
  /**
   * Standard entity
   */
  export interface Schema$StandardEntity {
    /**
     * Name of the standard entity.
     */
    name?: string | null;
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
   * Supported runtime features of a connector version.
   */
  export interface Schema$SupportedRuntimeFeatures {
    /**
     * Specifies if the connector supports action apis like 'executeAction'.
     */
    actionApis?: boolean | null;
    /**
     * Specifies if the connector supports async long running operations.
     */
    asyncOperations?: boolean | null;
    /**
     * Specifies if the connector supports entity apis like 'createEntity'.
     */
    entityApis?: boolean | null;
    /**
     * Specifies if the connector supports 'ExecuteSqlQuery' operation.
     */
    sqlQuery?: boolean | null;
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
   * * TrafficShapingConfig defines the configuration for shaping API traffic by specifying a quota limit and the duration over which this limit is enforced. This configuration helps to control and manage the rate at which API calls are made on the client side, preventing service overload on the backend. For example: - if the quota limit is 100 calls per 10 seconds, then the message would be: { quota_limit: 100 duration: { seconds: 10 \} \} - if the quota limit is 100 calls per 5 minutes, then the message would be: { quota_limit: 100 duration: { seconds: 300 \} \} - if the quota limit is 10000 calls per day, then the message would be: { quota_limit: 10000 duration: { seconds: 86400 \} and so on.
   */
  export interface Schema$TrafficShapingConfig {
    /**
     * Required. * The duration over which the API call quota limits are calculated. This duration is used to define the time window for evaluating if the number of API calls made by a user is within the allowed quota limits. For example: - To define a quota sampled over 16 seconds, set `seconds` to 16 - To define a quota sampled over 5 minutes, set `seconds` to 300 (5 * 60) - To define a quota sampled over 1 day, set `seconds` to 86400 (24 * 60 * 60) and so on. It is important to note that this duration is not the time the quota is valid for, but rather the time window over which the quota is evaluated. For example, if the quota is 100 calls per 10 seconds, then this duration field would be set to 10 seconds.
     */
    duration?: string | null;
    /**
     * Required. Maximum number of api calls allowed.
     */
    quotaLimit?: string | null;
  }
  /**
   * Maintenance policy applicable to instance updates.
   */
  export interface Schema$UpdatePolicy {
    /**
     * Optional. Relative scheduling channel applied to resource.
     */
    channel?: string | null;
    /**
     * Deny Maintenance Period that is applied to resource to indicate when maintenance is forbidden. The protocol supports zero-to-many such periods, but the current SLM Rollout implementation only supports zero-to-one.
     */
    denyMaintenancePeriods?: Schema$DenyMaintenancePeriod[];
    /**
     * Optional. Maintenance window that is applied to resources covered by this policy.
     */
    window?: Schema$MaintenanceWindow;
  }
  /**
   * Parameters to support Username and Password Authentication.
   */
  export interface Schema$UserPassword {
    /**
     * Optional. Secret version reference containing the password.
     */
    password?: Schema$Secret;
    /**
     * Optional. Username.
     */
    username?: string | null;
  }
  /**
   * Request message for ConnectorsService.ValidateCustomConnectorSpec
   */
  export interface Schema$ValidateCustomConnectorSpecRequest {
    /**
     * Required. Service account to access the spec from Google Cloud Storage.
     */
    serviceAccount?: string | null;
    /**
     * Required. Location of the custom connector spec. The location can be either a public url like `https://public-url.com/spec` Or a Google Cloud Storage location like `gs:///`
     */
    specLocation?: string | null;
    /**
     * Required. Spec type of the custom connector spec.
     */
    specType?: string | null;
  }
  /**
   * Response message for ConnectorsService.ValidateCustomConnectorSpec
   */
  export interface Schema$ValidateCustomConnectorSpecResponse {
    /**
     * Error message. The spec is valid if the error message is empty.
     */
    errorMessage?: string | null;
  }
  /**
   * This configuration provides VPCSC config for a connector.
   */
  export interface Schema$VpcscConfig {
    /**
     * The list of allowlisted FQDNs for VPCSC.
     */
    defaultAllowlistedHost?: string[] | null;
    /**
     * Whether to disable firewall VPCSC flow.
     */
    disableFirewallVpcscFlow?: boolean | null;
  }
  /**
   * WebhookData has details of webhook configuration.
   */
  export interface Schema$WebhookData {
    /**
     * Output only. Additional webhook related field values.
     */
    additionalVariables?: Schema$ConfigVariable[];
    /**
     * Output only. Timestamp when the webhook was created.
     */
    createTime?: string | null;
    /**
     * Output only. ID to uniquely identify webhook.
     */
    id?: string | null;
    /**
     * Output only. Name of the Webhook
     */
    name?: string | null;
    /**
     * Output only. Next webhook refresh time. Will be null if refresh is not supported.
     */
    nextRefreshTime?: string | null;
    /**
     * Output only. Timestamp when the webhook was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * WebhookSubscriptions has details of webhook subscriptions.
   */
  export interface Schema$WebhookSubscriptions {
    /**
     * Output only. Webhook data.
     */
    webhookData?: Schema$WebhookData[];
  }
  /**
   * Time window specified for weekly operations.
   */
  export interface Schema$WeeklyCycle {
    /**
     * User can specify multiple windows in a week. Minimum of 1 window.
     */
    schedule?: Schema$Schedule[];
  }
  /**
   * Request message for ConnectorsService.WithdrawCustomConnectorVersion
   */
  export interface Schema$WithdrawCustomConnectorVersionRequest {}

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
    customConnectors: Resource$Projects$Locations$Customconnectors;
    endpointAttachments: Resource$Projects$Locations$Endpointattachments;
    global: Resource$Projects$Locations$Global;
    operations: Resource$Projects$Locations$Operations;
    providers: Resource$Projects$Locations$Providers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.connections = new Resource$Projects$Locations$Connections(
        this.context
      );
      this.customConnectors = new Resource$Projects$Locations$Customconnectors(
        this.context
      );
      this.endpointAttachments =
        new Resource$Projects$Locations$Endpointattachments(this.context);
      this.global = new Resource$Projects$Locations$Global(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.providers = new Resource$Projects$Locations$Providers(this.context);
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.get({
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

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
     * GetRegionalSettings gets settings of a region. RegionalSettings is a singleton resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.getRegionalSettings({
     *     // Required. The resource name of the Regional Settings.
     *     name: 'projects/my-project/locations/my-location/regionalSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "encryptionConfig": {},
     *   //   "name": "my_name",
     *   //   "networkConfig": {},
     *   //   "provisioned": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getRegionalSettings(
      params: Params$Resource$Projects$Locations$Getregionalsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getRegionalSettings(
      params?: Params$Resource$Projects$Locations$Getregionalsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RegionalSettings>>;
    getRegionalSettings(
      params: Params$Resource$Projects$Locations$Getregionalsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getRegionalSettings(
      params: Params$Resource$Projects$Locations$Getregionalsettings,
      options: MethodOptions | BodyResponseCallback<Schema$RegionalSettings>,
      callback: BodyResponseCallback<Schema$RegionalSettings>
    ): void;
    getRegionalSettings(
      params: Params$Resource$Projects$Locations$Getregionalsettings,
      callback: BodyResponseCallback<Schema$RegionalSettings>
    ): void;
    getRegionalSettings(
      callback: BodyResponseCallback<Schema$RegionalSettings>
    ): void;
    getRegionalSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Getregionalsettings
        | BodyResponseCallback<Schema$RegionalSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RegionalSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RegionalSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RegionalSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Getregionalsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Getregionalsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
        createAPIRequest<Schema$RegionalSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RegionalSettings>(parameters);
      }
    }

    /**
     * Gets the runtimeConfig of a location. RuntimeConfig is a singleton resource for each location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.getRuntimeConfig({
     *     // Required. Resource name of the form: `projects/x/locations/x/runtimeConfig`
     *     name: 'projects/my-project/locations/my-location/runtimeConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "conndSubscription": "my_conndSubscription",
     *   //   "conndTopic": "my_conndTopic",
     *   //   "controlPlaneSubscription": "my_controlPlaneSubscription",
     *   //   "controlPlaneTopic": "my_controlPlaneTopic",
     *   //   "locationId": "my_locationId",
     *   //   "name": "my_name",
     *   //   "runtimeEndpoint": "my_runtimeEndpoint",
     *   //   "schemaGcsBucket": "my_schemaGcsBucket",
     *   //   "serviceDirectory": "my_serviceDirectory",
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
    getRuntimeConfig(
      params: Params$Resource$Projects$Locations$Getruntimeconfig,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getRuntimeConfig(
      params?: Params$Resource$Projects$Locations$Getruntimeconfig,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RuntimeConfig>>;
    getRuntimeConfig(
      params: Params$Resource$Projects$Locations$Getruntimeconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getRuntimeConfig(
      params: Params$Resource$Projects$Locations$Getruntimeconfig,
      options: MethodOptions | BodyResponseCallback<Schema$RuntimeConfig>,
      callback: BodyResponseCallback<Schema$RuntimeConfig>
    ): void;
    getRuntimeConfig(
      params: Params$Resource$Projects$Locations$Getruntimeconfig,
      callback: BodyResponseCallback<Schema$RuntimeConfig>
    ): void;
    getRuntimeConfig(
      callback: BodyResponseCallback<Schema$RuntimeConfig>
    ): void;
    getRuntimeConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Getruntimeconfig
        | BodyResponseCallback<Schema$RuntimeConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RuntimeConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RuntimeConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RuntimeConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Getruntimeconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Getruntimeconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
        createAPIRequest<Schema$RuntimeConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RuntimeConfig>(parameters);
      }
    }

    /**
     * Lists information about the supported locations for this service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.list({
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

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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

    /**
     * Update the settings of a region.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.updateRegionalSettings({
     *     // Output only. Resource name of the Connection. Format: projects/{project\}/locations/{location\}/regionalSettings
     *     name: 'projects/my-project/locations/my-location/regionalSettings',
     *     // Required. The list of fields to update.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "encryptionConfig": {},
     *       //   "name": "my_name",
     *       //   "networkConfig": {},
     *       //   "provisioned": false
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
    updateRegionalSettings(
      params: Params$Resource$Projects$Locations$Updateregionalsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateRegionalSettings(
      params?: Params$Resource$Projects$Locations$Updateregionalsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    updateRegionalSettings(
      params: Params$Resource$Projects$Locations$Updateregionalsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateRegionalSettings(
      params: Params$Resource$Projects$Locations$Updateregionalsettings,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateRegionalSettings(
      params: Params$Resource$Projects$Locations$Updateregionalsettings,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateRegionalSettings(
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateRegionalSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Updateregionalsettings
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
        {}) as Params$Resource$Projects$Locations$Updateregionalsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Updateregionalsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Getregionalsettings
    extends StandardParameters {
    /**
     * Required. The resource name of the Regional Settings.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Getruntimeconfig
    extends StandardParameters {
    /**
     * Required. Resource name of the form: `projects/x/locations/x/runtimeConfig`
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
  export interface Params$Resource$Projects$Locations$Updateregionalsettings
    extends StandardParameters {
    /**
     * Output only. Resource name of the Connection. Format: projects/{project\}/locations/{location\}/regionalSettings
     */
    name?: string;
    /**
     * Required. The list of fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RegionalSettings;
  }

  export class Resource$Projects$Locations$Connections {
    context: APIRequestContext;
    connectionSchemaMetadata: Resource$Projects$Locations$Connections$Connectionschemametadata;
    endUserAuthentications: Resource$Projects$Locations$Connections$Enduserauthentications;
    eventSubscriptions: Resource$Projects$Locations$Connections$Eventsubscriptions;
    runtimeActionSchemas: Resource$Projects$Locations$Connections$Runtimeactionschemas;
    runtimeEntitySchemas: Resource$Projects$Locations$Connections$Runtimeentityschemas;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.connectionSchemaMetadata =
        new Resource$Projects$Locations$Connections$Connectionschemametadata(
          this.context
        );
      this.endUserAuthentications =
        new Resource$Projects$Locations$Connections$Enduserauthentications(
          this.context
        );
      this.eventSubscriptions =
        new Resource$Projects$Locations$Connections$Eventsubscriptions(
          this.context
        );
      this.runtimeActionSchemas =
        new Resource$Projects$Locations$Connections$Runtimeactionschemas(
          this.context
        );
      this.runtimeEntitySchemas =
        new Resource$Projects$Locations$Connections$Runtimeentityschemas(
          this.context
        );
    }

    /**
     * Creates a new Connection in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.connections.create({
     *     // Required. Identifier to assign to the Connection. Must be unique within scope of the parent resource.
     *     connectionId: 'placeholder-value',
     *     // Required. Parent resource of the Connection, of the form: `projects/x/locations/x`
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "asyncOperationsEnabled": false,
     *       //   "authConfig": {},
     *       //   "authOverrideEnabled": false,
     *       //   "billingConfig": {},
     *       //   "configVariables": [],
     *       //   "connectionRevision": "my_connectionRevision",
     *       //   "connectorVersion": "my_connectorVersion",
     *       //   "connectorVersionInfraConfig": {},
     *       //   "connectorVersionLaunchStage": "my_connectorVersionLaunchStage",
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "destinationConfigs": [],
     *       //   "envoyImageLocation": "my_envoyImageLocation",
     *       //   "euaOauthAuthConfig": {},
     *       //   "eventingConfig": {},
     *       //   "eventingEnablementType": "my_eventingEnablementType",
     *       //   "eventingRuntimeData": {},
     *       //   "fallbackOnAdminCredentials": false,
     *       //   "host": "my_host",
     *       //   "imageLocation": "my_imageLocation",
     *       //   "isTrustedTester": false,
     *       //   "labels": {},
     *       //   "lockConfig": {},
     *       //   "logConfig": {},
     *       //   "name": "my_name",
     *       //   "nodeConfig": {},
     *       //   "serviceAccount": "my_serviceAccount",
     *       //   "serviceDirectory": "my_serviceDirectory",
     *       //   "sslConfig": {},
     *       //   "status": {},
     *       //   "subscriptionType": "my_subscriptionType",
     *       //   "suspended": false,
     *       //   "tlsServiceDirectory": "my_tlsServiceDirectory",
     *       //   "trafficShapingConfigs": [],
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

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/connections').replace(
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
     * Deletes a single Connection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.connections.delete({
     *     // Optional. If set to true, any child EndUserAuthentication/EventSubscription resources will also be deleted. Otherwise, the request will fail if the connection has any children. Followed the best practice from https://aip.dev/135#cascading-delete
     *     force: 'placeholder-value',
     *     // Required. Resource name of the form: `projects/x/locations/x/connections/x`
     *     name: 'projects/my-project/locations/my-location/connections/my-connection',
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

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
     * Gets details of a single Connection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.connections.get({
     *     // Required. Resource name of the form: `projects/x/locations/x/connections/x`
     *     name: 'projects/my-project/locations/my-location/connections/my-connection',
     *     // Specifies which fields of the Connection are returned in the response. Defaults to `BASIC` view.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "asyncOperationsEnabled": false,
     *   //   "authConfig": {},
     *   //   "authOverrideEnabled": false,
     *   //   "billingConfig": {},
     *   //   "configVariables": [],
     *   //   "connectionRevision": "my_connectionRevision",
     *   //   "connectorVersion": "my_connectorVersion",
     *   //   "connectorVersionInfraConfig": {},
     *   //   "connectorVersionLaunchStage": "my_connectorVersionLaunchStage",
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "destinationConfigs": [],
     *   //   "envoyImageLocation": "my_envoyImageLocation",
     *   //   "euaOauthAuthConfig": {},
     *   //   "eventingConfig": {},
     *   //   "eventingEnablementType": "my_eventingEnablementType",
     *   //   "eventingRuntimeData": {},
     *   //   "fallbackOnAdminCredentials": false,
     *   //   "host": "my_host",
     *   //   "imageLocation": "my_imageLocation",
     *   //   "isTrustedTester": false,
     *   //   "labels": {},
     *   //   "lockConfig": {},
     *   //   "logConfig": {},
     *   //   "name": "my_name",
     *   //   "nodeConfig": {},
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceDirectory": "my_serviceDirectory",
     *   //   "sslConfig": {},
     *   //   "status": {},
     *   //   "subscriptionType": "my_subscriptionType",
     *   //   "suspended": false,
     *   //   "tlsServiceDirectory": "my_tlsServiceDirectory",
     *   //   "trafficShapingConfigs": [],
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

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
        createAPIRequest<Schema$Connection>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Connection>(parameters);
      }
    }

    /**
     * Gets schema metadata of a connection. SchemaMetadata is a singleton resource for each connection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.connections.getConnectionSchemaMetadata(
     *       {
     *         // Required. Connection name Format: projects/{project\}/locations/{location\}/connections/{connection\}/connectionSchemaMetadata
     *         name: 'projects/my-project/locations/my-location/connections/my-connection/connectionSchemaMetadata',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "actions": [],
     *   //   "entities": [],
     *   //   "errorMessage": "my_errorMessage",
     *   //   "name": "my_name",
     *   //   "refreshTime": "my_refreshTime",
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
    getConnectionSchemaMetadata(
      params: Params$Resource$Projects$Locations$Connections$Getconnectionschemametadata,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getConnectionSchemaMetadata(
      params?: Params$Resource$Projects$Locations$Connections$Getconnectionschemametadata,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ConnectionSchemaMetadata>>;
    getConnectionSchemaMetadata(
      params: Params$Resource$Projects$Locations$Connections$Getconnectionschemametadata,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getConnectionSchemaMetadata(
      params: Params$Resource$Projects$Locations$Connections$Getconnectionschemametadata,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ConnectionSchemaMetadata>,
      callback: BodyResponseCallback<Schema$ConnectionSchemaMetadata>
    ): void;
    getConnectionSchemaMetadata(
      params: Params$Resource$Projects$Locations$Connections$Getconnectionschemametadata,
      callback: BodyResponseCallback<Schema$ConnectionSchemaMetadata>
    ): void;
    getConnectionSchemaMetadata(
      callback: BodyResponseCallback<Schema$ConnectionSchemaMetadata>
    ): void;
    getConnectionSchemaMetadata(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Getconnectionschemametadata
        | BodyResponseCallback<Schema$ConnectionSchemaMetadata>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ConnectionSchemaMetadata>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ConnectionSchemaMetadata>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ConnectionSchemaMetadata>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Getconnectionschemametadata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Getconnectionschemametadata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
        createAPIRequest<Schema$ConnectionSchemaMetadata>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ConnectionSchemaMetadata>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.connections.getIamPolicy({
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

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
     * Lists Connections in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.connections.list({
     *     // Filter.
     *     filter: 'placeholder-value',
     *     // Order by parameters.
     *     orderBy: 'placeholder-value',
     *     // Page size.
     *     pageSize: 'placeholder-value',
     *     // Page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent resource of the Connection, of the form: `projects/x/locations/x`
     *     parent: 'projects/my-project/locations/my-location',
     *     // Specifies which fields of the Connection are returned in the response. Defaults to `BASIC` view.
     *     view: 'placeholder-value',
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

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/connections').replace(
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
     * ListenEvent listens to the event.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.connections.listenEvent({
     *     // Required. Resource path for request.
     *     resourcePath:
     *       'projects/my-project/locations/my-location/connections/my-connection',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "payload": {}
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
    listenEvent(
      params: Params$Resource$Projects$Locations$Connections$Listenevent,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    listenEvent(
      params?: Params$Resource$Projects$Locations$Connections$Listenevent,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListenEventResponse>>;
    listenEvent(
      params: Params$Resource$Projects$Locations$Connections$Listenevent,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listenEvent(
      params: Params$Resource$Projects$Locations$Connections$Listenevent,
      options: MethodOptions | BodyResponseCallback<Schema$ListenEventResponse>,
      callback: BodyResponseCallback<Schema$ListenEventResponse>
    ): void;
    listenEvent(
      params: Params$Resource$Projects$Locations$Connections$Listenevent,
      callback: BodyResponseCallback<Schema$ListenEventResponse>
    ): void;
    listenEvent(
      callback: BodyResponseCallback<Schema$ListenEventResponse>
    ): void;
    listenEvent(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Listenevent
        | BodyResponseCallback<Schema$ListenEventResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListenEventResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListenEventResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListenEventResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Listenevent;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Listenevent;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resourcePath}:listenEvent').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['resourcePath'],
        pathParams: ['resourcePath'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListenEventResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListenEventResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single Connection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.connections.patch({
     *     // Output only. Resource name of the Connection. Format: projects/{project\}/locations/{location\}/connections/{connection\}
     *     name: 'projects/my-project/locations/my-location/connections/my-connection',
     *     // Required. The list of fields to update. Fields are specified relative to the connection. A field will be overwritten if it is in the mask. The field mask must not be empty, and it must not contain fields that are immutable or only set by the server. You can modify only the fields listed below. To lock/unlock a connection: * `lock_config` To suspend/resume a connection: * `suspended` To update the connection details: * `description` * `labels` * `connector_version` * `config_variables` * `auth_config` * `destination_configs` * `node_config` * `log_config` * `ssl_config` * `eventing_enablement_type` * `eventing_config` * `auth_override_enabled` * `async_operations_enabled`
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "asyncOperationsEnabled": false,
     *       //   "authConfig": {},
     *       //   "authOverrideEnabled": false,
     *       //   "billingConfig": {},
     *       //   "configVariables": [],
     *       //   "connectionRevision": "my_connectionRevision",
     *       //   "connectorVersion": "my_connectorVersion",
     *       //   "connectorVersionInfraConfig": {},
     *       //   "connectorVersionLaunchStage": "my_connectorVersionLaunchStage",
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "destinationConfigs": [],
     *       //   "envoyImageLocation": "my_envoyImageLocation",
     *       //   "euaOauthAuthConfig": {},
     *       //   "eventingConfig": {},
     *       //   "eventingEnablementType": "my_eventingEnablementType",
     *       //   "eventingRuntimeData": {},
     *       //   "fallbackOnAdminCredentials": false,
     *       //   "host": "my_host",
     *       //   "imageLocation": "my_imageLocation",
     *       //   "isTrustedTester": false,
     *       //   "labels": {},
     *       //   "lockConfig": {},
     *       //   "logConfig": {},
     *       //   "name": "my_name",
     *       //   "nodeConfig": {},
     *       //   "serviceAccount": "my_serviceAccount",
     *       //   "serviceDirectory": "my_serviceDirectory",
     *       //   "sslConfig": {},
     *       //   "status": {},
     *       //   "subscriptionType": "my_subscriptionType",
     *       //   "suspended": false,
     *       //   "tlsServiceDirectory": "my_tlsServiceDirectory",
     *       //   "trafficShapingConfigs": [],
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

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
     * RepaiEventing tries to repair eventing related event subscriptions.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.connections.repairEventing({
     *     // Required. Resource name of the form: `projects/x/locations/x/connections/x`
     *     name: 'projects/my-project/locations/my-location/connections/my-connection',
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
    repairEventing(
      params: Params$Resource$Projects$Locations$Connections$Repaireventing,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    repairEventing(
      params?: Params$Resource$Projects$Locations$Connections$Repaireventing,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    repairEventing(
      params: Params$Resource$Projects$Locations$Connections$Repaireventing,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    repairEventing(
      params: Params$Resource$Projects$Locations$Connections$Repaireventing,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    repairEventing(
      params: Params$Resource$Projects$Locations$Connections$Repaireventing,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    repairEventing(callback: BodyResponseCallback<Schema$Operation>): void;
    repairEventing(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Repaireventing
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
        {}) as Params$Resource$Projects$Locations$Connections$Repaireventing;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Repaireventing;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:repairEventing').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Returns Top matching Connections for a given query.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.connections.search({
     *     // Required. Parent resource of the Connection, of the form: `projects/x/locations/x/connections`
     *     name: 'projects/my-project/locations/my-location/connections',
     *     // Optional. The number of top matching connectors to return
     *     pageSize: 'placeholder-value',
     *     // Optional. page_token
     *     pageToken: 'placeholder-value',
     *     // Required. The query against which the search needs to be done.
     *     query: 'placeholder-value',
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
    search(
      params: Params$Resource$Projects$Locations$Connections$Search,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    search(
      params?: Params$Resource$Projects$Locations$Connections$Search,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SearchConnectionsResponse>>;
    search(
      params: Params$Resource$Projects$Locations$Connections$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Projects$Locations$Connections$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchConnectionsResponse>,
      callback: BodyResponseCallback<Schema$SearchConnectionsResponse>
    ): void;
    search(
      params: Params$Resource$Projects$Locations$Connections$Search,
      callback: BodyResponseCallback<Schema$SearchConnectionsResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$SearchConnectionsResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Search
        | BodyResponseCallback<Schema$SearchConnectionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchConnectionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchConnectionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SearchConnectionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Connections$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:search').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SearchConnectionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchConnectionsResponse>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.connections.setIamPolicy({
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

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.connections.testIamPermissions({
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

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Connections$Create
    extends StandardParameters {
    /**
     * Required. Identifier to assign to the Connection. Must be unique within scope of the parent resource.
     */
    connectionId?: string;
    /**
     * Required. Parent resource of the Connection, of the form: `projects/x/locations/x`
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
     * Optional. If set to true, any child EndUserAuthentication/EventSubscription resources will also be deleted. Otherwise, the request will fail if the connection has any children. Followed the best practice from https://aip.dev/135#cascading-delete
     */
    force?: boolean;
    /**
     * Required. Resource name of the form: `projects/x/locations/x/connections/x`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the form: `projects/x/locations/x/connections/x`
     */
    name?: string;
    /**
     * Specifies which fields of the Connection are returned in the response. Defaults to `BASIC` view.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Getconnectionschemametadata
    extends StandardParameters {
    /**
     * Required. Connection name Format: projects/{project\}/locations/{location\}/connections/{connection\}/connectionSchemaMetadata
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
     * Filter.
     */
    filter?: string;
    /**
     * Order by parameters.
     */
    orderBy?: string;
    /**
     * Page size.
     */
    pageSize?: number;
    /**
     * Page token.
     */
    pageToken?: string;
    /**
     * Required. Parent resource of the Connection, of the form: `projects/x/locations/x`
     */
    parent?: string;
    /**
     * Specifies which fields of the Connection are returned in the response. Defaults to `BASIC` view.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Listenevent
    extends StandardParameters {
    /**
     * Required. Resource path for request.
     */
    resourcePath?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ListenEventRequest;
  }
  export interface Params$Resource$Projects$Locations$Connections$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name of the Connection. Format: projects/{project\}/locations/{location\}/connections/{connection\}
     */
    name?: string;
    /**
     * Required. The list of fields to update. Fields are specified relative to the connection. A field will be overwritten if it is in the mask. The field mask must not be empty, and it must not contain fields that are immutable or only set by the server. You can modify only the fields listed below. To lock/unlock a connection: * `lock_config` To suspend/resume a connection: * `suspended` To update the connection details: * `description` * `labels` * `connector_version` * `config_variables` * `auth_config` * `destination_configs` * `node_config` * `log_config` * `ssl_config` * `eventing_enablement_type` * `eventing_config` * `auth_override_enabled` * `async_operations_enabled`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Connection;
  }
  export interface Params$Resource$Projects$Locations$Connections$Repaireventing
    extends StandardParameters {
    /**
     * Required. Resource name of the form: `projects/x/locations/x/connections/x`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RepairEventingRequest;
  }
  export interface Params$Resource$Projects$Locations$Connections$Search
    extends StandardParameters {
    /**
     * Required. Parent resource of the Connection, of the form: `projects/x/locations/x/connections`
     */
    name?: string;
    /**
     * Optional. The number of top matching connectors to return
     */
    pageSize?: number;
    /**
     * Optional. page_token
     */
    pageToken?: string;
    /**
     * Required. The query against which the search needs to be done.
     */
    query?: string;
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

  export class Resource$Projects$Locations$Connections$Connectionschemametadata {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get action.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.connections.connectionSchemaMetadata.getAction(
     *       {
     *         // Required. Id of the action.
     *         actionId: 'placeholder-value',
     *         // Required. Resource name format: projects/{project\}/locations/{location\}/connections/{connection\}/connectionSchemaMetadata
     *         name: 'projects/my-project/locations/my-location/connections/my-connection/connectionSchemaMetadata',
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
    getAction(
      params: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Getaction,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getAction(
      params?: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Getaction,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    getAction(
      params: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Getaction,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getAction(
      params: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Getaction,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    getAction(
      params: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Getaction,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    getAction(callback: BodyResponseCallback<Schema$Operation>): void;
    getAction(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Getaction
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
        {}) as Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Getaction;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Getaction;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:getAction').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Get entity type.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.connections.connectionSchemaMetadata.getEntityType(
     *       {
     *         // Required. Id of the entity type.
     *         entityId: 'placeholder-value',
     *         // Required. Resource name format: projects/{project\}/locations/{location\}/connections/{connection\}/connectionSchemaMetadata
     *         name: 'projects/my-project/locations/my-location/connections/my-connection/connectionSchemaMetadata',
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
    getEntityType(
      params: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Getentitytype,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getEntityType(
      params?: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Getentitytype,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    getEntityType(
      params: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Getentitytype,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getEntityType(
      params: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Getentitytype,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    getEntityType(
      params: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Getentitytype,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    getEntityType(callback: BodyResponseCallback<Schema$Operation>): void;
    getEntityType(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Getentitytype
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
        {}) as Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Getentitytype;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Getentitytype;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:getEntityType').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * List actions.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.connections.connectionSchemaMetadata.listActions(
     *       {
     *         // Required. Filter Wildcards are not supported in the filter currently.
     *         filter: 'placeholder-value',
     *         // Required. Resource name format. projects/{project\}/locations/{location\}/connections/{connection\}/connectionSchemaMetadata
     *         name: 'projects/my-project/locations/my-location/connections/my-connection/connectionSchemaMetadata',
     *         // Page size. If unspecified, at most 50 actions will be returned.
     *         pageSize: 'placeholder-value',
     *         // Page token.
     *         pageToken: 'placeholder-value',
     *         // Specifies which fields are returned in response. Defaults to BASIC view.
     *         view: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "actions": [],
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
    listActions(
      params: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Listactions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    listActions(
      params?: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Listactions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListActionsResponse>>;
    listActions(
      params: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Listactions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listActions(
      params: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Listactions,
      options: MethodOptions | BodyResponseCallback<Schema$ListActionsResponse>,
      callback: BodyResponseCallback<Schema$ListActionsResponse>
    ): void;
    listActions(
      params: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Listactions,
      callback: BodyResponseCallback<Schema$ListActionsResponse>
    ): void;
    listActions(
      callback: BodyResponseCallback<Schema$ListActionsResponse>
    ): void;
    listActions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Listactions
        | BodyResponseCallback<Schema$ListActionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListActionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListActionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListActionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Listactions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Listactions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:listActions').replace(
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
        createAPIRequest<Schema$ListActionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListActionsResponse>(parameters);
      }
    }

    /**
     * List entity types.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.connections.connectionSchemaMetadata.listEntityTypes(
     *       {
     *         // Required. Filter Wildcards are not supported in the filter currently.
     *         filter: 'placeholder-value',
     *         // Required. Resource name format: projects/{project\}/locations/{location\}/connections/{connection\}/connectionSchemaMetadata
     *         name: 'projects/my-project/locations/my-location/connections/my-connection/connectionSchemaMetadata',
     *         // Page size. If unspecified, at most 50 entity types will be returned.
     *         pageSize: 'placeholder-value',
     *         // Page token.
     *         pageToken: 'placeholder-value',
     *         // Specifies which fields are returned in response. Defaults to BASIC view.
     *         view: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entityTypes": [],
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
    listEntityTypes(
      params: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Listentitytypes,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    listEntityTypes(
      params?: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Listentitytypes,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListEntityTypesResponse>>;
    listEntityTypes(
      params: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Listentitytypes,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listEntityTypes(
      params: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Listentitytypes,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEntityTypesResponse>,
      callback: BodyResponseCallback<Schema$ListEntityTypesResponse>
    ): void;
    listEntityTypes(
      params: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Listentitytypes,
      callback: BodyResponseCallback<Schema$ListEntityTypesResponse>
    ): void;
    listEntityTypes(
      callback: BodyResponseCallback<Schema$ListEntityTypesResponse>
    ): void;
    listEntityTypes(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Listentitytypes
        | BodyResponseCallback<Schema$ListEntityTypesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEntityTypesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEntityTypesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListEntityTypesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Listentitytypes;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Listentitytypes;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:listEntityTypes').replace(
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
        createAPIRequest<Schema$ListEntityTypesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEntityTypesResponse>(parameters);
      }
    }

    /**
     * Refresh runtime schema of a connection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.connections.connectionSchemaMetadata.refresh(
     *       {
     *         // Required. Resource name. Format: projects/{project\}/locations/{location\}/connections/{connection\}/connectionSchemaMetadata
     *         name: 'projects/my-project/locations/my-location/connections/my-connection/connectionSchemaMetadata',
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
    refresh(
      params: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Refresh,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    refresh(
      params?: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Refresh,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    refresh(
      params: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Refresh,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    refresh(
      params: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Refresh,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    refresh(
      params: Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Refresh,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    refresh(callback: BodyResponseCallback<Schema$Operation>): void;
    refresh(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Refresh
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
        {}) as Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Refresh;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Refresh;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:refresh').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Getaction
    extends StandardParameters {
    /**
     * Required. Id of the action.
     */
    actionId?: string;
    /**
     * Required. Resource name format: projects/{project\}/locations/{location\}/connections/{connection\}/connectionSchemaMetadata
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Getentitytype
    extends StandardParameters {
    /**
     * Required. Id of the entity type.
     */
    entityId?: string;
    /**
     * Required. Resource name format: projects/{project\}/locations/{location\}/connections/{connection\}/connectionSchemaMetadata
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Listactions
    extends StandardParameters {
    /**
     * Required. Filter Wildcards are not supported in the filter currently.
     */
    filter?: string;
    /**
     * Required. Resource name format. projects/{project\}/locations/{location\}/connections/{connection\}/connectionSchemaMetadata
     */
    name?: string;
    /**
     * Page size. If unspecified, at most 50 actions will be returned.
     */
    pageSize?: number;
    /**
     * Page token.
     */
    pageToken?: string;
    /**
     * Specifies which fields are returned in response. Defaults to BASIC view.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Listentitytypes
    extends StandardParameters {
    /**
     * Required. Filter Wildcards are not supported in the filter currently.
     */
    filter?: string;
    /**
     * Required. Resource name format: projects/{project\}/locations/{location\}/connections/{connection\}/connectionSchemaMetadata
     */
    name?: string;
    /**
     * Page size. If unspecified, at most 50 entity types will be returned.
     */
    pageSize?: number;
    /**
     * Page token.
     */
    pageToken?: string;
    /**
     * Specifies which fields are returned in response. Defaults to BASIC view.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Connectionschemametadata$Refresh
    extends StandardParameters {
    /**
     * Required. Resource name. Format: projects/{project\}/locations/{location\}/connections/{connection\}/connectionSchemaMetadata
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RefreshConnectionSchemaMetadataRequest;
  }

  export class Resource$Projects$Locations$Connections$Enduserauthentications {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new EndUserAuthentication in a given project,location and connection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.connections.endUserAuthentications.create(
     *       {
     *         // Required. Identifier to assign to the EndUserAuthentication. Must be unique within scope of the parent resource.
     *         endUserAuthenticationId: 'placeholder-value',
     *         // Required. Parent resource of the EndUserAuthentication, of the form: `projects/x/locations/x/connections/x`
     *         parent:
     *           'projects/my-project/locations/my-location/connections/my-connection',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "configVariables": [],
     *           //   "createTime": "my_createTime",
     *           //   "destinationConfigs": [],
     *           //   "endUserAuthenticationConfig": {},
     *           //   "labels": [],
     *           //   "name": "my_name",
     *           //   "notifyEndpointDestination": {},
     *           //   "roles": [],
     *           //   "status": {},
     *           //   "updateTime": "my_updateTime",
     *           //   "userId": "my_userId"
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
      params: Params$Resource$Projects$Locations$Connections$Enduserauthentications$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Connections$Enduserauthentications$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Connections$Enduserauthentications$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connections$Enduserauthentications$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connections$Enduserauthentications$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Enduserauthentications$Create
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
        {}) as Params$Resource$Projects$Locations$Connections$Enduserauthentications$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Enduserauthentications$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/endUserAuthentications').replace(
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
     * Deletes a single EndUserAuthentication.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.connections.endUserAuthentications.delete(
     *       {
     *         // Required. Resource name of the form: `projects/x/locations/x/connections/x/endUserAuthentication/x`
     *         name: 'projects/my-project/locations/my-location/connections/my-connection/endUserAuthentications/my-endUserAuthentication',
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
      params: Params$Resource$Projects$Locations$Connections$Enduserauthentications$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Connections$Enduserauthentications$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Enduserauthentications$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Enduserauthentications$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Enduserauthentications$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Enduserauthentications$Delete
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
        {}) as Params$Resource$Projects$Locations$Connections$Enduserauthentications$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Enduserauthentications$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
     * Gets details of a single EndUserAuthentication.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.connections.endUserAuthentications.get({
     *       // Required. Resource name of the form: `projects/x/locations/x/connections/x/EndUserAuthentications/x`
     *       name: 'projects/my-project/locations/my-location/connections/my-connection/endUserAuthentications/my-endUserAuthentication',
     *       // Optional. View of the EndUserAuthentication to return.
     *       view: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "configVariables": [],
     *   //   "createTime": "my_createTime",
     *   //   "destinationConfigs": [],
     *   //   "endUserAuthenticationConfig": {},
     *   //   "labels": [],
     *   //   "name": "my_name",
     *   //   "notifyEndpointDestination": {},
     *   //   "roles": [],
     *   //   "status": {},
     *   //   "updateTime": "my_updateTime",
     *   //   "userId": "my_userId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Connections$Enduserauthentications$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Connections$Enduserauthentications$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EndUserAuthentication>>;
    get(
      params: Params$Resource$Projects$Locations$Connections$Enduserauthentications$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Enduserauthentications$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EndUserAuthentication>,
      callback: BodyResponseCallback<Schema$EndUserAuthentication>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Enduserauthentications$Get,
      callback: BodyResponseCallback<Schema$EndUserAuthentication>
    ): void;
    get(callback: BodyResponseCallback<Schema$EndUserAuthentication>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Enduserauthentications$Get
        | BodyResponseCallback<Schema$EndUserAuthentication>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EndUserAuthentication>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EndUserAuthentication>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EndUserAuthentication>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Enduserauthentications$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Enduserauthentications$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
        createAPIRequest<Schema$EndUserAuthentication>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EndUserAuthentication>(parameters);
      }
    }

    /**
     * List EndUserAuthentications in a given project,location and connection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.connections.endUserAuthentications.list(
     *       {
     *         // Filter.
     *         filter: 'placeholder-value',
     *         // Order by parameters.
     *         orderBy: 'placeholder-value',
     *         // Page size.
     *         pageSize: 'placeholder-value',
     *         // Page token.
     *         pageToken: 'placeholder-value',
     *         // Required. Parent resource of the EndUserAuthentication, of the form: `projects/x/locations/x/connections/x`
     *         parent:
     *           'projects/my-project/locations/my-location/connections/my-connection',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "endUserAuthentications": [],
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
      params: Params$Resource$Projects$Locations$Connections$Enduserauthentications$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Connections$Enduserauthentications$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListEndUserAuthenticationsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Connections$Enduserauthentications$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Enduserauthentications$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEndUserAuthenticationsResponse>,
      callback: BodyResponseCallback<Schema$ListEndUserAuthenticationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Enduserauthentications$List,
      callback: BodyResponseCallback<Schema$ListEndUserAuthenticationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListEndUserAuthenticationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Enduserauthentications$List
        | BodyResponseCallback<Schema$ListEndUserAuthenticationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEndUserAuthenticationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEndUserAuthenticationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListEndUserAuthenticationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Enduserauthentications$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Enduserauthentications$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/endUserAuthentications').replace(
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
        createAPIRequest<Schema$ListEndUserAuthenticationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEndUserAuthenticationsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the parameters of a single EndUserAuthentication.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.connections.endUserAuthentications.patch(
     *       {
     *         // Required. Identifier. Resource name of the EndUserAuthentication. Format: projects/{project\}/locations/{location\}/connections/{connection\}/endUserAuthentications/{end_user_authentication\}
     *         name: 'projects/my-project/locations/my-location/connections/my-connection/endUserAuthentications/my-endUserAuthentication',
     *         // Required. The list of fields to update. A field will be overwritten if it is in the mask. You can modify only the fields listed below. To update the EndUserAuthentication details: * `notify_endpoint_destination`
     *         updateMask: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "configVariables": [],
     *           //   "createTime": "my_createTime",
     *           //   "destinationConfigs": [],
     *           //   "endUserAuthenticationConfig": {},
     *           //   "labels": [],
     *           //   "name": "my_name",
     *           //   "notifyEndpointDestination": {},
     *           //   "roles": [],
     *           //   "status": {},
     *           //   "updateTime": "my_updateTime",
     *           //   "userId": "my_userId"
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
    patch(
      params: Params$Resource$Projects$Locations$Connections$Enduserauthentications$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Connections$Enduserauthentications$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Connections$Enduserauthentications$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Connections$Enduserauthentications$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Connections$Enduserauthentications$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Enduserauthentications$Patch
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
        {}) as Params$Resource$Projects$Locations$Connections$Enduserauthentications$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Enduserauthentications$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Connections$Enduserauthentications$Create
    extends StandardParameters {
    /**
     * Required. Identifier to assign to the EndUserAuthentication. Must be unique within scope of the parent resource.
     */
    endUserAuthenticationId?: string;
    /**
     * Required. Parent resource of the EndUserAuthentication, of the form: `projects/x/locations/x/connections/x`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EndUserAuthentication;
  }
  export interface Params$Resource$Projects$Locations$Connections$Enduserauthentications$Delete
    extends StandardParameters {
    /**
     * Required. Resource name of the form: `projects/x/locations/x/connections/x/endUserAuthentication/x`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Enduserauthentications$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the form: `projects/x/locations/x/connections/x/EndUserAuthentications/x`
     */
    name?: string;
    /**
     * Optional. View of the EndUserAuthentication to return.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Enduserauthentications$List
    extends StandardParameters {
    /**
     * Filter.
     */
    filter?: string;
    /**
     * Order by parameters.
     */
    orderBy?: string;
    /**
     * Page size.
     */
    pageSize?: number;
    /**
     * Page token.
     */
    pageToken?: string;
    /**
     * Required. Parent resource of the EndUserAuthentication, of the form: `projects/x/locations/x/connections/x`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Enduserauthentications$Patch
    extends StandardParameters {
    /**
     * Required. Identifier. Resource name of the EndUserAuthentication. Format: projects/{project\}/locations/{location\}/connections/{connection\}/endUserAuthentications/{end_user_authentication\}
     */
    name?: string;
    /**
     * Required. The list of fields to update. A field will be overwritten if it is in the mask. You can modify only the fields listed below. To update the EndUserAuthentication details: * `notify_endpoint_destination`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EndUserAuthentication;
  }

  export class Resource$Projects$Locations$Connections$Eventsubscriptions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new EventSubscription in a given project,location and connection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.connections.eventSubscriptions.create({
     *       // Required. Identifier to assign to the Event Subscription. Must be unique within scope of the parent resource.
     *       eventSubscriptionId: 'placeholder-value',
     *       // Required. Parent resource of the EventSubscription, of the form: `projects/x/locations/x/connections/x`
     *       parent:
     *         'projects/my-project/locations/my-location/connections/my-connection',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "createTime": "my_createTime",
     *         //   "destinations": {},
     *         //   "eventTypeId": "my_eventTypeId",
     *         //   "jms": {},
     *         //   "name": "my_name",
     *         //   "status": {},
     *         //   "subscriber": "my_subscriber",
     *         //   "subscriberLink": "my_subscriberLink",
     *         //   "triggerConfigVariables": [],
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
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Create
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
        {}) as Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/eventSubscriptions').replace(
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
     * Deletes a single EventSubscription.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.connections.eventSubscriptions.delete({
     *       // Required. Resource name of the form: `projects/x/locations/x/connections/x/eventsubscriptions/x`
     *       name: 'projects/my-project/locations/my-location/connections/my-connection/eventSubscriptions/my-eventSubscription',
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
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Delete
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
        {}) as Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
     * Gets details of a single EventSubscription.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.connections.eventSubscriptions.get({
     *       // Required. Resource name of the form: `projects/x/locations/x/connections/x/eventSubscriptions/x`
     *       name: 'projects/my-project/locations/my-location/connections/my-connection/eventSubscriptions/my-eventSubscription',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "destinations": {},
     *   //   "eventTypeId": "my_eventTypeId",
     *   //   "jms": {},
     *   //   "name": "my_name",
     *   //   "status": {},
     *   //   "subscriber": "my_subscriber",
     *   //   "subscriberLink": "my_subscriberLink",
     *   //   "triggerConfigVariables": [],
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
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EventSubscription>>;
    get(
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$EventSubscription>,
      callback: BodyResponseCallback<Schema$EventSubscription>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Get,
      callback: BodyResponseCallback<Schema$EventSubscription>
    ): void;
    get(callback: BodyResponseCallback<Schema$EventSubscription>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Get
        | BodyResponseCallback<Schema$EventSubscription>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventSubscription>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventSubscription>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EventSubscription>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
        createAPIRequest<Schema$EventSubscription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventSubscription>(parameters);
      }
    }

    /**
     * List EventSubscriptions in a given project,location and connection.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.connections.eventSubscriptions.list({
     *       // Filter.
     *       filter: 'placeholder-value',
     *       // Order by parameters.
     *       orderBy: 'placeholder-value',
     *       // Page size.
     *       pageSize: 'placeholder-value',
     *       // Page token.
     *       pageToken: 'placeholder-value',
     *       // Required. Parent resource of the EventSubscription, of the form: `projects/x/locations/x/connections/x`
     *       parent:
     *         'projects/my-project/locations/my-location/connections/my-connection',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "eventSubscriptions": [],
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
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListEventSubscriptionsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEventSubscriptionsResponse>,
      callback: BodyResponseCallback<Schema$ListEventSubscriptionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$List,
      callback: BodyResponseCallback<Schema$ListEventSubscriptionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListEventSubscriptionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Eventsubscriptions$List
        | BodyResponseCallback<Schema$ListEventSubscriptionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEventSubscriptionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEventSubscriptionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListEventSubscriptionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Eventsubscriptions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Eventsubscriptions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/eventSubscriptions').replace(
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
        createAPIRequest<Schema$ListEventSubscriptionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEventSubscriptionsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the parameters of a single EventSubscription.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.connections.eventSubscriptions.patch({
     *       // Required. Identifier. Resource name of the EventSubscription. Format: projects/{project\}/locations/{location\}/connections/{connection\}/eventSubscriptions/{event_subscription\}
     *       name: 'projects/my-project/locations/my-location/connections/my-connection/eventSubscriptions/my-eventSubscription',
     *       // Required. The list of fields to update. Fields are specified relative to the Subscription. A field will be overwritten if it is in the mask. You can modify only the fields listed below. To update the EventSubscription details: * `serviceAccount`
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "createTime": "my_createTime",
     *         //   "destinations": {},
     *         //   "eventTypeId": "my_eventTypeId",
     *         //   "jms": {},
     *         //   "name": "my_name",
     *         //   "status": {},
     *         //   "subscriber": "my_subscriber",
     *         //   "subscriberLink": "my_subscriberLink",
     *         //   "triggerConfigVariables": [],
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
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Patch
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
        {}) as Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
     * RetryEventSubscription retries the registration of Subscription.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.connections.eventSubscriptions.retry({
     *       // Required. Resource name of the form: `projects/x/locations/x/connections/x/eventSubscriptions/x`
     *       name: 'projects/my-project/locations/my-location/connections/my-connection/eventSubscriptions/my-eventSubscription',
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
    retry(
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Retry,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    retry(
      params?: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Retry,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    retry(
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Retry,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retry(
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Retry,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    retry(
      params: Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Retry,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    retry(callback: BodyResponseCallback<Schema$Operation>): void;
    retry(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Retry
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
        {}) as Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Retry;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Retry;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:retry').replace(/([^:]\/)\/+/g, '$1'),
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
  }

  export interface Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Create
    extends StandardParameters {
    /**
     * Required. Identifier to assign to the Event Subscription. Must be unique within scope of the parent resource.
     */
    eventSubscriptionId?: string;
    /**
     * Required. Parent resource of the EventSubscription, of the form: `projects/x/locations/x/connections/x`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EventSubscription;
  }
  export interface Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Delete
    extends StandardParameters {
    /**
     * Required. Resource name of the form: `projects/x/locations/x/connections/x/eventsubscriptions/x`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the form: `projects/x/locations/x/connections/x/eventSubscriptions/x`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Eventsubscriptions$List
    extends StandardParameters {
    /**
     * Filter.
     */
    filter?: string;
    /**
     * Order by parameters.
     */
    orderBy?: string;
    /**
     * Page size.
     */
    pageSize?: number;
    /**
     * Page token.
     */
    pageToken?: string;
    /**
     * Required. Parent resource of the EventSubscription, of the form: `projects/x/locations/x/connections/x`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Patch
    extends StandardParameters {
    /**
     * Required. Identifier. Resource name of the EventSubscription. Format: projects/{project\}/locations/{location\}/connections/{connection\}/eventSubscriptions/{event_subscription\}
     */
    name?: string;
    /**
     * Required. The list of fields to update. Fields are specified relative to the Subscription. A field will be overwritten if it is in the mask. You can modify only the fields listed below. To update the EventSubscription details: * `serviceAccount`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EventSubscription;
  }
  export interface Params$Resource$Projects$Locations$Connections$Eventsubscriptions$Retry
    extends StandardParameters {
    /**
     * Required. Resource name of the form: `projects/x/locations/x/connections/x/eventSubscriptions/x`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RetryEventSubscriptionRequest;
  }

  export class Resource$Projects$Locations$Connections$Runtimeactionschemas {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List schema of a runtime actions filtered by action name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.connections.runtimeActionSchemas.list({
     *       // Required. Filter Format: action="{actionId\}" Only action field is supported with literal equality operator. Accepted filter example: action="CancelOrder" Wildcards are not supported in the filter currently.
     *       filter: 'placeholder-value',
     *       // Page size.
     *       pageSize: 'placeholder-value',
     *       // Page token.
     *       pageToken: 'placeholder-value',
     *       // Required. Parent resource of RuntimeActionSchema Format: projects/{project\}/locations/{location\}/connections/{connection\}
     *       parent:
     *         'projects/my-project/locations/my-location/connections/my-connection',
     *       // Optional. Flag to indicate if schema should be returned as string or not
     *       schemaAsString: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "runtimeActionSchemas": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Connections$Runtimeactionschemas$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Connections$Runtimeactionschemas$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListRuntimeActionSchemasResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Connections$Runtimeactionschemas$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Runtimeactionschemas$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRuntimeActionSchemasResponse>,
      callback: BodyResponseCallback<Schema$ListRuntimeActionSchemasResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Runtimeactionschemas$List,
      callback: BodyResponseCallback<Schema$ListRuntimeActionSchemasResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListRuntimeActionSchemasResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Runtimeactionschemas$List
        | BodyResponseCallback<Schema$ListRuntimeActionSchemasResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRuntimeActionSchemasResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRuntimeActionSchemasResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListRuntimeActionSchemasResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Runtimeactionschemas$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Runtimeactionschemas$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/runtimeActionSchemas').replace(
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
        createAPIRequest<Schema$ListRuntimeActionSchemasResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRuntimeActionSchemasResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Connections$Runtimeactionschemas$List
    extends StandardParameters {
    /**
     * Required. Filter Format: action="{actionId\}" Only action field is supported with literal equality operator. Accepted filter example: action="CancelOrder" Wildcards are not supported in the filter currently.
     */
    filter?: string;
    /**
     * Page size.
     */
    pageSize?: number;
    /**
     * Page token.
     */
    pageToken?: string;
    /**
     * Required. Parent resource of RuntimeActionSchema Format: projects/{project\}/locations/{location\}/connections/{connection\}
     */
    parent?: string;
    /**
     * Optional. Flag to indicate if schema should be returned as string or not
     */
    schemaAsString?: boolean;
  }

  export class Resource$Projects$Locations$Connections$Runtimeentityschemas {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List schema of a runtime entities filtered by entity name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.connections.runtimeEntitySchemas.list({
     *       // Required. Filter Format: entity="{entityId\}" Only entity field is supported with literal equality operator. Accepted filter example: entity="Order" Wildcards are not supported in the filter currently.
     *       filter: 'placeholder-value',
     *       // Page size.
     *       pageSize: 'placeholder-value',
     *       // Page token.
     *       pageToken: 'placeholder-value',
     *       // Required. Parent resource of RuntimeEntitySchema Format: projects/{project\}/locations/{location\}/connections/{connection\}
     *       parent:
     *         'projects/my-project/locations/my-location/connections/my-connection',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "runtimeEntitySchemas": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Connections$Runtimeentityschemas$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Connections$Runtimeentityschemas$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListRuntimeEntitySchemasResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Connections$Runtimeentityschemas$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Runtimeentityschemas$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRuntimeEntitySchemasResponse>,
      callback: BodyResponseCallback<Schema$ListRuntimeEntitySchemasResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Runtimeentityschemas$List,
      callback: BodyResponseCallback<Schema$ListRuntimeEntitySchemasResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListRuntimeEntitySchemasResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Runtimeentityschemas$List
        | BodyResponseCallback<Schema$ListRuntimeEntitySchemasResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRuntimeEntitySchemasResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRuntimeEntitySchemasResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListRuntimeEntitySchemasResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Runtimeentityschemas$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Runtimeentityschemas$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/runtimeEntitySchemas').replace(
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
        createAPIRequest<Schema$ListRuntimeEntitySchemasResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRuntimeEntitySchemasResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Connections$Runtimeentityschemas$List
    extends StandardParameters {
    /**
     * Required. Filter Format: entity="{entityId\}" Only entity field is supported with literal equality operator. Accepted filter example: entity="Order" Wildcards are not supported in the filter currently.
     */
    filter?: string;
    /**
     * Page size.
     */
    pageSize?: number;
    /**
     * Page token.
     */
    pageToken?: string;
    /**
     * Required. Parent resource of RuntimeEntitySchema Format: projects/{project\}/locations/{location\}/connections/{connection\}
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Customconnectors {
    context: APIRequestContext;
    customConnectorVersions: Resource$Projects$Locations$Customconnectors$Customconnectorversions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.customConnectorVersions =
        new Resource$Projects$Locations$Customconnectors$Customconnectorversions(
          this.context
        );
    }

    /**
     * Validates a Custom Connector Spec.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.customConnectors.validateCustomConnectorSpec(
     *       {
     *         // Required. Location at which the custom connector is being created.
     *         parent: 'projects/my-project/locations/my-location',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "serviceAccount": "my_serviceAccount",
     *           //   "specLocation": "my_specLocation",
     *           //   "specType": "my_specType"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "errorMessage": "my_errorMessage"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    validateCustomConnectorSpec(
      params: Params$Resource$Projects$Locations$Customconnectors$Validatecustomconnectorspec,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    validateCustomConnectorSpec(
      params?: Params$Resource$Projects$Locations$Customconnectors$Validatecustomconnectorspec,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ValidateCustomConnectorSpecResponse>
    >;
    validateCustomConnectorSpec(
      params: Params$Resource$Projects$Locations$Customconnectors$Validatecustomconnectorspec,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    validateCustomConnectorSpec(
      params: Params$Resource$Projects$Locations$Customconnectors$Validatecustomconnectorspec,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ValidateCustomConnectorSpecResponse>,
      callback: BodyResponseCallback<Schema$ValidateCustomConnectorSpecResponse>
    ): void;
    validateCustomConnectorSpec(
      params: Params$Resource$Projects$Locations$Customconnectors$Validatecustomconnectorspec,
      callback: BodyResponseCallback<Schema$ValidateCustomConnectorSpecResponse>
    ): void;
    validateCustomConnectorSpec(
      callback: BodyResponseCallback<Schema$ValidateCustomConnectorSpecResponse>
    ): void;
    validateCustomConnectorSpec(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Customconnectors$Validatecustomconnectorspec
        | BodyResponseCallback<Schema$ValidateCustomConnectorSpecResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ValidateCustomConnectorSpecResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ValidateCustomConnectorSpecResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ValidateCustomConnectorSpecResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Customconnectors$Validatecustomconnectorspec;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Customconnectors$Validatecustomconnectorspec;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/{+parent}/customConnectors:validateCustomConnectorSpec'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ValidateCustomConnectorSpecResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ValidateCustomConnectorSpecResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Customconnectors$Validatecustomconnectorspec
    extends StandardParameters {
    /**
     * Required. Location at which the custom connector is being created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ValidateCustomConnectorSpecRequest;
  }

  export class Resource$Projects$Locations$Customconnectors$Customconnectorversions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a single CustomConnectorVersion.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.customConnectors.customConnectorVersions.delete(
     *       {
     *         // Required. Resource name of the form: `projects/{project\}/locations/{location\}/customConnectors/{custom_connector\}/customConnectorVersions/{custom_connector_version\}`
     *         name: 'projects/my-project/locations/my-location/customConnectors/my-customConnector/customConnectorVersions/my-customConnectorVersion',
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
      params: Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Delete
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
        {}) as Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
     * Deprecates a single CustomConnectorVersion.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.customConnectors.customConnectorVersions.deprecate(
     *       {
     *         // Required. Resource name of the form: `projects/{project\}/locations/{location\}/customConnectors/{custom_connector\}/customConnectorVersions/{custom_connector_version\}`
     *         name: 'projects/my-project/locations/my-location/customConnectors/my-customConnector/customConnectorVersions/my-customConnectorVersion',
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
    deprecate(
      params: Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Deprecate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    deprecate(
      params?: Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Deprecate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    deprecate(
      params: Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Deprecate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deprecate(
      params: Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Deprecate,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    deprecate(
      params: Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Deprecate,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    deprecate(callback: BodyResponseCallback<Schema$Operation>): void;
    deprecate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Deprecate
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
        {}) as Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Deprecate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Deprecate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:deprecate').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Publish request for the CustomConnectorVersion. Once approved, the CustomConnectorVersion will be published as PartnerConnector.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.customConnectors.customConnectorVersions.publish(
     *       {
     *         // Required. Resource name of the form: `projects/{project\}/locations/{location\}/customConnectors/{custom_connector\}/customConnectorVersions/{custom_connector_version\}`
     *         name: 'projects/my-project/locations/my-location/customConnectors/my-customConnector/customConnectorVersions/my-customConnectorVersion',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "partnerMetadata": {}
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
    publish(
      params: Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Publish,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    publish(
      params?: Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Publish,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    publish(
      params: Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Publish,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    publish(
      params: Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Publish,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    publish(
      params: Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Publish,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    publish(callback: BodyResponseCallback<Schema$Operation>): void;
    publish(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Publish
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
        {}) as Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Publish;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Publish;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:publish').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Withdraw the publish request for the CustomConnectorVersion. This can only be used before the CustomConnectorVersion is published.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.customConnectors.customConnectorVersions.withdraw(
     *       {
     *         // Required. Resource name of the form: `projects/{project\}/locations/{location\}/customConnectors/{custom_connector\}/customConnectorVersions/{custom_connector_version\}`
     *         name: 'projects/my-project/locations/my-location/customConnectors/my-customConnector/customConnectorVersions/my-customConnectorVersion',
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
    withdraw(
      params: Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Withdraw,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    withdraw(
      params?: Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Withdraw,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    withdraw(
      params: Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Withdraw,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    withdraw(
      params: Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Withdraw,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    withdraw(
      params: Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Withdraw,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    withdraw(callback: BodyResponseCallback<Schema$Operation>): void;
    withdraw(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Withdraw
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
        {}) as Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Withdraw;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Withdraw;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:withdraw').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Delete
    extends StandardParameters {
    /**
     * Required. Resource name of the form: `projects/{project\}/locations/{location\}/customConnectors/{custom_connector\}/customConnectorVersions/{custom_connector_version\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Deprecate
    extends StandardParameters {
    /**
     * Required. Resource name of the form: `projects/{project\}/locations/{location\}/customConnectors/{custom_connector\}/customConnectorVersions/{custom_connector_version\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeprecateCustomConnectorVersionRequest;
  }
  export interface Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Publish
    extends StandardParameters {
    /**
     * Required. Resource name of the form: `projects/{project\}/locations/{location\}/customConnectors/{custom_connector\}/customConnectorVersions/{custom_connector_version\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PublishCustomConnectorVersionRequest;
  }
  export interface Params$Resource$Projects$Locations$Customconnectors$Customconnectorversions$Withdraw
    extends StandardParameters {
    /**
     * Required. Resource name of the form: `projects/{project\}/locations/{location\}/customConnectors/{custom_connector\}/customConnectorVersions/{custom_connector_version\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WithdrawCustomConnectorVersionRequest;
  }

  export class Resource$Projects$Locations$Endpointattachments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new EndpointAttachment in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.endpointAttachments.create({
     *     // Required. Identifier to assign to the EndpointAttachment. Must be unique within scope of the parent resource. The regex is: `^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$`.
     *     endpointAttachmentId: 'placeholder-value',
     *     // Required. Parent resource of the EndpointAttachment, of the form: `projects/x/locations/x`
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "endpointGlobalAccess": false,
     *       //   "endpointIp": "my_endpointIp",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "serviceAttachment": "my_serviceAttachment",
     *       //   "state": "my_state",
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
      params: Params$Resource$Projects$Locations$Endpointattachments$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Endpointattachments$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Endpointattachments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Endpointattachments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Endpointattachments$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Endpointattachments$Create
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
        {}) as Params$Resource$Projects$Locations$Endpointattachments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Endpointattachments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/endpointAttachments').replace(
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
     * Deletes a single EndpointAttachment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.endpointAttachments.delete({
     *     // Required. Resource name of the form: `projects/x/locations/x/endpointAttachments/x`
     *     name: 'projects/my-project/locations/my-location/endpointAttachments/my-endpointAttachment',
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
      params: Params$Resource$Projects$Locations$Endpointattachments$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Endpointattachments$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Endpointattachments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Endpointattachments$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Endpointattachments$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Endpointattachments$Delete
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
        {}) as Params$Resource$Projects$Locations$Endpointattachments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Endpointattachments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
     * Gets details of a single EndpointAttachment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.endpointAttachments.get({
     *     // Required. Resource name of the form: `projects/x/locations/x/endpointAttachments/x`
     *     name: 'projects/my-project/locations/my-location/endpointAttachments/my-endpointAttachment',
     *     // Optional. Specifies which fields of the EndpointAttachment are returned in the response. Defaults to `ENDPOINT_ATTACHMENT_VIEW_BASIC` view.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "endpointGlobalAccess": false,
     *   //   "endpointIp": "my_endpointIp",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "serviceAttachment": "my_serviceAttachment",
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
      params: Params$Resource$Projects$Locations$Endpointattachments$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Endpointattachments$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EndpointAttachment>>;
    get(
      params: Params$Resource$Projects$Locations$Endpointattachments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Endpointattachments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$EndpointAttachment>,
      callback: BodyResponseCallback<Schema$EndpointAttachment>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Endpointattachments$Get,
      callback: BodyResponseCallback<Schema$EndpointAttachment>
    ): void;
    get(callback: BodyResponseCallback<Schema$EndpointAttachment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Endpointattachments$Get
        | BodyResponseCallback<Schema$EndpointAttachment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EndpointAttachment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EndpointAttachment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EndpointAttachment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Endpointattachments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Endpointattachments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
        createAPIRequest<Schema$EndpointAttachment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EndpointAttachment>(parameters);
      }
    }

    /**
     * List EndpointAttachments in a given project
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.endpointAttachments.list({
     *     // Filter.
     *     filter: 'placeholder-value',
     *     // Order by parameters.
     *     orderBy: 'placeholder-value',
     *     // Page size.
     *     pageSize: 'placeholder-value',
     *     // Page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent resource od the EndpointAttachment, of the form: `projects/x/locations/x`
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. Specifies which fields of the EndpointAttachment are returned in the response. Defaults to `ENDPOINT_ATTACHMENT_VIEW_BASIC` view.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "endpointAttachments": [],
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
      params: Params$Resource$Projects$Locations$Endpointattachments$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Endpointattachments$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListEndpointAttachmentsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Endpointattachments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Endpointattachments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEndpointAttachmentsResponse>,
      callback: BodyResponseCallback<Schema$ListEndpointAttachmentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Endpointattachments$List,
      callback: BodyResponseCallback<Schema$ListEndpointAttachmentsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListEndpointAttachmentsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Endpointattachments$List
        | BodyResponseCallback<Schema$ListEndpointAttachmentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEndpointAttachmentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEndpointAttachmentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListEndpointAttachmentsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Endpointattachments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Endpointattachments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/endpointAttachments').replace(
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
        createAPIRequest<Schema$ListEndpointAttachmentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEndpointAttachmentsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the parameters of a single EndpointAttachment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.endpointAttachments.patch({
     *     // Output only. Resource name of the Endpoint Attachment. Format: projects/{project\}/locations/{location\}/endpointAttachments/{endpoint_attachment\}
     *     name: 'projects/my-project/locations/my-location/endpointAttachments/my-endpointAttachment',
     *     // Required. The list of fields to update. Fields are specified relative to the endpointAttachment. A field will be overwritten if it is in the mask. You can modify only the fields listed below. To update the endpointAttachment details: * `description` * `labels`
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "endpointGlobalAccess": false,
     *       //   "endpointIp": "my_endpointIp",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "serviceAttachment": "my_serviceAttachment",
     *       //   "state": "my_state",
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
      params: Params$Resource$Projects$Locations$Endpointattachments$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Endpointattachments$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Endpointattachments$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Endpointattachments$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Endpointattachments$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Endpointattachments$Patch
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
        {}) as Params$Resource$Projects$Locations$Endpointattachments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Endpointattachments$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Endpointattachments$Create
    extends StandardParameters {
    /**
     * Required. Identifier to assign to the EndpointAttachment. Must be unique within scope of the parent resource. The regex is: `^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$`.
     */
    endpointAttachmentId?: string;
    /**
     * Required. Parent resource of the EndpointAttachment, of the form: `projects/x/locations/x`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EndpointAttachment;
  }
  export interface Params$Resource$Projects$Locations$Endpointattachments$Delete
    extends StandardParameters {
    /**
     * Required. Resource name of the form: `projects/x/locations/x/endpointAttachments/x`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Endpointattachments$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the form: `projects/x/locations/x/endpointAttachments/x`
     */
    name?: string;
    /**
     * Optional. Specifies which fields of the EndpointAttachment are returned in the response. Defaults to `ENDPOINT_ATTACHMENT_VIEW_BASIC` view.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Endpointattachments$List
    extends StandardParameters {
    /**
     * Filter.
     */
    filter?: string;
    /**
     * Order by parameters.
     */
    orderBy?: string;
    /**
     * Page size.
     */
    pageSize?: number;
    /**
     * Page token.
     */
    pageToken?: string;
    /**
     * Required. Parent resource od the EndpointAttachment, of the form: `projects/x/locations/x`
     */
    parent?: string;
    /**
     * Optional. Specifies which fields of the EndpointAttachment are returned in the response. Defaults to `ENDPOINT_ATTACHMENT_VIEW_BASIC` view.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Endpointattachments$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name of the Endpoint Attachment. Format: projects/{project\}/locations/{location\}/endpointAttachments/{endpoint_attachment\}
     */
    name?: string;
    /**
     * Required. The list of fields to update. Fields are specified relative to the endpointAttachment. A field will be overwritten if it is in the mask. You can modify only the fields listed below. To update the endpointAttachment details: * `description` * `labels`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EndpointAttachment;
  }

  export class Resource$Projects$Locations$Global {
    context: APIRequestContext;
    customConnectors: Resource$Projects$Locations$Global$Customconnectors;
    managedZones: Resource$Projects$Locations$Global$Managedzones;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.customConnectors =
        new Resource$Projects$Locations$Global$Customconnectors(this.context);
      this.managedZones = new Resource$Projects$Locations$Global$Managedzones(
        this.context
      );
    }

    /**
     * GetGlobalSettings gets settings of a project. GlobalSettings is a singleton resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.global.getSettings({
     *     // Required. The resource name of the Settings.
     *     name: 'projects/my-project/locations/global/settings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "payg": false,
     *   //   "tenantProjectId": "my_tenantProjectId",
     *   //   "vpcsc": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Global$Getsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSettings(
      params?: Params$Resource$Projects$Locations$Global$Getsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Settings>>;
    getSettings(
      params: Params$Resource$Projects$Locations$Global$Getsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSettings(
      params: Params$Resource$Projects$Locations$Global$Getsettings,
      options: MethodOptions | BodyResponseCallback<Schema$Settings>,
      callback: BodyResponseCallback<Schema$Settings>
    ): void;
    getSettings(
      params: Params$Resource$Projects$Locations$Global$Getsettings,
      callback: BodyResponseCallback<Schema$Settings>
    ): void;
    getSettings(callback: BodyResponseCallback<Schema$Settings>): void;
    getSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Getsettings
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
        {}) as Params$Resource$Projects$Locations$Global$Getsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Global$Getsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
        createAPIRequest<Schema$Settings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Settings>(parameters);
      }
    }

    /**
     * Update the global settings of a project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.global.updateSettings({
     *     // Output only. Resource name of the Connection. Format: projects/{project\}/locations/global/settings\}
     *     name: 'projects/my-project/locations/global/settings',
     *     // Required. The list of fields to update.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "name": "my_name",
     *       //   "payg": false,
     *       //   "tenantProjectId": "my_tenantProjectId",
     *       //   "vpcsc": false
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
    updateSettings(
      params: Params$Resource$Projects$Locations$Global$Updatesettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateSettings(
      params?: Params$Resource$Projects$Locations$Global$Updatesettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    updateSettings(
      params: Params$Resource$Projects$Locations$Global$Updatesettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSettings(
      params: Params$Resource$Projects$Locations$Global$Updatesettings,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateSettings(
      params: Params$Resource$Projects$Locations$Global$Updatesettings,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    updateSettings(callback: BodyResponseCallback<Schema$Operation>): void;
    updateSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Updatesettings
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
        {}) as Params$Resource$Projects$Locations$Global$Updatesettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Global$Updatesettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Global$Getsettings
    extends StandardParameters {
    /**
     * Required. The resource name of the Settings.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Global$Updatesettings
    extends StandardParameters {
    /**
     * Output only. Resource name of the Connection. Format: projects/{project\}/locations/global/settings\}
     */
    name?: string;
    /**
     * Required. The list of fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Settings;
  }

  export class Resource$Projects$Locations$Global$Customconnectors {
    context: APIRequestContext;
    customConnectorVersions: Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.customConnectorVersions =
        new Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions(
          this.context
        );
    }

    /**
     * Creates a new CustomConnector in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.global.customConnectors.create({
     *       // Required. Identifier to assign to the CreateCustomConnector. Must be unique within scope of the parent resource.
     *       customConnectorId: 'placeholder-value',
     *       // Required. Parent resource of the CreateCustomConnector, of the form: `projects/{project\}/locations/x`
     *       parent: 'projects/my-project/locations/global',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "activeConnectorVersions": [],
     *         //   "allConnectorVersions": [],
     *         //   "allMarketplaceVersions": [],
     *         //   "createTime": "my_createTime",
     *         //   "customConnectorType": "my_customConnectorType",
     *         //   "description": "my_description",
     *         //   "displayName": "my_displayName",
     *         //   "labels": {},
     *         //   "logo": "my_logo",
     *         //   "name": "my_name",
     *         //   "publishedMarketplaceVersions": [],
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
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Global$Customconnectors$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Customconnectors$Create
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
        {}) as Params$Resource$Projects$Locations$Global$Customconnectors$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Customconnectors$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/customConnectors').replace(
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
     * Deletes a single CustomConnector.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.global.customConnectors.delete({
     *       // Optional. If set to true, any customConnectorVersion which is a child resource will also be deleted. https://aip.dev/135#cascading-delete
     *       force: 'placeholder-value',
     *       // Required. Resource name of the form: `projects/{project\}/locations/{location\}/customConnectors/{connector\}`
     *       name: 'projects/my-project/locations/global/customConnectors/my-customConnector',
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
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Global$Customconnectors$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Customconnectors$Delete
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
        {}) as Params$Resource$Projects$Locations$Global$Customconnectors$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Customconnectors$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
     * Gets details of a single CustomConnector.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.global.customConnectors.get({
     *     // Required. Resource name of the form: `projects/x/locations/x/customConnectors/x`
     *     name: 'projects/my-project/locations/global/customConnectors/my-customConnector',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeConnectorVersions": [],
     *   //   "allConnectorVersions": [],
     *   //   "allMarketplaceVersions": [],
     *   //   "createTime": "my_createTime",
     *   //   "customConnectorType": "my_customConnectorType",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "labels": {},
     *   //   "logo": "my_logo",
     *   //   "name": "my_name",
     *   //   "publishedMarketplaceVersions": [],
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
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Global$Customconnectors$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CustomConnector>>;
    get(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CustomConnector>,
      callback: BodyResponseCallback<Schema$CustomConnector>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Get,
      callback: BodyResponseCallback<Schema$CustomConnector>
    ): void;
    get(callback: BodyResponseCallback<Schema$CustomConnector>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Customconnectors$Get
        | BodyResponseCallback<Schema$CustomConnector>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomConnector>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomConnector>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CustomConnector>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Customconnectors$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Customconnectors$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
        createAPIRequest<Schema$CustomConnector>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomConnector>(parameters);
      }
    }

    /**
     * List CustomConnectorVersions in a given project
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.global.customConnectors.list({
     *     // Filter string.
     *     filter: 'placeholder-value',
     *     // Page size.
     *     pageSize: 'placeholder-value',
     *     // Page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent resource of the custom connectors, of the form: `projects/x/locations/x` Only global location is supported for CustomConnector resource.
     *     parent: 'projects/my-project/locations/global',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customConnectors": [],
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
      params: Params$Resource$Projects$Locations$Global$Customconnectors$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Global$Customconnectors$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListCustomConnectorsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCustomConnectorsResponse>,
      callback: BodyResponseCallback<Schema$ListCustomConnectorsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$List,
      callback: BodyResponseCallback<Schema$ListCustomConnectorsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListCustomConnectorsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Customconnectors$List
        | BodyResponseCallback<Schema$ListCustomConnectorsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCustomConnectorsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCustomConnectorsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListCustomConnectorsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Customconnectors$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Customconnectors$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/customConnectors').replace(
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
        createAPIRequest<Schema$ListCustomConnectorsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCustomConnectorsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the parameters of a CustomConnector.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.global.customConnectors.patch(
     *     {
     *       // Identifier. Resource name of the CustomConnector. Format: projects/{project\}/locations/{location\}/customConnectors/{connector\}
     *       name: 'projects/my-project/locations/global/customConnectors/my-customConnector',
     *       // Required. Field mask is used to specify the fields to be overwritten in the Connector resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. Set the mask as "*" for full replacement, which means all fields will be overwritten.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "activeConnectorVersions": [],
     *         //   "allConnectorVersions": [],
     *         //   "allMarketplaceVersions": [],
     *         //   "createTime": "my_createTime",
     *         //   "customConnectorType": "my_customConnectorType",
     *         //   "description": "my_description",
     *         //   "displayName": "my_displayName",
     *         //   "labels": {},
     *         //   "logo": "my_logo",
     *         //   "name": "my_name",
     *         //   "publishedMarketplaceVersions": [],
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     },
     *   );
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
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Global$Customconnectors$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Customconnectors$Patch
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
        {}) as Params$Resource$Projects$Locations$Global$Customconnectors$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Customconnectors$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Global$Customconnectors$Create
    extends StandardParameters {
    /**
     * Required. Identifier to assign to the CreateCustomConnector. Must be unique within scope of the parent resource.
     */
    customConnectorId?: string;
    /**
     * Required. Parent resource of the CreateCustomConnector, of the form: `projects/{project\}/locations/x`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomConnector;
  }
  export interface Params$Resource$Projects$Locations$Global$Customconnectors$Delete
    extends StandardParameters {
    /**
     * Optional. If set to true, any customConnectorVersion which is a child resource will also be deleted. https://aip.dev/135#cascading-delete
     */
    force?: boolean;
    /**
     * Required. Resource name of the form: `projects/{project\}/locations/{location\}/customConnectors/{connector\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Global$Customconnectors$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the form: `projects/x/locations/x/customConnectors/x`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Global$Customconnectors$List
    extends StandardParameters {
    /**
     * Filter string.
     */
    filter?: string;
    /**
     * Page size.
     */
    pageSize?: number;
    /**
     * Page token.
     */
    pageToken?: string;
    /**
     * Required. Parent resource of the custom connectors, of the form: `projects/x/locations/x` Only global location is supported for CustomConnector resource.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Global$Customconnectors$Patch
    extends StandardParameters {
    /**
     * Identifier. Resource name of the CustomConnector. Format: projects/{project\}/locations/{location\}/customConnectors/{connector\}
     */
    name?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the Connector resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. Set the mask as "*" for full replacement, which means all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomConnector;
  }

  export class Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new CustomConnectorVersion in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.global.customConnectors.customConnectorVersions.create(
     *       {
     *         // Required. Identifier to assign to the CreateCustomConnectorVersion. Must be unique within scope of the parent resource.
     *         customConnectorVersionId: 'placeholder-value',
     *         // Required. Parent resource of the CreateCustomConnector, of the form: `projects/{project\}/locations/{location\}/customConnectors/{custom_connector\}`
     *         parent:
     *           'projects/my-project/locations/global/customConnectors/my-customConnector',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "asyncOperationsSupport": false,
     *           //   "authConfig": {},
     *           //   "authConfigTemplates": [],
     *           //   "authOverrideSupport": false,
     *           //   "backendVariableTemplates": [],
     *           //   "createTime": "my_createTime",
     *           //   "destinationConfigs": [],
     *           //   "enableBackendDestinationConfig": false,
     *           //   "labels": {},
     *           //   "name": "my_name",
     *           //   "partnerMetadata": {},
     *           //   "publishStatus": {},
     *           //   "serviceAccount": "my_serviceAccount",
     *           //   "specLocation": "my_specLocation",
     *           //   "specServerUrls": [],
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
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$Create
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
        {}) as Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/customConnectorVersions').replace(
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
     * Gets details of a single CustomConnectorVersion.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.global.customConnectors.customConnectorVersions.get(
     *       {
     *         // Required. Resource name of the form: `projects/x/locations/{location\}/customConnectors/x/customConnectorVersions/x`
     *         name: 'projects/my-project/locations/global/customConnectors/my-customConnector/customConnectorVersions/my-customConnectorVersion',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "asyncOperationsSupport": false,
     *   //   "authConfig": {},
     *   //   "authConfigTemplates": [],
     *   //   "authOverrideSupport": false,
     *   //   "backendVariableTemplates": [],
     *   //   "createTime": "my_createTime",
     *   //   "destinationConfigs": [],
     *   //   "enableBackendDestinationConfig": false,
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "partnerMetadata": {},
     *   //   "publishStatus": {},
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "specLocation": "my_specLocation",
     *   //   "specServerUrls": [],
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
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CustomConnectorVersion>>;
    get(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CustomConnectorVersion>,
      callback: BodyResponseCallback<Schema$CustomConnectorVersion>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$Get,
      callback: BodyResponseCallback<Schema$CustomConnectorVersion>
    ): void;
    get(callback: BodyResponseCallback<Schema$CustomConnectorVersion>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$Get
        | BodyResponseCallback<Schema$CustomConnectorVersion>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomConnectorVersion>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomConnectorVersion>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CustomConnectorVersion>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
        createAPIRequest<Schema$CustomConnectorVersion>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomConnectorVersion>(parameters);
      }
    }

    /**
     * List CustomConnectorVersions in a given project
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.global.customConnectors.customConnectorVersions.list(
     *       {
     *         // Page size.
     *         pageSize: 'placeholder-value',
     *         // Page token.
     *         pageToken: 'placeholder-value',
     *         // Required. Parent resource of the connectors, of the form: `projects/x/locations/{location\}/customConnectors/x/customConnectorVersions/x`
     *         parent:
     *           'projects/my-project/locations/global/customConnectors/my-customConnector',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customConnectorVersions": [],
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
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListCustomConnectorVersionsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCustomConnectorVersionsResponse>,
      callback: BodyResponseCallback<Schema$ListCustomConnectorVersionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$List,
      callback: BodyResponseCallback<Schema$ListCustomConnectorVersionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListCustomConnectorVersionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$List
        | BodyResponseCallback<Schema$ListCustomConnectorVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCustomConnectorVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCustomConnectorVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListCustomConnectorVersionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/customConnectorVersions').replace(
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
        createAPIRequest<Schema$ListCustomConnectorVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCustomConnectorVersionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$Create
    extends StandardParameters {
    /**
     * Required. Identifier to assign to the CreateCustomConnectorVersion. Must be unique within scope of the parent resource.
     */
    customConnectorVersionId?: string;
    /**
     * Required. Parent resource of the CreateCustomConnector, of the form: `projects/{project\}/locations/{location\}/customConnectors/{custom_connector\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomConnectorVersion;
  }
  export interface Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the form: `projects/x/locations/{location\}/customConnectors/x/customConnectorVersions/x`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Global$Customconnectors$Customconnectorversions$List
    extends StandardParameters {
    /**
     * Page size.
     */
    pageSize?: number;
    /**
     * Page token.
     */
    pageToken?: string;
    /**
     * Required. Parent resource of the connectors, of the form: `projects/x/locations/{location\}/customConnectors/x/customConnectorVersions/x`
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Global$Managedzones {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new ManagedZone in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.global.managedZones.create({
     *     // Required. Identifier to assign to the ManagedZone. Must be unique within scope of the parent resource.
     *     managedZoneId: 'placeholder-value',
     *     // Required. Parent resource of the ManagedZone, of the form: `projects/x/locations/global`
     *     parent: 'projects/my-project/locations/global',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "dns": "my_dns",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "targetProject": "my_targetProject",
     *       //   "targetVpc": "my_targetVpc",
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
      params: Params$Resource$Projects$Locations$Global$Managedzones$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Global$Managedzones$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Global$Managedzones$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Global$Managedzones$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Global$Managedzones$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Managedzones$Create
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
        {}) as Params$Resource$Projects$Locations$Global$Managedzones$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Managedzones$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/managedZones').replace(
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
     * Deletes a single ManagedZone.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.global.managedZones.delete({
     *     // Required. Resource name of the form: `projects/x/locations/global/managedZones/x`
     *     name: 'projects/my-project/locations/global/managedZones/my-managedZone',
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
      params: Params$Resource$Projects$Locations$Global$Managedzones$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Global$Managedzones$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Global$Managedzones$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Global$Managedzones$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Global$Managedzones$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Managedzones$Delete
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
        {}) as Params$Resource$Projects$Locations$Global$Managedzones$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Managedzones$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
     * Gets details of a single ManagedZone.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.global.managedZones.get({
     *     // Required. Resource name of the form: `projects/x/locations/global/managedZones/x`
     *     name: 'projects/my-project/locations/global/managedZones/my-managedZone',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "dns": "my_dns",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "targetProject": "my_targetProject",
     *   //   "targetVpc": "my_targetVpc",
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
      params: Params$Resource$Projects$Locations$Global$Managedzones$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Global$Managedzones$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ManagedZone>>;
    get(
      params: Params$Resource$Projects$Locations$Global$Managedzones$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Global$Managedzones$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ManagedZone>,
      callback: BodyResponseCallback<Schema$ManagedZone>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Global$Managedzones$Get,
      callback: BodyResponseCallback<Schema$ManagedZone>
    ): void;
    get(callback: BodyResponseCallback<Schema$ManagedZone>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Managedzones$Get
        | BodyResponseCallback<Schema$ManagedZone>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ManagedZone>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ManagedZone>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ManagedZone>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Managedzones$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Managedzones$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
        createAPIRequest<Schema$ManagedZone>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ManagedZone>(parameters);
      }
    }

    /**
     * List ManagedZones in a given project
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.global.managedZones.list({
     *     // Filter.
     *     filter: 'placeholder-value',
     *     // Order by parameters.
     *     orderBy: 'placeholder-value',
     *     // Page size.
     *     pageSize: 'placeholder-value',
     *     // Page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent resource of the Managed Zone, of the form: `projects/x/locations/global`
     *     parent: 'projects/my-project/locations/global',
     *     // Optional. If true, allow partial responses for multi-regional Aggregated List requests.
     *     returnPartialSuccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "managedZones": [],
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
      params: Params$Resource$Projects$Locations$Global$Managedzones$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Global$Managedzones$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListManagedZonesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Global$Managedzones$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Global$Managedzones$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListManagedZonesResponse>,
      callback: BodyResponseCallback<Schema$ListManagedZonesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Global$Managedzones$List,
      callback: BodyResponseCallback<Schema$ListManagedZonesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListManagedZonesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Managedzones$List
        | BodyResponseCallback<Schema$ListManagedZonesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListManagedZonesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListManagedZonesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListManagedZonesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Global$Managedzones$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Managedzones$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/managedZones').replace(
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
        createAPIRequest<Schema$ListManagedZonesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListManagedZonesResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single ManagedZone.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.global.managedZones.patch({
     *     // Output only. Resource name of the Managed Zone. Format: projects/{project\}/locations/global/managedZones/{managed_zone\}
     *     name: 'projects/my-project/locations/global/managedZones/my-managedZone',
     *     // Required. The list of fields to update. Fields are specified relative to the managedZone. A field will be overwritten if it is in the mask. You can modify only the fields listed below. To update the managedZone details: * `description` * `labels` * `target_project` * `target_network`
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "dns": "my_dns",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "targetProject": "my_targetProject",
     *       //   "targetVpc": "my_targetVpc",
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
      params: Params$Resource$Projects$Locations$Global$Managedzones$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Global$Managedzones$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Global$Managedzones$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Global$Managedzones$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Global$Managedzones$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Global$Managedzones$Patch
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
        {}) as Params$Resource$Projects$Locations$Global$Managedzones$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Global$Managedzones$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Global$Managedzones$Create
    extends StandardParameters {
    /**
     * Required. Identifier to assign to the ManagedZone. Must be unique within scope of the parent resource.
     */
    managedZoneId?: string;
    /**
     * Required. Parent resource of the ManagedZone, of the form: `projects/x/locations/global`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ManagedZone;
  }
  export interface Params$Resource$Projects$Locations$Global$Managedzones$Delete
    extends StandardParameters {
    /**
     * Required. Resource name of the form: `projects/x/locations/global/managedZones/x`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Global$Managedzones$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the form: `projects/x/locations/global/managedZones/x`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Global$Managedzones$List
    extends StandardParameters {
    /**
     * Filter.
     */
    filter?: string;
    /**
     * Order by parameters.
     */
    orderBy?: string;
    /**
     * Page size.
     */
    pageSize?: number;
    /**
     * Page token.
     */
    pageToken?: string;
    /**
     * Required. Parent resource of the Managed Zone, of the form: `projects/x/locations/global`
     */
    parent?: string;
    /**
     * Optional. If true, allow partial responses for multi-regional Aggregated List requests.
     */
    returnPartialSuccess?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Global$Managedzones$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name of the Managed Zone. Format: projects/{project\}/locations/global/managedZones/{managed_zone\}
     */
    name?: string;
    /**
     * Required. The list of fields to update. Fields are specified relative to the managedZone. A field will be overwritten if it is in the mask. You can modify only the fields listed below. To update the managedZone details: * `description` * `labels` * `target_project` * `target_network`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ManagedZone;
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
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.operations.cancel({
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

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.operations.delete({
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

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.operations.get({
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

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.operations.list({
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

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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

  export class Resource$Projects$Locations$Providers {
    context: APIRequestContext;
    connectors: Resource$Projects$Locations$Providers$Connectors;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.connectors = new Resource$Projects$Locations$Providers$Connectors(
        this.context
      );
    }

    /**
     * Gets details of a provider.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.providers.get({
     *     // Required. Resource name of the form: `projects/x/locations/x/providers/x` Only global location is supported for Provider resource.
     *     name: 'projects/my-project/locations/my-location/providers/my-provider',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "documentationUri": "my_documentationUri",
     *   //   "externalUri": "my_externalUri",
     *   //   "labels": {},
     *   //   "launchStage": "my_launchStage",
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime",
     *   //   "webAssetsLocation": "my_webAssetsLocation"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Providers$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Providers$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Provider>>;
    get(
      params: Params$Resource$Projects$Locations$Providers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Providers$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Provider>,
      callback: BodyResponseCallback<Schema$Provider>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Providers$Get,
      callback: BodyResponseCallback<Schema$Provider>
    ): void;
    get(callback: BodyResponseCallback<Schema$Provider>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Providers$Get
        | BodyResponseCallback<Schema$Provider>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Provider>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Provider>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Provider>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Providers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Providers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
        createAPIRequest<Schema$Provider>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Provider>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.providers.getIamPolicy({
     *     // Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *     'options.requestedPolicyVersion': 'placeholder-value',
     *     // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/providers/my-provider',
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
      params: Params$Resource$Projects$Locations$Providers$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Providers$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Providers$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Providers$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Providers$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Providers$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Providers$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Providers$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
     * Lists Providers in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.providers.list({
     *     // Page size.
     *     pageSize: 'placeholder-value',
     *     // Page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent resource of the API, of the form: `projects/x/locations/x` Only global location is supported for Provider resource.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "providers": [],
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
      params: Params$Resource$Projects$Locations$Providers$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Providers$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListProvidersResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Providers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Providers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListProvidersResponse>,
      callback: BodyResponseCallback<Schema$ListProvidersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Providers$List,
      callback: BodyResponseCallback<Schema$ListProvidersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListProvidersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Providers$List
        | BodyResponseCallback<Schema$ListProvidersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListProvidersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListProvidersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListProvidersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Providers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Providers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/providers').replace(
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
        createAPIRequest<Schema$ListProvidersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListProvidersResponse>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.providers.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/providers/my-provider',
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
      params: Params$Resource$Projects$Locations$Providers$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Providers$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Providers$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Providers$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Providers$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Providers$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Providers$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Providers$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.providers.testIamPermissions({
     *     // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/providers/my-provider',
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
      params: Params$Resource$Projects$Locations$Providers$Testiampermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Providers$Testiampermissions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Providers$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Providers$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Providers$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Providers$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Providers$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Providers$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Providers$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the form: `projects/x/locations/x/providers/x` Only global location is supported for Provider resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Providers$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Providers$List
    extends StandardParameters {
    /**
     * Page size.
     */
    pageSize?: number;
    /**
     * Page token.
     */
    pageToken?: string;
    /**
     * Required. Parent resource of the API, of the form: `projects/x/locations/x` Only global location is supported for Provider resource.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Providers$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Providers$Testiampermissions
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

  export class Resource$Projects$Locations$Providers$Connectors {
    context: APIRequestContext;
    versions: Resource$Projects$Locations$Providers$Connectors$Versions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.versions =
        new Resource$Projects$Locations$Providers$Connectors$Versions(
          this.context
        );
    }

    /**
     * Gets details of a single Connector.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.providers.connectors.get({
     *     // Required. Resource name of the form: `projects/x/locations/x/providers/x/connectors/x` Only global location is supported for Connector resource.
     *     name: 'projects/my-project/locations/my-location/providers/my-provider/connectors/my-connector',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "category": "my_category",
     *   //   "connectorType": "my_connectorType",
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "documentationUri": "my_documentationUri",
     *   //   "eventingDetails": {},
     *   //   "externalUri": "my_externalUri",
     *   //   "labels": {},
     *   //   "launchStage": "my_launchStage",
     *   //   "marketplaceConnectorDetails": {},
     *   //   "name": "my_name",
     *   //   "tags": [],
     *   //   "updateTime": "my_updateTime",
     *   //   "webAssetsLocation": "my_webAssetsLocation"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Providers$Connectors$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Providers$Connectors$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Connector>>;
    get(
      params: Params$Resource$Projects$Locations$Providers$Connectors$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Providers$Connectors$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Connector>,
      callback: BodyResponseCallback<Schema$Connector>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Providers$Connectors$Get,
      callback: BodyResponseCallback<Schema$Connector>
    ): void;
    get(callback: BodyResponseCallback<Schema$Connector>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Providers$Connectors$Get
        | BodyResponseCallback<Schema$Connector>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Connector>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Connector>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Connector>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Providers$Connectors$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Providers$Connectors$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
        createAPIRequest<Schema$Connector>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Connector>(parameters);
      }
    }

    /**
     * Lists Connectors in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *   const res = await connectors.projects.locations.providers.connectors.list({
     *     // Filter string.
     *     filter: 'placeholder-value',
     *     // Page size.
     *     pageSize: 'placeholder-value',
     *     // Page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent resource of the connectors, of the form: `projects/x/locations/x/providers/x` Only global location is supported for Connector resource.
     *     parent: 'projects/my-project/locations/my-location/providers/my-provider',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "connectors": [],
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
      params: Params$Resource$Projects$Locations$Providers$Connectors$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Providers$Connectors$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListConnectorsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Providers$Connectors$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Providers$Connectors$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConnectorsResponse>,
      callback: BodyResponseCallback<Schema$ListConnectorsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Providers$Connectors$List,
      callback: BodyResponseCallback<Schema$ListConnectorsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListConnectorsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Providers$Connectors$List
        | BodyResponseCallback<Schema$ListConnectorsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConnectorsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConnectorsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListConnectorsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Providers$Connectors$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Providers$Connectors$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/connectors').replace(
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
        createAPIRequest<Schema$ListConnectorsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConnectorsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Providers$Connectors$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the form: `projects/x/locations/x/providers/x/connectors/x` Only global location is supported for Connector resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Providers$Connectors$List
    extends StandardParameters {
    /**
     * Filter string.
     */
    filter?: string;
    /**
     * Page size.
     */
    pageSize?: number;
    /**
     * Page token.
     */
    pageToken?: string;
    /**
     * Required. Parent resource of the connectors, of the form: `projects/x/locations/x/providers/x` Only global location is supported for Connector resource.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Providers$Connectors$Versions {
    context: APIRequestContext;
    eventtypes: Resource$Projects$Locations$Providers$Connectors$Versions$Eventtypes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.eventtypes =
        new Resource$Projects$Locations$Providers$Connectors$Versions$Eventtypes(
          this.context
        );
    }

    /**
     * fetch and return the list of auth config variables required to override the connection backend auth.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.providers.connectors.versions.fetchAuthSchema(
     *       {
     *         // Required. Parent resource of the Connector Version, of the form: `projects/x/locations/x/providers/x/connectors/x/versions/x`
     *         name: 'projects/my-project/locations/my-location/providers/my-provider/connectors/my-connector/versions/my-version',
     *         // Optional. View of the AuthSchema. The default value is BASIC.
     *         view: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "authSchemas": [],
     *   //   "jsonSchema": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    fetchAuthSchema(
      params: Params$Resource$Projects$Locations$Providers$Connectors$Versions$Fetchauthschema,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetchAuthSchema(
      params?: Params$Resource$Projects$Locations$Providers$Connectors$Versions$Fetchauthschema,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$FetchAuthSchemaResponse>>;
    fetchAuthSchema(
      params: Params$Resource$Projects$Locations$Providers$Connectors$Versions$Fetchauthschema,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchAuthSchema(
      params: Params$Resource$Projects$Locations$Providers$Connectors$Versions$Fetchauthschema,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchAuthSchemaResponse>,
      callback: BodyResponseCallback<Schema$FetchAuthSchemaResponse>
    ): void;
    fetchAuthSchema(
      params: Params$Resource$Projects$Locations$Providers$Connectors$Versions$Fetchauthschema,
      callback: BodyResponseCallback<Schema$FetchAuthSchemaResponse>
    ): void;
    fetchAuthSchema(
      callback: BodyResponseCallback<Schema$FetchAuthSchemaResponse>
    ): void;
    fetchAuthSchema(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Providers$Connectors$Versions$Fetchauthschema
        | BodyResponseCallback<Schema$FetchAuthSchemaResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchAuthSchemaResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchAuthSchemaResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$FetchAuthSchemaResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Providers$Connectors$Versions$Fetchauthschema;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Providers$Connectors$Versions$Fetchauthschema;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:fetchAuthSchema').replace(
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
        createAPIRequest<Schema$FetchAuthSchemaResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchAuthSchemaResponse>(parameters);
      }
    }

    /**
     * Gets details of a single connector version.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.providers.connectors.versions.get({
     *       // Required. Resource name of the form: `projects/x/locations/x/providers/x/connectors/x/versions/x` Only global location is supported for ConnectorVersion resource.
     *       name: 'projects/my-project/locations/my-location/providers/my-provider/connectors/my-connector/versions/my-version',
     *       // Specifies which fields of the ConnectorVersion are returned in the response. Defaults to `CUSTOMER` view.
     *       view: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "authConfigTemplates": [],
     *   //   "authOverrideEnabled": false,
     *   //   "configVariableTemplates": [],
     *   //   "connectorInfraConfig": {},
     *   //   "createTime": "my_createTime",
     *   //   "destinationConfigTemplates": [],
     *   //   "displayName": "my_displayName",
     *   //   "egressControlConfig": {},
     *   //   "eventingConfigTemplate": {},
     *   //   "isCustomActionsSupported": false,
     *   //   "isCustomEntitiesSupported": false,
     *   //   "labels": {},
     *   //   "launchStage": "my_launchStage",
     *   //   "name": "my_name",
     *   //   "releaseVersion": "my_releaseVersion",
     *   //   "roleGrant": {},
     *   //   "roleGrants": [],
     *   //   "schemaRefreshConfig": {},
     *   //   "sslConfigTemplate": {},
     *   //   "supportedRuntimeFeatures": {},
     *   //   "supportedStandardActions": [],
     *   //   "supportedStandardEntities": [],
     *   //   "unsupportedConnectionTypes": [],
     *   //   "updateTime": "my_updateTime",
     *   //   "vpcscConfig": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Providers$Connectors$Versions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Providers$Connectors$Versions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ConnectorVersion>>;
    get(
      params: Params$Resource$Projects$Locations$Providers$Connectors$Versions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Providers$Connectors$Versions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ConnectorVersion>,
      callback: BodyResponseCallback<Schema$ConnectorVersion>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Providers$Connectors$Versions$Get,
      callback: BodyResponseCallback<Schema$ConnectorVersion>
    ): void;
    get(callback: BodyResponseCallback<Schema$ConnectorVersion>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Providers$Connectors$Versions$Get
        | BodyResponseCallback<Schema$ConnectorVersion>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ConnectorVersion>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ConnectorVersion>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ConnectorVersion>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Providers$Connectors$Versions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Providers$Connectors$Versions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
        createAPIRequest<Schema$ConnectorVersion>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ConnectorVersion>(parameters);
      }
    }

    /**
     * Lists Connector Versions in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.providers.connectors.versions.list({
     *       // Page size.
     *       pageSize: 'placeholder-value',
     *       // Page token.
     *       pageToken: 'placeholder-value',
     *
     *       parent:
     *         'projects/my-project/locations/my-location/providers/my-provider/connectors/my-connector',
     *       // Specifies which fields of the ConnectorVersion are returned in the response. Defaults to `BASIC` view.
     *       view: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "connectorVersions": [],
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
      params: Params$Resource$Projects$Locations$Providers$Connectors$Versions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Providers$Connectors$Versions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListConnectorVersionsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Providers$Connectors$Versions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Providers$Connectors$Versions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConnectorVersionsResponse>,
      callback: BodyResponseCallback<Schema$ListConnectorVersionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Providers$Connectors$Versions$List,
      callback: BodyResponseCallback<Schema$ListConnectorVersionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListConnectorVersionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Providers$Connectors$Versions$List
        | BodyResponseCallback<Schema$ListConnectorVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConnectorVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConnectorVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListConnectorVersionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Providers$Connectors$Versions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Providers$Connectors$Versions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/versions').replace(
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
        createAPIRequest<Schema$ListConnectorVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConnectorVersionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Providers$Connectors$Versions$Fetchauthschema
    extends StandardParameters {
    /**
     * Required. Parent resource of the Connector Version, of the form: `projects/x/locations/x/providers/x/connectors/x/versions/x`
     */
    name?: string;
    /**
     * Optional. View of the AuthSchema. The default value is BASIC.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Providers$Connectors$Versions$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the form: `projects/x/locations/x/providers/x/connectors/x/versions/x` Only global location is supported for ConnectorVersion resource.
     */
    name?: string;
    /**
     * Specifies which fields of the ConnectorVersion are returned in the response. Defaults to `CUSTOMER` view.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Providers$Connectors$Versions$List
    extends StandardParameters {
    /**
     * Page size.
     */
    pageSize?: number;
    /**
     * Page token.
     */
    pageToken?: string;
    /**
     *
     */
    parent?: string;
    /**
     * Specifies which fields of the ConnectorVersion are returned in the response. Defaults to `BASIC` view.
     */
    view?: string;
  }

  export class Resource$Projects$Locations$Providers$Connectors$Versions$Eventtypes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets details of a single event type.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.providers.connectors.versions.eventtypes.get(
     *       {
     *         // Required. Resource name of the form: `projects/x/locations/x/providers/x/connectors/x/versions/x/eventtypes/x` Only global location is supported for EventType resource.
     *         name: 'projects/my-project/locations/my-location/providers/my-provider/connectors/my-connector/versions/my-version/eventtypes/my-eventtype',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "enrichedEventPayloadSchema": "my_enrichedEventPayloadSchema",
     *   //   "entityType": "my_entityType",
     *   //   "eventPayloadSchema": "my_eventPayloadSchema",
     *   //   "eventTypeId": "my_eventTypeId",
     *   //   "idPath": "my_idPath",
     *   //   "name": "my_name",
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
      params: Params$Resource$Projects$Locations$Providers$Connectors$Versions$Eventtypes$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Providers$Connectors$Versions$Eventtypes$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EventType>>;
    get(
      params: Params$Resource$Projects$Locations$Providers$Connectors$Versions$Eventtypes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Providers$Connectors$Versions$Eventtypes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$EventType>,
      callback: BodyResponseCallback<Schema$EventType>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Providers$Connectors$Versions$Eventtypes$Get,
      callback: BodyResponseCallback<Schema$EventType>
    ): void;
    get(callback: BodyResponseCallback<Schema$EventType>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Providers$Connectors$Versions$Eventtypes$Get
        | BodyResponseCallback<Schema$EventType>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventType>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventType>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EventType>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Providers$Connectors$Versions$Eventtypes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Providers$Connectors$Versions$Eventtypes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
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
        createAPIRequest<Schema$EventType>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventType>(parameters);
      }
    }

    /**
     * Lists Event Types in a given Connector Version.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const connectors = google.connectors('v1');
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
     *     await connectors.projects.locations.providers.connectors.versions.eventtypes.list(
     *       {
     *         // Page size.
     *         pageSize: 'placeholder-value',
     *         // Page token.
     *         pageToken: 'placeholder-value',
     *         // Required. Parent resource of the connectors, of the form: `projects/x/locations/x/providers/x/connectors/x/versions/x` Only global location is supported for EventType resource.
     *         parent:
     *           'projects/my-project/locations/my-location/providers/my-provider/connectors/my-connector/versions/my-version',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "eventTypes": [],
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
      params: Params$Resource$Projects$Locations$Providers$Connectors$Versions$Eventtypes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Providers$Connectors$Versions$Eventtypes$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListEventTypesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Providers$Connectors$Versions$Eventtypes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Providers$Connectors$Versions$Eventtypes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEventTypesResponse>,
      callback: BodyResponseCallback<Schema$ListEventTypesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Providers$Connectors$Versions$Eventtypes$List,
      callback: BodyResponseCallback<Schema$ListEventTypesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListEventTypesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Providers$Connectors$Versions$Eventtypes$List
        | BodyResponseCallback<Schema$ListEventTypesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEventTypesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEventTypesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListEventTypesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Providers$Connectors$Versions$Eventtypes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Providers$Connectors$Versions$Eventtypes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/eventtypes').replace(
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
        createAPIRequest<Schema$ListEventTypesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEventTypesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Providers$Connectors$Versions$Eventtypes$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the form: `projects/x/locations/x/providers/x/connectors/x/versions/x/eventtypes/x` Only global location is supported for EventType resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Providers$Connectors$Versions$Eventtypes$List
    extends StandardParameters {
    /**
     * Page size.
     */
    pageSize?: number;
    /**
     * Page token.
     */
    pageToken?: string;
    /**
     * Required. Parent resource of the connectors, of the form: `projects/x/locations/x/providers/x/connectors/x/versions/x` Only global location is supported for EventType resource.
     */
    parent?: string;
  }
}
