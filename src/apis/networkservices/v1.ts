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

export namespace networkservices_v1 {
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
   * Network Services API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const networkservices = google.networkservices('v1');
   * ```
   */
  export class Networkservices {
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
   * `AuthzExtension` is a resource that allows traffic forwarding to a callout backend service to make an authorization decision.
   */
  export interface Schema$AuthzExtension {
    /**
     * Required. The `:authority` header in the gRPC request sent from Envoy to the extension service.
     */
    authority?: string | null;
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. A human-readable description of the resource.
     */
    description?: string | null;
    /**
     * Optional. Determines how the proxy behaves if the call to the extension fails or times out. When set to `TRUE`, request or response processing continues without error. Any subsequent extensions in the extension chain are also executed. When set to `FALSE` or the default setting of `FALSE` is used, one of the following happens: * If response headers have not been delivered to the downstream client, a generic 500 error is returned to the client. The error response can be tailored by configuring a custom error response in the load balancer. * If response headers have been delivered, then the HTTP stream to the downstream client is reset.
     */
    failOpen?: boolean | null;
    /**
     * Optional. List of the HTTP headers to forward to the extension (from the client). If omitted, all headers are sent. Each element is a string indicating the header name.
     */
    forwardHeaders?: string[] | null;
    /**
     * Optional. Set of labels associated with the `AuthzExtension` resource. The format must comply with [the requirements for labels](/compute/docs/labeling-resources#requirements) for Google Cloud resources.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. Supported values: `INTERNAL_MANAGED`, `EXTERNAL_MANAGED`. For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service).
     */
    loadBalancingScheme?: string | null;
    /**
     * Optional. The metadata provided here is included as part of the `metadata_context` (of type `google.protobuf.Struct`) in the `ProcessingRequest` message sent to the extension server. The metadata is available under the namespace `com.google.authz_extension.`. The following variables are supported in the metadata Struct: `{forwarding_rule_id\}` - substituted with the forwarding rule's fully qualified resource name.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Required. Identifier. Name of the `AuthzExtension` resource in the following format: `projects/{project\}/locations/{location\}/authzExtensions/{authz_extension\}`.
     */
    name?: string | null;
    /**
     * Required. The reference to the service that runs the extension. To configure a callout extension, `service` must be a fully-qualified reference to a [backend service](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices) in the format: `https://www.googleapis.com/compute/v1/projects/{project\}/regions/{region\}/backendServices/{backendService\}` or `https://www.googleapis.com/compute/v1/projects/{project\}/global/backendServices/{backendService\}`.
     */
    service?: string | null;
    /**
     * Required. Specifies the timeout for each individual message on the stream. The timeout must be between 10-10000 milliseconds.
     */
    timeout?: string | null;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string | null;
    /**
     * Optional. The format of communication supported by the callout extension. If not specified, the default value `EXT_PROC_GRPC` is used.
     */
    wireFormat?: string | null;
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
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * A definition of a matcher that selects endpoints to which the policies should be applied.
   */
  export interface Schema$EndpointMatcher {
    /**
     * The matcher is based on node metadata presented by xDS clients.
     */
    metadataLabelMatcher?: Schema$EndpointMatcherMetadataLabelMatcher;
  }
  /**
   * The matcher that is based on node metadata presented by xDS clients.
   */
  export interface Schema$EndpointMatcherMetadataLabelMatcher {
    /**
     * Specifies how matching should be done. Supported values are: MATCH_ANY: At least one of the Labels specified in the matcher should match the metadata presented by xDS client. MATCH_ALL: The metadata presented by the xDS client should contain all of the labels specified here. The selection is determined based on the best match. For example, suppose there are three EndpointPolicy resources P1, P2 and P3 and if P1 has a the matcher as MATCH_ANY , P2 has MATCH_ALL , and P3 has MATCH_ALL . If a client with label connects, the config from P1 will be selected. If a client with label connects, the config from P2 will be selected. If a client with label connects, the config from P3 will be selected. If there is more than one best match, (for example, if a config P4 with selector exists and if a client with label connects), pick up the one with older creation time.
     */
    metadataLabelMatchCriteria?: string | null;
    /**
     * The list of label value pairs that must match labels in the provided metadata based on filterMatchCriteria This list can have at most 64 entries. The list can be empty if the match criteria is MATCH_ANY, to specify a wildcard match (i.e this matches any client).
     */
    metadataLabels?: Schema$EndpointMatcherMetadataLabelMatcherMetadataLabels[];
  }
  /**
   * Defines a name-pair value for a single label.
   */
  export interface Schema$EndpointMatcherMetadataLabelMatcherMetadataLabels {
    /**
     * Required. Label name presented as key in xDS Node Metadata.
     */
    labelName?: string | null;
    /**
     * Required. Label value presented as value corresponding to the above key, in xDS Node Metadata.
     */
    labelValue?: string | null;
  }
  /**
   * EndpointPolicy is a resource that helps apply desired configuration on the endpoints that match specific criteria. For example, this resource can be used to apply "authentication config" an all endpoints that serve on port 8080.
   */
  export interface Schema$EndpointPolicy {
    /**
     * Optional. This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints. Refer to Authorization. If this field is not specified, authorization is disabled(no authz checks) for this endpoint.
     */
    authorizationPolicy?: string | null;
    /**
     * Optional. A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints. More specifically, it is applied to the outgoing traffic from the proxy to the endpoint. This is typically used for sidecar model where the proxy identifies itself as endpoint to the control plane, with the connection between sidecar and endpoint requiring authentication. If this field is not set, authentication is disabled(open). Applicable only when EndpointPolicyType is SIDECAR_PROXY.
     */
    clientTlsPolicy?: string | null;
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. A free-text description of the resource. Max length 1024 characters.
     */
    description?: string | null;
    /**
     * Required. A matcher that selects endpoints to which the policies should be applied.
     */
    endpointMatcher?: Schema$EndpointMatcher;
    /**
     * Optional. Set of label tags associated with the EndpointPolicy resource.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. Name of the EndpointPolicy resource. It matches pattern `projects/{project\}/locations/global/endpointPolicies/{endpoint_policy\}`.
     */
    name?: string | null;
    /**
     * Optional. A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends. If this field is not set, authentication is disabled(open) for this endpoint.
     */
    serverTlsPolicy?: string | null;
    /**
     * Optional. Port selector for the (matched) endpoints. If no port selector is provided, the matched config is applied to all ports.
     */
    trafficPortSelector?: Schema$TrafficPortSelector;
    /**
     * Required. The type of endpoint policy. This is primarily used to validate the configuration.
     */
    type?: string | null;
    /**
     * Output only. The timestamp when the resource was updated.
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
   * A single extension chain wrapper that contains the match conditions and extensions to execute.
   */
  export interface Schema$ExtensionChain {
    /**
     * Required. A set of extensions to execute for the matching request. At least one extension is required. Up to 3 extensions can be defined for each extension chain for `LbTrafficExtension` resource. `LbRouteExtension` and `LbEdgeExtension` chains are limited to 1 extension per extension chain.
     */
    extensions?: Schema$ExtensionChainExtension[];
    /**
     * Required. Conditions under which this chain is invoked for a request.
     */
    matchCondition?: Schema$ExtensionChainMatchCondition;
    /**
     * Required. The name for this extension chain. The name is logged as part of the HTTP request logs. The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens, and can have a maximum length of 63 characters. Additionally, the first character must be a letter and the last a letter or a number.
     */
    name?: string | null;
  }
  /**
   * A single extension in the chain to execute for the matching request.
   */
  export interface Schema$ExtensionChainExtension {
    /**
     * Optional. The `:authority` header in the gRPC request sent from Envoy to the extension service. Required for Callout extensions. This field is not supported for plugin extensions. Setting it results in a validation error.
     */
    authority?: string | null;
    /**
     * Optional. Determines how the proxy behaves if the call to the extension fails or times out. When set to `TRUE`, request or response processing continues without error. Any subsequent extensions in the extension chain are also executed. When set to `FALSE` or the default setting of `FALSE` is used, one of the following happens: * If response headers have not been delivered to the downstream client, a generic 500 error is returned to the client. The error response can be tailored by configuring a custom error response in the load balancer. * If response headers have been delivered, then the HTTP stream to the downstream client is reset.
     */
    failOpen?: boolean | null;
    /**
     * Optional. List of the HTTP headers to forward to the extension (from the client or backend). If omitted, all headers are sent. Each element is a string indicating the header name.
     */
    forwardHeaders?: string[] | null;
    /**
     * Optional. The metadata provided here is included as part of the `metadata_context` (of type `google.protobuf.Struct`) in the `ProcessingRequest` message sent to the extension server. The metadata is available under the namespace `com.google....`. For example: `com.google.lb_traffic_extension.lbtrafficextension1.chain1.ext1`. The following variables are supported in the metadata: `{forwarding_rule_id\}` - substituted with the forwarding rule's fully qualified resource name. This field must not be set for plugin extensions. Setting it results in a validation error. You can set metadata at either the resource level or the extension level. The extension level metadata is recommended because you can pass a different set of metadata through each extension to the backend. This field is subject to following limitations: * The total size of the metadata must be less than 1KiB. * The total number of keys in the metadata must be less than 16. * The length of each key must be less than 64 characters. * The length of each value must be less than 1024 characters. * All values must be strings.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Required. The name for this extension. The name is logged as part of the HTTP request logs. The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens, and can have a maximum length of 63 characters. Additionally, the first character must be a letter and the last a letter or a number.
     */
    name?: string | null;
    /**
     * Required. The reference to the service that runs the extension. To configure a callout extension, `service` must be a fully-qualified reference to a [backend service](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices) in the format: `https://www.googleapis.com/compute/v1/projects/{project\}/regions/{region\}/backendServices/{backendService\}` or `https://www.googleapis.com/compute/v1/projects/{project\}/global/backendServices/{backendService\}`. To configure a plugin extension, `service` must be a reference to a [`WasmPlugin` resource](https://cloud.google.com/service-extensions/docs/reference/rest/v1beta1/projects.locations.wasmPlugins) in the format: `projects/{project\}/locations/{location\}/wasmPlugins/{plugin\}` or `//networkservices.googleapis.com/projects/{project\}/locations/{location\}/wasmPlugins/{wasmPlugin\}`. Plugin extensions are currently supported for the `LbTrafficExtension`, the `LbRouteExtension`, and the `LbEdgeExtension` resources.
     */
    service?: string | null;
    /**
     * Optional. A set of events during request or response processing for which this extension is called. For the `LbTrafficExtension` resource, this field is required. For the `LbRouteExtension` resource, this field is optional. If unspecified, `REQUEST_HEADERS` event is assumed as supported. For the `LbEdgeExtension` resource, this field is required and must only contain `REQUEST_HEADERS` event.
     */
    supportedEvents?: string[] | null;
    /**
     * Optional. Specifies the timeout for each individual message on the stream. The timeout must be between `10`-`10000` milliseconds. Required for callout extensions. This field is not supported for plugin extensions. Setting it results in a validation error.
     */
    timeout?: string | null;
  }
  /**
   * Conditions under which this chain is invoked for a request.
   */
  export interface Schema$ExtensionChainMatchCondition {
    /**
     * Required. A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed. For more information, see [CEL matcher language reference](https://cloud.google.com/service-extensions/docs/cel-matcher-language-reference).
     */
    celExpression?: string | null;
  }
  /**
   * Gateway represents the configuration for a proxy, typically a load balancer. It captures the ip:port over which the services are exposed by the proxy, along with any policy configurations. Routes have reference to to Gateways to dictate how requests should be routed by this Gateway.
   */
  export interface Schema$Gateway {
    /**
     * Optional. Zero or one IPv4 or IPv6 address on which the Gateway will receive the traffic. When no address is provided, an IP from the subnetwork is allocated This field only applies to gateways of type 'SECURE_WEB_GATEWAY'. Gateways of type 'OPEN_MESH' listen on 0.0.0.0 for IPv4 and :: for IPv6.
     */
    addresses?: string[] | null;
    /**
     * Optional. A fully-qualified Certificates URL reference. The proxy presents a Certificate (selected based on SNI) when establishing a TLS connection. This feature only applies to gateways of type 'SECURE_WEB_GATEWAY'.
     */
    certificateUrls?: string[] | null;
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. A free-text description of the resource. Max length 1024 characters.
     */
    description?: string | null;
    /**
     * Optional. Determines if envoy will insert internal debug headers into upstream requests. Other Envoy headers may still be injected. By default, envoy will not insert any debug headers.
     */
    envoyHeaders?: string | null;
    /**
     * Optional. A fully-qualified GatewaySecurityPolicy URL reference. Defines how a server should apply security policy to inbound (VM to Proxy) initiated connections. For example: `projects/x/locations/x/gatewaySecurityPolicies/swg-policy`. This policy is specific to gateways of type 'SECURE_WEB_GATEWAY'.
     */
    gatewaySecurityPolicy?: string | null;
    /**
     * Optional. The IP Version that will be used by this gateway. Valid options are IPV4 or IPV6. Default is IPV4.
     */
    ipVersion?: string | null;
    /**
     * Optional. Set of label tags associated with the Gateway resource.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. Name of the Gateway resource. It matches pattern `projects/x/locations/x/gateways/`.
     */
    name?: string | null;
    /**
     * Optional. The relative resource name identifying the VPC network that is using this configuration. For example: `projects/x/global/networks/network-1`. Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.
     */
    network?: string | null;
    /**
     * Required. One or more port numbers (1-65535), on which the Gateway will receive traffic. The proxy binds to the specified ports. Gateways of type 'SECURE_WEB_GATEWAY' are limited to 5 ports. Gateways of type 'OPEN_MESH' listen on 0.0.0.0 for IPv4 and :: for IPv6 and support multiple ports.
     */
    ports?: number[] | null;
    /**
     * Optional. The routing mode of the Gateway. This field is configurable only for gateways of type SECURE_WEB_GATEWAY. This field is required for gateways of type SECURE_WEB_GATEWAY.
     */
    routingMode?: string | null;
    /**
     * Optional. Scope determines how configuration across multiple Gateway instances are merged. The configuration for multiple Gateway instances with the same scope will be merged as presented as a single configuration to the proxy/load balancer. Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.
     */
    scope?: string | null;
    /**
     * Output only. Server-defined URL of this resource
     */
    selfLink?: string | null;
    /**
     * Optional. A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled.
     */
    serverTlsPolicy?: string | null;
    /**
     * Optional. The relative resource name identifying the subnetwork in which this SWG is allocated. For example: `projects/x/regions/us-central1/subnetworks/network-1` Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY".
     */
    subnetwork?: string | null;
    /**
     * Immutable. The type of the customer managed gateway. This field is required. If unspecified, an error is returned.
     */
    type?: string | null;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string | null;
  }
  /**
   * GatewayRouteView defines view-only resource for Routes to a Gateway
   */
  export interface Schema$GatewayRouteView {
    /**
     * Output only. Identifier. Full path name of the GatewayRouteView resource. Format: projects/{project_number\}/locations/{location\}/gateways/{gateway\}/routeViews/{route_view\}
     */
    name?: string | null;
    /**
     * Output only. The resource id for the route.
     */
    routeId?: string | null;
    /**
     * Output only. Location where the route exists.
     */
    routeLocation?: string | null;
    /**
     * Output only. Project number where the route exists.
     */
    routeProjectNumber?: string | null;
    /**
     * Output only. Type of the route: HttpRoute,GrpcRoute,TcpRoute, or TlsRoute
     */
    routeType?: string | null;
  }
  /**
   * GrpcRoute is the resource defining how gRPC traffic routed by a Mesh or Gateway resource is routed.
   */
  export interface Schema$GrpcRoute {
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. A free-text description of the resource. Max length 1024 characters.
     */
    description?: string | null;
    /**
     * Optional. Gateways defines a list of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/x/locations/global/gateways/`
     */
    gateways?: string[] | null;
    /**
     * Required. Service hostnames with an optional port for which this route describes traffic. Format: [:] Hostname is the fully qualified domain name of a network host. This matches the RFC 1123 definition of a hostname with 2 notable exceptions: - IPs are not allowed. - A hostname may be prefixed with a wildcard label (`*.`). The wildcard label must appear by itself as the first label. Hostname can be "precise" which is a domain name without the terminating dot of a network host (e.g. `foo.example.com`) or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. `*.example.com`). Note that as per RFC1035 and RFC1123, a label must consist of lower case alphanumeric characters or '-', and must start and end with an alphanumeric character. No other punctuation is allowed. The routes associated with a Mesh or Gateway must have unique hostnames. If you attempt to attach multiple routes with conflicting hostnames, the configuration will be rejected. For example, while it is acceptable for routes for the hostnames `*.foo.bar.com` and `*.bar.com` to be associated with the same route, it is not possible to associate two routes both with `*.bar.com` or both with `bar.com`. If a port is specified, then gRPC clients must use the channel URI with the port to match this rule (i.e. "xds:///service:123"), otherwise they must supply the URI without a port (i.e. "xds:///service").
     */
    hostnames?: string[] | null;
    /**
     * Optional. Set of label tags associated with the GrpcRoute resource.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. Meshes defines a list of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/x/locations/global/meshes/`
     */
    meshes?: string[] | null;
    /**
     * Identifier. Name of the GrpcRoute resource. It matches pattern `projects/x/locations/global/grpcRoutes/`
     */
    name?: string | null;
    /**
     * Required. A list of detailed rules defining how to route traffic. Within a single GrpcRoute, the GrpcRoute.RouteAction associated with the first matching GrpcRoute.RouteRule will be executed. At least one rule must be supplied.
     */
    rules?: Schema$GrpcRouteRouteRule[];
    /**
     * Output only. Server-defined URL of this resource
     */
    selfLink?: string | null;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string | null;
  }
  /**
   * The destination to which traffic will be routed.
   */
  export interface Schema$GrpcRouteDestination {
    /**
     * Required. The URL of a destination service to which to route traffic. Must refer to either a BackendService or ServiceDirectoryService.
     */
    serviceName?: string | null;
    /**
     * Optional. Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: - weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weights are specified for any one service name, they need to be specified for all of them. If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.
     */
    weight?: number | null;
  }
  /**
   * The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced on a percentage of requests before sending those requests to the destination service. Similarly requests from clients can be aborted by for a percentage of requests.
   */
  export interface Schema$GrpcRouteFaultInjectionPolicy {
    /**
     * The specification for aborting to client requests.
     */
    abort?: Schema$GrpcRouteFaultInjectionPolicyAbort;
    /**
     * The specification for injecting delay to client requests.
     */
    delay?: Schema$GrpcRouteFaultInjectionPolicyDelay;
  }
  /**
   * Specification of how client requests are aborted as part of fault injection before being sent to a destination.
   */
  export interface Schema$GrpcRouteFaultInjectionPolicyAbort {
    /**
     * The HTTP status code used to abort the request. The value must be between 200 and 599 inclusive.
     */
    httpStatus?: number | null;
    /**
     * The percentage of traffic which will be aborted. The value must be between [0, 100]
     */
    percentage?: number | null;
  }
  /**
   * Specification of how client requests are delayed as part of fault injection before being sent to a destination.
   */
  export interface Schema$GrpcRouteFaultInjectionPolicyDelay {
    /**
     * Specify a fixed delay before forwarding the request.
     */
    fixedDelay?: string | null;
    /**
     * The percentage of traffic on which delay will be injected. The value must be between [0, 100]
     */
    percentage?: number | null;
  }
  /**
   * A match against a collection of headers.
   */
  export interface Schema$GrpcRouteHeaderMatch {
    /**
     * Required. The key of the header.
     */
    key?: string | null;
    /**
     * Optional. Specifies how to match against the value of the header. If not specified, a default value of EXACT is used.
     */
    type?: string | null;
    /**
     * Required. The value of the header.
     */
    value?: string | null;
  }
  /**
   * Specifies a match against a method.
   */
  export interface Schema$GrpcRouteMethodMatch {
    /**
     * Optional. Specifies that matches are case sensitive. The default value is true. case_sensitive must not be used with a type of REGULAR_EXPRESSION.
     */
    caseSensitive?: boolean | null;
    /**
     * Required. Name of the method to match against. If unspecified, will match all methods.
     */
    grpcMethod?: string | null;
    /**
     * Required. Name of the service to match against. If unspecified, will match all services.
     */
    grpcService?: string | null;
    /**
     * Optional. Specifies how to match against the name. If not specified, a default value of "EXACT" is used.
     */
    type?: string | null;
  }
  /**
   * The specifications for retries. Specifies one or more conditions for which this retry rule applies. Valid values are:
   */
  export interface Schema$GrpcRouteRetryPolicy {
    /**
     * Specifies the allowed number of retries. This number must be \> 0. If not specified, default to 1.
     */
    numRetries?: number | null;
    /**
     * - connect-failure: Router will retry on failures connecting to Backend Services, for example due to connection timeouts. - refused-stream: Router will retry if the backend service resets the stream with a REFUSED_STREAM error code. This reset type indicates that it is safe to retry. - cancelled: Router will retry if the gRPC status code in the response header is set to cancelled - deadline-exceeded: Router will retry if the gRPC status code in the response header is set to deadline-exceeded - resource-exhausted: Router will retry if the gRPC status code in the response header is set to resource-exhausted - unavailable: Router will retry if the gRPC status code in the response header is set to unavailable
     */
    retryConditions?: string[] | null;
  }
  /**
   * Specifies how to route matched traffic.
   */
  export interface Schema$GrpcRouteRouteAction {
    /**
     * Optional. The destination services to which traffic should be forwarded. If multiple destinations are specified, traffic will be split between Backend Service(s) according to the weight field of these destinations.
     */
    destinations?: Schema$GrpcRouteDestination[];
    /**
     * Optional. The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced on a percentage of requests before sending those requests to the destination service. Similarly requests from clients can be aborted by for a percentage of requests. timeout and retry_policy will be ignored by clients that are configured with a fault_injection_policy
     */
    faultInjectionPolicy?: Schema$GrpcRouteFaultInjectionPolicy;
    /**
     * Optional. Specifies the idle timeout for the selected route. The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 1 hour. If set to 0s, the timeout will be disabled.
     */
    idleTimeout?: string | null;
    /**
     * Optional. Specifies the retry policy associated with this route.
     */
    retryPolicy?: Schema$GrpcRouteRetryPolicy;
    /**
     * Optional. Specifies cookie-based stateful session affinity.
     */
    statefulSessionAffinity?: Schema$GrpcRouteStatefulSessionAffinityPolicy;
    /**
     * Optional. Specifies the timeout for selected route. Timeout is computed from the time the request has been fully processed (i.e. end of stream) up until the response has been completely processed. Timeout includes all retries.
     */
    timeout?: string | null;
  }
  /**
   * Criteria for matching traffic. A RouteMatch will be considered to match when all supplied fields match.
   */
  export interface Schema$GrpcRouteRouteMatch {
    /**
     * Optional. Specifies a collection of headers to match.
     */
    headers?: Schema$GrpcRouteHeaderMatch[];
    /**
     * Optional. A gRPC method to match against. If this field is empty or omitted, will match all methods.
     */
    method?: Schema$GrpcRouteMethodMatch;
  }
  /**
   * Describes how to route traffic.
   */
  export interface Schema$GrpcRouteRouteRule {
    /**
     * Required. A detailed rule defining how to route traffic. This field is required.
     */
    action?: Schema$GrpcRouteRouteAction;
    /**
     * Optional. Matches define conditions used for matching the rule against incoming gRPC requests. Each match is independent, i.e. this rule will be matched if ANY one of the matches is satisfied. If no matches field is specified, this rule will unconditionally match traffic.
     */
    matches?: Schema$GrpcRouteRouteMatch[];
  }
  /**
   * The specification for cookie-based stateful session affinity where the date plane supplies a “session cookie” with the name "GSSA" which encodes a specific destination host and each request containing that cookie will be directed to that host as long as the destination host remains up and healthy. The gRPC proxyless mesh library or sidecar proxy will manage the session cookie but the client application code is responsible for copying the cookie from each RPC in the session to the next.
   */
  export interface Schema$GrpcRouteStatefulSessionAffinityPolicy {
    /**
     * Required. The cookie TTL value for the Set-Cookie header generated by the data plane. The lifetime of the cookie may be set to a value from 0 to 86400 seconds (24 hours) inclusive. Set this to 0s to use a session cookie and disable cookie expiration.
     */
    cookieTtl?: string | null;
  }
  /**
   * HttpRoute is the resource defining how HTTP traffic should be routed by a Mesh or Gateway resource.
   */
  export interface Schema$HttpRoute {
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. A free-text description of the resource. Max length 1024 characters.
     */
    description?: string | null;
    /**
     * Optional. Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/x/locations/global/gateways/`
     */
    gateways?: string[] | null;
    /**
     * Required. Hostnames define a set of hosts that should match against the HTTP host header to select a HttpRoute to process the request. Hostname is the fully qualified domain name of a network host, as defined by RFC 1123 with the exception that: - IPs are not allowed. - A hostname may be prefixed with a wildcard label (`*.`). The wildcard label must appear by itself as the first label. Hostname can be "precise" which is a domain name without the terminating dot of a network host (e.g. `foo.example.com`) or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. `*.example.com`). Note that as per RFC1035 and RFC1123, a label must consist of lower case alphanumeric characters or '-', and must start and end with an alphanumeric character. No other punctuation is allowed. The routes associated with a Mesh or Gateways must have unique hostnames. If you attempt to attach multiple routes with conflicting hostnames, the configuration will be rejected. For example, while it is acceptable for routes for the hostnames `*.foo.bar.com` and `*.bar.com` to be associated with the same Mesh (or Gateways under the same scope), it is not possible to associate two routes both with `*.bar.com` or both with `bar.com`.
     */
    hostnames?: string[] | null;
    /**
     * Optional. Set of label tags associated with the HttpRoute resource.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/x/locations/global/meshes/` The attached Mesh should be of a type SIDECAR
     */
    meshes?: string[] | null;
    /**
     * Identifier. Name of the HttpRoute resource. It matches pattern `projects/x/locations/global/httpRoutes/http_route_name\>`.
     */
    name?: string | null;
    /**
     * Required. Rules that define how traffic is routed and handled. Rules will be matched sequentially based on the RouteMatch specified for the rule.
     */
    rules?: Schema$HttpRouteRouteRule[];
    /**
     * Output only. Server-defined URL of this resource
     */
    selfLink?: string | null;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string | null;
  }
  /**
   * The Specification for allowing client side cross-origin requests.
   */
  export interface Schema$HttpRouteCorsPolicy {
    /**
     * In response to a preflight request, setting this to true indicates that the actual request can include user credentials. This translates to the Access-Control-Allow-Credentials header. Default value is false.
     */
    allowCredentials?: boolean | null;
    /**
     * Specifies the content for Access-Control-Allow-Headers header.
     */
    allowHeaders?: string[] | null;
    /**
     * Specifies the content for Access-Control-Allow-Methods header.
     */
    allowMethods?: string[] | null;
    /**
     * Specifies the regular expression patterns that match allowed origins. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax.
     */
    allowOriginRegexes?: string[] | null;
    /**
     * Specifies the list of origins that will be allowed to do CORS requests. An origin is allowed if it matches either an item in allow_origins or an item in allow_origin_regexes.
     */
    allowOrigins?: string[] | null;
    /**
     * If true, the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect.
     */
    disabled?: boolean | null;
    /**
     * Specifies the content for Access-Control-Expose-Headers header.
     */
    exposeHeaders?: string[] | null;
    /**
     * Specifies how long result of a preflight request can be cached in seconds. This translates to the Access-Control-Max-Age header.
     */
    maxAge?: string | null;
  }
  /**
   * Specifications of a destination to which the request should be routed to.
   */
  export interface Schema$HttpRouteDestination {
    /**
     * Optional. The specification for modifying the headers of a matching request prior to delivery of the request to the destination. If HeaderModifiers are set on both the Destination and the RouteAction, they will be merged. Conflicts between the two will not be resolved on the configuration.
     */
    requestHeaderModifier?: Schema$HttpRouteHeaderModifier;
    /**
     * Optional. The specification for modifying the headers of a response prior to sending the response back to the client. If HeaderModifiers are set on both the Destination and the RouteAction, they will be merged. Conflicts between the two will not be resolved on the configuration.
     */
    responseHeaderModifier?: Schema$HttpRouteHeaderModifier;
    /**
     * The URL of a BackendService to route traffic to.
     */
    serviceName?: string | null;
    /**
     * Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: - weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weights are specified for any one service name, they need to be specified for all of them. If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.
     */
    weight?: number | null;
  }
  /**
   * The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced by client proxy on a percentage of requests before sending those requests to the destination service. Similarly requests can be aborted by client proxy for a percentage of requests.
   */
  export interface Schema$HttpRouteFaultInjectionPolicy {
    /**
     * The specification for aborting to client requests.
     */
    abort?: Schema$HttpRouteFaultInjectionPolicyAbort;
    /**
     * The specification for injecting delay to client requests.
     */
    delay?: Schema$HttpRouteFaultInjectionPolicyDelay;
  }
  /**
   * Specification of how client requests are aborted as part of fault injection before being sent to a destination.
   */
  export interface Schema$HttpRouteFaultInjectionPolicyAbort {
    /**
     * The HTTP status code used to abort the request. The value must be between 200 and 599 inclusive.
     */
    httpStatus?: number | null;
    /**
     * The percentage of traffic which will be aborted. The value must be between [0, 100]
     */
    percentage?: number | null;
  }
  /**
   * Specification of how client requests are delayed as part of fault injection before being sent to a destination.
   */
  export interface Schema$HttpRouteFaultInjectionPolicyDelay {
    /**
     * Specify a fixed delay before forwarding the request.
     */
    fixedDelay?: string | null;
    /**
     * The percentage of traffic on which delay will be injected. The value must be between [0, 100]
     */
    percentage?: number | null;
  }
  /**
   * Specifies how to select a route rule based on HTTP request headers.
   */
  export interface Schema$HttpRouteHeaderMatch {
    /**
     * The value of the header should match exactly the content of exact_match.
     */
    exactMatch?: string | null;
    /**
     * The name of the HTTP header to match against.
     */
    header?: string | null;
    /**
     * If specified, the match result will be inverted before checking. Default value is set to false.
     */
    invertMatch?: boolean | null;
    /**
     * The value of the header must start with the contents of prefix_match.
     */
    prefixMatch?: string | null;
    /**
     * A header with header_name must exist. The match takes place whether or not the header has a value.
     */
    presentMatch?: boolean | null;
    /**
     * If specified, the rule will match if the request header value is within the range.
     */
    rangeMatch?: Schema$HttpRouteHeaderMatchIntegerRange;
    /**
     * The value of the header must match the regular expression specified in regex_match. For regular expression grammar, please see: https://github.com/google/re2/wiki/Syntax
     */
    regexMatch?: string | null;
    /**
     * The value of the header must end with the contents of suffix_match.
     */
    suffixMatch?: string | null;
  }
  /**
   * Represents an integer value range.
   */
  export interface Schema$HttpRouteHeaderMatchIntegerRange {
    /**
     * End of the range (exclusive)
     */
    end?: number | null;
    /**
     * Start of the range (inclusive)
     */
    start?: number | null;
  }
  /**
   * The specification for modifying HTTP header in HTTP request and HTTP response.
   */
  export interface Schema$HttpRouteHeaderModifier {
    /**
     * Add the headers with given map where key is the name of the header, value is the value of the header.
     */
    add?: {[key: string]: string} | null;
    /**
     * Remove headers (matching by header names) specified in the list.
     */
    remove?: string[] | null;
    /**
     * Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header.
     */
    set?: {[key: string]: string} | null;
  }
  /**
   * Static HTTP response object to be returned.
   */
  export interface Schema$HttpRouteHttpDirectResponse {
    /**
     * Optional. Response body as bytes. Maximum body size is 4096B.
     */
    bytesBody?: string | null;
    /**
     * Required. Status to return as part of HTTP Response. Must be a positive integer.
     */
    status?: number | null;
    /**
     * Optional. Response body as a string. Maximum body length is 1024 characters.
     */
    stringBody?: string | null;
  }
  /**
   * Specifications to match a query parameter in the request.
   */
  export interface Schema$HttpRouteQueryParameterMatch {
    /**
     * The value of the query parameter must exactly match the contents of exact_match. Only one of exact_match, regex_match, or present_match must be set.
     */
    exactMatch?: string | null;
    /**
     * Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not. Only one of exact_match, regex_match, or present_match must be set.
     */
    presentMatch?: boolean | null;
    /**
     * The name of the query parameter to match.
     */
    queryParameter?: string | null;
    /**
     * The value of the query parameter must match the regular expression specified by regex_match. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax Only one of exact_match, regex_match, or present_match must be set.
     */
    regexMatch?: string | null;
  }
  /**
   * The specification for redirecting traffic.
   */
  export interface Schema$HttpRouteRedirect {
    /**
     * The host that will be used in the redirect response instead of the one that was supplied in the request.
     */
    hostRedirect?: string | null;
    /**
     * If set to true, the URL scheme in the redirected request is set to https. If set to false, the URL scheme of the redirected request will remain the same as that of the request. The default is set to false.
     */
    httpsRedirect?: boolean | null;
    /**
     * The path that will be used in the redirect response instead of the one that was supplied in the request. path_redirect can not be supplied together with prefix_redirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.
     */
    pathRedirect?: string | null;
    /**
     * The port that will be used in the redirected request instead of the one that was supplied in the request.
     */
    portRedirect?: number | null;
    /**
     * Indicates that during redirection, the matched prefix (or path) should be swapped with this value. This option allows URLs be dynamically created based on the request.
     */
    prefixRewrite?: string | null;
    /**
     * The HTTP Status code to use for the redirect.
     */
    responseCode?: string | null;
    /**
     * if set to true, any accompanying query portion of the original URL is removed prior to redirecting the request. If set to false, the query portion of the original URL is retained. The default is set to false.
     */
    stripQuery?: boolean | null;
  }
  /**
   * Specifies the policy on how requests are shadowed to a separate mirrored destination service. The proxy does not wait for responses from the shadow service. Prior to sending traffic to the shadow service, the host/authority header is suffixed with -shadow. Mirroring is currently not supported for Cloud Run destinations.
   */
  export interface Schema$HttpRouteRequestMirrorPolicy {
    /**
     * The destination the requests will be mirrored to. The weight of the destination will be ignored.
     */
    destination?: Schema$HttpRouteDestination;
    /**
     * Optional. The percentage of requests to get mirrored to the desired destination.
     */
    mirrorPercent?: number | null;
  }
  /**
   * The specifications for retries.
   */
  export interface Schema$HttpRouteRetryPolicy {
    /**
     * Specifies the allowed number of retries. This number must be \> 0. If not specified, default to 1.
     */
    numRetries?: number | null;
    /**
     * Specifies a non-zero timeout per retry attempt.
     */
    perTryTimeout?: string | null;
    /**
     * Specifies one or more conditions when this retry policy applies. Valid values are: 5xx: Proxy will attempt a retry if the destination service responds with any 5xx response code, of if the destination service does not respond at all, example: disconnect, reset, read timeout, connection failure and refused streams. gateway-error: Similar to 5xx, but only applies to response codes 502, 503, 504. reset: Proxy will attempt a retry if the destination service does not respond at all (disconnect/reset/read timeout) connect-failure: Proxy will retry on failures connecting to destination for example due to connection timeouts. retriable-4xx: Proxy will retry fro retriable 4xx response codes. Currently the only retriable error supported is 409. refused-stream: Proxy will retry if the destination resets the stream with a REFUSED_STREAM error code. This reset type indicates that it is safe to retry.
     */
    retryConditions?: string[] | null;
  }
  /**
   * The specifications for routing traffic and applying associated policies.
   */
  export interface Schema$HttpRouteRouteAction {
    /**
     * The specification for allowing client side cross-origin requests.
     */
    corsPolicy?: Schema$HttpRouteCorsPolicy;
    /**
     * The destination to which traffic should be forwarded.
     */
    destinations?: Schema$HttpRouteDestination[];
    /**
     * Optional. Static HTTP Response object to be returned regardless of the request.
     */
    directResponse?: Schema$HttpRouteHttpDirectResponse;
    /**
     * The specification for fault injection introduced into traffic to test the resiliency of clients to backend service failure. As part of fault injection, when clients send requests to a backend service, delays can be introduced on a percentage of requests before sending those requests to the backend service. Similarly requests from clients can be aborted for a percentage of requests. timeout and retry_policy will be ignored by clients that are configured with a fault_injection_policy
     */
    faultInjectionPolicy?: Schema$HttpRouteFaultInjectionPolicy;
    /**
     * Optional. Specifies the idle timeout for the selected route. The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 1 hour. If set to 0s, the timeout will be disabled.
     */
    idleTimeout?: string | null;
    /**
     * If set, the request is directed as configured by this field.
     */
    redirect?: Schema$HttpRouteRedirect;
    /**
     * The specification for modifying the headers of a matching request prior to delivery of the request to the destination. If HeaderModifiers are set on both the Destination and the RouteAction, they will be merged. Conflicts between the two will not be resolved on the configuration.
     */
    requestHeaderModifier?: Schema$HttpRouteHeaderModifier;
    /**
     * Specifies the policy on how requests intended for the routes destination are shadowed to a separate mirrored destination. Proxy will not wait for the shadow destination to respond before returning the response. Prior to sending traffic to the shadow service, the host/authority header is suffixed with -shadow.
     */
    requestMirrorPolicy?: Schema$HttpRouteRequestMirrorPolicy;
    /**
     * The specification for modifying the headers of a response prior to sending the response back to the client. If HeaderModifiers are set on both the Destination and the RouteAction, they will be merged. Conflicts between the two will not be resolved on the configuration.
     */
    responseHeaderModifier?: Schema$HttpRouteHeaderModifier;
    /**
     * Specifies the retry policy associated with this route.
     */
    retryPolicy?: Schema$HttpRouteRetryPolicy;
    /**
     * Optional. Specifies cookie-based stateful session affinity.
     */
    statefulSessionAffinity?: Schema$HttpRouteStatefulSessionAffinityPolicy;
    /**
     * Specifies the timeout for selected route. Timeout is computed from the time the request has been fully processed (i.e. end of stream) up until the response has been completely processed. Timeout includes all retries.
     */
    timeout?: string | null;
    /**
     * The specification for rewrite URL before forwarding requests to the destination.
     */
    urlRewrite?: Schema$HttpRouteURLRewrite;
  }
  /**
   * RouteMatch defines specifications used to match requests. If multiple match types are set, this RouteMatch will match if ALL type of matches are matched.
   */
  export interface Schema$HttpRouteRouteMatch {
    /**
     * The HTTP request path value should exactly match this value. Only one of full_path_match, prefix_match, or regex_match should be used.
     */
    fullPathMatch?: string | null;
    /**
     * Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched.
     */
    headers?: Schema$HttpRouteHeaderMatch[];
    /**
     * Specifies if prefix_match and full_path_match matches are case sensitive. The default value is false.
     */
    ignoreCase?: boolean | null;
    /**
     * The HTTP request path value must begin with specified prefix_match. prefix_match must begin with a /. Only one of full_path_match, prefix_match, or regex_match should be used.
     */
    prefixMatch?: string | null;
    /**
     * Specifies a list of query parameters to match against. ALL of the query parameters must be matched.
     */
    queryParameters?: Schema$HttpRouteQueryParameterMatch[];
    /**
     * The HTTP request path value must satisfy the regular expression specified by regex_match after removing any query parameters and anchor supplied with the original URL. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax Only one of full_path_match, prefix_match, or regex_match should be used.
     */
    regexMatch?: string | null;
  }
  /**
   * Specifies how to match traffic and how to route traffic when traffic is matched.
   */
  export interface Schema$HttpRouteRouteRule {
    /**
     * The detailed rule defining how to route matched traffic.
     */
    action?: Schema$HttpRouteRouteAction;
    /**
     * A list of matches define conditions used for matching the rule against incoming HTTP requests. Each match is independent, i.e. this rule will be matched if ANY one of the matches is satisfied. If no matches field is specified, this rule will unconditionally match traffic. If a default rule is desired to be configured, add a rule with no matches specified to the end of the rules list.
     */
    matches?: Schema$HttpRouteRouteMatch[];
  }
  /**
   * The specification for cookie-based stateful session affinity where the date plane supplies a “session cookie” with the name "GSSA" which encodes a specific destination host and each request containing that cookie will be directed to that host as long as the destination host remains up and healthy. The gRPC proxyless mesh library or sidecar proxy will manage the session cookie but the client application code is responsible for copying the cookie from each RPC in the session to the next.
   */
  export interface Schema$HttpRouteStatefulSessionAffinityPolicy {
    /**
     * Required. The cookie TTL value for the Set-Cookie header generated by the data plane. The lifetime of the cookie may be set to a value from 0 to 86400 seconds (24 hours) inclusive. Set this to 0s to use a session cookie and disable cookie expiration.
     */
    cookieTtl?: string | null;
  }
  /**
   * The specification for modifying the URL of the request, prior to forwarding the request to the destination.
   */
  export interface Schema$HttpRouteURLRewrite {
    /**
     * Prior to forwarding the request to the selected destination, the requests host header is replaced by this value.
     */
    hostRewrite?: string | null;
    /**
     * Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value.
     */
    pathPrefixRewrite?: string | null;
  }
  /**
   * `LbRouteExtension` is a resource that lets you control where traffic is routed to for a given request.
   */
  export interface Schema$LbRouteExtension {
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. A human-readable description of the resource.
     */
    description?: string | null;
    /**
     * Required. A set of ordered extension chains that contain the match conditions and extensions to execute. Match conditions for each extension chain are evaluated in sequence for a given request. The first extension chain that has a condition that matches the request is executed. Any subsequent extension chains do not execute. Limited to 5 extension chains per resource.
     */
    extensionChains?: Schema$ExtensionChain[];
    /**
     * Required. A list of references to the forwarding rules to which this service extension is attached. At least one forwarding rule is required. Only one `LbRouteExtension` resource can be associated with a forwarding rule.
     */
    forwardingRules?: string[] | null;
    /**
     * Optional. Set of labels associated with the `LbRouteExtension` resource. The format must comply with [the requirements for labels](https://cloud.google.com/compute/docs/labeling-resources#requirements) for Google Cloud resources.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. Supported values: `INTERNAL_MANAGED`, `EXTERNAL_MANAGED`. For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service).
     */
    loadBalancingScheme?: string | null;
    /**
     * Optional. The metadata provided here is included as part of the `metadata_context` (of type `google.protobuf.Struct`) in the `ProcessingRequest` message sent to the extension server. The metadata applies to all extensions in all extensions chains in this resource. The metadata is available under the key `com.google.lb_route_extension.`. The following variables are supported in the metadata: `{forwarding_rule_id\}` - substituted with the forwarding rule's fully qualified resource name. This field must not be set if at least one of the extension chains contains plugin extensions. Setting it results in a validation error. You can set metadata at either the resource level or the extension level. The extension level metadata is recommended because you can pass a different set of metadata through each extension to the backend.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Required. Identifier. Name of the `LbRouteExtension` resource in the following format: `projects/{project\}/locations/{location\}/lbRouteExtensions/{lb_route_extension\}`.
     */
    name?: string | null;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string | null;
  }
  /**
   * `LbTrafficExtension` is a resource that lets the extension service modify the headers and payloads of both requests and responses without impacting the choice of backend services or any other security policies associated with the backend service.
   */
  export interface Schema$LbTrafficExtension {
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. A human-readable description of the resource.
     */
    description?: string | null;
    /**
     * Required. A set of ordered extension chains that contain the match conditions and extensions to execute. Match conditions for each extension chain are evaluated in sequence for a given request. The first extension chain that has a condition that matches the request is executed. Any subsequent extension chains do not execute. Limited to 5 extension chains per resource.
     */
    extensionChains?: Schema$ExtensionChain[];
    /**
     * Optional. A list of references to the forwarding rules to which this service extension is attached. At least one forwarding rule is required. Only one `LbTrafficExtension` resource can be associated with a forwarding rule.
     */
    forwardingRules?: string[] | null;
    /**
     * Optional. Set of labels associated with the `LbTrafficExtension` resource. The format must comply with [the requirements for labels](https://cloud.google.com/compute/docs/labeling-resources#requirements) for Google Cloud resources.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. Supported values: `INTERNAL_MANAGED` and `EXTERNAL_MANAGED`. For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service).
     */
    loadBalancingScheme?: string | null;
    /**
     * Optional. The metadata provided here is included as part of the `metadata_context` (of type `google.protobuf.Struct`) in the `ProcessingRequest` message sent to the extension server. The metadata applies to all extensions in all extensions chains in this resource. The metadata is available under the key `com.google.lb_traffic_extension.`. The following variables are supported in the metadata: `{forwarding_rule_id\}` - substituted with the forwarding rule's fully qualified resource name. This field must not be set if at least one of the extension chains contains plugin extensions. Setting it results in a validation error. You can set metadata at either the resource level or the extension level. The extension level metadata is recommended because you can pass a different set of metadata through each extension to the backend.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Required. Identifier. Name of the `LbTrafficExtension` resource in the following format: `projects/{project\}/locations/{location\}/lbTrafficExtensions/{lb_traffic_extension\}`.
     */
    name?: string | null;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Message for response to listing `AuthzExtension` resources.
   */
  export interface Schema$ListAuthzExtensionsResponse {
    /**
     * The list of `AuthzExtension` resources.
     */
    authzExtensions?: Schema$AuthzExtension[];
    /**
     * A token identifying a page of results that the server returns.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response returned by the ListEndpointPolicies method.
   */
  export interface Schema$ListEndpointPoliciesResponse {
    /**
     * List of EndpointPolicy resources.
     */
    endpointPolicies?: Schema$EndpointPolicy[];
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string | null;
    /**
     * Unreachable resources. Populated when the request opts into return_partial_success and reading across collections e.g. when attempting to list all resources across all supported locations.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response returned by the ListGatewayRouteViews method.
   */
  export interface Schema$ListGatewayRouteViewsResponse {
    /**
     * List of GatewayRouteView resources.
     */
    gatewayRouteViews?: Schema$GatewayRouteView[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Unreachable resources. Populated when the request attempts to list all resources across all supported locations, while some locations are temporarily unavailable.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response returned by the ListGateways method.
   */
  export interface Schema$ListGatewaysResponse {
    /**
     * List of Gateway resources.
     */
    gateways?: Schema$Gateway[];
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response returned by the ListGrpcRoutes method.
   */
  export interface Schema$ListGrpcRoutesResponse {
    /**
     * List of GrpcRoute resources.
     */
    grpcRoutes?: Schema$GrpcRoute[];
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string | null;
    /**
     * Unreachable resources. Populated when the request opts into return_partial_success and reading across collections e.g. when attempting to list all resources across all supported locations.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response returned by the ListHttpRoutes method.
   */
  export interface Schema$ListHttpRoutesResponse {
    /**
     * List of HttpRoute resources.
     */
    httpRoutes?: Schema$HttpRoute[];
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string | null;
    /**
     * Unreachable resources. Populated when the request opts into return_partial_success and reading across collections e.g. when attempting to list all resources across all supported locations.
     */
    unreachable?: string[] | null;
  }
  /**
   * Message for response to listing `LbRouteExtension` resources.
   */
  export interface Schema$ListLbRouteExtensionsResponse {
    /**
     * The list of `LbRouteExtension` resources.
     */
    lbRouteExtensions?: Schema$LbRouteExtension[];
    /**
     * A token identifying a page of results that the server returns.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Message for response to listing `LbTrafficExtension` resources.
   */
  export interface Schema$ListLbTrafficExtensionsResponse {
    /**
     * The list of `LbTrafficExtension` resources.
     */
    lbTrafficExtensions?: Schema$LbTrafficExtension[];
    /**
     * A token identifying a page of results that the server returns.
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
   * Response returned by the ListMeshes method.
   */
  export interface Schema$ListMeshesResponse {
    /**
     * List of Mesh resources.
     */
    meshes?: Schema$Mesh[];
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string | null;
    /**
     * Unreachable resources. Populated when the request opts into `return_partial_success` and reading across collections e.g. when attempting to list all resources across all supported locations.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response returned by the ListMeshRouteViews method.
   */
  export interface Schema$ListMeshRouteViewsResponse {
    /**
     * List of MeshRouteView resources.
     */
    meshRouteViews?: Schema$MeshRouteView[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Unreachable resources. Populated when the request attempts to list all resources across all supported locations, while some locations are temporarily unavailable.
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
   * Response returned by the ListServiceBindings method.
   */
  export interface Schema$ListServiceBindingsResponse {
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string | null;
    /**
     * List of ServiceBinding resources.
     */
    serviceBindings?: Schema$ServiceBinding[];
    /**
     * Unreachable resources. Populated when the request attempts to list all resources across all supported locations, while some locations are temporarily unavailable.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response returned by the ListServiceLbPolicies method.
   */
  export interface Schema$ListServiceLbPoliciesResponse {
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string | null;
    /**
     * List of ServiceLbPolicy resources.
     */
    serviceLbPolicies?: Schema$ServiceLbPolicy[];
    /**
     * Unreachable resources. Populated when the request attempts to list all resources across all supported locations, while some locations are temporarily unavailable.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response returned by the ListTcpRoutes method.
   */
  export interface Schema$ListTcpRoutesResponse {
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string | null;
    /**
     * List of TcpRoute resources.
     */
    tcpRoutes?: Schema$TcpRoute[];
    /**
     * Unreachable resources. Populated when the request opts into return_partial_success and reading across collections e.g. when attempting to list all resources across all supported locations.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response returned by the ListTlsRoutes method.
   */
  export interface Schema$ListTlsRoutesResponse {
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string | null;
    /**
     * List of TlsRoute resources.
     */
    tlsRoutes?: Schema$TlsRoute[];
    /**
     * Unreachable resources. Populated when the request opts into return_partial_success and reading across collections e.g. when attempting to list all resources across all supported locations.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response returned by the `ListWasmPlugins` method.
   */
  export interface Schema$ListWasmPluginsResponse {
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string | null;
    /**
     * Unreachable resources. Populated when the request attempts to list all resources across all supported locations, while some locations are temporarily unavailable.
     */
    unreachable?: string[] | null;
    /**
     * List of `WasmPlugin` resources.
     */
    wasmPlugins?: Schema$WasmPlugin[];
  }
  /**
   * Response returned by the `ListWasmPluginVersions` method.
   */
  export interface Schema$ListWasmPluginVersionsResponse {
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string | null;
    /**
     * Unreachable resources. Populated when the request attempts to list all resources across all supported locations, while some locations are temporarily unavailable.
     */
    unreachable?: string[] | null;
    /**
     * List of `WasmPluginVersion` resources.
     */
    wasmPluginVersions?: Schema$WasmPluginVersion[];
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
   * The configuration for Platform Telemetry logging for Eventarc Advanced resources.
   */
  export interface Schema$LoggingConfig {
    /**
     * Optional. The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry. Logs at severitiy ≥ this value will be sent, unless it is NONE.
     */
    logSeverity?: string | null;
  }
  /**
   * Mesh represents a logical configuration grouping for workload to workload communication within a service mesh. Routes that point to mesh dictate how requests are routed within this logical mesh boundary.
   */
  export interface Schema$Mesh {
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. A free-text description of the resource. Max length 1024 characters.
     */
    description?: string | null;
    /**
     * Optional. Determines if envoy will insert internal debug headers into upstream requests. Other Envoy headers may still be injected. By default, envoy will not insert any debug headers.
     */
    envoyHeaders?: string | null;
    /**
     * Optional. If set to a valid TCP port (1-65535), instructs the SIDECAR proxy to listen on the specified port of localhost (127.0.0.1) address. The SIDECAR proxy will expect all traffic to be redirected to this port regardless of its actual ip:port destination. If unset, a port '15001' is used as the interception port. This is applicable only for sidecar proxy deployments.
     */
    interceptionPort?: number | null;
    /**
     * Optional. Set of label tags associated with the Mesh resource.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. Name of the Mesh resource. It matches pattern `projects/x/locations/global/meshes/`.
     */
    name?: string | null;
    /**
     * Output only. Server-defined URL of this resource
     */
    selfLink?: string | null;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string | null;
  }
  /**
   * MeshRouteView defines view-only resource for Routes to a Mesh
   */
  export interface Schema$MeshRouteView {
    /**
     * Output only. Identifier. Full path name of the MeshRouteView resource. Format: projects/{project_number\}/locations/{location\}/meshes/{mesh\}/routeViews/{route_view\}
     */
    name?: string | null;
    /**
     * Output only. The resource id for the route.
     */
    routeId?: string | null;
    /**
     * Output only. Location where the route exists.
     */
    routeLocation?: string | null;
    /**
     * Output only. Project number where the route exists.
     */
    routeProjectNumber?: string | null;
    /**
     * Output only. Type of the route: HttpRoute,GrpcRoute,TcpRoute, or TlsRoute
     */
    routeType?: string | null;
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
  export interface Schema$RetryFilterPerRouteConfig {
    /**
     * The name of the crypto key to use for encrypting event data.
     */
    cryptoKeyName?: string | null;
  }
  /**
   * ServiceBinding can be used to: - Bind a Service Directory Service to be used in a BackendService resource. This feature will be deprecated soon. - Bind a Private Service Connect producer service to be used in consumer Cloud Service Mesh or Application Load Balancers. - Bind a Cloud Run service to be used in consumer Cloud Service Mesh or Application Load Balancers.
   */
  export interface Schema$ServiceBinding {
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. A free-text description of the resource. Max length 1024 characters.
     */
    description?: string | null;
    /**
     * Optional. Set of label tags associated with the ServiceBinding resource.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. Name of the ServiceBinding resource. It matches pattern `projects/x/locations/x/serviceBindings/`.
     */
    name?: string | null;
    /**
     * Optional. The full Service Directory Service name of the format `projects/x/locations/x/namespaces/x/services/x`. This field is for Service Directory integration which will be deprecated soon.
     */
    service?: string | null;
    /**
     * Output only. The unique identifier of the Service Directory Service against which the ServiceBinding resource is validated. This is populated when the Service Binding resource is used in another resource (like Backend Service). This is of the UUID4 format. This field is for Service Directory integration which will be deprecated soon.
     */
    serviceId?: string | null;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string | null;
  }
  /**
   * ServiceLbPolicy holds global load balancing and traffic distribution configuration that can be applied to a BackendService.
   */
  export interface Schema$ServiceLbPolicy {
    /**
     * Optional. Configuration to automatically move traffic away for unhealthy IG/NEG for the associated Backend Service.
     */
    autoCapacityDrain?: Schema$ServiceLbPolicyAutoCapacityDrain;
    /**
     * Output only. The timestamp when this resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. A free-text description of the resource. Max length 1024 characters.
     */
    description?: string | null;
    /**
     * Optional. Configuration related to health based failover.
     */
    failoverConfig?: Schema$ServiceLbPolicyFailoverConfig;
    /**
     * Optional. Configuration to provide isolation support for the associated Backend Service.
     */
    isolationConfig?: Schema$ServiceLbPolicyIsolationConfig;
    /**
     * Optional. Set of label tags associated with the ServiceLbPolicy resource.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. The type of load balancing algorithm to be used. The default behavior is WATERFALL_BY_REGION.
     */
    loadBalancingAlgorithm?: string | null;
    /**
     * Identifier. Name of the ServiceLbPolicy resource. It matches pattern `projects/{project\}/locations/{location\}/serviceLbPolicies/{service_lb_policy_name\}`.
     */
    name?: string | null;
    /**
     * Output only. The timestamp when this resource was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Option to specify if an unhealthy IG/NEG should be considered for global load balancing and traffic routing.
   */
  export interface Schema$ServiceLbPolicyAutoCapacityDrain {
    /**
     * Optional. If set to 'True', an unhealthy IG/NEG will be set as drained. - An IG/NEG is considered unhealthy if less than 25% of the instances/endpoints in the IG/NEG are healthy. - This option will never result in draining more than 50% of the configured IGs/NEGs for the Backend Service.
     */
    enable?: boolean | null;
  }
  /**
   * Option to specify health based failover behavior. This is not related to Network load balancer FailoverPolicy.
   */
  export interface Schema$ServiceLbPolicyFailoverConfig {
    /**
     * Optional. The percentage threshold that a load balancer will begin to send traffic to failover backends. If the percentage of endpoints in a MIG/NEG is smaller than this value, traffic would be sent to failover backends if possible. This field should be set to a value between 1 and 99. The default value is 50 for Global external HTTP(S) load balancer (classic) and Proxyless service mesh, and 70 for others.
     */
    failoverHealthThreshold?: number | null;
  }
  /**
   * Configuration to provide isolation support for the associated Backend Service.
   */
  export interface Schema$ServiceLbPolicyIsolationConfig {
    /**
     * Optional. The isolation granularity of the load balancer.
     */
    isolationGranularity?: string | null;
    /**
     * Optional. The isolation mode of the load balancer.
     */
    isolationMode?: string | null;
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
   * TcpRoute is the resource defining how TCP traffic should be routed by a Mesh/Gateway resource.
   */
  export interface Schema$TcpRoute {
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. A free-text description of the resource. Max length 1024 characters.
     */
    description?: string | null;
    /**
     * Optional. Gateways defines a list of gateways this TcpRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/x/locations/global/gateways/`
     */
    gateways?: string[] | null;
    /**
     * Optional. Set of label tags associated with the TcpRoute resource.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. Meshes defines a list of meshes this TcpRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/x/locations/global/meshes/` The attached Mesh should be of a type SIDECAR
     */
    meshes?: string[] | null;
    /**
     * Identifier. Name of the TcpRoute resource. It matches pattern `projects/x/locations/global/tcpRoutes/tcp_route_name\>`.
     */
    name?: string | null;
    /**
     * Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.
     */
    rules?: Schema$TcpRouteRouteRule[];
    /**
     * Output only. Server-defined URL of this resource
     */
    selfLink?: string | null;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string | null;
  }
  /**
   * The specifications for routing traffic and applying associated policies.
   */
  export interface Schema$TcpRouteRouteAction {
    /**
     * Optional. The destination services to which traffic should be forwarded. At least one destination service is required. Only one of route destination or original destination can be set.
     */
    destinations?: Schema$TcpRouteRouteDestination[];
    /**
     * Optional. Specifies the idle timeout for the selected route. The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 30 seconds. If set to 0s, the timeout will be disabled.
     */
    idleTimeout?: string | null;
    /**
     * Optional. If true, Router will use the destination IP and port of the original connection as the destination of the request. Default is false. Only one of route destinations or original destination can be set.
     */
    originalDestination?: boolean | null;
  }
  /**
   * Describe the destination for traffic to be routed to.
   */
  export interface Schema$TcpRouteRouteDestination {
    /**
     * Required. The URL of a BackendService to route traffic to.
     */
    serviceName?: string | null;
    /**
     * Optional. Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: - weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weights are specified for any one service name, they need to be specified for all of them. If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.
     */
    weight?: number | null;
  }
  /**
   * RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic.
   */
  export interface Schema$TcpRouteRouteMatch {
    /**
     * Required. Must be specified in the CIDR range format. A CIDR range consists of an IP Address and a prefix length to construct the subnet mask. By default, the prefix length is 32 (i.e. matches a single IP address). Only IPV4 addresses are supported. Examples: "10.0.0.1" - matches against this exact IP address. "10.0.0.0/8" - matches against any IP address within the 10.0.0.0 subnet and 255.255.255.0 mask. "0.0.0.0/0" - matches against any IP address'.
     */
    address?: string | null;
    /**
     * Required. Specifies the destination port to match against.
     */
    port?: string | null;
  }
  /**
   * Specifies how to match traffic and how to route traffic when traffic is matched.
   */
  export interface Schema$TcpRouteRouteRule {
    /**
     * Required. The detailed rule defining how to route matched traffic.
     */
    action?: Schema$TcpRouteRouteAction;
    /**
     * Optional. RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic.
     */
    matches?: Schema$TcpRouteRouteMatch[];
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
   * TlsRoute defines how traffic should be routed based on SNI and other matching L3 attributes.
   */
  export interface Schema$TlsRoute {
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. A free-text description of the resource. Max length 1024 characters.
     */
    description?: string | null;
    /**
     * Optional. Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/x/locations/global/gateways/`
     */
    gateways?: string[] | null;
    /**
     * Optional. Set of label tags associated with the TlsRoute resource.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/x/locations/global/meshes/` The attached Mesh should be of a type SIDECAR
     */
    meshes?: string[] | null;
    /**
     * Identifier. Name of the TlsRoute resource. It matches pattern `projects/x/locations/global/tlsRoutes/tls_route_name\>`.
     */
    name?: string | null;
    /**
     * Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.
     */
    rules?: Schema$TlsRouteRouteRule[];
    /**
     * Output only. Server-defined URL of this resource
     */
    selfLink?: string | null;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string | null;
  }
  /**
   * The specifications for routing traffic and applying associated policies.
   */
  export interface Schema$TlsRouteRouteAction {
    /**
     * Required. The destination services to which traffic should be forwarded. At least one destination service is required.
     */
    destinations?: Schema$TlsRouteRouteDestination[];
    /**
     * Optional. Specifies the idle timeout for the selected route. The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 1 hour. If set to 0s, the timeout will be disabled.
     */
    idleTimeout?: string | null;
  }
  /**
   * Describe the destination for traffic to be routed to.
   */
  export interface Schema$TlsRouteRouteDestination {
    /**
     * Required. The URL of a BackendService to route traffic to.
     */
    serviceName?: string | null;
    /**
     * Optional. Specifies the proportion of requests forwarded to the backend referenced by the service_name field. This is computed as: - weight/Sum(weights in destinations) Weights in all destinations does not need to sum up to 100.
     */
    weight?: number | null;
  }
  /**
   * RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "AND"ed for evaluation.
   */
  export interface Schema$TlsRouteRouteMatch {
    /**
     * Optional. ALPN (Application-Layer Protocol Negotiation) to match against. Examples: "http/1.1", "h2". At least one of sni_host and alpn is required. Up to 5 alpns across all matches can be set.
     */
    alpn?: string[] | null;
    /**
     * Optional. SNI (server name indicator) to match against. SNI will be matched against all wildcard domains, i.e. `www.example.com` will be first matched against `www.example.com`, then `*.example.com`, then `*.com.` Partial wildcards are not supported, and values like *w.example.com are invalid. At least one of sni_host and alpn is required. Up to 100 sni hosts across all matches can be set.
     */
    sniHost?: string[] | null;
  }
  /**
   * Specifies how to match traffic and how to route traffic when traffic is matched.
   */
  export interface Schema$TlsRouteRouteRule {
    /**
     * Required. The detailed rule defining how to route matched traffic.
     */
    action?: Schema$TlsRouteRouteAction;
    /**
     * Required. RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation. Atleast one RouteMatch must be supplied.
     */
    matches?: Schema$TlsRouteRouteMatch[];
  }
  /**
   * Specification of a port-based selector.
   */
  export interface Schema$TrafficPortSelector {
    /**
     * Optional. A list of ports. Can be port numbers or port range (example, [80-90] specifies all ports from 80 to 90, including 80 and 90) or named ports or * to specify all ports. If the list is empty, all ports are selected.
     */
    ports?: string[] | null;
  }
  /**
   * `WasmPlugin` is a resource representing a service executing a customer-provided Wasm module.
   */
  export interface Schema$WasmPlugin {
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. A human-readable description of the resource.
     */
    description?: string | null;
    /**
     * Optional. Set of labels associated with the `WasmPlugin` resource. The format must comply with [the following requirements](/compute/docs/labeling-resources#requirements).
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. Specifies the logging options for the activity performed by this plugin. If logging is enabled, plugin logs are exported to Cloud Logging. Note that the settings relate to the logs generated by using logging statements in your Wasm code.
     */
    logConfig?: Schema$WasmPluginLogConfig;
    /**
     * Optional. The ID of the `WasmPluginVersion` resource that is the currently serving one. The version referred to must be a child of this `WasmPlugin` resource.
     */
    mainVersionId?: string | null;
    /**
     * Identifier. Name of the `WasmPlugin` resource in the following format: `projects/{project\}/locations/{location\}/wasmPlugins/{wasm_plugin\}`.
     */
    name?: string | null;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string | null;
    /**
     * Output only. List of all [extensions](https://cloud.google.com/service-extensions/docs/overview) that use this `WasmPlugin` resource.
     */
    usedBy?: Schema$WasmPluginUsedBy[];
    /**
     * Optional. All versions of this `WasmPlugin` resource in the key-value format. The key is the resource ID, and the value is the `VersionDetails` object. Lets you create or update a `WasmPlugin` resource and its versions in a single request. When the `main_version_id` field is not empty, it must point to one of the `VersionDetails` objects in the map. If provided in a `PATCH` request, the new versions replace the previous set. Any version omitted from the `versions` field is removed. Because the `WasmPluginVersion` resource is immutable, if a `WasmPluginVersion` resource with the same name already exists and differs, the request fails. Note: In a `GET` request, this field is populated only if the field `GetWasmPluginRequest.view` is set to `WASM_PLUGIN_VIEW_FULL`.
     */
    versions?: {[key: string]: Schema$WasmPluginVersionDetails} | null;
  }
  /**
   * Specifies the logging options for the activity performed by this plugin. If logging is enabled, plugin logs are exported to Cloud Logging.
   */
  export interface Schema$WasmPluginLogConfig {
    /**
     * Optional. Specifies whether to enable logging for activity by this plugin. Defaults to `false`.
     */
    enable?: boolean | null;
    /**
     * Non-empty default. Specifies the lowest level of the plugin logs that are exported to Cloud Logging. This setting relates to the logs generated by using logging statements in your Wasm code. This field is can be set only if logging is enabled for the plugin. If the field is not provided when logging is enabled, it is set to `INFO` by default.
     */
    minLogLevel?: string | null;
    /**
     * Non-empty default. Configures the sampling rate of activity logs, where `1.0` means all logged activity is reported and `0.0` means no activity is reported. A floating point value between `0.0` and `1.0` indicates that a percentage of log messages is stored. The default value when logging is enabled is `1.0`. The value of the field must be between `0` and `1` (inclusive). This field can be specified only if logging is enabled for this plugin.
     */
    sampleRate?: number | null;
  }
  /**
   * Defines a resource that uses the `WasmPlugin` resource.
   */
  export interface Schema$WasmPluginUsedBy {
    /**
     * Output only. Full name of the resource https://google.aip.dev/122#full-resource-names, for example `//networkservices.googleapis.com/projects/{project\}/locations/{location\}/lbRouteExtensions/{extension\}`
     */
    name?: string | null;
  }
  /**
   * A single immutable version of a `WasmPlugin` resource. Defines the Wasm module used and optionally its runtime config.
   */
  export interface Schema$WasmPluginVersion {
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. A human-readable description of the resource.
     */
    description?: string | null;
    /**
     * Output only. The resolved digest for the image specified in the `image` field. The digest is resolved during the creation of `WasmPluginVersion` resource. This field holds the digest value, regardless of whether a tag or digest was originally specified in the `image` field.
     */
    imageDigest?: string | null;
    /**
     * Optional. URI of the container image containing the plugin, stored in the Artifact Registry. When a new `WasmPluginVersion` resource is created, the digest of the container image is saved in the `image_digest` field. When downloading an image, the digest value is used instead of an image tag.
     */
    imageUri?: string | null;
    /**
     * Optional. Set of labels associated with the `WasmPluginVersion` resource.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. Name of the `WasmPluginVersion` resource in the following format: `projects/{project\}/locations/{location\}/wasmPlugins/{wasm_plugin\}/ versions/{wasm_plugin_version\}`.
     */
    name?: string | null;
    /**
     * Configuration for the plugin. The configuration is provided to the plugin at runtime through the `ON_CONFIGURE` callback. When a new `WasmPluginVersion` resource is created, the digest of the contents is saved in the `plugin_config_digest` field.
     */
    pluginConfigData?: string | null;
    /**
     * Output only. This field holds the digest (usually checksum) value for the plugin configuration. The value is calculated based on the contents of `plugin_config_data` or the container image defined by the `plugin_config_uri` field.
     */
    pluginConfigDigest?: string | null;
    /**
     * URI of the plugin configuration stored in the Artifact Registry. The configuration is provided to the plugin at runtime through the `ON_CONFIGURE` callback. The container image must contain only a single file with the name `plugin.config`. When a new `WasmPluginVersion` resource is created, the digest of the container image is saved in the `plugin_config_digest` field.
     */
    pluginConfigUri?: string | null;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Details of a `WasmPluginVersion` resource to be inlined in the `WasmPlugin` resource.
   */
  export interface Schema$WasmPluginVersionDetails {
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. A human-readable description of the resource.
     */
    description?: string | null;
    /**
     * Output only. The resolved digest for the image specified in `image`. The digest is resolved during the creation of a `WasmPluginVersion` resource. This field holds the digest value regardless of whether a tag or digest was originally specified in the `image` field.
     */
    imageDigest?: string | null;
    /**
     * Optional. URI of the container image containing the Wasm module, stored in the Artifact Registry. The container image must contain only a single file with the name `plugin.wasm`. When a new `WasmPluginVersion` resource is created, the URI gets resolved to an image digest and saved in the `image_digest` field.
     */
    imageUri?: string | null;
    /**
     * Optional. Set of labels associated with the `WasmPluginVersion` resource.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Configuration for the plugin. The configuration is provided to the plugin at runtime through the `ON_CONFIGURE` callback. When a new `WasmPluginVersion` version is created, the digest of the contents is saved in the `plugin_config_digest` field.
     */
    pluginConfigData?: string | null;
    /**
     * Output only. This field holds the digest (usually checksum) value for the plugin configuration. The value is calculated based on the contents of the `plugin_config_data` field or the container image defined by the `plugin_config_uri` field.
     */
    pluginConfigDigest?: string | null;
    /**
     * URI of the plugin configuration stored in the Artifact Registry. The configuration is provided to the plugin at runtime through the `ON_CONFIGURE` callback. The container image must contain only a single file with the name `plugin.config`. When a new `WasmPluginVersion` resource is created, the digest of the container image is saved in the `plugin_config_digest` field.
     */
    pluginConfigUri?: string | null;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string | null;
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
    authzExtensions: Resource$Projects$Locations$Authzextensions;
    edgeCacheKeysets: Resource$Projects$Locations$Edgecachekeysets;
    edgeCacheOrigins: Resource$Projects$Locations$Edgecacheorigins;
    edgeCacheServices: Resource$Projects$Locations$Edgecacheservices;
    endpointPolicies: Resource$Projects$Locations$Endpointpolicies;
    gateways: Resource$Projects$Locations$Gateways;
    grpcRoutes: Resource$Projects$Locations$Grpcroutes;
    httpRoutes: Resource$Projects$Locations$Httproutes;
    lbRouteExtensions: Resource$Projects$Locations$Lbrouteextensions;
    lbTrafficExtensions: Resource$Projects$Locations$Lbtrafficextensions;
    meshes: Resource$Projects$Locations$Meshes;
    operations: Resource$Projects$Locations$Operations;
    serviceBindings: Resource$Projects$Locations$Servicebindings;
    serviceLbPolicies: Resource$Projects$Locations$Servicelbpolicies;
    tcpRoutes: Resource$Projects$Locations$Tcproutes;
    tlsRoutes: Resource$Projects$Locations$Tlsroutes;
    wasmPlugins: Resource$Projects$Locations$Wasmplugins;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.authzExtensions = new Resource$Projects$Locations$Authzextensions(
        this.context
      );
      this.edgeCacheKeysets = new Resource$Projects$Locations$Edgecachekeysets(
        this.context
      );
      this.edgeCacheOrigins = new Resource$Projects$Locations$Edgecacheorigins(
        this.context
      );
      this.edgeCacheServices =
        new Resource$Projects$Locations$Edgecacheservices(this.context);
      this.endpointPolicies = new Resource$Projects$Locations$Endpointpolicies(
        this.context
      );
      this.gateways = new Resource$Projects$Locations$Gateways(this.context);
      this.grpcRoutes = new Resource$Projects$Locations$Grpcroutes(
        this.context
      );
      this.httpRoutes = new Resource$Projects$Locations$Httproutes(
        this.context
      );
      this.lbRouteExtensions =
        new Resource$Projects$Locations$Lbrouteextensions(this.context);
      this.lbTrafficExtensions =
        new Resource$Projects$Locations$Lbtrafficextensions(this.context);
      this.meshes = new Resource$Projects$Locations$Meshes(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.serviceBindings = new Resource$Projects$Locations$Servicebindings(
        this.context
      );
      this.serviceLbPolicies =
        new Resource$Projects$Locations$Servicelbpolicies(this.context);
      this.tcpRoutes = new Resource$Projects$Locations$Tcproutes(this.context);
      this.tlsRoutes = new Resource$Projects$Locations$Tlsroutes(this.context);
      this.wasmPlugins = new Resource$Projects$Locations$Wasmplugins(
        this.context
      );
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.get({
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
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.list({
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
        options.rootUrl || 'https://networkservices.googleapis.com/';
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

  export class Resource$Projects$Locations$Authzextensions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new `AuthzExtension` resource in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.authzExtensions.create({
     *     // Required. User-provided ID of the `AuthzExtension` resource to be created.
     *     authzExtensionId: 'placeholder-value',
     *     // Required. The parent resource of the `AuthzExtension` resource. Must be in the format `projects/{project\}/locations/{location\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "authority": "my_authority",
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "failOpen": false,
     *       //   "forwardHeaders": [],
     *       //   "labels": {},
     *       //   "loadBalancingScheme": "my_loadBalancingScheme",
     *       //   "metadata": {},
     *       //   "name": "my_name",
     *       //   "service": "my_service",
     *       //   "timeout": "my_timeout",
     *       //   "updateTime": "my_updateTime",
     *       //   "wireFormat": "my_wireFormat"
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
      params: Params$Resource$Projects$Locations$Authzextensions$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Authzextensions$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Authzextensions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Authzextensions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Authzextensions$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Authzextensions$Create
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
        {}) as Params$Resource$Projects$Locations$Authzextensions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Authzextensions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/authzExtensions').replace(
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
     * Deletes the specified `AuthzExtension` resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.authzExtensions.delete({
     *     // Required. The name of the `AuthzExtension` resource to delete. Must be in the format `projects/{project\}/locations/{location\}/authzExtensions/{authz_extension\}`.
     *     name: 'projects/my-project/locations/my-location/authzExtensions/my-authzExtension',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Authzextensions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Authzextensions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Authzextensions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Authzextensions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Authzextensions$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Authzextensions$Delete
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
        {}) as Params$Resource$Projects$Locations$Authzextensions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Authzextensions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * Gets details of the specified `AuthzExtension` resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.authzExtensions.get({
     *     // Required. A name of the `AuthzExtension` resource to get. Must be in the format `projects/{project\}/locations/{location\}/authzExtensions/{authz_extension\}`.
     *     name: 'projects/my-project/locations/my-location/authzExtensions/my-authzExtension',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "authority": "my_authority",
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "failOpen": false,
     *   //   "forwardHeaders": [],
     *   //   "labels": {},
     *   //   "loadBalancingScheme": "my_loadBalancingScheme",
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "service": "my_service",
     *   //   "timeout": "my_timeout",
     *   //   "updateTime": "my_updateTime",
     *   //   "wireFormat": "my_wireFormat"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Authzextensions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Authzextensions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AuthzExtension>>;
    get(
      params: Params$Resource$Projects$Locations$Authzextensions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Authzextensions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AuthzExtension>,
      callback: BodyResponseCallback<Schema$AuthzExtension>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Authzextensions$Get,
      callback: BodyResponseCallback<Schema$AuthzExtension>
    ): void;
    get(callback: BodyResponseCallback<Schema$AuthzExtension>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Authzextensions$Get
        | BodyResponseCallback<Schema$AuthzExtension>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AuthzExtension>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AuthzExtension>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AuthzExtension>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Authzextensions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Authzextensions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
        createAPIRequest<Schema$AuthzExtension>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AuthzExtension>(parameters);
      }
    }

    /**
     * Lists `AuthzExtension` resources in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.authzExtensions.list({
     *     // Optional. Filtering results.
     *     filter: 'placeholder-value',
     *     // Optional. Hint about how to order the results.
     *     orderBy: 'placeholder-value',
     *     // Optional. Requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results that the server returns.
     *     pageToken: 'placeholder-value',
     *     // Required. The project and location from which the `AuthzExtension` resources are listed. These values are specified in the following format: `projects/{project\}/locations/{location\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "authzExtensions": [],
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
      params: Params$Resource$Projects$Locations$Authzextensions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Authzextensions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAuthzExtensionsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Authzextensions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Authzextensions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAuthzExtensionsResponse>,
      callback: BodyResponseCallback<Schema$ListAuthzExtensionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Authzextensions$List,
      callback: BodyResponseCallback<Schema$ListAuthzExtensionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAuthzExtensionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Authzextensions$List
        | BodyResponseCallback<Schema$ListAuthzExtensionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAuthzExtensionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAuthzExtensionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAuthzExtensionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Authzextensions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Authzextensions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/authzExtensions').replace(
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
        createAPIRequest<Schema$ListAuthzExtensionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAuthzExtensionsResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of the specified `AuthzExtension` resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.authzExtensions.patch({
     *     // Required. Identifier. Name of the `AuthzExtension` resource in the following format: `projects/{project\}/locations/{location\}/authzExtensions/{authz_extension\}`.
     *     name: 'projects/my-project/locations/my-location/authzExtensions/my-authzExtension',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. Used to specify the fields to be overwritten in the `AuthzExtension` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not specify a mask, then all fields are overwritten.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "authority": "my_authority",
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "failOpen": false,
     *       //   "forwardHeaders": [],
     *       //   "labels": {},
     *       //   "loadBalancingScheme": "my_loadBalancingScheme",
     *       //   "metadata": {},
     *       //   "name": "my_name",
     *       //   "service": "my_service",
     *       //   "timeout": "my_timeout",
     *       //   "updateTime": "my_updateTime",
     *       //   "wireFormat": "my_wireFormat"
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
      params: Params$Resource$Projects$Locations$Authzextensions$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Authzextensions$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Authzextensions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Authzextensions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Authzextensions$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Authzextensions$Patch
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
        {}) as Params$Resource$Projects$Locations$Authzextensions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Authzextensions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Authzextensions$Create
    extends StandardParameters {
    /**
     * Required. User-provided ID of the `AuthzExtension` resource to be created.
     */
    authzExtensionId?: string;
    /**
     * Required. The parent resource of the `AuthzExtension` resource. Must be in the format `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AuthzExtension;
  }
  export interface Params$Resource$Projects$Locations$Authzextensions$Delete
    extends StandardParameters {
    /**
     * Required. The name of the `AuthzExtension` resource to delete. Must be in the format `projects/{project\}/locations/{location\}/authzExtensions/{authz_extension\}`.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Authzextensions$Get
    extends StandardParameters {
    /**
     * Required. A name of the `AuthzExtension` resource to get. Must be in the format `projects/{project\}/locations/{location\}/authzExtensions/{authz_extension\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Authzextensions$List
    extends StandardParameters {
    /**
     * Optional. Filtering results.
     */
    filter?: string;
    /**
     * Optional. Hint about how to order the results.
     */
    orderBy?: string;
    /**
     * Optional. Requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results that the server returns.
     */
    pageToken?: string;
    /**
     * Required. The project and location from which the `AuthzExtension` resources are listed. These values are specified in the following format: `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Authzextensions$Patch
    extends StandardParameters {
    /**
     * Required. Identifier. Name of the `AuthzExtension` resource in the following format: `projects/{project\}/locations/{location\}/authzExtensions/{authz_extension\}`.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Used to specify the fields to be overwritten in the `AuthzExtension` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not specify a mask, then all fields are overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AuthzExtension;
  }

  export class Resource$Projects$Locations$Edgecachekeysets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await networkservices.projects.locations.edgeCacheKeysets.getIamPolicy({
     *       // Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *       'options.requestedPolicyVersion': 'placeholder-value',
     *       // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/edgeCacheKeysets/my-edgeCacheKeyset',
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
      params: Params$Resource$Projects$Locations$Edgecachekeysets$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Edgecachekeysets$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Edgecachekeysets$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Edgecachekeysets$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Edgecachekeysets$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Edgecachekeysets$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Edgecachekeysets$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Edgecachekeysets$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await networkservices.projects.locations.edgeCacheKeysets.setIamPolicy({
     *       // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/edgeCacheKeysets/my-edgeCacheKeyset',
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
      params: Params$Resource$Projects$Locations$Edgecachekeysets$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Edgecachekeysets$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Edgecachekeysets$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Edgecachekeysets$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Edgecachekeysets$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Edgecachekeysets$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Edgecachekeysets$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Edgecachekeysets$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await networkservices.projects.locations.edgeCacheKeysets.testIamPermissions(
     *       {
     *         // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *         resource:
     *           'projects/my-project/locations/my-location/edgeCacheKeysets/my-edgeCacheKeyset',
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
      params: Params$Resource$Projects$Locations$Edgecachekeysets$Testiampermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Edgecachekeysets$Testiampermissions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Edgecachekeysets$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Edgecachekeysets$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Edgecachekeysets$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Edgecachekeysets$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Edgecachekeysets$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Edgecachekeysets$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Edgecachekeysets$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Edgecachekeysets$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Edgecachekeysets$Testiampermissions
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

  export class Resource$Projects$Locations$Edgecacheorigins {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await networkservices.projects.locations.edgeCacheOrigins.getIamPolicy({
     *       // Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *       'options.requestedPolicyVersion': 'placeholder-value',
     *       // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/edgeCacheOrigins/my-edgeCacheOrigin',
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
      params: Params$Resource$Projects$Locations$Edgecacheorigins$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Edgecacheorigins$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Edgecacheorigins$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Edgecacheorigins$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Edgecacheorigins$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Edgecacheorigins$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Edgecacheorigins$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Edgecacheorigins$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await networkservices.projects.locations.edgeCacheOrigins.setIamPolicy({
     *       // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/edgeCacheOrigins/my-edgeCacheOrigin',
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
      params: Params$Resource$Projects$Locations$Edgecacheorigins$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Edgecacheorigins$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Edgecacheorigins$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Edgecacheorigins$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Edgecacheorigins$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Edgecacheorigins$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Edgecacheorigins$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Edgecacheorigins$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await networkservices.projects.locations.edgeCacheOrigins.testIamPermissions(
     *       {
     *         // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *         resource:
     *           'projects/my-project/locations/my-location/edgeCacheOrigins/my-edgeCacheOrigin',
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
      params: Params$Resource$Projects$Locations$Edgecacheorigins$Testiampermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Edgecacheorigins$Testiampermissions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Edgecacheorigins$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Edgecacheorigins$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Edgecacheorigins$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Edgecacheorigins$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Edgecacheorigins$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Edgecacheorigins$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Edgecacheorigins$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Edgecacheorigins$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Edgecacheorigins$Testiampermissions
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

  export class Resource$Projects$Locations$Edgecacheservices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await networkservices.projects.locations.edgeCacheServices.getIamPolicy({
     *       // Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *       'options.requestedPolicyVersion': 'placeholder-value',
     *       // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/edgeCacheServices/my-edgeCacheService',
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
      params: Params$Resource$Projects$Locations$Edgecacheservices$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Edgecacheservices$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Edgecacheservices$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Edgecacheservices$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Edgecacheservices$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Edgecacheservices$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Edgecacheservices$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Edgecacheservices$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await networkservices.projects.locations.edgeCacheServices.setIamPolicy({
     *       // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/edgeCacheServices/my-edgeCacheService',
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
      params: Params$Resource$Projects$Locations$Edgecacheservices$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Edgecacheservices$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Edgecacheservices$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Edgecacheservices$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Edgecacheservices$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Edgecacheservices$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Edgecacheservices$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Edgecacheservices$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await networkservices.projects.locations.edgeCacheServices.testIamPermissions(
     *       {
     *         // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *         resource:
     *           'projects/my-project/locations/my-location/edgeCacheServices/my-edgeCacheService',
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
      params: Params$Resource$Projects$Locations$Edgecacheservices$Testiampermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Edgecacheservices$Testiampermissions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Edgecacheservices$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Edgecacheservices$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Edgecacheservices$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Edgecacheservices$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Edgecacheservices$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Edgecacheservices$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Edgecacheservices$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Edgecacheservices$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Edgecacheservices$Testiampermissions
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

  export class Resource$Projects$Locations$Endpointpolicies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new EndpointPolicy in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.endpointPolicies.create({
     *     // Required. Short name of the EndpointPolicy resource to be created. E.g. "CustomECS".
     *     endpointPolicyId: 'placeholder-value',
     *     // Required. The parent resource of the EndpointPolicy. Must be in the format `projects/x/locations/global`.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "authorizationPolicy": "my_authorizationPolicy",
     *       //   "clientTlsPolicy": "my_clientTlsPolicy",
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "endpointMatcher": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "serverTlsPolicy": "my_serverTlsPolicy",
     *       //   "trafficPortSelector": {},
     *       //   "type": "my_type",
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
      params: Params$Resource$Projects$Locations$Endpointpolicies$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Endpointpolicies$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Endpointpolicies$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Endpointpolicies$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Endpointpolicies$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Endpointpolicies$Create
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
        {}) as Params$Resource$Projects$Locations$Endpointpolicies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Endpointpolicies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/endpointPolicies').replace(
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
     * Deletes a single EndpointPolicy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.endpointPolicies.delete({
     *     // Required. A name of the EndpointPolicy to delete. Must be in the format `projects/x/locations/global/endpointPolicies/x`.
     *     name: 'projects/my-project/locations/my-location/endpointPolicies/my-endpointPolicie',
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
      params: Params$Resource$Projects$Locations$Endpointpolicies$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Endpointpolicies$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Endpointpolicies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Endpointpolicies$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Endpointpolicies$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Endpointpolicies$Delete
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
        {}) as Params$Resource$Projects$Locations$Endpointpolicies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Endpointpolicies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * Gets details of a single EndpointPolicy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.endpointPolicies.get({
     *     // Required. A name of the EndpointPolicy to get. Must be in the format `projects/x/locations/global/endpointPolicies/x`.
     *     name: 'projects/my-project/locations/my-location/endpointPolicies/my-endpointPolicie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "authorizationPolicy": "my_authorizationPolicy",
     *   //   "clientTlsPolicy": "my_clientTlsPolicy",
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "endpointMatcher": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "serverTlsPolicy": "my_serverTlsPolicy",
     *   //   "trafficPortSelector": {},
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
      params: Params$Resource$Projects$Locations$Endpointpolicies$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Endpointpolicies$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EndpointPolicy>>;
    get(
      params: Params$Resource$Projects$Locations$Endpointpolicies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Endpointpolicies$Get,
      options: MethodOptions | BodyResponseCallback<Schema$EndpointPolicy>,
      callback: BodyResponseCallback<Schema$EndpointPolicy>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Endpointpolicies$Get,
      callback: BodyResponseCallback<Schema$EndpointPolicy>
    ): void;
    get(callback: BodyResponseCallback<Schema$EndpointPolicy>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Endpointpolicies$Get
        | BodyResponseCallback<Schema$EndpointPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EndpointPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EndpointPolicy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EndpointPolicy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Endpointpolicies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Endpointpolicies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
        createAPIRequest<Schema$EndpointPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EndpointPolicy>(parameters);
      }
    }

    /**
     * Lists EndpointPolicies in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.endpointPolicies.list({
     *     // Maximum number of EndpointPolicies to return per call.
     *     pageSize: 'placeholder-value',
     *     // The value returned by the last `ListEndpointPoliciesResponse` Indicates that this is a continuation of a prior `ListEndpointPolicies` call, and that the system should return the next page of data.
     *     pageToken: 'placeholder-value',
     *     // Required. The project and location from which the EndpointPolicies should be listed, specified in the format `projects/x/locations/global`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail.
     *     returnPartialSuccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "endpointPolicies": [],
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
      params: Params$Resource$Projects$Locations$Endpointpolicies$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Endpointpolicies$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListEndpointPoliciesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Endpointpolicies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Endpointpolicies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEndpointPoliciesResponse>,
      callback: BodyResponseCallback<Schema$ListEndpointPoliciesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Endpointpolicies$List,
      callback: BodyResponseCallback<Schema$ListEndpointPoliciesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListEndpointPoliciesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Endpointpolicies$List
        | BodyResponseCallback<Schema$ListEndpointPoliciesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEndpointPoliciesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEndpointPoliciesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListEndpointPoliciesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Endpointpolicies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Endpointpolicies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/endpointPolicies').replace(
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
        createAPIRequest<Schema$ListEndpointPoliciesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEndpointPoliciesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the parameters of a single EndpointPolicy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.endpointPolicies.patch({
     *     // Identifier. Name of the EndpointPolicy resource. It matches pattern `projects/{project\}/locations/global/endpointPolicies/{endpoint_policy\}`.
     *     name: 'projects/my-project/locations/my-location/endpointPolicies/my-endpointPolicie',
     *     // Optional. Field mask is used to specify the fields to be overwritten in the EndpointPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "authorizationPolicy": "my_authorizationPolicy",
     *       //   "clientTlsPolicy": "my_clientTlsPolicy",
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "endpointMatcher": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "serverTlsPolicy": "my_serverTlsPolicy",
     *       //   "trafficPortSelector": {},
     *       //   "type": "my_type",
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
      params: Params$Resource$Projects$Locations$Endpointpolicies$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Endpointpolicies$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Endpointpolicies$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Endpointpolicies$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Endpointpolicies$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Endpointpolicies$Patch
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
        {}) as Params$Resource$Projects$Locations$Endpointpolicies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Endpointpolicies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Endpointpolicies$Create
    extends StandardParameters {
    /**
     * Required. Short name of the EndpointPolicy resource to be created. E.g. "CustomECS".
     */
    endpointPolicyId?: string;
    /**
     * Required. The parent resource of the EndpointPolicy. Must be in the format `projects/x/locations/global`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EndpointPolicy;
  }
  export interface Params$Resource$Projects$Locations$Endpointpolicies$Delete
    extends StandardParameters {
    /**
     * Required. A name of the EndpointPolicy to delete. Must be in the format `projects/x/locations/global/endpointPolicies/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Endpointpolicies$Get
    extends StandardParameters {
    /**
     * Required. A name of the EndpointPolicy to get. Must be in the format `projects/x/locations/global/endpointPolicies/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Endpointpolicies$List
    extends StandardParameters {
    /**
     * Maximum number of EndpointPolicies to return per call.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListEndpointPoliciesResponse` Indicates that this is a continuation of a prior `ListEndpointPolicies` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The project and location from which the EndpointPolicies should be listed, specified in the format `projects/x/locations/global`.
     */
    parent?: string;
    /**
     * Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail.
     */
    returnPartialSuccess?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Endpointpolicies$Patch
    extends StandardParameters {
    /**
     * Identifier. Name of the EndpointPolicy resource. It matches pattern `projects/{project\}/locations/global/endpointPolicies/{endpoint_policy\}`.
     */
    name?: string;
    /**
     * Optional. Field mask is used to specify the fields to be overwritten in the EndpointPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EndpointPolicy;
  }

  export class Resource$Projects$Locations$Gateways {
    context: APIRequestContext;
    routeViews: Resource$Projects$Locations$Gateways$Routeviews;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.routeViews = new Resource$Projects$Locations$Gateways$Routeviews(
        this.context
      );
    }

    /**
     * Creates a new Gateway in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.gateways.create({
     *     // Required. Short name of the Gateway resource to be created.
     *     gatewayId: 'placeholder-value',
     *     // Required. The parent resource of the Gateway. Must be in the format `projects/x/locations/x`.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "addresses": [],
     *       //   "certificateUrls": [],
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "envoyHeaders": "my_envoyHeaders",
     *       //   "gatewaySecurityPolicy": "my_gatewaySecurityPolicy",
     *       //   "ipVersion": "my_ipVersion",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "network": "my_network",
     *       //   "ports": [],
     *       //   "routingMode": "my_routingMode",
     *       //   "scope": "my_scope",
     *       //   "selfLink": "my_selfLink",
     *       //   "serverTlsPolicy": "my_serverTlsPolicy",
     *       //   "subnetwork": "my_subnetwork",
     *       //   "type": "my_type",
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
      params: Params$Resource$Projects$Locations$Gateways$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Gateways$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Gateways$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Gateways$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Gateways$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gateways$Create
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
        {}) as Params$Resource$Projects$Locations$Gateways$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gateways$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/gateways').replace(
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
     * Deletes a single Gateway.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.gateways.delete({
     *     // Required. A name of the Gateway to delete. Must be in the format `projects/x/locations/x/gateways/x`.
     *     name: 'projects/my-project/locations/my-location/gateways/my-gateway',
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
      params: Params$Resource$Projects$Locations$Gateways$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Gateways$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Gateways$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Gateways$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Gateways$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gateways$Delete
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
        {}) as Params$Resource$Projects$Locations$Gateways$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gateways$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * Gets details of a single Gateway.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.gateways.get({
     *     // Required. A name of the Gateway to get. Must be in the format `projects/x/locations/x/gateways/x`.
     *     name: 'projects/my-project/locations/my-location/gateways/my-gateway',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "addresses": [],
     *   //   "certificateUrls": [],
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "envoyHeaders": "my_envoyHeaders",
     *   //   "gatewaySecurityPolicy": "my_gatewaySecurityPolicy",
     *   //   "ipVersion": "my_ipVersion",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "network": "my_network",
     *   //   "ports": [],
     *   //   "routingMode": "my_routingMode",
     *   //   "scope": "my_scope",
     *   //   "selfLink": "my_selfLink",
     *   //   "serverTlsPolicy": "my_serverTlsPolicy",
     *   //   "subnetwork": "my_subnetwork",
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
      params: Params$Resource$Projects$Locations$Gateways$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Gateways$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Gateway>>;
    get(
      params: Params$Resource$Projects$Locations$Gateways$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Gateways$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Gateway>,
      callback: BodyResponseCallback<Schema$Gateway>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Gateways$Get,
      callback: BodyResponseCallback<Schema$Gateway>
    ): void;
    get(callback: BodyResponseCallback<Schema$Gateway>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gateways$Get
        | BodyResponseCallback<Schema$Gateway>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Gateway>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Gateway>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Gateway>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gateways$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gateways$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
        createAPIRequest<Schema$Gateway>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Gateway>(parameters);
      }
    }

    /**
     * Lists Gateways in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.gateways.list({
     *     // Maximum number of Gateways to return per call.
     *     pageSize: 'placeholder-value',
     *     // The value returned by the last `ListGatewaysResponse` Indicates that this is a continuation of a prior `ListGateways` call, and that the system should return the next page of data.
     *     pageToken: 'placeholder-value',
     *     // Required. The project and location from which the Gateways should be listed, specified in the format `projects/x/locations/x`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "gateways": [],
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
      params: Params$Resource$Projects$Locations$Gateways$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Gateways$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListGatewaysResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Gateways$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Gateways$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGatewaysResponse>,
      callback: BodyResponseCallback<Schema$ListGatewaysResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Gateways$List,
      callback: BodyResponseCallback<Schema$ListGatewaysResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListGatewaysResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gateways$List
        | BodyResponseCallback<Schema$ListGatewaysResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListGatewaysResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListGatewaysResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListGatewaysResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gateways$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gateways$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/gateways').replace(
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
        createAPIRequest<Schema$ListGatewaysResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListGatewaysResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single Gateway.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.gateways.patch({
     *     // Identifier. Name of the Gateway resource. It matches pattern `projects/x/locations/x/gateways/`.
     *     name: 'projects/my-project/locations/my-location/gateways/my-gateway',
     *     // Optional. Field mask is used to specify the fields to be overwritten in the Gateway resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "addresses": [],
     *       //   "certificateUrls": [],
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "envoyHeaders": "my_envoyHeaders",
     *       //   "gatewaySecurityPolicy": "my_gatewaySecurityPolicy",
     *       //   "ipVersion": "my_ipVersion",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "network": "my_network",
     *       //   "ports": [],
     *       //   "routingMode": "my_routingMode",
     *       //   "scope": "my_scope",
     *       //   "selfLink": "my_selfLink",
     *       //   "serverTlsPolicy": "my_serverTlsPolicy",
     *       //   "subnetwork": "my_subnetwork",
     *       //   "type": "my_type",
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
      params: Params$Resource$Projects$Locations$Gateways$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Gateways$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Gateways$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Gateways$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Gateways$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gateways$Patch
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
        {}) as Params$Resource$Projects$Locations$Gateways$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Gateways$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Gateways$Create
    extends StandardParameters {
    /**
     * Required. Short name of the Gateway resource to be created.
     */
    gatewayId?: string;
    /**
     * Required. The parent resource of the Gateway. Must be in the format `projects/x/locations/x`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Gateway;
  }
  export interface Params$Resource$Projects$Locations$Gateways$Delete
    extends StandardParameters {
    /**
     * Required. A name of the Gateway to delete. Must be in the format `projects/x/locations/x/gateways/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Gateways$Get
    extends StandardParameters {
    /**
     * Required. A name of the Gateway to get. Must be in the format `projects/x/locations/x/gateways/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Gateways$List
    extends StandardParameters {
    /**
     * Maximum number of Gateways to return per call.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListGatewaysResponse` Indicates that this is a continuation of a prior `ListGateways` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The project and location from which the Gateways should be listed, specified in the format `projects/x/locations/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Gateways$Patch
    extends StandardParameters {
    /**
     * Identifier. Name of the Gateway resource. It matches pattern `projects/x/locations/x/gateways/`.
     */
    name?: string;
    /**
     * Optional. Field mask is used to specify the fields to be overwritten in the Gateway resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Gateway;
  }

  export class Resource$Projects$Locations$Gateways$Routeviews {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get a single RouteView of a Gateway.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.gateways.routeViews.get({
     *     // Required. Name of the GatewayRouteView resource. Formats: projects/{project_number\}/locations/{location\}/gateways/{gateway\}/routeViews/{route_view\}
     *     name: 'projects/my-project/locations/my-location/gateways/my-gateway/routeViews/my-routeView',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "routeId": "my_routeId",
     *   //   "routeLocation": "my_routeLocation",
     *   //   "routeProjectNumber": "my_routeProjectNumber",
     *   //   "routeType": "my_routeType"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Gateways$Routeviews$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Gateways$Routeviews$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GatewayRouteView>>;
    get(
      params: Params$Resource$Projects$Locations$Gateways$Routeviews$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Gateways$Routeviews$Get,
      options: MethodOptions | BodyResponseCallback<Schema$GatewayRouteView>,
      callback: BodyResponseCallback<Schema$GatewayRouteView>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Gateways$Routeviews$Get,
      callback: BodyResponseCallback<Schema$GatewayRouteView>
    ): void;
    get(callback: BodyResponseCallback<Schema$GatewayRouteView>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gateways$Routeviews$Get
        | BodyResponseCallback<Schema$GatewayRouteView>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GatewayRouteView>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GatewayRouteView>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GatewayRouteView>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gateways$Routeviews$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Gateways$Routeviews$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
        createAPIRequest<Schema$GatewayRouteView>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GatewayRouteView>(parameters);
      }
    }

    /**
     * Lists RouteViews
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.gateways.routeViews.list(
     *     {
     *       // Maximum number of GatewayRouteViews to return per call.
     *       pageSize: 'placeholder-value',
     *       // The value returned by the last `ListGatewayRouteViewsResponse` Indicates that this is a continuation of a prior `ListGatewayRouteViews` call, and that the system should return the next page of data.
     *       pageToken: 'placeholder-value',
     *       // Required. The Gateway to which a Route is associated. Formats: projects/{project_number\}/locations/{location\}/gateways/{gateway\}
     *       parent: 'projects/my-project/locations/my-location/gateways/my-gateway',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "gatewayRouteViews": [],
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
      params: Params$Resource$Projects$Locations$Gateways$Routeviews$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Gateways$Routeviews$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListGatewayRouteViewsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Gateways$Routeviews$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Gateways$Routeviews$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGatewayRouteViewsResponse>,
      callback: BodyResponseCallback<Schema$ListGatewayRouteViewsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Gateways$Routeviews$List,
      callback: BodyResponseCallback<Schema$ListGatewayRouteViewsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListGatewayRouteViewsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Gateways$Routeviews$List
        | BodyResponseCallback<Schema$ListGatewayRouteViewsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListGatewayRouteViewsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListGatewayRouteViewsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListGatewayRouteViewsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Gateways$Routeviews$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Gateways$Routeviews$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/routeViews').replace(
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
        createAPIRequest<Schema$ListGatewayRouteViewsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListGatewayRouteViewsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Gateways$Routeviews$Get
    extends StandardParameters {
    /**
     * Required. Name of the GatewayRouteView resource. Formats: projects/{project_number\}/locations/{location\}/gateways/{gateway\}/routeViews/{route_view\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Gateways$Routeviews$List
    extends StandardParameters {
    /**
     * Maximum number of GatewayRouteViews to return per call.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListGatewayRouteViewsResponse` Indicates that this is a continuation of a prior `ListGatewayRouteViews` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The Gateway to which a Route is associated. Formats: projects/{project_number\}/locations/{location\}/gateways/{gateway\}
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Grpcroutes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new GrpcRoute in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.grpcRoutes.create({
     *     // Required. Short name of the GrpcRoute resource to be created.
     *     grpcRouteId: 'placeholder-value',
     *     // Required. The parent resource of the GrpcRoute. Must be in the format `projects/x/locations/global`.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "gateways": [],
     *       //   "hostnames": [],
     *       //   "labels": {},
     *       //   "meshes": [],
     *       //   "name": "my_name",
     *       //   "rules": [],
     *       //   "selfLink": "my_selfLink",
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
      params: Params$Resource$Projects$Locations$Grpcroutes$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Grpcroutes$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Grpcroutes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Grpcroutes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Grpcroutes$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Grpcroutes$Create
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
        {}) as Params$Resource$Projects$Locations$Grpcroutes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Grpcroutes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/grpcRoutes').replace(
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
     * Deletes a single GrpcRoute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.grpcRoutes.delete({
     *     // Required. A name of the GrpcRoute to delete. Must be in the format `projects/x/locations/global/grpcRoutes/x`.
     *     name: 'projects/my-project/locations/my-location/grpcRoutes/my-grpcRoute',
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
      params: Params$Resource$Projects$Locations$Grpcroutes$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Grpcroutes$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Grpcroutes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Grpcroutes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Grpcroutes$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Grpcroutes$Delete
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
        {}) as Params$Resource$Projects$Locations$Grpcroutes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Grpcroutes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * Gets details of a single GrpcRoute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.grpcRoutes.get({
     *     // Required. A name of the GrpcRoute to get. Must be in the format `projects/x/locations/global/grpcRoutes/x`.
     *     name: 'projects/my-project/locations/my-location/grpcRoutes/my-grpcRoute',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "gateways": [],
     *   //   "hostnames": [],
     *   //   "labels": {},
     *   //   "meshes": [],
     *   //   "name": "my_name",
     *   //   "rules": [],
     *   //   "selfLink": "my_selfLink",
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
      params: Params$Resource$Projects$Locations$Grpcroutes$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Grpcroutes$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GrpcRoute>>;
    get(
      params: Params$Resource$Projects$Locations$Grpcroutes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Grpcroutes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$GrpcRoute>,
      callback: BodyResponseCallback<Schema$GrpcRoute>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Grpcroutes$Get,
      callback: BodyResponseCallback<Schema$GrpcRoute>
    ): void;
    get(callback: BodyResponseCallback<Schema$GrpcRoute>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Grpcroutes$Get
        | BodyResponseCallback<Schema$GrpcRoute>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GrpcRoute>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GrpcRoute>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GrpcRoute>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Grpcroutes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Grpcroutes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
        createAPIRequest<Schema$GrpcRoute>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GrpcRoute>(parameters);
      }
    }

    /**
     * Lists GrpcRoutes in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.grpcRoutes.list({
     *     // Maximum number of GrpcRoutes to return per call.
     *     pageSize: 'placeholder-value',
     *     // The value returned by the last `ListGrpcRoutesResponse` Indicates that this is a continuation of a prior `ListGrpcRoutes` call, and that the system should return the next page of data.
     *     pageToken: 'placeholder-value',
     *     // Required. The project and location from which the GrpcRoutes should be listed, specified in the format `projects/x/locations/global`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail.
     *     returnPartialSuccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "grpcRoutes": [],
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
      params: Params$Resource$Projects$Locations$Grpcroutes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Grpcroutes$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListGrpcRoutesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Grpcroutes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Grpcroutes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGrpcRoutesResponse>,
      callback: BodyResponseCallback<Schema$ListGrpcRoutesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Grpcroutes$List,
      callback: BodyResponseCallback<Schema$ListGrpcRoutesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListGrpcRoutesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Grpcroutes$List
        | BodyResponseCallback<Schema$ListGrpcRoutesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListGrpcRoutesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListGrpcRoutesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListGrpcRoutesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Grpcroutes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Grpcroutes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/grpcRoutes').replace(
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
        createAPIRequest<Schema$ListGrpcRoutesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListGrpcRoutesResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single GrpcRoute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.grpcRoutes.patch({
     *     // Identifier. Name of the GrpcRoute resource. It matches pattern `projects/x/locations/global/grpcRoutes/`
     *     name: 'projects/my-project/locations/my-location/grpcRoutes/my-grpcRoute',
     *     // Optional. Field mask is used to specify the fields to be overwritten in the GrpcRoute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "gateways": [],
     *       //   "hostnames": [],
     *       //   "labels": {},
     *       //   "meshes": [],
     *       //   "name": "my_name",
     *       //   "rules": [],
     *       //   "selfLink": "my_selfLink",
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
      params: Params$Resource$Projects$Locations$Grpcroutes$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Grpcroutes$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Grpcroutes$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Grpcroutes$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Grpcroutes$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Grpcroutes$Patch
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
        {}) as Params$Resource$Projects$Locations$Grpcroutes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Grpcroutes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Grpcroutes$Create
    extends StandardParameters {
    /**
     * Required. Short name of the GrpcRoute resource to be created.
     */
    grpcRouteId?: string;
    /**
     * Required. The parent resource of the GrpcRoute. Must be in the format `projects/x/locations/global`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GrpcRoute;
  }
  export interface Params$Resource$Projects$Locations$Grpcroutes$Delete
    extends StandardParameters {
    /**
     * Required. A name of the GrpcRoute to delete. Must be in the format `projects/x/locations/global/grpcRoutes/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Grpcroutes$Get
    extends StandardParameters {
    /**
     * Required. A name of the GrpcRoute to get. Must be in the format `projects/x/locations/global/grpcRoutes/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Grpcroutes$List
    extends StandardParameters {
    /**
     * Maximum number of GrpcRoutes to return per call.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListGrpcRoutesResponse` Indicates that this is a continuation of a prior `ListGrpcRoutes` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The project and location from which the GrpcRoutes should be listed, specified in the format `projects/x/locations/global`.
     */
    parent?: string;
    /**
     * Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail.
     */
    returnPartialSuccess?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Grpcroutes$Patch
    extends StandardParameters {
    /**
     * Identifier. Name of the GrpcRoute resource. It matches pattern `projects/x/locations/global/grpcRoutes/`
     */
    name?: string;
    /**
     * Optional. Field mask is used to specify the fields to be overwritten in the GrpcRoute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GrpcRoute;
  }

  export class Resource$Projects$Locations$Httproutes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new HttpRoute in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.httpRoutes.create({
     *     // Required. Short name of the HttpRoute resource to be created.
     *     httpRouteId: 'placeholder-value',
     *     // Required. The parent resource of the HttpRoute. Must be in the format `projects/x/locations/global`.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "gateways": [],
     *       //   "hostnames": [],
     *       //   "labels": {},
     *       //   "meshes": [],
     *       //   "name": "my_name",
     *       //   "rules": [],
     *       //   "selfLink": "my_selfLink",
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
      params: Params$Resource$Projects$Locations$Httproutes$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Httproutes$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Httproutes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Httproutes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Httproutes$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Httproutes$Create
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
        {}) as Params$Resource$Projects$Locations$Httproutes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Httproutes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/httpRoutes').replace(
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
     * Deletes a single HttpRoute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.httpRoutes.delete({
     *     // Required. A name of the HttpRoute to delete. Must be in the format `projects/x/locations/global/httpRoutes/x`.
     *     name: 'projects/my-project/locations/my-location/httpRoutes/my-httpRoute',
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
      params: Params$Resource$Projects$Locations$Httproutes$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Httproutes$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Httproutes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Httproutes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Httproutes$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Httproutes$Delete
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
        {}) as Params$Resource$Projects$Locations$Httproutes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Httproutes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * Gets details of a single HttpRoute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.httpRoutes.get({
     *     // Required. A name of the HttpRoute to get. Must be in the format `projects/x/locations/global/httpRoutes/x`.
     *     name: 'projects/my-project/locations/my-location/httpRoutes/my-httpRoute',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "gateways": [],
     *   //   "hostnames": [],
     *   //   "labels": {},
     *   //   "meshes": [],
     *   //   "name": "my_name",
     *   //   "rules": [],
     *   //   "selfLink": "my_selfLink",
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
      params: Params$Resource$Projects$Locations$Httproutes$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Httproutes$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpRoute>>;
    get(
      params: Params$Resource$Projects$Locations$Httproutes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Httproutes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$HttpRoute>,
      callback: BodyResponseCallback<Schema$HttpRoute>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Httproutes$Get,
      callback: BodyResponseCallback<Schema$HttpRoute>
    ): void;
    get(callback: BodyResponseCallback<Schema$HttpRoute>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Httproutes$Get
        | BodyResponseCallback<Schema$HttpRoute>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpRoute>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpRoute>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpRoute>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Httproutes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Httproutes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
        createAPIRequest<Schema$HttpRoute>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpRoute>(parameters);
      }
    }

    /**
     * Lists HttpRoute in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.httpRoutes.list({
     *     // Maximum number of HttpRoutes to return per call.
     *     pageSize: 'placeholder-value',
     *     // The value returned by the last `ListHttpRoutesResponse` Indicates that this is a continuation of a prior `ListHttpRoutes` call, and that the system should return the next page of data.
     *     pageToken: 'placeholder-value',
     *     // Required. The project and location from which the HttpRoutes should be listed, specified in the format `projects/x/locations/global`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail.
     *     returnPartialSuccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "httpRoutes": [],
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
      params: Params$Resource$Projects$Locations$Httproutes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Httproutes$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListHttpRoutesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Httproutes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Httproutes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListHttpRoutesResponse>,
      callback: BodyResponseCallback<Schema$ListHttpRoutesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Httproutes$List,
      callback: BodyResponseCallback<Schema$ListHttpRoutesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListHttpRoutesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Httproutes$List
        | BodyResponseCallback<Schema$ListHttpRoutesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListHttpRoutesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListHttpRoutesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListHttpRoutesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Httproutes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Httproutes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/httpRoutes').replace(
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
        createAPIRequest<Schema$ListHttpRoutesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListHttpRoutesResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single HttpRoute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.httpRoutes.patch({
     *     // Identifier. Name of the HttpRoute resource. It matches pattern `projects/x/locations/global/httpRoutes/http_route_name\>`.
     *     name: 'projects/my-project/locations/my-location/httpRoutes/my-httpRoute',
     *     // Optional. Field mask is used to specify the fields to be overwritten in the HttpRoute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "gateways": [],
     *       //   "hostnames": [],
     *       //   "labels": {},
     *       //   "meshes": [],
     *       //   "name": "my_name",
     *       //   "rules": [],
     *       //   "selfLink": "my_selfLink",
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
      params: Params$Resource$Projects$Locations$Httproutes$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Httproutes$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Httproutes$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Httproutes$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Httproutes$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Httproutes$Patch
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
        {}) as Params$Resource$Projects$Locations$Httproutes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Httproutes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Httproutes$Create
    extends StandardParameters {
    /**
     * Required. Short name of the HttpRoute resource to be created.
     */
    httpRouteId?: string;
    /**
     * Required. The parent resource of the HttpRoute. Must be in the format `projects/x/locations/global`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpRoute;
  }
  export interface Params$Resource$Projects$Locations$Httproutes$Delete
    extends StandardParameters {
    /**
     * Required. A name of the HttpRoute to delete. Must be in the format `projects/x/locations/global/httpRoutes/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Httproutes$Get
    extends StandardParameters {
    /**
     * Required. A name of the HttpRoute to get. Must be in the format `projects/x/locations/global/httpRoutes/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Httproutes$List
    extends StandardParameters {
    /**
     * Maximum number of HttpRoutes to return per call.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListHttpRoutesResponse` Indicates that this is a continuation of a prior `ListHttpRoutes` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The project and location from which the HttpRoutes should be listed, specified in the format `projects/x/locations/global`.
     */
    parent?: string;
    /**
     * Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail.
     */
    returnPartialSuccess?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Httproutes$Patch
    extends StandardParameters {
    /**
     * Identifier. Name of the HttpRoute resource. It matches pattern `projects/x/locations/global/httpRoutes/http_route_name\>`.
     */
    name?: string;
    /**
     * Optional. Field mask is used to specify the fields to be overwritten in the HttpRoute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$HttpRoute;
  }

  export class Resource$Projects$Locations$Lbrouteextensions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new `LbRouteExtension` resource in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.lbRouteExtensions.create(
     *     {
     *       // Required. User-provided ID of the `LbRouteExtension` resource to be created.
     *       lbRouteExtensionId: 'placeholder-value',
     *       // Required. The parent resource of the `LbRouteExtension` resource. Must be in the format `projects/{project\}/locations/{location\}`.
     *       parent: 'projects/my-project/locations/my-location',
     *       // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "createTime": "my_createTime",
     *         //   "description": "my_description",
     *         //   "extensionChains": [],
     *         //   "forwardingRules": [],
     *         //   "labels": {},
     *         //   "loadBalancingScheme": "my_loadBalancingScheme",
     *         //   "metadata": {},
     *         //   "name": "my_name",
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
    create(
      params: Params$Resource$Projects$Locations$Lbrouteextensions$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Lbrouteextensions$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Lbrouteextensions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Lbrouteextensions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Lbrouteextensions$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lbrouteextensions$Create
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
        {}) as Params$Resource$Projects$Locations$Lbrouteextensions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lbrouteextensions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/lbRouteExtensions').replace(
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
     * Deletes the specified `LbRouteExtension` resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.lbRouteExtensions.delete(
     *     {
     *       // Required. The name of the `LbRouteExtension` resource to delete. Must be in the format `projects/{project\}/locations/{location\}/lbRouteExtensions/{lb_route_extension\}`.
     *       name: 'projects/my-project/locations/my-location/lbRouteExtensions/my-lbRouteExtension',
     *       // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
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
    delete(
      params: Params$Resource$Projects$Locations$Lbrouteextensions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Lbrouteextensions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Lbrouteextensions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Lbrouteextensions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Lbrouteextensions$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lbrouteextensions$Delete
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
        {}) as Params$Resource$Projects$Locations$Lbrouteextensions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lbrouteextensions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * Gets details of the specified `LbRouteExtension` resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.lbRouteExtensions.get({
     *     // Required. A name of the `LbRouteExtension` resource to get. Must be in the format `projects/{project\}/locations/{location\}/lbRouteExtensions/{lb_route_extension\}`.
     *     name: 'projects/my-project/locations/my-location/lbRouteExtensions/my-lbRouteExtension',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "extensionChains": [],
     *   //   "forwardingRules": [],
     *   //   "labels": {},
     *   //   "loadBalancingScheme": "my_loadBalancingScheme",
     *   //   "metadata": {},
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
      params: Params$Resource$Projects$Locations$Lbrouteextensions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Lbrouteextensions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LbRouteExtension>>;
    get(
      params: Params$Resource$Projects$Locations$Lbrouteextensions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lbrouteextensions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LbRouteExtension>,
      callback: BodyResponseCallback<Schema$LbRouteExtension>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lbrouteextensions$Get,
      callback: BodyResponseCallback<Schema$LbRouteExtension>
    ): void;
    get(callback: BodyResponseCallback<Schema$LbRouteExtension>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lbrouteextensions$Get
        | BodyResponseCallback<Schema$LbRouteExtension>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LbRouteExtension>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LbRouteExtension>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LbRouteExtension>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lbrouteextensions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Lbrouteextensions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
        createAPIRequest<Schema$LbRouteExtension>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LbRouteExtension>(parameters);
      }
    }

    /**
     * Lists `LbRouteExtension` resources in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.lbRouteExtensions.list({
     *     // Optional. Filtering results.
     *     filter: 'placeholder-value',
     *     // Optional. Hint about how to order the results.
     *     orderBy: 'placeholder-value',
     *     // Optional. Requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results that the server returns.
     *     pageToken: 'placeholder-value',
     *     // Required. The project and location from which the `LbRouteExtension` resources are listed. These values are specified in the following format: `projects/{project\}/locations/{location\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "lbRouteExtensions": [],
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
      params: Params$Resource$Projects$Locations$Lbrouteextensions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Lbrouteextensions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListLbRouteExtensionsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Lbrouteextensions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lbrouteextensions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLbRouteExtensionsResponse>,
      callback: BodyResponseCallback<Schema$ListLbRouteExtensionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lbrouteextensions$List,
      callback: BodyResponseCallback<Schema$ListLbRouteExtensionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListLbRouteExtensionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lbrouteextensions$List
        | BodyResponseCallback<Schema$ListLbRouteExtensionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLbRouteExtensionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLbRouteExtensionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListLbRouteExtensionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lbrouteextensions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lbrouteextensions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/lbRouteExtensions').replace(
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
        createAPIRequest<Schema$ListLbRouteExtensionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLbRouteExtensionsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the parameters of the specified `LbRouteExtension` resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.lbRouteExtensions.patch({
     *     // Required. Identifier. Name of the `LbRouteExtension` resource in the following format: `projects/{project\}/locations/{location\}/lbRouteExtensions/{lb_route_extension\}`.
     *     name: 'projects/my-project/locations/my-location/lbRouteExtensions/my-lbRouteExtension',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Optional. Used to specify the fields to be overwritten in the `LbRouteExtension` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not specify a mask, then all fields are overwritten.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "extensionChains": [],
     *       //   "forwardingRules": [],
     *       //   "labels": {},
     *       //   "loadBalancingScheme": "my_loadBalancingScheme",
     *       //   "metadata": {},
     *       //   "name": "my_name",
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
      params: Params$Resource$Projects$Locations$Lbrouteextensions$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Lbrouteextensions$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Lbrouteextensions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Lbrouteextensions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Lbrouteextensions$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lbrouteextensions$Patch
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
        {}) as Params$Resource$Projects$Locations$Lbrouteextensions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lbrouteextensions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Lbrouteextensions$Create
    extends StandardParameters {
    /**
     * Required. User-provided ID of the `LbRouteExtension` resource to be created.
     */
    lbRouteExtensionId?: string;
    /**
     * Required. The parent resource of the `LbRouteExtension` resource. Must be in the format `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LbRouteExtension;
  }
  export interface Params$Resource$Projects$Locations$Lbrouteextensions$Delete
    extends StandardParameters {
    /**
     * Required. The name of the `LbRouteExtension` resource to delete. Must be in the format `projects/{project\}/locations/{location\}/lbRouteExtensions/{lb_route_extension\}`.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Lbrouteextensions$Get
    extends StandardParameters {
    /**
     * Required. A name of the `LbRouteExtension` resource to get. Must be in the format `projects/{project\}/locations/{location\}/lbRouteExtensions/{lb_route_extension\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Lbrouteextensions$List
    extends StandardParameters {
    /**
     * Optional. Filtering results.
     */
    filter?: string;
    /**
     * Optional. Hint about how to order the results.
     */
    orderBy?: string;
    /**
     * Optional. Requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results that the server returns.
     */
    pageToken?: string;
    /**
     * Required. The project and location from which the `LbRouteExtension` resources are listed. These values are specified in the following format: `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Lbrouteextensions$Patch
    extends StandardParameters {
    /**
     * Required. Identifier. Name of the `LbRouteExtension` resource in the following format: `projects/{project\}/locations/{location\}/lbRouteExtensions/{lb_route_extension\}`.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. Used to specify the fields to be overwritten in the `LbRouteExtension` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not specify a mask, then all fields are overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LbRouteExtension;
  }

  export class Resource$Projects$Locations$Lbtrafficextensions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new `LbTrafficExtension` resource in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await networkservices.projects.locations.lbTrafficExtensions.create({
     *       // Required. User-provided ID of the `LbTrafficExtension` resource to be created.
     *       lbTrafficExtensionId: 'placeholder-value',
     *       // Required. The parent resource of the `LbTrafficExtension` resource. Must be in the format `projects/{project\}/locations/{location\}`.
     *       parent: 'projects/my-project/locations/my-location',
     *       // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "createTime": "my_createTime",
     *         //   "description": "my_description",
     *         //   "extensionChains": [],
     *         //   "forwardingRules": [],
     *         //   "labels": {},
     *         //   "loadBalancingScheme": "my_loadBalancingScheme",
     *         //   "metadata": {},
     *         //   "name": "my_name",
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
      params: Params$Resource$Projects$Locations$Lbtrafficextensions$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Lbtrafficextensions$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Lbtrafficextensions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Lbtrafficextensions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Lbtrafficextensions$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lbtrafficextensions$Create
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
        {}) as Params$Resource$Projects$Locations$Lbtrafficextensions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lbtrafficextensions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/lbTrafficExtensions').replace(
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
     * Deletes the specified `LbTrafficExtension` resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await networkservices.projects.locations.lbTrafficExtensions.delete({
     *       // Required. The name of the `LbTrafficExtension` resource to delete. Must be in the format `projects/{project\}/locations/{location\}/lbTrafficExtensions/{lb_traffic_extension\}`.
     *       name: 'projects/my-project/locations/my-location/lbTrafficExtensions/my-lbTrafficExtension',
     *       // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Lbtrafficextensions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Lbtrafficextensions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Lbtrafficextensions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Lbtrafficextensions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Lbtrafficextensions$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lbtrafficextensions$Delete
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
        {}) as Params$Resource$Projects$Locations$Lbtrafficextensions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lbtrafficextensions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * Gets details of the specified `LbTrafficExtension` resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.lbTrafficExtensions.get({
     *     // Required. A name of the `LbTrafficExtension` resource to get. Must be in the format `projects/{project\}/locations/{location\}/lbTrafficExtensions/{lb_traffic_extension\}`.
     *     name: 'projects/my-project/locations/my-location/lbTrafficExtensions/my-lbTrafficExtension',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "extensionChains": [],
     *   //   "forwardingRules": [],
     *   //   "labels": {},
     *   //   "loadBalancingScheme": "my_loadBalancingScheme",
     *   //   "metadata": {},
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
      params: Params$Resource$Projects$Locations$Lbtrafficextensions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Lbtrafficextensions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LbTrafficExtension>>;
    get(
      params: Params$Resource$Projects$Locations$Lbtrafficextensions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lbtrafficextensions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LbTrafficExtension>,
      callback: BodyResponseCallback<Schema$LbTrafficExtension>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Lbtrafficextensions$Get,
      callback: BodyResponseCallback<Schema$LbTrafficExtension>
    ): void;
    get(callback: BodyResponseCallback<Schema$LbTrafficExtension>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lbtrafficextensions$Get
        | BodyResponseCallback<Schema$LbTrafficExtension>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LbTrafficExtension>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LbTrafficExtension>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LbTrafficExtension>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lbtrafficextensions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lbtrafficextensions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
        createAPIRequest<Schema$LbTrafficExtension>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LbTrafficExtension>(parameters);
      }
    }

    /**
     * Lists `LbTrafficExtension` resources in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.lbTrafficExtensions.list(
     *     {
     *       // Optional. Filtering results.
     *       filter: 'placeholder-value',
     *       // Optional. Hint about how to order the results.
     *       orderBy: 'placeholder-value',
     *       // Optional. Requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default.
     *       pageSize: 'placeholder-value',
     *       // Optional. A token identifying a page of results that the server returns.
     *       pageToken: 'placeholder-value',
     *       // Required. The project and location from which the `LbTrafficExtension` resources are listed. These values are specified in the following format: `projects/{project\}/locations/{location\}`.
     *       parent: 'projects/my-project/locations/my-location',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "lbTrafficExtensions": [],
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
      params: Params$Resource$Projects$Locations$Lbtrafficextensions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Lbtrafficextensions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListLbTrafficExtensionsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Lbtrafficextensions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lbtrafficextensions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLbTrafficExtensionsResponse>,
      callback: BodyResponseCallback<Schema$ListLbTrafficExtensionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Lbtrafficextensions$List,
      callback: BodyResponseCallback<Schema$ListLbTrafficExtensionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListLbTrafficExtensionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lbtrafficextensions$List
        | BodyResponseCallback<Schema$ListLbTrafficExtensionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLbTrafficExtensionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLbTrafficExtensionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListLbTrafficExtensionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Lbtrafficextensions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lbtrafficextensions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/lbTrafficExtensions').replace(
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
        createAPIRequest<Schema$ListLbTrafficExtensionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLbTrafficExtensionsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the parameters of the specified `LbTrafficExtension` resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await networkservices.projects.locations.lbTrafficExtensions.patch({
     *       // Required. Identifier. Name of the `LbTrafficExtension` resource in the following format: `projects/{project\}/locations/{location\}/lbTrafficExtensions/{lb_traffic_extension\}`.
     *       name: 'projects/my-project/locations/my-location/lbTrafficExtensions/my-lbTrafficExtension',
     *       // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *       // Optional. Used to specify the fields to be overwritten in the `LbTrafficExtension` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not specify a mask, then all fields are overwritten.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "createTime": "my_createTime",
     *         //   "description": "my_description",
     *         //   "extensionChains": [],
     *         //   "forwardingRules": [],
     *         //   "labels": {},
     *         //   "loadBalancingScheme": "my_loadBalancingScheme",
     *         //   "metadata": {},
     *         //   "name": "my_name",
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
      params: Params$Resource$Projects$Locations$Lbtrafficextensions$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Lbtrafficextensions$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Lbtrafficextensions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Lbtrafficextensions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Lbtrafficextensions$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Lbtrafficextensions$Patch
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
        {}) as Params$Resource$Projects$Locations$Lbtrafficextensions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Lbtrafficextensions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Lbtrafficextensions$Create
    extends StandardParameters {
    /**
     * Required. User-provided ID of the `LbTrafficExtension` resource to be created.
     */
    lbTrafficExtensionId?: string;
    /**
     * Required. The parent resource of the `LbTrafficExtension` resource. Must be in the format `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LbTrafficExtension;
  }
  export interface Params$Resource$Projects$Locations$Lbtrafficextensions$Delete
    extends StandardParameters {
    /**
     * Required. The name of the `LbTrafficExtension` resource to delete. Must be in the format `projects/{project\}/locations/{location\}/lbTrafficExtensions/{lb_traffic_extension\}`.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Lbtrafficextensions$Get
    extends StandardParameters {
    /**
     * Required. A name of the `LbTrafficExtension` resource to get. Must be in the format `projects/{project\}/locations/{location\}/lbTrafficExtensions/{lb_traffic_extension\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Lbtrafficextensions$List
    extends StandardParameters {
    /**
     * Optional. Filtering results.
     */
    filter?: string;
    /**
     * Optional. Hint about how to order the results.
     */
    orderBy?: string;
    /**
     * Optional. Requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results that the server returns.
     */
    pageToken?: string;
    /**
     * Required. The project and location from which the `LbTrafficExtension` resources are listed. These values are specified in the following format: `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Lbtrafficextensions$Patch
    extends StandardParameters {
    /**
     * Required. Identifier. Name of the `LbTrafficExtension` resource in the following format: `projects/{project\}/locations/{location\}/lbTrafficExtensions/{lb_traffic_extension\}`.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. Used to specify the fields to be overwritten in the `LbTrafficExtension` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not specify a mask, then all fields are overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LbTrafficExtension;
  }

  export class Resource$Projects$Locations$Meshes {
    context: APIRequestContext;
    routeViews: Resource$Projects$Locations$Meshes$Routeviews;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.routeViews = new Resource$Projects$Locations$Meshes$Routeviews(
        this.context
      );
    }

    /**
     * Creates a new Mesh in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.meshes.create({
     *     // Required. Short name of the Mesh resource to be created.
     *     meshId: 'placeholder-value',
     *     // Required. The parent resource of the Mesh. Must be in the format `projects/x/locations/global`.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "envoyHeaders": "my_envoyHeaders",
     *       //   "interceptionPort": 0,
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "selfLink": "my_selfLink",
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
      params: Params$Resource$Projects$Locations$Meshes$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Meshes$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Meshes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Meshes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Meshes$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Meshes$Create
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
        {}) as Params$Resource$Projects$Locations$Meshes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Meshes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/meshes').replace(
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
     * Deletes a single Mesh.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.meshes.delete({
     *     // Required. A name of the Mesh to delete. Must be in the format `projects/x/locations/global/meshes/x`.
     *     name: 'projects/my-project/locations/my-location/meshes/my-meshe',
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
      params: Params$Resource$Projects$Locations$Meshes$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Meshes$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Meshes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Meshes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Meshes$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Meshes$Delete
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
        {}) as Params$Resource$Projects$Locations$Meshes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Meshes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * Gets details of a single Mesh.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.meshes.get({
     *     // Required. A name of the Mesh to get. Must be in the format `projects/x/locations/global/meshes/x`.
     *     name: 'projects/my-project/locations/my-location/meshes/my-meshe',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "envoyHeaders": "my_envoyHeaders",
     *   //   "interceptionPort": 0,
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "selfLink": "my_selfLink",
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
      params: Params$Resource$Projects$Locations$Meshes$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Meshes$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Mesh>>;
    get(
      params: Params$Resource$Projects$Locations$Meshes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Meshes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Mesh>,
      callback: BodyResponseCallback<Schema$Mesh>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Meshes$Get,
      callback: BodyResponseCallback<Schema$Mesh>
    ): void;
    get(callback: BodyResponseCallback<Schema$Mesh>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Meshes$Get
        | BodyResponseCallback<Schema$Mesh>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Mesh>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Mesh>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Mesh>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Meshes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Meshes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
        createAPIRequest<Schema$Mesh>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Mesh>(parameters);
      }
    }

    /**
     * Lists Meshes in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.meshes.list({
     *     // Maximum number of Meshes to return per call.
     *     pageSize: 'placeholder-value',
     *     // The value returned by the last `ListMeshesResponse` Indicates that this is a continuation of a prior `ListMeshes` call, and that the system should return the next page of data.
     *     pageToken: 'placeholder-value',
     *     // Required. The project and location from which the Meshes should be listed, specified in the format `projects/x/locations/global`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail.
     *     returnPartialSuccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "meshes": [],
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
      params: Params$Resource$Projects$Locations$Meshes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Meshes$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListMeshesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Meshes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Meshes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListMeshesResponse>,
      callback: BodyResponseCallback<Schema$ListMeshesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Meshes$List,
      callback: BodyResponseCallback<Schema$ListMeshesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListMeshesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Meshes$List
        | BodyResponseCallback<Schema$ListMeshesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMeshesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMeshesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListMeshesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Meshes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Meshes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/meshes').replace(
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
        createAPIRequest<Schema$ListMeshesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMeshesResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single Mesh.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.meshes.patch({
     *     // Identifier. Name of the Mesh resource. It matches pattern `projects/x/locations/global/meshes/`.
     *     name: 'projects/my-project/locations/my-location/meshes/my-meshe',
     *     // Optional. Field mask is used to specify the fields to be overwritten in the Mesh resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "envoyHeaders": "my_envoyHeaders",
     *       //   "interceptionPort": 0,
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "selfLink": "my_selfLink",
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
      params: Params$Resource$Projects$Locations$Meshes$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Meshes$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Meshes$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Meshes$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Meshes$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Meshes$Patch
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
        {}) as Params$Resource$Projects$Locations$Meshes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Meshes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Meshes$Create
    extends StandardParameters {
    /**
     * Required. Short name of the Mesh resource to be created.
     */
    meshId?: string;
    /**
     * Required. The parent resource of the Mesh. Must be in the format `projects/x/locations/global`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Mesh;
  }
  export interface Params$Resource$Projects$Locations$Meshes$Delete
    extends StandardParameters {
    /**
     * Required. A name of the Mesh to delete. Must be in the format `projects/x/locations/global/meshes/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Meshes$Get
    extends StandardParameters {
    /**
     * Required. A name of the Mesh to get. Must be in the format `projects/x/locations/global/meshes/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Meshes$List
    extends StandardParameters {
    /**
     * Maximum number of Meshes to return per call.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListMeshesResponse` Indicates that this is a continuation of a prior `ListMeshes` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The project and location from which the Meshes should be listed, specified in the format `projects/x/locations/global`.
     */
    parent?: string;
    /**
     * Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail.
     */
    returnPartialSuccess?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Meshes$Patch
    extends StandardParameters {
    /**
     * Identifier. Name of the Mesh resource. It matches pattern `projects/x/locations/global/meshes/`.
     */
    name?: string;
    /**
     * Optional. Field mask is used to specify the fields to be overwritten in the Mesh resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Mesh;
  }

  export class Resource$Projects$Locations$Meshes$Routeviews {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get a single RouteView of a Mesh.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.meshes.routeViews.get({
     *     // Required. Name of the MeshRouteView resource. Format: projects/{project_number\}/locations/{location\}/meshes/{mesh\}/routeViews/{route_view\}
     *     name: 'projects/my-project/locations/my-location/meshes/my-meshe/routeViews/my-routeView',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "routeId": "my_routeId",
     *   //   "routeLocation": "my_routeLocation",
     *   //   "routeProjectNumber": "my_routeProjectNumber",
     *   //   "routeType": "my_routeType"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Meshes$Routeviews$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Meshes$Routeviews$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$MeshRouteView>>;
    get(
      params: Params$Resource$Projects$Locations$Meshes$Routeviews$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Meshes$Routeviews$Get,
      options: MethodOptions | BodyResponseCallback<Schema$MeshRouteView>,
      callback: BodyResponseCallback<Schema$MeshRouteView>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Meshes$Routeviews$Get,
      callback: BodyResponseCallback<Schema$MeshRouteView>
    ): void;
    get(callback: BodyResponseCallback<Schema$MeshRouteView>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Meshes$Routeviews$Get
        | BodyResponseCallback<Schema$MeshRouteView>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MeshRouteView>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MeshRouteView>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$MeshRouteView>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Meshes$Routeviews$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Meshes$Routeviews$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
        createAPIRequest<Schema$MeshRouteView>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MeshRouteView>(parameters);
      }
    }

    /**
     * Lists RouteViews
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.meshes.routeViews.list({
     *     // Maximum number of MeshRouteViews to return per call.
     *     pageSize: 'placeholder-value',
     *     // The value returned by the last `ListMeshRouteViewsResponse` Indicates that this is a continuation of a prior `ListMeshRouteViews` call, and that the system should return the next page of data.
     *     pageToken: 'placeholder-value',
     *     // Required. The Mesh to which a Route is associated. Format: projects/{project_number\}/locations/{location\}/meshes/{mesh\}
     *     parent: 'projects/my-project/locations/my-location/meshes/my-meshe',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "meshRouteViews": [],
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
      params: Params$Resource$Projects$Locations$Meshes$Routeviews$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Meshes$Routeviews$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListMeshRouteViewsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Meshes$Routeviews$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Meshes$Routeviews$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMeshRouteViewsResponse>,
      callback: BodyResponseCallback<Schema$ListMeshRouteViewsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Meshes$Routeviews$List,
      callback: BodyResponseCallback<Schema$ListMeshRouteViewsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListMeshRouteViewsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Meshes$Routeviews$List
        | BodyResponseCallback<Schema$ListMeshRouteViewsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMeshRouteViewsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMeshRouteViewsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListMeshRouteViewsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Meshes$Routeviews$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Meshes$Routeviews$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/routeViews').replace(
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
        createAPIRequest<Schema$ListMeshRouteViewsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMeshRouteViewsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Meshes$Routeviews$Get
    extends StandardParameters {
    /**
     * Required. Name of the MeshRouteView resource. Format: projects/{project_number\}/locations/{location\}/meshes/{mesh\}/routeViews/{route_view\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Meshes$Routeviews$List
    extends StandardParameters {
    /**
     * Maximum number of MeshRouteViews to return per call.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListMeshRouteViewsResponse` Indicates that this is a continuation of a prior `ListMeshRouteViews` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The Mesh to which a Route is associated. Format: projects/{project_number\}/locations/{location\}/meshes/{mesh\}
     */
    parent?: string;
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
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.operations.cancel({
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

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.operations.delete({
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

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.operations.get({
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

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.operations.list({
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

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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

  export class Resource$Projects$Locations$Servicebindings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new ServiceBinding in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.serviceBindings.create({
     *     // Required. The parent resource of the ServiceBinding. Must be in the format `projects/x/locations/x`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. Short name of the ServiceBinding resource to be created.
     *     serviceBindingId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "service": "my_service",
     *       //   "serviceId": "my_serviceId",
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
      params: Params$Resource$Projects$Locations$Servicebindings$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Servicebindings$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Servicebindings$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Servicebindings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Servicebindings$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Servicebindings$Create
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
        {}) as Params$Resource$Projects$Locations$Servicebindings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Servicebindings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/serviceBindings').replace(
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
     * Deletes a single ServiceBinding.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.serviceBindings.delete({
     *     // Required. A name of the ServiceBinding to delete. Must be in the format `projects/x/locations/x/serviceBindings/x`.
     *     name: 'projects/my-project/locations/my-location/serviceBindings/my-serviceBinding',
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
      params: Params$Resource$Projects$Locations$Servicebindings$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Servicebindings$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Servicebindings$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Servicebindings$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Servicebindings$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Servicebindings$Delete
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
        {}) as Params$Resource$Projects$Locations$Servicebindings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Servicebindings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * Gets details of a single ServiceBinding.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.serviceBindings.get({
     *     // Required. A name of the ServiceBinding to get. Must be in the format `projects/x/locations/x/serviceBindings/x`.
     *     name: 'projects/my-project/locations/my-location/serviceBindings/my-serviceBinding',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "service": "my_service",
     *   //   "serviceId": "my_serviceId",
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
      params: Params$Resource$Projects$Locations$Servicebindings$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Servicebindings$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ServiceBinding>>;
    get(
      params: Params$Resource$Projects$Locations$Servicebindings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Servicebindings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ServiceBinding>,
      callback: BodyResponseCallback<Schema$ServiceBinding>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Servicebindings$Get,
      callback: BodyResponseCallback<Schema$ServiceBinding>
    ): void;
    get(callback: BodyResponseCallback<Schema$ServiceBinding>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Servicebindings$Get
        | BodyResponseCallback<Schema$ServiceBinding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ServiceBinding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ServiceBinding>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ServiceBinding>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Servicebindings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Servicebindings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
        createAPIRequest<Schema$ServiceBinding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ServiceBinding>(parameters);
      }
    }

    /**
     * Lists ServiceBinding in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.serviceBindings.list({
     *     // Maximum number of ServiceBindings to return per call.
     *     pageSize: 'placeholder-value',
     *     // The value returned by the last `ListServiceBindingsResponse` Indicates that this is a continuation of a prior `ListRouters` call, and that the system should return the next page of data.
     *     pageToken: 'placeholder-value',
     *     // Required. The project and location from which the ServiceBindings should be listed, specified in the format `projects/x/locations/x`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "serviceBindings": [],
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
      params: Params$Resource$Projects$Locations$Servicebindings$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Servicebindings$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListServiceBindingsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Servicebindings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Servicebindings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListServiceBindingsResponse>,
      callback: BodyResponseCallback<Schema$ListServiceBindingsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Servicebindings$List,
      callback: BodyResponseCallback<Schema$ListServiceBindingsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListServiceBindingsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Servicebindings$List
        | BodyResponseCallback<Schema$ListServiceBindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListServiceBindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListServiceBindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListServiceBindingsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Servicebindings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Servicebindings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/serviceBindings').replace(
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
        createAPIRequest<Schema$ListServiceBindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListServiceBindingsResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single ServiceBinding.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.serviceBindings.patch({
     *     // Identifier. Name of the ServiceBinding resource. It matches pattern `projects/x/locations/x/serviceBindings/`.
     *     name: 'projects/my-project/locations/my-location/serviceBindings/my-serviceBinding',
     *     // Optional. Field mask is used to specify the fields to be overwritten in the ServiceBinding resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "service": "my_service",
     *       //   "serviceId": "my_serviceId",
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
      params: Params$Resource$Projects$Locations$Servicebindings$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Servicebindings$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Servicebindings$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Servicebindings$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Servicebindings$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Servicebindings$Patch
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
        {}) as Params$Resource$Projects$Locations$Servicebindings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Servicebindings$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Servicebindings$Create
    extends StandardParameters {
    /**
     * Required. The parent resource of the ServiceBinding. Must be in the format `projects/x/locations/x`.
     */
    parent?: string;
    /**
     * Required. Short name of the ServiceBinding resource to be created.
     */
    serviceBindingId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ServiceBinding;
  }
  export interface Params$Resource$Projects$Locations$Servicebindings$Delete
    extends StandardParameters {
    /**
     * Required. A name of the ServiceBinding to delete. Must be in the format `projects/x/locations/x/serviceBindings/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Servicebindings$Get
    extends StandardParameters {
    /**
     * Required. A name of the ServiceBinding to get. Must be in the format `projects/x/locations/x/serviceBindings/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Servicebindings$List
    extends StandardParameters {
    /**
     * Maximum number of ServiceBindings to return per call.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListServiceBindingsResponse` Indicates that this is a continuation of a prior `ListRouters` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The project and location from which the ServiceBindings should be listed, specified in the format `projects/x/locations/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Servicebindings$Patch
    extends StandardParameters {
    /**
     * Identifier. Name of the ServiceBinding resource. It matches pattern `projects/x/locations/x/serviceBindings/`.
     */
    name?: string;
    /**
     * Optional. Field mask is used to specify the fields to be overwritten in the ServiceBinding resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ServiceBinding;
  }

  export class Resource$Projects$Locations$Servicelbpolicies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new ServiceLbPolicy in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.serviceLbPolicies.create(
     *     {
     *       // Required. The parent resource of the ServiceLbPolicy. Must be in the format `projects/{project\}/locations/{location\}`.
     *       parent: 'projects/my-project/locations/my-location',
     *       // Required. Short name of the ServiceLbPolicy resource to be created. E.g. for resource name `projects/{project\}/locations/{location\}/serviceLbPolicies/{service_lb_policy_name\}`. the id is value of {service_lb_policy_name\}
     *       serviceLbPolicyId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "autoCapacityDrain": {},
     *         //   "createTime": "my_createTime",
     *         //   "description": "my_description",
     *         //   "failoverConfig": {},
     *         //   "isolationConfig": {},
     *         //   "labels": {},
     *         //   "loadBalancingAlgorithm": "my_loadBalancingAlgorithm",
     *         //   "name": "my_name",
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
    create(
      params: Params$Resource$Projects$Locations$Servicelbpolicies$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Servicelbpolicies$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Servicelbpolicies$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Servicelbpolicies$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Servicelbpolicies$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Servicelbpolicies$Create
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
        {}) as Params$Resource$Projects$Locations$Servicelbpolicies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Servicelbpolicies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/serviceLbPolicies').replace(
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
     * Deletes a single ServiceLbPolicy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.serviceLbPolicies.delete(
     *     {
     *       // Required. A name of the ServiceLbPolicy to delete. Must be in the format `projects/{project\}/locations/{location\}/serviceLbPolicies/x`.
     *       name: 'projects/my-project/locations/my-location/serviceLbPolicies/my-serviceLbPolicie',
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
    delete(
      params: Params$Resource$Projects$Locations$Servicelbpolicies$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Servicelbpolicies$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Servicelbpolicies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Servicelbpolicies$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Servicelbpolicies$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Servicelbpolicies$Delete
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
        {}) as Params$Resource$Projects$Locations$Servicelbpolicies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Servicelbpolicies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * Gets details of a single ServiceLbPolicy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.serviceLbPolicies.get({
     *     // Required. A name of the ServiceLbPolicy to get. Must be in the format `projects/{project\}/locations/{location\}/serviceLbPolicies/x`.
     *     name: 'projects/my-project/locations/my-location/serviceLbPolicies/my-serviceLbPolicie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autoCapacityDrain": {},
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "failoverConfig": {},
     *   //   "isolationConfig": {},
     *   //   "labels": {},
     *   //   "loadBalancingAlgorithm": "my_loadBalancingAlgorithm",
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
      params: Params$Resource$Projects$Locations$Servicelbpolicies$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Servicelbpolicies$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ServiceLbPolicy>>;
    get(
      params: Params$Resource$Projects$Locations$Servicelbpolicies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Servicelbpolicies$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ServiceLbPolicy>,
      callback: BodyResponseCallback<Schema$ServiceLbPolicy>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Servicelbpolicies$Get,
      callback: BodyResponseCallback<Schema$ServiceLbPolicy>
    ): void;
    get(callback: BodyResponseCallback<Schema$ServiceLbPolicy>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Servicelbpolicies$Get
        | BodyResponseCallback<Schema$ServiceLbPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ServiceLbPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ServiceLbPolicy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ServiceLbPolicy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Servicelbpolicies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Servicelbpolicies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
        createAPIRequest<Schema$ServiceLbPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ServiceLbPolicy>(parameters);
      }
    }

    /**
     * Lists ServiceLbPolicies in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.serviceLbPolicies.list({
     *     // Maximum number of ServiceLbPolicies to return per call.
     *     pageSize: 'placeholder-value',
     *     // The value returned by the last `ListServiceLbPoliciesResponse` Indicates that this is a continuation of a prior `ListRouters` call, and that the system should return the next page of data.
     *     pageToken: 'placeholder-value',
     *     // Required. The project and location from which the ServiceLbPolicies should be listed, specified in the format `projects/{project\}/locations/{location\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "serviceLbPolicies": [],
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
      params: Params$Resource$Projects$Locations$Servicelbpolicies$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Servicelbpolicies$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListServiceLbPoliciesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Servicelbpolicies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Servicelbpolicies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListServiceLbPoliciesResponse>,
      callback: BodyResponseCallback<Schema$ListServiceLbPoliciesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Servicelbpolicies$List,
      callback: BodyResponseCallback<Schema$ListServiceLbPoliciesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListServiceLbPoliciesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Servicelbpolicies$List
        | BodyResponseCallback<Schema$ListServiceLbPoliciesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListServiceLbPoliciesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListServiceLbPoliciesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListServiceLbPoliciesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Servicelbpolicies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Servicelbpolicies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/serviceLbPolicies').replace(
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
        createAPIRequest<Schema$ListServiceLbPoliciesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListServiceLbPoliciesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the parameters of a single ServiceLbPolicy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.serviceLbPolicies.patch({
     *     // Identifier. Name of the ServiceLbPolicy resource. It matches pattern `projects/{project\}/locations/{location\}/serviceLbPolicies/{service_lb_policy_name\}`.
     *     name: 'projects/my-project/locations/my-location/serviceLbPolicies/my-serviceLbPolicie',
     *     // Optional. Field mask is used to specify the fields to be overwritten in the ServiceLbPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "autoCapacityDrain": {},
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "failoverConfig": {},
     *       //   "isolationConfig": {},
     *       //   "labels": {},
     *       //   "loadBalancingAlgorithm": "my_loadBalancingAlgorithm",
     *       //   "name": "my_name",
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
      params: Params$Resource$Projects$Locations$Servicelbpolicies$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Servicelbpolicies$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Servicelbpolicies$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Servicelbpolicies$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Servicelbpolicies$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Servicelbpolicies$Patch
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
        {}) as Params$Resource$Projects$Locations$Servicelbpolicies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Servicelbpolicies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Servicelbpolicies$Create
    extends StandardParameters {
    /**
     * Required. The parent resource of the ServiceLbPolicy. Must be in the format `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
    /**
     * Required. Short name of the ServiceLbPolicy resource to be created. E.g. for resource name `projects/{project\}/locations/{location\}/serviceLbPolicies/{service_lb_policy_name\}`. the id is value of {service_lb_policy_name\}
     */
    serviceLbPolicyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ServiceLbPolicy;
  }
  export interface Params$Resource$Projects$Locations$Servicelbpolicies$Delete
    extends StandardParameters {
    /**
     * Required. A name of the ServiceLbPolicy to delete. Must be in the format `projects/{project\}/locations/{location\}/serviceLbPolicies/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Servicelbpolicies$Get
    extends StandardParameters {
    /**
     * Required. A name of the ServiceLbPolicy to get. Must be in the format `projects/{project\}/locations/{location\}/serviceLbPolicies/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Servicelbpolicies$List
    extends StandardParameters {
    /**
     * Maximum number of ServiceLbPolicies to return per call.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListServiceLbPoliciesResponse` Indicates that this is a continuation of a prior `ListRouters` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The project and location from which the ServiceLbPolicies should be listed, specified in the format `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Servicelbpolicies$Patch
    extends StandardParameters {
    /**
     * Identifier. Name of the ServiceLbPolicy resource. It matches pattern `projects/{project\}/locations/{location\}/serviceLbPolicies/{service_lb_policy_name\}`.
     */
    name?: string;
    /**
     * Optional. Field mask is used to specify the fields to be overwritten in the ServiceLbPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ServiceLbPolicy;
  }

  export class Resource$Projects$Locations$Tcproutes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new TcpRoute in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.tcpRoutes.create({
     *     // Required. The parent resource of the TcpRoute. Must be in the format `projects/x/locations/global`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. Short name of the TcpRoute resource to be created.
     *     tcpRouteId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "gateways": [],
     *       //   "labels": {},
     *       //   "meshes": [],
     *       //   "name": "my_name",
     *       //   "rules": [],
     *       //   "selfLink": "my_selfLink",
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
      params: Params$Resource$Projects$Locations$Tcproutes$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Tcproutes$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Tcproutes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Tcproutes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Tcproutes$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tcproutes$Create
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
        {}) as Params$Resource$Projects$Locations$Tcproutes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tcproutes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/tcpRoutes').replace(
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
     * Deletes a single TcpRoute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.tcpRoutes.delete({
     *     // Required. A name of the TcpRoute to delete. Must be in the format `projects/x/locations/global/tcpRoutes/x`.
     *     name: 'projects/my-project/locations/my-location/tcpRoutes/my-tcpRoute',
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
      params: Params$Resource$Projects$Locations$Tcproutes$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Tcproutes$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Tcproutes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Tcproutes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Tcproutes$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tcproutes$Delete
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
        {}) as Params$Resource$Projects$Locations$Tcproutes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tcproutes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * Gets details of a single TcpRoute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.tcpRoutes.get({
     *     // Required. A name of the TcpRoute to get. Must be in the format `projects/x/locations/global/tcpRoutes/x`.
     *     name: 'projects/my-project/locations/my-location/tcpRoutes/my-tcpRoute',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "gateways": [],
     *   //   "labels": {},
     *   //   "meshes": [],
     *   //   "name": "my_name",
     *   //   "rules": [],
     *   //   "selfLink": "my_selfLink",
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
      params: Params$Resource$Projects$Locations$Tcproutes$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Tcproutes$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TcpRoute>>;
    get(
      params: Params$Resource$Projects$Locations$Tcproutes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Tcproutes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TcpRoute>,
      callback: BodyResponseCallback<Schema$TcpRoute>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Tcproutes$Get,
      callback: BodyResponseCallback<Schema$TcpRoute>
    ): void;
    get(callback: BodyResponseCallback<Schema$TcpRoute>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tcproutes$Get
        | BodyResponseCallback<Schema$TcpRoute>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TcpRoute>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TcpRoute>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TcpRoute>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Tcproutes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tcproutes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
        createAPIRequest<Schema$TcpRoute>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TcpRoute>(parameters);
      }
    }

    /**
     * Lists TcpRoute in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.tcpRoutes.list({
     *     // Maximum number of TcpRoutes to return per call.
     *     pageSize: 'placeholder-value',
     *     // The value returned by the last `ListTcpRoutesResponse` Indicates that this is a continuation of a prior `ListTcpRoutes` call, and that the system should return the next page of data.
     *     pageToken: 'placeholder-value',
     *     // Required. The project and location from which the TcpRoutes should be listed, specified in the format `projects/x/locations/global`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail.
     *     returnPartialSuccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "tcpRoutes": [],
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
      params: Params$Resource$Projects$Locations$Tcproutes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Tcproutes$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListTcpRoutesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Tcproutes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Tcproutes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTcpRoutesResponse>,
      callback: BodyResponseCallback<Schema$ListTcpRoutesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Tcproutes$List,
      callback: BodyResponseCallback<Schema$ListTcpRoutesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTcpRoutesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tcproutes$List
        | BodyResponseCallback<Schema$ListTcpRoutesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTcpRoutesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTcpRoutesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListTcpRoutesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Tcproutes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tcproutes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/tcpRoutes').replace(
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
        createAPIRequest<Schema$ListTcpRoutesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListTcpRoutesResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single TcpRoute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.tcpRoutes.patch({
     *     // Identifier. Name of the TcpRoute resource. It matches pattern `projects/x/locations/global/tcpRoutes/tcp_route_name\>`.
     *     name: 'projects/my-project/locations/my-location/tcpRoutes/my-tcpRoute',
     *     // Optional. Field mask is used to specify the fields to be overwritten in the TcpRoute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "gateways": [],
     *       //   "labels": {},
     *       //   "meshes": [],
     *       //   "name": "my_name",
     *       //   "rules": [],
     *       //   "selfLink": "my_selfLink",
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
      params: Params$Resource$Projects$Locations$Tcproutes$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Tcproutes$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Tcproutes$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Tcproutes$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Tcproutes$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tcproutes$Patch
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
        {}) as Params$Resource$Projects$Locations$Tcproutes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tcproutes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Tcproutes$Create
    extends StandardParameters {
    /**
     * Required. The parent resource of the TcpRoute. Must be in the format `projects/x/locations/global`.
     */
    parent?: string;
    /**
     * Required. Short name of the TcpRoute resource to be created.
     */
    tcpRouteId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TcpRoute;
  }
  export interface Params$Resource$Projects$Locations$Tcproutes$Delete
    extends StandardParameters {
    /**
     * Required. A name of the TcpRoute to delete. Must be in the format `projects/x/locations/global/tcpRoutes/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Tcproutes$Get
    extends StandardParameters {
    /**
     * Required. A name of the TcpRoute to get. Must be in the format `projects/x/locations/global/tcpRoutes/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Tcproutes$List
    extends StandardParameters {
    /**
     * Maximum number of TcpRoutes to return per call.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListTcpRoutesResponse` Indicates that this is a continuation of a prior `ListTcpRoutes` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The project and location from which the TcpRoutes should be listed, specified in the format `projects/x/locations/global`.
     */
    parent?: string;
    /**
     * Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail.
     */
    returnPartialSuccess?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Tcproutes$Patch
    extends StandardParameters {
    /**
     * Identifier. Name of the TcpRoute resource. It matches pattern `projects/x/locations/global/tcpRoutes/tcp_route_name\>`.
     */
    name?: string;
    /**
     * Optional. Field mask is used to specify the fields to be overwritten in the TcpRoute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TcpRoute;
  }

  export class Resource$Projects$Locations$Tlsroutes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new TlsRoute in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.tlsRoutes.create({
     *     // Required. The parent resource of the TlsRoute. Must be in the format `projects/x/locations/global`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. Short name of the TlsRoute resource to be created.
     *     tlsRouteId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "gateways": [],
     *       //   "labels": {},
     *       //   "meshes": [],
     *       //   "name": "my_name",
     *       //   "rules": [],
     *       //   "selfLink": "my_selfLink",
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
      params: Params$Resource$Projects$Locations$Tlsroutes$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Tlsroutes$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Tlsroutes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Tlsroutes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Tlsroutes$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tlsroutes$Create
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
        {}) as Params$Resource$Projects$Locations$Tlsroutes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tlsroutes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/tlsRoutes').replace(
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
     * Deletes a single TlsRoute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.tlsRoutes.delete({
     *     // Required. A name of the TlsRoute to delete. Must be in the format `projects/x/locations/global/tlsRoutes/x`.
     *     name: 'projects/my-project/locations/my-location/tlsRoutes/my-tlsRoute',
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
      params: Params$Resource$Projects$Locations$Tlsroutes$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Tlsroutes$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Tlsroutes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Tlsroutes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Tlsroutes$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tlsroutes$Delete
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
        {}) as Params$Resource$Projects$Locations$Tlsroutes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tlsroutes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * Gets details of a single TlsRoute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.tlsRoutes.get({
     *     // Required. A name of the TlsRoute to get. Must be in the format `projects/x/locations/global/tlsRoutes/x`.
     *     name: 'projects/my-project/locations/my-location/tlsRoutes/my-tlsRoute',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "gateways": [],
     *   //   "labels": {},
     *   //   "meshes": [],
     *   //   "name": "my_name",
     *   //   "rules": [],
     *   //   "selfLink": "my_selfLink",
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
      params: Params$Resource$Projects$Locations$Tlsroutes$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Tlsroutes$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TlsRoute>>;
    get(
      params: Params$Resource$Projects$Locations$Tlsroutes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Tlsroutes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TlsRoute>,
      callback: BodyResponseCallback<Schema$TlsRoute>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Tlsroutes$Get,
      callback: BodyResponseCallback<Schema$TlsRoute>
    ): void;
    get(callback: BodyResponseCallback<Schema$TlsRoute>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tlsroutes$Get
        | BodyResponseCallback<Schema$TlsRoute>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TlsRoute>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TlsRoute>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TlsRoute>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Tlsroutes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tlsroutes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
        createAPIRequest<Schema$TlsRoute>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TlsRoute>(parameters);
      }
    }

    /**
     * Lists TlsRoute in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.tlsRoutes.list({
     *     // Maximum number of TlsRoutes to return per call.
     *     pageSize: 'placeholder-value',
     *     // The value returned by the last `ListTlsRoutesResponse` Indicates that this is a continuation of a prior `ListTlsRoutes` call, and that the system should return the next page of data.
     *     pageToken: 'placeholder-value',
     *     // Required. The project and location from which the TlsRoutes should be listed, specified in the format `projects/x/locations/global`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail.
     *     returnPartialSuccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "tlsRoutes": [],
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
      params: Params$Resource$Projects$Locations$Tlsroutes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Tlsroutes$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListTlsRoutesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Tlsroutes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Tlsroutes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTlsRoutesResponse>,
      callback: BodyResponseCallback<Schema$ListTlsRoutesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Tlsroutes$List,
      callback: BodyResponseCallback<Schema$ListTlsRoutesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTlsRoutesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tlsroutes$List
        | BodyResponseCallback<Schema$ListTlsRoutesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTlsRoutesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTlsRoutesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListTlsRoutesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Tlsroutes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tlsroutes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/tlsRoutes').replace(
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
        createAPIRequest<Schema$ListTlsRoutesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListTlsRoutesResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single TlsRoute.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.tlsRoutes.patch({
     *     // Identifier. Name of the TlsRoute resource. It matches pattern `projects/x/locations/global/tlsRoutes/tls_route_name\>`.
     *     name: 'projects/my-project/locations/my-location/tlsRoutes/my-tlsRoute',
     *     // Optional. Field mask is used to specify the fields to be overwritten in the TlsRoute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "gateways": [],
     *       //   "labels": {},
     *       //   "meshes": [],
     *       //   "name": "my_name",
     *       //   "rules": [],
     *       //   "selfLink": "my_selfLink",
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
      params: Params$Resource$Projects$Locations$Tlsroutes$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Tlsroutes$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Tlsroutes$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Tlsroutes$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Tlsroutes$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tlsroutes$Patch
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
        {}) as Params$Resource$Projects$Locations$Tlsroutes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tlsroutes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Tlsroutes$Create
    extends StandardParameters {
    /**
     * Required. The parent resource of the TlsRoute. Must be in the format `projects/x/locations/global`.
     */
    parent?: string;
    /**
     * Required. Short name of the TlsRoute resource to be created.
     */
    tlsRouteId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TlsRoute;
  }
  export interface Params$Resource$Projects$Locations$Tlsroutes$Delete
    extends StandardParameters {
    /**
     * Required. A name of the TlsRoute to delete. Must be in the format `projects/x/locations/global/tlsRoutes/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Tlsroutes$Get
    extends StandardParameters {
    /**
     * Required. A name of the TlsRoute to get. Must be in the format `projects/x/locations/global/tlsRoutes/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Tlsroutes$List
    extends StandardParameters {
    /**
     * Maximum number of TlsRoutes to return per call.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListTlsRoutesResponse` Indicates that this is a continuation of a prior `ListTlsRoutes` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The project and location from which the TlsRoutes should be listed, specified in the format `projects/x/locations/global`.
     */
    parent?: string;
    /**
     * Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail.
     */
    returnPartialSuccess?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Tlsroutes$Patch
    extends StandardParameters {
    /**
     * Identifier. Name of the TlsRoute resource. It matches pattern `projects/x/locations/global/tlsRoutes/tls_route_name\>`.
     */
    name?: string;
    /**
     * Optional. Field mask is used to specify the fields to be overwritten in the TlsRoute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TlsRoute;
  }

  export class Resource$Projects$Locations$Wasmplugins {
    context: APIRequestContext;
    versions: Resource$Projects$Locations$Wasmplugins$Versions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.versions = new Resource$Projects$Locations$Wasmplugins$Versions(
        this.context
      );
    }

    /**
     * Creates a new `WasmPlugin` resource in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.wasmPlugins.create({
     *     // Required. The parent resource of the `WasmPlugin` resource. Must be in the format `projects/{project\}/locations/global`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. User-provided ID of the `WasmPlugin` resource to be created.
     *     wasmPluginId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "labels": {},
     *       //   "logConfig": {},
     *       //   "mainVersionId": "my_mainVersionId",
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime",
     *       //   "usedBy": [],
     *       //   "versions": {}
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
      params: Params$Resource$Projects$Locations$Wasmplugins$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Wasmplugins$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Wasmplugins$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Wasmplugins$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Wasmplugins$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Wasmplugins$Create
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
        {}) as Params$Resource$Projects$Locations$Wasmplugins$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Wasmplugins$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/wasmPlugins').replace(
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
     * Deletes the specified `WasmPlugin` resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.wasmPlugins.delete({
     *     // Required. A name of the `WasmPlugin` resource to delete. Must be in the format `projects/{project\}/locations/global/wasmPlugins/{wasm_plugin\}`.
     *     name: 'projects/my-project/locations/my-location/wasmPlugins/my-wasmPlugin',
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
      params: Params$Resource$Projects$Locations$Wasmplugins$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Wasmplugins$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Wasmplugins$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Wasmplugins$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Wasmplugins$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Wasmplugins$Delete
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
        {}) as Params$Resource$Projects$Locations$Wasmplugins$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Wasmplugins$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * Gets details of the specified `WasmPlugin` resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.wasmPlugins.get({
     *     // Required. A name of the `WasmPlugin` resource to get. Must be in the format `projects/{project\}/locations/global/wasmPlugins/{wasm_plugin\}`.
     *     name: 'projects/my-project/locations/my-location/wasmPlugins/my-wasmPlugin',
     *     // Determines how much data must be returned in the response. See [AIP-157](https://google.aip.dev/157).
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "labels": {},
     *   //   "logConfig": {},
     *   //   "mainVersionId": "my_mainVersionId",
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime",
     *   //   "usedBy": [],
     *   //   "versions": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Wasmplugins$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Wasmplugins$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WasmPlugin>>;
    get(
      params: Params$Resource$Projects$Locations$Wasmplugins$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Wasmplugins$Get,
      options: MethodOptions | BodyResponseCallback<Schema$WasmPlugin>,
      callback: BodyResponseCallback<Schema$WasmPlugin>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Wasmplugins$Get,
      callback: BodyResponseCallback<Schema$WasmPlugin>
    ): void;
    get(callback: BodyResponseCallback<Schema$WasmPlugin>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Wasmplugins$Get
        | BodyResponseCallback<Schema$WasmPlugin>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WasmPlugin>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WasmPlugin>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WasmPlugin>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Wasmplugins$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Wasmplugins$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
        createAPIRequest<Schema$WasmPlugin>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WasmPlugin>(parameters);
      }
    }

    /**
     * Lists `WasmPlugin` resources in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.wasmPlugins.list({
     *     // Maximum number of `WasmPlugin` resources to return per call. If not specified, at most 50 `WasmPlugin` resources are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // The value returned by the last `ListWasmPluginsResponse` call. Indicates that this is a continuation of a prior `ListWasmPlugins` call, and that the next page of data is to be returned.
     *     pageToken: 'placeholder-value',
     *     // Required. The project and location from which the `WasmPlugin` resources are listed, specified in the following format: `projects/{project\}/locations/global`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": [],
     *   //   "wasmPlugins": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Wasmplugins$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Wasmplugins$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListWasmPluginsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Wasmplugins$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Wasmplugins$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListWasmPluginsResponse>,
      callback: BodyResponseCallback<Schema$ListWasmPluginsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Wasmplugins$List,
      callback: BodyResponseCallback<Schema$ListWasmPluginsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListWasmPluginsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Wasmplugins$List
        | BodyResponseCallback<Schema$ListWasmPluginsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListWasmPluginsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListWasmPluginsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListWasmPluginsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Wasmplugins$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Wasmplugins$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/wasmPlugins').replace(
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
        createAPIRequest<Schema$ListWasmPluginsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListWasmPluginsResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of the specified `WasmPlugin` resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.wasmPlugins.patch({
     *     // Identifier. Name of the `WasmPlugin` resource in the following format: `projects/{project\}/locations/{location\}/wasmPlugins/{wasm_plugin\}`.
     *     name: 'projects/my-project/locations/my-location/wasmPlugins/my-wasmPlugin',
     *     // Optional. Used to specify the fields to be overwritten in the `WasmPlugin` resource by the update. The fields specified in the `update_mask` field are relative to the resource, not the full request. An omitted `update_mask` field is treated as an implied `update_mask` field equivalent to all fields that are populated (that have a non-empty value). The `update_mask` field supports a special value `*`, which means that each field in the given `WasmPlugin` resource (including the empty ones) replaces the current value.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "labels": {},
     *       //   "logConfig": {},
     *       //   "mainVersionId": "my_mainVersionId",
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime",
     *       //   "usedBy": [],
     *       //   "versions": {}
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
      params: Params$Resource$Projects$Locations$Wasmplugins$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Wasmplugins$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Wasmplugins$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Wasmplugins$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Wasmplugins$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Wasmplugins$Patch
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
        {}) as Params$Resource$Projects$Locations$Wasmplugins$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Wasmplugins$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Wasmplugins$Create
    extends StandardParameters {
    /**
     * Required. The parent resource of the `WasmPlugin` resource. Must be in the format `projects/{project\}/locations/global`.
     */
    parent?: string;
    /**
     * Required. User-provided ID of the `WasmPlugin` resource to be created.
     */
    wasmPluginId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WasmPlugin;
  }
  export interface Params$Resource$Projects$Locations$Wasmplugins$Delete
    extends StandardParameters {
    /**
     * Required. A name of the `WasmPlugin` resource to delete. Must be in the format `projects/{project\}/locations/global/wasmPlugins/{wasm_plugin\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Wasmplugins$Get
    extends StandardParameters {
    /**
     * Required. A name of the `WasmPlugin` resource to get. Must be in the format `projects/{project\}/locations/global/wasmPlugins/{wasm_plugin\}`.
     */
    name?: string;
    /**
     * Determines how much data must be returned in the response. See [AIP-157](https://google.aip.dev/157).
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Wasmplugins$List
    extends StandardParameters {
    /**
     * Maximum number of `WasmPlugin` resources to return per call. If not specified, at most 50 `WasmPlugin` resources are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListWasmPluginsResponse` call. Indicates that this is a continuation of a prior `ListWasmPlugins` call, and that the next page of data is to be returned.
     */
    pageToken?: string;
    /**
     * Required. The project and location from which the `WasmPlugin` resources are listed, specified in the following format: `projects/{project\}/locations/global`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Wasmplugins$Patch
    extends StandardParameters {
    /**
     * Identifier. Name of the `WasmPlugin` resource in the following format: `projects/{project\}/locations/{location\}/wasmPlugins/{wasm_plugin\}`.
     */
    name?: string;
    /**
     * Optional. Used to specify the fields to be overwritten in the `WasmPlugin` resource by the update. The fields specified in the `update_mask` field are relative to the resource, not the full request. An omitted `update_mask` field is treated as an implied `update_mask` field equivalent to all fields that are populated (that have a non-empty value). The `update_mask` field supports a special value `*`, which means that each field in the given `WasmPlugin` resource (including the empty ones) replaces the current value.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WasmPlugin;
  }

  export class Resource$Projects$Locations$Wasmplugins$Versions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new `WasmPluginVersion` resource in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await networkservices.projects.locations.wasmPlugins.versions.create({
     *       // Required. The parent resource of the `WasmPluginVersion` resource. Must be in the format `projects/{project\}/locations/global/wasmPlugins/{wasm_plugin\}`.
     *       parent:
     *         'projects/my-project/locations/my-location/wasmPlugins/my-wasmPlugin',
     *       // Required. User-provided ID of the `WasmPluginVersion` resource to be created.
     *       wasmPluginVersionId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "createTime": "my_createTime",
     *         //   "description": "my_description",
     *         //   "imageDigest": "my_imageDigest",
     *         //   "imageUri": "my_imageUri",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "pluginConfigData": "my_pluginConfigData",
     *         //   "pluginConfigDigest": "my_pluginConfigDigest",
     *         //   "pluginConfigUri": "my_pluginConfigUri",
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
      params: Params$Resource$Projects$Locations$Wasmplugins$Versions$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Wasmplugins$Versions$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Wasmplugins$Versions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Wasmplugins$Versions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Wasmplugins$Versions$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Wasmplugins$Versions$Create
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
        {}) as Params$Resource$Projects$Locations$Wasmplugins$Versions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Wasmplugins$Versions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/versions').replace(
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
     * Deletes the specified `WasmPluginVersion` resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await networkservices.projects.locations.wasmPlugins.versions.delete({
     *       // Required. A name of the `WasmPluginVersion` resource to delete. Must be in the format `projects/{project\}/locations/global/wasmPlugins/{wasm_plugin\}/versions/{wasm_plugin_version\}`.
     *       name: 'projects/my-project/locations/my-location/wasmPlugins/my-wasmPlugin/versions/my-version',
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
      params: Params$Resource$Projects$Locations$Wasmplugins$Versions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Wasmplugins$Versions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Wasmplugins$Versions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Wasmplugins$Versions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Wasmplugins$Versions$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Wasmplugins$Versions$Delete
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
        {}) as Params$Resource$Projects$Locations$Wasmplugins$Versions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Wasmplugins$Versions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
     * Gets details of the specified `WasmPluginVersion` resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await networkservices.projects.locations.wasmPlugins.versions.get(
     *     {
     *       // Required. A name of the `WasmPluginVersion` resource to get. Must be in the format `projects/{project\}/locations/global/wasmPlugins/{wasm_plugin\}/versions/{wasm_plugin_version\}`.
     *       name: 'projects/my-project/locations/my-location/wasmPlugins/my-wasmPlugin/versions/my-version',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "imageDigest": "my_imageDigest",
     *   //   "imageUri": "my_imageUri",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "pluginConfigData": "my_pluginConfigData",
     *   //   "pluginConfigDigest": "my_pluginConfigDigest",
     *   //   "pluginConfigUri": "my_pluginConfigUri",
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
      params: Params$Resource$Projects$Locations$Wasmplugins$Versions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Wasmplugins$Versions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WasmPluginVersion>>;
    get(
      params: Params$Resource$Projects$Locations$Wasmplugins$Versions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Wasmplugins$Versions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$WasmPluginVersion>,
      callback: BodyResponseCallback<Schema$WasmPluginVersion>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Wasmplugins$Versions$Get,
      callback: BodyResponseCallback<Schema$WasmPluginVersion>
    ): void;
    get(callback: BodyResponseCallback<Schema$WasmPluginVersion>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Wasmplugins$Versions$Get
        | BodyResponseCallback<Schema$WasmPluginVersion>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WasmPluginVersion>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WasmPluginVersion>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WasmPluginVersion>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Wasmplugins$Versions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Wasmplugins$Versions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
        createAPIRequest<Schema$WasmPluginVersion>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WasmPluginVersion>(parameters);
      }
    }

    /**
     * Lists `WasmPluginVersion` resources in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/networkservices.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const networkservices = google.networkservices('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await networkservices.projects.locations.wasmPlugins.versions.list({
     *       // Maximum number of `WasmPluginVersion` resources to return per call. If not specified, at most 50 `WasmPluginVersion` resources are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // The value returned by the last `ListWasmPluginVersionsResponse` call. Indicates that this is a continuation of a prior `ListWasmPluginVersions` call, and that the next page of data is to be returned.
     *       pageToken: 'placeholder-value',
     *       // Required. The `WasmPlugin` resource whose `WasmPluginVersion`s are listed, specified in the following format: `projects/{project\}/locations/global/wasmPlugins/{wasm_plugin\}`.
     *       parent:
     *         'projects/my-project/locations/my-location/wasmPlugins/my-wasmPlugin',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": [],
     *   //   "wasmPluginVersions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Wasmplugins$Versions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Wasmplugins$Versions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListWasmPluginVersionsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Wasmplugins$Versions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Wasmplugins$Versions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListWasmPluginVersionsResponse>,
      callback: BodyResponseCallback<Schema$ListWasmPluginVersionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Wasmplugins$Versions$List,
      callback: BodyResponseCallback<Schema$ListWasmPluginVersionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListWasmPluginVersionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Wasmplugins$Versions$List
        | BodyResponseCallback<Schema$ListWasmPluginVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListWasmPluginVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListWasmPluginVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListWasmPluginVersionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Wasmplugins$Versions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Wasmplugins$Versions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://networkservices.googleapis.com/';
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
        createAPIRequest<Schema$ListWasmPluginVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListWasmPluginVersionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Wasmplugins$Versions$Create
    extends StandardParameters {
    /**
     * Required. The parent resource of the `WasmPluginVersion` resource. Must be in the format `projects/{project\}/locations/global/wasmPlugins/{wasm_plugin\}`.
     */
    parent?: string;
    /**
     * Required. User-provided ID of the `WasmPluginVersion` resource to be created.
     */
    wasmPluginVersionId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WasmPluginVersion;
  }
  export interface Params$Resource$Projects$Locations$Wasmplugins$Versions$Delete
    extends StandardParameters {
    /**
     * Required. A name of the `WasmPluginVersion` resource to delete. Must be in the format `projects/{project\}/locations/global/wasmPlugins/{wasm_plugin\}/versions/{wasm_plugin_version\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Wasmplugins$Versions$Get
    extends StandardParameters {
    /**
     * Required. A name of the `WasmPluginVersion` resource to get. Must be in the format `projects/{project\}/locations/global/wasmPlugins/{wasm_plugin\}/versions/{wasm_plugin_version\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Wasmplugins$Versions$List
    extends StandardParameters {
    /**
     * Maximum number of `WasmPluginVersion` resources to return per call. If not specified, at most 50 `WasmPluginVersion` resources are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListWasmPluginVersionsResponse` call. Indicates that this is a continuation of a prior `ListWasmPluginVersions` call, and that the next page of data is to be returned.
     */
    pageToken?: string;
    /**
     * Required. The `WasmPlugin` resource whose `WasmPluginVersion`s are listed, specified in the following format: `projects/{project\}/locations/global/wasmPlugins/{wasm_plugin\}`.
     */
    parent?: string;
  }
}
