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

export namespace datastream_v1 {
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
   * Datastream API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const datastream = google.datastream('v1');
   * ```
   */
  export class Datastream {
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
   * AppendOnly mode defines that all changes to a table will be written to the destination table.
   */
  export interface Schema$AppendOnly {}
  /**
   * AVRO file format configuration.
   */
  export interface Schema$AvroFileFormat {}
  /**
   * Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.
   */
  export interface Schema$BackfillAllStrategy {
    /**
     * MongoDB data source objects to avoid backfilling
     */
    mongodbExcludedObjects?: Schema$MongodbCluster;
    /**
     * MySQL data source objects to avoid backfilling.
     */
    mysqlExcludedObjects?: Schema$MysqlRdbms;
    /**
     * Oracle data source objects to avoid backfilling.
     */
    oracleExcludedObjects?: Schema$OracleRdbms;
    /**
     * PostgreSQL data source objects to avoid backfilling.
     */
    postgresqlExcludedObjects?: Schema$PostgresqlRdbms;
    /**
     * Salesforce data source objects to avoid backfilling
     */
    salesforceExcludedObjects?: Schema$SalesforceOrg;
    /**
     * SQLServer data source objects to avoid backfilling
     */
    sqlServerExcludedObjects?: Schema$SqlServerRdbms;
  }
  /**
   * Represents a backfill job on a specific stream object.
   */
  export interface Schema$BackfillJob {
    /**
     * Output only. Errors which caused the backfill job to fail.
     */
    errors?: Schema$Error[];
    /**
     * Output only. Backfill job's end time.
     */
    lastEndTime?: string | null;
    /**
     * Output only. Backfill job's start time.
     */
    lastStartTime?: string | null;
    /**
     * Output only. Backfill job state.
     */
    state?: string | null;
    /**
     * Backfill job's triggering reason.
     */
    trigger?: string | null;
  }
  /**
   * Backfill strategy to disable automatic backfill for the Stream's objects.
   */
  export interface Schema$BackfillNoneStrategy {}
  /**
   * BigQuery destination configuration
   */
  export interface Schema$BigQueryDestinationConfig {
    /**
     * Append only mode
     */
    appendOnly?: Schema$AppendOnly;
    /**
     * Optional. Big Lake Managed Tables (BLMT) configuration.
     */
    blmtConfig?: Schema$BlmtConfig;
    /**
     * The guaranteed data freshness (in seconds) when querying tables created by the stream. Editing this field will only affect new tables created in the future, but existing tables will not be impacted. Lower values mean that queries will return fresher data, but may result in higher cost.
     */
    dataFreshness?: string | null;
    /**
     * The standard mode
     */
    merge?: Schema$Merge;
    /**
     * Single destination dataset.
     */
    singleTargetDataset?: Schema$SingleTargetDataset;
    /**
     * Source hierarchy datasets.
     */
    sourceHierarchyDatasets?: Schema$SourceHierarchyDatasets;
  }
  /**
   * BigQuery warehouse profile.
   */
  export interface Schema$BigQueryProfile {}
  /**
   * Configuration to use Binary Log Parser CDC technique.
   */
  export interface Schema$BinaryLogParser {
    /**
     * Use Oracle directories.
     */
    logFileDirectories?: Schema$LogFileDirectories;
    /**
     * Use Oracle ASM.
     */
    oracleAsmLogFileAccess?: Schema$OracleAsmLogFileAccess;
  }
  /**
   * Use Binary log position based replication.
   */
  export interface Schema$BinaryLogPosition {}
  /**
   * The configuration for BLMT.
   */
  export interface Schema$BlmtConfig {
    /**
     * Required. The Cloud Storage bucket name.
     */
    bucket?: string | null;
    /**
     * Required. The bigquery connection. Format: `{project\}.{location\}.{name\}`
     */
    connectionName?: string | null;
    /**
     * Required. The file format.
     */
    fileFormat?: string | null;
    /**
     * The root path inside the Cloud Storage bucket.
     */
    rootPath?: string | null;
    /**
     * Required. The table format.
     */
    tableFormat?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * The strategy that the stream uses for CDC replication.
   */
  export interface Schema$CdcStrategy {
    /**
     * Optional. Start replicating from the most recent position in the source.
     */
    mostRecentStartPosition?: Schema$MostRecentStartPosition;
    /**
     * Optional. Resume replication from the next available position in the source.
     */
    nextAvailableStartPosition?: Schema$NextAvailableStartPosition;
    /**
     * Optional. Start replicating from a specific position in the source.
     */
    specificStartPosition?: Schema$SpecificStartPosition;
  }
  /**
   * A set of reusable connection configurations to be used as a source or destination for a stream.
   */
  export interface Schema$ConnectionProfile {
    /**
     * BigQuery Connection Profile configuration.
     */
    bigqueryProfile?: Schema$BigQueryProfile;
    /**
     * Output only. The create time of the resource.
     */
    createTime?: string | null;
    /**
     * Required. Display name.
     */
    displayName?: string | null;
    /**
     * Forward SSH tunnel connectivity.
     */
    forwardSshConnectivity?: Schema$ForwardSshTunnelConnectivity;
    /**
     * Cloud Storage ConnectionProfile configuration.
     */
    gcsProfile?: Schema$GcsProfile;
    /**
     * Labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * MongoDB Connection Profile configuration.
     */
    mongodbProfile?: Schema$MongodbProfile;
    /**
     * MySQL ConnectionProfile configuration.
     */
    mysqlProfile?: Schema$MysqlProfile;
    /**
     * Output only. Identifier. The resource's name.
     */
    name?: string | null;
    /**
     * Oracle ConnectionProfile configuration.
     */
    oracleProfile?: Schema$OracleProfile;
    /**
     * PostgreSQL Connection Profile configuration.
     */
    postgresqlProfile?: Schema$PostgresqlProfile;
    /**
     * Private connectivity.
     */
    privateConnectivity?: Schema$PrivateConnectivity;
    /**
     * Salesforce Connection Profile configuration.
     */
    salesforceProfile?: Schema$SalesforceProfile;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzi?: boolean | null;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzs?: boolean | null;
    /**
     * SQLServer Connection Profile configuration.
     */
    sqlServerProfile?: Schema$SqlServerProfile;
    /**
     * Static Service IP connectivity.
     */
    staticServiceIpConnectivity?: Schema$StaticServiceIpConnectivity;
    /**
     * Output only. The update time of the resource.
     */
    updateTime?: string | null;
  }
  /**
   * Dataset template used for dynamic dataset creation.
   */
  export interface Schema$DatasetTemplate {
    /**
     * If supplied, every created dataset will have its name prefixed by the provided value. The prefix and name will be separated by an underscore. i.e. _.
     */
    datasetIdPrefix?: string | null;
    /**
     * Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key. i.e. projects/{project\}/locations/{location\}/keyRings/{key_ring\}/cryptoKeys/{cryptoKey\}. See https://cloud.google.com/bigquery/docs/customer-managed-encryption for more information.
     */
    kmsKeyName?: string | null;
    /**
     * Required. The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.
     */
    location?: string | null;
  }
  /**
   * The configuration of the stream destination.
   */
  export interface Schema$DestinationConfig {
    /**
     * BigQuery destination configuration.
     */
    bigqueryDestinationConfig?: Schema$BigQueryDestinationConfig;
    /**
     * Required. Destination connection profile resource. Format: `projects/{project\}/locations/{location\}/connectionProfiles/{name\}`
     */
    destinationConnectionProfile?: string | null;
    /**
     * A configuration for how data should be loaded to Cloud Storage.
     */
    gcsDestinationConfig?: Schema$GcsDestinationConfig;
  }
  /**
   * Request message for 'discover' ConnectionProfile request.
   */
  export interface Schema$DiscoverConnectionProfileRequest {
    /**
     * An ad-hoc connection profile configuration.
     */
    connectionProfile?: Schema$ConnectionProfile;
    /**
     * A reference to an existing connection profile.
     */
    connectionProfileName?: string | null;
    /**
     * Whether to retrieve the full hierarchy of data objects (TRUE) or only the current level (FALSE).
     */
    fullHierarchy?: boolean | null;
    /**
     * The number of hierarchy levels below the current level to be retrieved.
     */
    hierarchyDepth?: number | null;
    /**
     * MongoDB cluster to enrich with child data objects and metadata.
     */
    mongodbCluster?: Schema$MongodbCluster;
    /**
     * MySQL RDBMS to enrich with child data objects and metadata.
     */
    mysqlRdbms?: Schema$MysqlRdbms;
    /**
     * Oracle RDBMS to enrich with child data objects and metadata.
     */
    oracleRdbms?: Schema$OracleRdbms;
    /**
     * PostgreSQL RDBMS to enrich with child data objects and metadata.
     */
    postgresqlRdbms?: Schema$PostgresqlRdbms;
    /**
     * Salesforce organization to enrich with child data objects and metadata.
     */
    salesforceOrg?: Schema$SalesforceOrg;
    /**
     * SQLServer RDBMS to enrich with child data objects and metadata.
     */
    sqlServerRdbms?: Schema$SqlServerRdbms;
  }
  /**
   * Response from a discover request.
   */
  export interface Schema$DiscoverConnectionProfileResponse {
    /**
     * Enriched MongoDB cluster.
     */
    mongodbCluster?: Schema$MongodbCluster;
    /**
     * Enriched MySQL RDBMS object.
     */
    mysqlRdbms?: Schema$MysqlRdbms;
    /**
     * Enriched Oracle RDBMS object.
     */
    oracleRdbms?: Schema$OracleRdbms;
    /**
     * Enriched PostgreSQL RDBMS object.
     */
    postgresqlRdbms?: Schema$PostgresqlRdbms;
    /**
     * Enriched Salesforce organization.
     */
    salesforceOrg?: Schema$SalesforceOrg;
    /**
     * Enriched SQLServer RDBMS object.
     */
    sqlServerRdbms?: Schema$SqlServerRdbms;
  }
  /**
   * Configuration to drop large object values.
   */
  export interface Schema$DropLargeObjects {}
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Represent a user-facing Error.
   */
  export interface Schema$Error {
    /**
     * Additional information about the error.
     */
    details?: {[key: string]: string} | null;
    /**
     * The time when the error occurred.
     */
    errorTime?: string | null;
    /**
     * A unique identifier for this specific error, allowing it to be traced throughout the system in logs and API responses.
     */
    errorUuid?: string | null;
    /**
     * A message containing more information about the error that occurred.
     */
    message?: string | null;
    /**
     * A title that explains the reason for the error.
     */
    reason?: string | null;
  }
  /**
   * Response message for a 'FetchStaticIps' response.
   */
  export interface Schema$FetchStaticIpsResponse {
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * list of static ips by account
     */
    staticIps?: string[] | null;
  }
  /**
   * Forward SSH Tunnel connectivity.
   */
  export interface Schema$ForwardSshTunnelConnectivity {
    /**
     * Required. Hostname for the SSH tunnel.
     */
    hostname?: string | null;
    /**
     * Input only. SSH password.
     */
    password?: string | null;
    /**
     * Port for the SSH tunnel, default value is 22.
     */
    port?: number | null;
    /**
     * Input only. SSH private key.
     */
    privateKey?: string | null;
    /**
     * Required. Username for the SSH tunnel.
     */
    username?: string | null;
  }
  /**
   * Google Cloud Storage destination configuration
   */
  export interface Schema$GcsDestinationConfig {
    /**
     * AVRO file format configuration.
     */
    avroFileFormat?: Schema$AvroFileFormat;
    /**
     * The maximum duration for which new events are added before a file is closed and a new file is created. Values within the range of 15-60 seconds are allowed.
     */
    fileRotationInterval?: string | null;
    /**
     * The maximum file size to be saved in the bucket.
     */
    fileRotationMb?: number | null;
    /**
     * JSON file format configuration.
     */
    jsonFileFormat?: Schema$JsonFileFormat;
    /**
     * Path inside the Cloud Storage bucket to write data to.
     */
    path?: string | null;
  }
  /**
   * Cloud Storage bucket profile.
   */
  export interface Schema$GcsProfile {
    /**
     * Required. The Cloud Storage bucket name.
     */
    bucket?: string | null;
    /**
     * The root path inside the Cloud Storage bucket.
     */
    rootPath?: string | null;
  }
  /**
   * Use GTID based replication.
   */
  export interface Schema$Gtid {}
  /**
   * A HostAddress represents a transport end point, which is the combination of an IP address or hostname and a port number.
   */
  export interface Schema$HostAddress {
    /**
     * Required. Hostname for the connection.
     */
    hostname?: string | null;
    /**
     * Optional. Port for the connection.
     */
    port?: number | null;
  }
  /**
   * JSON file format configuration.
   */
  export interface Schema$JsonFileFormat {
    /**
     * Compression of the loaded JSON file.
     */
    compression?: string | null;
    /**
     * The schema file format along JSON data files.
     */
    schemaFileFormat?: string | null;
  }
  /**
   * Response message for listing connection profiles.
   */
  export interface Schema$ListConnectionProfilesResponse {
    /**
     * List of connection profiles.
     */
    connectionProfiles?: Schema$ConnectionProfile[];
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
   * Response containing a list of private connection configurations.
   */
  export interface Schema$ListPrivateConnectionsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of private connectivity configurations.
     */
    privateConnections?: Schema$PrivateConnection[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Route list response.
   */
  export interface Schema$ListRoutesResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of Routes.
     */
    routes?: Schema$Route[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response containing the objects for a stream.
   */
  export interface Schema$ListStreamObjectsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page.
     */
    nextPageToken?: string | null;
    /**
     * List of stream objects.
     */
    streamObjects?: Schema$StreamObject[];
  }
  /**
   * Response message for listing streams.
   */
  export interface Schema$ListStreamsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of streams
     */
    streams?: Schema$Stream[];
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
   * Configuration to specify the Oracle directories to access the log files.
   */
  export interface Schema$LogFileDirectories {
    /**
     * Required. Oracle directory for archived logs.
     */
    archivedLogDirectory?: string | null;
    /**
     * Required. Oracle directory for online logs.
     */
    onlineLogDirectory?: string | null;
  }
  /**
   * Configuration to use LogMiner CDC method.
   */
  export interface Schema$LogMiner {}
  /**
   * Request for looking up a specific stream object by its source object identifier.
   */
  export interface Schema$LookupStreamObjectRequest {
    /**
     * Required. The source object identifier which maps to the stream object.
     */
    sourceObjectIdentifier?: Schema$SourceObjectIdentifier;
  }
  /**
   * Merge mode defines that all changes to a table will be merged at the destination table.
   */
  export interface Schema$Merge {}
  /**
   * MongoDB Cluster structure.
   */
  export interface Schema$MongodbCluster {
    /**
     * MongoDB databases in the cluster.
     */
    databases?: Schema$MongodbDatabase[];
  }
  /**
   * MongoDB Collection.
   */
  export interface Schema$MongodbCollection {
    /**
     * Collection name.
     */
    collection?: string | null;
    /**
     * Fields in the collection.
     */
    fields?: Schema$MongodbField[];
  }
  /**
   * MongoDB Database.
   */
  export interface Schema$MongodbDatabase {
    /**
     * Collections in the database.
     */
    collections?: Schema$MongodbCollection[];
    /**
     * Database name.
     */
    database?: string | null;
  }
  /**
   * MongoDB Field.
   */
  export interface Schema$MongodbField {
    /**
     * Field name.
     */
    field?: string | null;
  }
  /**
   * MongoDB data source object identifier.
   */
  export interface Schema$MongodbObjectIdentifier {
    /**
     * Required. The collection name.
     */
    collection?: string | null;
    /**
     * Required. The database name.
     */
    database?: string | null;
  }
  /**
   * MongoDB profile.
   */
  export interface Schema$MongodbProfile {
    /**
     * Required. List of host addresses for a MongoDB cluster. For SRV connection format, this list must contain exactly one DNS host without a port. For Standard connection format, this list must contain all the required hosts in the cluster with their respective ports.
     */
    hostAddresses?: Schema$HostAddress[];
    /**
     * Optional. Password for the MongoDB connection. Mutually exclusive with the `secret_manager_stored_password` field.
     */
    password?: string | null;
    /**
     * Optional. Name of the replica set. Only needed for self hosted replica set type MongoDB cluster. For SRV connection format, this field must be empty. For Standard connection format, this field must be specified.
     */
    replicaSet?: string | null;
    /**
     * Optional. A reference to a Secret Manager resource name storing the SQLServer connection password. Mutually exclusive with the `password` field.
     */
    secretManagerStoredPassword?: string | null;
    /**
     * Srv connection format.
     */
    srvConnectionFormat?: Schema$SrvConnectionFormat;
    /**
     * Optional. SSL configuration for the MongoDB connection.
     */
    sslConfig?: Schema$MongodbSslConfig;
    /**
     * Standard connection format.
     */
    standardConnectionFormat?: Schema$StandardConnectionFormat;
    /**
     * Required. Username for the MongoDB connection.
     */
    username?: string | null;
  }
  /**
   * MongoDB source configuration.
   */
  export interface Schema$MongodbSourceConfig {
    /**
     * MongoDB collections to exclude from the stream.
     */
    excludeObjects?: Schema$MongodbCluster;
    /**
     * MongoDB collections to include in the stream.
     */
    includeObjects?: Schema$MongodbCluster;
    /**
     * Optional. Maximum number of concurrent backfill tasks. The number should be non-negative and less than or equal to 50. If not set (or set to 0), the system's default value is used
     */
    maxConcurrentBackfillTasks?: number | null;
  }
  /**
   * MongoDB SSL configuration information.
   */
  export interface Schema$MongodbSslConfig {
    /**
     * Optional. Input only. PEM-encoded certificate of the CA that signed the source database server's certificate.
     */
    caCertificate?: string | null;
    /**
     * Output only. Indicates whether the ca_certificate field is set.
     */
    caCertificateSet?: boolean | null;
    /**
     * Optional. Input only. PEM-encoded certificate that will be used by the replica to authenticate against the source database server. If this field is used then the 'client_key' and the 'ca_certificate' fields are mandatory.
     */
    clientCertificate?: string | null;
    /**
     * Output only. Indicates whether the client_certificate field is set.
     */
    clientCertificateSet?: boolean | null;
    /**
     * Optional. Input only. PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' and the 'ca_certificate' fields are mandatory.
     */
    clientKey?: string | null;
    /**
     * Output only. Indicates whether the client_key field is set.
     */
    clientKeySet?: boolean | null;
    /**
     * Optional. Input only. A reference to a Secret Manager resource name storing the PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' and the 'ca_certificate' fields are mandatory. Mutually exclusive with the `client_key` field.
     */
    secretManagerStoredClientKey?: string | null;
  }
  /**
   * CDC strategy to start replicating from the most recent position in the source.
   */
  export interface Schema$MostRecentStartPosition {}
  /**
   * MySQL Column.
   */
  export interface Schema$MysqlColumn {
    /**
     * Column collation.
     */
    collation?: string | null;
    /**
     * Column name.
     */
    column?: string | null;
    /**
     * The MySQL data type. Full data types list can be found here: https://dev.mysql.com/doc/refman/8.0/en/data-types.html
     */
    dataType?: string | null;
    /**
     * Column length.
     */
    length?: number | null;
    /**
     * Whether or not the column can accept a null value.
     */
    nullable?: boolean | null;
    /**
     * The ordinal position of the column in the table.
     */
    ordinalPosition?: number | null;
    /**
     * Column precision.
     */
    precision?: number | null;
    /**
     * Whether or not the column represents a primary key.
     */
    primaryKey?: boolean | null;
    /**
     * Column scale.
     */
    scale?: number | null;
  }
  /**
   * MySQL database.
   */
  export interface Schema$MysqlDatabase {
    /**
     * Database name.
     */
    database?: string | null;
    /**
     * Tables in the database.
     */
    mysqlTables?: Schema$MysqlTable[];
  }
  /**
   * MySQL GTID position
   */
  export interface Schema$MysqlGtidPosition {
    /**
     * Required. The gtid set to start replication from.
     */
    gtidSet?: string | null;
  }
  /**
   * MySQL log position
   */
  export interface Schema$MysqlLogPosition {
    /**
     * Required. The binary log file name.
     */
    logFile?: string | null;
    /**
     * Optional. The position within the binary log file. Default is head of file.
     */
    logPosition?: number | null;
  }
  /**
   * Mysql data source object identifier.
   */
  export interface Schema$MysqlObjectIdentifier {
    /**
     * Required. The database name.
     */
    database?: string | null;
    /**
     * Required. The table name.
     */
    table?: string | null;
  }
  /**
   * MySQL database profile.
   */
  export interface Schema$MysqlProfile {
    /**
     * Required. Hostname for the MySQL connection.
     */
    hostname?: string | null;
    /**
     * Optional. Input only. Password for the MySQL connection. Mutually exclusive with the `secret_manager_stored_password` field.
     */
    password?: string | null;
    /**
     * Port for the MySQL connection, default value is 3306.
     */
    port?: number | null;
    /**
     * Optional. A reference to a Secret Manager resource name storing the MySQL connection password. Mutually exclusive with the `password` field.
     */
    secretManagerStoredPassword?: string | null;
    /**
     * SSL configuration for the MySQL connection.
     */
    sslConfig?: Schema$MysqlSslConfig;
    /**
     * Required. Username for the MySQL connection.
     */
    username?: string | null;
  }
  /**
   * MySQL database structure
   */
  export interface Schema$MysqlRdbms {
    /**
     * Mysql databases on the server
     */
    mysqlDatabases?: Schema$MysqlDatabase[];
  }
  /**
   * MySQL source configuration
   */
  export interface Schema$MysqlSourceConfig {
    /**
     * Use Binary log position based replication.
     */
    binaryLogPosition?: Schema$BinaryLogPosition;
    /**
     * MySQL objects to exclude from the stream.
     */
    excludeObjects?: Schema$MysqlRdbms;
    /**
     * Use GTID based replication.
     */
    gtid?: Schema$Gtid;
    /**
     * MySQL objects to retrieve from the source.
     */
    includeObjects?: Schema$MysqlRdbms;
    /**
     * Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used.
     */
    maxConcurrentBackfillTasks?: number | null;
    /**
     * Maximum number of concurrent CDC tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used.
     */
    maxConcurrentCdcTasks?: number | null;
  }
  /**
   * MySQL SSL configuration information.
   */
  export interface Schema$MysqlSslConfig {
    /**
     * Input only. PEM-encoded certificate of the CA that signed the source database server's certificate.
     */
    caCertificate?: string | null;
    /**
     * Output only. Indicates whether the ca_certificate field is set.
     */
    caCertificateSet?: boolean | null;
    /**
     * Optional. Input only. PEM-encoded certificate that will be used by the replica to authenticate against the source database server. If this field is used then the 'client_key' and the 'ca_certificate' fields are mandatory.
     */
    clientCertificate?: string | null;
    /**
     * Output only. Indicates whether the client_certificate field is set.
     */
    clientCertificateSet?: boolean | null;
    /**
     * Optional. Input only. PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' and the 'ca_certificate' fields are mandatory.
     */
    clientKey?: string | null;
    /**
     * Output only. Indicates whether the client_key field is set.
     */
    clientKeySet?: boolean | null;
  }
  /**
   * MySQL table.
   */
  export interface Schema$MysqlTable {
    /**
     * MySQL columns in the database. When unspecified as part of include/exclude objects, includes/excludes everything.
     */
    mysqlColumns?: Schema$MysqlColumn[];
    /**
     * Table name.
     */
    table?: string | null;
  }
  /**
   * CDC strategy to resume replication from the next available position in the source.
   */
  export interface Schema$NextAvailableStartPosition {}
  /**
   * OAuth2 Client Credentials.
   */
  export interface Schema$Oauth2ClientCredentials {
    /**
     * Required. Client ID for Salesforce OAuth2 Client Credentials.
     */
    clientId?: string | null;
    /**
     * Optional. Client secret for Salesforce OAuth2 Client Credentials. Mutually exclusive with the `secret_manager_stored_client_secret` field.
     */
    clientSecret?: string | null;
    /**
     * Optional. A reference to a Secret Manager resource name storing the Salesforce OAuth2 client_secret. Mutually exclusive with the `client_secret` field.
     */
    secretManagerStoredClientSecret?: string | null;
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
     * Output only. Results of executed validations if there are any.
     */
    validationResult?: Schema$ValidationResult;
    /**
     * Output only. Name of the verb executed by the operation.
     */
    verb?: string | null;
  }
  /**
   * Configuration for Oracle Automatic Storage Management (ASM) connection.
   */
  export interface Schema$OracleAsmConfig {
    /**
     * Required. ASM service name for the Oracle ASM connection.
     */
    asmService?: string | null;
    /**
     * Optional. Connection string attributes
     */
    connectionAttributes?: {[key: string]: string} | null;
    /**
     * Required. Hostname for the Oracle ASM connection.
     */
    hostname?: string | null;
    /**
     * Optional. SSL configuration for the Oracle connection.
     */
    oracleSslConfig?: Schema$OracleSslConfig;
    /**
     * Optional. Password for the Oracle ASM connection. Mutually exclusive with the `secret_manager_stored_password` field.
     */
    password?: string | null;
    /**
     * Required. Port for the Oracle ASM connection.
     */
    port?: number | null;
    /**
     * Optional. A reference to a Secret Manager resource name storing the Oracle ASM connection password. Mutually exclusive with the `password` field.
     */
    secretManagerStoredPassword?: string | null;
    /**
     * Required. Username for the Oracle ASM connection.
     */
    username?: string | null;
  }
  /**
   * Configuration to use Oracle ASM to access the log files.
   */
  export interface Schema$OracleAsmLogFileAccess {}
  /**
   * Oracle Column.
   */
  export interface Schema$OracleColumn {
    /**
     * Column name.
     */
    column?: string | null;
    /**
     * The Oracle data type.
     */
    dataType?: string | null;
    /**
     * Column encoding.
     */
    encoding?: string | null;
    /**
     * Column length.
     */
    length?: number | null;
    /**
     * Whether or not the column can accept a null value.
     */
    nullable?: boolean | null;
    /**
     * The ordinal position of the column in the table.
     */
    ordinalPosition?: number | null;
    /**
     * Column precision.
     */
    precision?: number | null;
    /**
     * Whether or not the column represents a primary key.
     */
    primaryKey?: boolean | null;
    /**
     * Column scale.
     */
    scale?: number | null;
  }
  /**
   * Oracle data source object identifier.
   */
  export interface Schema$OracleObjectIdentifier {
    /**
     * Required. The schema name.
     */
    schema?: string | null;
    /**
     * Required. The table name.
     */
    table?: string | null;
  }
  /**
   * Oracle database profile.
   */
  export interface Schema$OracleProfile {
    /**
     * Connection string attributes
     */
    connectionAttributes?: {[key: string]: string} | null;
    /**
     * Required. Database for the Oracle connection.
     */
    databaseService?: string | null;
    /**
     * Required. Hostname for the Oracle connection.
     */
    hostname?: string | null;
    /**
     * Optional. Configuration for Oracle ASM connection.
     */
    oracleAsmConfig?: Schema$OracleAsmConfig;
    /**
     * Optional. SSL configuration for the Oracle connection.
     */
    oracleSslConfig?: Schema$OracleSslConfig;
    /**
     * Optional. Password for the Oracle connection. Mutually exclusive with the `secret_manager_stored_password` field.
     */
    password?: string | null;
    /**
     * Port for the Oracle connection, default value is 1521.
     */
    port?: number | null;
    /**
     * Optional. A reference to a Secret Manager resource name storing the Oracle connection password. Mutually exclusive with the `password` field.
     */
    secretManagerStoredPassword?: string | null;
    /**
     * Required. Username for the Oracle connection.
     */
    username?: string | null;
  }
  /**
   * Oracle database structure.
   */
  export interface Schema$OracleRdbms {
    /**
     * Oracle schemas/databases in the database server.
     */
    oracleSchemas?: Schema$OracleSchema[];
  }
  /**
   * Oracle schema.
   */
  export interface Schema$OracleSchema {
    /**
     * Tables in the schema.
     */
    oracleTables?: Schema$OracleTable[];
    /**
     * Schema name.
     */
    schema?: string | null;
  }
  /**
   * Oracle SCN position
   */
  export interface Schema$OracleScnPosition {
    /**
     * Required. SCN number from where Logs will be read
     */
    scn?: string | null;
  }
  /**
   * Oracle data source configuration
   */
  export interface Schema$OracleSourceConfig {
    /**
     * Use Binary Log Parser.
     */
    binaryLogParser?: Schema$BinaryLogParser;
    /**
     * Drop large object values.
     */
    dropLargeObjects?: Schema$DropLargeObjects;
    /**
     * Oracle objects to exclude from the stream.
     */
    excludeObjects?: Schema$OracleRdbms;
    /**
     * Oracle objects to include in the stream.
     */
    includeObjects?: Schema$OracleRdbms;
    /**
     * Use LogMiner.
     */
    logMiner?: Schema$LogMiner;
    /**
     * Maximum number of concurrent backfill tasks. The number should be non-negative. If not set (or set to 0), the system's default value is used.
     */
    maxConcurrentBackfillTasks?: number | null;
    /**
     * Maximum number of concurrent CDC tasks. The number should be non-negative. If not set (or set to 0), the system's default value is used.
     */
    maxConcurrentCdcTasks?: number | null;
    /**
     * Stream large object values.
     */
    streamLargeObjects?: Schema$StreamLargeObjects;
  }
  /**
   * Oracle SSL configuration information.
   */
  export interface Schema$OracleSslConfig {
    /**
     * Input only. PEM-encoded certificate of the CA that signed the source database server's certificate.
     */
    caCertificate?: string | null;
    /**
     * Output only. Indicates whether the ca_certificate field has been set for this Connection-Profile.
     */
    caCertificateSet?: boolean | null;
    /**
     * Optional. The distinguished name (DN) mentioned in the server certificate. This corresponds to SSL_SERVER_CERT_DN sqlnet parameter. Refer https://docs.oracle.com/en/database/oracle/oracle-database/19/netrf/local-naming-parameters-in-tns-ora-file.html#GUID-70AB0695-A9AA-4A94-B141-4C605236EEB7 If this field is not provided, the DN matching is not enforced.
     */
    serverCertificateDistinguishedName?: string | null;
  }
  /**
   * Oracle table.
   */
  export interface Schema$OracleTable {
    /**
     * Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
     */
    oracleColumns?: Schema$OracleColumn[];
    /**
     * Table name.
     */
    table?: string | null;
  }
  /**
   * PostgreSQL Column.
   */
  export interface Schema$PostgresqlColumn {
    /**
     * Column name.
     */
    column?: string | null;
    /**
     * The PostgreSQL data type.
     */
    dataType?: string | null;
    /**
     * Column length.
     */
    length?: number | null;
    /**
     * Whether or not the column can accept a null value.
     */
    nullable?: boolean | null;
    /**
     * The ordinal position of the column in the table.
     */
    ordinalPosition?: number | null;
    /**
     * Column precision.
     */
    precision?: number | null;
    /**
     * Whether or not the column represents a primary key.
     */
    primaryKey?: boolean | null;
    /**
     * Column scale.
     */
    scale?: number | null;
  }
  /**
   * PostgreSQL data source object identifier.
   */
  export interface Schema$PostgresqlObjectIdentifier {
    /**
     * Required. The schema name.
     */
    schema?: string | null;
    /**
     * Required. The table name.
     */
    table?: string | null;
  }
  /**
   * PostgreSQL database profile.
   */
  export interface Schema$PostgresqlProfile {
    /**
     * Required. Database for the PostgreSQL connection.
     */
    database?: string | null;
    /**
     * Required. Hostname for the PostgreSQL connection.
     */
    hostname?: string | null;
    /**
     * Optional. Password for the PostgreSQL connection. Mutually exclusive with the `secret_manager_stored_password` field.
     */
    password?: string | null;
    /**
     * Port for the PostgreSQL connection, default value is 5432.
     */
    port?: number | null;
    /**
     * Optional. A reference to a Secret Manager resource name storing the PostgreSQL connection password. Mutually exclusive with the `password` field.
     */
    secretManagerStoredPassword?: string | null;
    /**
     * Optional. SSL configuration for the PostgreSQL connection. In case PostgresqlSslConfig is not set, the connection will use the default SSL mode, which is `prefer` (i.e. this mode will only use encryption if enabled from database side, otherwise will use unencrypted communication)
     */
    sslConfig?: Schema$PostgresqlSslConfig;
    /**
     * Required. Username for the PostgreSQL connection.
     */
    username?: string | null;
  }
  /**
   * PostgreSQL database structure.
   */
  export interface Schema$PostgresqlRdbms {
    /**
     * PostgreSQL schemas in the database server.
     */
    postgresqlSchemas?: Schema$PostgresqlSchema[];
  }
  /**
   * PostgreSQL schema.
   */
  export interface Schema$PostgresqlSchema {
    /**
     * Tables in the schema.
     */
    postgresqlTables?: Schema$PostgresqlTable[];
    /**
     * Schema name.
     */
    schema?: string | null;
  }
  /**
   * PostgreSQL data source configuration
   */
  export interface Schema$PostgresqlSourceConfig {
    /**
     * PostgreSQL objects to exclude from the stream.
     */
    excludeObjects?: Schema$PostgresqlRdbms;
    /**
     * PostgreSQL objects to include in the stream.
     */
    includeObjects?: Schema$PostgresqlRdbms;
    /**
     * Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used.
     */
    maxConcurrentBackfillTasks?: number | null;
    /**
     * Required. The name of the publication that includes the set of all tables that are defined in the stream's include_objects.
     */
    publication?: string | null;
    /**
     * Required. Immutable. The name of the logical replication slot that's configured with the pgoutput plugin.
     */
    replicationSlot?: string | null;
  }
  /**
   * PostgreSQL SSL configuration information.
   */
  export interface Schema$PostgresqlSslConfig {
    /**
     * If this field is set, the communication will be encrypted with TLS encryption and both the server identity and the client identity will be authenticated.
     */
    serverAndClientVerification?: Schema$ServerAndClientVerification;
    /**
     *  If this field is set, the communication will be encrypted with TLS encryption and the server identity will be authenticated.
     */
    serverVerification?: Schema$ServerVerification;
  }
  /**
   * PostgreSQL table.
   */
  export interface Schema$PostgresqlTable {
    /**
     * PostgreSQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
     */
    postgresqlColumns?: Schema$PostgresqlColumn[];
    /**
     * Table name.
     */
    table?: string | null;
  }
  /**
   * The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network.
   */
  export interface Schema$PrivateConnection {
    /**
     * Output only. The create time of the resource.
     */
    createTime?: string | null;
    /**
     * Required. Display name.
     */
    displayName?: string | null;
    /**
     * Output only. In case of error, the details of the error in a user-friendly format.
     */
    error?: Schema$Error;
    /**
     * Labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Identifier. The resource's name.
     */
    name?: string | null;
    /**
     * PSC Interface Config.
     */
    pscInterfaceConfig?: Schema$PscInterfaceConfig;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzi?: boolean | null;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzs?: boolean | null;
    /**
     * Output only. The state of the Private Connection.
     */
    state?: string | null;
    /**
     * Output only. The update time of the resource.
     */
    updateTime?: string | null;
    /**
     * VPC Peering Config.
     */
    vpcPeeringConfig?: Schema$VpcPeeringConfig;
  }
  /**
   * Private Connectivity
   */
  export interface Schema$PrivateConnectivity {
    /**
     * Required. A reference to a private connection resource. Format: `projects/{project\}/locations/{location\}/privateConnections/{name\}`
     */
    privateConnection?: string | null;
  }
  /**
   * The PSC Interface configuration is used to create PSC Interface between Datastream and the consumer's PSC.
   */
  export interface Schema$PscInterfaceConfig {
    /**
     * Required. Fully qualified name of the Network Attachment that Datastream will connect to. Format: `projects/{project\}/regions/{region\}/networkAttachments/{name\}`
     */
    networkAttachment?: string | null;
  }
  /**
   * The route resource is the child of the private connection resource, used for defining a route for a private connection.
   */
  export interface Schema$Route {
    /**
     * Output only. The create time of the resource.
     */
    createTime?: string | null;
    /**
     * Required. Destination address for connection
     */
    destinationAddress?: string | null;
    /**
     * Destination port for connection
     */
    destinationPort?: number | null;
    /**
     * Required. Display name.
     */
    displayName?: string | null;
    /**
     * Labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. Identifier. The resource's name.
     */
    name?: string | null;
    /**
     * Output only. The update time of the resource.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for running a stream.
   */
  export interface Schema$RunStreamRequest {
    /**
     * Optional. The CDC strategy of the stream. If not set, the system's default value will be used.
     */
    cdcStrategy?: Schema$CdcStrategy;
    /**
     * Optional. Update the stream without validating it.
     */
    force?: boolean | null;
  }
  /**
   * Salesforce field.
   */
  export interface Schema$SalesforceField {
    /**
     * The data type.
     */
    dataType?: string | null;
    /**
     * Field name.
     */
    name?: string | null;
    /**
     * Indicates whether the field can accept nil values.
     */
    nillable?: boolean | null;
  }
  /**
   * Salesforce object.
   */
  export interface Schema$SalesforceObject {
    /**
     * Salesforce fields. When unspecified as part of include objects, includes everything, when unspecified as part of exclude objects, excludes nothing.
     */
    fields?: Schema$SalesforceField[];
    /**
     * Object name.
     */
    objectName?: string | null;
  }
  /**
   * Salesforce data source object identifier.
   */
  export interface Schema$SalesforceObjectIdentifier {
    /**
     * Required. The object name.
     */
    objectName?: string | null;
  }
  /**
   * Salesforce organization structure.
   */
  export interface Schema$SalesforceOrg {
    /**
     * Salesforce objects in the database server.
     */
    objects?: Schema$SalesforceObject[];
  }
  /**
   * Salesforce profile
   */
  export interface Schema$SalesforceProfile {
    /**
     * Required. Domain endpoint for the Salesforce connection.
     */
    domain?: string | null;
    /**
     * Connected app authentication.
     */
    oauth2ClientCredentials?: Schema$Oauth2ClientCredentials;
    /**
     * User-password authentication.
     */
    userCredentials?: Schema$UserCredentials;
  }
  /**
   * Salesforce source configuration
   */
  export interface Schema$SalesforceSourceConfig {
    /**
     * Salesforce objects to exclude from the stream.
     */
    excludeObjects?: Schema$SalesforceOrg;
    /**
     * Salesforce objects to retrieve from the source.
     */
    includeObjects?: Schema$SalesforceOrg;
    /**
     * Required. Salesforce objects polling interval. The interval at which new changes will be polled for each object. The duration must be between 5 minutes and 24 hours.
     */
    pollingInterval?: string | null;
  }
  /**
   * Message represents the option where Datastream will enforce the encryption and authenticate the server identity as well as the client identity. ca_certificate, client_certificate and client_key must be set if user selects this option.
   */
  export interface Schema$ServerAndClientVerification {
    /**
     * Required. Input only. PEM-encoded server root CA certificate.
     */
    caCertificate?: string | null;
    /**
     * Required. Input only. PEM-encoded certificate used by the source database to authenticate the client identity (i.e., the Datastream's identity). This certificate is signed by either a root certificate trusted by the server or one or more intermediate certificates (which is stored with the leaf certificate) to link the this certificate to the trusted root certificate.
     */
    clientCertificate?: string | null;
    /**
     * Optional. Input only. PEM-encoded private key associated with the client certificate. This value will be used during the SSL/TLS handshake, allowing the PostgreSQL server to authenticate the client's identity, i.e. identity of the Datastream.
     */
    clientKey?: string | null;
    /**
     * Optional. The hostname mentioned in the Subject or SAN extension of the server certificate. If this field is not provided, the hostname in the server certificate is not validated.
     */
    serverCertificateHostname?: string | null;
  }
  /**
   * Message represents the option where Datastream will enforce the encryption and authenticate the server identity. ca_certificate must be set if user selects this option.
   */
  export interface Schema$ServerVerification {
    /**
     * Required. Input only. PEM-encoded server root CA certificate.
     */
    caCertificate?: string | null;
    /**
     * Optional. The hostname mentioned in the Subject or SAN extension of the server certificate. If this field is not provided, the hostname in the server certificate is not validated.
     */
    serverCertificateHostname?: string | null;
  }
  /**
   * A single target dataset to which all data will be streamed.
   */
  export interface Schema$SingleTargetDataset {
    /**
     * The dataset ID of the target dataset. DatasetIds allowed characters: https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#datasetreference.
     */
    datasetId?: string | null;
  }
  /**
   * The configuration of the stream source.
   */
  export interface Schema$SourceConfig {
    /**
     * MongoDB data source configuration.
     */
    mongodbSourceConfig?: Schema$MongodbSourceConfig;
    /**
     * MySQL data source configuration.
     */
    mysqlSourceConfig?: Schema$MysqlSourceConfig;
    /**
     * Oracle data source configuration.
     */
    oracleSourceConfig?: Schema$OracleSourceConfig;
    /**
     * PostgreSQL data source configuration.
     */
    postgresqlSourceConfig?: Schema$PostgresqlSourceConfig;
    /**
     * Salesforce data source configuration.
     */
    salesforceSourceConfig?: Schema$SalesforceSourceConfig;
    /**
     * Required. Source connection profile resource. Format: `projects/{project\}/locations/{location\}/connectionProfiles/{name\}`
     */
    sourceConnectionProfile?: string | null;
    /**
     * SQLServer data source configuration.
     */
    sqlServerSourceConfig?: Schema$SqlServerSourceConfig;
  }
  /**
   * Destination datasets are created so that hierarchy of the destination data objects matches the source hierarchy.
   */
  export interface Schema$SourceHierarchyDatasets {
    /**
     * The dataset template to use for dynamic dataset creation.
     */
    datasetTemplate?: Schema$DatasetTemplate;
    /**
     * Optional. The project id of the BigQuery dataset. If not specified, the project will be inferred from the stream resource.
     */
    projectId?: string | null;
  }
  /**
   * Represents an identifier of an object in the data source.
   */
  export interface Schema$SourceObjectIdentifier {
    /**
     * MongoDB data source object identifier.
     */
    mongodbIdentifier?: Schema$MongodbObjectIdentifier;
    /**
     * Mysql data source object identifier.
     */
    mysqlIdentifier?: Schema$MysqlObjectIdentifier;
    /**
     * Oracle data source object identifier.
     */
    oracleIdentifier?: Schema$OracleObjectIdentifier;
    /**
     * PostgreSQL data source object identifier.
     */
    postgresqlIdentifier?: Schema$PostgresqlObjectIdentifier;
    /**
     * Salesforce data source object identifier.
     */
    salesforceIdentifier?: Schema$SalesforceObjectIdentifier;
    /**
     * SQLServer data source object identifier.
     */
    sqlServerIdentifier?: Schema$SqlServerObjectIdentifier;
  }
  /**
   * CDC strategy to start replicating from a specific position in the source.
   */
  export interface Schema$SpecificStartPosition {
    /**
     * MySQL GTID set to start replicating from.
     */
    mysqlGtidPosition?: Schema$MysqlGtidPosition;
    /**
     * MySQL specific log position to start replicating from.
     */
    mysqlLogPosition?: Schema$MysqlLogPosition;
    /**
     * Oracle SCN to start replicating from.
     */
    oracleScnPosition?: Schema$OracleScnPosition;
    /**
     * SqlServer LSN to start replicating from.
     */
    sqlServerLsnPosition?: Schema$SqlServerLsnPosition;
  }
  /**
   * Configuration to use Change Tables CDC read method.
   */
  export interface Schema$SqlServerChangeTables {}
  /**
   * SQLServer Column.
   */
  export interface Schema$SqlServerColumn {
    /**
     * Column name.
     */
    column?: string | null;
    /**
     * The SQLServer data type.
     */
    dataType?: string | null;
    /**
     * Column length.
     */
    length?: number | null;
    /**
     * Whether or not the column can accept a null value.
     */
    nullable?: boolean | null;
    /**
     * The ordinal position of the column in the table.
     */
    ordinalPosition?: number | null;
    /**
     * Column precision.
     */
    precision?: number | null;
    /**
     * Whether or not the column represents a primary key.
     */
    primaryKey?: boolean | null;
    /**
     * Column scale.
     */
    scale?: number | null;
  }
  /**
   * SQL Server LSN position
   */
  export interface Schema$SqlServerLsnPosition {
    /**
     * Required. Log sequence number (LSN) from where Logs will be read
     */
    lsn?: string | null;
  }
  /**
   * SQLServer data source object identifier.
   */
  export interface Schema$SqlServerObjectIdentifier {
    /**
     * Required. The schema name.
     */
    schema?: string | null;
    /**
     * Required. The table name.
     */
    table?: string | null;
  }
  /**
   * SQLServer database profile.
   */
  export interface Schema$SqlServerProfile {
    /**
     * Required. Database for the SQLServer connection.
     */
    database?: string | null;
    /**
     * Required. Hostname for the SQLServer connection.
     */
    hostname?: string | null;
    /**
     * Optional. Password for the SQLServer connection. Mutually exclusive with the `secret_manager_stored_password` field.
     */
    password?: string | null;
    /**
     * Port for the SQLServer connection, default value is 1433.
     */
    port?: number | null;
    /**
     * Optional. A reference to a Secret Manager resource name storing the SQLServer connection password. Mutually exclusive with the `password` field.
     */
    secretManagerStoredPassword?: string | null;
    /**
     * Required. Username for the SQLServer connection.
     */
    username?: string | null;
  }
  /**
   * SQLServer database structure.
   */
  export interface Schema$SqlServerRdbms {
    /**
     * SQLServer schemas in the database server.
     */
    schemas?: Schema$SqlServerSchema[];
  }
  /**
   * SQLServer schema.
   */
  export interface Schema$SqlServerSchema {
    /**
     * Schema name.
     */
    schema?: string | null;
    /**
     * Tables in the schema.
     */
    tables?: Schema$SqlServerTable[];
  }
  /**
   * SQLServer data source configuration
   */
  export interface Schema$SqlServerSourceConfig {
    /**
     * CDC reader reads from change tables.
     */
    changeTables?: Schema$SqlServerChangeTables;
    /**
     * SQLServer objects to exclude from the stream.
     */
    excludeObjects?: Schema$SqlServerRdbms;
    /**
     * SQLServer objects to include in the stream.
     */
    includeObjects?: Schema$SqlServerRdbms;
    /**
     * Max concurrent backfill tasks.
     */
    maxConcurrentBackfillTasks?: number | null;
    /**
     * Max concurrent CDC tasks.
     */
    maxConcurrentCdcTasks?: number | null;
    /**
     * CDC reader reads from transaction logs.
     */
    transactionLogs?: Schema$SqlServerTransactionLogs;
  }
  /**
   * SQLServer table.
   */
  export interface Schema$SqlServerTable {
    /**
     * SQLServer columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
     */
    columns?: Schema$SqlServerColumn[];
    /**
     * Table name.
     */
    table?: string | null;
  }
  /**
   * Configuration to use Transaction Logs CDC read method.
   */
  export interface Schema$SqlServerTransactionLogs {}
  /**
   * Srv connection format.
   */
  export interface Schema$SrvConnectionFormat {}
  /**
   * Standard connection format.
   */
  export interface Schema$StandardConnectionFormat {
    /**
     * Optional. Specifies whether the client connects directly to the host[:port] in the connection URI.
     */
    directConnection?: boolean | null;
  }
  /**
   * Request for manually initiating a backfill job for a specific stream object.
   */
  export interface Schema$StartBackfillJobRequest {}
  /**
   * Response for manually initiating a backfill job for a specific stream object.
   */
  export interface Schema$StartBackfillJobResponse {
    /**
     * The stream object resource a backfill job was started for.
     */
    object?: Schema$StreamObject;
  }
  /**
   * Static IP address connectivity. Used when the source database is configured to allow incoming connections from the Datastream public IP addresses for the region specified in the connection profile.
   */
  export interface Schema$StaticServiceIpConnectivity {}
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
   * Request for manually stopping a running backfill job for a specific stream object.
   */
  export interface Schema$StopBackfillJobRequest {}
  /**
   * Response for manually stop a backfill job for a specific stream object.
   */
  export interface Schema$StopBackfillJobResponse {
    /**
     * The stream object resource the backfill job was stopped for.
     */
    object?: Schema$StreamObject;
  }
  /**
   * A resource representing streaming data from a source to a destination.
   */
  export interface Schema$Stream {
    /**
     * Automatically backfill objects included in the stream source configuration. Specific objects can be excluded.
     */
    backfillAll?: Schema$BackfillAllStrategy;
    /**
     * Do not automatically backfill any objects.
     */
    backfillNone?: Schema$BackfillNoneStrategy;
    /**
     * Output only. The creation time of the stream.
     */
    createTime?: string | null;
    /**
     * Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be encrypted using an internal Stream-specific encryption key provisioned through KMS.
     */
    customerManagedEncryptionKey?: string | null;
    /**
     * Required. Destination connection profile configuration.
     */
    destinationConfig?: Schema$DestinationConfig;
    /**
     * Required. Display name.
     */
    displayName?: string | null;
    /**
     * Output only. Errors on the Stream.
     */
    errors?: Schema$Error[];
    /**
     * Labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. If the stream was recovered, the time of the last recovery. Note: This field is currently experimental.
     */
    lastRecoveryTime?: string | null;
    /**
     * Output only. Identifier. The stream's name.
     */
    name?: string | null;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzi?: boolean | null;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzs?: boolean | null;
    /**
     * Required. Source connection profile configuration.
     */
    sourceConfig?: Schema$SourceConfig;
    /**
     * The state of the stream.
     */
    state?: string | null;
    /**
     * Output only. The last update time of the stream.
     */
    updateTime?: string | null;
  }
  /**
   * Configuration to stream large object values.
   */
  export interface Schema$StreamLargeObjects {}
  /**
   * A specific stream object (e.g a specific DB table).
   */
  export interface Schema$StreamObject {
    /**
     * The latest backfill job that was initiated for the stream object.
     */
    backfillJob?: Schema$BackfillJob;
    /**
     * Output only. The creation time of the object.
     */
    createTime?: string | null;
    /**
     * Required. Display name.
     */
    displayName?: string | null;
    /**
     * Output only. Active errors on the object.
     */
    errors?: Schema$Error[];
    /**
     * Output only. Identifier. The object resource's name.
     */
    name?: string | null;
    /**
     * The object identifier in the data source.
     */
    sourceObject?: Schema$SourceObjectIdentifier;
    /**
     * Output only. The last update time of the object.
     */
    updateTime?: string | null;
  }
  /**
   * Username-password credentials.
   */
  export interface Schema$UserCredentials {
    /**
     * Optional. Password for the Salesforce connection. Mutually exclusive with the `secret_manager_stored_password` field.
     */
    password?: string | null;
    /**
     * Optional. A reference to a Secret Manager resource name storing the Salesforce connection's password. Mutually exclusive with the `password` field.
     */
    secretManagerStoredPassword?: string | null;
    /**
     * Optional. A reference to a Secret Manager resource name storing the Salesforce connection's security token. Mutually exclusive with the `security_token` field.
     */
    secretManagerStoredSecurityToken?: string | null;
    /**
     * Optional. Security token for the Salesforce connection. Mutually exclusive with the `secret_manager_stored_security_token` field.
     */
    securityToken?: string | null;
    /**
     * Required. Username for the Salesforce connection.
     */
    username?: string | null;
  }
  /**
   * A validation to perform on a stream.
   */
  export interface Schema$Validation {
    /**
     * A custom code identifying this validation.
     */
    code?: string | null;
    /**
     * A short description of the validation.
     */
    description?: string | null;
    /**
     * Messages reflecting the validation results.
     */
    message?: Schema$ValidationMessage[];
    /**
     * Output only. Validation execution status.
     */
    state?: string | null;
  }
  /**
   * Represent user-facing validation result message.
   */
  export interface Schema$ValidationMessage {
    /**
     * A custom code identifying this specific message.
     */
    code?: string | null;
    /**
     * Message severity level (warning or error).
     */
    level?: string | null;
    /**
     * The result of the validation.
     */
    message?: string | null;
    /**
     * Additional metadata related to the result.
     */
    metadata?: {[key: string]: string} | null;
  }
  /**
   * Contains the current validation results.
   */
  export interface Schema$ValidationResult {
    /**
     * A list of validations (includes both executed as well as not executed validations).
     */
    validations?: Schema$Validation[];
  }
  /**
   * The VPC Peering configuration is used to create VPC peering between Datastream and the consumer's VPC.
   */
  export interface Schema$VpcPeeringConfig {
    /**
     * Required. A free subnet for peering. (CIDR of /29)
     */
    subnet?: string | null;
    /**
     * Required. Fully qualified name of the VPC that Datastream will peer to. Format: `projects/{project\}/global/{networks\}/{name\}`
     */
    vpc?: string | null;
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
    connectionProfiles: Resource$Projects$Locations$Connectionprofiles;
    operations: Resource$Projects$Locations$Operations;
    privateConnections: Resource$Projects$Locations$Privateconnections;
    streams: Resource$Projects$Locations$Streams;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.connectionProfiles =
        new Resource$Projects$Locations$Connectionprofiles(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.privateConnections =
        new Resource$Projects$Locations$Privateconnections(this.context);
      this.streams = new Resource$Projects$Locations$Streams(this.context);
    }

    /**
     * The FetchStaticIps API call exposes the static IP addresses used by Datastream.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.fetchStaticIps({
     *     // Required. The resource name for the location for which static IPs should be returned. Must be in the format `projects/x/locations/x`.
     *     name: 'projects/my-project/locations/my-location',
     *     // Maximum number of Ips to return, will likely not be specified.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListStaticIps` call. will likely not be specified.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "staticIps": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    fetchStaticIps(
      params: Params$Resource$Projects$Locations$Fetchstaticips,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetchStaticIps(
      params?: Params$Resource$Projects$Locations$Fetchstaticips,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$FetchStaticIpsResponse>>;
    fetchStaticIps(
      params: Params$Resource$Projects$Locations$Fetchstaticips,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchStaticIps(
      params: Params$Resource$Projects$Locations$Fetchstaticips,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchStaticIpsResponse>,
      callback: BodyResponseCallback<Schema$FetchStaticIpsResponse>
    ): void;
    fetchStaticIps(
      params: Params$Resource$Projects$Locations$Fetchstaticips,
      callback: BodyResponseCallback<Schema$FetchStaticIpsResponse>
    ): void;
    fetchStaticIps(
      callback: BodyResponseCallback<Schema$FetchStaticIpsResponse>
    ): void;
    fetchStaticIps(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Fetchstaticips
        | BodyResponseCallback<Schema$FetchStaticIpsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchStaticIpsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchStaticIpsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$FetchStaticIpsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Fetchstaticips;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Fetchstaticips;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:fetchStaticIps').replace(
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
        createAPIRequest<Schema$FetchStaticIpsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchStaticIpsResponse>(parameters);
      }
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.get({
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

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.list({
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

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Fetchstaticips
    extends StandardParameters {
    /**
     * Required. The resource name for the location for which static IPs should be returned. Must be in the format `projects/x/locations/x`.
     */
    name?: string;
    /**
     * Maximum number of Ips to return, will likely not be specified.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListStaticIps` call. will likely not be specified.
     */
    pageToken?: string;
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

  export class Resource$Projects$Locations$Connectionprofiles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Use this method to create a connection profile in a project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.connectionProfiles.create({
     *     // Required. The connection profile identifier.
     *     connectionProfileId: 'placeholder-value',
     *     // Optional. Create the connection profile without validating it.
     *     force: 'placeholder-value',
     *     // Required. The parent that owns the collection of ConnectionProfiles.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Optional. Only validate the connection profile, but don't create any resources. The default is false.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "bigqueryProfile": {},
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "forwardSshConnectivity": {},
     *       //   "gcsProfile": {},
     *       //   "labels": {},
     *       //   "mongodbProfile": {},
     *       //   "mysqlProfile": {},
     *       //   "name": "my_name",
     *       //   "oracleProfile": {},
     *       //   "postgresqlProfile": {},
     *       //   "privateConnectivity": {},
     *       //   "salesforceProfile": {},
     *       //   "satisfiesPzi": false,
     *       //   "satisfiesPzs": false,
     *       //   "sqlServerProfile": {},
     *       //   "staticServiceIpConnectivity": {},
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
      params: Params$Resource$Projects$Locations$Connectionprofiles$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Connectionprofiles$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectionprofiles$Create
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
        {}) as Params$Resource$Projects$Locations$Connectionprofiles$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectionprofiles$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/connectionProfiles').replace(
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
     * Use this method to delete a connection profile.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.connectionProfiles.delete({
     *     // Required. The name of the connection profile resource to delete.
     *     name: 'projects/my-project/locations/my-location/connectionProfiles/my-connectionProfile',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
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
      params: Params$Resource$Projects$Locations$Connectionprofiles$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Connectionprofiles$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectionprofiles$Delete
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
        {}) as Params$Resource$Projects$Locations$Connectionprofiles$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectionprofiles$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
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
     * Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.connectionProfiles.discover({
     *     // Required. The parent resource of the connection profile type. Must be in the format `projects/x/locations/x`.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "connectionProfile": {},
     *       //   "connectionProfileName": "my_connectionProfileName",
     *       //   "fullHierarchy": false,
     *       //   "hierarchyDepth": 0,
     *       //   "mongodbCluster": {},
     *       //   "mysqlRdbms": {},
     *       //   "oracleRdbms": {},
     *       //   "postgresqlRdbms": {},
     *       //   "salesforceOrg": {},
     *       //   "sqlServerRdbms": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "mongodbCluster": {},
     *   //   "mysqlRdbms": {},
     *   //   "oracleRdbms": {},
     *   //   "postgresqlRdbms": {},
     *   //   "salesforceOrg": {},
     *   //   "sqlServerRdbms": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    discover(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Discover,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    discover(
      params?: Params$Resource$Projects$Locations$Connectionprofiles$Discover,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$DiscoverConnectionProfileResponse>
    >;
    discover(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Discover,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    discover(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Discover,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DiscoverConnectionProfileResponse>,
      callback: BodyResponseCallback<Schema$DiscoverConnectionProfileResponse>
    ): void;
    discover(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Discover,
      callback: BodyResponseCallback<Schema$DiscoverConnectionProfileResponse>
    ): void;
    discover(
      callback: BodyResponseCallback<Schema$DiscoverConnectionProfileResponse>
    ): void;
    discover(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectionprofiles$Discover
        | BodyResponseCallback<Schema$DiscoverConnectionProfileResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DiscoverConnectionProfileResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DiscoverConnectionProfileResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$DiscoverConnectionProfileResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connectionprofiles$Discover;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectionprofiles$Discover;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/connectionProfiles:discover'
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
        createAPIRequest<Schema$DiscoverConnectionProfileResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DiscoverConnectionProfileResponse>(
          parameters
        );
      }
    }

    /**
     * Use this method to get details about a connection profile.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.connectionProfiles.get({
     *     // Required. The name of the connection profile resource to get.
     *     name: 'projects/my-project/locations/my-location/connectionProfiles/my-connectionProfile',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bigqueryProfile": {},
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "forwardSshConnectivity": {},
     *   //   "gcsProfile": {},
     *   //   "labels": {},
     *   //   "mongodbProfile": {},
     *   //   "mysqlProfile": {},
     *   //   "name": "my_name",
     *   //   "oracleProfile": {},
     *   //   "postgresqlProfile": {},
     *   //   "privateConnectivity": {},
     *   //   "salesforceProfile": {},
     *   //   "satisfiesPzi": false,
     *   //   "satisfiesPzs": false,
     *   //   "sqlServerProfile": {},
     *   //   "staticServiceIpConnectivity": {},
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
      params: Params$Resource$Projects$Locations$Connectionprofiles$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Connectionprofiles$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ConnectionProfile>>;
    get(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ConnectionProfile>,
      callback: BodyResponseCallback<Schema$ConnectionProfile>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Get,
      callback: BodyResponseCallback<Schema$ConnectionProfile>
    ): void;
    get(callback: BodyResponseCallback<Schema$ConnectionProfile>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectionprofiles$Get
        | BodyResponseCallback<Schema$ConnectionProfile>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ConnectionProfile>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ConnectionProfile>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ConnectionProfile>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connectionprofiles$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectionprofiles$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
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
        createAPIRequest<Schema$ConnectionProfile>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ConnectionProfile>(parameters);
      }
    }

    /**
     * Use this method to list connection profiles created in a project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.connectionProfiles.list({
     *     // Filter request.
     *     filter: 'placeholder-value',
     *     // Order by fields for the result.
     *     orderBy: 'placeholder-value',
     *     // Maximum number of connection profiles to return. If unspecified, at most 50 connection profiles will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Page token received from a previous `ListConnectionProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectionProfiles` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent that owns the collection of connection profiles.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "connectionProfiles": [],
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
      params: Params$Resource$Projects$Locations$Connectionprofiles$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Connectionprofiles$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListConnectionProfilesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Connectionprofiles$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connectionprofiles$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConnectionProfilesResponse>,
      callback: BodyResponseCallback<Schema$ListConnectionProfilesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connectionprofiles$List,
      callback: BodyResponseCallback<Schema$ListConnectionProfilesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListConnectionProfilesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectionprofiles$List
        | BodyResponseCallback<Schema$ListConnectionProfilesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConnectionProfilesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConnectionProfilesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListConnectionProfilesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connectionprofiles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectionprofiles$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/connectionProfiles').replace(
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
        createAPIRequest<Schema$ListConnectionProfilesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConnectionProfilesResponse>(
          parameters
        );
      }
    }

    /**
     * Use this method to update the parameters of a connection profile.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.connectionProfiles.patch({
     *     // Optional. Update the connection profile without validating it.
     *     force: 'placeholder-value',
     *     // Output only. Identifier. The resource's name.
     *     name: 'projects/my-project/locations/my-location/connectionProfiles/my-connectionProfile',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Optional. Field mask is used to specify the fields to be overwritten in the ConnectionProfile resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     *     updateMask: 'placeholder-value',
     *     // Optional. Only validate the connection profile, but don't update any resources. The default is false.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "bigqueryProfile": {},
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "forwardSshConnectivity": {},
     *       //   "gcsProfile": {},
     *       //   "labels": {},
     *       //   "mongodbProfile": {},
     *       //   "mysqlProfile": {},
     *       //   "name": "my_name",
     *       //   "oracleProfile": {},
     *       //   "postgresqlProfile": {},
     *       //   "privateConnectivity": {},
     *       //   "salesforceProfile": {},
     *       //   "satisfiesPzi": false,
     *       //   "satisfiesPzs": false,
     *       //   "sqlServerProfile": {},
     *       //   "staticServiceIpConnectivity": {},
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
      params: Params$Resource$Projects$Locations$Connectionprofiles$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Connectionprofiles$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectionprofiles$Patch
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
        {}) as Params$Resource$Projects$Locations$Connectionprofiles$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectionprofiles$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Connectionprofiles$Create
    extends StandardParameters {
    /**
     * Required. The connection profile identifier.
     */
    connectionProfileId?: string;
    /**
     * Optional. Create the connection profile without validating it.
     */
    force?: boolean;
    /**
     * Required. The parent that owns the collection of ConnectionProfiles.
     */
    parent?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. Only validate the connection profile, but don't create any resources. The default is false.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ConnectionProfile;
  }
  export interface Params$Resource$Projects$Locations$Connectionprofiles$Delete
    extends StandardParameters {
    /**
     * Required. The name of the connection profile resource to delete.
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Connectionprofiles$Discover
    extends StandardParameters {
    /**
     * Required. The parent resource of the connection profile type. Must be in the format `projects/x/locations/x`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DiscoverConnectionProfileRequest;
  }
  export interface Params$Resource$Projects$Locations$Connectionprofiles$Get
    extends StandardParameters {
    /**
     * Required. The name of the connection profile resource to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connectionprofiles$List
    extends StandardParameters {
    /**
     * Filter request.
     */
    filter?: string;
    /**
     * Order by fields for the result.
     */
    orderBy?: string;
    /**
     * Maximum number of connection profiles to return. If unspecified, at most 50 connection profiles will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Page token received from a previous `ListConnectionProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectionProfiles` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent that owns the collection of connection profiles.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Connectionprofiles$Patch
    extends StandardParameters {
    /**
     * Optional. Update the connection profile without validating it.
     */
    force?: boolean;
    /**
     * Output only. Identifier. The resource's name.
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. Field mask is used to specify the fields to be overwritten in the ConnectionProfile resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;
    /**
     * Optional. Only validate the connection profile, but don't update any resources. The default is false.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ConnectionProfile;
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
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.operations.cancel({
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

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.operations.delete({
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

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.operations.get({
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

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.operations.list({
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

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
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

  export class Resource$Projects$Locations$Privateconnections {
    context: APIRequestContext;
    routes: Resource$Projects$Locations$Privateconnections$Routes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.routes = new Resource$Projects$Locations$Privateconnections$Routes(
        this.context
      );
    }

    /**
     * Use this method to create a private connectivity configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.privateConnections.create({
     *     // Optional. If set to true, will skip validations.
     *     force: 'placeholder-value',
     *     // Required. The parent that owns the collection of PrivateConnections.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. The private connectivity identifier.
     *     privateConnectionId: 'placeholder-value',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Optional. When supplied with PSC Interface config, will get/create the tenant project required for the customer to allow list and won't actually create the private connection.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "error": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "pscInterfaceConfig": {},
     *       //   "satisfiesPzi": false,
     *       //   "satisfiesPzs": false,
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime",
     *       //   "vpcPeeringConfig": {}
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
      params: Params$Resource$Projects$Locations$Privateconnections$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Privateconnections$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Privateconnections$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Privateconnections$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Privateconnections$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateconnections$Create
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
        {}) as Params$Resource$Projects$Locations$Privateconnections$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateconnections$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/privateConnections').replace(
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
     * Use this method to delete a private connectivity configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.privateConnections.delete({
     *     // Optional. If set to true, any child routes that belong to this PrivateConnection will also be deleted.
     *     force: 'placeholder-value',
     *     // Required. The name of the private connectivity configuration to delete.
     *     name: 'projects/my-project/locations/my-location/privateConnections/my-privateConnection',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
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
      params: Params$Resource$Projects$Locations$Privateconnections$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Privateconnections$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Privateconnections$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Privateconnections$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Privateconnections$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateconnections$Delete
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
        {}) as Params$Resource$Projects$Locations$Privateconnections$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateconnections$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
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
     * Use this method to get details about a private connectivity configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.privateConnections.get({
     *     // Required. The name of the private connectivity configuration to get.
     *     name: 'projects/my-project/locations/my-location/privateConnections/my-privateConnection',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "error": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "pscInterfaceConfig": {},
     *   //   "satisfiesPzi": false,
     *   //   "satisfiesPzs": false,
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime",
     *   //   "vpcPeeringConfig": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Privateconnections$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Privateconnections$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PrivateConnection>>;
    get(
      params: Params$Resource$Projects$Locations$Privateconnections$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateconnections$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PrivateConnection>,
      callback: BodyResponseCallback<Schema$PrivateConnection>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateconnections$Get,
      callback: BodyResponseCallback<Schema$PrivateConnection>
    ): void;
    get(callback: BodyResponseCallback<Schema$PrivateConnection>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateconnections$Get
        | BodyResponseCallback<Schema$PrivateConnection>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PrivateConnection>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PrivateConnection>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PrivateConnection>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateconnections$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateconnections$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
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
        createAPIRequest<Schema$PrivateConnection>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PrivateConnection>(parameters);
      }
    }

    /**
     * Use this method to list private connectivity configurations in a project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.privateConnections.list({
     *     // Filter request.
     *     filter: 'placeholder-value',
     *     // Order by fields for the result.
     *     orderBy: 'placeholder-value',
     *     // Maximum number of private connectivity configurations to return. If unspecified, at most 50 private connectivity configurations that will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Page token received from a previous `ListPrivateConnections` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnections` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent that owns the collection of private connectivity configurations.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "privateConnections": [],
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
      params: Params$Resource$Projects$Locations$Privateconnections$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Privateconnections$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListPrivateConnectionsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Privateconnections$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateconnections$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPrivateConnectionsResponse>,
      callback: BodyResponseCallback<Schema$ListPrivateConnectionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateconnections$List,
      callback: BodyResponseCallback<Schema$ListPrivateConnectionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPrivateConnectionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateconnections$List
        | BodyResponseCallback<Schema$ListPrivateConnectionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPrivateConnectionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPrivateConnectionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListPrivateConnectionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateconnections$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateconnections$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/privateConnections').replace(
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
        createAPIRequest<Schema$ListPrivateConnectionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPrivateConnectionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Privateconnections$Create
    extends StandardParameters {
    /**
     * Optional. If set to true, will skip validations.
     */
    force?: boolean;
    /**
     * Required. The parent that owns the collection of PrivateConnections.
     */
    parent?: string;
    /**
     * Required. The private connectivity identifier.
     */
    privateConnectionId?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. When supplied with PSC Interface config, will get/create the tenant project required for the customer to allow list and won't actually create the private connection.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PrivateConnection;
  }
  export interface Params$Resource$Projects$Locations$Privateconnections$Delete
    extends StandardParameters {
    /**
     * Optional. If set to true, any child routes that belong to this PrivateConnection will also be deleted.
     */
    force?: boolean;
    /**
     * Required. The name of the private connectivity configuration to delete.
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateconnections$Get
    extends StandardParameters {
    /**
     * Required. The name of the private connectivity configuration to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateconnections$List
    extends StandardParameters {
    /**
     * Filter request.
     */
    filter?: string;
    /**
     * Order by fields for the result.
     */
    orderBy?: string;
    /**
     * Maximum number of private connectivity configurations to return. If unspecified, at most 50 private connectivity configurations that will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Page token received from a previous `ListPrivateConnections` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnections` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent that owns the collection of private connectivity configurations.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Privateconnections$Routes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Use this method to create a route for a private connectivity configuration in a project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await datastream.projects.locations.privateConnections.routes.create({
     *       // Required. The parent that owns the collection of Routes.
     *       parent:
     *         'projects/my-project/locations/my-location/privateConnections/my-privateConnection',
     *       // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *       // Required. The Route identifier.
     *       routeId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "createTime": "my_createTime",
     *         //   "destinationAddress": "my_destinationAddress",
     *         //   "destinationPort": 0,
     *         //   "displayName": "my_displayName",
     *         //   "labels": {},
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
      params: Params$Resource$Projects$Locations$Privateconnections$Routes$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Privateconnections$Routes$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Privateconnections$Routes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Privateconnections$Routes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Privateconnections$Routes$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateconnections$Routes$Create
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
        {}) as Params$Resource$Projects$Locations$Privateconnections$Routes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateconnections$Routes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/routes').replace(
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
     * Use this method to delete a route.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await datastream.projects.locations.privateConnections.routes.delete({
     *       // Required. The name of the Route resource to delete.
     *       name: 'projects/my-project/locations/my-location/privateConnections/my-privateConnection/routes/my-route',
     *       // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
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
      params: Params$Resource$Projects$Locations$Privateconnections$Routes$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Privateconnections$Routes$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Privateconnections$Routes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Privateconnections$Routes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Privateconnections$Routes$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateconnections$Routes$Delete
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
        {}) as Params$Resource$Projects$Locations$Privateconnections$Routes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateconnections$Routes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
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
     * Use this method to get details about a route.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.privateConnections.routes.get(
     *     {
     *       // Required. The name of the Route resource to get.
     *       name: 'projects/my-project/locations/my-location/privateConnections/my-privateConnection/routes/my-route',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "destinationAddress": "my_destinationAddress",
     *   //   "destinationPort": 0,
     *   //   "displayName": "my_displayName",
     *   //   "labels": {},
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
      params: Params$Resource$Projects$Locations$Privateconnections$Routes$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Privateconnections$Routes$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Route>>;
    get(
      params: Params$Resource$Projects$Locations$Privateconnections$Routes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateconnections$Routes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Route>,
      callback: BodyResponseCallback<Schema$Route>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateconnections$Routes$Get,
      callback: BodyResponseCallback<Schema$Route>
    ): void;
    get(callback: BodyResponseCallback<Schema$Route>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateconnections$Routes$Get
        | BodyResponseCallback<Schema$Route>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Route>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Route>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Route>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateconnections$Routes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateconnections$Routes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
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
        createAPIRequest<Schema$Route>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Route>(parameters);
      }
    }

    /**
     * Use this method to list routes created for a private connectivity configuration in a project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await datastream.projects.locations.privateConnections.routes.list({
     *       // Filter request.
     *       filter: 'placeholder-value',
     *       // Order by fields for the result.
     *       orderBy: 'placeholder-value',
     *       // Maximum number of Routes to return. The service may return fewer than this value. If unspecified, at most 50 Routes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Page token received from a previous `ListRoutes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRoutes` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent that owns the collection of Routess.
     *       parent:
     *         'projects/my-project/locations/my-location/privateConnections/my-privateConnection',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "routes": [],
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
      params: Params$Resource$Projects$Locations$Privateconnections$Routes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Privateconnections$Routes$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListRoutesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Privateconnections$Routes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateconnections$Routes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListRoutesResponse>,
      callback: BodyResponseCallback<Schema$ListRoutesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateconnections$Routes$List,
      callback: BodyResponseCallback<Schema$ListRoutesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRoutesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateconnections$Routes$List
        | BodyResponseCallback<Schema$ListRoutesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRoutesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRoutesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListRoutesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateconnections$Routes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateconnections$Routes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/routes').replace(
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
        createAPIRequest<Schema$ListRoutesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRoutesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Privateconnections$Routes$Create
    extends StandardParameters {
    /**
     * Required. The parent that owns the collection of Routes.
     */
    parent?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. The Route identifier.
     */
    routeId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Route;
  }
  export interface Params$Resource$Projects$Locations$Privateconnections$Routes$Delete
    extends StandardParameters {
    /**
     * Required. The name of the Route resource to delete.
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateconnections$Routes$Get
    extends StandardParameters {
    /**
     * Required. The name of the Route resource to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateconnections$Routes$List
    extends StandardParameters {
    /**
     * Filter request.
     */
    filter?: string;
    /**
     * Order by fields for the result.
     */
    orderBy?: string;
    /**
     * Maximum number of Routes to return. The service may return fewer than this value. If unspecified, at most 50 Routes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Page token received from a previous `ListRoutes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRoutes` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent that owns the collection of Routess.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Streams {
    context: APIRequestContext;
    objects: Resource$Projects$Locations$Streams$Objects;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.objects = new Resource$Projects$Locations$Streams$Objects(
        this.context
      );
    }

    /**
     * Use this method to create a stream.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.streams.create({
     *     // Optional. Create the stream without validating it.
     *     force: 'placeholder-value',
     *     // Required. The parent that owns the collection of streams.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. The stream identifier.
     *     streamId: 'placeholder-value',
     *     // Optional. Only validate the stream, but don't create any resources. The default is false.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "backfillAll": {},
     *       //   "backfillNone": {},
     *       //   "createTime": "my_createTime",
     *       //   "customerManagedEncryptionKey": "my_customerManagedEncryptionKey",
     *       //   "destinationConfig": {},
     *       //   "displayName": "my_displayName",
     *       //   "errors": [],
     *       //   "labels": {},
     *       //   "lastRecoveryTime": "my_lastRecoveryTime",
     *       //   "name": "my_name",
     *       //   "satisfiesPzi": false,
     *       //   "satisfiesPzs": false,
     *       //   "sourceConfig": {},
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
      params: Params$Resource$Projects$Locations$Streams$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Streams$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Streams$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Streams$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Streams$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Streams$Create
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
        {}) as Params$Resource$Projects$Locations$Streams$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Streams$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/streams').replace(
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
     * Use this method to delete a stream.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.streams.delete({
     *     // Required. The name of the stream resource to delete.
     *     name: 'projects/my-project/locations/my-location/streams/my-stream',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
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
      params: Params$Resource$Projects$Locations$Streams$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Streams$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Streams$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Streams$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Streams$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Streams$Delete
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
        {}) as Params$Resource$Projects$Locations$Streams$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Streams$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
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
     * Use this method to get details about a stream.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.streams.get({
     *     // Required. The name of the stream resource to get.
     *     name: 'projects/my-project/locations/my-location/streams/my-stream',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backfillAll": {},
     *   //   "backfillNone": {},
     *   //   "createTime": "my_createTime",
     *   //   "customerManagedEncryptionKey": "my_customerManagedEncryptionKey",
     *   //   "destinationConfig": {},
     *   //   "displayName": "my_displayName",
     *   //   "errors": [],
     *   //   "labels": {},
     *   //   "lastRecoveryTime": "my_lastRecoveryTime",
     *   //   "name": "my_name",
     *   //   "satisfiesPzi": false,
     *   //   "satisfiesPzs": false,
     *   //   "sourceConfig": {},
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
      params: Params$Resource$Projects$Locations$Streams$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Streams$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Stream>>;
    get(
      params: Params$Resource$Projects$Locations$Streams$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Streams$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Stream>,
      callback: BodyResponseCallback<Schema$Stream>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Streams$Get,
      callback: BodyResponseCallback<Schema$Stream>
    ): void;
    get(callback: BodyResponseCallback<Schema$Stream>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Streams$Get
        | BodyResponseCallback<Schema$Stream>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Stream>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Stream>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Stream>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Streams$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Streams$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
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
        createAPIRequest<Schema$Stream>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Stream>(parameters);
      }
    }

    /**
     * Use this method to list streams in a project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.streams.list({
     *     // Filter request.
     *     filter: 'placeholder-value',
     *     // Order by fields for the result.
     *     orderBy: 'placeholder-value',
     *     // Maximum number of streams to return. If unspecified, at most 50 streams will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Page token received from a previous `ListStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreams` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent that owns the collection of streams.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "streams": [],
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
      params: Params$Resource$Projects$Locations$Streams$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Streams$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListStreamsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Streams$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Streams$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListStreamsResponse>,
      callback: BodyResponseCallback<Schema$ListStreamsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Streams$List,
      callback: BodyResponseCallback<Schema$ListStreamsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListStreamsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Streams$List
        | BodyResponseCallback<Schema$ListStreamsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListStreamsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListStreamsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListStreamsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Streams$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Streams$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/streams').replace(
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
        createAPIRequest<Schema$ListStreamsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListStreamsResponse>(parameters);
      }
    }

    /**
     * Use this method to update the configuration of a stream.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.streams.patch({
     *     // Optional. Update the stream without validating it.
     *     force: 'placeholder-value',
     *     // Output only. Identifier. The stream's name.
     *     name: 'projects/my-project/locations/my-location/streams/my-stream',
     *     // Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Optional. Field mask is used to specify the fields to be overwritten in the stream resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     *     updateMask: 'placeholder-value',
     *     // Optional. Only validate the stream with the changes, without actually updating it. The default is false.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "backfillAll": {},
     *       //   "backfillNone": {},
     *       //   "createTime": "my_createTime",
     *       //   "customerManagedEncryptionKey": "my_customerManagedEncryptionKey",
     *       //   "destinationConfig": {},
     *       //   "displayName": "my_displayName",
     *       //   "errors": [],
     *       //   "labels": {},
     *       //   "lastRecoveryTime": "my_lastRecoveryTime",
     *       //   "name": "my_name",
     *       //   "satisfiesPzi": false,
     *       //   "satisfiesPzs": false,
     *       //   "sourceConfig": {},
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
      params: Params$Resource$Projects$Locations$Streams$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Streams$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Streams$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Streams$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Streams$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Streams$Patch
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
        {}) as Params$Resource$Projects$Locations$Streams$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Streams$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
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
     * Use this method to start, resume or recover a stream with a non default CDC strategy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.streams.run({
     *     // Required. Name of the stream resource to start, in the format: projects/{project_id\}/locations/{location\}/streams/{stream_name\}
     *     name: 'projects/my-project/locations/my-location/streams/my-stream',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cdcStrategy": {},
     *       //   "force": false
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
    run(
      params: Params$Resource$Projects$Locations$Streams$Run,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    run(
      params?: Params$Resource$Projects$Locations$Streams$Run,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    run(
      params: Params$Resource$Projects$Locations$Streams$Run,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    run(
      params: Params$Resource$Projects$Locations$Streams$Run,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(
      params: Params$Resource$Projects$Locations$Streams$Run,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(callback: BodyResponseCallback<Schema$Operation>): void;
    run(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Streams$Run
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
        {}) as Params$Resource$Projects$Locations$Streams$Run;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Streams$Run;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:run').replace(/([^:]\/)\/+/g, '$1'),
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

  export interface Params$Resource$Projects$Locations$Streams$Create
    extends StandardParameters {
    /**
     * Optional. Create the stream without validating it.
     */
    force?: boolean;
    /**
     * Required. The parent that owns the collection of streams.
     */
    parent?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. The stream identifier.
     */
    streamId?: string;
    /**
     * Optional. Only validate the stream, but don't create any resources. The default is false.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Stream;
  }
  export interface Params$Resource$Projects$Locations$Streams$Delete
    extends StandardParameters {
    /**
     * Required. The name of the stream resource to delete.
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Streams$Get
    extends StandardParameters {
    /**
     * Required. The name of the stream resource to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Streams$List
    extends StandardParameters {
    /**
     * Filter request.
     */
    filter?: string;
    /**
     * Order by fields for the result.
     */
    orderBy?: string;
    /**
     * Maximum number of streams to return. If unspecified, at most 50 streams will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Page token received from a previous `ListStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreams` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent that owns the collection of streams.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Streams$Patch
    extends StandardParameters {
    /**
     * Optional. Update the stream without validating it.
     */
    force?: boolean;
    /**
     * Output only. Identifier. The stream's name.
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. Field mask is used to specify the fields to be overwritten in the stream resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;
    /**
     * Optional. Only validate the stream with the changes, without actually updating it. The default is false.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Stream;
  }
  export interface Params$Resource$Projects$Locations$Streams$Run
    extends StandardParameters {
    /**
     * Required. Name of the stream resource to start, in the format: projects/{project_id\}/locations/{location\}/streams/{stream_name\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunStreamRequest;
  }

  export class Resource$Projects$Locations$Streams$Objects {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Use this method to get details about a stream object.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.streams.objects.get({
     *     // Required. The name of the stream object resource to get.
     *     name: 'projects/my-project/locations/my-location/streams/my-stream/objects/my-object',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backfillJob": {},
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "errors": [],
     *   //   "name": "my_name",
     *   //   "sourceObject": {},
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
      params: Params$Resource$Projects$Locations$Streams$Objects$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Streams$Objects$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$StreamObject>>;
    get(
      params: Params$Resource$Projects$Locations$Streams$Objects$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Streams$Objects$Get,
      options: MethodOptions | BodyResponseCallback<Schema$StreamObject>,
      callback: BodyResponseCallback<Schema$StreamObject>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Streams$Objects$Get,
      callback: BodyResponseCallback<Schema$StreamObject>
    ): void;
    get(callback: BodyResponseCallback<Schema$StreamObject>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Streams$Objects$Get
        | BodyResponseCallback<Schema$StreamObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$StreamObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$StreamObject>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$StreamObject>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Streams$Objects$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Streams$Objects$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
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
        createAPIRequest<Schema$StreamObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$StreamObject>(parameters);
      }
    }

    /**
     * Use this method to list the objects of a specific stream.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.streams.objects.list({
     *     // Maximum number of objects to return. Default is 50. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Page token received from a previous `ListStreamObjectsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreamObjectsRequest` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent stream that owns the collection of objects.
     *     parent: 'projects/my-project/locations/my-location/streams/my-stream',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "streamObjects": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Streams$Objects$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Streams$Objects$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListStreamObjectsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Streams$Objects$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Streams$Objects$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListStreamObjectsResponse>,
      callback: BodyResponseCallback<Schema$ListStreamObjectsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Streams$Objects$List,
      callback: BodyResponseCallback<Schema$ListStreamObjectsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListStreamObjectsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Streams$Objects$List
        | BodyResponseCallback<Schema$ListStreamObjectsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListStreamObjectsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListStreamObjectsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListStreamObjectsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Streams$Objects$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Streams$Objects$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/objects').replace(
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
        createAPIRequest<Schema$ListStreamObjectsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListStreamObjectsResponse>(parameters);
      }
    }

    /**
     * Use this method to look up a stream object by its source object identifier.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datastream.projects.locations.streams.objects.lookup({
     *     // Required. The parent stream that owns the collection of objects.
     *     parent: 'projects/my-project/locations/my-location/streams/my-stream',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "sourceObjectIdentifier": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backfillJob": {},
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "errors": [],
     *   //   "name": "my_name",
     *   //   "sourceObject": {},
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
    lookup(
      params: Params$Resource$Projects$Locations$Streams$Objects$Lookup,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    lookup(
      params?: Params$Resource$Projects$Locations$Streams$Objects$Lookup,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$StreamObject>>;
    lookup(
      params: Params$Resource$Projects$Locations$Streams$Objects$Lookup,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lookup(
      params: Params$Resource$Projects$Locations$Streams$Objects$Lookup,
      options: MethodOptions | BodyResponseCallback<Schema$StreamObject>,
      callback: BodyResponseCallback<Schema$StreamObject>
    ): void;
    lookup(
      params: Params$Resource$Projects$Locations$Streams$Objects$Lookup,
      callback: BodyResponseCallback<Schema$StreamObject>
    ): void;
    lookup(callback: BodyResponseCallback<Schema$StreamObject>): void;
    lookup(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Streams$Objects$Lookup
        | BodyResponseCallback<Schema$StreamObject>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$StreamObject>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$StreamObject>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$StreamObject>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Streams$Objects$Lookup;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Streams$Objects$Lookup;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/objects:lookup').replace(
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
        createAPIRequest<Schema$StreamObject>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$StreamObject>(parameters);
      }
    }

    /**
     * Use this method to start a backfill job for the specified stream object.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await datastream.projects.locations.streams.objects.startBackfillJob({
     *       // Required. The name of the stream object resource to start a backfill job for.
     *       object:
     *         'projects/my-project/locations/my-location/streams/my-stream/objects/my-object',
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
     *   //   "object": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    startBackfillJob(
      params: Params$Resource$Projects$Locations$Streams$Objects$Startbackfilljob,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    startBackfillJob(
      params?: Params$Resource$Projects$Locations$Streams$Objects$Startbackfilljob,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$StartBackfillJobResponse>>;
    startBackfillJob(
      params: Params$Resource$Projects$Locations$Streams$Objects$Startbackfilljob,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    startBackfillJob(
      params: Params$Resource$Projects$Locations$Streams$Objects$Startbackfilljob,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$StartBackfillJobResponse>,
      callback: BodyResponseCallback<Schema$StartBackfillJobResponse>
    ): void;
    startBackfillJob(
      params: Params$Resource$Projects$Locations$Streams$Objects$Startbackfilljob,
      callback: BodyResponseCallback<Schema$StartBackfillJobResponse>
    ): void;
    startBackfillJob(
      callback: BodyResponseCallback<Schema$StartBackfillJobResponse>
    ): void;
    startBackfillJob(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Streams$Objects$Startbackfilljob
        | BodyResponseCallback<Schema$StartBackfillJobResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$StartBackfillJobResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$StartBackfillJobResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$StartBackfillJobResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Streams$Objects$Startbackfilljob;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Streams$Objects$Startbackfilljob;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+object}:startBackfillJob').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['object'],
        pathParams: ['object'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$StartBackfillJobResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$StartBackfillJobResponse>(parameters);
      }
    }

    /**
     * Use this method to stop a backfill job for the specified stream object.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datastream.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const datastream = google.datastream('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await datastream.projects.locations.streams.objects.stopBackfillJob({
     *       // Required. The name of the stream object resource to stop the backfill job for.
     *       object:
     *         'projects/my-project/locations/my-location/streams/my-stream/objects/my-object',
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
     *   //   "object": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    stopBackfillJob(
      params: Params$Resource$Projects$Locations$Streams$Objects$Stopbackfilljob,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    stopBackfillJob(
      params?: Params$Resource$Projects$Locations$Streams$Objects$Stopbackfilljob,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$StopBackfillJobResponse>>;
    stopBackfillJob(
      params: Params$Resource$Projects$Locations$Streams$Objects$Stopbackfilljob,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    stopBackfillJob(
      params: Params$Resource$Projects$Locations$Streams$Objects$Stopbackfilljob,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$StopBackfillJobResponse>,
      callback: BodyResponseCallback<Schema$StopBackfillJobResponse>
    ): void;
    stopBackfillJob(
      params: Params$Resource$Projects$Locations$Streams$Objects$Stopbackfilljob,
      callback: BodyResponseCallback<Schema$StopBackfillJobResponse>
    ): void;
    stopBackfillJob(
      callback: BodyResponseCallback<Schema$StopBackfillJobResponse>
    ): void;
    stopBackfillJob(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Streams$Objects$Stopbackfilljob
        | BodyResponseCallback<Schema$StopBackfillJobResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$StopBackfillJobResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$StopBackfillJobResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$StopBackfillJobResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Streams$Objects$Stopbackfilljob;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Streams$Objects$Stopbackfilljob;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datastream.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+object}:stopBackfillJob').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['object'],
        pathParams: ['object'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$StopBackfillJobResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$StopBackfillJobResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Streams$Objects$Get
    extends StandardParameters {
    /**
     * Required. The name of the stream object resource to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Streams$Objects$List
    extends StandardParameters {
    /**
     * Maximum number of objects to return. Default is 50. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Page token received from a previous `ListStreamObjectsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreamObjectsRequest` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent stream that owns the collection of objects.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Streams$Objects$Lookup
    extends StandardParameters {
    /**
     * Required. The parent stream that owns the collection of objects.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LookupStreamObjectRequest;
  }
  export interface Params$Resource$Projects$Locations$Streams$Objects$Startbackfilljob
    extends StandardParameters {
    /**
     * Required. The name of the stream object resource to start a backfill job for.
     */
    object?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StartBackfillJobRequest;
  }
  export interface Params$Resource$Projects$Locations$Streams$Objects$Stopbackfilljob
    extends StandardParameters {
    /**
     * Required. The name of the stream object resource to stop the backfill job for.
     */
    object?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StopBackfillJobRequest;
  }
}
