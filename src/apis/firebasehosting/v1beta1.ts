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

export namespace firebasehosting_v1beta1 {
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
   * Firebase Hosting API
   *
   * The Firebase Hosting REST API enables programmatic and customizable management and deployments to your Firebase-hosted sites. Use this REST API to create and manage channels and sites as well as to deploy new or updated hosting configurations and content files.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const firebasehosting = google.firebasehosting('v1beta1');
   * ```
   */
  export class Firebasehosting {
    context: APIRequestContext;
    projects: Resource$Projects;
    sites: Resource$Sites;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
      this.sites = new Resource$Sites(this.context);
    }
  }

  /**
   * Contains metadata about the user who performed an action, such as creating a release or finalizing a version.
   */
  export interface Schema$ActingUser {
    /**
     * The email address of the user when the user performed the action.
     */
    email?: string | null;
    /**
     * A profile image URL for the user. May not be present if the user has changed their email address or deleted their account.
     */
    imageUrl?: string | null;
  }
  /**
   * Represents a DNS certificate challenge.
   */
  export interface Schema$CertDnsChallenge {
    /**
     * The domain name upon which the DNS challenge must be satisfied.
     */
    domainName?: string | null;
    /**
     * The value that must be present as a TXT record on the domain name to satisfy the challenge.
     */
    token?: string | null;
  }
  /**
   * Represents an HTTP certificate challenge.
   */
  export interface Schema$CertHttpChallenge {
    /**
     * The URL path on which to serve the specified token to satisfy the certificate challenge.
     */
    path?: string | null;
    /**
     * The token to serve at the specified URL path to satisfy the certificate challenge.
     */
    token?: string | null;
  }
  /**
   * An SSL certificate used to provide end-to-end encryption for requests against your domain name. A `Certificate` can be an actual SSL certificate or, for newly-created custom domains, Hosting's intent to create one.
   */
  export interface Schema$Certificate {
    /**
     * Output only. The certificate's creation time. For `TEMPORARY` certs this is the time Hosting first generated challenges for your domain name. For all other cert types, it's the time the actual cert was created.
     */
    createTime?: string | null;
    /**
     * Output only. The certificate's expiration time. After this time, the cert can no longer be used to provide secure communication between Hosting and your site's visitors.
     */
    expireTime?: string | null;
    /**
     * Output only. A set of errors Hosting encountered when attempting to create a cert for your domain name. Resolve these issues to ensure Hosting is able to provide secure communication with your site's visitors.
     */
    issues?: Schema$Status[];
    /**
     * Output only. The state of the certificate. Only the `CERT_ACTIVE` and `CERT_EXPIRING_SOON` states provide SSL coverage for a domain name. If the state is `PROPAGATING` and Hosting had an active cert for the domain name before, that formerly-active cert provides SSL coverage for the domain name until the current cert propagates.
     */
    state?: string | null;
    /**
     * Output only. The certificate's type.
     */
    type?: string | null;
    /**
     * Output only. A set of ACME challenges you can add to your DNS records or existing, non-Hosting hosting provider to allow Hosting to create an SSL certificate for your domain name before you point traffic toward hosting. You can use thse challenges as part of a zero downtime transition from your old provider to Hosting.
     */
    verification?: Schema$CertVerification;
  }
  /**
   * A set of ACME challenges you can use to allow Hosting to create an SSL certificate for your domain name before directing traffic to Hosting servers. Use either the DNS or HTTP challenge; it's not necessary to provide both.
   */
  export interface Schema$CertVerification {
    /**
     * Output only. A `TXT` record to add to your DNS records that confirms your intent to let Hosting create an SSL cert for your domain name.
     */
    dns?: Schema$DnsUpdates;
    /**
     * Output only. A file to add to your existing, non-Hosting hosting service that confirms your intent to let Hosting create an SSL cert for your domain name.
     */
    http?: Schema$HttpUpdate;
  }
  /**
   * A `Channel` represents a stream of releases for a site. All sites have a default `live` channel that serves content to the Firebase-provided subdomains and any connected custom domains.
   */
  export interface Schema$Channel {
    /**
     * Output only. The time at which the channel was created.
     */
    createTime?: string | null;
    /**
     * The time at which the channel will be automatically deleted. If null, the channel will not be automatically deleted. This field is present in the output whether it's set directly or via the `ttl` field.
     */
    expireTime?: string | null;
    /**
     * Text labels used for extra metadata and/or filtering.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The fully-qualified resource name for the channel, in the format: sites/ SITE_ID/channels/CHANNEL_ID
     */
    name?: string | null;
    /**
     * Output only. The current release for the channel, if any.
     */
    release?: Schema$Release;
    /**
     * The number of previous releases to retain on the channel for rollback or other purposes. Must be a number between 1-100. Defaults to 10 for new channels.
     */
    retainedReleaseCount?: number | null;
    /**
     * Input only. A time-to-live for this channel. Sets `expire_time` to the provided duration past the time of the request.
     */
    ttl?: string | null;
    /**
     * Output only. The time at which the channel was last updated.
     */
    updateTime?: string | null;
    /**
     * Output only. The URL at which the content of this channel's current release can be viewed. This URL is a Firebase-provided subdomain of `web.app`. The content of this channel's current release can also be viewed at the Firebase-provided subdomain of `firebaseapp.com`. If this channel is the `live` channel for the Hosting site, then the content of this channel's current release can also be viewed at any connected custom domains.
     */
    url?: string | null;
  }
  export interface Schema$CloneVersionRequest {
    /**
     * If provided, only paths that do not match any of the RegEx values in this list will be included in the new version.
     */
    exclude?: Schema$PathFilter;
    /**
     * If true, the call to `CloneVersion` immediately finalizes the version after cloning is complete. If false, the cloned version will have a status of `CREATED`. Use [`UpdateVersion`](patch) to set the status of the version to `FINALIZED`.
     */
    finalize?: boolean | null;
    /**
     * If provided, only paths that match one or more RegEx values in this list will be included in the new version.
     */
    include?: Schema$PathFilter;
    /**
     * Required. The unique identifier for the version to be cloned, in the format: sites/SITE_ID/versions/VERSION_ID
     */
    sourceVersion?: string | null;
  }
  /**
   * A configured rewrite that directs requests to a Cloud Run service. If the Cloud Run service does not exist when setting or updating your Firebase Hosting configuration, then the request fails. Any errors from the Cloud Run service are passed to the end user (for example, if you delete a service, any requests directed to that service receive a `404` error).
   */
  export interface Schema$CloudRunRewrite {
    /**
     * Optional. User-provided region where the Cloud Run service is hosted. Defaults to `us-central1` if not supplied.
     */
    region?: string | null;
    /**
     * Required. User-defined ID of the Cloud Run service.
     */
    serviceId?: string | null;
    /**
     * Optional. User-provided TrafficConfig tag to send traffic to. When omitted, traffic is sent to the service-wide URI
     */
    tag?: string | null;
  }
  /**
   * A `CustomDomain` is an entity that links a domain name to a Firebase Hosting site. Add a `CustomDomain` to your site to allow Hosting to serve the site's content in response to requests against your domain name.
   */
  export interface Schema$CustomDomain {
    /**
     * Annotations you can add to leave both human- and machine-readable metadata about your `CustomDomain`.
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. The SSL certificate Hosting has for this custom domain's domain name. For new custom domains, this often represents Hosting's intent to create a certificate, rather than an actual cert. Check the `state` field for more.
     */
    cert?: Schema$Certificate;
    /**
     * A field that lets you specify which SSL certificate type Hosting creates for your domain name. Spark plan custom domains only have access to the `GROUPED` cert type, while Blaze plan domains can select any option.
     */
    certPreference?: string | null;
    /**
     * Output only. The custom domain's create time.
     */
    createTime?: string | null;
    /**
     * Output only. The time the `CustomDomain` was deleted; null for custom domains that haven't been deleted. Deleted custom domains persist for approximately 30 days, after which time Hosting removes them completely. To restore a deleted custom domain, make an `UndeleteCustomDomain` request.
     */
    deleteTime?: string | null;
    /**
     * Output only. A string that represents the current state of the `CustomDomain` and allows you to confirm its initial state in requests that would modify it. Use the tag to ensure consistency when making `UpdateCustomDomain`, `DeleteCustomDomain`, and `UndeleteCustomDomain` requests.
     */
    etag?: string | null;
    /**
     * Output only. The minimum time before a soft-deleted `CustomDomain` is completely removed from Hosting; null for custom domains that haven't been deleted.
     */
    expireTime?: string | null;
    /**
     * Output only. The `HostState` of the domain name this `CustomDomain` refers to.
     */
    hostState?: string | null;
    /**
     * Output only. A set of errors Hosting systems encountered when trying to establish Hosting's ability to serve secure content for your domain name. Resolve these issues to ensure your `CustomDomain` behaves properly.
     */
    issues?: Schema$Status[];
    /**
     * Labels used for extra metadata and/or filtering.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The fully-qualified name of the `CustomDomain`.
     */
    name?: string | null;
    /**
     * Output only. The `OwnershipState` of the domain name this `CustomDomain` refers to.
     */
    ownershipState?: string | null;
    /**
     * Output only. A field that, if true, indicates that Hosting's systems are attmepting to make the custom domain's state match your preferred state. This is most frequently `true` when initially provisioning a `CustomDomain` after a `CreateCustomDomain` request or when creating a new SSL certificate to match an updated `cert_preference` after an `UpdateCustomDomain` request.
     */
    reconciling?: boolean | null;
    /**
     * A domain name that this `CustomDomain` should direct traffic towards. If specified, Hosting will respond to requests against this custom domain with an HTTP 301 code, and route traffic to the specified `redirect_target` instead.
     */
    redirectTarget?: string | null;
    /**
     * Output only. A set of updates you should make to the domain name's DNS records to let Hosting serve secure content on its behalf.
     */
    requiredDnsUpdates?: Schema$DnsUpdates;
    /**
     * Output only. The last time the `CustomDomain` was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Metadata associated with a`CustomDomain` operation.
   */
  export interface Schema$CustomDomainMetadata {
    /**
     * The `CertState` of the domain name's SSL certificate.
     */
    certState?: string | null;
    /**
     * The `HostState` of the domain name this `CustomDomain` refers to.
     */
    hostState?: string | null;
    /**
     * A list of issues that are currently preventing Hosting from completing the operation. These are generally DNS-related issues that Hosting encounters when querying a domain name's records or attempting to mint an SSL certificate.
     */
    issues?: Schema$Status[];
    /**
     * A set of DNS record updates and ACME challenges that allow you to transition domain names to Firebase Hosting with zero downtime. These updates allow Hosting to create an SSL certificate and establish ownership for your custom domain before Hosting begins serving traffic on it. If your domain name is already in active use with another provider, add one of the challenges and make the recommended DNS updates. After adding challenges and adjusting DNS records as necessary, wait for the `ownershipState` to be `OWNERSHIP_ACTIVE` and the `certState` to be `CERT_ACTIVE` before sending traffic to Hosting.
     */
    liveMigrationSteps?: Schema$LiveMigrationStep[];
    /**
     * The `OwnershipState` of the domain name this `CustomDomain` refers to.
     */
    ownershipState?: string | null;
    /**
     * A set of DNS record updates that allow Hosting to serve secure content on your domain name. The record type determines the update's purpose: - `A` and `AAAA`: Updates your domain name's IP addresses so that they direct traffic to Hosting servers. - `TXT`: Updates ownership permissions on your domain name, letting Hosting know that your custom domain's project has permission to perform actions for that domain name. - `CAA`: Updates your domain name's list of authorized Certificate Authorities (CAs). Only present if you have existing `CAA` records that prohibit Hosting's CA from minting certs for your domain name. These updates include all DNS changes you'll need to get started with Hosting, but, if made all at once, can result in a brief period of downtime for your domain name--while Hosting creates and uploads an SSL cert, for example. If you'd like to add your domain name to Hosting without downtime, complete the `liveMigrationSteps` first, before making the remaining updates in this field.
     */
    quickSetupUpdates?: Schema$DnsUpdates;
  }
  /**
   * DNS records are resource records that define how systems and services should behave when handling requests for a domain name. For example, when you add `A` records to your domain name's DNS records, you're informing other systems (such as your users' web browsers) to contact those IPv4 addresses to retrieve resources relevant to your domain name (such as your Hosting site files).
   */
  export interface Schema$DnsRecord {
    /**
     * Output only. The domain name the record pertains to, e.g. `foo.bar.com.`.
     */
    domainName?: string | null;
    /**
     * Output only. The data of the record. The meaning of the value depends on record type: - A and AAAA: IP addresses for the domain name. - CNAME: Another domain to check for records. - TXT: Arbitrary text strings associated with the domain name. Hosting uses TXT records to determine which Firebase projects have permission to act on the domain name's behalf. - CAA: The record's flags, tag, and value, e.g. `0 issue "pki.goog"`.
     */
    rdata?: string | null;
    /**
     * Output only. An enum that indicates the a required action for this record.
     */
    requiredAction?: string | null;
    /**
     * Output only. The record's type, which determines what data the record contains.
     */
    type?: string | null;
  }
  /**
   * A set of DNS records relevant to the setup and maintenance of a custom domain in Firebase Hosting.
   */
  export interface Schema$DnsRecordSet {
    /**
     * Output only. An error Hosting services encountered when querying your domain name's DNS records. Note: Hosting ignores `NXDOMAIN` errors, as those generally just mean that a domain name hasn't been set up yet.
     */
    checkError?: Schema$Status;
    /**
     * Output only. The domain name the record set pertains to.
     */
    domainName?: string | null;
    /**
     * Output only. Records on the domain.
     */
    records?: Schema$DnsRecord[];
  }
  /**
   * A set of DNS record updates that you should make to allow Hosting to serve secure content in response to requests against your domain name. These updates present the current state of your domain name's DNS records when Hosting last queried them, and the desired set of records that Hosting needs to see before your custom domain can be fully active.
   */
  export interface Schema$DnsUpdates {
    /**
     * The last time Hosting checked your custom domain's DNS records.
     */
    checkTime?: string | null;
    /**
     * The set of DNS records Hosting needs to serve secure content on the domain.
     */
    desired?: Schema$DnsRecordSet[];
    /**
     * The set of DNS records Hosting discovered when inspecting a domain.
     */
    discovered?: Schema$DnsRecordSet[];
  }
  /**
   * The intended behavior and status information of a domain.
   */
  export interface Schema$Domain {
    /**
     * Required. The domain name of the association.
     */
    domainName?: string | null;
    /**
     * If set, the domain should redirect with the provided parameters.
     */
    domainRedirect?: Schema$DomainRedirect;
    /**
     * Output only. Information about the provisioning of certificates and the health of the DNS resolution for the domain.
     */
    provisioning?: Schema$DomainProvisioning;
    /**
     * Required. The site name of the association.
     */
    site?: string | null;
    /**
     * Output only. Additional status of the domain association.
     */
    status?: string | null;
    /**
     * Output only. The time at which the domain was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * The current certificate provisioning status information for a domain.
   */
  export interface Schema$DomainProvisioning {
    /**
     * The TXT records (for the certificate challenge) that were found at the last DNS fetch.
     */
    certChallengeDiscoveredTxt?: string[] | null;
    /**
     * The DNS challenge for generating a certificate.
     */
    certChallengeDns?: Schema$CertDnsChallenge;
    /**
     * The HTTP challenge for generating a certificate.
     */
    certChallengeHttp?: Schema$CertHttpChallenge;
    /**
     * The certificate provisioning status; updated when Firebase Hosting provisions an SSL certificate for the domain.
     */
    certStatus?: string | null;
    /**
     * The IPs found at the last DNS fetch.
     */
    discoveredIps?: string[] | null;
    /**
     * The time at which the last DNS fetch occurred.
     */
    dnsFetchTime?: string | null;
    /**
     * The DNS record match status as of the last DNS fetch.
     */
    dnsStatus?: string | null;
    /**
     * The list of IPs to which the domain is expected to resolve.
     */
    expectedIps?: string[] | null;
  }
  /**
   * Defines the behavior of a domain-level redirect. Domain redirects preserve the path of the redirect but replace the requested domain with the one specified in the redirect configuration.
   */
  export interface Schema$DomainRedirect {
    /**
     * Required. The domain name to redirect to.
     */
    domainName?: string | null;
    /**
     * Required. The redirect status code.
     */
    type?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * A [`Header`](https://firebase.google.com/docs/hosting/full-config#headers) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to apply the specified custom response headers.
   */
  export interface Schema$Header {
    /**
     * The user-supplied [glob](https://firebase.google.com/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path.
     */
    glob?: string | null;
    /**
     * Required. The additional headers to add to the response.
     */
    headers?: {[key: string]: string} | null;
    /**
     * The user-supplied RE2 regular expression to match against the request URL path.
     */
    regex?: string | null;
  }
  /**
   * A file you can add to your existing, non-Hosting hosting service that confirms your intent to allow Hosting's Certificate Authorities to create an SSL certificate for your domain.
   */
  export interface Schema$HttpUpdate {
    /**
     * Output only. An error encountered during the last contents check. If null, the check completed successfully.
     */
    checkError?: Schema$Status;
    /**
     * Output only. A text string to serve at the path.
     */
    desired?: string | null;
    /**
     * Output only. Whether Hosting was able to find the required file contents on the specified path during its last check.
     */
    discovered?: string | null;
    /**
     * Output only. The last time Hosting systems checked for the file contents.
     */
    lastCheckTime?: string | null;
    /**
     * Output only. The path to the file.
     */
    path?: string | null;
  }
  /**
   * If provided, i18n rewrites are enabled.
   */
  export interface Schema$I18nConfig {
    /**
     * Required. The user-supplied path where country and language specific content will be looked for within the public directory.
     */
    root?: string | null;
  }
  export interface Schema$ListChannelsResponse {
    /**
     * The list of channels.
     */
    channels?: Schema$Channel[];
    /**
     * The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListChannels`. Page tokens are short-lived and should not be stored.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response from `ListCustomDomains`.
   */
  export interface Schema$ListCustomDomainsResponse {
    /**
     * A list of `CustomDomain` entities associated with the specified Firebase `Site`.
     */
    customDomains?: Schema$CustomDomain[];
    /**
     * The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListCustomDomains`. Page tokens are short-lived and should not be stored.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response to listing Domains.
   */
  export interface Schema$ListDomainsResponse {
    /**
     * The list of domains, if any exist.
     */
    domains?: Schema$Domain[];
    /**
     * The pagination token, if more results exist.
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
  export interface Schema$ListReleasesResponse {
    /**
     * The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListReleases`. Page tokens are short-lived and should not be stored.
     */
    nextPageToken?: string | null;
    /**
     * The list of hashes of files that still need to be uploaded, if any exist.
     */
    releases?: Schema$Release[];
  }
  export interface Schema$ListSitesResponse {
    /**
     * The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListSites`. Page tokens are short-lived and should not be stored.
     */
    nextPageToken?: string | null;
    /**
     * A list of Site objects associated with the specified Firebase project.
     */
    sites?: Schema$Site[];
  }
  export interface Schema$ListVersionFilesResponse {
    /**
     *  The list of paths to the hashes of the files in the specified version.
     */
    files?: Schema$VersionFile[];
    /**
     * The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListVersionFiles`. Page tokens are short-lived and should not be stored.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListVersionsResponse {
    /**
     * The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListVersions`. Page tokens are short-lived and should not be stored.
     */
    nextPageToken?: string | null;
    /**
     * The list of versions, if any exist.
     */
    versions?: Schema$Version[];
  }
  /**
   * A set of updates including ACME challenges and DNS records that allow Hosting to create an SSL certificate and establish project ownership for your domain name before you direct traffic to Hosting servers. Use these updates to facilitate zero downtime migrations to Hosting from other services. After you've made the recommended updates, check your custom domain's `ownershipState` and `certState`. To avoid downtime, they should be `OWNERSHIP_ACTIVE` and `CERT_ACTIVE`, respectively, before you update your `A` and `AAAA` records.
   */
  export interface Schema$LiveMigrationStep {
    /**
     * Output only. A pair of ACME challenges that Hosting's Certificate Authority (CA) can use to create an SSL cert for your domain name. Use either the DNS or HTTP challenge; it's not necessary to provide both.
     */
    certVerification?: Schema$CertVerification;
    /**
     * Output only. DNS updates to facilitate your domain's zero-downtime migration to Hosting.
     */
    dnsUpdates?: Schema$DnsUpdates;
    /**
     * Output only. Issues that prevent the current step from completing.
     */
    issues?: Schema$Status[];
    /**
     * Output only. The state of the live migration step, indicates whether you should work to complete the step now, in the future, or have already completed it.
     */
    state?: string | null;
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
   * A representation of filter path.
   */
  export interface Schema$PathFilter {
    /**
     * An array of RegEx values by which to filter.
     */
    regexes?: string[] | null;
  }
  export interface Schema$PopulateVersionFilesRequest {
    /**
     * A set of file paths to the hashes corresponding to assets that should be added to the version. A file path to an empty hash will remove the path from the version. Calculate a hash by Gzipping the file then taking the SHA256 hash of the newly compressed file.
     */
    files?: {[key: string]: string} | null;
  }
  export interface Schema$PopulateVersionFilesResponse {
    /**
     * The content hashes of the specified files that need to be uploaded to the specified URL.
     */
    uploadRequiredHashes?: string[] | null;
    /**
     * The URL to which the files should be uploaded, in the format: "https://upload-firebasehosting.googleapis.com/upload/sites/SITE_ID /versions/VERSION_ID/files" Perform a multipart `POST` of the Gzipped file contents to the URL using a forward slash and the hash of the file appended to the end.
     */
    uploadUrl?: string | null;
  }
  /**
   * A [`Redirect`](https://firebase.google.com/docs/hosting/full-config#redirects) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond with a redirect to the specified destination path.
   */
  export interface Schema$Redirect {
    /**
     * The user-supplied [glob](https://firebase.google.com/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path.
     */
    glob?: string | null;
    /**
     * Required. The value to put in the HTTP location header of the response. The location can contain capture group values from the pattern using a `:` prefix to identify the segment and an optional `*` to capture the rest of the URL. For example: "glob": "/:capture*", "statusCode": 301, "location": "https://example.com/foo/:capture"
     */
    location?: string | null;
    /**
     * The user-supplied RE2 regular expression to match against the request URL path.
     */
    regex?: string | null;
    /**
     * Required. The status HTTP code to return in the response. It must be a valid 3xx status code.
     */
    statusCode?: number | null;
  }
  /**
   *  A `Release` is a particular [collection of configurations and files](sites.versions) that is set to be public at a particular time.
   */
  export interface Schema$Release {
    /**
     * The deploy description when the release was created. The value can be up to 512 characters.
     */
    message?: string | null;
    /**
     * Output only. The unique identifier for the release, in either of the following formats: - sites/SITE_ID/releases/RELEASE_ID - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID This name is provided in the response body when you call [`releases.create`](sites.releases/create) or [`channels.releases.create`](sites.channels.releases/create).
     */
    name?: string | null;
    /**
     * Output only. The time at which the version is set to be public.
     */
    releaseTime?: string | null;
    /**
     * Output only. Identifies the user who created the release.
     */
    releaseUser?: Schema$ActingUser;
    /**
     * Explains the reason for the release. Specify a value for this field only when creating a `SITE_DISABLE` type release.
     */
    type?: string | null;
    /**
     * Output only. The configuration and content that was released.
     */
    version?: Schema$Version;
  }
  /**
   * A [`Rewrite`](https://firebase.google.com/docs/hosting/full-config#rewrites) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond as if the service were given the specified destination URL.
   */
  export interface Schema$Rewrite {
    /**
     * The request will be forwarded to Firebase Dynamic Links.
     */
    dynamicLinks?: boolean | null;
    /**
     * The function to proxy requests to. Must match the exported function name exactly.
     */
    function?: string | null;
    /**
     * Optional. Specify a Cloud region for rewritten Functions invocations. If not provided, defaults to us-central1.
     */
    functionRegion?: string | null;
    /**
     * The user-supplied [glob](https://firebase.google.com/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path.
     */
    glob?: string | null;
    /**
     * The URL path to rewrite the request to.
     */
    path?: string | null;
    /**
     * The user-supplied RE2 regular expression to match against the request URL path.
     */
    regex?: string | null;
    /**
     * The request will be forwarded to Cloud Run.
     */
    run?: Schema$CloudRunRewrite;
  }
  /**
   * The configuration for how incoming requests to a site should be routed and processed before serving content. The URL request paths are matched against the specified URL patterns in the configuration, then Hosting applies the applicable configuration according to a specific [priority order](https://firebase.google.com/docs/hosting/full-config#hosting_priority_order).
   */
  export interface Schema$ServingConfig {
    /**
     * How to handle well known App Association files.
     */
    appAssociation?: string | null;
    /**
     * Defines whether to drop the file extension from uploaded files.
     */
    cleanUrls?: boolean | null;
    /**
     * An array of objects, where each object specifies a URL pattern that, if matched to the request URL path, triggers Hosting to apply the specified custom response headers.
     */
    headers?: Schema$Header[];
    /**
     * Optional. Defines i18n rewrite behavior.
     */
    i18n?: Schema$I18nConfig;
    /**
     * An array of objects (called redirect rules), where each rule specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond with a redirect to the specified destination path.
     */
    redirects?: Schema$Redirect[];
    /**
     * An array of objects (called rewrite rules), where each rule specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond as if the service were given the specified destination URL.
     */
    rewrites?: Schema$Rewrite[];
    /**
     * Defines how to handle a trailing slash in the URL path.
     */
    trailingSlashBehavior?: string | null;
  }
  /**
   * A `Site` represents a Firebase Hosting site.
   */
  export interface Schema$Site {
    /**
     * Optional. The [ID of a Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id) associated with the Hosting site.
     */
    appId?: string | null;
    /**
     * Output only. The default URL for the Hosting site.
     */
    defaultUrl?: string | null;
    /**
     * Optional. User-specified labels for the Hosting site.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The fully-qualified resource name of the Hosting site, in the format: projects/PROJECT_IDENTIFIER/sites/SITE_ID PROJECT_IDENTIFIER: the Firebase project's [`ProjectNumber`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510).
     */
    name?: string | null;
    /**
     * Output only. The type of Hosting site. Every Firebase project has a `DEFAULT_SITE`, which is created when Hosting is provisioned for the project. All additional sites are `USER_SITE`.
     */
    type?: string | null;
  }
  /**
   * A `SiteConfig` contains metadata associated with a specific site that controls Firebase Hosting serving behavior
   */
  export interface Schema$SiteConfig {
    /**
     * Whether or not web requests made by site visitors are logged via Cloud Logging.
     */
    cloudLoggingEnabled?: boolean | null;
    /**
     * The number of FINALIZED versions that will be held for a site before automatic deletion. When a new version is deployed, content for versions in storage in excess of this number will be deleted, and will no longer be billed for storage usage. Oldest versions will be deleted first; sites are created with an unlimited number of max_versions by default.
     */
    maxVersions?: string | null;
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
   * The request sent to `UndeleteCustomDomain`.
   */
  export interface Schema$UndeleteCustomDomainRequest {
    /**
     * A tag that represents the state of the `CustomDomain` as you know it. If present, the supplied tag must match the current value on your `CustomDomain`, or the request fails.
     */
    etag?: string | null;
    /**
     * If true, Hosting validates that it's possible to complete your request but doesn't actually delete the `CustomDomain`.
     */
    validateOnly?: boolean | null;
  }
  /**
   * A `Version` is a configuration and a collection of static files which determine how a site is displayed.
   */
  export interface Schema$Version {
    /**
     * The configuration for the behavior of the site. This configuration exists in the [`firebase.json`](https://firebase.google.com/docs/cli/#the_firebasejson_file) file.
     */
    config?: Schema$ServingConfig;
    /**
     * Output only. The time at which the version was created.
     */
    createTime?: string | null;
    /**
     * Output only. Identifies the user who created the version.
     */
    createUser?: Schema$ActingUser;
    /**
     * Output only. The time at which the version was `DELETED`.
     */
    deleteTime?: string | null;
    /**
     * Output only. Identifies the user who `DELETED` the version.
     */
    deleteUser?: Schema$ActingUser;
    /**
     * Output only. The total number of files associated with the version. This value is calculated after a version is `FINALIZED`.
     */
    fileCount?: string | null;
    /**
     * Output only. The time at which the version was `FINALIZED`.
     */
    finalizeTime?: string | null;
    /**
     * Output only. Identifies the user who `FINALIZED` the version.
     */
    finalizeUser?: Schema$ActingUser;
    /**
     * The labels used for extra metadata and/or filtering.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The fully-qualified resource name for the version, in the format: sites/ SITE_ID/versions/VERSION_ID This name is provided in the response body when you call [`CreateVersion`](sites.versions/create).
     */
    name?: string | null;
    /**
     * The deploy status of the version. For a successful deploy, call [`CreateVersion`](sites.versions/create) to make a new version (`CREATED` status), [upload all desired files](sites.versions/populateFiles) to the version, then [update](sites.versions/patch) the version to the `FINALIZED` status. Note that if you leave the version in the `CREATED` state for more than 12 hours, the system will automatically mark the version as `ABANDONED`. You can also change the status of a version to `DELETED` by calling [`DeleteVersion`](sites.versions/delete).
     */
    status?: string | null;
    /**
     * Output only. The total stored bytesize of the version. This value is calculated after a version is `FINALIZED`.
     */
    versionBytes?: string | null;
  }
  /**
   * A static content file that is part of a version.
   */
  export interface Schema$VersionFile {
    /**
     * The SHA256 content hash of the file.
     */
    hash?: string | null;
    /**
     * The URI at which the file's content should display.
     */
    path?: string | null;
    /**
     * Output only. The current status of a particular file in the specified version. The value will be either `pending upload` or `uploaded`.
     */
    status?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    operations: Resource$Projects$Operations;
    sites: Resource$Projects$Sites;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Projects$Operations(this.context);
      this.sites = new Resource$Projects$Sites(this.context);
    }
  }

  export class Resource$Projects$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/operations/my-operation',
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
      params: Params$Resource$Projects$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    get(
      params: Params$Resource$Projects$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$Get
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
        {}) as Params$Resource$Projects$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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

  export interface Params$Resource$Projects$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Projects$Sites {
    context: APIRequestContext;
    channels: Resource$Projects$Sites$Channels;
    customDomains: Resource$Projects$Sites$Customdomains;
    domains: Resource$Projects$Sites$Domains;
    releases: Resource$Projects$Sites$Releases;
    versions: Resource$Projects$Sites$Versions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.channels = new Resource$Projects$Sites$Channels(this.context);
      this.customDomains = new Resource$Projects$Sites$Customdomains(
        this.context
      );
      this.domains = new Resource$Projects$Sites$Domains(this.context);
      this.releases = new Resource$Projects$Sites$Releases(this.context);
      this.versions = new Resource$Projects$Sites$Versions(this.context);
    }

    /**
     * Creates a new Hosting Site in the specified parent Firebase project. Note that Hosting sites can take several minutes to propagate through Firebase systems.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.create({
     *     // Required. The Firebase project in which to create a Hosting site, in the format: projects/PROJECT_IDENTIFIER Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
     *     parent: 'projects/my-project',
     *     // Required. Immutable. A globally unique identifier for the Hosting site. This identifier is used to construct the Firebase-provisioned subdomains for the site, so it must also be a valid domain name label.
     *     siteId: 'placeholder-value',
     *     // Optional. If set, validates that the site_id is available and that the request would succeed, returning the expected resulting site or error.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appId": "my_appId",
     *       //   "defaultUrl": "my_defaultUrl",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appId": "my_appId",
     *   //   "defaultUrl": "my_defaultUrl",
     *   //   "labels": {},
     *   //   "name": "my_name",
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
      params: Params$Resource$Projects$Sites$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Sites$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Site>>;
    create(
      params: Params$Resource$Projects$Sites$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Sites$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Site>,
      callback: BodyResponseCallback<Schema$Site>
    ): void;
    create(
      params: Params$Resource$Projects$Sites$Create,
      callback: BodyResponseCallback<Schema$Site>
    ): void;
    create(callback: BodyResponseCallback<Schema$Site>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Create
        | BodyResponseCallback<Schema$Site>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Site>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Site>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Site>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/sites').replace(
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
        createAPIRequest<Schema$Site>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Site>(parameters);
      }
    }

    /**
     * Deletes the specified Hosting Site from the specified parent Firebase project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.delete({
     *     // Required. The fully-qualified resource name for the Hosting site, in the format: projects/PROJECT_IDENTIFIER/sites/SITE_ID Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
     *     name: 'projects/my-project/sites/my-site',
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
      params: Params$Resource$Projects$Sites$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Sites$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Sites$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Sites$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Sites$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Delete
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
        {}) as Params$Resource$Projects$Sites$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets the specified Hosting Site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.get({
     *     // Required. The fully-qualified resource name for the Hosting site, in the format: projects/PROJECT_IDENTIFIER/sites/SITE_ID Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values. Since a SITE_ID is a globally unique identifier, you can also use the unique sub-collection resource access pattern, in the format: projects/-/sites/SITE_ID
     *     name: 'projects/my-project/sites/my-site',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appId": "my_appId",
     *   //   "defaultUrl": "my_defaultUrl",
     *   //   "labels": {},
     *   //   "name": "my_name",
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
    get(
      params: Params$Resource$Projects$Sites$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Sites$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Site>>;
    get(
      params: Params$Resource$Projects$Sites$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Sites$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Site>,
      callback: BodyResponseCallback<Schema$Site>
    ): void;
    get(
      params: Params$Resource$Projects$Sites$Get,
      callback: BodyResponseCallback<Schema$Site>
    ): void;
    get(callback: BodyResponseCallback<Schema$Site>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Get
        | BodyResponseCallback<Schema$Site>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Site>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Site>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Site>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Site>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Site>(parameters);
      }
    }

    /**
     * Gets the Hosting metadata for a specific site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.getConfig({
     *     // Required. The site for which to get the SiteConfig, in the format: sites/ site-name/config
     *     name: 'projects/my-project/sites/my-site/config',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cloudLoggingEnabled": false,
     *   //   "maxVersions": "my_maxVersions"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Sites$Getconfig,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getConfig(
      params?: Params$Resource$Projects$Sites$Getconfig,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SiteConfig>>;
    getConfig(
      params: Params$Resource$Projects$Sites$Getconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getConfig(
      params: Params$Resource$Projects$Sites$Getconfig,
      options: MethodOptions | BodyResponseCallback<Schema$SiteConfig>,
      callback: BodyResponseCallback<Schema$SiteConfig>
    ): void;
    getConfig(
      params: Params$Resource$Projects$Sites$Getconfig,
      callback: BodyResponseCallback<Schema$SiteConfig>
    ): void;
    getConfig(callback: BodyResponseCallback<Schema$SiteConfig>): void;
    getConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Getconfig
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SiteConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Getconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Getconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SiteConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SiteConfig>(parameters);
      }
    }

    /**
     * Lists each Hosting Site associated with the specified parent Firebase project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.list({
     *     // Optional. The maximum number of sites to return. The service may return a lower number if fewer sites exist than this maximum number. If unspecified, defaults to 40.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token from a previous call to `ListSites` that tells the server where to resume listing.
     *     pageToken: 'placeholder-value',
     *     // Required. The Firebase project for which to list sites, in the format: projects/PROJECT_IDENTIFIER Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "sites": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Sites$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Sites$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListSitesResponse>>;
    list(
      params: Params$Resource$Projects$Sites$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListSitesResponse>,
      callback: BodyResponseCallback<Schema$ListSitesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$List,
      callback: BodyResponseCallback<Schema$ListSitesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSitesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$List
        | BodyResponseCallback<Schema$ListSitesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSitesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSitesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListSitesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/sites').replace(
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
        createAPIRequest<Schema$ListSitesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSitesResponse>(parameters);
      }
    }

    /**
     * Updates attributes of the specified Hosting Site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.patch({
     *     // Output only. The fully-qualified resource name of the Hosting site, in the format: projects/PROJECT_IDENTIFIER/sites/SITE_ID PROJECT_IDENTIFIER: the Firebase project's [`ProjectNumber`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510).
     *     name: 'projects/my-project/sites/my-site',
     *     // A set of field names from your Site that you want to update.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appId": "my_appId",
     *       //   "defaultUrl": "my_defaultUrl",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "type": "my_type"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "appId": "my_appId",
     *   //   "defaultUrl": "my_defaultUrl",
     *   //   "labels": {},
     *   //   "name": "my_name",
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
    patch(
      params: Params$Resource$Projects$Sites$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Sites$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Site>>;
    patch(
      params: Params$Resource$Projects$Sites$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Sites$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Site>,
      callback: BodyResponseCallback<Schema$Site>
    ): void;
    patch(
      params: Params$Resource$Projects$Sites$Patch,
      callback: BodyResponseCallback<Schema$Site>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Site>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Patch
        | BodyResponseCallback<Schema$Site>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Site>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Site>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Site>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Site>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Site>(parameters);
      }
    }

    /**
     * Sets the Hosting metadata for a specific site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.updateConfig({
     *     // Required. The site for which to update the SiteConfig, in the format: sites/ site-name/config
     *     name: 'projects/my-project/sites/my-site/config',
     *     // A set of field names from your [site configuration](../sites.SiteConfig) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`max_versions`](../sites.SiteConfig.max_versions) will be used.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cloudLoggingEnabled": false,
     *       //   "maxVersions": "my_maxVersions"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cloudLoggingEnabled": false,
     *   //   "maxVersions": "my_maxVersions"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateConfig(
      params: Params$Resource$Projects$Sites$Updateconfig,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateConfig(
      params?: Params$Resource$Projects$Sites$Updateconfig,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SiteConfig>>;
    updateConfig(
      params: Params$Resource$Projects$Sites$Updateconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateConfig(
      params: Params$Resource$Projects$Sites$Updateconfig,
      options: MethodOptions | BodyResponseCallback<Schema$SiteConfig>,
      callback: BodyResponseCallback<Schema$SiteConfig>
    ): void;
    updateConfig(
      params: Params$Resource$Projects$Sites$Updateconfig,
      callback: BodyResponseCallback<Schema$SiteConfig>
    ): void;
    updateConfig(callback: BodyResponseCallback<Schema$SiteConfig>): void;
    updateConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Updateconfig
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SiteConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Updateconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Updateconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SiteConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SiteConfig>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Sites$Create
    extends StandardParameters {
    /**
     * Required. The Firebase project in which to create a Hosting site, in the format: projects/PROJECT_IDENTIFIER Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
     */
    parent?: string;
    /**
     * Required. Immutable. A globally unique identifier for the Hosting site. This identifier is used to construct the Firebase-provisioned subdomains for the site, so it must also be a valid domain name label.
     */
    siteId?: string;
    /**
     * Optional. If set, validates that the site_id is available and that the request would succeed, returning the expected resulting site or error.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Site;
  }
  export interface Params$Resource$Projects$Sites$Delete
    extends StandardParameters {
    /**
     * Required. The fully-qualified resource name for the Hosting site, in the format: projects/PROJECT_IDENTIFIER/sites/SITE_ID Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Sites$Get
    extends StandardParameters {
    /**
     * Required. The fully-qualified resource name for the Hosting site, in the format: projects/PROJECT_IDENTIFIER/sites/SITE_ID Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values. Since a SITE_ID is a globally unique identifier, you can also use the unique sub-collection resource access pattern, in the format: projects/-/sites/SITE_ID
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Sites$Getconfig
    extends StandardParameters {
    /**
     * Required. The site for which to get the SiteConfig, in the format: sites/ site-name/config
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Sites$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of sites to return. The service may return a lower number if fewer sites exist than this maximum number. If unspecified, defaults to 40.
     */
    pageSize?: number;
    /**
     * Optional. A token from a previous call to `ListSites` that tells the server where to resume listing.
     */
    pageToken?: string;
    /**
     * Required. The Firebase project for which to list sites, in the format: projects/PROJECT_IDENTIFIER Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Sites$Patch
    extends StandardParameters {
    /**
     * Output only. The fully-qualified resource name of the Hosting site, in the format: projects/PROJECT_IDENTIFIER/sites/SITE_ID PROJECT_IDENTIFIER: the Firebase project's [`ProjectNumber`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510).
     */
    name?: string;
    /**
     * A set of field names from your Site that you want to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Site;
  }
  export interface Params$Resource$Projects$Sites$Updateconfig
    extends StandardParameters {
    /**
     * Required. The site for which to update the SiteConfig, in the format: sites/ site-name/config
     */
    name?: string;
    /**
     * A set of field names from your [site configuration](../sites.SiteConfig) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`max_versions`](../sites.SiteConfig.max_versions) will be used.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SiteConfig;
  }

  export class Resource$Projects$Sites$Channels {
    context: APIRequestContext;
    releases: Resource$Projects$Sites$Channels$Releases;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.releases = new Resource$Projects$Sites$Channels$Releases(
        this.context
      );
    }

    /**
     * Creates a new channel in the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.channels.create({
     *     // Required. Immutable. A unique ID within the site that identifies the channel.
     *     channelId: 'placeholder-value',
     *     // Required. The site in which to create this channel, in the format: sites/ SITE_ID
     *     parent: 'projects/my-project/sites/my-site',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "expireTime": "my_expireTime",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "release": {},
     *       //   "retainedReleaseCount": 0,
     *       //   "ttl": "my_ttl",
     *       //   "updateTime": "my_updateTime",
     *       //   "url": "my_url"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "expireTime": "my_expireTime",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "release": {},
     *   //   "retainedReleaseCount": 0,
     *   //   "ttl": "my_ttl",
     *   //   "updateTime": "my_updateTime",
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
    create(
      params: Params$Resource$Projects$Sites$Channels$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Sites$Channels$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Channel>>;
    create(
      params: Params$Resource$Projects$Sites$Channels$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Sites$Channels$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    create(
      params: Params$Resource$Projects$Sites$Channels$Create,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    create(callback: BodyResponseCallback<Schema$Channel>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Channels$Create
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Channels$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Channels$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/channels').replace(
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
        createAPIRequest<Schema$Channel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Channel>(parameters);
      }
    }

    /**
     * Deletes the specified channel of the specified site. The `live` channel cannot be deleted.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.channels.delete({
     *     // Required. The fully-qualified resource name for the channel, in the format: sites/SITE_ID/channels/CHANNEL_ID
     *     name: 'projects/my-project/sites/my-site/channels/my-channel',
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
      params: Params$Resource$Projects$Sites$Channels$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Sites$Channels$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Sites$Channels$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Sites$Channels$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Sites$Channels$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Channels$Delete
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
        {}) as Params$Resource$Projects$Sites$Channels$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Channels$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Retrieves information for the specified channel of the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.channels.get({
     *     // Required. The fully-qualified resource name for the channel, in the format: sites/SITE_ID/channels/CHANNEL_ID
     *     name: 'projects/my-project/sites/my-site/channels/my-channel',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "expireTime": "my_expireTime",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "release": {},
     *   //   "retainedReleaseCount": 0,
     *   //   "ttl": "my_ttl",
     *   //   "updateTime": "my_updateTime",
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
    get(
      params: Params$Resource$Projects$Sites$Channels$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Sites$Channels$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Channel>>;
    get(
      params: Params$Resource$Projects$Sites$Channels$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Sites$Channels$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    get(
      params: Params$Resource$Projects$Sites$Channels$Get,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    get(callback: BodyResponseCallback<Schema$Channel>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Channels$Get
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Channels$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Channels$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Channel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Channel>(parameters);
      }
    }

    /**
     * Lists the channels for the specified site. All sites have a default `live` channel.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.channels.list({
     *     // The maximum number of channels to return. The service may return a lower number if fewer channels exist than this maximum number. If unspecified, defaults to 10. The maximum value is 100; values above 100 will be coerced to 100.
     *     pageSize: 'placeholder-value',
     *     // A token from a previous call to `ListChannels` that tells the server where to resume listing.
     *     pageToken: 'placeholder-value',
     *     // Required. The site for which to list channels, in the format: sites/SITE_ID
     *     parent: 'projects/my-project/sites/my-site',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "channels": [],
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
      params: Params$Resource$Projects$Sites$Channels$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Sites$Channels$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListChannelsResponse>>;
    list(
      params: Params$Resource$Projects$Sites$Channels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Channels$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListChannelsResponse>,
      callback: BodyResponseCallback<Schema$ListChannelsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Channels$List,
      callback: BodyResponseCallback<Schema$ListChannelsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListChannelsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Channels$List
        | BodyResponseCallback<Schema$ListChannelsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListChannelsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListChannelsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListChannelsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Channels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Channels$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/channels').replace(
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
        createAPIRequest<Schema$ListChannelsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListChannelsResponse>(parameters);
      }
    }

    /**
     * Updates information for the specified channel of the specified site. Implicitly creates the channel if it doesn't already exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.channels.patch({
     *     // The fully-qualified resource name for the channel, in the format: sites/ SITE_ID/channels/CHANNEL_ID
     *     name: 'projects/my-project/sites/my-site/channels/my-channel',
     *     // A comma-separated list of fields to be updated in this request.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "expireTime": "my_expireTime",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "release": {},
     *       //   "retainedReleaseCount": 0,
     *       //   "ttl": "my_ttl",
     *       //   "updateTime": "my_updateTime",
     *       //   "url": "my_url"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "expireTime": "my_expireTime",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "release": {},
     *   //   "retainedReleaseCount": 0,
     *   //   "ttl": "my_ttl",
     *   //   "updateTime": "my_updateTime",
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
    patch(
      params: Params$Resource$Projects$Sites$Channels$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Sites$Channels$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Channel>>;
    patch(
      params: Params$Resource$Projects$Sites$Channels$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Sites$Channels$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    patch(
      params: Params$Resource$Projects$Sites$Channels$Patch,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Channel>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Channels$Patch
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Channels$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Channels$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Channel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Channel>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Sites$Channels$Create
    extends StandardParameters {
    /**
     * Required. Immutable. A unique ID within the site that identifies the channel.
     */
    channelId?: string;
    /**
     * Required. The site in which to create this channel, in the format: sites/ SITE_ID
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }
  export interface Params$Resource$Projects$Sites$Channels$Delete
    extends StandardParameters {
    /**
     * Required. The fully-qualified resource name for the channel, in the format: sites/SITE_ID/channels/CHANNEL_ID
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Sites$Channels$Get
    extends StandardParameters {
    /**
     * Required. The fully-qualified resource name for the channel, in the format: sites/SITE_ID/channels/CHANNEL_ID
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Sites$Channels$List
    extends StandardParameters {
    /**
     * The maximum number of channels to return. The service may return a lower number if fewer channels exist than this maximum number. If unspecified, defaults to 10. The maximum value is 100; values above 100 will be coerced to 100.
     */
    pageSize?: number;
    /**
     * A token from a previous call to `ListChannels` that tells the server where to resume listing.
     */
    pageToken?: string;
    /**
     * Required. The site for which to list channels, in the format: sites/SITE_ID
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Sites$Channels$Patch
    extends StandardParameters {
    /**
     * The fully-qualified resource name for the channel, in the format: sites/ SITE_ID/channels/CHANNEL_ID
     */
    name?: string;
    /**
     * A comma-separated list of fields to be updated in this request.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }

  export class Resource$Projects$Sites$Channels$Releases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.channels.releases.create({
     *     // Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     *     parent: 'projects/my-project/sites/my-site/channels/my-channel',
     *     //  The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     *     versionName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "message": "my_message",
     *       //   "name": "my_name",
     *       //   "releaseTime": "my_releaseTime",
     *       //   "releaseUser": {},
     *       //   "type": "my_type",
     *       //   "version": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "message": "my_message",
     *   //   "name": "my_name",
     *   //   "releaseTime": "my_releaseTime",
     *   //   "releaseUser": {},
     *   //   "type": "my_type",
     *   //   "version": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Sites$Channels$Releases$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Sites$Channels$Releases$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Release>>;
    create(
      params: Params$Resource$Projects$Sites$Channels$Releases$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Sites$Channels$Releases$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Release>,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    create(
      params: Params$Resource$Projects$Sites$Channels$Releases$Create,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    create(callback: BodyResponseCallback<Schema$Release>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Channels$Releases$Create
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
        {}) as Params$Resource$Projects$Sites$Channels$Releases$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Channels$Releases$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/releases').replace(
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
        createAPIRequest<Schema$Release>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Release>(parameters);
      }
    }

    /**
     * Gets the specified release for a site or channel. When used to get a release for a site, this can get releases for both the default `live` channel and any active preview channels for the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.channels.releases.get({
     *     // Required. The fully-qualified resource name for the Hosting release, in either of the following formats: - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID - sites/SITE_ID/releases/RELEASE_ID
     *     name: 'projects/my-project/sites/my-site/channels/my-channel/releases/my-release',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "message": "my_message",
     *   //   "name": "my_name",
     *   //   "releaseTime": "my_releaseTime",
     *   //   "releaseUser": {},
     *   //   "type": "my_type",
     *   //   "version": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Sites$Channels$Releases$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Sites$Channels$Releases$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Release>>;
    get(
      params: Params$Resource$Projects$Sites$Channels$Releases$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Sites$Channels$Releases$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Release>,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    get(
      params: Params$Resource$Projects$Sites$Channels$Releases$Get,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    get(callback: BodyResponseCallback<Schema$Release>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Channels$Releases$Get
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
        {}) as Params$Resource$Projects$Sites$Channels$Releases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Channels$Releases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.channels.releases.list({
     *     // The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100.
     *     pageSize: 'placeholder-value',
     *     // A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing.
     *     pageToken: 'placeholder-value',
     *     // Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     *     parent: 'projects/my-project/sites/my-site/channels/my-channel',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "releases": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Sites$Channels$Releases$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Sites$Channels$Releases$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListReleasesResponse>>;
    list(
      params: Params$Resource$Projects$Sites$Channels$Releases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Channels$Releases$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReleasesResponse>,
      callback: BodyResponseCallback<Schema$ListReleasesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Channels$Releases$List,
      callback: BodyResponseCallback<Schema$ListReleasesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReleasesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Channels$Releases$List
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
        {}) as Params$Resource$Projects$Sites$Channels$Releases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Channels$Releases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/releases').replace(
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

  export interface Params$Resource$Projects$Sites$Channels$Releases$Create
    extends StandardParameters {
    /**
     * Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     */
    parent?: string;
    /**
     *  The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     */
    versionName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Release;
  }
  export interface Params$Resource$Projects$Sites$Channels$Releases$Get
    extends StandardParameters {
    /**
     * Required. The fully-qualified resource name for the Hosting release, in either of the following formats: - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID - sites/SITE_ID/releases/RELEASE_ID
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Sites$Channels$Releases$List
    extends StandardParameters {
    /**
     * The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100.
     */
    pageSize?: number;
    /**
     * A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing.
     */
    pageToken?: string;
    /**
     * Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     */
    parent?: string;
  }

  export class Resource$Projects$Sites$Customdomains {
    context: APIRequestContext;
    operations: Resource$Projects$Sites$Customdomains$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Projects$Sites$Customdomains$Operations(
        this.context
      );
    }

    /**
     * Creates a `CustomDomain`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.customDomains.create({
     *     // Required. The ID of the `CustomDomain`, which is the domain name you'd like to use with Firebase Hosting.
     *     customDomainId: 'placeholder-value',
     *     // Required. The custom domain's parent, specifically a Firebase Hosting `Site`.
     *     parent: 'projects/my-project/sites/my-site',
     *     // If true, Hosting validates that it's possible to complete your request but doesn't actually create a new `CustomDomain`.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "cert": {},
     *       //   "certPreference": "my_certPreference",
     *       //   "createTime": "my_createTime",
     *       //   "deleteTime": "my_deleteTime",
     *       //   "etag": "my_etag",
     *       //   "expireTime": "my_expireTime",
     *       //   "hostState": "my_hostState",
     *       //   "issues": [],
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "ownershipState": "my_ownershipState",
     *       //   "reconciling": false,
     *       //   "redirectTarget": "my_redirectTarget",
     *       //   "requiredDnsUpdates": {},
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
      params: Params$Resource$Projects$Sites$Customdomains$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Sites$Customdomains$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Sites$Customdomains$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Sites$Customdomains$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Sites$Customdomains$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Customdomains$Create
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
        {}) as Params$Resource$Projects$Sites$Customdomains$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Customdomains$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/customDomains').replace(
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
     * Deletes the specified `CustomDomain`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.customDomains.delete({
     *     // If true, the request succeeds even if the `CustomDomain` doesn't exist.
     *     allowMissing: 'placeholder-value',
     *     // A tag that represents the state of the `CustomDomain` as you know it. If present, the supplied tag must match the current value on your `CustomDomain`, or the request fails.
     *     etag: 'placeholder-value',
     *     // Required. The name of the `CustomDomain` to delete.
     *     name: 'projects/my-project/sites/my-site/customDomains/my-customDomain',
     *     // If true, Hosting validates that it's possible to complete your request but doesn't actually delete the `CustomDomain`.
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
      params: Params$Resource$Projects$Sites$Customdomains$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Sites$Customdomains$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Sites$Customdomains$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Sites$Customdomains$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Sites$Customdomains$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Customdomains$Delete
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
        {}) as Params$Resource$Projects$Sites$Customdomains$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Customdomains$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets the specified `CustomDomain`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.customDomains.get({
     *     // Required. The name of the `CustomDomain` to get.
     *     name: 'projects/my-project/sites/my-site/customDomains/my-customDomain',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "cert": {},
     *   //   "certPreference": "my_certPreference",
     *   //   "createTime": "my_createTime",
     *   //   "deleteTime": "my_deleteTime",
     *   //   "etag": "my_etag",
     *   //   "expireTime": "my_expireTime",
     *   //   "hostState": "my_hostState",
     *   //   "issues": [],
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "ownershipState": "my_ownershipState",
     *   //   "reconciling": false,
     *   //   "redirectTarget": "my_redirectTarget",
     *   //   "requiredDnsUpdates": {},
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
      params: Params$Resource$Projects$Sites$Customdomains$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Sites$Customdomains$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CustomDomain>>;
    get(
      params: Params$Resource$Projects$Sites$Customdomains$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Sites$Customdomains$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CustomDomain>,
      callback: BodyResponseCallback<Schema$CustomDomain>
    ): void;
    get(
      params: Params$Resource$Projects$Sites$Customdomains$Get,
      callback: BodyResponseCallback<Schema$CustomDomain>
    ): void;
    get(callback: BodyResponseCallback<Schema$CustomDomain>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Customdomains$Get
        | BodyResponseCallback<Schema$CustomDomain>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomDomain>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomDomain>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CustomDomain>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Customdomains$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Customdomains$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$CustomDomain>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomDomain>(parameters);
      }
    }

    /**
     * Lists each `CustomDomain` associated with the specified parent Hosting site. Returns `CustomDomain`s in a consistent, but undefined, order to facilitate pagination.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.customDomains.list({
     *     // The max number of `CustomDomain` entities to return in a request. Defaults to 10.
     *     pageSize: 'placeholder-value',
     *     // A token from a previous call to `ListCustomDomains` that tells the server where to resume listing.
     *     pageToken: 'placeholder-value',
     *     // Required. The Firebase Hosting `Site` with `CustomDomain` entities you'd like to list.
     *     parent: 'projects/my-project/sites/my-site',
     *     // If true, the request returns soft-deleted `CustomDomain`s that haven't been fully-deleted yet. To restore deleted `CustomDomain`s, make an `UndeleteCustomDomain` request.
     *     showDeleted: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customDomains": [],
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
      params: Params$Resource$Projects$Sites$Customdomains$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Sites$Customdomains$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListCustomDomainsResponse>>;
    list(
      params: Params$Resource$Projects$Sites$Customdomains$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Customdomains$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCustomDomainsResponse>,
      callback: BodyResponseCallback<Schema$ListCustomDomainsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Customdomains$List,
      callback: BodyResponseCallback<Schema$ListCustomDomainsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListCustomDomainsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Customdomains$List
        | BodyResponseCallback<Schema$ListCustomDomainsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCustomDomainsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCustomDomainsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListCustomDomainsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Customdomains$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Customdomains$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/customDomains').replace(
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
        createAPIRequest<Schema$ListCustomDomainsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCustomDomainsResponse>(parameters);
      }
    }

    /**
     * Updates the specified `CustomDomain`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.customDomains.patch({
     *     // If true, Hosting creates the `CustomDomain` if it doesn't already exist.
     *     allowMissing: 'placeholder-value',
     *     // Output only. The fully-qualified name of the `CustomDomain`.
     *     name: 'projects/my-project/sites/my-site/customDomains/my-customDomain',
     *     // The set of field names from your `CustomDomain` that you want to update. A field will be overwritten if, and only if, it's in the mask. If you don't provide a mask, Hosting updates the entire `CustomDomain`.
     *     updateMask: 'placeholder-value',
     *     // If true, Hosting validates that it's possible to complete your request but doesn't actually create or update the `CustomDomain`.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "cert": {},
     *       //   "certPreference": "my_certPreference",
     *       //   "createTime": "my_createTime",
     *       //   "deleteTime": "my_deleteTime",
     *       //   "etag": "my_etag",
     *       //   "expireTime": "my_expireTime",
     *       //   "hostState": "my_hostState",
     *       //   "issues": [],
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "ownershipState": "my_ownershipState",
     *       //   "reconciling": false,
     *       //   "redirectTarget": "my_redirectTarget",
     *       //   "requiredDnsUpdates": {},
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
      params: Params$Resource$Projects$Sites$Customdomains$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Sites$Customdomains$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Sites$Customdomains$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Sites$Customdomains$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Sites$Customdomains$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Customdomains$Patch
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
        {}) as Params$Resource$Projects$Sites$Customdomains$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Customdomains$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Undeletes the specified `CustomDomain` if it has been soft-deleted. Hosting retains soft-deleted custom domains for around 30 days before permanently deleting them.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.customDomains.undelete({
     *     // Required. The name of the `CustomDomain` to delete.
     *     name: 'projects/my-project/sites/my-site/customDomains/my-customDomain',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "validateOnly": false
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
    undelete(
      params: Params$Resource$Projects$Sites$Customdomains$Undelete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    undelete(
      params?: Params$Resource$Projects$Sites$Customdomains$Undelete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    undelete(
      params: Params$Resource$Projects$Sites$Customdomains$Undelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    undelete(
      params: Params$Resource$Projects$Sites$Customdomains$Undelete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    undelete(
      params: Params$Resource$Projects$Sites$Customdomains$Undelete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    undelete(callback: BodyResponseCallback<Schema$Operation>): void;
    undelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Customdomains$Undelete
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
        {}) as Params$Resource$Projects$Sites$Customdomains$Undelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Customdomains$Undelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:undelete').replace(
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

  export interface Params$Resource$Projects$Sites$Customdomains$Create
    extends StandardParameters {
    /**
     * Required. The ID of the `CustomDomain`, which is the domain name you'd like to use with Firebase Hosting.
     */
    customDomainId?: string;
    /**
     * Required. The custom domain's parent, specifically a Firebase Hosting `Site`.
     */
    parent?: string;
    /**
     * If true, Hosting validates that it's possible to complete your request but doesn't actually create a new `CustomDomain`.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomDomain;
  }
  export interface Params$Resource$Projects$Sites$Customdomains$Delete
    extends StandardParameters {
    /**
     * If true, the request succeeds even if the `CustomDomain` doesn't exist.
     */
    allowMissing?: boolean;
    /**
     * A tag that represents the state of the `CustomDomain` as you know it. If present, the supplied tag must match the current value on your `CustomDomain`, or the request fails.
     */
    etag?: string;
    /**
     * Required. The name of the `CustomDomain` to delete.
     */
    name?: string;
    /**
     * If true, Hosting validates that it's possible to complete your request but doesn't actually delete the `CustomDomain`.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Sites$Customdomains$Get
    extends StandardParameters {
    /**
     * Required. The name of the `CustomDomain` to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Sites$Customdomains$List
    extends StandardParameters {
    /**
     * The max number of `CustomDomain` entities to return in a request. Defaults to 10.
     */
    pageSize?: number;
    /**
     * A token from a previous call to `ListCustomDomains` that tells the server where to resume listing.
     */
    pageToken?: string;
    /**
     * Required. The Firebase Hosting `Site` with `CustomDomain` entities you'd like to list.
     */
    parent?: string;
    /**
     * If true, the request returns soft-deleted `CustomDomain`s that haven't been fully-deleted yet. To restore deleted `CustomDomain`s, make an `UndeleteCustomDomain` request.
     */
    showDeleted?: boolean;
  }
  export interface Params$Resource$Projects$Sites$Customdomains$Patch
    extends StandardParameters {
    /**
     * If true, Hosting creates the `CustomDomain` if it doesn't already exist.
     */
    allowMissing?: boolean;
    /**
     * Output only. The fully-qualified name of the `CustomDomain`.
     */
    name?: string;
    /**
     * The set of field names from your `CustomDomain` that you want to update. A field will be overwritten if, and only if, it's in the mask. If you don't provide a mask, Hosting updates the entire `CustomDomain`.
     */
    updateMask?: string;
    /**
     * If true, Hosting validates that it's possible to complete your request but doesn't actually create or update the `CustomDomain`.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomDomain;
  }
  export interface Params$Resource$Projects$Sites$Customdomains$Undelete
    extends StandardParameters {
    /**
     * Required. The name of the `CustomDomain` to delete.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UndeleteCustomDomainRequest;
  }

  export class Resource$Projects$Sites$Customdomains$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.customDomains.operations.get(
     *     {
     *       // The name of the operation resource.
     *       name: 'projects/my-project/sites/my-site/customDomains/my-customDomain/operations/my-operation',
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
    get(
      params: Params$Resource$Projects$Sites$Customdomains$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Sites$Customdomains$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    get(
      params: Params$Resource$Projects$Sites$Customdomains$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Sites$Customdomains$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Sites$Customdomains$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Customdomains$Operations$Get
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
        {}) as Params$Resource$Projects$Sites$Customdomains$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Sites$Customdomains$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists operations that match the specified filter in the request.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await firebasehosting.projects.sites.customDomains.operations.list({
     *       // The standard list filter.
     *       filter: 'placeholder-value',
     *       // The name of the operation's parent resource.
     *       name: 'projects/my-project/sites/my-site/customDomains/my-customDomain',
     *       // The standard list page size.
     *       pageSize: 'placeholder-value',
     *       // The standard list page token.
     *       pageToken: 'placeholder-value',
     *     });
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
      params: Params$Resource$Projects$Sites$Customdomains$Operations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Sites$Customdomains$Operations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>;
    list(
      params: Params$Resource$Projects$Sites$Customdomains$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Customdomains$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Customdomains$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Customdomains$Operations$List
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
        {}) as Params$Resource$Projects$Sites$Customdomains$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Sites$Customdomains$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}/operations').replace(
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

  export interface Params$Resource$Projects$Sites$Customdomains$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Sites$Customdomains$Operations$List
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

  export class Resource$Projects$Sites$Domains {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a domain mapping on the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.domains.create({
     *     // Required. The parent to create the domain association for, in the format: sites/site-name
     *     parent: 'projects/my-project/sites/my-site',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "domainName": "my_domainName",
     *       //   "domainRedirect": {},
     *       //   "provisioning": {},
     *       //   "site": "my_site",
     *       //   "status": "my_status",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domainName": "my_domainName",
     *   //   "domainRedirect": {},
     *   //   "provisioning": {},
     *   //   "site": "my_site",
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
    create(
      params: Params$Resource$Projects$Sites$Domains$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Sites$Domains$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Domain>>;
    create(
      params: Params$Resource$Projects$Sites$Domains$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Sites$Domains$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Domain>,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    create(
      params: Params$Resource$Projects$Sites$Domains$Create,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    create(callback: BodyResponseCallback<Schema$Domain>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Domains$Create
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Domain>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Domains$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Domains$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/domains').replace(
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
        createAPIRequest<Schema$Domain>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Domain>(parameters);
      }
    }

    /**
     * Deletes the existing domain mapping on the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.domains.delete({
     *     // Required. The name of the domain association to delete.
     *     name: 'projects/my-project/sites/my-site/domains/my-domain',
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
      params: Params$Resource$Projects$Sites$Domains$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Sites$Domains$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Sites$Domains$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Sites$Domains$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Sites$Domains$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Domains$Delete
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
        {}) as Params$Resource$Projects$Sites$Domains$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Domains$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets a domain mapping on the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.domains.get({
     *     // Required. The name of the domain configuration to get.
     *     name: 'projects/my-project/sites/my-site/domains/my-domain',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domainName": "my_domainName",
     *   //   "domainRedirect": {},
     *   //   "provisioning": {},
     *   //   "site": "my_site",
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
    get(
      params: Params$Resource$Projects$Sites$Domains$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Sites$Domains$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Domain>>;
    get(
      params: Params$Resource$Projects$Sites$Domains$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Sites$Domains$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Domain>,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    get(
      params: Params$Resource$Projects$Sites$Domains$Get,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    get(callback: BodyResponseCallback<Schema$Domain>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Domains$Get
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Domain>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Domains$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Domains$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Domain>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Domain>(parameters);
      }
    }

    /**
     * Lists the domains for the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.domains.list({
     *     // The page size to return. Defaults to 50.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token from a previous request, if provided.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent for which to list domains, in the format: sites/ site-name
     *     parent: 'projects/my-project/sites/my-site',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domains": [],
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
      params: Params$Resource$Projects$Sites$Domains$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Sites$Domains$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDomainsResponse>>;
    list(
      params: Params$Resource$Projects$Sites$Domains$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Domains$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListDomainsResponse>,
      callback: BodyResponseCallback<Schema$ListDomainsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Domains$List,
      callback: BodyResponseCallback<Schema$ListDomainsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDomainsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Domains$List
        | BodyResponseCallback<Schema$ListDomainsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDomainsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDomainsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDomainsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Domains$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Domains$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/domains').replace(
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
        createAPIRequest<Schema$ListDomainsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDomainsResponse>(parameters);
      }
    }

    /**
     * Updates the specified domain mapping, creating the mapping as if it does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.domains.update({
     *     // Required. The name of the domain association to update or create, if an association doesn't already exist.
     *     name: 'projects/my-project/sites/my-site/domains/my-domain',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "domainName": "my_domainName",
     *       //   "domainRedirect": {},
     *       //   "provisioning": {},
     *       //   "site": "my_site",
     *       //   "status": "my_status",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domainName": "my_domainName",
     *   //   "domainRedirect": {},
     *   //   "provisioning": {},
     *   //   "site": "my_site",
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
    update(
      params: Params$Resource$Projects$Sites$Domains$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Projects$Sites$Domains$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Domain>>;
    update(
      params: Params$Resource$Projects$Sites$Domains$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Projects$Sites$Domains$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Domain>,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    update(
      params: Params$Resource$Projects$Sites$Domains$Update,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    update(callback: BodyResponseCallback<Schema$Domain>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Domains$Update
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Domain>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Domains$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Domains$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
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
        createAPIRequest<Schema$Domain>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Domain>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Sites$Domains$Create
    extends StandardParameters {
    /**
     * Required. The parent to create the domain association for, in the format: sites/site-name
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Domain;
  }
  export interface Params$Resource$Projects$Sites$Domains$Delete
    extends StandardParameters {
    /**
     * Required. The name of the domain association to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Sites$Domains$Get
    extends StandardParameters {
    /**
     * Required. The name of the domain configuration to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Sites$Domains$List
    extends StandardParameters {
    /**
     * The page size to return. Defaults to 50.
     */
    pageSize?: number;
    /**
     * The next_page_token from a previous request, if provided.
     */
    pageToken?: string;
    /**
     * Required. The parent for which to list domains, in the format: sites/ site-name
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Sites$Domains$Update
    extends StandardParameters {
    /**
     * Required. The name of the domain association to update or create, if an association doesn't already exist.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Domain;
  }

  export class Resource$Projects$Sites$Releases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.releases.create({
     *     // Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     *     parent: 'projects/my-project/sites/my-site',
     *     //  The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     *     versionName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "message": "my_message",
     *       //   "name": "my_name",
     *       //   "releaseTime": "my_releaseTime",
     *       //   "releaseUser": {},
     *       //   "type": "my_type",
     *       //   "version": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "message": "my_message",
     *   //   "name": "my_name",
     *   //   "releaseTime": "my_releaseTime",
     *   //   "releaseUser": {},
     *   //   "type": "my_type",
     *   //   "version": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Sites$Releases$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Sites$Releases$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Release>>;
    create(
      params: Params$Resource$Projects$Sites$Releases$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Sites$Releases$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Release>,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    create(
      params: Params$Resource$Projects$Sites$Releases$Create,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    create(callback: BodyResponseCallback<Schema$Release>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Releases$Create
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
        {}) as Params$Resource$Projects$Sites$Releases$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Releases$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/releases').replace(
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
        createAPIRequest<Schema$Release>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Release>(parameters);
      }
    }

    /**
     * Gets the specified release for a site or channel. When used to get a release for a site, this can get releases for both the default `live` channel and any active preview channels for the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.releases.get({
     *     // Required. The fully-qualified resource name for the Hosting release, in either of the following formats: - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID - sites/SITE_ID/releases/RELEASE_ID
     *     name: 'projects/my-project/sites/my-site/releases/my-release',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "message": "my_message",
     *   //   "name": "my_name",
     *   //   "releaseTime": "my_releaseTime",
     *   //   "releaseUser": {},
     *   //   "type": "my_type",
     *   //   "version": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Sites$Releases$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Sites$Releases$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Release>>;
    get(
      params: Params$Resource$Projects$Sites$Releases$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Sites$Releases$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Release>,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    get(
      params: Params$Resource$Projects$Sites$Releases$Get,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    get(callback: BodyResponseCallback<Schema$Release>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Releases$Get
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
        {}) as Params$Resource$Projects$Sites$Releases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Releases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.releases.list({
     *     // The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100.
     *     pageSize: 'placeholder-value',
     *     // A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing.
     *     pageToken: 'placeholder-value',
     *     // Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     *     parent: 'projects/my-project/sites/my-site',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "releases": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Sites$Releases$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Sites$Releases$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListReleasesResponse>>;
    list(
      params: Params$Resource$Projects$Sites$Releases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Releases$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReleasesResponse>,
      callback: BodyResponseCallback<Schema$ListReleasesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Releases$List,
      callback: BodyResponseCallback<Schema$ListReleasesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReleasesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Releases$List
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
        {}) as Params$Resource$Projects$Sites$Releases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Releases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/releases').replace(
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

  export interface Params$Resource$Projects$Sites$Releases$Create
    extends StandardParameters {
    /**
     * Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     */
    parent?: string;
    /**
     *  The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     */
    versionName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Release;
  }
  export interface Params$Resource$Projects$Sites$Releases$Get
    extends StandardParameters {
    /**
     * Required. The fully-qualified resource name for the Hosting release, in either of the following formats: - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID - sites/SITE_ID/releases/RELEASE_ID
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Sites$Releases$List
    extends StandardParameters {
    /**
     * The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100.
     */
    pageSize?: number;
    /**
     * A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing.
     */
    pageToken?: string;
    /**
     * Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     */
    parent?: string;
  }

  export class Resource$Projects$Sites$Versions {
    context: APIRequestContext;
    files: Resource$Projects$Sites$Versions$Files;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.files = new Resource$Projects$Sites$Versions$Files(this.context);
    }

    /**
     * Creates a new version on the specified target site using the content of the specified version.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.versions.clone({
     *     // Required. The target site for the cloned version, in the format: sites/ SITE_ID
     *     parent: 'projects/my-project/sites/my-site',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "exclude": {},
     *       //   "finalize": false,
     *       //   "include": {},
     *       //   "sourceVersion": "my_sourceVersion"
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
    clone(
      params: Params$Resource$Projects$Sites$Versions$Clone,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    clone(
      params?: Params$Resource$Projects$Sites$Versions$Clone,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    clone(
      params: Params$Resource$Projects$Sites$Versions$Clone,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    clone(
      params: Params$Resource$Projects$Sites$Versions$Clone,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    clone(
      params: Params$Resource$Projects$Sites$Versions$Clone,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    clone(callback: BodyResponseCallback<Schema$Operation>): void;
    clone(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Versions$Clone
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
        {}) as Params$Resource$Projects$Sites$Versions$Clone;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Versions$Clone;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/versions:clone').replace(
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
     * Creates a new version for the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.versions.create({
     *     // Required. The site in which to create the version, in the format: sites/ SITE_ID
     *     parent: 'projects/my-project/sites/my-site',
     *     // The self-reported size of the version. This value is used for a pre-emptive quota check for legacy version uploads.
     *     sizeBytes: 'placeholder-value',
     *     // A unique id for the new version. This is was only specified for legacy version creations, and should be blank.
     *     versionId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "config": {},
     *       //   "createTime": "my_createTime",
     *       //   "createUser": {},
     *       //   "deleteTime": "my_deleteTime",
     *       //   "deleteUser": {},
     *       //   "fileCount": "my_fileCount",
     *       //   "finalizeTime": "my_finalizeTime",
     *       //   "finalizeUser": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "status": "my_status",
     *       //   "versionBytes": "my_versionBytes"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "config": {},
     *   //   "createTime": "my_createTime",
     *   //   "createUser": {},
     *   //   "deleteTime": "my_deleteTime",
     *   //   "deleteUser": {},
     *   //   "fileCount": "my_fileCount",
     *   //   "finalizeTime": "my_finalizeTime",
     *   //   "finalizeUser": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "status": "my_status",
     *   //   "versionBytes": "my_versionBytes"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Sites$Versions$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Sites$Versions$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Version>>;
    create(
      params: Params$Resource$Projects$Sites$Versions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Sites$Versions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Version>,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    create(
      params: Params$Resource$Projects$Sites$Versions$Create,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    create(callback: BodyResponseCallback<Schema$Version>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Versions$Create
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Version>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Versions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Versions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/versions').replace(
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
        createAPIRequest<Schema$Version>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Version>(parameters);
      }
    }

    /**
     * Deletes the specified version.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.versions.delete({
     *     // Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID
     *     name: 'projects/my-project/sites/my-site/versions/my-version',
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
      params: Params$Resource$Projects$Sites$Versions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Sites$Versions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Sites$Versions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Sites$Versions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Sites$Versions$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Versions$Delete
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
        {}) as Params$Resource$Projects$Sites$Versions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Versions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.versions.get({
     *     // Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID
     *     name: 'projects/my-project/sites/my-site/versions/my-version',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "config": {},
     *   //   "createTime": "my_createTime",
     *   //   "createUser": {},
     *   //   "deleteTime": "my_deleteTime",
     *   //   "deleteUser": {},
     *   //   "fileCount": "my_fileCount",
     *   //   "finalizeTime": "my_finalizeTime",
     *   //   "finalizeUser": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "status": "my_status",
     *   //   "versionBytes": "my_versionBytes"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Sites$Versions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Sites$Versions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Version>>;
    get(
      params: Params$Resource$Projects$Sites$Versions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Sites$Versions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Version>,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    get(
      params: Params$Resource$Projects$Sites$Versions$Get,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    get(callback: BodyResponseCallback<Schema$Version>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Versions$Get
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Version>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Versions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Versions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Version>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Version>(parameters);
      }
    }

    /**
     * Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.versions.list({
     *     // A filter string used to return a subset of versions in the response. The currently supported fields for filtering are: `name`, `status`, and `create_time`. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).
     *     filter: 'placeholder-value',
     *     // The maximum number of versions to return. The service may return a lower number if fewer versions exist than this maximum number. If unspecified, defaults to 25. The maximum value is 100; values above 100 will be coerced to 100.
     *     pageSize: 'placeholder-value',
     *     // A token from a previous call to `ListVersions` that tells the server where to resume listing.
     *     pageToken: 'placeholder-value',
     *     // Required. The site or channel for which to list versions, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     *     parent: 'projects/my-project/sites/my-site',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "versions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Sites$Versions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Sites$Versions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListVersionsResponse>>;
    list(
      params: Params$Resource$Projects$Sites$Versions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Versions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVersionsResponse>,
      callback: BodyResponseCallback<Schema$ListVersionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Versions$List,
      callback: BodyResponseCallback<Schema$ListVersionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListVersionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Versions$List
        | BodyResponseCallback<Schema$ListVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListVersionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Versions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Versions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/versions').replace(
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
        createAPIRequest<Schema$ListVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListVersionsResponse>(parameters);
      }
    }

    /**
     *  Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.versions.patch({
     *     // The fully-qualified resource name for the version, in the format: sites/ SITE_ID/versions/VERSION_ID This name is provided in the response body when you call [`CreateVersion`](sites.versions/create).
     *     name: 'projects/my-project/sites/my-site/versions/my-version',
     *     // A set of field names from your [version](../sites.versions) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`status`](../sites.versions#Version.FIELDS.status) will be used.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "config": {},
     *       //   "createTime": "my_createTime",
     *       //   "createUser": {},
     *       //   "deleteTime": "my_deleteTime",
     *       //   "deleteUser": {},
     *       //   "fileCount": "my_fileCount",
     *       //   "finalizeTime": "my_finalizeTime",
     *       //   "finalizeUser": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "status": "my_status",
     *       //   "versionBytes": "my_versionBytes"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "config": {},
     *   //   "createTime": "my_createTime",
     *   //   "createUser": {},
     *   //   "deleteTime": "my_deleteTime",
     *   //   "deleteUser": {},
     *   //   "fileCount": "my_fileCount",
     *   //   "finalizeTime": "my_finalizeTime",
     *   //   "finalizeUser": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "status": "my_status",
     *   //   "versionBytes": "my_versionBytes"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Sites$Versions$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Sites$Versions$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Version>>;
    patch(
      params: Params$Resource$Projects$Sites$Versions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Sites$Versions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Version>,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    patch(
      params: Params$Resource$Projects$Sites$Versions$Patch,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Version>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Versions$Patch
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Version>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Versions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Versions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Version>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Version>(parameters);
      }
    }

    /**
     *  Adds content files to the specified version. Each file must be under 2 GB.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.versions.populateFiles({
     *     // Required. The version to which to add files, in the format: sites/SITE_ID /versions/VERSION_ID
     *     parent: 'projects/my-project/sites/my-site/versions/my-version',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "files": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "uploadRequiredHashes": [],
     *   //   "uploadUrl": "my_uploadUrl"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    populateFiles(
      params: Params$Resource$Projects$Sites$Versions$Populatefiles,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    populateFiles(
      params?: Params$Resource$Projects$Sites$Versions$Populatefiles,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PopulateVersionFilesResponse>>;
    populateFiles(
      params: Params$Resource$Projects$Sites$Versions$Populatefiles,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    populateFiles(
      params: Params$Resource$Projects$Sites$Versions$Populatefiles,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PopulateVersionFilesResponse>,
      callback: BodyResponseCallback<Schema$PopulateVersionFilesResponse>
    ): void;
    populateFiles(
      params: Params$Resource$Projects$Sites$Versions$Populatefiles,
      callback: BodyResponseCallback<Schema$PopulateVersionFilesResponse>
    ): void;
    populateFiles(
      callback: BodyResponseCallback<Schema$PopulateVersionFilesResponse>
    ): void;
    populateFiles(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Versions$Populatefiles
        | BodyResponseCallback<Schema$PopulateVersionFilesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PopulateVersionFilesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PopulateVersionFilesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PopulateVersionFilesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Versions$Populatefiles;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Versions$Populatefiles;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}:populateFiles').replace(
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
        createAPIRequest<Schema$PopulateVersionFilesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PopulateVersionFilesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Sites$Versions$Clone
    extends StandardParameters {
    /**
     * Required. The target site for the cloned version, in the format: sites/ SITE_ID
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CloneVersionRequest;
  }
  export interface Params$Resource$Projects$Sites$Versions$Create
    extends StandardParameters {
    /**
     * Required. The site in which to create the version, in the format: sites/ SITE_ID
     */
    parent?: string;
    /**
     * The self-reported size of the version. This value is used for a pre-emptive quota check for legacy version uploads.
     */
    sizeBytes?: string;
    /**
     * A unique id for the new version. This is was only specified for legacy version creations, and should be blank.
     */
    versionId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Version;
  }
  export interface Params$Resource$Projects$Sites$Versions$Delete
    extends StandardParameters {
    /**
     * Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Sites$Versions$Get
    extends StandardParameters {
    /**
     * Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Sites$Versions$List
    extends StandardParameters {
    /**
     * A filter string used to return a subset of versions in the response. The currently supported fields for filtering are: `name`, `status`, and `create_time`. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * The maximum number of versions to return. The service may return a lower number if fewer versions exist than this maximum number. If unspecified, defaults to 25. The maximum value is 100; values above 100 will be coerced to 100.
     */
    pageSize?: number;
    /**
     * A token from a previous call to `ListVersions` that tells the server where to resume listing.
     */
    pageToken?: string;
    /**
     * Required. The site or channel for which to list versions, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Sites$Versions$Patch
    extends StandardParameters {
    /**
     * The fully-qualified resource name for the version, in the format: sites/ SITE_ID/versions/VERSION_ID This name is provided in the response body when you call [`CreateVersion`](sites.versions/create).
     */
    name?: string;
    /**
     * A set of field names from your [version](../sites.versions) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`status`](../sites.versions#Version.FIELDS.status) will be used.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Version;
  }
  export interface Params$Resource$Projects$Sites$Versions$Populatefiles
    extends StandardParameters {
    /**
     * Required. The version to which to add files, in the format: sites/SITE_ID /versions/VERSION_ID
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PopulateVersionFilesRequest;
  }

  export class Resource$Projects$Sites$Versions$Files {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the remaining files to be uploaded for the specified version.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.projects.sites.versions.files.list({
     *     // The maximum number of version files to return. The service may return a lower number if fewer version files exist than this maximum number. If unspecified, defaults to 1000.
     *     pageSize: 'placeholder-value',
     *     // A token from a previous call to `ListVersionFiles` that tells the server where to resume listing.
     *     pageToken: 'placeholder-value',
     *     // Required. The version for which to list files, in the format: sites/SITE_ID /versions/VERSION_ID
     *     parent: 'projects/my-project/sites/my-site/versions/my-version',
     *     //  The type of files that should be listed for the specified version.
     *     status: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "files": [],
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
      params: Params$Resource$Projects$Sites$Versions$Files$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Sites$Versions$Files$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListVersionFilesResponse>>;
    list(
      params: Params$Resource$Projects$Sites$Versions$Files$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Versions$Files$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVersionFilesResponse>,
      callback: BodyResponseCallback<Schema$ListVersionFilesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Sites$Versions$Files$List,
      callback: BodyResponseCallback<Schema$ListVersionFilesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListVersionFilesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Sites$Versions$Files$List
        | BodyResponseCallback<Schema$ListVersionFilesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVersionFilesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVersionFilesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListVersionFilesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sites$Versions$Files$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sites$Versions$Files$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/files').replace(
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
        createAPIRequest<Schema$ListVersionFilesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListVersionFilesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Sites$Versions$Files$List
    extends StandardParameters {
    /**
     * The maximum number of version files to return. The service may return a lower number if fewer version files exist than this maximum number. If unspecified, defaults to 1000.
     */
    pageSize?: number;
    /**
     * A token from a previous call to `ListVersionFiles` that tells the server where to resume listing.
     */
    pageToken?: string;
    /**
     * Required. The version for which to list files, in the format: sites/SITE_ID /versions/VERSION_ID
     */
    parent?: string;
    /**
     *  The type of files that should be listed for the specified version.
     */
    status?: string;
  }

  export class Resource$Sites {
    context: APIRequestContext;
    channels: Resource$Sites$Channels;
    domains: Resource$Sites$Domains;
    releases: Resource$Sites$Releases;
    versions: Resource$Sites$Versions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.channels = new Resource$Sites$Channels(this.context);
      this.domains = new Resource$Sites$Domains(this.context);
      this.releases = new Resource$Sites$Releases(this.context);
      this.versions = new Resource$Sites$Versions(this.context);
    }

    /**
     * Gets the Hosting metadata for a specific site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.getConfig({
     *     // Required. The site for which to get the SiteConfig, in the format: sites/ site-name/config
     *     name: 'sites/my-site/config',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cloudLoggingEnabled": false,
     *   //   "maxVersions": "my_maxVersions"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Sites$Getconfig,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getConfig(
      params?: Params$Resource$Sites$Getconfig,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SiteConfig>>;
    getConfig(
      params: Params$Resource$Sites$Getconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getConfig(
      params: Params$Resource$Sites$Getconfig,
      options: MethodOptions | BodyResponseCallback<Schema$SiteConfig>,
      callback: BodyResponseCallback<Schema$SiteConfig>
    ): void;
    getConfig(
      params: Params$Resource$Sites$Getconfig,
      callback: BodyResponseCallback<Schema$SiteConfig>
    ): void;
    getConfig(callback: BodyResponseCallback<Schema$SiteConfig>): void;
    getConfig(
      paramsOrCallback?:
        | Params$Resource$Sites$Getconfig
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SiteConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sites$Getconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Getconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SiteConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SiteConfig>(parameters);
      }
    }

    /**
     * Sets the Hosting metadata for a specific site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.updateConfig({
     *     // Required. The site for which to update the SiteConfig, in the format: sites/ site-name/config
     *     name: 'sites/my-site/config',
     *     // A set of field names from your [site configuration](../sites.SiteConfig) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`max_versions`](../sites.SiteConfig.max_versions) will be used.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cloudLoggingEnabled": false,
     *       //   "maxVersions": "my_maxVersions"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cloudLoggingEnabled": false,
     *   //   "maxVersions": "my_maxVersions"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateConfig(
      params: Params$Resource$Sites$Updateconfig,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateConfig(
      params?: Params$Resource$Sites$Updateconfig,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SiteConfig>>;
    updateConfig(
      params: Params$Resource$Sites$Updateconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateConfig(
      params: Params$Resource$Sites$Updateconfig,
      options: MethodOptions | BodyResponseCallback<Schema$SiteConfig>,
      callback: BodyResponseCallback<Schema$SiteConfig>
    ): void;
    updateConfig(
      params: Params$Resource$Sites$Updateconfig,
      callback: BodyResponseCallback<Schema$SiteConfig>
    ): void;
    updateConfig(callback: BodyResponseCallback<Schema$SiteConfig>): void;
    updateConfig(
      paramsOrCallback?:
        | Params$Resource$Sites$Updateconfig
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SiteConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SiteConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Updateconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Updateconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SiteConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SiteConfig>(parameters);
      }
    }
  }

  export interface Params$Resource$Sites$Getconfig extends StandardParameters {
    /**
     * Required. The site for which to get the SiteConfig, in the format: sites/ site-name/config
     */
    name?: string;
  }
  export interface Params$Resource$Sites$Updateconfig
    extends StandardParameters {
    /**
     * Required. The site for which to update the SiteConfig, in the format: sites/ site-name/config
     */
    name?: string;
    /**
     * A set of field names from your [site configuration](../sites.SiteConfig) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`max_versions`](../sites.SiteConfig.max_versions) will be used.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SiteConfig;
  }

  export class Resource$Sites$Channels {
    context: APIRequestContext;
    releases: Resource$Sites$Channels$Releases;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.releases = new Resource$Sites$Channels$Releases(this.context);
    }

    /**
     * Creates a new channel in the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.channels.create({
     *     // Required. Immutable. A unique ID within the site that identifies the channel.
     *     channelId: 'placeholder-value',
     *     // Required. The site in which to create this channel, in the format: sites/ SITE_ID
     *     parent: 'sites/my-site',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "expireTime": "my_expireTime",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "release": {},
     *       //   "retainedReleaseCount": 0,
     *       //   "ttl": "my_ttl",
     *       //   "updateTime": "my_updateTime",
     *       //   "url": "my_url"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "expireTime": "my_expireTime",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "release": {},
     *   //   "retainedReleaseCount": 0,
     *   //   "ttl": "my_ttl",
     *   //   "updateTime": "my_updateTime",
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
    create(
      params: Params$Resource$Sites$Channels$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Sites$Channels$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Channel>>;
    create(
      params: Params$Resource$Sites$Channels$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Sites$Channels$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    create(
      params: Params$Resource$Sites$Channels$Create,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    create(callback: BodyResponseCallback<Schema$Channel>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Sites$Channels$Create
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Channels$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Channels$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/channels').replace(
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
        createAPIRequest<Schema$Channel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Channel>(parameters);
      }
    }

    /**
     * Deletes the specified channel of the specified site. The `live` channel cannot be deleted.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.channels.delete({
     *     // Required. The fully-qualified resource name for the channel, in the format: sites/SITE_ID/channels/CHANNEL_ID
     *     name: 'sites/my-site/channels/my-channel',
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
      params: Params$Resource$Sites$Channels$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Sites$Channels$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Sites$Channels$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Sites$Channels$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Sites$Channels$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Sites$Channels$Delete
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
        {}) as Params$Resource$Sites$Channels$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Channels$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Retrieves information for the specified channel of the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.channels.get({
     *     // Required. The fully-qualified resource name for the channel, in the format: sites/SITE_ID/channels/CHANNEL_ID
     *     name: 'sites/my-site/channels/my-channel',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "expireTime": "my_expireTime",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "release": {},
     *   //   "retainedReleaseCount": 0,
     *   //   "ttl": "my_ttl",
     *   //   "updateTime": "my_updateTime",
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
    get(
      params: Params$Resource$Sites$Channels$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Sites$Channels$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Channel>>;
    get(
      params: Params$Resource$Sites$Channels$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Sites$Channels$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    get(
      params: Params$Resource$Sites$Channels$Get,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    get(callback: BodyResponseCallback<Schema$Channel>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Sites$Channels$Get
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Channels$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Channels$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Channel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Channel>(parameters);
      }
    }

    /**
     * Lists the channels for the specified site. All sites have a default `live` channel.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.channels.list({
     *     // The maximum number of channels to return. The service may return a lower number if fewer channels exist than this maximum number. If unspecified, defaults to 10. The maximum value is 100; values above 100 will be coerced to 100.
     *     pageSize: 'placeholder-value',
     *     // A token from a previous call to `ListChannels` that tells the server where to resume listing.
     *     pageToken: 'placeholder-value',
     *     // Required. The site for which to list channels, in the format: sites/SITE_ID
     *     parent: 'sites/my-site',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "channels": [],
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
      params: Params$Resource$Sites$Channels$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Sites$Channels$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListChannelsResponse>>;
    list(
      params: Params$Resource$Sites$Channels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Sites$Channels$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListChannelsResponse>,
      callback: BodyResponseCallback<Schema$ListChannelsResponse>
    ): void;
    list(
      params: Params$Resource$Sites$Channels$List,
      callback: BodyResponseCallback<Schema$ListChannelsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListChannelsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Sites$Channels$List
        | BodyResponseCallback<Schema$ListChannelsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListChannelsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListChannelsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListChannelsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Channels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Channels$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/channels').replace(
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
        createAPIRequest<Schema$ListChannelsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListChannelsResponse>(parameters);
      }
    }

    /**
     * Updates information for the specified channel of the specified site. Implicitly creates the channel if it doesn't already exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.channels.patch({
     *     // The fully-qualified resource name for the channel, in the format: sites/ SITE_ID/channels/CHANNEL_ID
     *     name: 'sites/my-site/channels/my-channel',
     *     // A comma-separated list of fields to be updated in this request.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "expireTime": "my_expireTime",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "release": {},
     *       //   "retainedReleaseCount": 0,
     *       //   "ttl": "my_ttl",
     *       //   "updateTime": "my_updateTime",
     *       //   "url": "my_url"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "expireTime": "my_expireTime",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "release": {},
     *   //   "retainedReleaseCount": 0,
     *   //   "ttl": "my_ttl",
     *   //   "updateTime": "my_updateTime",
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
    patch(
      params: Params$Resource$Sites$Channels$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Sites$Channels$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Channel>>;
    patch(
      params: Params$Resource$Sites$Channels$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Sites$Channels$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    patch(
      params: Params$Resource$Sites$Channels$Patch,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Channel>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Sites$Channels$Patch
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Channels$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Channels$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Channel>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Channel>(parameters);
      }
    }
  }

  export interface Params$Resource$Sites$Channels$Create
    extends StandardParameters {
    /**
     * Required. Immutable. A unique ID within the site that identifies the channel.
     */
    channelId?: string;
    /**
     * Required. The site in which to create this channel, in the format: sites/ SITE_ID
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }
  export interface Params$Resource$Sites$Channels$Delete
    extends StandardParameters {
    /**
     * Required. The fully-qualified resource name for the channel, in the format: sites/SITE_ID/channels/CHANNEL_ID
     */
    name?: string;
  }
  export interface Params$Resource$Sites$Channels$Get
    extends StandardParameters {
    /**
     * Required. The fully-qualified resource name for the channel, in the format: sites/SITE_ID/channels/CHANNEL_ID
     */
    name?: string;
  }
  export interface Params$Resource$Sites$Channels$List
    extends StandardParameters {
    /**
     * The maximum number of channels to return. The service may return a lower number if fewer channels exist than this maximum number. If unspecified, defaults to 10. The maximum value is 100; values above 100 will be coerced to 100.
     */
    pageSize?: number;
    /**
     * A token from a previous call to `ListChannels` that tells the server where to resume listing.
     */
    pageToken?: string;
    /**
     * Required. The site for which to list channels, in the format: sites/SITE_ID
     */
    parent?: string;
  }
  export interface Params$Resource$Sites$Channels$Patch
    extends StandardParameters {
    /**
     * The fully-qualified resource name for the channel, in the format: sites/ SITE_ID/channels/CHANNEL_ID
     */
    name?: string;
    /**
     * A comma-separated list of fields to be updated in this request.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }

  export class Resource$Sites$Channels$Releases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.channels.releases.create({
     *     // Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     *     parent: 'sites/my-site/channels/my-channel',
     *     //  The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     *     versionName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "message": "my_message",
     *       //   "name": "my_name",
     *       //   "releaseTime": "my_releaseTime",
     *       //   "releaseUser": {},
     *       //   "type": "my_type",
     *       //   "version": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "message": "my_message",
     *   //   "name": "my_name",
     *   //   "releaseTime": "my_releaseTime",
     *   //   "releaseUser": {},
     *   //   "type": "my_type",
     *   //   "version": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Sites$Channels$Releases$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Sites$Channels$Releases$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Release>>;
    create(
      params: Params$Resource$Sites$Channels$Releases$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Sites$Channels$Releases$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Release>,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    create(
      params: Params$Resource$Sites$Channels$Releases$Create,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    create(callback: BodyResponseCallback<Schema$Release>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Sites$Channels$Releases$Create
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
        {}) as Params$Resource$Sites$Channels$Releases$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Channels$Releases$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/releases').replace(
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
        createAPIRequest<Schema$Release>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Release>(parameters);
      }
    }

    /**
     * Gets the specified release for a site or channel. When used to get a release for a site, this can get releases for both the default `live` channel and any active preview channels for the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.channels.releases.get({
     *     // Required. The fully-qualified resource name for the Hosting release, in either of the following formats: - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID - sites/SITE_ID/releases/RELEASE_ID
     *     name: 'sites/my-site/channels/my-channel/releases/my-release',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "message": "my_message",
     *   //   "name": "my_name",
     *   //   "releaseTime": "my_releaseTime",
     *   //   "releaseUser": {},
     *   //   "type": "my_type",
     *   //   "version": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Sites$Channels$Releases$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Sites$Channels$Releases$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Release>>;
    get(
      params: Params$Resource$Sites$Channels$Releases$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Sites$Channels$Releases$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Release>,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    get(
      params: Params$Resource$Sites$Channels$Releases$Get,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    get(callback: BodyResponseCallback<Schema$Release>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Sites$Channels$Releases$Get
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
        {}) as Params$Resource$Sites$Channels$Releases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Channels$Releases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.channels.releases.list({
     *     // The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100.
     *     pageSize: 'placeholder-value',
     *     // A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing.
     *     pageToken: 'placeholder-value',
     *     // Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     *     parent: 'sites/my-site/channels/my-channel',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "releases": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Sites$Channels$Releases$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Sites$Channels$Releases$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListReleasesResponse>>;
    list(
      params: Params$Resource$Sites$Channels$Releases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Sites$Channels$Releases$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReleasesResponse>,
      callback: BodyResponseCallback<Schema$ListReleasesResponse>
    ): void;
    list(
      params: Params$Resource$Sites$Channels$Releases$List,
      callback: BodyResponseCallback<Schema$ListReleasesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReleasesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Sites$Channels$Releases$List
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
        {}) as Params$Resource$Sites$Channels$Releases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Channels$Releases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/releases').replace(
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

  export interface Params$Resource$Sites$Channels$Releases$Create
    extends StandardParameters {
    /**
     * Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     */
    parent?: string;
    /**
     *  The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     */
    versionName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Release;
  }
  export interface Params$Resource$Sites$Channels$Releases$Get
    extends StandardParameters {
    /**
     * Required. The fully-qualified resource name for the Hosting release, in either of the following formats: - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID - sites/SITE_ID/releases/RELEASE_ID
     */
    name?: string;
  }
  export interface Params$Resource$Sites$Channels$Releases$List
    extends StandardParameters {
    /**
     * The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100.
     */
    pageSize?: number;
    /**
     * A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing.
     */
    pageToken?: string;
    /**
     * Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     */
    parent?: string;
  }

  export class Resource$Sites$Domains {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a domain mapping on the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.domains.create({
     *     // Required. The parent to create the domain association for, in the format: sites/site-name
     *     parent: 'sites/my-site',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "domainName": "my_domainName",
     *       //   "domainRedirect": {},
     *       //   "provisioning": {},
     *       //   "site": "my_site",
     *       //   "status": "my_status",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domainName": "my_domainName",
     *   //   "domainRedirect": {},
     *   //   "provisioning": {},
     *   //   "site": "my_site",
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
    create(
      params: Params$Resource$Sites$Domains$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Sites$Domains$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Domain>>;
    create(
      params: Params$Resource$Sites$Domains$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Sites$Domains$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Domain>,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    create(
      params: Params$Resource$Sites$Domains$Create,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    create(callback: BodyResponseCallback<Schema$Domain>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Sites$Domains$Create
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Domain>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Domains$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Domains$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/domains').replace(
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
        createAPIRequest<Schema$Domain>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Domain>(parameters);
      }
    }

    /**
     * Deletes the existing domain mapping on the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.domains.delete({
     *     // Required. The name of the domain association to delete.
     *     name: 'sites/my-site/domains/my-domain',
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
      params: Params$Resource$Sites$Domains$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Sites$Domains$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Sites$Domains$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Sites$Domains$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Sites$Domains$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Sites$Domains$Delete
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
        {}) as Params$Resource$Sites$Domains$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Domains$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets a domain mapping on the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.domains.get({
     *     // Required. The name of the domain configuration to get.
     *     name: 'sites/my-site/domains/my-domain',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domainName": "my_domainName",
     *   //   "domainRedirect": {},
     *   //   "provisioning": {},
     *   //   "site": "my_site",
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
    get(
      params: Params$Resource$Sites$Domains$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Sites$Domains$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Domain>>;
    get(
      params: Params$Resource$Sites$Domains$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Sites$Domains$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Domain>,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    get(
      params: Params$Resource$Sites$Domains$Get,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    get(callback: BodyResponseCallback<Schema$Domain>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Sites$Domains$Get
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Domain>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Domains$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Domains$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Domain>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Domain>(parameters);
      }
    }

    /**
     * Lists the domains for the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.domains.list({
     *     // The page size to return. Defaults to 50.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token from a previous request, if provided.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent for which to list domains, in the format: sites/ site-name
     *     parent: 'sites/my-site',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domains": [],
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
      params: Params$Resource$Sites$Domains$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Sites$Domains$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDomainsResponse>>;
    list(
      params: Params$Resource$Sites$Domains$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Sites$Domains$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListDomainsResponse>,
      callback: BodyResponseCallback<Schema$ListDomainsResponse>
    ): void;
    list(
      params: Params$Resource$Sites$Domains$List,
      callback: BodyResponseCallback<Schema$ListDomainsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDomainsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Sites$Domains$List
        | BodyResponseCallback<Schema$ListDomainsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDomainsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDomainsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDomainsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Domains$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Domains$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/domains').replace(
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
        createAPIRequest<Schema$ListDomainsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDomainsResponse>(parameters);
      }
    }

    /**
     * Updates the specified domain mapping, creating the mapping as if it does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.domains.update({
     *     // Required. The name of the domain association to update or create, if an association doesn't already exist.
     *     name: 'sites/my-site/domains/my-domain',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "domainName": "my_domainName",
     *       //   "domainRedirect": {},
     *       //   "provisioning": {},
     *       //   "site": "my_site",
     *       //   "status": "my_status",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domainName": "my_domainName",
     *   //   "domainRedirect": {},
     *   //   "provisioning": {},
     *   //   "site": "my_site",
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
    update(
      params: Params$Resource$Sites$Domains$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Sites$Domains$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Domain>>;
    update(
      params: Params$Resource$Sites$Domains$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Sites$Domains$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Domain>,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    update(
      params: Params$Resource$Sites$Domains$Update,
      callback: BodyResponseCallback<Schema$Domain>
    ): void;
    update(callback: BodyResponseCallback<Schema$Domain>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Sites$Domains$Update
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Domain>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Domain>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Domains$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Domains$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
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
        createAPIRequest<Schema$Domain>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Domain>(parameters);
      }
    }
  }

  export interface Params$Resource$Sites$Domains$Create
    extends StandardParameters {
    /**
     * Required. The parent to create the domain association for, in the format: sites/site-name
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Domain;
  }
  export interface Params$Resource$Sites$Domains$Delete
    extends StandardParameters {
    /**
     * Required. The name of the domain association to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Sites$Domains$Get
    extends StandardParameters {
    /**
     * Required. The name of the domain configuration to get.
     */
    name?: string;
  }
  export interface Params$Resource$Sites$Domains$List
    extends StandardParameters {
    /**
     * The page size to return. Defaults to 50.
     */
    pageSize?: number;
    /**
     * The next_page_token from a previous request, if provided.
     */
    pageToken?: string;
    /**
     * Required. The parent for which to list domains, in the format: sites/ site-name
     */
    parent?: string;
  }
  export interface Params$Resource$Sites$Domains$Update
    extends StandardParameters {
    /**
     * Required. The name of the domain association to update or create, if an association doesn't already exist.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Domain;
  }

  export class Resource$Sites$Releases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.releases.create({
     *     // Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     *     parent: 'sites/my-site',
     *     //  The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     *     versionName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "message": "my_message",
     *       //   "name": "my_name",
     *       //   "releaseTime": "my_releaseTime",
     *       //   "releaseUser": {},
     *       //   "type": "my_type",
     *       //   "version": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "message": "my_message",
     *   //   "name": "my_name",
     *   //   "releaseTime": "my_releaseTime",
     *   //   "releaseUser": {},
     *   //   "type": "my_type",
     *   //   "version": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Sites$Releases$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Sites$Releases$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Release>>;
    create(
      params: Params$Resource$Sites$Releases$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Sites$Releases$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Release>,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    create(
      params: Params$Resource$Sites$Releases$Create,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    create(callback: BodyResponseCallback<Schema$Release>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Sites$Releases$Create
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
        {}) as Params$Resource$Sites$Releases$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Releases$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/releases').replace(
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
        createAPIRequest<Schema$Release>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Release>(parameters);
      }
    }

    /**
     * Gets the specified release for a site or channel. When used to get a release for a site, this can get releases for both the default `live` channel and any active preview channels for the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.releases.get({
     *     // Required. The fully-qualified resource name for the Hosting release, in either of the following formats: - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID - sites/SITE_ID/releases/RELEASE_ID
     *     name: 'sites/my-site/releases/my-release',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "message": "my_message",
     *   //   "name": "my_name",
     *   //   "releaseTime": "my_releaseTime",
     *   //   "releaseUser": {},
     *   //   "type": "my_type",
     *   //   "version": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Sites$Releases$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Sites$Releases$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Release>>;
    get(
      params: Params$Resource$Sites$Releases$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Sites$Releases$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Release>,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    get(
      params: Params$Resource$Sites$Releases$Get,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    get(callback: BodyResponseCallback<Schema$Release>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Sites$Releases$Get
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
        {}) as Params$Resource$Sites$Releases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Releases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.releases.list({
     *     // The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100.
     *     pageSize: 'placeholder-value',
     *     // A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing.
     *     pageToken: 'placeholder-value',
     *     // Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     *     parent: 'sites/my-site',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "releases": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Sites$Releases$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Sites$Releases$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListReleasesResponse>>;
    list(
      params: Params$Resource$Sites$Releases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Sites$Releases$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReleasesResponse>,
      callback: BodyResponseCallback<Schema$ListReleasesResponse>
    ): void;
    list(
      params: Params$Resource$Sites$Releases$List,
      callback: BodyResponseCallback<Schema$ListReleasesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReleasesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Sites$Releases$List
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
        {}) as Params$Resource$Sites$Releases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Releases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/releases').replace(
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

  export interface Params$Resource$Sites$Releases$Create
    extends StandardParameters {
    /**
     * Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     */
    parent?: string;
    /**
     *  The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     */
    versionName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Release;
  }
  export interface Params$Resource$Sites$Releases$Get
    extends StandardParameters {
    /**
     * Required. The fully-qualified resource name for the Hosting release, in either of the following formats: - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID - sites/SITE_ID/releases/RELEASE_ID
     */
    name?: string;
  }
  export interface Params$Resource$Sites$Releases$List
    extends StandardParameters {
    /**
     * The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100.
     */
    pageSize?: number;
    /**
     * A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing.
     */
    pageToken?: string;
    /**
     * Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     */
    parent?: string;
  }

  export class Resource$Sites$Versions {
    context: APIRequestContext;
    files: Resource$Sites$Versions$Files;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.files = new Resource$Sites$Versions$Files(this.context);
    }

    /**
     * Creates a new version on the specified target site using the content of the specified version.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.versions.clone({
     *     // Required. The target site for the cloned version, in the format: sites/ SITE_ID
     *     parent: 'sites/my-site',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "exclude": {},
     *       //   "finalize": false,
     *       //   "include": {},
     *       //   "sourceVersion": "my_sourceVersion"
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
    clone(
      params: Params$Resource$Sites$Versions$Clone,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    clone(
      params?: Params$Resource$Sites$Versions$Clone,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    clone(
      params: Params$Resource$Sites$Versions$Clone,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    clone(
      params: Params$Resource$Sites$Versions$Clone,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    clone(
      params: Params$Resource$Sites$Versions$Clone,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    clone(callback: BodyResponseCallback<Schema$Operation>): void;
    clone(
      paramsOrCallback?:
        | Params$Resource$Sites$Versions$Clone
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
        {}) as Params$Resource$Sites$Versions$Clone;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Versions$Clone;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/versions:clone').replace(
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
     * Creates a new version for the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.versions.create({
     *     // Required. The site in which to create the version, in the format: sites/ SITE_ID
     *     parent: 'sites/my-site',
     *     // The self-reported size of the version. This value is used for a pre-emptive quota check for legacy version uploads.
     *     sizeBytes: 'placeholder-value',
     *     // A unique id for the new version. This is was only specified for legacy version creations, and should be blank.
     *     versionId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "config": {},
     *       //   "createTime": "my_createTime",
     *       //   "createUser": {},
     *       //   "deleteTime": "my_deleteTime",
     *       //   "deleteUser": {},
     *       //   "fileCount": "my_fileCount",
     *       //   "finalizeTime": "my_finalizeTime",
     *       //   "finalizeUser": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "status": "my_status",
     *       //   "versionBytes": "my_versionBytes"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "config": {},
     *   //   "createTime": "my_createTime",
     *   //   "createUser": {},
     *   //   "deleteTime": "my_deleteTime",
     *   //   "deleteUser": {},
     *   //   "fileCount": "my_fileCount",
     *   //   "finalizeTime": "my_finalizeTime",
     *   //   "finalizeUser": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "status": "my_status",
     *   //   "versionBytes": "my_versionBytes"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Sites$Versions$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Sites$Versions$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Version>>;
    create(
      params: Params$Resource$Sites$Versions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Sites$Versions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Version>,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    create(
      params: Params$Resource$Sites$Versions$Create,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    create(callback: BodyResponseCallback<Schema$Version>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Sites$Versions$Create
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Version>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Versions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Versions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/versions').replace(
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
        createAPIRequest<Schema$Version>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Version>(parameters);
      }
    }

    /**
     * Deletes the specified version.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.versions.delete({
     *     // Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID
     *     name: 'sites/my-site/versions/my-version',
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
      params: Params$Resource$Sites$Versions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Sites$Versions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Sites$Versions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Sites$Versions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Sites$Versions$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Sites$Versions$Delete
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
        {}) as Params$Resource$Sites$Versions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Versions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.versions.get({
     *     // Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID
     *     name: 'sites/my-site/versions/my-version',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "config": {},
     *   //   "createTime": "my_createTime",
     *   //   "createUser": {},
     *   //   "deleteTime": "my_deleteTime",
     *   //   "deleteUser": {},
     *   //   "fileCount": "my_fileCount",
     *   //   "finalizeTime": "my_finalizeTime",
     *   //   "finalizeUser": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "status": "my_status",
     *   //   "versionBytes": "my_versionBytes"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Sites$Versions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Sites$Versions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Version>>;
    get(
      params: Params$Resource$Sites$Versions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Sites$Versions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Version>,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    get(
      params: Params$Resource$Sites$Versions$Get,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    get(callback: BodyResponseCallback<Schema$Version>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Sites$Versions$Get
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Version>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Versions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Versions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Version>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Version>(parameters);
      }
    }

    /**
     * Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.versions.list({
     *     // A filter string used to return a subset of versions in the response. The currently supported fields for filtering are: `name`, `status`, and `create_time`. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).
     *     filter: 'placeholder-value',
     *     // The maximum number of versions to return. The service may return a lower number if fewer versions exist than this maximum number. If unspecified, defaults to 25. The maximum value is 100; values above 100 will be coerced to 100.
     *     pageSize: 'placeholder-value',
     *     // A token from a previous call to `ListVersions` that tells the server where to resume listing.
     *     pageToken: 'placeholder-value',
     *     // Required. The site or channel for which to list versions, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     *     parent: 'sites/my-site',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "versions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Sites$Versions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Sites$Versions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListVersionsResponse>>;
    list(
      params: Params$Resource$Sites$Versions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Sites$Versions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVersionsResponse>,
      callback: BodyResponseCallback<Schema$ListVersionsResponse>
    ): void;
    list(
      params: Params$Resource$Sites$Versions$List,
      callback: BodyResponseCallback<Schema$ListVersionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListVersionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Sites$Versions$List
        | BodyResponseCallback<Schema$ListVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListVersionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Versions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Versions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/versions').replace(
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
        createAPIRequest<Schema$ListVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListVersionsResponse>(parameters);
      }
    }

    /**
     *  Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.versions.patch({
     *     // The fully-qualified resource name for the version, in the format: sites/ SITE_ID/versions/VERSION_ID This name is provided in the response body when you call [`CreateVersion`](sites.versions/create).
     *     name: 'sites/my-site/versions/my-version',
     *     // A set of field names from your [version](../sites.versions) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`status`](../sites.versions#Version.FIELDS.status) will be used.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "config": {},
     *       //   "createTime": "my_createTime",
     *       //   "createUser": {},
     *       //   "deleteTime": "my_deleteTime",
     *       //   "deleteUser": {},
     *       //   "fileCount": "my_fileCount",
     *       //   "finalizeTime": "my_finalizeTime",
     *       //   "finalizeUser": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "status": "my_status",
     *       //   "versionBytes": "my_versionBytes"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "config": {},
     *   //   "createTime": "my_createTime",
     *   //   "createUser": {},
     *   //   "deleteTime": "my_deleteTime",
     *   //   "deleteUser": {},
     *   //   "fileCount": "my_fileCount",
     *   //   "finalizeTime": "my_finalizeTime",
     *   //   "finalizeUser": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "status": "my_status",
     *   //   "versionBytes": "my_versionBytes"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Sites$Versions$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Sites$Versions$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Version>>;
    patch(
      params: Params$Resource$Sites$Versions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Sites$Versions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Version>,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    patch(
      params: Params$Resource$Sites$Versions$Patch,
      callback: BodyResponseCallback<Schema$Version>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Version>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Sites$Versions$Patch
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Version>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Version>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Versions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Versions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Version>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Version>(parameters);
      }
    }

    /**
     *  Adds content files to the specified version. Each file must be under 2 GB.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/firebase',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.versions.populateFiles({
     *     // Required. The version to which to add files, in the format: sites/SITE_ID /versions/VERSION_ID
     *     parent: 'sites/my-site/versions/my-version',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "files": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "uploadRequiredHashes": [],
     *   //   "uploadUrl": "my_uploadUrl"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    populateFiles(
      params: Params$Resource$Sites$Versions$Populatefiles,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    populateFiles(
      params?: Params$Resource$Sites$Versions$Populatefiles,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PopulateVersionFilesResponse>>;
    populateFiles(
      params: Params$Resource$Sites$Versions$Populatefiles,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    populateFiles(
      params: Params$Resource$Sites$Versions$Populatefiles,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PopulateVersionFilesResponse>,
      callback: BodyResponseCallback<Schema$PopulateVersionFilesResponse>
    ): void;
    populateFiles(
      params: Params$Resource$Sites$Versions$Populatefiles,
      callback: BodyResponseCallback<Schema$PopulateVersionFilesResponse>
    ): void;
    populateFiles(
      callback: BodyResponseCallback<Schema$PopulateVersionFilesResponse>
    ): void;
    populateFiles(
      paramsOrCallback?:
        | Params$Resource$Sites$Versions$Populatefiles
        | BodyResponseCallback<Schema$PopulateVersionFilesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PopulateVersionFilesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PopulateVersionFilesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PopulateVersionFilesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Versions$Populatefiles;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Versions$Populatefiles;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}:populateFiles').replace(
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
        createAPIRequest<Schema$PopulateVersionFilesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PopulateVersionFilesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Sites$Versions$Clone
    extends StandardParameters {
    /**
     * Required. The target site for the cloned version, in the format: sites/ SITE_ID
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CloneVersionRequest;
  }
  export interface Params$Resource$Sites$Versions$Create
    extends StandardParameters {
    /**
     * Required. The site in which to create the version, in the format: sites/ SITE_ID
     */
    parent?: string;
    /**
     * The self-reported size of the version. This value is used for a pre-emptive quota check for legacy version uploads.
     */
    sizeBytes?: string;
    /**
     * A unique id for the new version. This is was only specified for legacy version creations, and should be blank.
     */
    versionId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Version;
  }
  export interface Params$Resource$Sites$Versions$Delete
    extends StandardParameters {
    /**
     * Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID
     */
    name?: string;
  }
  export interface Params$Resource$Sites$Versions$Get
    extends StandardParameters {
    /**
     * Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID
     */
    name?: string;
  }
  export interface Params$Resource$Sites$Versions$List
    extends StandardParameters {
    /**
     * A filter string used to return a subset of versions in the response. The currently supported fields for filtering are: `name`, `status`, and `create_time`. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * The maximum number of versions to return. The service may return a lower number if fewer versions exist than this maximum number. If unspecified, defaults to 25. The maximum value is 100; values above 100 will be coerced to 100.
     */
    pageSize?: number;
    /**
     * A token from a previous call to `ListVersions` that tells the server where to resume listing.
     */
    pageToken?: string;
    /**
     * Required. The site or channel for which to list versions, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     */
    parent?: string;
  }
  export interface Params$Resource$Sites$Versions$Patch
    extends StandardParameters {
    /**
     * The fully-qualified resource name for the version, in the format: sites/ SITE_ID/versions/VERSION_ID This name is provided in the response body when you call [`CreateVersion`](sites.versions/create).
     */
    name?: string;
    /**
     * A set of field names from your [version](../sites.versions) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`status`](../sites.versions#Version.FIELDS.status) will be used.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Version;
  }
  export interface Params$Resource$Sites$Versions$Populatefiles
    extends StandardParameters {
    /**
     * Required. The version to which to add files, in the format: sites/SITE_ID /versions/VERSION_ID
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PopulateVersionFilesRequest;
  }

  export class Resource$Sites$Versions$Files {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the remaining files to be uploaded for the specified version.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firebasehosting.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const firebasehosting = google.firebasehosting('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *       'https://www.googleapis.com/auth/firebase',
     *       'https://www.googleapis.com/auth/firebase.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firebasehosting.sites.versions.files.list({
     *     // The maximum number of version files to return. The service may return a lower number if fewer version files exist than this maximum number. If unspecified, defaults to 1000.
     *     pageSize: 'placeholder-value',
     *     // A token from a previous call to `ListVersionFiles` that tells the server where to resume listing.
     *     pageToken: 'placeholder-value',
     *     // Required. The version for which to list files, in the format: sites/SITE_ID /versions/VERSION_ID
     *     parent: 'sites/my-site/versions/my-version',
     *     //  The type of files that should be listed for the specified version.
     *     status: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "files": [],
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
      params: Params$Resource$Sites$Versions$Files$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Sites$Versions$Files$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListVersionFilesResponse>>;
    list(
      params: Params$Resource$Sites$Versions$Files$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Sites$Versions$Files$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVersionFilesResponse>,
      callback: BodyResponseCallback<Schema$ListVersionFilesResponse>
    ): void;
    list(
      params: Params$Resource$Sites$Versions$Files$List,
      callback: BodyResponseCallback<Schema$ListVersionFilesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListVersionFilesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Sites$Versions$Files$List
        | BodyResponseCallback<Schema$ListVersionFilesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVersionFilesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVersionFilesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListVersionFilesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sites$Versions$Files$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Versions$Files$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://firebasehosting.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/files').replace(
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
        createAPIRequest<Schema$ListVersionFilesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListVersionFilesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Sites$Versions$Files$List
    extends StandardParameters {
    /**
     * The maximum number of version files to return. The service may return a lower number if fewer version files exist than this maximum number. If unspecified, defaults to 1000.
     */
    pageSize?: number;
    /**
     * A token from a previous call to `ListVersionFiles` that tells the server where to resume listing.
     */
    pageToken?: string;
    /**
     * Required. The version for which to list files, in the format: sites/SITE_ID /versions/VERSION_ID
     */
    parent?: string;
    /**
     *  The type of files that should be listed for the specified version.
     */
    status?: string;
  }
}
