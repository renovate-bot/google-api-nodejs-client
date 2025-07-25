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

export namespace identitytoolkit_v3 {
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
     * Data format for the response.
     */
    alt?: string;
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
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * Google Identity Toolkit API
   *
   * Help the third party sites to implement federated login.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const identitytoolkit = google.identitytoolkit('v3');
   * ```
   */
  export class Identitytoolkit {
    context: APIRequestContext;
    relyingparty: Resource$Relyingparty;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.relyingparty = new Resource$Relyingparty(this.context);
    }
  }

  /**
   * Response of creating the IDP authentication URL.
   */
  export interface Schema$CreateAuthUriResponse {
    /**
     * all providers the user has once used to do federated login
     */
    allProviders?: string[] | null;
    /**
     * The URI used by the IDP to authenticate the user.
     */
    authUri?: string | null;
    /**
     * True if captcha is required.
     */
    captchaRequired?: boolean | null;
    /**
     * True if the authUri is for user's existing provider.
     */
    forExistingProvider?: boolean | null;
    /**
     * The fixed string identitytoolkit#CreateAuthUriResponse".
     */
    kind?: string | null;
    /**
     * The provider ID of the auth URI.
     */
    providerId?: string | null;
    /**
     * Whether the user is registered if the identifier is an email.
     */
    registered?: boolean | null;
    /**
     * Session ID which should be passed in the following verifyAssertion request.
     */
    sessionId?: string | null;
    /**
     * All sign-in methods this user has used.
     */
    signinMethods?: string[] | null;
  }
  /**
   * Respone of deleting account.
   */
  export interface Schema$DeleteAccountResponse {
    /**
     * The fixed string "identitytoolkit#DeleteAccountResponse".
     */
    kind?: string | null;
  }
  /**
   * Response of downloading accounts in batch.
   */
  export interface Schema$DownloadAccountResponse {
    /**
     * The fixed string "identitytoolkit#DownloadAccountResponse".
     */
    kind?: string | null;
    /**
     * The next page token. To be used in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The user accounts data.
     */
    users?: Schema$UserInfo[];
  }
  /**
   * Response of email signIn.
   */
  export interface Schema$EmailLinkSigninResponse {
    /**
     * The user's email.
     */
    email?: string | null;
    /**
     * Expiration time of STS id token in seconds.
     */
    expiresIn?: string | null;
    /**
     * The STS id token to login the newly signed in user.
     */
    idToken?: string | null;
    /**
     * Whether the user is new.
     */
    isNewUser?: boolean | null;
    /**
     * The fixed string "identitytoolkit#EmailLinkSigninResponse".
     */
    kind?: string | null;
    /**
     * The RP local ID of the user.
     */
    localId?: string | null;
    /**
     * The refresh token for the signed in user.
     */
    refreshToken?: string | null;
  }
  /**
   * Template for an email template.
   */
  export interface Schema$EmailTemplate {
    /**
     * Email body.
     */
    body?: string | null;
    /**
     * Email body format.
     */
    format?: string | null;
    /**
     * From address of the email.
     */
    from?: string | null;
    /**
     * From display name.
     */
    fromDisplayName?: string | null;
    /**
     * Reply-to address.
     */
    replyTo?: string | null;
    /**
     * Subject of the email.
     */
    subject?: string | null;
  }
  /**
   * Response of getting account information.
   */
  export interface Schema$GetAccountInfoResponse {
    /**
     * The fixed string "identitytoolkit#GetAccountInfoResponse".
     */
    kind?: string | null;
    /**
     * The info of the users.
     */
    users?: Schema$UserInfo[];
  }
  /**
   * Response of getting a code for user confirmation (reset password, change email etc.).
   */
  export interface Schema$GetOobConfirmationCodeResponse {
    /**
     * The email address that the email is sent to.
     */
    email?: string | null;
    /**
     * The fixed string "identitytoolkit#GetOobConfirmationCodeResponse".
     */
    kind?: string | null;
    /**
     * The code to be send to the user.
     */
    oobCode?: string | null;
  }
  /**
   * Response of getting recaptcha param.
   */
  export interface Schema$GetRecaptchaParamResponse {
    /**
     * The fixed string "identitytoolkit#GetRecaptchaParamResponse".
     */
    kind?: string | null;
    /**
     * Site key registered at recaptcha.
     */
    recaptchaSiteKey?: string | null;
    /**
     * The stoken field for the recaptcha widget, used to request captcha challenge.
     */
    recaptchaStoken?: string | null;
  }
  /**
   * Request to get the IDP authentication URL.
   */
  export interface Schema$IdentitytoolkitRelyingpartyCreateAuthUriRequest {
    /**
     * The app ID of the mobile app, base64(CERT_SHA1):PACKAGE_NAME for Android, BUNDLE_ID for iOS.
     */
    appId?: string | null;
    /**
     * Explicitly specify the auth flow type. Currently only support "CODE_FLOW" type. The field is only used for Google provider.
     */
    authFlowType?: string | null;
    /**
     * The relying party OAuth client ID.
     */
    clientId?: string | null;
    /**
     * The opaque value used by the client to maintain context info between the authentication request and the IDP callback.
     */
    context?: string | null;
    /**
     * The URI to which the IDP redirects the user after the federated login flow.
     */
    continueUri?: string | null;
    /**
     * The query parameter that client can customize by themselves in auth url. The following parameters are reserved for server so that they cannot be customized by clients: client_id, response_type, scope, redirect_uri, state, oauth_token.
     */
    customParameter?: {[key: string]: string} | null;
    /**
     * The hosted domain to restrict sign-in to accounts at that domain for Google Apps hosted accounts.
     */
    hostedDomain?: string | null;
    /**
     * The email or federated ID of the user.
     */
    identifier?: string | null;
    /**
     * The developer's consumer key for OpenId OAuth Extension
     */
    oauthConsumerKey?: string | null;
    /**
     * Additional oauth scopes, beyond the basid user profile, that the user would be prompted to grant
     */
    oauthScope?: string | null;
    /**
     * Optional realm for OpenID protocol. The sub string "scheme://domain:port" of the param "continueUri" is used if this is not set.
     */
    openidRealm?: string | null;
    /**
     * The native app package for OTA installation.
     */
    otaApp?: string | null;
    /**
     * The IdP ID. For white listed IdPs it's a short domain name e.g. google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it's the OP identifier.
     */
    providerId?: string | null;
    /**
     * The session_id passed by client.
     */
    sessionId?: string | null;
    /**
     * For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from.
     */
    tenantId?: string | null;
    /**
     * Tenant project number to be used for idp discovery.
     */
    tenantProjectNumber?: string | null;
  }
  /**
   * Request to delete account.
   */
  export interface Schema$IdentitytoolkitRelyingpartyDeleteAccountRequest {
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string | null;
    /**
     * The GITKit token or STS id token of the authenticated user.
     */
    idToken?: string | null;
    /**
     * The local ID of the user.
     */
    localId?: string | null;
  }
  /**
   * Request to download user account in batch.
   */
  export interface Schema$IdentitytoolkitRelyingpartyDownloadAccountRequest {
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string | null;
    /**
     * The max number of results to return in the response.
     */
    maxResults?: number | null;
    /**
     * The token for the next page. This should be taken from the previous response.
     */
    nextPageToken?: string | null;
    /**
     * Specify which project (field value is actually project id) to operate. Only used when provided credential.
     */
    targetProjectId?: string | null;
  }
  /**
   * Request to sign in with email.
   */
  export interface Schema$IdentitytoolkitRelyingpartyEmailLinkSigninRequest {
    /**
     * The email address of the user.
     */
    email?: string | null;
    /**
     * Token for linking flow.
     */
    idToken?: string | null;
    /**
     * The confirmation code.
     */
    oobCode?: string | null;
  }
  /**
   * Request to get the account information.
   */
  export interface Schema$IdentitytoolkitRelyingpartyGetAccountInfoRequest {
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string | null;
    /**
     * The list of emails of the users to inquiry.
     */
    email?: string[] | null;
    /**
     * The GITKit token of the authenticated user.
     */
    idToken?: string | null;
    /**
     * The list of local ID's of the users to inquiry.
     */
    localId?: string[] | null;
    /**
     * Privileged caller can query users by specified phone number.
     */
    phoneNumber?: string[] | null;
  }
  /**
   * Response of getting the project configuration.
   */
  export interface Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse {
    /**
     * Whether to allow password user sign in or sign up.
     */
    allowPasswordUser?: boolean | null;
    /**
     * Browser API key, needed when making http request to Apiary.
     */
    apiKey?: string | null;
    /**
     * Authorized domains.
     */
    authorizedDomains?: string[] | null;
    /**
     * Change email template.
     */
    changeEmailTemplate?: Schema$EmailTemplate;
    dynamicLinksDomain?: string | null;
    /**
     * Whether anonymous user is enabled.
     */
    enableAnonymousUser?: boolean | null;
    /**
     * OAuth2 provider configuration.
     */
    idpConfig?: Schema$IdpConfig[];
    /**
     * Legacy reset password email template.
     */
    legacyResetPasswordTemplate?: Schema$EmailTemplate;
    /**
     * Project ID of the relying party.
     */
    projectId?: string | null;
    /**
     * Reset password email template.
     */
    resetPasswordTemplate?: Schema$EmailTemplate;
    /**
     * Whether to use email sending provided by Firebear.
     */
    useEmailSending?: boolean | null;
    /**
     * Verify email template.
     */
    verifyEmailTemplate?: Schema$EmailTemplate;
  }
  /**
   * Respone of getting public keys.
   */
  export interface Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse {}
  /**
   * Request to reset the password.
   */
  export interface Schema$IdentitytoolkitRelyingpartyResetPasswordRequest {
    /**
     * The email address of the user.
     */
    email?: string | null;
    /**
     * The new password inputted by the user.
     */
    newPassword?: string | null;
    /**
     * The old password inputted by the user.
     */
    oldPassword?: string | null;
    /**
     * The confirmation code.
     */
    oobCode?: string | null;
  }
  /**
   * Request for Identitytoolkit-SendVerificationCode
   */
  export interface Schema$IdentitytoolkitRelyingpartySendVerificationCodeRequest {
    /**
     * Receipt of successful app token validation with APNS.
     */
    iosReceipt?: string | null;
    /**
     * Secret delivered to iOS app via APNS.
     */
    iosSecret?: string | null;
    /**
     * The phone number to send the verification code to in E.164 format.
     */
    phoneNumber?: string | null;
    /**
     * Recaptcha solution.
     */
    recaptchaToken?: string | null;
  }
  /**
   * Response for Identitytoolkit-SendVerificationCode
   */
  export interface Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse {
    /**
     * Encrypted session information
     */
    sessionInfo?: string | null;
  }
  /**
   * Request to set the account information.
   */
  export interface Schema$IdentitytoolkitRelyingpartySetAccountInfoRequest {
    /**
     * The captcha challenge.
     */
    captchaChallenge?: string | null;
    /**
     * Response to the captcha.
     */
    captchaResponse?: string | null;
    /**
     * The timestamp when the account is created.
     */
    createdAt?: string | null;
    /**
     * The custom attributes to be set in the user's id token.
     */
    customAttributes?: string | null;
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string | null;
    /**
     * The attributes users request to delete.
     */
    deleteAttribute?: string[] | null;
    /**
     * The IDPs the user request to delete.
     */
    deleteProvider?: string[] | null;
    /**
     * Whether to disable the user.
     */
    disableUser?: boolean | null;
    /**
     * The name of the user.
     */
    displayName?: string | null;
    /**
     * The email of the user.
     */
    email?: string | null;
    /**
     * Mark the email as verified or not.
     */
    emailVerified?: boolean | null;
    /**
     * The GITKit token of the authenticated user.
     */
    idToken?: string | null;
    /**
     * Instance id token of the app.
     */
    instanceId?: string | null;
    /**
     * Last login timestamp.
     */
    lastLoginAt?: string | null;
    /**
     * The local ID of the user.
     */
    localId?: string | null;
    /**
     * The out-of-band code of the change email request.
     */
    oobCode?: string | null;
    /**
     * The new password of the user.
     */
    password?: string | null;
    /**
     * Privileged caller can update user with specified phone number.
     */
    phoneNumber?: string | null;
    /**
     * The photo url of the user.
     */
    photoUrl?: string | null;
    /**
     * The associated IDPs of the user.
     */
    provider?: string[] | null;
    /**
     * Whether return sts id token and refresh token instead of gitkit token.
     */
    returnSecureToken?: boolean | null;
    /**
     * Mark the user to upgrade to federated login.
     */
    upgradeToFederatedLogin?: boolean | null;
    /**
     * Timestamp in seconds for valid login token.
     */
    validSince?: string | null;
  }
  /**
   * Request to set the project configuration.
   */
  export interface Schema$IdentitytoolkitRelyingpartySetProjectConfigRequest {
    /**
     * Whether to allow password user sign in or sign up.
     */
    allowPasswordUser?: boolean | null;
    /**
     * Browser API key, needed when making http request to Apiary.
     */
    apiKey?: string | null;
    /**
     * Authorized domains for widget redirect.
     */
    authorizedDomains?: string[] | null;
    /**
     * Change email template.
     */
    changeEmailTemplate?: Schema$EmailTemplate;
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string | null;
    /**
     * Whether to enable anonymous user.
     */
    enableAnonymousUser?: boolean | null;
    /**
     * Oauth2 provider configuration.
     */
    idpConfig?: Schema$IdpConfig[];
    /**
     * Legacy reset password email template.
     */
    legacyResetPasswordTemplate?: Schema$EmailTemplate;
    /**
     * Reset password email template.
     */
    resetPasswordTemplate?: Schema$EmailTemplate;
    /**
     * Whether to use email sending provided by Firebear.
     */
    useEmailSending?: boolean | null;
    /**
     * Verify email template.
     */
    verifyEmailTemplate?: Schema$EmailTemplate;
  }
  /**
   * Response of setting the project configuration.
   */
  export interface Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse {
    /**
     * Project ID of the relying party.
     */
    projectId?: string | null;
  }
  /**
   * Request to sign out user.
   */
  export interface Schema$IdentitytoolkitRelyingpartySignOutUserRequest {
    /**
     * Instance id token of the app.
     */
    instanceId?: string | null;
    /**
     * The local ID of the user.
     */
    localId?: string | null;
  }
  /**
   * Response of signing out user.
   */
  export interface Schema$IdentitytoolkitRelyingpartySignOutUserResponse {
    /**
     * The local ID of the user.
     */
    localId?: string | null;
  }
  /**
   * Request to signup new user, create anonymous user or anonymous user reauth.
   */
  export interface Schema$IdentitytoolkitRelyingpartySignupNewUserRequest {
    /**
     * The captcha challenge.
     */
    captchaChallenge?: string | null;
    /**
     * Response to the captcha.
     */
    captchaResponse?: string | null;
    /**
     * Whether to disable the user. Only can be used by service account.
     */
    disabled?: boolean | null;
    /**
     * The name of the user.
     */
    displayName?: string | null;
    /**
     * The email of the user.
     */
    email?: string | null;
    /**
     * Mark the email as verified or not. Only can be used by service account.
     */
    emailVerified?: boolean | null;
    /**
     * The GITKit token of the authenticated user.
     */
    idToken?: string | null;
    /**
     * Instance id token of the app.
     */
    instanceId?: string | null;
    /**
     * Privileged caller can create user with specified user id.
     */
    localId?: string | null;
    /**
     * The new password of the user.
     */
    password?: string | null;
    /**
     * Privileged caller can create user with specified phone number.
     */
    phoneNumber?: string | null;
    /**
     * The photo url of the user.
     */
    photoUrl?: string | null;
    /**
     * For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from.
     */
    tenantId?: string | null;
    /**
     * Tenant project number to be used for idp discovery.
     */
    tenantProjectNumber?: string | null;
  }
  /**
   * Request to upload user account in batch.
   */
  export interface Schema$IdentitytoolkitRelyingpartyUploadAccountRequest {
    /**
     * Whether allow overwrite existing account when user local_id exists.
     */
    allowOverwrite?: boolean | null;
    blockSize?: number | null;
    /**
     * The following 4 fields are for standard scrypt algorithm.
     */
    cpuMemCost?: number | null;
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string | null;
    dkLen?: number | null;
    /**
     * The password hash algorithm.
     */
    hashAlgorithm?: string | null;
    /**
     * Memory cost for hash calculation. Used by scrypt similar algorithms.
     */
    memoryCost?: number | null;
    parallelization?: number | null;
    /**
     * Rounds for hash calculation. Used by scrypt and similar algorithms.
     */
    rounds?: number | null;
    /**
     * The salt separator.
     */
    saltSeparator?: string | null;
    /**
     * If true, backend will do sanity check(including duplicate email and federated id) when uploading account.
     */
    sanityCheck?: boolean | null;
    /**
     * The key for to hash the password.
     */
    signerKey?: string | null;
    /**
     * Specify which project (field value is actually project id) to operate. Only used when provided credential.
     */
    targetProjectId?: string | null;
    /**
     * The account info to be stored.
     */
    users?: Schema$UserInfo[];
  }
  /**
   * Request to verify the IDP assertion.
   */
  export interface Schema$IdentitytoolkitRelyingpartyVerifyAssertionRequest {
    /**
     * When it's true, automatically creates a new account if the user doesn't exist. When it's false, allows existing user to sign in normally and throws exception if the user doesn't exist.
     */
    autoCreate?: boolean | null;
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string | null;
    /**
     * The GITKit token of the authenticated user.
     */
    idToken?: string | null;
    /**
     * Instance id token of the app.
     */
    instanceId?: string | null;
    /**
     * The GITKit token for the non-trusted IDP pending to be confirmed by the user.
     */
    pendingIdToken?: string | null;
    /**
     * The post body if the request is a HTTP POST.
     */
    postBody?: string | null;
    /**
     * The URI to which the IDP redirects the user back. It may contain federated login result params added by the IDP.
     */
    requestUri?: string | null;
    /**
     * Whether return 200 and IDP credential rather than throw exception when federated id is already linked.
     */
    returnIdpCredential?: boolean | null;
    /**
     * Whether to return refresh tokens.
     */
    returnRefreshToken?: boolean | null;
    /**
     * Whether return sts id token and refresh token instead of gitkit token.
     */
    returnSecureToken?: boolean | null;
    /**
     * Session ID, which should match the one in previous createAuthUri request.
     */
    sessionId?: string | null;
    /**
     * For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from.
     */
    tenantId?: string | null;
    /**
     * Tenant project number to be used for idp discovery.
     */
    tenantProjectNumber?: string | null;
  }
  /**
   * Request to verify a custom token
   */
  export interface Schema$IdentitytoolkitRelyingpartyVerifyCustomTokenRequest {
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string | null;
    /**
     * Instance id token of the app.
     */
    instanceId?: string | null;
    /**
     * Whether return sts id token and refresh token instead of gitkit token.
     */
    returnSecureToken?: boolean | null;
    /**
     * The custom token to verify
     */
    token?: string | null;
  }
  /**
   * Request to verify the password.
   */
  export interface Schema$IdentitytoolkitRelyingpartyVerifyPasswordRequest {
    /**
     * The captcha challenge.
     */
    captchaChallenge?: string | null;
    /**
     * Response to the captcha.
     */
    captchaResponse?: string | null;
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string | null;
    /**
     * The email of the user.
     */
    email?: string | null;
    /**
     * The GITKit token of the authenticated user.
     */
    idToken?: string | null;
    /**
     * Instance id token of the app.
     */
    instanceId?: string | null;
    /**
     * The password inputed by the user.
     */
    password?: string | null;
    /**
     * The GITKit token for the non-trusted IDP, which is to be confirmed by the user.
     */
    pendingIdToken?: string | null;
    /**
     * Whether return sts id token and refresh token instead of gitkit token.
     */
    returnSecureToken?: boolean | null;
    /**
     * For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from.
     */
    tenantId?: string | null;
    /**
     * Tenant project number to be used for idp discovery.
     */
    tenantProjectNumber?: string | null;
  }
  /**
   * Request for Identitytoolkit-VerifyPhoneNumber
   */
  export interface Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest {
    code?: string | null;
    idToken?: string | null;
    operation?: string | null;
    phoneNumber?: string | null;
    /**
     * The session info previously returned by IdentityToolkit-SendVerificationCode.
     */
    sessionInfo?: string | null;
    temporaryProof?: string | null;
    verificationProof?: string | null;
  }
  /**
   * Response for Identitytoolkit-VerifyPhoneNumber
   */
  export interface Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse {
    expiresIn?: string | null;
    idToken?: string | null;
    isNewUser?: boolean | null;
    localId?: string | null;
    phoneNumber?: string | null;
    refreshToken?: string | null;
    temporaryProof?: string | null;
    temporaryProofExpiresIn?: string | null;
    verificationProof?: string | null;
    verificationProofExpiresIn?: string | null;
  }
  /**
   * Template for a single idp configuration.
   */
  export interface Schema$IdpConfig {
    /**
     * OAuth2 client ID.
     */
    clientId?: string | null;
    /**
     * Whether this IDP is enabled.
     */
    enabled?: boolean | null;
    /**
     * Percent of users who will be prompted/redirected federated login for this IDP.
     */
    experimentPercent?: number | null;
    /**
     * OAuth2 provider.
     */
    provider?: string | null;
    /**
     * OAuth2 client secret.
     */
    secret?: string | null;
    /**
     * Whitelisted client IDs for audience check.
     */
    whitelistedAudiences?: string[] | null;
  }
  /**
   * Request of getting a code for user confirmation (reset password, change email etc.)
   */
  export interface Schema$Relyingparty {
    /**
     * whether or not to install the android app on the device where the link is opened
     */
    androidInstallApp?: boolean | null;
    /**
     * minimum version of the app. if the version on the device is lower than this version then the user is taken to the play store to upgrade the app
     */
    androidMinimumVersion?: string | null;
    /**
     * android package name of the android app to handle the action code
     */
    androidPackageName?: string | null;
    /**
     * whether or not the app can handle the oob code without first going to web
     */
    canHandleCodeInApp?: boolean | null;
    /**
     * The recaptcha response from the user.
     */
    captchaResp?: string | null;
    /**
     * The recaptcha challenge presented to the user.
     */
    challenge?: string | null;
    /**
     * The url to continue to the Gitkit app
     */
    continueUrl?: string | null;
    /**
     * The email of the user.
     */
    email?: string | null;
    /**
     * The user's Gitkit login token for email change.
     */
    idToken?: string | null;
    /**
     * iOS app store id to download the app if it's not already installed
     */
    iOSAppStoreId?: string | null;
    /**
     * the iOS bundle id of iOS app to handle the action code
     */
    iOSBundleId?: string | null;
    /**
     * The fixed string "identitytoolkit#relyingparty".
     */
    kind?: string | null;
    /**
     * The new email if the code is for email change.
     */
    newEmail?: string | null;
    /**
     * The request type.
     */
    requestType?: string | null;
    /**
     * The IP address of the user.
     */
    userIp?: string | null;
  }
  /**
   * Response of resetting the password.
   */
  export interface Schema$ResetPasswordResponse {
    /**
     * The user's email. If the out-of-band code is for email recovery, the user's original email.
     */
    email?: string | null;
    /**
     * The fixed string "identitytoolkit#ResetPasswordResponse".
     */
    kind?: string | null;
    /**
     * If the out-of-band code is for email recovery, the user's new email.
     */
    newEmail?: string | null;
    /**
     * The request type.
     */
    requestType?: string | null;
  }
  /**
   * Respone of setting the account information.
   */
  export interface Schema$SetAccountInfoResponse {
    /**
     * The name of the user.
     */
    displayName?: string | null;
    /**
     * The email of the user.
     */
    email?: string | null;
    /**
     * If email has been verified.
     */
    emailVerified?: boolean | null;
    /**
     * If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
     */
    expiresIn?: string | null;
    /**
     * The Gitkit id token to login the newly sign up user.
     */
    idToken?: string | null;
    /**
     * The fixed string "identitytoolkit#SetAccountInfoResponse".
     */
    kind?: string | null;
    /**
     * The local ID of the user.
     */
    localId?: string | null;
    /**
     * The new email the user attempts to change to.
     */
    newEmail?: string | null;
    /**
     * The user's hashed password.
     */
    passwordHash?: string | null;
    /**
     * The photo url of the user.
     */
    photoUrl?: string | null;
    /**
     * The user's profiles at the associated IdPs.
     */
    providerUserInfo?: Array<{
      displayName?: string;
      federatedId?: string;
      photoUrl?: string;
      providerId?: string;
    }> | null;
    /**
     * If idToken is STS id token, then this field will be refresh token.
     */
    refreshToken?: string | null;
  }
  /**
   * Response of signing up new user, creating anonymous user or anonymous user reauth.
   */
  export interface Schema$SignupNewUserResponse {
    /**
     * The name of the user.
     */
    displayName?: string | null;
    /**
     * The email of the user.
     */
    email?: string | null;
    /**
     * If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
     */
    expiresIn?: string | null;
    /**
     * The Gitkit id token to login the newly sign up user.
     */
    idToken?: string | null;
    /**
     * The fixed string "identitytoolkit#SignupNewUserResponse".
     */
    kind?: string | null;
    /**
     * The RP local ID of the user.
     */
    localId?: string | null;
    /**
     * If idToken is STS id token, then this field will be refresh token.
     */
    refreshToken?: string | null;
  }
  /**
   * Respone of uploading accounts in batch.
   */
  export interface Schema$UploadAccountResponse {
    /**
     * The error encountered while processing the account info.
     */
    error?: Array<{index?: number; message?: string}> | null;
    /**
     * The fixed string "identitytoolkit#UploadAccountResponse".
     */
    kind?: string | null;
  }
  /**
   * Template for an individual account info.
   */
  export interface Schema$UserInfo {
    /**
     * User creation timestamp.
     */
    createdAt?: string | null;
    /**
     * The custom attributes to be set in the user's id token.
     */
    customAttributes?: string | null;
    /**
     * Whether the user is authenticated by the developer.
     */
    customAuth?: boolean | null;
    /**
     * Whether the user is disabled.
     */
    disabled?: boolean | null;
    /**
     * The name of the user.
     */
    displayName?: string | null;
    /**
     * The email of the user.
     */
    email?: string | null;
    /**
     * Whether the email has been verified.
     */
    emailVerified?: boolean | null;
    /**
     * last login timestamp.
     */
    lastLoginAt?: string | null;
    /**
     * The local ID of the user.
     */
    localId?: string | null;
    /**
     * The user's hashed password.
     */
    passwordHash?: string | null;
    /**
     * The timestamp when the password was last updated.
     */
    passwordUpdatedAt?: number | null;
    /**
     * User's phone number.
     */
    phoneNumber?: string | null;
    /**
     * The URL of the user profile photo.
     */
    photoUrl?: string | null;
    /**
     * The IDP of the user.
     */
    providerUserInfo?: Array<{
      displayName?: string;
      email?: string;
      federatedId?: string;
      phoneNumber?: string;
      photoUrl?: string;
      providerId?: string;
      rawId?: string;
      screenName?: string;
    }> | null;
    /**
     * The user's plain text password.
     */
    rawPassword?: string | null;
    /**
     * The user's password salt.
     */
    salt?: string | null;
    /**
     * User's screen name at Twitter or login name at Github.
     */
    screenName?: string | null;
    /**
     * Timestamp in seconds for valid login token.
     */
    validSince?: string | null;
    /**
     * Version of the user's password.
     */
    version?: number | null;
  }
  /**
   * Response of verifying the IDP assertion.
   */
  export interface Schema$VerifyAssertionResponse {
    /**
     * The action code.
     */
    action?: string | null;
    /**
     * URL for OTA app installation.
     */
    appInstallationUrl?: string | null;
    /**
     * The custom scheme used by mobile app.
     */
    appScheme?: string | null;
    /**
     * The opaque value used by the client to maintain context info between the authentication request and the IDP callback.
     */
    context?: string | null;
    /**
     * The birth date of the IdP account.
     */
    dateOfBirth?: string | null;
    /**
     * The display name of the user.
     */
    displayName?: string | null;
    /**
     * The email returned by the IdP. NOTE: The federated login user may not own the email.
     */
    email?: string | null;
    /**
     * It's true if the email is recycled.
     */
    emailRecycled?: boolean | null;
    /**
     * The value is true if the IDP is also the email provider. It means the user owns the email.
     */
    emailVerified?: boolean | null;
    /**
     * Client error code.
     */
    errorMessage?: string | null;
    /**
     * If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
     */
    expiresIn?: string | null;
    /**
     * The unique ID identifies the IdP account.
     */
    federatedId?: string | null;
    /**
     * The first name of the user.
     */
    firstName?: string | null;
    /**
     * The full name of the user.
     */
    fullName?: string | null;
    /**
     * The ID token.
     */
    idToken?: string | null;
    /**
     * It's the identifier param in the createAuthUri request if the identifier is an email. It can be used to check whether the user input email is different from the asserted email.
     */
    inputEmail?: string | null;
    /**
     * True if it's a new user sign-in, false if it's a returning user.
     */
    isNewUser?: boolean | null;
    /**
     * The fixed string "identitytoolkit#VerifyAssertionResponse".
     */
    kind?: string | null;
    /**
     * The language preference of the user.
     */
    language?: string | null;
    /**
     * The last name of the user.
     */
    lastName?: string | null;
    /**
     * The RP local ID if it's already been mapped to the IdP account identified by the federated ID.
     */
    localId?: string | null;
    /**
     * Whether the assertion is from a non-trusted IDP and need account linking confirmation.
     */
    needConfirmation?: boolean | null;
    /**
     * Whether need client to supply email to complete the federated login flow.
     */
    needEmail?: boolean | null;
    /**
     * The nick name of the user.
     */
    nickName?: string | null;
    /**
     * The OAuth2 access token.
     */
    oauthAccessToken?: string | null;
    /**
     * The OAuth2 authorization code.
     */
    oauthAuthorizationCode?: string | null;
    /**
     * The lifetime in seconds of the OAuth2 access token.
     */
    oauthExpireIn?: number | null;
    /**
     * The OIDC id token.
     */
    oauthIdToken?: string | null;
    /**
     * The user approved request token for the OpenID OAuth extension.
     */
    oauthRequestToken?: string | null;
    /**
     * The scope for the OpenID OAuth extension.
     */
    oauthScope?: string | null;
    /**
     * The OAuth1 access token secret.
     */
    oauthTokenSecret?: string | null;
    /**
     * The original email stored in the mapping storage. It's returned when the federated ID is associated to a different email.
     */
    originalEmail?: string | null;
    /**
     * The URI of the public accessible profiel picture.
     */
    photoUrl?: string | null;
    /**
     * The IdP ID. For white listed IdPs it's a short domain name e.g. google.com, aol.com, live.net and yahoo.com. If the "providerId" param is set to OpenID OP identifer other than the whilte listed IdPs the OP identifier is returned. If the "identifier" param is federated ID in the createAuthUri request. The domain part of the federated ID is returned.
     */
    providerId?: string | null;
    /**
     * Raw IDP-returned user info.
     */
    rawUserInfo?: string | null;
    /**
     * If idToken is STS id token, then this field will be refresh token.
     */
    refreshToken?: string | null;
    /**
     * The screen_name of a Twitter user or the login name at Github.
     */
    screenName?: string | null;
    /**
     * The timezone of the user.
     */
    timeZone?: string | null;
    /**
     * When action is 'map', contains the idps which can be used for confirmation.
     */
    verifiedProvider?: string[] | null;
  }
  /**
   * Response from verifying a custom token
   */
  export interface Schema$VerifyCustomTokenResponse {
    /**
     * If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
     */
    expiresIn?: string | null;
    /**
     * The GITKit token for authenticated user.
     */
    idToken?: string | null;
    /**
     * True if it's a new user sign-in, false if it's a returning user.
     */
    isNewUser?: boolean | null;
    /**
     * The fixed string "identitytoolkit#VerifyCustomTokenResponse".
     */
    kind?: string | null;
    /**
     * If idToken is STS id token, then this field will be refresh token.
     */
    refreshToken?: string | null;
  }
  /**
   * Request of verifying the password.
   */
  export interface Schema$VerifyPasswordResponse {
    /**
     * The name of the user.
     */
    displayName?: string | null;
    /**
     * The email returned by the IdP. NOTE: The federated login user may not own the email.
     */
    email?: string | null;
    /**
     * If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
     */
    expiresIn?: string | null;
    /**
     * The GITKit token for authenticated user.
     */
    idToken?: string | null;
    /**
     * The fixed string "identitytoolkit#VerifyPasswordResponse".
     */
    kind?: string | null;
    /**
     * The RP local ID if it's already been mapped to the IdP account identified by the federated ID.
     */
    localId?: string | null;
    /**
     * The OAuth2 access token.
     */
    oauthAccessToken?: string | null;
    /**
     * The OAuth2 authorization code.
     */
    oauthAuthorizationCode?: string | null;
    /**
     * The lifetime in seconds of the OAuth2 access token.
     */
    oauthExpireIn?: number | null;
    /**
     * The URI of the user's photo at IdP
     */
    photoUrl?: string | null;
    /**
     * If idToken is STS id token, then this field will be refresh token.
     */
    refreshToken?: string | null;
    /**
     * Whether the email is registered.
     */
    registered?: boolean | null;
  }

  export class Resource$Relyingparty {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates the URI used by the IdP to authenticate the user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.relyingparty.createAuthUri({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "appId": "my_appId",
     *       //   "authFlowType": "my_authFlowType",
     *       //   "clientId": "my_clientId",
     *       //   "context": "my_context",
     *       //   "continueUri": "my_continueUri",
     *       //   "customParameter": {},
     *       //   "hostedDomain": "my_hostedDomain",
     *       //   "identifier": "my_identifier",
     *       //   "oauthConsumerKey": "my_oauthConsumerKey",
     *       //   "oauthScope": "my_oauthScope",
     *       //   "openidRealm": "my_openidRealm",
     *       //   "otaApp": "my_otaApp",
     *       //   "providerId": "my_providerId",
     *       //   "sessionId": "my_sessionId",
     *       //   "tenantId": "my_tenantId",
     *       //   "tenantProjectNumber": "my_tenantProjectNumber"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allProviders": [],
     *   //   "authUri": "my_authUri",
     *   //   "captchaRequired": false,
     *   //   "forExistingProvider": false,
     *   //   "kind": "my_kind",
     *   //   "providerId": "my_providerId",
     *   //   "registered": false,
     *   //   "sessionId": "my_sessionId",
     *   //   "signinMethods": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    createAuthUri(
      params: Params$Resource$Relyingparty$Createauthuri,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    createAuthUri(
      params?: Params$Resource$Relyingparty$Createauthuri,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CreateAuthUriResponse>>;
    createAuthUri(
      params: Params$Resource$Relyingparty$Createauthuri,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    createAuthUri(
      params: Params$Resource$Relyingparty$Createauthuri,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CreateAuthUriResponse>,
      callback: BodyResponseCallback<Schema$CreateAuthUriResponse>
    ): void;
    createAuthUri(
      params: Params$Resource$Relyingparty$Createauthuri,
      callback: BodyResponseCallback<Schema$CreateAuthUriResponse>
    ): void;
    createAuthUri(
      callback: BodyResponseCallback<Schema$CreateAuthUriResponse>
    ): void;
    createAuthUri(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Createauthuri
        | BodyResponseCallback<Schema$CreateAuthUriResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CreateAuthUriResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CreateAuthUriResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CreateAuthUriResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Createauthuri;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Createauthuri;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/createAuthUri'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$CreateAuthUriResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CreateAuthUriResponse>(parameters);
      }
    }

    /**
     * Delete user account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.relyingparty.deleteAccount({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "delegatedProjectNumber": "my_delegatedProjectNumber",
     *       //   "idToken": "my_idToken",
     *       //   "localId": "my_localId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    deleteAccount(
      params: Params$Resource$Relyingparty$Deleteaccount,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    deleteAccount(
      params?: Params$Resource$Relyingparty$Deleteaccount,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DeleteAccountResponse>>;
    deleteAccount(
      params: Params$Resource$Relyingparty$Deleteaccount,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteAccount(
      params: Params$Resource$Relyingparty$Deleteaccount,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DeleteAccountResponse>,
      callback: BodyResponseCallback<Schema$DeleteAccountResponse>
    ): void;
    deleteAccount(
      params: Params$Resource$Relyingparty$Deleteaccount,
      callback: BodyResponseCallback<Schema$DeleteAccountResponse>
    ): void;
    deleteAccount(
      callback: BodyResponseCallback<Schema$DeleteAccountResponse>
    ): void;
    deleteAccount(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Deleteaccount
        | BodyResponseCallback<Schema$DeleteAccountResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DeleteAccountResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DeleteAccountResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DeleteAccountResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Deleteaccount;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Deleteaccount;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/deleteAccount'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$DeleteAccountResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DeleteAccountResponse>(parameters);
      }
    }

    /**
     * Batch download user accounts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v3');
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
     *   const res = await identitytoolkit.relyingparty.downloadAccount({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "delegatedProjectNumber": "my_delegatedProjectNumber",
     *       //   "maxResults": 0,
     *       //   "nextPageToken": "my_nextPageToken",
     *       //   "targetProjectId": "my_targetProjectId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "users": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    downloadAccount(
      params: Params$Resource$Relyingparty$Downloadaccount,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    downloadAccount(
      params?: Params$Resource$Relyingparty$Downloadaccount,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DownloadAccountResponse>>;
    downloadAccount(
      params: Params$Resource$Relyingparty$Downloadaccount,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    downloadAccount(
      params: Params$Resource$Relyingparty$Downloadaccount,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DownloadAccountResponse>,
      callback: BodyResponseCallback<Schema$DownloadAccountResponse>
    ): void;
    downloadAccount(
      params: Params$Resource$Relyingparty$Downloadaccount,
      callback: BodyResponseCallback<Schema$DownloadAccountResponse>
    ): void;
    downloadAccount(
      callback: BodyResponseCallback<Schema$DownloadAccountResponse>
    ): void;
    downloadAccount(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Downloadaccount
        | BodyResponseCallback<Schema$DownloadAccountResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DownloadAccountResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DownloadAccountResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DownloadAccountResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Downloadaccount;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Downloadaccount;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/downloadAccount'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$DownloadAccountResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DownloadAccountResponse>(parameters);
      }
    }

    /**
     * Reset password for a user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.relyingparty.emailLinkSignin({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "email": "my_email",
     *       //   "idToken": "my_idToken",
     *       //   "oobCode": "my_oobCode"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "email": "my_email",
     *   //   "expiresIn": "my_expiresIn",
     *   //   "idToken": "my_idToken",
     *   //   "isNewUser": false,
     *   //   "kind": "my_kind",
     *   //   "localId": "my_localId",
     *   //   "refreshToken": "my_refreshToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    emailLinkSignin(
      params: Params$Resource$Relyingparty$Emaillinksignin,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    emailLinkSignin(
      params?: Params$Resource$Relyingparty$Emaillinksignin,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EmailLinkSigninResponse>>;
    emailLinkSignin(
      params: Params$Resource$Relyingparty$Emaillinksignin,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    emailLinkSignin(
      params: Params$Resource$Relyingparty$Emaillinksignin,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EmailLinkSigninResponse>,
      callback: BodyResponseCallback<Schema$EmailLinkSigninResponse>
    ): void;
    emailLinkSignin(
      params: Params$Resource$Relyingparty$Emaillinksignin,
      callback: BodyResponseCallback<Schema$EmailLinkSigninResponse>
    ): void;
    emailLinkSignin(
      callback: BodyResponseCallback<Schema$EmailLinkSigninResponse>
    ): void;
    emailLinkSignin(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Emaillinksignin
        | BodyResponseCallback<Schema$EmailLinkSigninResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EmailLinkSigninResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EmailLinkSigninResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EmailLinkSigninResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Emaillinksignin;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Emaillinksignin;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/emailLinkSignin'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$EmailLinkSigninResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EmailLinkSigninResponse>(parameters);
      }
    }

    /**
     * Returns the account info.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.relyingparty.getAccountInfo({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "delegatedProjectNumber": "my_delegatedProjectNumber",
     *       //   "email": [],
     *       //   "idToken": "my_idToken",
     *       //   "localId": [],
     *       //   "phoneNumber": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "users": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getAccountInfo(
      params: Params$Resource$Relyingparty$Getaccountinfo,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getAccountInfo(
      params?: Params$Resource$Relyingparty$Getaccountinfo,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GetAccountInfoResponse>>;
    getAccountInfo(
      params: Params$Resource$Relyingparty$Getaccountinfo,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getAccountInfo(
      params: Params$Resource$Relyingparty$Getaccountinfo,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetAccountInfoResponse>,
      callback: BodyResponseCallback<Schema$GetAccountInfoResponse>
    ): void;
    getAccountInfo(
      params: Params$Resource$Relyingparty$Getaccountinfo,
      callback: BodyResponseCallback<Schema$GetAccountInfoResponse>
    ): void;
    getAccountInfo(
      callback: BodyResponseCallback<Schema$GetAccountInfoResponse>
    ): void;
    getAccountInfo(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Getaccountinfo
        | BodyResponseCallback<Schema$GetAccountInfoResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetAccountInfoResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetAccountInfoResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GetAccountInfoResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Getaccountinfo;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Getaccountinfo;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/getAccountInfo'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GetAccountInfoResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetAccountInfoResponse>(parameters);
      }
    }

    /**
     * Get a code for user action confirmation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.relyingparty.getOobConfirmationCode({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "androidInstallApp": false,
     *       //   "androidMinimumVersion": "my_androidMinimumVersion",
     *       //   "androidPackageName": "my_androidPackageName",
     *       //   "canHandleCodeInApp": false,
     *       //   "captchaResp": "my_captchaResp",
     *       //   "challenge": "my_challenge",
     *       //   "continueUrl": "my_continueUrl",
     *       //   "email": "my_email",
     *       //   "iOSAppStoreId": "my_iOSAppStoreId",
     *       //   "iOSBundleId": "my_iOSBundleId",
     *       //   "idToken": "my_idToken",
     *       //   "kind": "my_kind",
     *       //   "newEmail": "my_newEmail",
     *       //   "requestType": "my_requestType",
     *       //   "userIp": "my_userIp"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "email": "my_email",
     *   //   "kind": "my_kind",
     *   //   "oobCode": "my_oobCode"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getOobConfirmationCode(
      params: Params$Resource$Relyingparty$Getoobconfirmationcode,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getOobConfirmationCode(
      params?: Params$Resource$Relyingparty$Getoobconfirmationcode,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GetOobConfirmationCodeResponse>>;
    getOobConfirmationCode(
      params: Params$Resource$Relyingparty$Getoobconfirmationcode,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getOobConfirmationCode(
      params: Params$Resource$Relyingparty$Getoobconfirmationcode,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetOobConfirmationCodeResponse>,
      callback: BodyResponseCallback<Schema$GetOobConfirmationCodeResponse>
    ): void;
    getOobConfirmationCode(
      params: Params$Resource$Relyingparty$Getoobconfirmationcode,
      callback: BodyResponseCallback<Schema$GetOobConfirmationCodeResponse>
    ): void;
    getOobConfirmationCode(
      callback: BodyResponseCallback<Schema$GetOobConfirmationCodeResponse>
    ): void;
    getOobConfirmationCode(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Getoobconfirmationcode
        | BodyResponseCallback<Schema$GetOobConfirmationCodeResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetOobConfirmationCodeResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetOobConfirmationCodeResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GetOobConfirmationCodeResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Getoobconfirmationcode;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Getoobconfirmationcode;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/identitytoolkit/v3/relyingparty/getOobConfirmationCode'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GetOobConfirmationCodeResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetOobConfirmationCodeResponse>(
          parameters
        );
      }
    }

    /**
     * Get project configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.relyingparty.getProjectConfig({
     *     // Delegated GCP project number of the request.
     *     delegatedProjectNumber: 'placeholder-value',
     *     // GCP project number of the request.
     *     projectNumber: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allowPasswordUser": false,
     *   //   "apiKey": "my_apiKey",
     *   //   "authorizedDomains": [],
     *   //   "changeEmailTemplate": {},
     *   //   "dynamicLinksDomain": "my_dynamicLinksDomain",
     *   //   "enableAnonymousUser": false,
     *   //   "idpConfig": [],
     *   //   "legacyResetPasswordTemplate": {},
     *   //   "projectId": "my_projectId",
     *   //   "resetPasswordTemplate": {},
     *   //   "useEmailSending": false,
     *   //   "verifyEmailTemplate": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getProjectConfig(
      params: Params$Resource$Relyingparty$Getprojectconfig,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getProjectConfig(
      params?: Params$Resource$Relyingparty$Getprojectconfig,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse>
    >;
    getProjectConfig(
      params: Params$Resource$Relyingparty$Getprojectconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getProjectConfig(
      params: Params$Resource$Relyingparty$Getprojectconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse>,
      callback: BodyResponseCallback<Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse>
    ): void;
    getProjectConfig(
      params: Params$Resource$Relyingparty$Getprojectconfig,
      callback: BodyResponseCallback<Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse>
    ): void;
    getProjectConfig(
      callback: BodyResponseCallback<Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse>
    ): void;
    getProjectConfig(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Getprojectconfig
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Getprojectconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Getprojectconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/getProjectConfig'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
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
        createAPIRequest<Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IdentitytoolkitRelyingpartyGetProjectConfigResponse>(
          parameters
        );
      }
    }

    /**
     * Get token signing public key.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.relyingparty.getPublicKeys({});
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
    getPublicKeys(
      params: Params$Resource$Relyingparty$Getpublickeys,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getPublicKeys(
      params?: Params$Resource$Relyingparty$Getpublickeys,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse>
    >;
    getPublicKeys(
      params: Params$Resource$Relyingparty$Getpublickeys,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getPublicKeys(
      params: Params$Resource$Relyingparty$Getpublickeys,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse>,
      callback: BodyResponseCallback<Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse>
    ): void;
    getPublicKeys(
      params: Params$Resource$Relyingparty$Getpublickeys,
      callback: BodyResponseCallback<Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse>
    ): void;
    getPublicKeys(
      callback: BodyResponseCallback<Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse>
    ): void;
    getPublicKeys(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Getpublickeys
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Getpublickeys;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Getpublickeys;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/publicKeys'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
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
        createAPIRequest<Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IdentitytoolkitRelyingpartyGetPublicKeysResponse>(
          parameters
        );
      }
    }

    /**
     * Get recaptcha secure param.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.relyingparty.getRecaptchaParam({});
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "kind": "my_kind",
     *   //   "recaptchaSiteKey": "my_recaptchaSiteKey",
     *   //   "recaptchaStoken": "my_recaptchaStoken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getRecaptchaParam(
      params: Params$Resource$Relyingparty$Getrecaptchaparam,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getRecaptchaParam(
      params?: Params$Resource$Relyingparty$Getrecaptchaparam,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GetRecaptchaParamResponse>>;
    getRecaptchaParam(
      params: Params$Resource$Relyingparty$Getrecaptchaparam,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getRecaptchaParam(
      params: Params$Resource$Relyingparty$Getrecaptchaparam,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetRecaptchaParamResponse>,
      callback: BodyResponseCallback<Schema$GetRecaptchaParamResponse>
    ): void;
    getRecaptchaParam(
      params: Params$Resource$Relyingparty$Getrecaptchaparam,
      callback: BodyResponseCallback<Schema$GetRecaptchaParamResponse>
    ): void;
    getRecaptchaParam(
      callback: BodyResponseCallback<Schema$GetRecaptchaParamResponse>
    ): void;
    getRecaptchaParam(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Getrecaptchaparam
        | BodyResponseCallback<Schema$GetRecaptchaParamResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetRecaptchaParamResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetRecaptchaParamResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GetRecaptchaParamResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Getrecaptchaparam;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Getrecaptchaparam;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/getRecaptchaParam'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
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
        createAPIRequest<Schema$GetRecaptchaParamResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetRecaptchaParamResponse>(parameters);
      }
    }

    /**
     * Reset password for a user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.relyingparty.resetPassword({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "email": "my_email",
     *       //   "newPassword": "my_newPassword",
     *       //   "oldPassword": "my_oldPassword",
     *       //   "oobCode": "my_oobCode"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "email": "my_email",
     *   //   "kind": "my_kind",
     *   //   "newEmail": "my_newEmail",
     *   //   "requestType": "my_requestType"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    resetPassword(
      params: Params$Resource$Relyingparty$Resetpassword,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    resetPassword(
      params?: Params$Resource$Relyingparty$Resetpassword,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ResetPasswordResponse>>;
    resetPassword(
      params: Params$Resource$Relyingparty$Resetpassword,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resetPassword(
      params: Params$Resource$Relyingparty$Resetpassword,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ResetPasswordResponse>,
      callback: BodyResponseCallback<Schema$ResetPasswordResponse>
    ): void;
    resetPassword(
      params: Params$Resource$Relyingparty$Resetpassword,
      callback: BodyResponseCallback<Schema$ResetPasswordResponse>
    ): void;
    resetPassword(
      callback: BodyResponseCallback<Schema$ResetPasswordResponse>
    ): void;
    resetPassword(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Resetpassword
        | BodyResponseCallback<Schema$ResetPasswordResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ResetPasswordResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ResetPasswordResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ResetPasswordResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Resetpassword;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Resetpassword;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/resetPassword'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ResetPasswordResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ResetPasswordResponse>(parameters);
      }
    }

    /**
     * Send SMS verification code.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.relyingparty.sendVerificationCode({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "iosReceipt": "my_iosReceipt",
     *       //   "iosSecret": "my_iosSecret",
     *       //   "phoneNumber": "my_phoneNumber",
     *       //   "recaptchaToken": "my_recaptchaToken"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "sessionInfo": "my_sessionInfo"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    sendVerificationCode(
      params: Params$Resource$Relyingparty$Sendverificationcode,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    sendVerificationCode(
      params?: Params$Resource$Relyingparty$Sendverificationcode,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse>
    >;
    sendVerificationCode(
      params: Params$Resource$Relyingparty$Sendverificationcode,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    sendVerificationCode(
      params: Params$Resource$Relyingparty$Sendverificationcode,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse>,
      callback: BodyResponseCallback<Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse>
    ): void;
    sendVerificationCode(
      params: Params$Resource$Relyingparty$Sendverificationcode,
      callback: BodyResponseCallback<Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse>
    ): void;
    sendVerificationCode(
      callback: BodyResponseCallback<Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse>
    ): void;
    sendVerificationCode(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Sendverificationcode
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Sendverificationcode;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Sendverificationcode;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/sendVerificationCode'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IdentitytoolkitRelyingpartySendVerificationCodeResponse>(
          parameters
        );
      }
    }

    /**
     * Set account info for a user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.relyingparty.setAccountInfo({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "captchaChallenge": "my_captchaChallenge",
     *       //   "captchaResponse": "my_captchaResponse",
     *       //   "createdAt": "my_createdAt",
     *       //   "customAttributes": "my_customAttributes",
     *       //   "delegatedProjectNumber": "my_delegatedProjectNumber",
     *       //   "deleteAttribute": [],
     *       //   "deleteProvider": [],
     *       //   "disableUser": false,
     *       //   "displayName": "my_displayName",
     *       //   "email": "my_email",
     *       //   "emailVerified": false,
     *       //   "idToken": "my_idToken",
     *       //   "instanceId": "my_instanceId",
     *       //   "lastLoginAt": "my_lastLoginAt",
     *       //   "localId": "my_localId",
     *       //   "oobCode": "my_oobCode",
     *       //   "password": "my_password",
     *       //   "phoneNumber": "my_phoneNumber",
     *       //   "photoUrl": "my_photoUrl",
     *       //   "provider": [],
     *       //   "returnSecureToken": false,
     *       //   "upgradeToFederatedLogin": false,
     *       //   "validSince": "my_validSince"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "email": "my_email",
     *   //   "emailVerified": false,
     *   //   "expiresIn": "my_expiresIn",
     *   //   "idToken": "my_idToken",
     *   //   "kind": "my_kind",
     *   //   "localId": "my_localId",
     *   //   "newEmail": "my_newEmail",
     *   //   "passwordHash": "my_passwordHash",
     *   //   "photoUrl": "my_photoUrl",
     *   //   "providerUserInfo": [],
     *   //   "refreshToken": "my_refreshToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setAccountInfo(
      params: Params$Resource$Relyingparty$Setaccountinfo,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setAccountInfo(
      params?: Params$Resource$Relyingparty$Setaccountinfo,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SetAccountInfoResponse>>;
    setAccountInfo(
      params: Params$Resource$Relyingparty$Setaccountinfo,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setAccountInfo(
      params: Params$Resource$Relyingparty$Setaccountinfo,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SetAccountInfoResponse>,
      callback: BodyResponseCallback<Schema$SetAccountInfoResponse>
    ): void;
    setAccountInfo(
      params: Params$Resource$Relyingparty$Setaccountinfo,
      callback: BodyResponseCallback<Schema$SetAccountInfoResponse>
    ): void;
    setAccountInfo(
      callback: BodyResponseCallback<Schema$SetAccountInfoResponse>
    ): void;
    setAccountInfo(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Setaccountinfo
        | BodyResponseCallback<Schema$SetAccountInfoResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SetAccountInfoResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SetAccountInfoResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SetAccountInfoResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Setaccountinfo;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Setaccountinfo;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/setAccountInfo'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SetAccountInfoResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SetAccountInfoResponse>(parameters);
      }
    }

    /**
     * Set project configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.relyingparty.setProjectConfig({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "allowPasswordUser": false,
     *       //   "apiKey": "my_apiKey",
     *       //   "authorizedDomains": [],
     *       //   "changeEmailTemplate": {},
     *       //   "delegatedProjectNumber": "my_delegatedProjectNumber",
     *       //   "enableAnonymousUser": false,
     *       //   "idpConfig": [],
     *       //   "legacyResetPasswordTemplate": {},
     *       //   "resetPasswordTemplate": {},
     *       //   "useEmailSending": false,
     *       //   "verifyEmailTemplate": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "projectId": "my_projectId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setProjectConfig(
      params: Params$Resource$Relyingparty$Setprojectconfig,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setProjectConfig(
      params?: Params$Resource$Relyingparty$Setprojectconfig,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse>
    >;
    setProjectConfig(
      params: Params$Resource$Relyingparty$Setprojectconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setProjectConfig(
      params: Params$Resource$Relyingparty$Setprojectconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse>,
      callback: BodyResponseCallback<Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse>
    ): void;
    setProjectConfig(
      params: Params$Resource$Relyingparty$Setprojectconfig,
      callback: BodyResponseCallback<Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse>
    ): void;
    setProjectConfig(
      callback: BodyResponseCallback<Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse>
    ): void;
    setProjectConfig(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Setprojectconfig
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Setprojectconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Setprojectconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/setProjectConfig'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IdentitytoolkitRelyingpartySetProjectConfigResponse>(
          parameters
        );
      }
    }

    /**
     * Sign out user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.relyingparty.signOutUser({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "instanceId": "my_instanceId",
     *       //   "localId": "my_localId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "localId": "my_localId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    signOutUser(
      params: Params$Resource$Relyingparty$Signoutuser,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    signOutUser(
      params?: Params$Resource$Relyingparty$Signoutuser,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$IdentitytoolkitRelyingpartySignOutUserResponse>
    >;
    signOutUser(
      params: Params$Resource$Relyingparty$Signoutuser,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    signOutUser(
      params: Params$Resource$Relyingparty$Signoutuser,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartySignOutUserResponse>,
      callback: BodyResponseCallback<Schema$IdentitytoolkitRelyingpartySignOutUserResponse>
    ): void;
    signOutUser(
      params: Params$Resource$Relyingparty$Signoutuser,
      callback: BodyResponseCallback<Schema$IdentitytoolkitRelyingpartySignOutUserResponse>
    ): void;
    signOutUser(
      callback: BodyResponseCallback<Schema$IdentitytoolkitRelyingpartySignOutUserResponse>
    ): void;
    signOutUser(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Signoutuser
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartySignOutUserResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartySignOutUserResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartySignOutUserResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$IdentitytoolkitRelyingpartySignOutUserResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Signoutuser;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Signoutuser;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/signOutUser'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$IdentitytoolkitRelyingpartySignOutUserResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IdentitytoolkitRelyingpartySignOutUserResponse>(
          parameters
        );
      }
    }

    /**
     * Signup new user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.relyingparty.signupNewUser({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "captchaChallenge": "my_captchaChallenge",
     *       //   "captchaResponse": "my_captchaResponse",
     *       //   "disabled": false,
     *       //   "displayName": "my_displayName",
     *       //   "email": "my_email",
     *       //   "emailVerified": false,
     *       //   "idToken": "my_idToken",
     *       //   "instanceId": "my_instanceId",
     *       //   "localId": "my_localId",
     *       //   "password": "my_password",
     *       //   "phoneNumber": "my_phoneNumber",
     *       //   "photoUrl": "my_photoUrl",
     *       //   "tenantId": "my_tenantId",
     *       //   "tenantProjectNumber": "my_tenantProjectNumber"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "email": "my_email",
     *   //   "expiresIn": "my_expiresIn",
     *   //   "idToken": "my_idToken",
     *   //   "kind": "my_kind",
     *   //   "localId": "my_localId",
     *   //   "refreshToken": "my_refreshToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    signupNewUser(
      params: Params$Resource$Relyingparty$Signupnewuser,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    signupNewUser(
      params?: Params$Resource$Relyingparty$Signupnewuser,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SignupNewUserResponse>>;
    signupNewUser(
      params: Params$Resource$Relyingparty$Signupnewuser,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    signupNewUser(
      params: Params$Resource$Relyingparty$Signupnewuser,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SignupNewUserResponse>,
      callback: BodyResponseCallback<Schema$SignupNewUserResponse>
    ): void;
    signupNewUser(
      params: Params$Resource$Relyingparty$Signupnewuser,
      callback: BodyResponseCallback<Schema$SignupNewUserResponse>
    ): void;
    signupNewUser(
      callback: BodyResponseCallback<Schema$SignupNewUserResponse>
    ): void;
    signupNewUser(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Signupnewuser
        | BodyResponseCallback<Schema$SignupNewUserResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SignupNewUserResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SignupNewUserResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SignupNewUserResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Signupnewuser;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Signupnewuser;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/signupNewUser'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SignupNewUserResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SignupNewUserResponse>(parameters);
      }
    }

    /**
     * Batch upload existing user accounts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v3');
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
     *   const res = await identitytoolkit.relyingparty.uploadAccount({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "allowOverwrite": false,
     *       //   "blockSize": 0,
     *       //   "cpuMemCost": 0,
     *       //   "delegatedProjectNumber": "my_delegatedProjectNumber",
     *       //   "dkLen": 0,
     *       //   "hashAlgorithm": "my_hashAlgorithm",
     *       //   "memoryCost": 0,
     *       //   "parallelization": 0,
     *       //   "rounds": 0,
     *       //   "saltSeparator": "my_saltSeparator",
     *       //   "sanityCheck": false,
     *       //   "signerKey": "my_signerKey",
     *       //   "targetProjectId": "my_targetProjectId",
     *       //   "users": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "error": [],
     *   //   "kind": "my_kind"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    uploadAccount(
      params: Params$Resource$Relyingparty$Uploadaccount,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    uploadAccount(
      params?: Params$Resource$Relyingparty$Uploadaccount,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UploadAccountResponse>>;
    uploadAccount(
      params: Params$Resource$Relyingparty$Uploadaccount,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    uploadAccount(
      params: Params$Resource$Relyingparty$Uploadaccount,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UploadAccountResponse>,
      callback: BodyResponseCallback<Schema$UploadAccountResponse>
    ): void;
    uploadAccount(
      params: Params$Resource$Relyingparty$Uploadaccount,
      callback: BodyResponseCallback<Schema$UploadAccountResponse>
    ): void;
    uploadAccount(
      callback: BodyResponseCallback<Schema$UploadAccountResponse>
    ): void;
    uploadAccount(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Uploadaccount
        | BodyResponseCallback<Schema$UploadAccountResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UploadAccountResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UploadAccountResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UploadAccountResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Uploadaccount;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Uploadaccount;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/uploadAccount'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$UploadAccountResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UploadAccountResponse>(parameters);
      }
    }

    /**
     * Verifies the assertion returned by the IdP.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.relyingparty.verifyAssertion({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "autoCreate": false,
     *       //   "delegatedProjectNumber": "my_delegatedProjectNumber",
     *       //   "idToken": "my_idToken",
     *       //   "instanceId": "my_instanceId",
     *       //   "pendingIdToken": "my_pendingIdToken",
     *       //   "postBody": "my_postBody",
     *       //   "requestUri": "my_requestUri",
     *       //   "returnIdpCredential": false,
     *       //   "returnRefreshToken": false,
     *       //   "returnSecureToken": false,
     *       //   "sessionId": "my_sessionId",
     *       //   "tenantId": "my_tenantId",
     *       //   "tenantProjectNumber": "my_tenantProjectNumber"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "action": "my_action",
     *   //   "appInstallationUrl": "my_appInstallationUrl",
     *   //   "appScheme": "my_appScheme",
     *   //   "context": "my_context",
     *   //   "dateOfBirth": "my_dateOfBirth",
     *   //   "displayName": "my_displayName",
     *   //   "email": "my_email",
     *   //   "emailRecycled": false,
     *   //   "emailVerified": false,
     *   //   "errorMessage": "my_errorMessage",
     *   //   "expiresIn": "my_expiresIn",
     *   //   "federatedId": "my_federatedId",
     *   //   "firstName": "my_firstName",
     *   //   "fullName": "my_fullName",
     *   //   "idToken": "my_idToken",
     *   //   "inputEmail": "my_inputEmail",
     *   //   "isNewUser": false,
     *   //   "kind": "my_kind",
     *   //   "language": "my_language",
     *   //   "lastName": "my_lastName",
     *   //   "localId": "my_localId",
     *   //   "needConfirmation": false,
     *   //   "needEmail": false,
     *   //   "nickName": "my_nickName",
     *   //   "oauthAccessToken": "my_oauthAccessToken",
     *   //   "oauthAuthorizationCode": "my_oauthAuthorizationCode",
     *   //   "oauthExpireIn": 0,
     *   //   "oauthIdToken": "my_oauthIdToken",
     *   //   "oauthRequestToken": "my_oauthRequestToken",
     *   //   "oauthScope": "my_oauthScope",
     *   //   "oauthTokenSecret": "my_oauthTokenSecret",
     *   //   "originalEmail": "my_originalEmail",
     *   //   "photoUrl": "my_photoUrl",
     *   //   "providerId": "my_providerId",
     *   //   "rawUserInfo": "my_rawUserInfo",
     *   //   "refreshToken": "my_refreshToken",
     *   //   "screenName": "my_screenName",
     *   //   "timeZone": "my_timeZone",
     *   //   "verifiedProvider": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    verifyAssertion(
      params: Params$Resource$Relyingparty$Verifyassertion,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    verifyAssertion(
      params?: Params$Resource$Relyingparty$Verifyassertion,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$VerifyAssertionResponse>>;
    verifyAssertion(
      params: Params$Resource$Relyingparty$Verifyassertion,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    verifyAssertion(
      params: Params$Resource$Relyingparty$Verifyassertion,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VerifyAssertionResponse>,
      callback: BodyResponseCallback<Schema$VerifyAssertionResponse>
    ): void;
    verifyAssertion(
      params: Params$Resource$Relyingparty$Verifyassertion,
      callback: BodyResponseCallback<Schema$VerifyAssertionResponse>
    ): void;
    verifyAssertion(
      callback: BodyResponseCallback<Schema$VerifyAssertionResponse>
    ): void;
    verifyAssertion(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Verifyassertion
        | BodyResponseCallback<Schema$VerifyAssertionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VerifyAssertionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VerifyAssertionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$VerifyAssertionResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Verifyassertion;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Verifyassertion;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/verifyAssertion'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$VerifyAssertionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VerifyAssertionResponse>(parameters);
      }
    }

    /**
     * Verifies the developer asserted ID token.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.relyingparty.verifyCustomToken({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "delegatedProjectNumber": "my_delegatedProjectNumber",
     *       //   "instanceId": "my_instanceId",
     *       //   "returnSecureToken": false,
     *       //   "token": "my_token"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "expiresIn": "my_expiresIn",
     *   //   "idToken": "my_idToken",
     *   //   "isNewUser": false,
     *   //   "kind": "my_kind",
     *   //   "refreshToken": "my_refreshToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    verifyCustomToken(
      params: Params$Resource$Relyingparty$Verifycustomtoken,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    verifyCustomToken(
      params?: Params$Resource$Relyingparty$Verifycustomtoken,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$VerifyCustomTokenResponse>>;
    verifyCustomToken(
      params: Params$Resource$Relyingparty$Verifycustomtoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    verifyCustomToken(
      params: Params$Resource$Relyingparty$Verifycustomtoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VerifyCustomTokenResponse>,
      callback: BodyResponseCallback<Schema$VerifyCustomTokenResponse>
    ): void;
    verifyCustomToken(
      params: Params$Resource$Relyingparty$Verifycustomtoken,
      callback: BodyResponseCallback<Schema$VerifyCustomTokenResponse>
    ): void;
    verifyCustomToken(
      callback: BodyResponseCallback<Schema$VerifyCustomTokenResponse>
    ): void;
    verifyCustomToken(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Verifycustomtoken
        | BodyResponseCallback<Schema$VerifyCustomTokenResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VerifyCustomTokenResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VerifyCustomTokenResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$VerifyCustomTokenResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Verifycustomtoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Verifycustomtoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/verifyCustomToken'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$VerifyCustomTokenResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VerifyCustomTokenResponse>(parameters);
      }
    }

    /**
     * Verifies the user entered password.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.relyingparty.verifyPassword({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "captchaChallenge": "my_captchaChallenge",
     *       //   "captchaResponse": "my_captchaResponse",
     *       //   "delegatedProjectNumber": "my_delegatedProjectNumber",
     *       //   "email": "my_email",
     *       //   "idToken": "my_idToken",
     *       //   "instanceId": "my_instanceId",
     *       //   "password": "my_password",
     *       //   "pendingIdToken": "my_pendingIdToken",
     *       //   "returnSecureToken": false,
     *       //   "tenantId": "my_tenantId",
     *       //   "tenantProjectNumber": "my_tenantProjectNumber"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "email": "my_email",
     *   //   "expiresIn": "my_expiresIn",
     *   //   "idToken": "my_idToken",
     *   //   "kind": "my_kind",
     *   //   "localId": "my_localId",
     *   //   "oauthAccessToken": "my_oauthAccessToken",
     *   //   "oauthAuthorizationCode": "my_oauthAuthorizationCode",
     *   //   "oauthExpireIn": 0,
     *   //   "photoUrl": "my_photoUrl",
     *   //   "refreshToken": "my_refreshToken",
     *   //   "registered": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    verifyPassword(
      params: Params$Resource$Relyingparty$Verifypassword,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    verifyPassword(
      params?: Params$Resource$Relyingparty$Verifypassword,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$VerifyPasswordResponse>>;
    verifyPassword(
      params: Params$Resource$Relyingparty$Verifypassword,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    verifyPassword(
      params: Params$Resource$Relyingparty$Verifypassword,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VerifyPasswordResponse>,
      callback: BodyResponseCallback<Schema$VerifyPasswordResponse>
    ): void;
    verifyPassword(
      params: Params$Resource$Relyingparty$Verifypassword,
      callback: BodyResponseCallback<Schema$VerifyPasswordResponse>
    ): void;
    verifyPassword(
      callback: BodyResponseCallback<Schema$VerifyPasswordResponse>
    ): void;
    verifyPassword(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Verifypassword
        | BodyResponseCallback<Schema$VerifyPasswordResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VerifyPasswordResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VerifyPasswordResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$VerifyPasswordResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Verifypassword;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Verifypassword;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/verifyPassword'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$VerifyPasswordResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VerifyPasswordResponse>(parameters);
      }
    }

    /**
     * Verifies ownership of a phone number and creates/updates the user account accordingly.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/identitytoolkit.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const identitytoolkit = google.identitytoolkit('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await identitytoolkit.relyingparty.verifyPhoneNumber({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "code": "my_code",
     *       //   "idToken": "my_idToken",
     *       //   "operation": "my_operation",
     *       //   "phoneNumber": "my_phoneNumber",
     *       //   "sessionInfo": "my_sessionInfo",
     *       //   "temporaryProof": "my_temporaryProof",
     *       //   "verificationProof": "my_verificationProof"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "expiresIn": "my_expiresIn",
     *   //   "idToken": "my_idToken",
     *   //   "isNewUser": false,
     *   //   "localId": "my_localId",
     *   //   "phoneNumber": "my_phoneNumber",
     *   //   "refreshToken": "my_refreshToken",
     *   //   "temporaryProof": "my_temporaryProof",
     *   //   "temporaryProofExpiresIn": "my_temporaryProofExpiresIn",
     *   //   "verificationProof": "my_verificationProof",
     *   //   "verificationProofExpiresIn": "my_verificationProofExpiresIn"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    verifyPhoneNumber(
      params: Params$Resource$Relyingparty$Verifyphonenumber,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    verifyPhoneNumber(
      params?: Params$Resource$Relyingparty$Verifyphonenumber,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse>
    >;
    verifyPhoneNumber(
      params: Params$Resource$Relyingparty$Verifyphonenumber,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    verifyPhoneNumber(
      params: Params$Resource$Relyingparty$Verifyphonenumber,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse>,
      callback: BodyResponseCallback<Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse>
    ): void;
    verifyPhoneNumber(
      params: Params$Resource$Relyingparty$Verifyphonenumber,
      callback: BodyResponseCallback<Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse>
    ): void;
    verifyPhoneNumber(
      callback: BodyResponseCallback<Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse>
    ): void;
    verifyPhoneNumber(
      paramsOrCallback?:
        | Params$Resource$Relyingparty$Verifyphonenumber
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Relyingparty$Verifyphonenumber;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Relyingparty$Verifyphonenumber;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/identitytoolkit/v3/relyingparty/verifyPhoneNumber'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Relyingparty$Createauthuri
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartyCreateAuthUriRequest;
  }
  export interface Params$Resource$Relyingparty$Deleteaccount
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartyDeleteAccountRequest;
  }
  export interface Params$Resource$Relyingparty$Downloadaccount
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartyDownloadAccountRequest;
  }
  export interface Params$Resource$Relyingparty$Emaillinksignin
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartyEmailLinkSigninRequest;
  }
  export interface Params$Resource$Relyingparty$Getaccountinfo
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartyGetAccountInfoRequest;
  }
  export interface Params$Resource$Relyingparty$Getoobconfirmationcode
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$Relyingparty;
  }
  export interface Params$Resource$Relyingparty$Getprojectconfig
    extends StandardParameters {
    /**
     * Delegated GCP project number of the request.
     */
    delegatedProjectNumber?: string;
    /**
     * GCP project number of the request.
     */
    projectNumber?: string;
  }
  export interface Params$Resource$Relyingparty$Getpublickeys
    extends StandardParameters {}
  export interface Params$Resource$Relyingparty$Getrecaptchaparam
    extends StandardParameters {}
  export interface Params$Resource$Relyingparty$Resetpassword
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartyResetPasswordRequest;
  }
  export interface Params$Resource$Relyingparty$Sendverificationcode
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartySendVerificationCodeRequest;
  }
  export interface Params$Resource$Relyingparty$Setaccountinfo
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartySetAccountInfoRequest;
  }
  export interface Params$Resource$Relyingparty$Setprojectconfig
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartySetProjectConfigRequest;
  }
  export interface Params$Resource$Relyingparty$Signoutuser
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartySignOutUserRequest;
  }
  export interface Params$Resource$Relyingparty$Signupnewuser
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartySignupNewUserRequest;
  }
  export interface Params$Resource$Relyingparty$Uploadaccount
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartyUploadAccountRequest;
  }
  export interface Params$Resource$Relyingparty$Verifyassertion
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartyVerifyAssertionRequest;
  }
  export interface Params$Resource$Relyingparty$Verifycustomtoken
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartyVerifyCustomTokenRequest;
  }
  export interface Params$Resource$Relyingparty$Verifypassword
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartyVerifyPasswordRequest;
  }
  export interface Params$Resource$Relyingparty$Verifyphonenumber
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest;
  }
}
