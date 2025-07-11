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

export namespace trafficdirector_v3 {
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
   * Traffic Director API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const trafficdirector = google.trafficdirector('v3');
   * ```
   */
  export class Trafficdirector {
    context: APIRequestContext;
    discovery: Resource$Discovery;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.discovery = new Resource$Discovery(this.context);
    }
  }

  /**
   * Addresses specify either a logical or physical address and port, which are used to tell Envoy where to bind/listen, connect to upstream and find management servers.
   */
  export interface Schema$Address {
    /**
     * Specifies a user-space address handled by :ref:`internal listeners `.
     */
    envoyInternalAddress?: Schema$EnvoyInternalAddress;
    pipe?: Schema$Pipe;
    socketAddress?: Schema$SocketAddress;
  }
  /**
   * BuildVersion combines SemVer version of extension with free-form build information (i.e. 'alpha', 'private-build') as a set of strings.
   */
  export interface Schema$BuildVersion {
    /**
     * Free-form build information. Envoy defines several well known keys in the source/common/version/version.h file
     */
    metadata?: {[key: string]: any} | null;
    /**
     * SemVer version of extension.
     */
    version?: Schema$SemanticVersion;
  }
  /**
   * All xds configs for a particular client.
   */
  export interface Schema$ClientConfig {
    /**
     * For xDS clients, the scope in which the data is used. For example, gRPC indicates the data plane target or that the data is associated with gRPC server(s).
     */
    clientScope?: string | null;
    /**
     * Represents generic xDS config and the exact config structure depends on the type URL (like Cluster if it is CDS)
     */
    genericXdsConfigs?: Schema$GenericXdsConfig[];
    /**
     * Node for a particular client.
     */
    node?: Schema$Node;
    /**
     * This field is deprecated in favor of generic_xds_configs which is much simpler and uniform in structure.
     */
    xdsConfig?: Schema$PerXdsConfig[];
  }
  /**
   * Request for client status of clients identified by a list of NodeMatchers.
   */
  export interface Schema$ClientStatusRequest {
    /**
     * If true, the server will not include the resource contents in the response (i.e., the generic_xds_configs.xds_config field will not be populated). [#not-implemented-hide:]
     */
    excludeResourceContents?: boolean | null;
    /**
     * The node making the csds request.
     */
    node?: Schema$Node;
    /**
     * Management server can use these match criteria to identify clients. The match follows OR semantics.
     */
    nodeMatchers?: Schema$NodeMatcher[];
  }
  export interface Schema$ClientStatusResponse {
    /**
     * Client configs for the clients specified in the ClientStatusRequest.
     */
    config?: Schema$ClientConfig[];
  }
  /**
   * Envoy's cluster manager fills this message with all currently known clusters. Cluster configuration information can be used to recreate an Envoy configuration by populating all clusters as static clusters or by returning them in a CDS response.
   */
  export interface Schema$ClustersConfigDump {
    /**
     * The dynamically loaded active clusters. These are clusters that are available to service data plane traffic.
     */
    dynamicActiveClusters?: Schema$DynamicCluster[];
    /**
     * The dynamically loaded warming clusters. These are clusters that are currently undergoing warming in preparation to service data plane traffic. Note that if attempting to recreate an Envoy configuration from a configuration dump, the warming clusters should generally be discarded.
     */
    dynamicWarmingClusters?: Schema$DynamicCluster[];
    /**
     * The statically loaded cluster configs.
     */
    staticClusters?: Schema$StaticCluster[];
    /**
     * This is the :ref:`version_info ` in the last processed CDS discovery response. If there are only static bootstrap clusters, this field will be "".
     */
    versionInfo?: string | null;
  }
  /**
   * Additional parameters that can be used to select resource variants. These include any global context parameters, per-resource type client feature capabilities and per-resource type functional attributes. All per-resource type attributes will be `xds.resource.` prefixed and some of these are documented below: `xds.resource.listening_address`: The value is "IP:port" (e.g. "10.1.1.3:8080") which is the listening address of a Listener. Used in a Listener resource query.
   */
  export interface Schema$ContextParams {
    params?: {[key: string]: string} | null;
  }
  /**
   * Specifies the way to match a double value.
   */
  export interface Schema$DoubleMatcher {
    /**
     * If specified, the input double value must be equal to the value specified here.
     */
    exact?: number | null;
    /**
     * If specified, the input double value must be in the range specified here. Note: The range is using half-open interval semantics [start, end).
     */
    range?: Schema$DoubleRange;
  }
  /**
   * Specifies the double start and end of the range using half-open interval semantics [start, end).
   */
  export interface Schema$DoubleRange {
    /**
     * end of the range (exclusive)
     */
    end?: number | null;
    /**
     * start of the range (inclusive)
     */
    start?: number | null;
  }
  /**
   * Describes a dynamically loaded cluster via the CDS API. [#next-free-field: 6]
   */
  export interface Schema$DynamicCluster {
    /**
     * The client status of this resource. [#not-implemented-hide:]
     */
    clientStatus?: string | null;
    /**
     * The cluster config.
     */
    cluster?: {[key: string]: any} | null;
    /**
     * Set if the last update failed, cleared after the next successful update. The ``error_state`` field contains the rejected version of this particular resource along with the reason and timestamp. For successfully updated or acknowledged resource, this field should be empty. [#not-implemented-hide:]
     */
    errorState?: Schema$UpdateFailureState;
    /**
     * The timestamp when the Cluster was last updated.
     */
    lastUpdated?: string | null;
    /**
     * This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the cluster was loaded. In the future, discrete per-cluster versions may be supported by the API.
     */
    versionInfo?: string | null;
  }
  /**
   * [#next-free-field: 6]
   */
  export interface Schema$DynamicEndpointConfig {
    /**
     * The client status of this resource. [#not-implemented-hide:]
     */
    clientStatus?: string | null;
    /**
     * The endpoint config.
     */
    endpointConfig?: {[key: string]: any} | null;
    /**
     * Set if the last update failed, cleared after the next successful update. The ``error_state`` field contains the rejected version of this particular resource along with the reason and timestamp. For successfully updated or acknowledged resource, this field should be empty. [#not-implemented-hide:]
     */
    errorState?: Schema$UpdateFailureState;
    /**
     * [#not-implemented-hide:] The timestamp when the Endpoint was last updated.
     */
    lastUpdated?: string | null;
    /**
     * [#not-implemented-hide:] This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the endpoint configuration was loaded.
     */
    versionInfo?: string | null;
  }
  /**
   * Describes a dynamically loaded listener via the LDS API. [#next-free-field: 7]
   */
  export interface Schema$DynamicListener {
    /**
     * The listener state for any active listener by this name. These are listeners that are available to service data plane traffic.
     */
    activeState?: Schema$DynamicListenerState;
    /**
     * The client status of this resource. [#not-implemented-hide:]
     */
    clientStatus?: string | null;
    /**
     * The listener state for any draining listener by this name. These are listeners that are currently undergoing draining in preparation to stop servicing data plane traffic. Note that if attempting to recreate an Envoy configuration from a configuration dump, the draining listeners should generally be discarded.
     */
    drainingState?: Schema$DynamicListenerState;
    /**
     * Set if the last update failed, cleared after the next successful update. The ``error_state`` field contains the rejected version of this particular resource along with the reason and timestamp. For successfully updated or acknowledged resource, this field should be empty.
     */
    errorState?: Schema$UpdateFailureState;
    /**
     * The name or unique id of this listener, pulled from the DynamicListenerState config.
     */
    name?: string | null;
    /**
     * The listener state for any warming listener by this name. These are listeners that are currently undergoing warming in preparation to service data plane traffic. Note that if attempting to recreate an Envoy configuration from a configuration dump, the warming listeners should generally be discarded.
     */
    warmingState?: Schema$DynamicListenerState;
  }
  export interface Schema$DynamicListenerState {
    /**
     * The timestamp when the Listener was last successfully updated.
     */
    lastUpdated?: string | null;
    /**
     * The listener config.
     */
    listener?: {[key: string]: any} | null;
    /**
     * This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the listener was loaded. In the future, discrete per-listener versions may be supported by the API.
     */
    versionInfo?: string | null;
  }
  /**
   * [#next-free-field: 6]
   */
  export interface Schema$DynamicRouteConfig {
    /**
     * The client status of this resource. [#not-implemented-hide:]
     */
    clientStatus?: string | null;
    /**
     * Set if the last update failed, cleared after the next successful update. The ``error_state`` field contains the rejected version of this particular resource along with the reason and timestamp. For successfully updated or acknowledged resource, this field should be empty. [#not-implemented-hide:]
     */
    errorState?: Schema$UpdateFailureState;
    /**
     * The timestamp when the Route was last updated.
     */
    lastUpdated?: string | null;
    /**
     * The route config.
     */
    routeConfig?: {[key: string]: any} | null;
    /**
     * This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the route configuration was loaded.
     */
    versionInfo?: string | null;
  }
  /**
   * [#next-free-field: 7]
   */
  export interface Schema$DynamicScopedRouteConfigs {
    /**
     * The client status of this resource. [#not-implemented-hide:]
     */
    clientStatus?: string | null;
    /**
     * Set if the last update failed, cleared after the next successful update. The ``error_state`` field contains the rejected version of this particular resource along with the reason and timestamp. For successfully updated or acknowledged resource, this field should be empty. [#not-implemented-hide:]
     */
    errorState?: Schema$UpdateFailureState;
    /**
     * The timestamp when the scoped route config set was last updated.
     */
    lastUpdated?: string | null;
    /**
     * The name assigned to the scoped route configurations.
     */
    name?: string | null;
    /**
     * The scoped route configurations.
     */
    scopedRouteConfigs?: Array<{[key: string]: any}> | null;
    /**
     * This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the scoped routes configuration was loaded.
     */
    versionInfo?: string | null;
  }
  /**
   * Envoy's admin fill this message with all currently known endpoints. Endpoint configuration information can be used to recreate an Envoy configuration by populating all endpoints as static endpoints or by returning them in an EDS response.
   */
  export interface Schema$EndpointsConfigDump {
    /**
     * The dynamically loaded endpoint configs.
     */
    dynamicEndpointConfigs?: Schema$DynamicEndpointConfig[];
    /**
     * The statically loaded endpoint configs.
     */
    staticEndpointConfigs?: Schema$StaticEndpointConfig[];
  }
  /**
   * The address represents an envoy internal listener. [#comment:
   */
  export interface Schema$EnvoyInternalAddress {
    /**
     * Specifies an endpoint identifier to distinguish between multiple endpoints for the same internal listener in a single upstream pool. Only used in the upstream addresses for tracking changes to individual endpoints. This, for example, may be set to the final destination IP for the target internal listener.
     */
    endpointId?: string | null;
    /**
     * Specifies the :ref:`name ` of the internal listener.
     */
    serverListenerName?: string | null;
  }
  /**
   * Version and identification for an Envoy extension. [#next-free-field: 7]
   */
  export interface Schema$Extension {
    /**
     * Category of the extension. Extension category names use reverse DNS notation. For instance "envoy.filters.listener" for Envoy's built-in listener filters or "com.acme.filters.http" for HTTP filters from acme.com vendor. [#comment:
     */
    category?: string | null;
    /**
     * Indicates that the extension is present but was disabled via dynamic configuration.
     */
    disabled?: boolean | null;
    /**
     * This is the name of the Envoy filter as specified in the Envoy configuration, e.g. envoy.filters.http.router, com.acme.widget.
     */
    name?: string | null;
    /**
     * [#not-implemented-hide:] Type descriptor of extension configuration proto. [#comment:
     */
    typeDescriptor?: string | null;
    /**
     * Type URLs of extension configuration protos.
     */
    typeUrls?: string[] | null;
    /**
     * The version is a property of the extension and maintained independently of other extensions and the Envoy API. This field is not set when extension did not provide version information.
     */
    version?: Schema$BuildVersion;
  }
  /**
   * GenericXdsConfig is used to specify the config status and the dump of any xDS resource identified by their type URL. It is the generalized version of the now deprecated ListenersConfigDump, ClustersConfigDump etc [#next-free-field: 10]
   */
  export interface Schema$GenericXdsConfig {
    /**
     * Per xDS resource status from the view of a xDS client
     */
    clientStatus?: string | null;
    /**
     * Per xDS resource config status. It is generated by management servers. It will not be present if the CSDS server is an xDS client.
     */
    configStatus?: string | null;
    /**
     * Set if the last update failed, cleared after the next successful update. The *error_state* field contains the rejected version of this particular resource along with the reason and timestamp. For successfully updated or acknowledged resource, this field should be empty. [#not-implemented-hide:]
     */
    errorState?: Schema$UpdateFailureState;
    /**
     * Is static resource is true if it is specified in the config supplied through the file at the startup.
     */
    isStaticResource?: boolean | null;
    /**
     * Timestamp when the xDS resource was last updated
     */
    lastUpdated?: string | null;
    /**
     * Name of the xDS resource
     */
    name?: string | null;
    /**
     * Type_url represents the fully qualified name of xDS resource type like envoy.v3.Cluster, envoy.v3.ClusterLoadAssignment etc.
     */
    typeUrl?: string | null;
    /**
     * This is the :ref:`version_info ` in the last processed xDS discovery response. If there are only static bootstrap listeners, this field will be ""
     */
    versionInfo?: string | null;
    /**
     * The xDS resource config. Actual content depends on the type
     */
    xdsConfig?: {[key: string]: any} | null;
  }
  /**
   * Google's `RE2 `_ regex engine. The regex string must adhere to the documented `syntax `_. The engine is designed to complete execution in linear time as well as limit the amount of memory used. Envoy supports program size checking via runtime. The runtime keys ``re2.max_program_size.error_level`` and ``re2.max_program_size.warn_level`` can be set to integers as the maximum program size or complexity that a compiled regex can have before an exception is thrown or a warning is logged, respectively. ``re2.max_program_size.error_level`` defaults to 100, and ``re2.max_program_size.warn_level`` has no default if unset (will not check/log a warning). Envoy emits two stats for tracking the program size of regexes: the histogram ``re2.program_size``, which records the program size, and the counter ``re2.exceeded_warn_level``, which is incremented each time the program size exceeds the warn level threshold.
   */
  export interface Schema$GoogleRE2 {
    /**
     * This field controls the RE2 "program size" which is a rough estimate of how complex a compiled regex is to evaluate. A regex that has a program size greater than the configured value will fail to compile. In this case, the configured max program size can be increased or the regex can be simplified. If not specified, the default is 100. This field is deprecated; regexp validation should be performed on the management server instead of being done by each individual client. .. note:: Although this field is deprecated, the program size will still be checked against the global ``re2.max_program_size.error_level`` runtime value.
     */
    maxProgramSize?: number | null;
  }
  export interface Schema$InlineScopedRouteConfigs {
    /**
     * The timestamp when the scoped route config set was last updated.
     */
    lastUpdated?: string | null;
    /**
     * The name assigned to the scoped route configurations.
     */
    name?: string | null;
    /**
     * The scoped route configurations.
     */
    scopedRouteConfigs?: Array<{[key: string]: any}> | null;
  }
  /**
   * Envoy's listener manager fills this message with all currently known listeners. Listener configuration information can be used to recreate an Envoy configuration by populating all listeners as static listeners or by returning them in a LDS response.
   */
  export interface Schema$ListenersConfigDump {
    /**
     * State for any warming, active, or draining listeners.
     */
    dynamicListeners?: Schema$DynamicListener[];
    /**
     * The statically loaded listener configs.
     */
    staticListeners?: Schema$StaticListener[];
    /**
     * This is the :ref:`version_info ` in the last processed LDS discovery response. If there are only static bootstrap listeners, this field will be "".
     */
    versionInfo?: string | null;
  }
  /**
   * Specifies the way to match a list value.
   */
  export interface Schema$ListMatcher {
    /**
     * If specified, at least one of the values in the list must match the value specified.
     */
    oneOf?: Schema$ValueMatcher;
  }
  /**
   * Identifies location of where either Envoy runs or where upstream hosts run.
   */
  export interface Schema$Locality {
    /**
     * Region this :ref:`zone ` belongs to.
     */
    region?: string | null;
    /**
     * When used for locality of upstream hosts, this field further splits zone into smaller chunks of sub-zones so they can be load balanced independently.
     */
    subZone?: string | null;
    /**
     * Defines the local service zone where Envoy is running. Though optional, it should be set if discovery service routing is used and the discovery service exposes :ref:`zone data `, either in this message or via :option:`--service-zone`. The meaning of zone is context dependent, e.g. `Availability Zone (AZ) `_ on AWS, `Zone `_ on GCP, etc.
     */
    zone?: string | null;
  }
  /**
   * Identifies a specific Envoy instance. The node identifier is presented to the management server, which may use this identifier to distinguish per Envoy configuration for serving. [#next-free-field: 13]
   */
  export interface Schema$Node {
    /**
     * Client feature support list. These are well known features described in the Envoy API repository for a given major version of an API. Client features use reverse DNS naming scheme, for example ``com.acme.feature``. See :ref:`the list of features ` that xDS client may support.
     */
    clientFeatures?: string[] | null;
    /**
     * Defines the local service cluster name where Envoy is running. Though optional, it should be set if any of the following features are used: :ref:`statsd `, :ref:`health check cluster verification `, :ref:`runtime override directory `, :ref:`user agent addition `, :ref:`HTTP global rate limiting `, :ref:`CDS `, and :ref:`HTTP tracing `, either in this message or via :option:`--service-cluster`.
     */
    cluster?: string | null;
    /**
     * Map from xDS resource type URL to dynamic context parameters. These may vary at runtime (unlike other fields in this message). For example, the xDS client may have a shard identifier that changes during the lifetime of the xDS client. In Envoy, this would be achieved by updating the dynamic context on the Server::Instance's LocalInfo context provider. The shard ID dynamic parameter then appears in this field during future discovery requests.
     */
    dynamicParameters?: {[key: string]: Schema$ContextParams} | null;
    /**
     * List of extensions and their versions supported by the node.
     */
    extensions?: Schema$Extension[];
    /**
     * An opaque node identifier for the Envoy node. This also provides the local service node name. It should be set if any of the following features are used: :ref:`statsd `, :ref:`CDS `, and :ref:`HTTP tracing `, either in this message or via :option:`--service-node`.
     */
    id?: string | null;
    /**
     * Known listening ports on the node as a generic hint to the management server for filtering :ref:`listeners ` to be returned. For example, if there is a listener bound to port 80, the list can optionally contain the SocketAddress ``(0.0.0.0,80)``. The field is optional and just a hint.
     */
    listeningAddresses?: Schema$Address[];
    /**
     * Locality specifying where the Envoy instance is running.
     */
    locality?: Schema$Locality;
    /**
     * Opaque metadata extending the node identifier. Envoy will pass this directly to the management server.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Structured version of the entity requesting config.
     */
    userAgentBuildVersion?: Schema$BuildVersion;
    /**
     * Free-form string that identifies the entity requesting config. E.g. "envoy" or "grpc"
     */
    userAgentName?: string | null;
    /**
     * Free-form string that identifies the version of the entity requesting config. E.g. "1.12.2" or "abcd1234", or "SpecialEnvoyBuild"
     */
    userAgentVersion?: string | null;
  }
  /**
   * Specifies the way to match a Node. The match follows AND semantics.
   */
  export interface Schema$NodeMatcher {
    /**
     * Specifies match criteria on the node id.
     */
    nodeId?: Schema$StringMatcher;
    /**
     * Specifies match criteria on the node metadata.
     */
    nodeMetadatas?: Schema$StructMatcher[];
  }
  /**
   * NullMatch is an empty message to specify a null value.
   */
  export interface Schema$NullMatch {}
  /**
   * Specifies a list of alternatives for the match.
   */
  export interface Schema$OrMatcher {
    valueMatchers?: Schema$ValueMatcher[];
  }
  /**
   * Specifies the segment in a path to retrieve value from Struct.
   */
  export interface Schema$PathSegment {
    /**
     * If specified, use the key to retrieve the value in a Struct.
     */
    key?: string | null;
  }
  /**
   * Detailed config (per xDS) with status. [#next-free-field: 8]
   */
  export interface Schema$PerXdsConfig {
    /**
     * Client config status is populated by xDS clients. Will not be present if the CSDS server is an xDS server. No matter what the client config status is, xDS clients should always dump the most recent accepted xDS config. .. attention:: This field is deprecated. Use :ref:`ClientResourceStatus ` for per-resource config status instead.
     */
    clientStatus?: string | null;
    clusterConfig?: Schema$ClustersConfigDump;
    endpointConfig?: Schema$EndpointsConfigDump;
    listenerConfig?: Schema$ListenersConfigDump;
    routeConfig?: Schema$RoutesConfigDump;
    scopedRouteConfig?: Schema$ScopedRoutesConfigDump;
    /**
     * Config status generated by management servers. Will not be present if the CSDS server is an xDS client.
     */
    status?: string | null;
  }
  export interface Schema$Pipe {
    /**
     * The mode for the Pipe. Not applicable for abstract sockets.
     */
    mode?: number | null;
    /**
     * Unix Domain Socket path. On Linux, paths starting with '@' will use the abstract namespace. The starting '@' is replaced by a null byte by Envoy. Paths starting with '@' will result in an error in environments other than Linux.
     */
    path?: string | null;
  }
  /**
   * A regex matcher designed for safety when used with untrusted input.
   */
  export interface Schema$RegexMatcher {
    /**
     * Google's RE2 regex engine.
     */
    googleRe2?: Schema$GoogleRE2;
    /**
     * The regex match string. The string must be supported by the configured engine. The regex is matched against the full string, not as a partial match.
     */
    regex?: string | null;
  }
  /**
   * Envoy's RDS implementation fills this message with all currently loaded routes, as described by their RouteConfiguration objects. Static routes that are either defined in the bootstrap configuration or defined inline while configuring listeners are separated from those configured dynamically via RDS. Route configuration information can be used to recreate an Envoy configuration by populating all routes as static routes or by returning them in RDS responses.
   */
  export interface Schema$RoutesConfigDump {
    /**
     * The dynamically loaded route configs.
     */
    dynamicRouteConfigs?: Schema$DynamicRouteConfig[];
    /**
     * The statically loaded route configs.
     */
    staticRouteConfigs?: Schema$StaticRouteConfig[];
  }
  /**
   * Envoy's scoped RDS implementation fills this message with all currently loaded route configuration scopes (defined via ScopedRouteConfigurationsSet protos). This message lists both the scopes defined inline with the higher order object (i.e., the HttpConnectionManager) and the dynamically obtained scopes via the SRDS API.
   */
  export interface Schema$ScopedRoutesConfigDump {
    /**
     * The dynamically loaded scoped route configs.
     */
    dynamicScopedRouteConfigs?: Schema$DynamicScopedRouteConfigs[];
    /**
     * The statically loaded scoped route configs.
     */
    inlineScopedRouteConfigs?: Schema$InlineScopedRouteConfigs[];
  }
  /**
   * Envoy uses SemVer (https://semver.org/). Major/minor versions indicate expected behaviors and APIs, the patch version field is used only for security fixes and can be generally ignored.
   */
  export interface Schema$SemanticVersion {
    majorNumber?: number | null;
    minorNumber?: number | null;
    patch?: number | null;
  }
  /**
   * [#next-free-field: 8]
   */
  export interface Schema$SocketAddress {
    /**
     * The address for this socket. :ref:`Listeners ` will bind to the address. An empty address is not allowed. Specify ``0.0.0.0`` or ``::`` to bind to any address. [#comment:TODO(zuercher) reinstate when implemented: It is possible to distinguish a Listener address via the prefix/suffix matching in :ref:`FilterChainMatch `.] When used within an upstream :ref:`BindConfig `, the address controls the source address of outbound connections. For :ref:`clusters `, the cluster type determines whether the address must be an IP (``STATIC`` or ``EDS`` clusters) or a hostname resolved by DNS (``STRICT_DNS`` or ``LOGICAL_DNS`` clusters). Address resolution can be customized via :ref:`resolver_name `.
     */
    address?: string | null;
    /**
     * When binding to an IPv6 address above, this enables `IPv4 compatibility `_. Binding to ``::`` will allow both IPv4 and IPv6 connections, with peer IPv4 addresses mapped into IPv6 space as ``::FFFF:``.
     */
    ipv4Compat?: boolean | null;
    /**
     * This is only valid if :ref:`resolver_name ` is specified below and the named resolver is capable of named port resolution.
     */
    namedPort?: string | null;
    /**
     * Filepath that specifies the Linux network namespace this socket will be created in (see ``man 7 network_namespaces``). If this field is set, Envoy will create the socket in the specified network namespace. .. note:: Setting this parameter requires Envoy to run with the ``CAP_NET_ADMIN`` capability. .. note:: Currently only used for Listener sockets. .. attention:: Network namespaces are only configurable on Linux. Otherwise, this field has no effect.
     */
    networkNamespaceFilepath?: string | null;
    portValue?: number | null;
    protocol?: string | null;
    /**
     * The name of the custom resolver. This must have been registered with Envoy. If this is empty, a context dependent default applies. If the address is a concrete IP address, no resolution will occur. If address is a hostname this should be set for resolution other than DNS. Specifying a custom resolver with ``STRICT_DNS`` or ``LOGICAL_DNS`` will generate an error at runtime.
     */
    resolverName?: string | null;
  }
  /**
   * Describes a statically loaded cluster.
   */
  export interface Schema$StaticCluster {
    /**
     * The cluster config.
     */
    cluster?: {[key: string]: any} | null;
    /**
     * The timestamp when the Cluster was last updated.
     */
    lastUpdated?: string | null;
  }
  export interface Schema$StaticEndpointConfig {
    /**
     * The endpoint config.
     */
    endpointConfig?: {[key: string]: any} | null;
    /**
     * [#not-implemented-hide:] The timestamp when the Endpoint was last updated.
     */
    lastUpdated?: string | null;
  }
  /**
   * Describes a statically loaded listener.
   */
  export interface Schema$StaticListener {
    /**
     * The timestamp when the Listener was last successfully updated.
     */
    lastUpdated?: string | null;
    /**
     * The listener config.
     */
    listener?: {[key: string]: any} | null;
  }
  export interface Schema$StaticRouteConfig {
    /**
     * The timestamp when the Route was last updated.
     */
    lastUpdated?: string | null;
    /**
     * The route config.
     */
    routeConfig?: {[key: string]: any} | null;
  }
  /**
   * Specifies the way to match a string. [#next-free-field: 9]
   */
  export interface Schema$StringMatcher {
    /**
     * The input string must have the substring specified here. .. note:: Empty contains match is not allowed, please use ``safe_regex`` instead. Examples: * ``abc`` matches the value ``xyz.abc.def``
     */
    contains?: string | null;
    /**
     * Use an extension as the matcher type. [#extension-category: envoy.string_matcher]
     */
    custom?: Schema$TypedExtensionConfig;
    /**
     * The input string must match exactly the string specified here. Examples: * ``abc`` only matches the value ``abc``.
     */
    exact?: string | null;
    /**
     * If ``true``, indicates the exact/prefix/suffix/contains matching should be case insensitive. This has no effect for the ``safe_regex`` match. For example, the matcher ``data`` will match both input string ``Data`` and ``data`` if this option is set to ``true``.
     */
    ignoreCase?: boolean | null;
    /**
     * The input string must have the prefix specified here. .. note:: Empty prefix match is not allowed, please use ``safe_regex`` instead. Examples: * ``abc`` matches the value ``abc.xyz``
     */
    prefix?: string | null;
    /**
     * The input string must match the regular expression specified here.
     */
    safeRegex?: Schema$RegexMatcher;
    /**
     * The input string must have the suffix specified here. .. note:: Empty suffix match is not allowed, please use ``safe_regex`` instead. Examples: * ``abc`` matches the value ``xyz.abc``
     */
    suffix?: string | null;
  }
  /**
   * StructMatcher provides a general interface to check if a given value is matched in google.protobuf.Struct. It uses ``path`` to retrieve the value from the struct and then check if it's matched to the specified value. For example, for the following Struct: .. code-block:: yaml fields: a: struct_value: fields: b: struct_value: fields: c: string_value: pro t: list_value: values: - string_value: m - string_value: n The following MetadataMatcher is matched as the path [a, b, c] will retrieve a string value "pro" from the Metadata which is matched to the specified prefix match. .. code-block:: yaml path: - key: a - key: b - key: c value: string_match: prefix: pr The following StructMatcher is matched as the code will match one of the string values in the list at the path [a, t]. .. code-block:: yaml path: - key: a - key: t value: list_match: one_of: string_match: exact: m An example use of StructMatcher is to match metadata in envoy.v*.core.Node.
   */
  export interface Schema$StructMatcher {
    /**
     * The path to retrieve the Value from the Struct.
     */
    path?: Schema$PathSegment[];
    /**
     * The StructMatcher is matched if the value retrieved by path is matched to this value.
     */
    value?: Schema$ValueMatcher;
  }
  /**
   * Message type for extension configuration.
   */
  export interface Schema$TypedExtensionConfig {
    /**
     * The name of an extension. This is not used to select the extension, instead it serves the role of an opaque identifier.
     */
    name?: string | null;
    /**
     * The typed config for the extension. The type URL will be used to identify the extension. In the case that the type URL is *xds.type.v3.TypedStruct* (or, for historical reasons, *udpa.type.v1.TypedStruct*), the inner type URL of *TypedStruct* will be utilized. See the :ref:`extension configuration overview ` for further details.
     */
    typedConfig?: {[key: string]: any} | null;
  }
  export interface Schema$UpdateFailureState {
    /**
     * Details about the last failed update attempt.
     */
    details?: string | null;
    /**
     * What the component configuration would have been if the update had succeeded. This field may not be populated by xDS clients due to storage overhead.
     */
    failedConfiguration?: {[key: string]: any} | null;
    /**
     * Time of the latest failed update attempt.
     */
    lastUpdateAttempt?: string | null;
    /**
     * This is the version of the rejected resource. [#not-implemented-hide:]
     */
    versionInfo?: string | null;
  }
  /**
   * Specifies the way to match a ProtobufWkt::Value. Primitive values and ListValue are supported. StructValue is not supported and is always not matched. [#next-free-field: 8]
   */
  export interface Schema$ValueMatcher {
    /**
     * If specified, a match occurs if and only if the target value is a bool value and is equal to this field.
     */
    boolMatch?: boolean | null;
    /**
     * If specified, a match occurs if and only if the target value is a double value and is matched to this field.
     */
    doubleMatch?: Schema$DoubleMatcher;
    /**
     * If specified, a match occurs if and only if the target value is a list value and is matched to this field.
     */
    listMatch?: Schema$ListMatcher;
    /**
     * If specified, a match occurs if and only if the target value is a NullValue.
     */
    nullMatch?: Schema$NullMatch;
    /**
     * If specified, a match occurs if and only if any of the alternatives in the match accept the value.
     */
    orMatch?: Schema$OrMatcher;
    /**
     * If specified, value match will be performed based on whether the path is referring to a valid primitive value in the metadata. If the path is referring to a non-primitive value, the result is always not matched.
     */
    presentMatch?: boolean | null;
    /**
     * If specified, a match occurs if and only if the target value is a string value and is matched to this field.
     */
    stringMatch?: Schema$StringMatcher;
  }

  export class Resource$Discovery {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/trafficdirector.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const trafficdirector = google.trafficdirector('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await trafficdirector.discovery.client_status({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "excludeResourceContents": false,
     *       //   "node": {},
     *       //   "nodeMatchers": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "config": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    client_status(
      params: Params$Resource$Discovery$Client_status,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    client_status(
      params?: Params$Resource$Discovery$Client_status,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ClientStatusResponse>>;
    client_status(
      params: Params$Resource$Discovery$Client_status,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    client_status(
      params: Params$Resource$Discovery$Client_status,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ClientStatusResponse>,
      callback: BodyResponseCallback<Schema$ClientStatusResponse>
    ): void;
    client_status(
      params: Params$Resource$Discovery$Client_status,
      callback: BodyResponseCallback<Schema$ClientStatusResponse>
    ): void;
    client_status(
      callback: BodyResponseCallback<Schema$ClientStatusResponse>
    ): void;
    client_status(
      paramsOrCallback?:
        | Params$Resource$Discovery$Client_status
        | BodyResponseCallback<Schema$ClientStatusResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ClientStatusResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ClientStatusResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ClientStatusResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Discovery$Client_status;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Discovery$Client_status;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://trafficdirector.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v3/discovery:client_status').replace(
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
        createAPIRequest<Schema$ClientStatusResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ClientStatusResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Discovery$Client_status
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$ClientStatusRequest;
  }
}
