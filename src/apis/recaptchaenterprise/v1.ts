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

export namespace recaptchaenterprise_v1 {
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
   * reCAPTCHA Enterprise API
   *
   * Help protect your website from fraudulent activity, spam, and abuse without creating friction.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const recaptchaenterprise = google.recaptchaenterprise('v1');
   * ```
   */
  export class Recaptchaenterprise {
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
   * Account defender risk assessment.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment {
    /**
     * Output only. Labels for this request.
     */
    labels?: string[] | null;
  }
  /**
   * Information about account verification, used for identity verification.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo {
    /**
     * Optional. Endpoints that can be used for identity verification.
     */
    endpoints?: Schema$GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo[];
    /**
     * Optional. Language code preference for the verification message, set as a IETF BCP 47 language code.
     */
    languageCode?: string | null;
    /**
     * Output only. Result of the latest account verification challenge.
     */
    latestVerificationResult?: string | null;
    /**
     * Username of the account that is being verified. Deprecated. Customers should now provide the `account_id` field in `event.user_info`.
     */
    username?: string | null;
  }
  /**
   * The AddIpOverride request message.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1AddIpOverrideRequest {
    /**
     * Required. IP override added to the key.
     */
    ipOverrideData?: Schema$GoogleCloudRecaptchaenterpriseV1IpOverrideData;
  }
  /**
   * Response for AddIpOverride.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1AddIpOverrideResponse {}
  /**
   * Settings specific to keys that can be used by Android apps.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1AndroidKeySettings {
    /**
     * Optional. If set to true, allowed_package_names are not enforced.
     */
    allowAllPackageNames?: boolean | null;
    /**
     * Optional. Android package names of apps allowed to use the key. Example: 'com.companyname.appname'
     */
    allowedPackageNames?: string[] | null;
    /**
     * Optional. Set to true for keys that are used in an Android application that is available for download in app stores in addition to the Google Play Store.
     */
    supportNonGoogleAppStoreDistribution?: boolean | null;
  }
  /**
   * The request message to annotate an Assessment.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest {
    /**
     * Optional. A stable account identifier to apply to the assessment. This is an alternative to setting `account_id` in `CreateAssessment`, for example when a stable account identifier is not yet known in the initial request.
     */
    accountId?: string | null;
    /**
     * Optional. The annotation that is assigned to the Event. This field can be left empty to provide reasons that apply to an event without concluding whether the event is legitimate or fraudulent.
     */
    annotation?: string | null;
    /**
     * Optional. A stable hashed account identifier to apply to the assessment. This is an alternative to setting `hashed_account_id` in `CreateAssessment`, for example when a stable account identifier is not yet known in the initial request.
     */
    hashedAccountId?: string | null;
    /**
     * Optional. Reasons for the annotation that are assigned to the event.
     */
    reasons?: string[] | null;
    /**
     * Optional. If the assessment is part of a payment transaction, provide details on payment lifecycle events that occur in the transaction.
     */
    transactionEvent?: Schema$GoogleCloudRecaptchaenterpriseV1TransactionEvent;
  }
  /**
   * Empty response for AnnotateAssessment.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse {}
  /**
   * Contains fields that are required to perform Apple-specific integrity checks.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1AppleDeveloperId {
    /**
     * Required. The Apple developer key ID (10-character string).
     */
    keyId?: string | null;
    /**
     * Required. Input only. A private key (downloaded as a text file with a .p8 file extension) generated for your Apple Developer account. Ensure that Apple DeviceCheck is enabled for the private key.
     */
    privateKey?: string | null;
    /**
     * Required. The Apple team ID (10-character string) owning the provisioning profile used to build your application.
     */
    teamId?: string | null;
  }
  /**
   * A reCAPTCHA Enterprise assessment resource.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1Assessment {
    /**
     * Output only. Assessment returned by account defender when an account identifier is provided.
     */
    accountDefenderAssessment?: Schema$GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment;
    /**
     * Optional. Account verification information for identity verification. The assessment event must include a token and site key to use this feature.
     */
    accountVerification?: Schema$GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo;
    /**
     * Optional. The environment creating the assessment. This describes your environment (the system invoking CreateAssessment), NOT the environment of your user.
     */
    assessmentEnvironment?: Schema$GoogleCloudRecaptchaenterpriseV1AssessmentEnvironment;
    /**
     * Optional. The event being assessed.
     */
    event?: Schema$GoogleCloudRecaptchaenterpriseV1Event;
    /**
     * Output only. Assessment returned when firewall policies belonging to the project are evaluated using the field firewall_policy_evaluation.
     */
    firewallPolicyAssessment?: Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment;
    /**
     * Output only. Assessment returned by Fraud Prevention when TransactionData is provided.
     */
    fraudPreventionAssessment?: Schema$GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment;
    /**
     * Output only. Fraud Signals specific to the users involved in a payment transaction.
     */
    fraudSignals?: Schema$GoogleCloudRecaptchaenterpriseV1FraudSignals;
    /**
     * Output only. Identifier. The resource name for the Assessment in the format `projects/{project\}/assessments/{assessment\}`.
     */
    name?: string | null;
    /**
     * Output only. Assessment returned when a site key, a token, and a phone number as `user_id` are provided. Account defender and SMS toll fraud protection need to be enabled.
     */
    phoneFraudAssessment?: Schema$GoogleCloudRecaptchaenterpriseV1PhoneFraudAssessment;
    /**
     * Optional. The private password leak verification field contains the parameters that are used to to check for leaks privately without sharing user credentials.
     */
    privatePasswordLeakVerification?: Schema$GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification;
    /**
     * Output only. The risk analysis result for the event being assessed.
     */
    riskAnalysis?: Schema$GoogleCloudRecaptchaenterpriseV1RiskAnalysis;
    /**
     * Output only. Properties of the provided event token.
     */
    tokenProperties?: Schema$GoogleCloudRecaptchaenterpriseV1TokenProperties;
  }
  /**
   * The environment creating the assessment. This describes your environment (the system invoking CreateAssessment), NOT the environment of your user.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1AssessmentEnvironment {
    /**
     * Optional. Identifies the client module initiating the CreateAssessment request. This can be the link to the client module's project. Examples include: - "github.com/GoogleCloudPlatform/recaptcha-enterprise-google-tag-manager" - "cloud.google.com/recaptcha/docs/implement-waf-akamai" - "cloud.google.com/recaptcha/docs/implement-waf-cloudflare" - "wordpress.org/plugins/recaptcha-something"
     */
    client?: string | null;
    /**
     * Optional. The version of the client module. For example, "1.0.0".
     */
    version?: string | null;
  }
  /**
   * Bot information and metadata.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1Bot {
    /**
     * Optional. Enumerated field representing the type of bot.
     */
    botType?: string | null;
    /**
     * Optional. Enumerated string value that indicates the identity of the bot, formatted in kebab-case.
     */
    name?: string | null;
  }
  /**
   * Metrics related to challenges.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1ChallengeMetrics {
    /**
     * Count of submitted challenge solutions that were incorrect or otherwise deemed suspicious such that a subsequent challenge was triggered.
     */
    failedCount?: string | null;
    /**
     * Count of nocaptchas (successful verification without a challenge) issued.
     */
    nocaptchaCount?: string | null;
    /**
     * Count of reCAPTCHA checkboxes or badges rendered. This is mostly equivalent to a count of pageloads for pages that include reCAPTCHA.
     */
    pageloadCount?: string | null;
    /**
     * Count of nocaptchas (successful verification without a challenge) plus submitted challenge solutions that were correct and resulted in verification.
     */
    passedCount?: string | null;
  }
  /**
   * Information about a verification endpoint that can be used for 2FA.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo {
    /**
     * Email address for which to trigger a verification request.
     */
    emailAddress?: string | null;
    /**
     * Output only. Timestamp of the last successful verification for the endpoint, if any.
     */
    lastVerificationTime?: string | null;
    /**
     * Phone number for which to trigger a verification request. Should be given in E.164 format.
     */
    phoneNumber?: string | null;
    /**
     * Output only. Token to provide to the client to trigger endpoint verification. It must be used within 15 minutes.
     */
    requestToken?: string | null;
  }
  /**
   * The event being assessed.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1Event {
    /**
     * Optional. The expected action for this type of event. This should be the same action provided at token generation time on client-side platforms already integrated with recaptcha enterprise.
     */
    expectedAction?: string | null;
    /**
     * Optional. Flag for a reCAPTCHA express request for an assessment without a token. If enabled, `site_key` must reference an Express site key.
     */
    express?: boolean | null;
    /**
     * Optional. Flag for enabling firewall policy config assessment. If this flag is enabled, the firewall policy is evaluated and a suggested firewall action is returned in the response.
     */
    firewallPolicyEvaluation?: boolean | null;
    /**
     * Optional. The Fraud Prevention setting for this assessment.
     */
    fraudPrevention?: string | null;
    /**
     * Optional. Deprecated: use `user_info.account_id` instead. Unique stable hashed user identifier for the request. The identifier must be hashed using hmac-sha256 with stable secret.
     */
    hashedAccountId?: string | null;
    /**
     * Optional. HTTP header information about the request.
     */
    headers?: string[] | null;
    /**
     * Optional. JA3 fingerprint for SSL clients. To learn how to compute this fingerprint, please refer to https://github.com/salesforce/ja3.
     */
    ja3?: string | null;
    /**
     * Optional. JA4 fingerprint for SSL clients. To learn how to compute this fingerprint, please refer to https://github.com/FoxIO-LLC/ja4.
     */
    ja4?: string | null;
    /**
     * Optional. The URI resource the user requested that triggered an assessment.
     */
    requestedUri?: string | null;
    /**
     * Optional. The site key that was used to invoke reCAPTCHA Enterprise on your site and generate the token.
     */
    siteKey?: string | null;
    /**
     * Optional. The user response token provided by the reCAPTCHA Enterprise client-side integration on your site.
     */
    token?: string | null;
    /**
     * Optional. Data describing a payment transaction to be assessed. Sending this data enables reCAPTCHA Enterprise Fraud Prevention and the FraudPreventionAssessment component in the response.
     */
    transactionData?: Schema$GoogleCloudRecaptchaenterpriseV1TransactionData;
    /**
     * Optional. The user agent present in the request from the user's device related to this event.
     */
    userAgent?: string | null;
    /**
     * Optional. Information about the user that generates this event, when they can be identified. They are often identified through the use of an account for logged-in requests or login/registration requests, or by providing user identifiers for guest actions like checkout.
     */
    userInfo?: Schema$GoogleCloudRecaptchaenterpriseV1UserInfo;
    /**
     * Optional. The IP address in the request from the user's device related to this event.
     */
    userIpAddress?: string | null;
    /**
     * Optional. Flag for running WAF token assessment. If enabled, the token must be specified, and have been created by a WAF-enabled key.
     */
    wafTokenAssessment?: boolean | null;
  }
  /**
   * Settings specific to keys that can be used for reCAPTCHA Express.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1ExpressKeySettings {}
  /**
   * An individual action. Each action represents what to do if a policy matches.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1FirewallAction {
    /**
     * The user request did not match any policy and should be allowed access to the requested resource.
     */
    allow?: Schema$GoogleCloudRecaptchaenterpriseV1FirewallActionAllowAction;
    /**
     * This action denies access to a given page. The user gets an HTTP error code.
     */
    block?: Schema$GoogleCloudRecaptchaenterpriseV1FirewallActionBlockAction;
    /**
     * This action injects reCAPTCHA JavaScript code into the HTML page returned by the site backend.
     */
    includeRecaptchaScript?: Schema$GoogleCloudRecaptchaenterpriseV1FirewallActionIncludeRecaptchaScriptAction;
    /**
     * This action redirects the request to a reCAPTCHA interstitial to attach a token.
     */
    redirect?: Schema$GoogleCloudRecaptchaenterpriseV1FirewallActionRedirectAction;
    /**
     * This action sets a custom header but allow the request to continue to the customer backend.
     */
    setHeader?: Schema$GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction;
    /**
     * This action transparently serves a different page to an offending user.
     */
    substitute?: Schema$GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction;
  }
  /**
   * An allow action continues processing a request unimpeded.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1FirewallActionAllowAction {}
  /**
   * A block action serves an HTTP error code a prevents the request from hitting the backend.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1FirewallActionBlockAction {}
  /**
   * An include reCAPTCHA script action involves injecting reCAPTCHA JavaScript code into the HTML returned by the site backend. This reCAPTCHA script is tasked with collecting user signals on the requested web page, issuing tokens as a cookie within the site domain, and enabling their utilization in subsequent page requests.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1FirewallActionIncludeRecaptchaScriptAction {}
  /**
   * A redirect action returns a 307 (temporary redirect) response, pointing the user to a reCAPTCHA interstitial page to attach a token.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1FirewallActionRedirectAction {}
  /**
   * A set header action sets a header and forwards the request to the backend. This can be used to trigger custom protection implemented on the backend.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction {
    /**
     * Optional. The header key to set in the request to the backend server.
     */
    key?: string | null;
    /**
     * Optional. The header value to set in the request to the backend server.
     */
    value?: string | null;
  }
  /**
   * A substitute action transparently serves a different page than the one requested.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction {
    /**
     * Optional. The address to redirect to. The target is a relative path in the current host. Example: "/blog/404.html".
     */
    path?: string | null;
  }
  /**
   * A FirewallPolicy represents a single matching pattern and resulting actions to take.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy {
    /**
     * Optional. The actions that the caller should take regarding user access. There should be at most one terminal action. A terminal action is any action that forces a response, such as `AllowAction`, `BlockAction` or `SubstituteAction`. Zero or more non-terminal actions such as `SetHeader` might be specified. A single policy can contain up to 16 actions.
     */
    actions?: Schema$GoogleCloudRecaptchaenterpriseV1FirewallAction[];
    /**
     * Optional. A CEL (Common Expression Language) conditional expression that specifies if this policy applies to an incoming user request. If this condition evaluates to true and the requested path matched the path pattern, the associated actions should be executed by the caller. The condition string is checked for CEL syntax correctness on creation. For more information, see the [CEL spec](https://github.com/google/cel-spec) and its [language definition](https://github.com/google/cel-spec/blob/master/doc/langdef.md). A condition has a max length of 500 characters.
     */
    condition?: string | null;
    /**
     * Optional. A description of what this policy aims to achieve, for convenience purposes. The description can at most include 256 UTF-8 characters.
     */
    description?: string | null;
    /**
     * Identifier. The resource name for the FirewallPolicy in the format `projects/{project\}/firewallpolicies/{firewallpolicy\}`.
     */
    name?: string | null;
    /**
     * Optional. The path for which this policy applies, specified as a glob pattern. For more information on glob, see the [manual page](https://man7.org/linux/man-pages/man7/glob.7.html). A path has a max length of 200 characters.
     */
    path?: string | null;
  }
  /**
   * Policy config assessment.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment {
    /**
     * Output only. If the processing of a policy config fails, an error is populated and the firewall_policy is left empty.
     */
    error?: Schema$GoogleRpcStatus;
    /**
     * Output only. The policy that matched the request. If more than one policy may match, this is the first match. If no policy matches the incoming request, the policy field is left empty.
     */
    firewallPolicy?: Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy;
  }
  /**
   * Assessment for Fraud Prevention.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment {
    /**
     * Output only. Assessment of this transaction for behavioral trust.
     */
    behavioralTrustVerdict?: Schema$GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict;
    /**
     * Output only. Assessment of this transaction for risk of being part of a card testing attack.
     */
    cardTestingVerdict?: Schema$GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict;
    /**
     * Output only. Reasons why the transaction is probably fraudulent and received a high transaction risk score.
     */
    riskReasons?: Schema$GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentRiskReason[];
    /**
     * Output only. Assessment of this transaction for risk of a stolen instrument.
     */
    stolenInstrumentVerdict?: Schema$GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict;
    /**
     * Output only. Probability of this transaction being fraudulent. Summarizes the combined risk of attack vectors below. Values are from 0.0 (lowest) to 1.0 (highest).
     */
    transactionRisk?: number | null;
  }
  /**
   * Information about behavioral trust of the transaction.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict {
    /**
     * Output only. Probability of this transaction attempt being executed in a behaviorally trustworthy way. Values are from 0.0 (lowest) to 1.0 (highest).
     */
    trust?: number | null;
  }
  /**
   * Information about card testing fraud, where an adversary is testing fraudulently obtained cards or brute forcing their details.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict {
    /**
     * Output only. Probability of this transaction attempt being part of a card testing attack. Values are from 0.0 (lowest) to 1.0 (highest).
     */
    risk?: number | null;
  }
  /**
   * Risk reasons applicable to the Fraud Prevention assessment.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentRiskReason {
    /**
     * Output only. Risk reasons applicable to the Fraud Prevention assessment.
     */
    reason?: string | null;
  }
  /**
   * Information about stolen instrument fraud, where the user is not the legitimate owner of the instrument being used for the purchase.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict {
    /**
     * Output only. Probability of this transaction being executed with a stolen instrument. Values are from 0.0 (lowest) to 1.0 (highest).
     */
    risk?: number | null;
  }
  /**
   * Fraud signals describing users and cards involved in the transaction.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1FraudSignals {
    /**
     * Output only. Signals describing the payment card or cards used in this transaction.
     */
    cardSignals?: Schema$GoogleCloudRecaptchaenterpriseV1FraudSignalsCardSignals;
    /**
     * Output only. Signals describing the end user in this transaction.
     */
    userSignals?: Schema$GoogleCloudRecaptchaenterpriseV1FraudSignalsUserSignals;
  }
  /**
   * Signals describing the payment card used in this transaction.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1FraudSignalsCardSignals {
    /**
     * Output only. The labels for the payment card in this transaction.
     */
    cardLabels?: string[] | null;
  }
  /**
   * Signals describing the user involved in this transaction.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1FraudSignalsUserSignals {
    /**
     * Output only. This user (based on email, phone, and other identifiers) has been seen on the internet for at least this number of days.
     */
    activeDaysLowerBound?: number | null;
    /**
     * Output only. Likelihood (from 0.0 to 1.0) this user includes synthetic components in their identity, such as a randomly generated email address, temporary phone number, or fake shipping address.
     */
    syntheticRisk?: number | null;
  }
  /**
   * Settings specific to keys that can be used by iOS apps.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1IOSKeySettings {
    /**
     * Optional. If set to true, allowed_bundle_ids are not enforced.
     */
    allowAllBundleIds?: boolean | null;
    /**
     * Optional. iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'
     */
    allowedBundleIds?: string[] | null;
    /**
     * Optional. Apple Developer account details for the app that is protected by the reCAPTCHA Key. reCAPTCHA leverages platform-specific checks like Apple App Attest and Apple DeviceCheck to protect your app from abuse. Providing these fields allows reCAPTCHA to get a better assessment of the integrity of your app.
     */
    appleDeveloperId?: Schema$GoogleCloudRecaptchaenterpriseV1AppleDeveloperId;
  }
  /**
   * Information about the IP or IP range override.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1IpOverrideData {
    /**
     * Required. The IP address to override (can be IPv4, IPv6 or CIDR). The IP override must be a valid IPv4 or IPv6 address, or a CIDR range. The IP override must be a public IP address. Example of IPv4: 168.192.5.6 Example of IPv6: 2001:0000:130F:0000:0000:09C0:876A:130B Example of IPv4 with CIDR: 168.192.5.0/24 Example of IPv6 with CIDR: 2001:0DB8:1234::/48
     */
    ip?: string | null;
    /**
     * Required. Describes the type of IP override.
     */
    overrideType?: string | null;
  }
  /**
   * A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1Key {
    /**
     * Settings for keys that can be used by Android apps.
     */
    androidSettings?: Schema$GoogleCloudRecaptchaenterpriseV1AndroidKeySettings;
    /**
     * Output only. The timestamp corresponding to the creation of this key.
     */
    createTime?: string | null;
    /**
     * Required. Human-readable display name of this key. Modifiable by user.
     */
    displayName?: string | null;
    /**
     * Settings for keys that can be used by reCAPTCHA Express.
     */
    expressSettings?: Schema$GoogleCloudRecaptchaenterpriseV1ExpressKeySettings;
    /**
     * Settings for keys that can be used by iOS apps.
     */
    iosSettings?: Schema$GoogleCloudRecaptchaenterpriseV1IOSKeySettings;
    /**
     * Optional. See [Creating and managing labels] (https://cloud.google.com/recaptcha/docs/labels).
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The resource name for the Key in the format `projects/{project\}/keys/{key\}`.
     */
    name?: string | null;
    /**
     * Optional. Options for user acceptance testing.
     */
    testingOptions?: Schema$GoogleCloudRecaptchaenterpriseV1TestingOptions;
    /**
     * Optional. Settings for WAF
     */
    wafSettings?: Schema$GoogleCloudRecaptchaenterpriseV1WafSettings;
    /**
     * Settings for keys that can be used by websites.
     */
    webSettings?: Schema$GoogleCloudRecaptchaenterpriseV1WebKeySettings;
  }
  /**
   * Response to request to list firewall policies belonging to a project.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse {
    /**
     * Policy details.
     */
    firewallPolicies?: Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy[];
    /**
     * Token to retrieve the next page of results. It is set to empty if no policies remain in results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for ListIpOverrides.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1ListIpOverridesResponse {
    /**
     * IP Overrides details.
     */
    ipOverrides?: Schema$GoogleCloudRecaptchaenterpriseV1IpOverrideData[];
    /**
     * Token to retrieve the next page of results. If this field is empty, no keys remain in the results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response to request to list keys in a project.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse {
    /**
     * Key details.
     */
    keys?: Schema$GoogleCloudRecaptchaenterpriseV1Key[];
    /**
     * Token to retrieve the next page of results. It is set to empty if no keys remain in results.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response to a `ListRelatedAccountGroupMemberships` call.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The memberships listed by the query.
     */
    relatedAccountGroupMemberships?: Schema$GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership[];
  }
  /**
   * The response to a `ListRelatedAccountGroups` call.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The groups of related accounts listed by the query.
     */
    relatedAccountGroups?: Schema$GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup[];
  }
  /**
   * Metrics for a single Key.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1Metrics {
    /**
     * Metrics are continuous and in order by dates, and in the granularity of day. Only challenge-based keys (CHECKBOX, INVISIBLE) have challenge-based data.
     */
    challengeMetrics?: Schema$GoogleCloudRecaptchaenterpriseV1ChallengeMetrics[];
    /**
     * Output only. Identifier. The name of the metrics, in the format `projects/{project\}/keys/{key\}/metrics`.
     */
    name?: string | null;
    /**
     * Metrics are continuous and in order by dates, and in the granularity of day. All Key types should have score-based data.
     */
    scoreMetrics?: Schema$GoogleCloudRecaptchaenterpriseV1ScoreMetrics[];
    /**
     * Inclusive start time aligned to a day in the America/Los_Angeles (Pacific) timezone.
     */
    startTime?: string | null;
  }
  /**
   * The migrate key request message.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest {
    /**
     * Optional. If true, skips the billing check. A reCAPTCHA Enterprise key or migrated key behaves differently than a reCAPTCHA (non-Enterprise version) key when you reach a quota limit (see https://cloud.google.com/recaptcha/quotas#quota_limit). To avoid any disruption of your usage, we check that a billing account is present. If your usage of reCAPTCHA is under the free quota, you can safely skip the billing check and proceed with the migration. See https://cloud.google.com/recaptcha/docs/billing-information.
     */
    skipBillingCheck?: boolean | null;
  }
  /**
   * Assessment for Phone Fraud
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1PhoneFraudAssessment {
    /**
     * Output only. Assessment of this phone event for risk of SMS toll fraud.
     */
    smsTollFraudVerdict?: Schema$GoogleCloudRecaptchaenterpriseV1SmsTollFraudVerdict;
  }
  /**
   * Private password leak verification info.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification {
    /**
     * Output only. List of prefixes of the encrypted potential password leaks that matched the given parameters. They must be compared with the client-side decryption prefix of `reencrypted_user_credentials_hash`
     */
    encryptedLeakMatchPrefixes?: string[] | null;
    /**
     * Optional. Encrypted Scrypt hash of the canonicalized username+password. It is re-encrypted by the server and returned through `reencrypted_user_credentials_hash`.
     */
    encryptedUserCredentialsHash?: string | null;
    /**
     * Required. Exactly 26-bit prefix of the SHA-256 hash of the canonicalized username. It is used to look up password leaks associated with that hash prefix.
     */
    lookupHashPrefix?: string | null;
    /**
     * Output only. Corresponds to the re-encryption of the `encrypted_user_credentials_hash` field. It is used to match potential password leaks within `encrypted_leak_match_prefixes`.
     */
    reencryptedUserCredentialsHash?: string | null;
  }
  /**
   * A group of related accounts.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup {
    /**
     * Required. Identifier. The resource name for the related account group in the format `projects/{project\}/relatedaccountgroups/{related_account_group\}`.
     */
    name?: string | null;
  }
  /**
   * A membership in a group of related accounts.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership {
    /**
     * The unique stable account identifier of the member. The identifier corresponds to an `account_id` provided in a previous `CreateAssessment` or `AnnotateAssessment` call.
     */
    accountId?: string | null;
    /**
     * Deprecated: use `account_id` instead. The unique stable hashed account identifier of the member. The identifier corresponds to a `hashed_account_id` provided in a previous `CreateAssessment` or `AnnotateAssessment` call.
     */
    hashedAccountId?: string | null;
    /**
     * Required. Identifier. The resource name for this membership in the format `projects/{project\}/relatedaccountgroups/{relatedaccountgroup\}/memberships/{membership\}`.
     */
    name?: string | null;
  }
  /**
   * The RemoveIpOverride request message.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1RemoveIpOverrideRequest {
    /**
     * Required. IP override to be removed from the key.
     */
    ipOverrideData?: Schema$GoogleCloudRecaptchaenterpriseV1IpOverrideData;
  }
  /**
   * Response for RemoveIpOverride.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1RemoveIpOverrideResponse {}
  /**
   * The reorder firewall policies request message.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesRequest {
    /**
     * Required. A list containing all policy names, in the new order. Each name is in the format `projects/{project\}/firewallpolicies/{firewallpolicy\}`.
     */
    names?: string[] | null;
  }
  /**
   * The reorder firewall policies response message.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesResponse {}
  /**
   * Secret key is used only in legacy reCAPTCHA. It must be used in a 3rd party integration with legacy reCAPTCHA.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse {
    /**
     * The secret key (also known as shared secret) authorizes communication between your application backend and the reCAPTCHA Enterprise server to create an assessment. The secret key needs to be kept safe for security purposes.
     */
    legacySecretKey?: string | null;
  }
  /**
   * Risk analysis result for an event.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1RiskAnalysis {
    /**
     * Output only. Challenge information for POLICY_BASED_CHALLENGE and INVISIBLE keys
     */
    challenge?: string | null;
    /**
     * Output only. Extended verdict reasons to be used for experimentation only. The set of possible reasons is subject to change.
     */
    extendedVerdictReasons?: string[] | null;
    /**
     * Output only. Reasons contributing to the risk analysis verdict.
     */
    reasons?: string[] | null;
    /**
     * Output only. Legitimate event score from 0.0 to 1.0. (1.0 means very likely legitimate traffic while 0.0 means very likely non-legitimate traffic).
     */
    score?: number | null;
    /**
     * Output only. Bots with identities that have been verified by reCAPTCHA and detected in the event.
     */
    verifiedBots?: Schema$GoogleCloudRecaptchaenterpriseV1Bot[];
  }
  /**
   * Score distribution.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1ScoreDistribution {
    /**
     * Map key is score value multiplied by 100. The scores are discrete values between [0, 1]. The maximum number of buckets is on order of a few dozen, but typically much lower (ie. 10).
     */
    scoreBuckets?: {[key: string]: string} | null;
  }
  /**
   * Metrics related to scoring.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1ScoreMetrics {
    /**
     * Action-based metrics. The map key is the action name which specified by the site owners at time of the "execute" client-side call.
     */
    actionMetrics?: {
      [key: string]: Schema$GoogleCloudRecaptchaenterpriseV1ScoreDistribution;
    } | null;
    /**
     * Aggregated score metrics for all traffic.
     */
    overallMetrics?: Schema$GoogleCloudRecaptchaenterpriseV1ScoreDistribution;
  }
  /**
   * The request message to search related account group memberships.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest {
    /**
     * Optional. The unique stable account identifier used to search connections. The identifier should correspond to an `account_id` provided in a previous `CreateAssessment` or `AnnotateAssessment` call. Either hashed_account_id or account_id must be set, but not both.
     */
    accountId?: string | null;
    /**
     * Optional. Deprecated: use `account_id` instead. The unique stable hashed account identifier used to search connections. The identifier should correspond to a `hashed_account_id` provided in a previous `CreateAssessment` or `AnnotateAssessment` call. Either hashed_account_id or account_id must be set, but not both.
     */
    hashedAccountId?: string | null;
    /**
     * Optional. The maximum number of groups to return. The service might return fewer than this value. If unspecified, at most 50 groups are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     */
    pageSize?: number | null;
    /**
     * Optional. A page token, received from a previous `SearchRelatedAccountGroupMemberships` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchRelatedAccountGroupMemberships` must match the call that provided the page token.
     */
    pageToken?: string | null;
  }
  /**
   * The response to a `SearchRelatedAccountGroupMemberships` call.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The queried memberships.
     */
    relatedAccountGroupMemberships?: Schema$GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership[];
  }
  /**
   * Information about SMS toll fraud.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1SmsTollFraudVerdict {
    /**
     * Output only. Reasons contributing to the SMS toll fraud verdict.
     */
    reasons?: string[] | null;
    /**
     * Output only. Probability of an SMS event being fraudulent. Values are from 0.0 (lowest) to 1.0 (highest).
     */
    risk?: number | null;
  }
  /**
   * Options for user acceptance testing.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1TestingOptions {
    /**
     * Optional. For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site return nocaptcha if NOCAPTCHA, or an unsolvable challenge if CHALLENGE.
     */
    testingChallenge?: string | null;
    /**
     * Optional. All assessments for this Key return this score. Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive.
     */
    testingScore?: number | null;
  }
  /**
   * Properties of the provided event token.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1TokenProperties {
    /**
     * Output only. Action name provided at token generation.
     */
    action?: string | null;
    /**
     * Output only. The name of the Android package with which the token was generated (Android keys only).
     */
    androidPackageName?: string | null;
    /**
     * Output only. The timestamp corresponding to the generation of the token.
     */
    createTime?: string | null;
    /**
     * Output only. The hostname of the page on which the token was generated (Web keys only).
     */
    hostname?: string | null;
    /**
     * Output only. Reason associated with the response when valid = false.
     */
    invalidReason?: string | null;
    /**
     * Output only. The ID of the iOS bundle with which the token was generated (iOS keys only).
     */
    iosBundleId?: string | null;
    /**
     * Output only. Whether the provided user response token is valid. When valid = false, the reason could be specified in invalid_reason or it could also be due to a user failing to solve a challenge or a sitekey mismatch (i.e the sitekey used to generate the token was different than the one specified in the assessment).
     */
    valid?: boolean | null;
  }
  /**
   * Transaction data associated with a payment protected by reCAPTCHA Enterprise.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1TransactionData {
    /**
     * Optional. Address associated with the payment method when applicable.
     */
    billingAddress?: Schema$GoogleCloudRecaptchaenterpriseV1TransactionDataAddress;
    /**
     * Optional. The Bank Identification Number - generally the first 6 or 8 digits of the card.
     */
    cardBin?: string | null;
    /**
     * Optional. The last four digits of the card.
     */
    cardLastFour?: string | null;
    /**
     * Optional. The currency code in ISO-4217 format.
     */
    currencyCode?: string | null;
    /**
     * Optional. Information about the payment gateway's response to the transaction.
     */
    gatewayInfo?: Schema$GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo;
    /**
     * Optional. Items purchased in this transaction.
     */
    items?: Schema$GoogleCloudRecaptchaenterpriseV1TransactionDataItem[];
    /**
     * Optional. Information about the user or users fulfilling the transaction.
     */
    merchants?: Schema$GoogleCloudRecaptchaenterpriseV1TransactionDataUser[];
    /**
     * Optional. The payment method for the transaction. The allowed values are: * credit-card * debit-card * gift-card * processor-{name\} (If a third-party is used, for example, processor-paypal) * custom-{name\} (If an alternative method is used, for example, custom-crypto)
     */
    paymentMethod?: string | null;
    /**
     * Optional. Destination address if this transaction involves shipping a physical item.
     */
    shippingAddress?: Schema$GoogleCloudRecaptchaenterpriseV1TransactionDataAddress;
    /**
     * Optional. The value of shipping in the specified currency. 0 for free or no shipping.
     */
    shippingValue?: number | null;
    /**
     * Unique identifier for the transaction. This custom identifier can be used to reference this transaction in the future, for example, labeling a refund or chargeback event. Two attempts at the same transaction should use the same transaction id.
     */
    transactionId?: string | null;
    /**
     * Optional. Information about the user paying/initiating the transaction.
     */
    user?: Schema$GoogleCloudRecaptchaenterpriseV1TransactionDataUser;
    /**
     * Optional. The decimal value of the transaction in the specified currency.
     */
    value?: number | null;
  }
  /**
   * Structured address format for billing and shipping addresses.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1TransactionDataAddress {
    /**
     * Optional. The first lines of the address. The first line generally contains the street name and number, and further lines may include information such as an apartment number.
     */
    address?: string[] | null;
    /**
     * Optional. The state, province, or otherwise administrative area of the address.
     */
    administrativeArea?: string | null;
    /**
     * Optional. The town/city of the address.
     */
    locality?: string | null;
    /**
     * Optional. The postal or ZIP code of the address.
     */
    postalCode?: string | null;
    /**
     * Optional. The recipient name, potentially including information such as "care of".
     */
    recipient?: string | null;
    /**
     * Optional. The CLDR country/region of the address.
     */
    regionCode?: string | null;
  }
  /**
   * Details about the transaction from the gateway.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo {
    /**
     * Optional. AVS response code from the gateway (available only when reCAPTCHA Enterprise is called after authorization).
     */
    avsResponseCode?: string | null;
    /**
     * Optional. CVV response code from the gateway (available only when reCAPTCHA Enterprise is called after authorization).
     */
    cvvResponseCode?: string | null;
    /**
     * Optional. Gateway response code describing the state of the transaction.
     */
    gatewayResponseCode?: string | null;
    /**
     * Optional. Name of the gateway service (for example, stripe, square, paypal).
     */
    name?: string | null;
  }
  /**
   * Line items being purchased in this transaction.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1TransactionDataItem {
    /**
     * Optional. When a merchant is specified, its corresponding account_id. Necessary to populate marketplace-style transactions.
     */
    merchantAccountId?: string | null;
    /**
     * Optional. The full name of the item.
     */
    name?: string | null;
    /**
     * Optional. The quantity of this item that is being purchased.
     */
    quantity?: string | null;
    /**
     * Optional. The value per item that the user is paying, in the transaction currency, after discounts.
     */
    value?: number | null;
  }
  /**
   * Details about a user's account involved in the transaction.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1TransactionDataUser {
    /**
     * Optional. Unique account identifier for this user. If using account defender, this should match the hashed_account_id field. Otherwise, a unique and persistent identifier for this account.
     */
    accountId?: string | null;
    /**
     * Optional. The epoch milliseconds of the user's account creation.
     */
    creationMs?: string | null;
    /**
     * Optional. The email address of the user.
     */
    email?: string | null;
    /**
     * Optional. Whether the email has been verified to be accessible by the user (OTP or similar).
     */
    emailVerified?: boolean | null;
    /**
     * Optional. The phone number of the user, with country code.
     */
    phoneNumber?: string | null;
    /**
     * Optional. Whether the phone number has been verified to be accessible by the user (OTP or similar).
     */
    phoneVerified?: boolean | null;
  }
  /**
   * Describes an event in the lifecycle of a payment transaction.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1TransactionEvent {
    /**
     * Optional. Timestamp when this transaction event occurred; otherwise assumed to be the time of the API call.
     */
    eventTime?: string | null;
    /**
     * Optional. The type of this transaction event.
     */
    eventType?: string | null;
    /**
     * Optional. The reason or standardized code that corresponds with this transaction event, if one exists. For example, a CHARGEBACK event with code 6005.
     */
    reason?: string | null;
    /**
     * Optional. The value that corresponds with this transaction event, if one exists. For example, a refund event where $5.00 was refunded. Currency is obtained from the original transaction data.
     */
    value?: number | null;
  }
  /**
   * An identifier associated with a user.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1UserId {
    /**
     * Optional. An email address.
     */
    email?: string | null;
    /**
     * Optional. A phone number. Should use the E.164 format.
     */
    phoneNumber?: string | null;
    /**
     * Optional. A unique username, if different from all the other identifiers and `account_id` that are provided. Can be a unique login handle or display name for a user.
     */
    username?: string | null;
  }
  /**
   * User information associated with a request protected by reCAPTCHA Enterprise.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1UserInfo {
    /**
     * Optional. For logged-in requests or login/registration requests, the unique account identifier associated with this user. You can use the username if it is stable (meaning it is the same for every request associated with the same user), or any stable user ID of your choice. Leave blank for non logged-in actions or guest checkout.
     */
    accountId?: string | null;
    /**
     * Optional. Creation time for this account associated with this user. Leave blank for non logged-in actions, guest checkout, or when there is no account associated with the current user.
     */
    createAccountTime?: string | null;
    /**
     * Optional. Identifiers associated with this user or request.
     */
    userIds?: Schema$GoogleCloudRecaptchaenterpriseV1UserId[];
  }
  /**
   * Settings specific to keys that can be used for WAF (Web Application Firewall).
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1WafSettings {
    /**
     * Required. The WAF feature for which this key is enabled.
     */
    wafFeature?: string | null;
    /**
     * Required. The WAF service that uses this key.
     */
    wafService?: string | null;
  }
  /**
   * Settings specific to keys that can be used by websites.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1WebKeySettings {
    /**
     * Optional. If set to true, it means allowed_domains are not enforced.
     */
    allowAllDomains?: boolean | null;
    /**
     * Optional. If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. This is supported only for the SCORE integration type.
     */
    allowAmpTraffic?: boolean | null;
    /**
     * Optional. Domains or subdomains of websites allowed to use the key. All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com'
     */
    allowedDomains?: string[] | null;
    /**
     * Optional. Settings for the frequency and difficulty at which this key triggers captcha challenges. This should only be specified for `IntegrationType` CHECKBOX, INVISIBLE or POLICY_BASED_CHALLENGE.
     */
    challengeSecurityPreference?: string | null;
    /**
     * Optional. Challenge settings.
     */
    challengeSettings?: Schema$GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSettings;
    /**
     * Required. Describes how this key is integrated with the website.
     */
    integrationType?: string | null;
  }
  /**
   * Per-action challenge settings.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1WebKeySettingsActionSettings {
    /**
     * Required. A challenge is triggered if the end-user score is below that threshold. Value must be between 0 and 1 (inclusive).
     */
    scoreThreshold?: number | null;
  }
  /**
   * Settings for POLICY_BASED_CHALLENGE keys to control when a challenge is triggered.
   */
  export interface Schema$GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSettings {
    /**
     * Optional. The action to score threshold map. The action name should be the same as the action name passed in the `data-action` attribute (see https://cloud.google.com/recaptcha/docs/actions-website). Action names are case-insensitive. There is a maximum of 100 action settings. An action name has a maximum length of 100.
     */
    actionSettings?: {
      [
        key: string
      ]: Schema$GoogleCloudRecaptchaenterpriseV1WebKeySettingsActionSettings;
    } | null;
    /**
     * Required. Defines when a challenge is triggered (unless the default threshold is overridden for the given action, see `action_settings`).
     */
    defaultSettings?: Schema$GoogleCloudRecaptchaenterpriseV1WebKeySettingsActionSettings;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$GoogleProtobufEmpty {}
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$GoogleRpcStatus {
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

  export class Resource$Projects {
    context: APIRequestContext;
    assessments: Resource$Projects$Assessments;
    firewallpolicies: Resource$Projects$Firewallpolicies;
    keys: Resource$Projects$Keys;
    relatedaccountgroupmemberships: Resource$Projects$Relatedaccountgroupmemberships;
    relatedaccountgroups: Resource$Projects$Relatedaccountgroups;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.assessments = new Resource$Projects$Assessments(this.context);
      this.firewallpolicies = new Resource$Projects$Firewallpolicies(
        this.context
      );
      this.keys = new Resource$Projects$Keys(this.context);
      this.relatedaccountgroupmemberships =
        new Resource$Projects$Relatedaccountgroupmemberships(this.context);
      this.relatedaccountgroups = new Resource$Projects$Relatedaccountgroups(
        this.context
      );
    }
  }

  export class Resource$Projects$Assessments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.assessments.annotate({
     *     // Required. The resource name of the Assessment, in the format `projects/{project\}/assessments/{assessment\}`.
     *     name: 'projects/my-project/assessments/my-assessment',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "annotation": "my_annotation",
     *       //   "hashedAccountId": "my_hashedAccountId",
     *       //   "reasons": [],
     *       //   "transactionEvent": {}
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
    annotate(
      params: Params$Resource$Projects$Assessments$Annotate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    annotate(
      params?: Params$Resource$Projects$Assessments$Annotate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>
    >;
    annotate(
      params: Params$Resource$Projects$Assessments$Annotate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    annotate(
      params: Params$Resource$Projects$Assessments$Annotate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>
    ): void;
    annotate(
      params: Params$Resource$Projects$Assessments$Annotate,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>
    ): void;
    annotate(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>
    ): void;
    annotate(
      paramsOrCallback?:
        | Params$Resource$Projects$Assessments$Annotate
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Assessments$Annotate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Assessments$Annotate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:annotate').replace(
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse>(
          parameters
        );
      }
    }

    /**
     * Creates an Assessment of the likelihood an event is legitimate.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.assessments.create({
     *     // Required. The name of the project in which the assessment is created, in the format `projects/{project\}`.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountDefenderAssessment": {},
     *       //   "accountVerification": {},
     *       //   "assessmentEnvironment": {},
     *       //   "event": {},
     *       //   "firewallPolicyAssessment": {},
     *       //   "fraudPreventionAssessment": {},
     *       //   "fraudSignals": {},
     *       //   "name": "my_name",
     *       //   "phoneFraudAssessment": {},
     *       //   "privatePasswordLeakVerification": {},
     *       //   "riskAnalysis": {},
     *       //   "tokenProperties": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountDefenderAssessment": {},
     *   //   "accountVerification": {},
     *   //   "assessmentEnvironment": {},
     *   //   "event": {},
     *   //   "firewallPolicyAssessment": {},
     *   //   "fraudPreventionAssessment": {},
     *   //   "fraudSignals": {},
     *   //   "name": "my_name",
     *   //   "phoneFraudAssessment": {},
     *   //   "privatePasswordLeakVerification": {},
     *   //   "riskAnalysis": {},
     *   //   "tokenProperties": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Assessments$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Assessments$Create,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1Assessment>
    >;
    create(
      params: Params$Resource$Projects$Assessments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Assessments$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Assessment>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Assessment>
    ): void;
    create(
      params: Params$Resource$Projects$Assessments$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Assessment>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Assessment>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Assessments$Create
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Assessment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Assessment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Assessment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1Assessment>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Assessments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Assessments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/assessments').replace(
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Assessment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Assessment>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Assessments$Annotate
    extends StandardParameters {
    /**
     * Required. The resource name of the Assessment, in the format `projects/{project\}/assessments/{assessment\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest;
  }
  export interface Params$Resource$Projects$Assessments$Create
    extends StandardParameters {
    /**
     * Required. The name of the project in which the assessment is created, in the format `projects/{project\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecaptchaenterpriseV1Assessment;
  }

  export class Resource$Projects$Firewallpolicies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can be executed. A project may have a maximum of 1000 policies.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.firewallpolicies.create({
     *     // Required. The name of the project this policy applies to, in the format `projects/{project\}`.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "actions": [],
     *       //   "condition": "my_condition",
     *       //   "description": "my_description",
     *       //   "name": "my_name",
     *       //   "path": "my_path"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "actions": [],
     *   //   "condition": "my_condition",
     *   //   "description": "my_description",
     *   //   "name": "my_name",
     *   //   "path": "my_path"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Firewallpolicies$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Firewallpolicies$Create,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
    >;
    create(
      params: Params$Resource$Projects$Firewallpolicies$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Firewallpolicies$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
    ): void;
    create(
      params: Params$Resource$Projects$Firewallpolicies$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Firewallpolicies$Create
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Firewallpolicies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Firewallpolicies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/firewallpolicies').replace(
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>(
          parameters
        );
      }
    }

    /**
     * Deletes the specified firewall policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.firewallpolicies.delete({
     *     // Required. The name of the policy to be deleted, in the format `projects/{project\}/firewallpolicies/{firewallpolicy\}`.
     *     name: 'projects/my-project/firewallpolicies/my-firewallpolicie',
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
      params: Params$Resource$Projects$Firewallpolicies$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Firewallpolicies$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Projects$Firewallpolicies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Firewallpolicies$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Firewallpolicies$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Firewallpolicies$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Firewallpolicies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Firewallpolicies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Returns the specified firewall policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.firewallpolicies.get({
     *     // Required. The name of the requested policy, in the format `projects/{project\}/firewallpolicies/{firewallpolicy\}`.
     *     name: 'projects/my-project/firewallpolicies/my-firewallpolicie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "actions": [],
     *   //   "condition": "my_condition",
     *   //   "description": "my_description",
     *   //   "name": "my_name",
     *   //   "path": "my_path"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Firewallpolicies$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Firewallpolicies$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
    >;
    get(
      params: Params$Resource$Projects$Firewallpolicies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Firewallpolicies$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
    ): void;
    get(
      params: Params$Resource$Projects$Firewallpolicies$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Firewallpolicies$Get
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Firewallpolicies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Firewallpolicies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>(
          parameters
        );
      }
    }

    /**
     * Returns the list of all firewall policies that belong to a project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.firewallpolicies.list({
     *     // Optional. The maximum number of policies to return. Default is 10. Max limit is 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous. ListFirewallPoliciesRequest, if any.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the project to list the policies for, in the format `projects/{project\}`.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "firewallPolicies": [],
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
      params: Params$Resource$Projects$Firewallpolicies$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Firewallpolicies$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse>
    >;
    list(
      params: Params$Resource$Projects$Firewallpolicies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Firewallpolicies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Firewallpolicies$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Firewallpolicies$List
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Firewallpolicies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Firewallpolicies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/firewallpolicies').replace(
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the specified firewall policy.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.firewallpolicies.patch({
     *     // Identifier. The resource name for the FirewallPolicy in the format `projects/{project\}/firewallpolicies/{firewallpolicy\}`.
     *     name: 'projects/my-project/firewallpolicies/my-firewallpolicie',
     *     // Optional. The mask to control which fields of the policy get updated. If the mask is not present, all fields are updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "actions": [],
     *       //   "condition": "my_condition",
     *       //   "description": "my_description",
     *       //   "name": "my_name",
     *       //   "path": "my_path"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "actions": [],
     *   //   "condition": "my_condition",
     *   //   "description": "my_description",
     *   //   "name": "my_name",
     *   //   "path": "my_path"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Firewallpolicies$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Firewallpolicies$Patch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
    >;
    patch(
      params: Params$Resource$Projects$Firewallpolicies$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Firewallpolicies$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
    ): void;
    patch(
      params: Params$Resource$Projects$Firewallpolicies$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Firewallpolicies$Patch
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Firewallpolicies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Firewallpolicies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy>(
          parameters
        );
      }
    }

    /**
     * Reorders all firewall policies.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.firewallpolicies.reorder({
     *     // Required. The name of the project to list the policies for, in the format `projects/{project\}`.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "names": []
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
    reorder(
      params: Params$Resource$Projects$Firewallpolicies$Reorder,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    reorder(
      params?: Params$Resource$Projects$Firewallpolicies$Reorder,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesResponse>
    >;
    reorder(
      params: Params$Resource$Projects$Firewallpolicies$Reorder,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reorder(
      params: Params$Resource$Projects$Firewallpolicies$Reorder,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesResponse>
    ): void;
    reorder(
      params: Params$Resource$Projects$Firewallpolicies$Reorder,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesResponse>
    ): void;
    reorder(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesResponse>
    ): void;
    reorder(
      paramsOrCallback?:
        | Params$Resource$Projects$Firewallpolicies$Reorder
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Firewallpolicies$Reorder;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Firewallpolicies$Reorder;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/firewallpolicies:reorder').replace(
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Firewallpolicies$Create
    extends StandardParameters {
    /**
     * Required. The name of the project this policy applies to, in the format `projects/{project\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy;
  }
  export interface Params$Resource$Projects$Firewallpolicies$Delete
    extends StandardParameters {
    /**
     * Required. The name of the policy to be deleted, in the format `projects/{project\}/firewallpolicies/{firewallpolicy\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Firewallpolicies$Get
    extends StandardParameters {
    /**
     * Required. The name of the requested policy, in the format `projects/{project\}/firewallpolicies/{firewallpolicy\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Firewallpolicies$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of policies to return. Default is 10. Max limit is 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous. ListFirewallPoliciesRequest, if any.
     */
    pageToken?: string;
    /**
     * Required. The name of the project to list the policies for, in the format `projects/{project\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Firewallpolicies$Patch
    extends StandardParameters {
    /**
     * Identifier. The resource name for the FirewallPolicy in the format `projects/{project\}/firewallpolicies/{firewallpolicy\}`.
     */
    name?: string;
    /**
     * Optional. The mask to control which fields of the policy get updated. If the mask is not present, all fields are updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecaptchaenterpriseV1FirewallPolicy;
  }
  export interface Params$Resource$Projects$Firewallpolicies$Reorder
    extends StandardParameters {
    /**
     * Required. The name of the project to list the policies for, in the format `projects/{project\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecaptchaenterpriseV1ReorderFirewallPoliciesRequest;
  }

  export class Resource$Projects$Keys {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Adds an IP override to a key. The following restrictions hold: * The maximum number of IP overrides per key is 1000. * For any conflict (such as IP already exists or IP part of an existing IP range), an error is returned.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.keys.addIpOverride({
     *     // Required. The name of the key to which the IP override is added, in the format `projects/{project\}/keys/{key\}`.
     *     name: 'projects/my-project/keys/my-key',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "ipOverrideData": {}
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
    addIpOverride(
      params: Params$Resource$Projects$Keys$Addipoverride,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    addIpOverride(
      params?: Params$Resource$Projects$Keys$Addipoverride,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1AddIpOverrideResponse>
    >;
    addIpOverride(
      params: Params$Resource$Projects$Keys$Addipoverride,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addIpOverride(
      params: Params$Resource$Projects$Keys$Addipoverride,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1AddIpOverrideResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1AddIpOverrideResponse>
    ): void;
    addIpOverride(
      params: Params$Resource$Projects$Keys$Addipoverride,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1AddIpOverrideResponse>
    ): void;
    addIpOverride(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1AddIpOverrideResponse>
    ): void;
    addIpOverride(
      paramsOrCallback?:
        | Params$Resource$Projects$Keys$Addipoverride
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1AddIpOverrideResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1AddIpOverrideResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1AddIpOverrideResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1AddIpOverrideResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Keys$Addipoverride;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Keys$Addipoverride;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:addIpOverride').replace(
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1AddIpOverrideResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1AddIpOverrideResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a new reCAPTCHA Enterprise key.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.keys.create({
     *     // Required. The name of the project in which the key is created, in the format `projects/{project\}`.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "androidSettings": {},
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "expressSettings": {},
     *       //   "iosSettings": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "testingOptions": {},
     *       //   "wafSettings": {},
     *       //   "webSettings": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidSettings": {},
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "expressSettings": {},
     *   //   "iosSettings": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "testingOptions": {},
     *   //   "wafSettings": {},
     *   //   "webSettings": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Keys$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Keys$Create,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    >;
    create(
      params: Params$Resource$Projects$Keys$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Keys$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    create(
      params: Params$Resource$Projects$Keys$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Keys$Create
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Keys$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Keys$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/keys').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Key>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Key>(
          parameters
        );
      }
    }

    /**
     * Deletes the specified key.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.keys.delete({
     *     // Required. The name of the key to be deleted, in the format `projects/{project\}/keys/{key\}`.
     *     name: 'projects/my-project/keys/my-key',
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
      params: Params$Resource$Projects$Keys$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Keys$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Projects$Keys$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Keys$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Keys$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Keys$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Keys$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Keys$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Returns the specified key.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.keys.get({
     *     // Required. The name of the requested key, in the format `projects/{project\}/keys/{key\}`.
     *     name: 'projects/my-project/keys/my-key',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidSettings": {},
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "expressSettings": {},
     *   //   "iosSettings": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "testingOptions": {},
     *   //   "wafSettings": {},
     *   //   "webSettings": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Keys$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Keys$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    >;
    get(
      params: Params$Resource$Projects$Keys$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Keys$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    get(
      params: Params$Resource$Projects$Keys$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Keys$Get
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Keys$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Keys$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Key>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Key>(
          parameters
        );
      }
    }

    /**
     * Get some aggregated metrics for a Key. This data can be used to build dashboards.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.keys.getMetrics({
     *     // Required. The name of the requested metrics, in the format `projects/{project\}/keys/{key\}/metrics`.
     *     name: 'projects/my-project/keys/my-key/metrics',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "challengeMetrics": [],
     *   //   "name": "my_name",
     *   //   "scoreMetrics": [],
     *   //   "startTime": "my_startTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getMetrics(
      params: Params$Resource$Projects$Keys$Getmetrics,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getMetrics(
      params?: Params$Resource$Projects$Keys$Getmetrics,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1Metrics>
    >;
    getMetrics(
      params: Params$Resource$Projects$Keys$Getmetrics,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getMetrics(
      params: Params$Resource$Projects$Keys$Getmetrics,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Metrics>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Metrics>
    ): void;
    getMetrics(
      params: Params$Resource$Projects$Keys$Getmetrics,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Metrics>
    ): void;
    getMetrics(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Metrics>
    ): void;
    getMetrics(
      paramsOrCallback?:
        | Params$Resource$Projects$Keys$Getmetrics
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Metrics>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Metrics>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Metrics>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1Metrics>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Keys$Getmetrics;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Keys$Getmetrics;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Metrics>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Metrics>(
          parameters
        );
      }
    }

    /**
     * Returns the list of all keys that belong to a project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.keys.list({
     *     // Optional. The maximum number of keys to return. Default is 10. Max limit is 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous. ListKeysRequest, if any.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the project that contains the keys that is listed, in the format `projects/{project\}`.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "keys": [],
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
      params: Params$Resource$Projects$Keys$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Keys$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse>
    >;
    list(
      params: Params$Resource$Projects$Keys$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Keys$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Keys$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Keys$List
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Keys$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Keys$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/keys').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1ListKeysResponse>(
          parameters
        );
      }
    }

    /**
     * Lists all IP overrides for a key.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.keys.listIpOverrides({
     *     // Optional. The maximum number of overrides to return. Default is 10. Max limit is 100. If the number of overrides is less than the page_size, all overrides are returned. If the page size is more than 100, it is coerced to 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous ListIpOverridesRequest, if any.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent key for which the IP overrides are listed, in the format `projects/{project\}/keys/{key\}`.
     *     parent: 'projects/my-project/keys/my-key',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "ipOverrides": [],
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
    listIpOverrides(
      params: Params$Resource$Projects$Keys$Listipoverrides,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    listIpOverrides(
      params?: Params$Resource$Projects$Keys$Listipoverrides,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1ListIpOverridesResponse>
    >;
    listIpOverrides(
      params: Params$Resource$Projects$Keys$Listipoverrides,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listIpOverrides(
      params: Params$Resource$Projects$Keys$Listipoverrides,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListIpOverridesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListIpOverridesResponse>
    ): void;
    listIpOverrides(
      params: Params$Resource$Projects$Keys$Listipoverrides,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListIpOverridesResponse>
    ): void;
    listIpOverrides(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListIpOverridesResponse>
    ): void;
    listIpOverrides(
      paramsOrCallback?:
        | Params$Resource$Projects$Keys$Listipoverrides
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListIpOverridesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListIpOverridesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListIpOverridesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1ListIpOverridesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Keys$Listipoverrides;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Keys$Listipoverrides;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:listIpOverrides').replace(
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1ListIpOverridesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1ListIpOverridesResponse>(
          parameters
        );
      }
    }

    /**
     * Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.keys.migrate({
     *     // Required. The name of the key to be migrated, in the format `projects/{project\}/keys/{key\}`.
     *     name: 'projects/my-project/keys/my-key',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "skipBillingCheck": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidSettings": {},
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "expressSettings": {},
     *   //   "iosSettings": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "testingOptions": {},
     *   //   "wafSettings": {},
     *   //   "webSettings": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    migrate(
      params: Params$Resource$Projects$Keys$Migrate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    migrate(
      params?: Params$Resource$Projects$Keys$Migrate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    >;
    migrate(
      params: Params$Resource$Projects$Keys$Migrate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    migrate(
      params: Params$Resource$Projects$Keys$Migrate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    migrate(
      params: Params$Resource$Projects$Keys$Migrate,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    migrate(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    migrate(
      paramsOrCallback?:
        | Params$Resource$Projects$Keys$Migrate
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Keys$Migrate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Keys$Migrate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:migrate').replace(
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Key>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Key>(
          parameters
        );
      }
    }

    /**
     * Updates the specified key.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.keys.patch({
     *     // Identifier. The resource name for the Key in the format `projects/{project\}/keys/{key\}`.
     *     name: 'projects/my-project/keys/my-key',
     *     // Optional. The mask to control which fields of the key get updated. If the mask is not present, all fields are updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "androidSettings": {},
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "expressSettings": {},
     *       //   "iosSettings": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "testingOptions": {},
     *       //   "wafSettings": {},
     *       //   "webSettings": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "androidSettings": {},
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "expressSettings": {},
     *   //   "iosSettings": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "testingOptions": {},
     *   //   "wafSettings": {},
     *   //   "webSettings": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Keys$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Keys$Patch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    >;
    patch(
      params: Params$Resource$Projects$Keys$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Keys$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    patch(
      params: Params$Resource$Projects$Keys$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Keys$Patch
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1Key>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Keys$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Keys$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Key>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1Key>(
          parameters
        );
      }
    }

    /**
     * Removes an IP override from a key. The following restrictions hold: * If the IP isn't found in an existing IP override, a `NOT_FOUND` error is returned. * If the IP is found in an existing IP override, but the override type does not match, a `NOT_FOUND` error is returned.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.keys.removeIpOverride({
     *     // Required. The name of the key from which the IP override is removed, in the format `projects/{project\}/keys/{key\}`.
     *     name: 'projects/my-project/keys/my-key',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "ipOverrideData": {}
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
    removeIpOverride(
      params: Params$Resource$Projects$Keys$Removeipoverride,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    removeIpOverride(
      params?: Params$Resource$Projects$Keys$Removeipoverride,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1RemoveIpOverrideResponse>
    >;
    removeIpOverride(
      params: Params$Resource$Projects$Keys$Removeipoverride,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removeIpOverride(
      params: Params$Resource$Projects$Keys$Removeipoverride,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1RemoveIpOverrideResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1RemoveIpOverrideResponse>
    ): void;
    removeIpOverride(
      params: Params$Resource$Projects$Keys$Removeipoverride,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1RemoveIpOverrideResponse>
    ): void;
    removeIpOverride(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1RemoveIpOverrideResponse>
    ): void;
    removeIpOverride(
      paramsOrCallback?:
        | Params$Resource$Projects$Keys$Removeipoverride
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1RemoveIpOverrideResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1RemoveIpOverrideResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1RemoveIpOverrideResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1RemoveIpOverrideResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Keys$Removeipoverride;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Keys$Removeipoverride;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:removeIpOverride').replace(
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1RemoveIpOverrideResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1RemoveIpOverrideResponse>(
          parameters
        );
      }
    }

    /**
     * Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.keys.retrieveLegacySecretKey({
     *     // Required. The public key name linked to the requested secret key in the format `projects/{project\}/keys/{key\}`.
     *     key: 'projects/my-project/keys/my-key',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "legacySecretKey": "my_legacySecretKey"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    retrieveLegacySecretKey(
      params: Params$Resource$Projects$Keys$Retrievelegacysecretkey,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    retrieveLegacySecretKey(
      params?: Params$Resource$Projects$Keys$Retrievelegacysecretkey,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse>
    >;
    retrieveLegacySecretKey(
      params: Params$Resource$Projects$Keys$Retrievelegacysecretkey,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retrieveLegacySecretKey(
      params: Params$Resource$Projects$Keys$Retrievelegacysecretkey,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse>
    ): void;
    retrieveLegacySecretKey(
      params: Params$Resource$Projects$Keys$Retrievelegacysecretkey,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse>
    ): void;
    retrieveLegacySecretKey(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse>
    ): void;
    retrieveLegacySecretKey(
      paramsOrCallback?:
        | Params$Resource$Projects$Keys$Retrievelegacysecretkey
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Keys$Retrievelegacysecretkey;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Keys$Retrievelegacysecretkey;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+key}:retrieveLegacySecretKey').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['key'],
        pathParams: ['key'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Keys$Addipoverride
    extends StandardParameters {
    /**
     * Required. The name of the key to which the IP override is added, in the format `projects/{project\}/keys/{key\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecaptchaenterpriseV1AddIpOverrideRequest;
  }
  export interface Params$Resource$Projects$Keys$Create
    extends StandardParameters {
    /**
     * Required. The name of the project in which the key is created, in the format `projects/{project\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecaptchaenterpriseV1Key;
  }
  export interface Params$Resource$Projects$Keys$Delete
    extends StandardParameters {
    /**
     * Required. The name of the key to be deleted, in the format `projects/{project\}/keys/{key\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Keys$Get
    extends StandardParameters {
    /**
     * Required. The name of the requested key, in the format `projects/{project\}/keys/{key\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Keys$Getmetrics
    extends StandardParameters {
    /**
     * Required. The name of the requested metrics, in the format `projects/{project\}/keys/{key\}/metrics`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Keys$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of keys to return. Default is 10. Max limit is 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous. ListKeysRequest, if any.
     */
    pageToken?: string;
    /**
     * Required. The name of the project that contains the keys that is listed, in the format `projects/{project\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Keys$Listipoverrides
    extends StandardParameters {
    /**
     * Optional. The maximum number of overrides to return. Default is 10. Max limit is 100. If the number of overrides is less than the page_size, all overrides are returned. If the page size is more than 100, it is coerced to 100.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous ListIpOverridesRequest, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent key for which the IP overrides are listed, in the format `projects/{project\}/keys/{key\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Keys$Migrate
    extends StandardParameters {
    /**
     * Required. The name of the key to be migrated, in the format `projects/{project\}/keys/{key\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest;
  }
  export interface Params$Resource$Projects$Keys$Patch
    extends StandardParameters {
    /**
     * Identifier. The resource name for the Key in the format `projects/{project\}/keys/{key\}`.
     */
    name?: string;
    /**
     * Optional. The mask to control which fields of the key get updated. If the mask is not present, all fields are updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecaptchaenterpriseV1Key;
  }
  export interface Params$Resource$Projects$Keys$Removeipoverride
    extends StandardParameters {
    /**
     * Required. The name of the key from which the IP override is removed, in the format `projects/{project\}/keys/{key\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecaptchaenterpriseV1RemoveIpOverrideRequest;
  }
  export interface Params$Resource$Projects$Keys$Retrievelegacysecretkey
    extends StandardParameters {
    /**
     * Required. The public key name linked to the requested secret key in the format `projects/{project\}/keys/{key\}`.
     */
    key?: string;
  }

  export class Resource$Projects$Relatedaccountgroupmemberships {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Search group memberships related to a given account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await recaptchaenterprise.projects.relatedaccountgroupmemberships.search({
     *       // Required. The name of the project to search related account group memberships from. Specify the project name in the following format: `projects/{project\}`.
     *       project: 'projects/my-project',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "accountId": "my_accountId",
     *         //   "hashedAccountId": "my_hashedAccountId",
     *         //   "pageSize": 0,
     *         //   "pageToken": "my_pageToken"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "relatedAccountGroupMemberships": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Relatedaccountgroupmemberships$Search,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    search(
      params?: Params$Resource$Projects$Relatedaccountgroupmemberships$Search,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>
    >;
    search(
      params: Params$Resource$Projects$Relatedaccountgroupmemberships$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Projects$Relatedaccountgroupmemberships$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>
    ): void;
    search(
      params: Params$Resource$Projects$Relatedaccountgroupmemberships$Search,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Projects$Relatedaccountgroupmemberships$Search
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Relatedaccountgroupmemberships$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Relatedaccountgroupmemberships$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+project}/relatedaccountgroupmemberships:search'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Relatedaccountgroupmemberships$Search
    extends StandardParameters {
    /**
     * Required. The name of the project to search related account group memberships from. Specify the project name in the following format: `projects/{project\}`.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest;
  }

  export class Resource$Projects$Relatedaccountgroups {
    context: APIRequestContext;
    memberships: Resource$Projects$Relatedaccountgroups$Memberships;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.memberships = new Resource$Projects$Relatedaccountgroups$Memberships(
        this.context
      );
    }

    /**
     * List groups of related accounts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await recaptchaenterprise.projects.relatedaccountgroups.list({
     *     // Optional. The maximum number of groups to return. The service might return fewer than this value. If unspecified, at most 50 groups are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListRelatedAccountGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRelatedAccountGroups` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the project to list related account groups from, in the format `projects/{project\}`.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "relatedAccountGroups": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Relatedaccountgroups$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Relatedaccountgroups$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>
    >;
    list(
      params: Params$Resource$Projects$Relatedaccountgroups$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Relatedaccountgroups$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Relatedaccountgroups$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Relatedaccountgroups$List
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Relatedaccountgroups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Relatedaccountgroups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/relatedaccountgroups').replace(
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Relatedaccountgroups$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of groups to return. The service might return fewer than this value. If unspecified, at most 50 groups are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListRelatedAccountGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRelatedAccountGroups` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The name of the project to list related account groups from, in the format `projects/{project\}`.
     */
    parent?: string;
  }

  export class Resource$Projects$Relatedaccountgroups$Memberships {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get memberships in a group of related accounts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/recaptchaenterprise.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const recaptchaenterprise = google.recaptchaenterprise('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await recaptchaenterprise.projects.relatedaccountgroups.memberships.list({
     *       // Optional. The maximum number of accounts to return. The service might return fewer than this value. If unspecified, at most 50 accounts are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. A page token, received from a previous `ListRelatedAccountGroupMemberships` call. When paginating, all other parameters provided to `ListRelatedAccountGroupMemberships` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The resource name for the related account group in the format `projects/{project\}/relatedaccountgroups/{relatedaccountgroup\}`.
     *       parent: 'projects/my-project/relatedaccountgroups/my-relatedaccountgroup',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "relatedAccountGroupMemberships": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Relatedaccountgroups$Memberships$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Relatedaccountgroups$Memberships$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>
    >;
    list(
      params: Params$Resource$Projects$Relatedaccountgroups$Memberships$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Relatedaccountgroups$Memberships$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Relatedaccountgroups$Memberships$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Relatedaccountgroups$Memberships$List
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Relatedaccountgroups$Memberships$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Relatedaccountgroups$Memberships$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://recaptchaenterprise.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/memberships').replace(
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
        createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Relatedaccountgroups$Memberships$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of accounts to return. The service might return fewer than this value. If unspecified, at most 50 accounts are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListRelatedAccountGroupMemberships` call. When paginating, all other parameters provided to `ListRelatedAccountGroupMemberships` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name for the related account group in the format `projects/{project\}/relatedaccountgroups/{relatedaccountgroup\}`.
     */
    parent?: string;
  }
}
