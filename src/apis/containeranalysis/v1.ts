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

export namespace containeranalysis_v1 {
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
   * Container Analysis API
   *
   * This API is a prerequisite for leveraging Artifact Analysis scanning capabilities in Artifact Registry. In addition, the Container Analysis API is an implementation of the Grafeas API, which enables storing, querying, and retrieval of critical metadata about all of your software artifacts.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const containeranalysis = google.containeranalysis('v1');
   * ```
   */
  export class Containeranalysis {
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
   * An alias to a repo revision.
   */
  export interface Schema$AliasContext {
    /**
     * The alias kind.
     */
    kind?: string | null;
    /**
     * The alias name.
     */
    name?: string | null;
  }
  /**
   * Indicates which analysis completed successfully. Multiple types of analysis can be performed on a single resource.
   */
  export interface Schema$AnalysisCompleted {
    analysisType?: string[] | null;
  }
  /**
   * Artifact describes a build product.
   */
  export interface Schema$Artifact {
    /**
     * Hash or checksum value of a binary, or Docker Registry 2.0 digest of a container.
     */
    checksum?: string | null;
    /**
     * Artifact ID, if any; for container images, this will be a URL by digest like `gcr.io/projectID/imagename@sha256:123456`.
     */
    id?: string | null;
    /**
     * Related artifact names. This may be the path to a binary or jar file, or in the case of a container build, the name used to push the container image to Google Container Registry, as presented to `docker push`. Note that a single Artifact ID can have multiple names, for example if two tags are applied to one image.
     */
    names?: string[] | null;
  }
  /**
   * Assessment provides all information that is related to a single vulnerability for this product.
   */
  export interface Schema$Assessment {
    /**
     * Holds the MITRE standard Common Vulnerabilities and Exposures (CVE) tracking number for the vulnerability. Deprecated: Use vulnerability_id instead to denote CVEs.
     */
    cve?: string | null;
    /**
     * Contains information about the impact of this vulnerability, this will change with time.
     */
    impacts?: string[] | null;
    /**
     * Justification provides the justification when the state of the assessment if NOT_AFFECTED.
     */
    justification?: Schema$Justification;
    /**
     * A detailed description of this Vex.
     */
    longDescription?: string | null;
    /**
     * Holds a list of references associated with this vulnerability item and assessment. These uris have additional information about the vulnerability and the assessment itself. E.g. Link to a document which details how this assessment concluded the state of this vulnerability.
     */
    relatedUris?: Schema$RelatedUrl[];
    /**
     * Specifies details on how to handle (and presumably, fix) a vulnerability.
     */
    remediations?: Schema$Remediation[];
    /**
     * A one sentence description of this Vex.
     */
    shortDescription?: string | null;
    /**
     * Provides the state of this Vulnerability assessment.
     */
    state?: string | null;
    /**
     * The vulnerability identifier for this Assessment. Will hold one of common identifiers e.g. CVE, GHSA etc.
     */
    vulnerabilityId?: string | null;
  }
  /**
   * Note kind that represents a logical attestation "role" or "authority". For example, an organization might have one `Authority` for "QA" and one for "build". This note is intended to act strictly as a grouping mechanism for the attached occurrences (Attestations). This grouping mechanism also provides a security boundary, since IAM ACLs gate the ability for a principle to attach an occurrence to a given note. It also provides a single point of lookup to find all attached attestation occurrences, even if they don't all live in the same project.
   */
  export interface Schema$AttestationNote {
    /**
     * Hint hints at the purpose of the attestation authority.
     */
    hint?: Schema$Hint;
  }
  /**
   * Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for lookup (how to find this attestation if you already know the authority and artifact to be verified) and intent (for which authority this attestation was intended to sign.
   */
  export interface Schema$AttestationOccurrence {
    /**
     * One or more JWTs encoding a self-contained attestation. Each JWT encodes the payload that it verifies within the JWT itself. Verifier implementation SHOULD ignore the `serialized_payload` field when verifying these JWTs. If only JWTs are present on this AttestationOccurrence, then the `serialized_payload` SHOULD be left empty. Each JWT SHOULD encode a claim specific to the `resource_uri` of this Occurrence, but this is not validated by Grafeas metadata API implementations. The JWT itself is opaque to Grafeas.
     */
    jwts?: Schema$Jwt[];
    /**
     * Required. The serialized payload that is verified by one or more `signatures`.
     */
    serializedPayload?: string | null;
    /**
     * One or more signatures over `serialized_payload`. Verifier implementations should consider this attestation message verified if at least one `signature` verifies `serialized_payload`. See `Signature` in common.proto for more details on signature structure and verification.
     */
    signatures?: Schema$Signature[];
  }
  /**
   * BaseImage describes a base image of a container image.
   */
  export interface Schema$BaseImage {
    /**
     * The number of layers that the base image is composed of.
     */
    layerCount?: number | null;
    /**
     * The name of the base image.
     */
    name?: string | null;
    /**
     * The repository name in which the base image is from.
     */
    repository?: string | null;
  }
  /**
   * Request to create notes in batch.
   */
  export interface Schema$BatchCreateNotesRequest {
    /**
     * Required. The notes to create. Max allowed length is 1000.
     */
    notes?: {[key: string]: Schema$Note} | null;
  }
  /**
   * Response for creating notes in batch.
   */
  export interface Schema$BatchCreateNotesResponse {
    /**
     * The notes that were created.
     */
    notes?: Schema$Note[];
  }
  /**
   * Request to create occurrences in batch.
   */
  export interface Schema$BatchCreateOccurrencesRequest {
    /**
     * Required. The occurrences to create. Max allowed length is 1000.
     */
    occurrences?: Schema$Occurrence[];
  }
  /**
   * Response for creating occurrences in batch.
   */
  export interface Schema$BatchCreateOccurrencesResponse {
    /**
     * The occurrences that were created.
     */
    occurrences?: Schema$Occurrence[];
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
  export interface Schema$BuildDefinition {
    buildType?: string | null;
    externalParameters?: {[key: string]: any} | null;
    internalParameters?: {[key: string]: any} | null;
    resolvedDependencies?: Schema$ResourceDescriptor[];
  }
  export interface Schema$BuilderConfig {
    id?: string | null;
  }
  export interface Schema$BuildMetadata {
    finishedOn?: string | null;
    invocationId?: string | null;
    startedOn?: string | null;
  }
  /**
   * Note holding the version of the provider's builder and the signature of the provenance message in the build details occurrence.
   */
  export interface Schema$BuildNote {
    /**
     * Required. Immutable. Version of the builder which produced this build.
     */
    builderVersion?: string | null;
  }
  /**
   * Details of a build occurrence.
   */
  export interface Schema$BuildOccurrence {
    /**
     * Deprecated. See InTotoStatement for the replacement. In-toto Provenance representation as defined in spec.
     */
    intotoProvenance?: Schema$InTotoProvenance;
    /**
     * In-Toto Slsa Provenance V1 represents a slsa provenance meeting the slsa spec, wrapped in an in-toto statement. This allows for direct jsonification of a to-spec in-toto slsa statement with a to-spec slsa provenance.
     */
    inTotoSlsaProvenanceV1?: Schema$InTotoSlsaProvenanceV1;
    /**
     * In-toto Statement representation as defined in spec. The intoto_statement can contain any type of provenance. The serialized payload of the statement can be stored and signed in the Occurrence's envelope.
     */
    intotoStatement?: Schema$InTotoStatement;
    /**
     * The actual provenance for the build.
     */
    provenance?: Schema$BuildProvenance;
    /**
     * Serialized JSON representation of the provenance, used in generating the build signature in the corresponding build note. After verifying the signature, `provenance_bytes` can be unmarshalled and compared to the provenance to confirm that it is unchanged. A base64-encoded string representation of the provenance bytes is used for the signature in order to interoperate with openssl which expects this format for signature verification. The serialized form is captured both to avoid ambiguity in how the provenance is marshalled to json as well to prevent incompatibilities with future changes.
     */
    provenanceBytes?: string | null;
  }
  /**
   * Provenance of a build. Contains all information needed to verify the full details about the build from source to completion.
   */
  export interface Schema$BuildProvenance {
    /**
     * Version string of the builder at the time this build was executed.
     */
    builderVersion?: string | null;
    /**
     * Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details.
     */
    buildOptions?: {[key: string]: string} | null;
    /**
     * Output of the build.
     */
    builtArtifacts?: Schema$Artifact[];
    /**
     * Commands requested by the build.
     */
    commands?: Schema$Command[];
    /**
     * Time at which the build was created.
     */
    createTime?: string | null;
    /**
     * E-mail address of the user who initiated this build. Note that this was the user's e-mail address at the time the build was initiated; this address may not represent the same end-user for all time.
     */
    creator?: string | null;
    /**
     * Time at which execution of the build was finished.
     */
    endTime?: string | null;
    /**
     * Required. Unique identifier of the build.
     */
    id?: string | null;
    /**
     * URI where any logs for this provenance were written.
     */
    logsUri?: string | null;
    /**
     * ID of the project.
     */
    projectId?: string | null;
    /**
     * Details of the Source input to the build.
     */
    sourceProvenance?: Schema$Source;
    /**
     * Time at which execution of the build was started.
     */
    startTime?: string | null;
    /**
     * Trigger identifier if the build was triggered automatically; empty if not.
     */
    triggerId?: string | null;
  }
  /**
   * A step in the build pipeline. Next ID: 22
   */
  export interface Schema$BuildStep {
    /**
     * Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. If allow_failure is also specified, this field will take precedence.
     */
    allowExitCodes?: number[] | null;
    /**
     * Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field.
     */
    allowFailure?: boolean | null;
    /**
     * A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments.
     */
    args?: string[] | null;
    /**
     * Option to include built-in and custom substitutions as env variables for this build step. This option will override the global option in BuildOption.
     */
    automapSubstitutions?: boolean | null;
    /**
     * Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution.
     */
    dir?: string | null;
    /**
     * Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used.
     */
    entrypoint?: string | null;
    /**
     * A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
     */
    env?: string[] | null;
    /**
     * Output only. Return code from running the step.
     */
    exitCode?: number | null;
    /**
     * Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency.
     */
    id?: string | null;
    /**
     * Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step.
     */
    name?: string | null;
    /**
     * Output only. Stores timing information for pulling this build step's builder image only.
     */
    pullTiming?: Schema$TimeSpan;
    results?: Schema$StepResult[];
    /**
     * A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args.
     */
    script?: string | null;
    /**
     * A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`.
     */
    secretEnv?: string[] | null;
    /**
     * Output only. Status of the build step. At this time, build step status is only updated on build completion; step status is not updated in real-time as the build progresses.
     */
    status?: string | null;
    /**
     * Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out.
     */
    timeout?: string | null;
    /**
     * Output only. Stores timing information for executing this build step.
     */
    timing?: Schema$TimeSpan;
    /**
     * List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration.
     */
    volumes?: Schema$Volume[];
    /**
     * The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully.
     */
    waitFor?: string[] | null;
  }
  /**
   * The category to which the update belongs.
   */
  export interface Schema$Category {
    /**
     * The identifier of the category.
     */
    categoryId?: string | null;
    /**
     * The localized name of the category.
     */
    name?: string | null;
  }
  /**
   * A compliance check that is a CIS benchmark.
   */
  export interface Schema$CisBenchmark {
    profileLevel?: number | null;
    severity?: string | null;
  }
  /**
   * A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.
   */
  export interface Schema$CloudRepoSourceContext {
    /**
     * An alias, which may be a branch or tag.
     */
    aliasContext?: Schema$AliasContext;
    /**
     * The ID of the repo.
     */
    repoId?: Schema$RepoId;
    /**
     * A revision ID.
     */
    revisionId?: string | null;
  }
  /**
   * Empty placeholder to denote that this is a Google Cloud Storage export request.
   */
  export interface Schema$CloudStorageLocation {}
  /**
   * Command describes a step performed as part of the build pipeline.
   */
  export interface Schema$Command {
    /**
     * Command-line arguments used when executing this command.
     */
    args?: string[] | null;
    /**
     * Working directory (relative to project source root) used when running this command.
     */
    dir?: string | null;
    /**
     * Environment variables set before running this command.
     */
    env?: string[] | null;
    /**
     * Optional unique identifier for this command, used in wait_for to reference this command as a dependency.
     */
    id?: string | null;
    /**
     * Required. Name of the command, as presented on the command line, or if the command is packaged as a Docker container, as presented to `docker pull`.
     */
    name?: string | null;
    /**
     * The ID(s) of the command(s) that this command depends on.
     */
    waitFor?: string[] | null;
  }
  /**
   * Indicates that the builder claims certain fields in this message to be complete.
   */
  export interface Schema$Completeness {
    /**
     * If true, the builder claims that recipe.arguments is complete, meaning that all external inputs are properly captured in the recipe.
     */
    arguments?: boolean | null;
    /**
     * If true, the builder claims that recipe.environment is claimed to be complete.
     */
    environment?: boolean | null;
    /**
     * If true, the builder claims that materials are complete, usually through some controls to prevent network access. Sometimes called "hermetic".
     */
    materials?: boolean | null;
  }
  export interface Schema$ComplianceNote {
    cisBenchmark?: Schema$CisBenchmark;
    /**
     * A description about this compliance check.
     */
    description?: string | null;
    impact?: string | null;
    /**
     * A rationale for the existence of this compliance check.
     */
    rationale?: string | null;
    /**
     * A description of remediation steps if the compliance check fails.
     */
    remediation?: string | null;
    /**
     * Serialized scan instructions with a predefined format.
     */
    scanInstructions?: string | null;
    /**
     * The title that identifies this compliance check.
     */
    title?: string | null;
    /**
     * The OS and config versions the benchmark applies to.
     */
    version?: Schema$ComplianceVersion[];
  }
  /**
   * An indication that the compliance checks in the associated ComplianceNote were not satisfied for particular resources or a specified reason.
   */
  export interface Schema$ComplianceOccurrence {
    nonComplianceReason?: string | null;
    nonCompliantFiles?: Schema$NonCompliantFile[];
    /**
     * The OS and config version the benchmark was run on.
     */
    version?: Schema$ComplianceVersion;
  }
  /**
   * Describes the CIS benchmark version that is applicable to a given OS and os version.
   */
  export interface Schema$ComplianceVersion {
    /**
     * The name of the document that defines this benchmark, e.g. "CIS Container-Optimized OS".
     */
    benchmarkDocument?: string | null;
    /**
     * The CPE URI (https://cpe.mitre.org/specification/) this benchmark is applicable to.
     */
    cpeUri?: string | null;
    /**
     * The version of the benchmark. This is set to the version of the OS-specific CIS document the benchmark is defined in.
     */
    version?: string | null;
  }
  /**
   * ApprovalConfig describes configuration for manual approval of a build.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig {
    /**
     * Whether or not approval is needed. If this is set on a build, it will become pending when created, and will need to be explicitly approved to start.
     */
    approvalRequired?: boolean | null;
  }
  /**
   * ApprovalResult describes the decision and associated metadata of a manual approval of a build.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult {
    /**
     * Output only. The time when the approval decision was made.
     */
    approvalTime?: string | null;
    /**
     * Output only. Email of the user that called the ApproveBuild API to approve or reject a build at the time that the API was called.
     */
    approverAccount?: string | null;
    /**
     * Optional. An optional comment for this manual approval result.
     */
    comment?: string | null;
    /**
     * Required. The decision of this manual approval.
     */
    decision?: string | null;
    /**
     * Optional. An optional URL tied to this manual approval result. This field is essentially the same as comment, except that it will be rendered by the UI differently. An example use case is a link to an external job that approved this Build.
     */
    url?: string | null;
  }
  /**
   * Artifacts produced by a build that should be uploaded upon successful completion of all build steps.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts {
    /**
     * Optional. A list of Go modules to be uploaded to Artifact Registry upon successful completion of all build steps. If any objects fail to be pushed, the build is marked FAILURE.
     */
    goModules?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGoModule[];
    /**
     * A list of images to be pushed upon the successful completion of all build steps. The images will be pushed using the builder service account's credentials. The digests of the pushed images will be stored in the Build resource's results field. If any of the images fail to be pushed, the build is marked FAILURE.
     */
    images?: string[] | null;
    /**
     * A list of Maven artifacts to be uploaded to Artifact Registry upon successful completion of all build steps. Artifacts in the workspace matching specified paths globs will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any artifacts fail to be pushed, the build is marked FAILURE.
     */
    mavenArtifacts?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact[];
    /**
     * A list of npm packages to be uploaded to Artifact Registry upon successful completion of all build steps. Npm packages in the specified paths will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any packages fail to be pushed, the build is marked FAILURE.
     */
    npmPackages?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage[];
    /**
     * A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps. Files in the workspace matching specified paths globs will be uploaded to the specified Cloud Storage location using the builder service account's credentials. The location and generation of the uploaded objects will be stored in the Build resource's results field. If any objects fail to be pushed, the build is marked FAILURE.
     */
    objects?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects;
    /**
     * A list of Python packages to be uploaded to Artifact Registry upon successful completion of all build steps. The build service account credentials will be used to perform the upload. If any objects fail to be pushed, the build is marked FAILURE.
     */
    pythonPackages?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage[];
  }
  /**
   * Files in the workspace to upload to Cloud Storage upon successful completion of all build steps.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects {
    /**
     * Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Files in the workspace matching any path pattern will be uploaded to Cloud Storage with this location as a prefix.
     */
    location?: string | null;
    /**
     * Path globs used to match files in the build's workspace.
     */
    paths?: string[] | null;
    /**
     * Output only. Stores timing information for pushing all artifact objects.
     */
    timing?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  }
  /**
   * Go module to upload to Artifact Registry upon successful completion of all build steps. A module refers to all dependencies in a go.mod file.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGoModule {
    /**
     * Optional. The Go module's "module path". e.g. example.com/foo/v2
     */
    modulePath?: string | null;
    /**
     * Optional. The Go module's semantic version in the form vX.Y.Z. e.g. v0.1.1 Pre-release identifiers can also be added by appending a dash and dot separated ASCII alphanumeric characters and hyphens. e.g. v0.2.3-alpha.x.12m.5
     */
    moduleVersion?: string | null;
    /**
     * Optional. Location of the Artifact Registry repository. i.e. us-east1 Defaults to the build’s location.
     */
    repositoryLocation?: string | null;
    /**
     * Optional. Artifact Registry repository name. Specified Go modules will be zipped and uploaded to Artifact Registry with this location as a prefix. e.g. my-go-repo
     */
    repositoryName?: string | null;
    /**
     * Optional. Project ID of the Artifact Registry repository. Defaults to the build project.
     */
    repositoryProjectId?: string | null;
    /**
     * Optional. Source path of the go.mod file in the build's workspace. If not specified, this will default to the current directory. e.g. ~/code/go/mypackage
     */
    sourcePath?: string | null;
  }
  /**
   * A Maven artifact to upload to Artifact Registry upon successful completion of all build steps.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact {
    /**
     * Maven `artifactId` value used when uploading the artifact to Artifact Registry.
     */
    artifactId?: string | null;
    /**
     * Maven `groupId` value used when uploading the artifact to Artifact Registry.
     */
    groupId?: string | null;
    /**
     * Optional. Path to an artifact in the build's workspace to be uploaded to Artifact Registry. This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar.
     */
    path?: string | null;
    /**
     * Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY" Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix.
     */
    repository?: string | null;
    /**
     * Maven `version` value used when uploading the artifact to Artifact Registry.
     */
    version?: string | null;
  }
  /**
   * Npm package to upload to Artifact Registry upon successful completion of all build steps.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage {
    /**
     * Path to the package.json. e.g. workspace/path/to/package
     */
    packagePath?: string | null;
    /**
     * Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY" Npm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix.
     */
    repository?: string | null;
  }
  /**
   * Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage {
    /**
     * Path globs used to match files in the build's workspace. For Python/ Twine, this is usually `dist/x`, and sometimes additionally an `.asc` file.
     */
    paths?: string[] | null;
    /**
     * Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY" Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix.
     */
    repository?: string | null;
  }
  /**
   * A build resource in the Cloud Build API. At a high level, a `Build` describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts. Fields can include the following variables, which will be expanded when the build is created: - $PROJECT_ID: the project ID of the build. - $PROJECT_NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD_ID: the autogenerated ID of the build. - $REPO_NAME: the source repository name specified by RepoSource. - $BRANCH_NAME: the branch name specified by RepoSource. - $TAG_NAME: the tag name specified by RepoSource. - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1Build {
    /**
     * Output only. Describes this build's approval configuration, status, and result.
     */
    approval?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval;
    /**
     * Artifacts produced by the build that should be uploaded upon successful completion of all build steps.
     */
    artifacts?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts;
    /**
     * Secrets and secret environment variables.
     */
    availableSecrets?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets;
    /**
     * Output only. The ID of the `BuildTrigger` that triggered this build, if it was triggered automatically.
     */
    buildTriggerId?: string | null;
    /**
     * Output only. Time at which the request to create the build was received.
     */
    createTime?: string | null;
    /**
     * Optional. Dependencies that the Cloud Build worker will fetch before executing user steps.
     */
    dependencies?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1Dependency[];
    /**
     * Output only. Contains information about the build when status=FAILURE.
     */
    failureInfo?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo;
    /**
     * Output only. Time at which execution of the build was finished. The difference between finish_time and start_time is the duration of the build's execution.
     */
    finishTime?: string | null;
    /**
     * Optional. Configuration for git operations.
     */
    gitConfig?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfig;
    /**
     * Output only. Unique identifier of the build.
     */
    id?: string | null;
    /**
     * A list of images to be pushed upon the successful completion of all build steps. The images are pushed using the builder service account's credentials. The digests of the pushed images will be stored in the `Build` resource's results field. If any of the images fail to be pushed, the build status is marked `FAILURE`.
     */
    images?: string[] | null;
    /**
     * Cloud Storage bucket where logs should be written (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Logs file names will be of the format `${logs_bucket\}/log-${build_id\}.txt`.
     */
    logsBucket?: string | null;
    /**
     * Output only. URL to logs for this build in Google Cloud Console.
     */
    logUrl?: string | null;
    /**
     * Output only. The 'Build' name with format: `projects/{project\}/locations/{location\}/builds/{build\}`, where {build\} is a unique identifier generated by the service.
     */
    name?: string | null;
    /**
     * Special options for this build.
     */
    options?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions;
    /**
     * Output only. ID of the project.
     */
    projectId?: string | null;
    /**
     * TTL in queue for this build. If provided and the build is enqueued longer than this value, the build will expire and the build status will be `EXPIRED`. The TTL starts ticking from create_time.
     */
    queueTtl?: string | null;
    /**
     * Output only. Results of the build.
     */
    results?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1Results;
    /**
     * Secrets to decrypt using Cloud Key Management Service. Note: Secret Manager is the recommended technique for managing sensitive data with Cloud Build. Use `available_secrets` to configure builds to access secrets from Secret Manager. For instructions, see: https://cloud.google.com/cloud-build/docs/securing-builds/use-secrets
     */
    secrets?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1Secret[];
    /**
     * IAM service account whose credentials will be used at build runtime. Must be of the format `projects/{PROJECT_ID\}/serviceAccounts/{ACCOUNT\}`. ACCOUNT can be email address or uniqueId of the service account.
     */
    serviceAccount?: string | null;
    /**
     * Optional. The location of the source files to build.
     */
    source?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1Source;
    /**
     * Output only. A permanent fixed identifier for source.
     */
    sourceProvenance?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance;
    /**
     * Output only. Time at which execution of the build was started.
     */
    startTime?: string | null;
    /**
     * Output only. Status of the build.
     */
    status?: string | null;
    /**
     * Output only. Customer-readable message about the current status.
     */
    statusDetail?: string | null;
    /**
     * Required. The operations to be performed on the workspace.
     */
    steps?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep[];
    /**
     * Substitutions data for `Build` resource.
     */
    substitutions?: {[key: string]: string} | null;
    /**
     * Tags for annotation of a `Build`. These are not docker tags.
     */
    tags?: string[] | null;
    /**
     * Amount of time that this build should be allowed to run, to second granularity. If this amount of time elapses, work on the build will cease and the build status will be `TIMEOUT`. `timeout` starts ticking from `startTime`. Default time is 60 minutes.
     */
    timeout?: string | null;
    /**
     * Output only. Stores timing information for phases of the build. Valid keys are: * BUILD: time to execute all build steps. * PUSH: time to push all artifacts including docker images and non docker artifacts. * FETCHSOURCE: time to fetch source. * SETUPBUILD: time to set up build. If the build does not specify source or images, these keys will not be included.
     */
    timing?: {
      [key: string]: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
    } | null;
    /**
     * Output only. Non-fatal problems encountered during the execution of the build.
     */
    warnings?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning[];
  }
  /**
   * BuildApproval describes a build's approval configuration, state, and result.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval {
    /**
     * Output only. Configuration for manual approval of this build.
     */
    config?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig;
    /**
     * Output only. Result of manual approval for this Build.
     */
    result?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult;
    /**
     * Output only. The state of this build's approval.
     */
    state?: string | null;
  }
  /**
   * A fatal problem encountered during the execution of the build.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo {
    /**
     * Explains the failure issue in more detail using hard-coded text.
     */
    detail?: string | null;
    /**
     * The name of the failure.
     */
    type?: string | null;
  }
  /**
   * Optional arguments to enable specific features of builds.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions {
    /**
     * Option to include built-in and custom substitutions as env variables for all build steps.
     */
    automapSubstitutions?: boolean | null;
    /**
     * Optional. Option to specify how default logs buckets are setup.
     */
    defaultLogsBucketBehavior?: string | null;
    /**
     * Requested disk size for the VM that runs the build. Note that this is *NOT* "disk free"; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 4000GB; builds that request more than the maximum are rejected with an error.
     */
    diskSizeGb?: string | null;
    /**
     * Option to specify whether or not to apply bash style string operations to the substitutions. NOTE: this is always enabled for triggered builds and cannot be overridden in the build configuration file.
     */
    dynamicSubstitutions?: boolean | null;
    /**
     * Optional. Option to specify whether structured logging is enabled. If true, JSON-formatted logs are parsed as structured logs.
     */
    enableStructuredLogging?: boolean | null;
    /**
     * A list of global environment variable definitions that will exist for all build steps in this build. If a variable is defined in both globally and in a build step, the variable will use the build step value. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
     */
    env?: string[] | null;
    /**
     * Option to specify the logging mode, which determines if and where build logs are stored.
     */
    logging?: string | null;
    /**
     * Option to define build log streaming behavior to Cloud Storage.
     */
    logStreamingOption?: string | null;
    /**
     * Compute Engine machine type on which to run the build.
     */
    machineType?: string | null;
    /**
     * Optional. Specification for execution on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information.
     */
    pool?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption;
    /**
     * Optional. Option to specify the Pub/Sub topic to receive build status updates.
     */
    pubsubTopic?: string | null;
    /**
     * Requested verifiability options.
     */
    requestedVerifyOption?: string | null;
    /**
     * A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. These variables will be available to all build steps in this build.
     */
    secretEnv?: string[] | null;
    /**
     * Requested hash for SourceProvenance.
     */
    sourceProvenanceHash?: string[] | null;
    /**
     * Option to specify behavior when there is an error in the substitution checks. NOTE: this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden in the build configuration file.
     */
    substitutionOption?: string | null;
    /**
     * Global list of volumes to mount for ALL build steps Each volume is created as an empty volume prior to starting the build process. Upon completion of the build, volumes and their contents are discarded. Global volume names and paths cannot conflict with the volumes defined a build step. Using a global volume in a build with only one step is not valid as it is indicative of a build request with an incorrect configuration.
     */
    volumes?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1Volume[];
    /**
     * This field deprecated; please use `pool.name` instead.
     */
    workerPool?: string | null;
  }
  /**
   * Details about how a build should be executed on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption {
    /**
     * The `WorkerPool` resource to execute the build on. You must have `cloudbuild.workerpools.use` on the project hosting the WorkerPool. Format projects/{project\}/locations/{location\}/workerPools/{workerPoolId\}
     */
    name?: string | null;
  }
  /**
   * A step in the build pipeline.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep {
    /**
     * Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. If allow_failure is also specified, this field will take precedence.
     */
    allowExitCodes?: number[] | null;
    /**
     * Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field.
     */
    allowFailure?: boolean | null;
    /**
     * A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments.
     */
    args?: string[] | null;
    /**
     * Option to include built-in and custom substitutions as env variables for this build step. This option will override the global option in BuildOption.
     */
    automapSubstitutions?: boolean | null;
    /**
     * Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution.
     */
    dir?: string | null;
    /**
     * Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used.
     */
    entrypoint?: string | null;
    /**
     * A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
     */
    env?: string[] | null;
    /**
     * Output only. Return code from running the step.
     */
    exitCode?: number | null;
    /**
     * Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency.
     */
    id?: string | null;
    /**
     * Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step.
     */
    name?: string | null;
    /**
     * Output only. Stores timing information for pulling this build step's builder image only.
     */
    pullTiming?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
    /**
     * A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args.
     */
    script?: string | null;
    /**
     * A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`.
     */
    secretEnv?: string[] | null;
    /**
     * Output only. Status of the build step. At this time, build step status is only updated on build completion; step status is not updated in real-time as the build progresses.
     */
    status?: string | null;
    /**
     * Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out.
     */
    timeout?: string | null;
    /**
     * Output only. Stores timing information for executing this build step.
     */
    timing?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
    /**
     * List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration.
     */
    volumes?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1Volume[];
    /**
     * The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully.
     */
    waitFor?: string[] | null;
  }
  /**
   * A non-fatal problem encountered during the execution of the build.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning {
    /**
     * The priority for this warning.
     */
    priority?: string | null;
    /**
     * Explanation of the warning generated.
     */
    text?: string | null;
  }
  /**
   * An image built by the pipeline.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage {
    /**
     * Docker Registry 2.0 digest.
     */
    digest?: string | null;
    /**
     * Name used to push the container image to Google Container Registry, as presented to `docker push`.
     */
    name?: string | null;
    /**
     * Output only. Stores timing information for pushing the specified image.
     */
    pushTiming?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  }
  /**
   * Location of the source in a 2nd-gen Google Cloud Build repository resource.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository {
    /**
     * Optional. Directory, relative to the source root, in which to run the build.
     */
    dir?: string | null;
    /**
     * Required. Name of the Google Cloud Build repository, formatted as `projects/x/locations/x/connections/x/repositories/x`.
     */
    repository?: string | null;
    /**
     * Required. The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref.
     */
    revision?: string | null;
  }
  /**
   * A dependency that the Cloud Build worker will fetch before executing user steps.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1Dependency {
    /**
     * If set to true disable all dependency fetching (ignoring the default source as well).
     */
    empty?: boolean | null;
    /**
     * Represents a git repository as a build dependency.
     */
    gitSource?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceDependency;
  }
  /**
   * Represents a git repository as a build dependency.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceDependency {
    /**
     * Optional. How much history should be fetched for the build (default 1, -1 for all history).
     */
    depth?: string | null;
    /**
     * Required. Where should the files be placed on the worker.
     */
    destPath?: string | null;
    /**
     * Optional. True if submodules should be fetched too (default false).
     */
    recurseSubmodules?: boolean | null;
    /**
     * Required. The kind of repo (url or dev connect).
     */
    repository?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceRepository;
    /**
     * Required. The revision that we will fetch the repo at.
     */
    revision?: string | null;
  }
  /**
   * A repository for a git source.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceRepository {
    /**
     * The Developer Connect Git repository link formatted as `projects/x/locations/x/connections/x/gitRepositoryLink/x`
     */
    developerConnect?: string | null;
    /**
     * Location of the Git repository.
     */
    url?: string | null;
  }
  /**
   * This config defines the location of a source through Developer Connect.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1DeveloperConnectConfig {
    /**
     * Required. Directory, relative to the source root, in which to run the build.
     */
    dir?: string | null;
    /**
     * Required. The Developer Connect Git repository link, formatted as `projects/x/locations/x/connections/x/gitRepositoryLink/x`.
     */
    gitRepositoryLink?: string | null;
    /**
     * Required. The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref.
     */
    revision?: string | null;
  }
  /**
   * Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes {
    /**
     * Collection of file hashes.
     */
    fileHash?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1Hash[];
  }
  /**
   * GitConfig is a configuration for git operations.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfig {
    /**
     * Configuration for HTTP related git operations.
     */
    http?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfigHttpConfig;
  }
  /**
   * HttpConfig is a configuration for HTTP related git operations.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfigHttpConfig {
    /**
     * SecretVersion resource of the HTTP proxy URL. The Service Account used in the build (either the default Service Account or user-specified Service Account) should have `secretmanager.versions.access` permissions on this secret. The proxy URL should be in format `protocol://@]proxyhost[:port]`.
     */
    proxySecretVersionName?: string | null;
  }
  /**
   * Location of the source in any accessible Git repository.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource {
    /**
     * Optional. Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution.
     */
    dir?: string | null;
    /**
     * Optional. The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. Cloud Build uses `git fetch` to fetch the revision from the Git repository; therefore make sure that the string you provide for `revision` is parsable by the command. For information on string values accepted by `git fetch`, see https://git-scm.com/docs/gitrevisions#_specifying_revisions. For information on `git fetch`, see https://git-scm.com/docs/git-fetch.
     */
    revision?: string | null;
    /**
     * Required. Location of the Git repo to build. This will be used as a `git remote`, see https://git-scm.com/docs/git-remote.
     */
    url?: string | null;
  }
  /**
   * Container message for hash values.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1Hash {
    /**
     * The type of hash that was performed.
     */
    type?: string | null;
    /**
     * The hash value.
     */
    value?: string | null;
  }
  /**
   * Pairs a set of secret environment variables mapped to encrypted values with the Cloud KMS key to use to decrypt the value.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecret {
    /**
     * Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets.
     */
    envMap?: {[key: string]: string} | null;
    /**
     * Resource name of Cloud KMS crypto key to decrypt the encrypted value. In format: projects/x/locations/x/keyRings/x/cryptoKeys/x
     */
    kmsKeyName?: string | null;
  }
  /**
   * Location of the source in a Google Cloud Source Repository.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource {
    /**
     * Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
     */
    branchName?: string | null;
    /**
     * Explicit commit SHA to build.
     */
    commitSha?: string | null;
    /**
     * Optional. Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution.
     */
    dir?: string | null;
    /**
     * Optional. Only trigger a build if the revision regex does NOT match the revision regex.
     */
    invertRegex?: boolean | null;
    /**
     * Optional. ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.
     */
    projectId?: string | null;
    /**
     * Required. Name of the Cloud Source Repository.
     */
    repoName?: string | null;
    /**
     * Optional. Substitutions to use in a triggered build. Should only be used with RunBuildTrigger
     */
    substitutions?: {[key: string]: string} | null;
    /**
     * Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
     */
    tagName?: string | null;
  }
  /**
   * Artifacts created by the build pipeline.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1Results {
    /**
     * Path to the artifact manifest for non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage.
     */
    artifactManifest?: string | null;
    /**
     * Time to push all non-container artifacts to Cloud Storage.
     */
    artifactTiming?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
    /**
     * List of build step digests, in the order corresponding to build step indices.
     */
    buildStepImages?: string[] | null;
    /**
     * List of build step outputs, produced by builder images, in the order corresponding to build step indices. [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders) can produce this output by writing to `$BUILDER_OUTPUT/output`. Only the first 50KB of data is stored. Note that the `$BUILDER_OUTPUT` variable is read-only and can't be substituted.
     */
    buildStepOutputs?: string[] | null;
    /**
     * Optional. Go module artifacts uploaded to Artifact Registry at the end of the build.
     */
    goModules?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGoModule[];
    /**
     * Container images that were built as a part of the build.
     */
    images?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage[];
    /**
     * Maven artifacts uploaded to Artifact Registry at the end of the build.
     */
    mavenArtifacts?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact[];
    /**
     * Npm packages uploaded to Artifact Registry at the end of the build.
     */
    npmPackages?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage[];
    /**
     * Number of non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage.
     */
    numArtifacts?: string | null;
    /**
     * Python artifacts uploaded to Artifact Registry at the end of the build.
     */
    pythonPackages?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage[];
  }
  /**
   * Pairs a set of secret environment variables containing encrypted values with the Cloud KMS key to use to decrypt the value. Note: Use `kmsKeyName` with `available_secrets` instead of using `kmsKeyName` with `secret`. For instructions see: https://cloud.google.com/cloud-build/docs/securing-builds/use-encrypted-credentials.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1Secret {
    /**
     * Cloud KMS key name to use to decrypt these envs.
     */
    kmsKeyName?: string | null;
    /**
     * Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets.
     */
    secretEnv?: {[key: string]: string} | null;
  }
  /**
   * Pairs a secret environment variable with a SecretVersion in Secret Manager.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecret {
    /**
     * Environment variable name to associate with the secret. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step.
     */
    env?: string | null;
    /**
     * Resource name of the SecretVersion. In format: projects/x/secrets/x/versions/x
     */
    versionName?: string | null;
  }
  /**
   * Secrets and secret environment variables.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets {
    /**
     * Secrets encrypted with KMS key and the associated secret environment variable.
     */
    inline?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecret[];
    /**
     * Secrets in Secret Manager and associated secret environment variable.
     */
    secretManager?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecret[];
  }
  /**
   * Location of the source in a supported storage service.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1Source {
    /**
     * Optional. If provided, get the source from this 2nd-gen Google Cloud Build repository resource.
     */
    connectedRepository?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository;
    /**
     * If provided, get the source from this Developer Connect config.
     */
    developerConnectConfig?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1DeveloperConnectConfig;
    /**
     * If provided, get the source from this Git repository.
     */
    gitSource?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource;
    /**
     * If provided, get the source from this location in a Cloud Source Repository.
     */
    repoSource?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource;
    /**
     * If provided, get the source from this location in Cloud Storage.
     */
    storageSource?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource;
    /**
     * If provided, get the source from this manifest in Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher).
     */
    storageSourceManifest?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest;
  }
  /**
   * Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance {
    /**
     * Output only. Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. Note that `FileHashes` will only be populated if `BuildOptions` has requested a `SourceProvenanceHash`. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (`.tar.gz`), the `FileHash` will be for the single path to that file.
     */
    fileHashes?: {
      [
        key: string
      ]: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes;
    } | null;
    /**
     * Output only. A copy of the build's `source.connected_repository`, if exists, with any revisions resolved.
     */
    resolvedConnectedRepository?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository;
    /**
     * Output only. A copy of the build's `source.git_source`, if exists, with any revisions resolved.
     */
    resolvedGitSource?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource;
    /**
     * A copy of the build's `source.repo_source`, if exists, with any revisions resolved.
     */
    resolvedRepoSource?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource;
    /**
     * A copy of the build's `source.storage_source`, if exists, with any generations resolved.
     */
    resolvedStorageSource?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource;
    /**
     * A copy of the build's `source.storage_source_manifest`, if exists, with any revisions resolved. This feature is in Preview.
     */
    resolvedStorageSourceManifest?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest;
  }
  /**
   * Location of the source in an archive file in Cloud Storage.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource {
    /**
     * Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
     */
    bucket?: string | null;
    /**
     * Optional. Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.
     */
    generation?: string | null;
    /**
     * Required. Cloud Storage object containing the source. This object must be a zipped (`.zip`) or gzipped archive file (`.tar.gz`) containing source to build.
     */
    object?: string | null;
    /**
     * Optional. Option to specify the tool to fetch the source file for the build.
     */
    sourceFetcher?: string | null;
  }
  /**
   * Location of the source manifest in Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher).
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest {
    /**
     * Required. Cloud Storage bucket containing the source manifest (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
     */
    bucket?: string | null;
    /**
     * Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.
     */
    generation?: string | null;
    /**
     * Required. Cloud Storage object containing the source manifest. This object must be a JSON file.
     */
    object?: string | null;
  }
  /**
   * Start and end times for a build execution phase.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan {
    /**
     * End of time span.
     */
    endTime?: string | null;
    /**
     * Start of time span.
     */
    startTime?: string | null;
  }
  /**
   * A Go module artifact uploaded to Artifact Registry using the GoModule directive.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGoModule {
    /**
     * Hash types and values of the Go Module Artifact.
     */
    fileHashes?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes;
    /**
     * Output only. Stores timing information for pushing the specified artifact.
     */
    pushTiming?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
    /**
     * URI of the uploaded artifact.
     */
    uri?: string | null;
  }
  /**
   * A Maven artifact uploaded using the MavenArtifact directive.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact {
    /**
     * Hash types and values of the Maven Artifact.
     */
    fileHashes?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes;
    /**
     * Output only. Stores timing information for pushing the specified artifact.
     */
    pushTiming?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
    /**
     * URI of the uploaded artifact.
     */
    uri?: string | null;
  }
  /**
   * An npm package uploaded to Artifact Registry using the NpmPackage directive.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage {
    /**
     * Hash types and values of the npm package.
     */
    fileHashes?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes;
    /**
     * Output only. Stores timing information for pushing the specified artifact.
     */
    pushTiming?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
    /**
     * URI of the uploaded npm package.
     */
    uri?: string | null;
  }
  /**
   * Artifact uploaded using the PythonPackage directive.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage {
    /**
     * Hash types and values of the Python Artifact.
     */
    fileHashes?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes;
    /**
     * Output only. Stores timing information for pushing the specified artifact.
     */
    pushTiming?: Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
    /**
     * URI of the uploaded artifact.
     */
    uri?: string | null;
  }
  /**
   * Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution.
   */
  export interface Schema$ContaineranalysisGoogleDevtoolsCloudbuildV1Volume {
    /**
     * Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps.
     */
    name?: string | null;
    /**
     * Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths.
     */
    path?: string | null;
  }
  /**
   * Common Vulnerability Scoring System. For details, see https://www.first.org/cvss/specification-document This is a message we will try to use for storing various versions of CVSS rather than making a separate proto for storing a specific version.
   */
  export interface Schema$CVSS {
    attackComplexity?: string | null;
    /**
     * Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments.
     */
    attackVector?: string | null;
    authentication?: string | null;
    availabilityImpact?: string | null;
    /**
     * The base score is a function of the base metric scores.
     */
    baseScore?: number | null;
    confidentialityImpact?: string | null;
    exploitabilityScore?: number | null;
    impactScore?: number | null;
    integrityImpact?: string | null;
    privilegesRequired?: string | null;
    scope?: string | null;
    userInteraction?: string | null;
  }
  /**
   * Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document
   */
  export interface Schema$CVSSv3 {
    attackComplexity?: string | null;
    /**
     * Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments.
     */
    attackVector?: string | null;
    availabilityImpact?: string | null;
    /**
     * The base score is a function of the base metric scores.
     */
    baseScore?: number | null;
    confidentialityImpact?: string | null;
    exploitabilityScore?: number | null;
    impactScore?: number | null;
    integrityImpact?: string | null;
    privilegesRequired?: string | null;
    scope?: string | null;
    userInteraction?: string | null;
  }
  /**
   * An artifact that can be deployed in some runtime.
   */
  export interface Schema$DeploymentNote {
    /**
     * Required. Resource URI for the artifact being deployed.
     */
    resourceUri?: string[] | null;
  }
  /**
   * The period during which some deployable was active in a runtime.
   */
  export interface Schema$DeploymentOccurrence {
    /**
     * Address of the runtime element hosting this deployment.
     */
    address?: string | null;
    /**
     * Configuration used to create this deployment.
     */
    config?: string | null;
    /**
     * Required. Beginning of the lifetime of this deployment.
     */
    deployTime?: string | null;
    /**
     * Platform hosting this deployment.
     */
    platform?: string | null;
    /**
     * Output only. Resource URI for the artifact being deployed taken from the deployable field with the same name.
     */
    resourceUri?: string[] | null;
    /**
     * End of the lifetime of this deployment.
     */
    undeployTime?: string | null;
    /**
     * Identity of the user that triggered this deployment.
     */
    userEmail?: string | null;
  }
  /**
   * A detail for a distro and package affected by this vulnerability and its associated fix (if one is available).
   */
  export interface Schema$Detail {
    /**
     * Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability affects.
     */
    affectedCpeUri?: string | null;
    /**
     * Required. The package this vulnerability affects.
     */
    affectedPackage?: string | null;
    /**
     * The version number at the end of an interval in which this vulnerability exists. A vulnerability can affect a package between version numbers that are disjoint sets of intervals (example: [1.0.0-1.1.0], [2.4.6-2.4.8] and [4.5.6-4.6.8]) each of which will be represented in its own Detail. If a specific affected version is provided by a vulnerability database, affected_version_start and affected_version_end will be the same in that Detail.
     */
    affectedVersionEnd?: Schema$Version;
    /**
     * The version number at the start of an interval in which this vulnerability exists. A vulnerability can affect a package between version numbers that are disjoint sets of intervals (example: [1.0.0-1.1.0], [2.4.6-2.4.8] and [4.5.6-4.6.8]) each of which will be represented in its own Detail. If a specific affected version is provided by a vulnerability database, affected_version_start and affected_version_end will be the same in that Detail.
     */
    affectedVersionStart?: Schema$Version;
    /**
     * A vendor-specific description of this vulnerability.
     */
    description?: string | null;
    /**
     * The distro recommended [CPE URI](https://cpe.mitre.org/specification/) to update to that contains a fix for this vulnerability. It is possible for this to be different from the affected_cpe_uri.
     */
    fixedCpeUri?: string | null;
    /**
     * The distro recommended package to update to that contains a fix for this vulnerability. It is possible for this to be different from the affected_package.
     */
    fixedPackage?: string | null;
    /**
     * The distro recommended version to update to that contains a fix for this vulnerability. Setting this to VersionKind.MAXIMUM means no such version is yet available.
     */
    fixedVersion?: Schema$Version;
    /**
     * Whether this detail is obsolete. Occurrences are expected not to point to obsolete details.
     */
    isObsolete?: boolean | null;
    /**
     * The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.).
     */
    packageType?: string | null;
    /**
     * The distro assigned severity of this vulnerability.
     */
    severityName?: string | null;
    /**
     * The source from which the information in this Detail was obtained.
     */
    source?: string | null;
    /**
     * The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker.
     */
    sourceUpdateTime?: string | null;
    /**
     * The name of the vendor of the product.
     */
    vendor?: string | null;
  }
  /**
   * Digest information.
   */
  export interface Schema$Digest {
    /**
     * `SHA1`, `SHA512` etc.
     */
    algo?: string | null;
    /**
     * Value of the digest.
     */
    digestBytes?: string | null;
  }
  /**
   * A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis.
   */
  export interface Schema$DiscoveryNote {
    /**
     * Required. Immutable. The kind of analysis that is handled by this discovery.
     */
    analysisKind?: string | null;
  }
  /**
   * Provides information about the analysis status of a discovered resource.
   */
  export interface Schema$DiscoveryOccurrence {
    analysisCompleted?: Schema$AnalysisCompleted;
    /**
     * Indicates any errors encountered during analysis of a resource. There could be 0 or more of these errors.
     */
    analysisError?: Schema$Status[];
    /**
     * The status of discovery for the resource.
     */
    analysisStatus?: string | null;
    /**
     * When an error is encountered this will contain a LocalizedMessage under details to show to the user. The LocalizedMessage is output only and populated by the API.
     */
    analysisStatusError?: Schema$Status;
    /**
     * Output only. The time occurrences related to this discovery occurrence were archived.
     */
    archiveTime?: string | null;
    /**
     * Whether the resource is continuously analyzed.
     */
    continuousAnalysis?: string | null;
    /**
     * The CPE of the resource being scanned.
     */
    cpe?: string | null;
    /**
     * Files that make up the resource described by the occurrence.
     */
    files?: Schema$File[];
    /**
     * The last time this resource was scanned.
     */
    lastScanTime?: string | null;
    /**
     * The status of an SBOM generation.
     */
    sbomStatus?: Schema$SBOMStatus;
  }
  /**
   * This represents a particular channel of distribution for a given package. E.g., Debian's jessie-backports dpkg mirror.
   */
  export interface Schema$Distribution {
    /**
     * The CPU architecture for which packages in this distribution channel were built.
     */
    architecture?: string | null;
    /**
     * Required. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package.
     */
    cpeUri?: string | null;
    /**
     * The distribution channel-specific description of this package.
     */
    description?: string | null;
    /**
     * The latest available version of this package in this distribution channel.
     */
    latestVersion?: Schema$Version;
    /**
     * A freeform string denoting the maintainer of this package.
     */
    maintainer?: string | null;
    /**
     * The distribution channel-specific homepage for this package.
     */
    url?: string | null;
  }
  export interface Schema$DSSEAttestationNote {
    /**
     * DSSEHint hints at the purpose of the attestation authority.
     */
    hint?: Schema$DSSEHint;
  }
  /**
   * Deprecated. Prefer to use a regular Occurrence, and populate the Envelope at the top level of the Occurrence.
   */
  export interface Schema$DSSEAttestationOccurrence {
    /**
     * If doing something security critical, make sure to verify the signatures in this metadata.
     */
    envelope?: Schema$Envelope;
    statement?: Schema$InTotoStatement;
  }
  /**
   * This submessage provides human-readable hints about the purpose of the authority. Because the name of a note acts as its resource reference, it is important to disambiguate the canonical name of the Note (which might be a UUID for security purposes) from "readable" names more suitable for debug output. Note that these hints should not be used to look up authorities in security sensitive contexts, such as when looking up attestations to verify.
   */
  export interface Schema$DSSEHint {
    /**
     * Required. The human readable name of this attestation authority, for example "cloudbuild-prod".
     */
    humanReadableName?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * MUST match https://github.com/secure-systems-lab/dsse/blob/master/envelope.proto. An authenticated message of arbitrary type.
   */
  export interface Schema$Envelope {
    payload?: string | null;
    payloadType?: string | null;
    signatures?: Schema$EnvelopeSignature[];
  }
  export interface Schema$EnvelopeSignature {
    keyid?: string | null;
    sig?: string | null;
  }
  /**
   * The request to generate and export SBOM. Target must be specified for the request.
   */
  export interface Schema$ExportSBOMRequest {
    /**
     * Optional. Empty placeholder to denote that this is a Google Cloud Storage export request.
     */
    cloudStorageLocation?: Schema$CloudStorageLocation;
  }
  /**
   * The response from a call to ExportSBOM.
   */
  export interface Schema$ExportSBOMResponse {
    /**
     * The name of the discovery occurrence in the form "projects/{project_id\}/occurrences/{OCCURRENCE_ID\} It can be used to track the progress of the SBOM export.
     */
    discoveryOccurrence?: string | null;
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
  export interface Schema$File {
    digest?: {[key: string]: string} | null;
    name?: string | null;
  }
  /**
   * Container message for hashes of byte content of files, used in source messages to verify integrity of source input to the build.
   */
  export interface Schema$FileHashes {
    /**
     * Required. Collection of file hashes.
     */
    fileHash?: Schema$Hash[];
  }
  /**
   * A set of properties that uniquely identify a given Docker image.
   */
  export interface Schema$Fingerprint {
    /**
     * Required. The layer ID of the final layer in the Docker image's v1 representation.
     */
    v1Name?: string | null;
    /**
     * Required. The ordered list of v2 blobs that represent a given image.
     */
    v2Blob?: string[] | null;
    /**
     * Output only. The name of the image's v2 blobs computed via: [bottom] := v2_blobbottom := sha256(v2_blob[N] + " " + v2_name[N+1]) Only the name of the final blob is kept.
     */
    v2Name?: string | null;
  }
  /**
   * Per resource and severity counts of fixable and total vulnerabilities.
   */
  export interface Schema$FixableTotalByDigest {
    /**
     * The number of fixable vulnerabilities associated with this resource.
     */
    fixableCount?: string | null;
    /**
     * The affected resource.
     */
    resourceUri?: string | null;
    /**
     * The severity for this count. SEVERITY_UNSPECIFIED indicates total across all severities.
     */
    severity?: string | null;
    /**
     * The total number of vulnerabilities associated with this resource.
     */
    totalCount?: string | null;
  }
  /**
   * A SourceContext referring to a Gerrit project.
   */
  export interface Schema$GerritSourceContext {
    /**
     * An alias, which may be a branch or tag.
     */
    aliasContext?: Schema$AliasContext;
    /**
     * The full project name within the host. Projects may be nested, so "project/subproject" is a valid project name. The "repo name" is the hostURI/project.
     */
    gerritProject?: string | null;
    /**
     * The URI of a running Gerrit instance.
     */
    hostUri?: string | null;
    /**
     * A revision (commit) ID.
     */
    revisionId?: string | null;
  }
  /**
   * Request message for `GetIamPolicy` method.
   */
  export interface Schema$GetIamPolicyRequest {
    /**
     * OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.
     */
    options?: Schema$GetPolicyOptions;
  }
  /**
   * Encapsulates settings provided to GetIamPolicy.
   */
  export interface Schema$GetPolicyOptions {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    requestedPolicyVersion?: number | null;
  }
  /**
   * A GitSourceContext denotes a particular revision in a third party Git repository (e.g., GitHub).
   */
  export interface Schema$GitSourceContext {
    /**
     * Git commit hash.
     */
    revisionId?: string | null;
    /**
     * Git repository URL.
     */
    url?: string | null;
  }
  /**
   * Metadata for all operations used and required for all operations that created by Container Analysis Providers
   */
  export interface Schema$GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata {
    /**
     * Output only. The time this operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time that this operation was marked completed or failed.
     */
    endTime?: string | null;
  }
  /**
   * Indicates the location at which a package was found.
   */
  export interface Schema$GrafeasV1FileLocation {
    /**
     * For jars that are contained inside .war files, this filepath can indicate the path to war file combined with the path to jar file.
     */
    filePath?: string | null;
    /**
     * Each package found in a file should have its own layer metadata (that is, information from the origin layer of the package).
     */
    layerDetails?: Schema$LayerDetails;
  }
  /**
   * Identifies the entity that executed the recipe, which is trusted to have correctly performed the operation and populated this provenance.
   */
  export interface Schema$GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder {
    id?: string | null;
  }
  /**
   * Indicates that the builder claims certain fields in this message to be complete.
   */
  export interface Schema$GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness {
    environment?: boolean | null;
    materials?: boolean | null;
    parameters?: boolean | null;
  }
  /**
   * Describes where the config file that kicked off the build came from. This is effectively a pointer to the source where buildConfig came from.
   */
  export interface Schema$GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource {
    digest?: {[key: string]: string} | null;
    entryPoint?: string | null;
    uri?: string | null;
  }
  /**
   * Identifies the event that kicked off the build.
   */
  export interface Schema$GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation {
    configSource?: Schema$GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource;
    environment?: {[key: string]: any} | null;
    parameters?: {[key: string]: any} | null;
  }
  /**
   * The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on.
   */
  export interface Schema$GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial {
    digest?: {[key: string]: string} | null;
    uri?: string | null;
  }
  /**
   * Other properties of the build.
   */
  export interface Schema$GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata {
    buildFinishedOn?: string | null;
    buildInvocationId?: string | null;
    buildStartedOn?: string | null;
    completeness?: Schema$GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness;
    reproducible?: boolean | null;
  }
  /**
   * Container message for hash values.
   */
  export interface Schema$Hash {
    /**
     * Required. The type of hash that was performed, e.g. "SHA-256".
     */
    type?: string | null;
    /**
     * Required. The hash value.
     */
    value?: string | null;
  }
  /**
   * This submessage provides human-readable hints about the purpose of the authority. Because the name of a note acts as its resource reference, it is important to disambiguate the canonical name of the Note (which might be a UUID for security purposes) from "readable" names more suitable for debug output. Note that these hints should not be used to look up authorities in security sensitive contexts, such as when looking up attestations to verify.
   */
  export interface Schema$Hint {
    /**
     * Required. The human readable name of this attestation authority, for example "qa".
     */
    humanReadableName?: string | null;
  }
  /**
   * The unique identifier of the update.
   */
  export interface Schema$Identity {
    /**
     * The revision number of the update.
     */
    revision?: number | null;
    /**
     * The revision independent identifier of the update.
     */
    updateId?: string | null;
  }
  /**
   * Basis describes the base image portion (Note) of the DockerImage relationship. Linked occurrences are derived from this or an equivalent image via: FROM Or an equivalent reference, e.g., a tag of the resource_url.
   */
  export interface Schema$ImageNote {
    /**
     * Required. Immutable. The fingerprint of the base image.
     */
    fingerprint?: Schema$Fingerprint;
    /**
     * Required. Immutable. The resource_url for the resource representing the basis of associated occurrence images.
     */
    resourceUrl?: string | null;
  }
  /**
   * Details of the derived image portion of the DockerImage relationship. This image would be produced from a Dockerfile with FROM .
   */
  export interface Schema$ImageOccurrence {
    /**
     * Output only. This contains the base image URL for the derived image occurrence.
     */
    baseResourceUrl?: string | null;
    /**
     * Output only. The number of layers by which this image differs from the associated image basis.
     */
    distance?: number | null;
    /**
     * Required. The fingerprint of the derived image.
     */
    fingerprint?: Schema$Fingerprint;
    /**
     * This contains layer-specific metadata, if populated it has length "distance" and is ordered with [distance] being the layer immediately following the base image and [1] being the final layer.
     */
    layerInfo?: Schema$Layer[];
  }
  export interface Schema$InTotoProvenance {
    /**
     * required
     */
    builderConfig?: Schema$BuilderConfig;
    /**
     * The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on. This is considered to be incomplete unless metadata.completeness.materials is true. Unset or null is equivalent to empty.
     */
    materials?: string[] | null;
    metadata?: Schema$Metadata;
    /**
     * Identifies the configuration used for the build. When combined with materials, this SHOULD fully describe the build, such that re-running this recipe results in bit-for-bit identical output (if the build is reproducible). required
     */
    recipe?: Schema$Recipe;
  }
  export interface Schema$InTotoSlsaProvenanceV1 {
    predicate?: Schema$SlsaProvenanceV1;
    predicateType?: string | null;
    subject?: Schema$Subject[];
    /**
     * InToto spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement
     */
    _type?: string | null;
  }
  /**
   * Spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement The serialized InTotoStatement will be stored as Envelope.payload. Envelope.payloadType is always "application/vnd.in-toto+json".
   */
  export interface Schema$InTotoStatement {
    /**
     * `https://slsa.dev/provenance/v0.1` for SlsaProvenance.
     */
    predicateType?: string | null;
    provenance?: Schema$InTotoProvenance;
    slsaProvenance?: Schema$SlsaProvenance;
    slsaProvenanceZeroTwo?: Schema$SlsaProvenanceZeroTwo;
    subject?: Schema$Subject[];
    /**
     * Always `https://in-toto.io/Statement/v0.1`.
     */
    _type?: string | null;
  }
  /**
   * Justification provides the justification when the state of the assessment if NOT_AFFECTED.
   */
  export interface Schema$Justification {
    /**
     * Additional details on why this justification was chosen.
     */
    details?: string | null;
    /**
     * The justification type for this vulnerability.
     */
    justificationType?: string | null;
  }
  export interface Schema$Jwt {
    /**
     * The compact encoding of a JWS, which is always three base64 encoded strings joined by periods. For details, see: https://tools.ietf.org/html/rfc7515.html#section-3.1
     */
    compactJwt?: string | null;
  }
  export interface Schema$KnowledgeBase {
    /**
     * The KB name (generally of the form KB[0-9]+ (e.g., KB123456)).
     */
    name?: string | null;
    /**
     * A link to the KB in the [Windows update catalog] (https://www.catalog.update.microsoft.com/).
     */
    url?: string | null;
  }
  /**
   * Layer holds metadata specific to a layer of a Docker image.
   */
  export interface Schema$Layer {
    /**
     * The recovered arguments to the Dockerfile directive.
     */
    arguments?: string | null;
    /**
     * Required. The recovered Dockerfile directive used to construct this layer. See https://docs.docker.com/engine/reference/builder/ for more information.
     */
    directive?: string | null;
  }
  /**
   * Details about the layer a package was found in.
   */
  export interface Schema$LayerDetails {
    /**
     * The base images the layer is found within.
     */
    baseImages?: Schema$BaseImage[];
    /**
     * The layer chain ID (sha256 hash) of the layer in the container image. https://github.com/opencontainers/image-spec/blob/main/config.md#layer-chainid
     */
    chainId?: string | null;
    /**
     * The layer build command that was used to build the layer. This may not be found in all layers depending on how the container image is built.
     */
    command?: string | null;
    /**
     * The diff ID (typically a sha256 hash) of the layer in the container image.
     */
    diffId?: string | null;
    /**
     * The index of the layer in the container image.
     */
    index?: number | null;
  }
  /**
   * License information.
   */
  export interface Schema$License {
    /**
     * Comments
     */
    comments?: string | null;
    /**
     * Often a single license can be used to represent the licensing terms. Sometimes it is necessary to include a choice of one or more licenses or some combination of license identifiers. Examples: "LGPL-2.1-only OR MIT", "LGPL-2.1-only AND MIT", "GPL-2.0-or-later WITH Bison-exception-2.2".
     */
    expression?: string | null;
  }
  /**
   * Response for listing occurrences for a note.
   */
  export interface Schema$ListNoteOccurrencesResponse {
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    nextPageToken?: string | null;
    /**
     * The occurrences attached to the specified note.
     */
    occurrences?: Schema$Occurrence[];
  }
  /**
   * Response for listing notes.
   */
  export interface Schema$ListNotesResponse {
    /**
     * The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results.
     */
    nextPageToken?: string | null;
    /**
     * The notes requested.
     */
    notes?: Schema$Note[];
    /**
     * Unordered list. Unreachable regions. Populated for requests from the global region when `return_partial_success` is set. Format: projects//locations/
     */
    unreachable?: string[] | null;
  }
  /**
   * Response for listing occurrences.
   */
  export interface Schema$ListOccurrencesResponse {
    /**
     * The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results.
     */
    nextPageToken?: string | null;
    /**
     * The occurrences requested.
     */
    occurrences?: Schema$Occurrence[];
    /**
     * Unordered list. Unreachable regions. Populated for requests from the global region when `return_partial_success` is set. Format: projects//locations/
     */
    unreachable?: string[] | null;
  }
  /**
   * An occurrence of a particular package installation found within a system's filesystem. E.g., glibc was found in `/var/lib/dpkg/status`.
   */
  export interface Schema$Location {
    /**
     * Deprecated. The CPE URI in [CPE format](https://cpe.mitre.org/specification/)
     */
    cpeUri?: string | null;
    /**
     * The path from which we gathered that this package/version is installed.
     */
    path?: string | null;
    /**
     * Deprecated. The version installed at this location.
     */
    version?: Schema$Version;
  }
  export interface Schema$Material {
    digest?: {[key: string]: string} | null;
    uri?: string | null;
  }
  /**
   * Other properties of the build.
   */
  export interface Schema$Metadata {
    /**
     * The timestamp of when the build completed.
     */
    buildFinishedOn?: string | null;
    /**
     * Identifies the particular build invocation, which can be useful for finding associated logs or other ad-hoc analysis. The value SHOULD be globally unique, per in-toto Provenance spec.
     */
    buildInvocationId?: string | null;
    /**
     * The timestamp of when the build started.
     */
    buildStartedOn?: string | null;
    /**
     * Indicates that the builder claims certain fields in this message to be complete.
     */
    completeness?: Schema$Completeness;
    /**
     * If true, the builder claims that running the recipe on materials will produce bit-for-bit identical output.
     */
    reproducible?: boolean | null;
  }
  /**
   * Details about files that caused a compliance check to fail. display_command is a single command that can be used to display a list of non compliant files. When there is no such command, we can also iterate a list of non compliant file using 'path'.
   */
  export interface Schema$NonCompliantFile {
    /**
     * Command to display the non-compliant files.
     */
    displayCommand?: string | null;
    /**
     * Empty if `display_command` is set.
     */
    path?: string | null;
    /**
     * Explains why a file is non compliant for a CIS check.
     */
    reason?: string | null;
  }
  /**
   * A type of analysis that can be done for a resource.
   */
  export interface Schema$Note {
    /**
     * A note describing an attestation role.
     */
    attestation?: Schema$AttestationNote;
    /**
     * A note describing build provenance for a verifiable build.
     */
    build?: Schema$BuildNote;
    /**
     * A note describing a compliance check.
     */
    compliance?: Schema$ComplianceNote;
    /**
     * Output only. The time this note was created. This field can be used as a filter in list requests.
     */
    createTime?: string | null;
    /**
     * A note describing something that can be deployed.
     */
    deployment?: Schema$DeploymentNote;
    /**
     * A note describing the initial analysis of a resource.
     */
    discovery?: Schema$DiscoveryNote;
    /**
     * A note describing a dsse attestation note.
     */
    dsseAttestation?: Schema$DSSEAttestationNote;
    /**
     * Time of expiration for this note. Empty if note does not expire.
     */
    expirationTime?: string | null;
    /**
     * A note describing a base image.
     */
    image?: Schema$ImageNote;
    /**
     * Output only. The type of analysis. This field can be used as a filter in list requests.
     */
    kind?: string | null;
    /**
     * A detailed description of this note.
     */
    longDescription?: string | null;
    /**
     * Output only. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     */
    name?: string | null;
    /**
     * A note describing a package hosted by various package managers.
     */
    package?: Schema$PackageNote;
    /**
     * Other notes related to this note.
     */
    relatedNoteNames?: string[] | null;
    /**
     * URLs associated with this note.
     */
    relatedUrl?: Schema$RelatedUrl[];
    /**
     * A note describing an SBOM reference.
     */
    sbomReference?: Schema$SBOMReferenceNote;
    /**
     * A note describing a secret.
     */
    secret?: Schema$SecretNote;
    /**
     * A one sentence description of this note.
     */
    shortDescription?: string | null;
    /**
     * Output only. The time this note was last updated. This field can be used as a filter in list requests.
     */
    updateTime?: string | null;
    /**
     * A note describing available package upgrades.
     */
    upgrade?: Schema$UpgradeNote;
    /**
     * A note describing a package vulnerability.
     */
    vulnerability?: Schema$VulnerabilityNote;
    /**
     * A note describing a vulnerability assessment.
     */
    vulnerabilityAssessment?: Schema$VulnerabilityAssessmentNote;
  }
  /**
   * An instance of an analysis type that has been found on a resource.
   */
  export interface Schema$Occurrence {
    /**
     * Describes an attestation of an artifact.
     */
    attestation?: Schema$AttestationOccurrence;
    /**
     * Describes a verifiable build.
     */
    build?: Schema$BuildOccurrence;
    /**
     * Describes a compliance violation on a linked resource.
     */
    compliance?: Schema$ComplianceOccurrence;
    /**
     * Output only. The time this occurrence was created.
     */
    createTime?: string | null;
    /**
     * Describes the deployment of an artifact on a runtime.
     */
    deployment?: Schema$DeploymentOccurrence;
    /**
     * Describes when a resource was discovered.
     */
    discovery?: Schema$DiscoveryOccurrence;
    /**
     * Describes an attestation of an artifact using dsse.
     */
    dsseAttestation?: Schema$DSSEAttestationOccurrence;
    /**
     * https://github.com/secure-systems-lab/dsse
     */
    envelope?: Schema$Envelope;
    /**
     * Describes how this resource derives from the basis in the associated note.
     */
    image?: Schema$ImageOccurrence;
    /**
     * Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests.
     */
    kind?: string | null;
    /**
     * Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     */
    name?: string | null;
    /**
     * Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests.
     */
    noteName?: string | null;
    /**
     * Describes the installation of a package on the linked resource.
     */
    package?: Schema$PackageOccurrence;
    /**
     * A description of actions that can be taken to remedy the note.
     */
    remediation?: string | null;
    /**
     * Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, `https://gcr.io/project/image@sha256:123abc` for a Docker image.
     */
    resourceUri?: string | null;
    /**
     * Describes a specific SBOM reference occurrences.
     */
    sbomReference?: Schema$SBOMReferenceOccurrence;
    /**
     * Describes a secret.
     */
    secret?: Schema$SecretOccurrence;
    /**
     * Output only. The time this occurrence was last updated.
     */
    updateTime?: string | null;
    /**
     * Describes an available package upgrade on the linked resource.
     */
    upgrade?: Schema$UpgradeOccurrence;
    /**
     * Describes a security vulnerability.
     */
    vulnerability?: Schema$VulnerabilityOccurrence;
  }
  /**
   * A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available).
   */
  export interface Schema$PackageIssue {
    /**
     * Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was found in.
     */
    affectedCpeUri?: string | null;
    /**
     * Required. The package this vulnerability was found in.
     */
    affectedPackage?: string | null;
    /**
     * Required. The version of the package that is installed on the resource affected by this vulnerability.
     */
    affectedVersion?: Schema$Version;
    /**
     * Output only. The distro or language system assigned severity for this vulnerability when that is available and note provider assigned severity when it is not available.
     */
    effectiveSeverity?: string | null;
    /**
     * The location at which this package was found.
     */
    fileLocation?: Schema$GrafeasV1FileLocation[];
    /**
     * Output only. Whether a fix is available for this package.
     */
    fixAvailable?: boolean | null;
    /**
     * The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was fixed in. It is possible for this to be different from the affected_cpe_uri.
     */
    fixedCpeUri?: string | null;
    /**
     * The package this vulnerability was fixed in. It is possible for this to be different from the affected_package.
     */
    fixedPackage?: string | null;
    /**
     * Required. The version of the package this vulnerability was fixed in. Setting this to VersionKind.MAXIMUM means no fix is yet available.
     */
    fixedVersion?: Schema$Version;
    /**
     * The type of package (e.g. OS, MAVEN, GO).
     */
    packageType?: string | null;
  }
  /**
   * PackageNote represents a particular package version.
   */
  export interface Schema$PackageNote {
    /**
     * The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages.
     */
    architecture?: string | null;
    /**
     * The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages.
     */
    cpeUri?: string | null;
    /**
     * The description of this package.
     */
    description?: string | null;
    /**
     * Hash value, typically a file digest, that allows unique identification a specific package.
     */
    digest?: Schema$Digest[];
    /**
     * Deprecated. The various channels by which a package is distributed.
     */
    distribution?: Schema$Distribution[];
    /**
     * Licenses that have been declared by the authors of the package.
     */
    license?: Schema$License;
    /**
     * A freeform text denoting the maintainer of this package.
     */
    maintainer?: string | null;
    /**
     * Required. Immutable. The name of the package.
     */
    name?: string | null;
    /**
     * The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.).
     */
    packageType?: string | null;
    /**
     * The homepage for this package.
     */
    url?: string | null;
    /**
     * The version of the package.
     */
    version?: Schema$Version;
  }
  /**
   * Details on how a particular software package was installed on a system.
   */
  export interface Schema$PackageOccurrence {
    /**
     * Output only. The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages.
     */
    architecture?: string | null;
    /**
     * Output only. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages.
     */
    cpeUri?: string | null;
    /**
     * Licenses that have been declared by the authors of the package.
     */
    license?: Schema$License;
    /**
     * All of the places within the filesystem versions of this package have been found.
     */
    location?: Schema$Location[];
    /**
     * Required. Output only. The name of the installed package.
     */
    name?: string | null;
    /**
     * Output only. The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.).
     */
    packageType?: string | null;
    /**
     * Output only. The version of the package.
     */
    version?: Schema$Version;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$Policy {
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
   * Product contains information about a product and how to uniquely identify it.
   */
  export interface Schema$Product {
    /**
     * Contains a URI which is vendor-specific. Example: The artifact repository URL of an image.
     */
    genericUri?: string | null;
    /**
     * Token that identifies a product so that it can be referred to from other parts in the document. There is no predefined format as long as it uniquely identifies a group in the context of the current document.
     */
    id?: string | null;
    /**
     * Name of the product.
     */
    name?: string | null;
  }
  /**
   * Selects a repo using a Google Cloud Platform project ID (e.g., winged-cargo-31) and a repo name within that project.
   */
  export interface Schema$ProjectRepoId {
    /**
     * The ID of the project.
     */
    projectId?: string | null;
    /**
     * The name of the repo. Leave empty for the default repo.
     */
    repoName?: string | null;
  }
  export interface Schema$ProvenanceBuilder {
    builderDependencies?: Schema$ResourceDescriptor[];
    id?: string | null;
    version?: {[key: string]: string} | null;
  }
  /**
   * Publisher contains information about the publisher of this Note.
   */
  export interface Schema$Publisher {
    /**
     * Provides information about the authority of the issuing party to release the document, in particular, the party's constituency and responsibilities or other obligations.
     */
    issuingAuthority?: string | null;
    /**
     * Name of the publisher. Examples: 'Google', 'Google Cloud Platform'.
     */
    name?: string | null;
    /**
     * The context or namespace. Contains a URL which is under control of the issuing party and can be used as a globally unique identifier for that issuing party. Example: https://csaf.io
     */
    publisherNamespace?: string | null;
  }
  /**
   * Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe.
   */
  export interface Schema$Recipe {
    /**
     * Collection of all external inputs that influenced the build on top of recipe.definedInMaterial and recipe.entryPoint. For example, if the recipe type were "make", then this might be the flags passed to make aside from the target, which is captured in recipe.entryPoint. Since the arguments field can greatly vary in structure, depending on the builder and recipe type, this is of form "Any".
     */
    arguments?: Array<{[key: string]: any}> | null;
    /**
     * Index in materials containing the recipe steps that are not implied by recipe.type. For example, if the recipe type were "make", then this would point to the source containing the Makefile, not the make program itself. Set to -1 if the recipe doesn't come from a material, as zero is default unset value for int64.
     */
    definedInMaterial?: string | null;
    /**
     * String identifying the entry point into the build. This is often a path to a configuration file and/or a target label within that file. The syntax and meaning are defined by recipe.type. For example, if the recipe type were "make", then this would reference the directory in which to run make as well as which target to use.
     */
    entryPoint?: string | null;
    /**
     * Any other builder-controlled inputs necessary for correctly evaluating the recipe. Usually only needed for reproducing the build but not evaluated as part of policy. Since the environment field can greatly vary in structure, depending on the builder and recipe type, this is of form "Any".
     */
    environment?: Array<{[key: string]: any}> | null;
    /**
     * URI indicating what type of recipe was performed. It determines the meaning of recipe.entryPoint, recipe.arguments, recipe.environment, and materials.
     */
    type?: string | null;
  }
  /**
   * Metadata for any related URL information.
   */
  export interface Schema$RelatedUrl {
    /**
     * Label to describe usage of the URL.
     */
    label?: string | null;
    /**
     * Specific URL associated with the resource.
     */
    url?: string | null;
  }
  /**
   * Specifies details on how to handle (and presumably, fix) a vulnerability.
   */
  export interface Schema$Remediation {
    /**
     * Contains a comprehensive human-readable discussion of the remediation.
     */
    details?: string | null;
    /**
     * The type of remediation that can be applied.
     */
    remediationType?: string | null;
    /**
     * Contains the URL where to obtain the remediation.
     */
    remediationUri?: Schema$RelatedUrl;
  }
  /**
   * A unique identifier for a Cloud Repo.
   */
  export interface Schema$RepoId {
    /**
     * A combination of a project ID and a repo name.
     */
    projectRepoId?: Schema$ProjectRepoId;
    /**
     * A server-assigned, globally unique identifier.
     */
    uid?: string | null;
  }
  export interface Schema$ResourceDescriptor {
    annotations?: {[key: string]: any} | null;
    content?: string | null;
    digest?: {[key: string]: string} | null;
    downloadLocation?: string | null;
    mediaType?: string | null;
    name?: string | null;
    uri?: string | null;
  }
  export interface Schema$RunDetails {
    builder?: Schema$ProvenanceBuilder;
    byproducts?: Schema$ResourceDescriptor[];
    metadata?: Schema$BuildMetadata;
  }
  /**
   * The actual payload that contains the SBOM Reference data. The payload follows the intoto statement specification. See https://github.com/in-toto/attestation/blob/main/spec/v1.0/statement.md for more details.
   */
  export interface Schema$SbomReferenceIntotoPayload {
    /**
     * Additional parameters of the Predicate. Includes the actual data about the SBOM.
     */
    predicate?: Schema$SbomReferenceIntotoPredicate;
    /**
     * URI identifying the type of the Predicate.
     */
    predicateType?: string | null;
    /**
     * Set of software artifacts that the attestation applies to. Each element represents a single software artifact.
     */
    subject?: Schema$Subject[];
    /**
     * Identifier for the schema of the Statement.
     */
    _type?: string | null;
  }
  /**
   * A predicate which describes the SBOM being referenced.
   */
  export interface Schema$SbomReferenceIntotoPredicate {
    /**
     * A map of algorithm to digest of the contents of the SBOM.
     */
    digest?: {[key: string]: string} | null;
    /**
     * The location of the SBOM.
     */
    location?: string | null;
    /**
     * The mime type of the SBOM.
     */
    mimeType?: string | null;
    /**
     * The person or system referring this predicate to the consumer.
     */
    referrerId?: string | null;
  }
  /**
   * The note representing an SBOM reference.
   */
  export interface Schema$SBOMReferenceNote {
    /**
     * The format that SBOM takes. E.g. may be spdx, cyclonedx, etc...
     */
    format?: string | null;
    /**
     * The version of the format that the SBOM takes. E.g. if the format is spdx, the version may be 2.3.
     */
    version?: string | null;
  }
  /**
   * The occurrence representing an SBOM reference as applied to a specific resource. The occurrence follows the DSSE specification. See https://github.com/secure-systems-lab/dsse/blob/master/envelope.md for more details.
   */
  export interface Schema$SBOMReferenceOccurrence {
    /**
     * The actual payload that contains the SBOM reference data.
     */
    payload?: Schema$SbomReferenceIntotoPayload;
    /**
     * The kind of payload that SbomReferenceIntotoPayload takes. Since it's in the intoto format, this value is expected to be 'application/vnd.in-toto+json'.
     */
    payloadType?: string | null;
    /**
     * The signatures over the payload.
     */
    signatures?: Schema$EnvelopeSignature[];
  }
  /**
   * The status of an SBOM generation.
   */
  export interface Schema$SBOMStatus {
    /**
     * If there was an error generating an SBOM, this will indicate what that error was.
     */
    error?: string | null;
    /**
     * The progress of the SBOM generation.
     */
    sbomState?: string | null;
  }
  /**
   * The location of the secret.
   */
  export interface Schema$SecretLocation {
    /**
     * The secret is found from a file.
     */
    fileLocation?: Schema$GrafeasV1FileLocation;
  }
  /**
   * The note representing a secret.
   */
  export interface Schema$SecretNote {}
  /**
   * The occurrence provides details of a secret.
   */
  export interface Schema$SecretOccurrence {
    /**
     * Required. Type of secret.
     */
    kind?: string | null;
    /**
     * Optional. Locations where the secret is detected.
     */
    locations?: Schema$SecretLocation[];
    /**
     * Optional. Status of the secret.
     */
    statuses?: Schema$SecretStatus[];
  }
  /**
   * The status of the secret with a timestamp.
   */
  export interface Schema$SecretStatus {
    /**
     * Optional. Optional message about the status code.
     */
    message?: string | null;
    /**
     * Optional. The status of the secret.
     */
    status?: string | null;
    /**
     * Optional. The time the secret status was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
  }
  /**
   * Verifiers (e.g. Kritis implementations) MUST verify signatures with respect to the trust anchors defined in policy (e.g. a Kritis policy). Typically this means that the verifier has been configured with a map from `public_key_id` to public key material (and any required parameters, e.g. signing algorithm). In particular, verification implementations MUST NOT treat the signature `public_key_id` as anything more than a key lookup hint. The `public_key_id` DOES NOT validate or authenticate a public key; it only provides a mechanism for quickly selecting a public key ALREADY CONFIGURED on the verifier through a trusted channel. Verification implementations MUST reject signatures in any of the following circumstances: * The `public_key_id` is not recognized by the verifier. * The public key that `public_key_id` refers to does not verify the signature with respect to the payload. The `signature` contents SHOULD NOT be "attached" (where the payload is included with the serialized `signature` bytes). Verifiers MUST ignore any "attached" payload and only verify signatures with respect to explicitly provided payload (e.g. a `payload` field on the proto message that holds this Signature, or the canonical serialization of the proto message that holds this signature).
   */
  export interface Schema$Signature {
    /**
     * The identifier for the public key that verifies this signature. * The `public_key_id` is required. * The `public_key_id` SHOULD be an RFC3986 conformant URI. * When possible, the `public_key_id` SHOULD be an immutable reference, such as a cryptographic digest. Examples of valid `public_key_id`s: OpenPGP V4 public key fingerprint: * "openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA" See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr for more details on this scheme. RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization): * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU" * "nih:///sha-256;703f68f42aba2c6de30f488a5ea122fef76324679c9bf89791ba95a1271589a5"
     */
    publicKeyId?: string | null;
    /**
     * The content of the signature, an opaque bytestring. The payload that this signature verifies MUST be unambiguously provided with the Signature during verification. A wrapper message might provide the payload explicitly. Alternatively, a message might have a canonical serialization that can always be unambiguously computed to derive the payload.
     */
    signature?: string | null;
  }
  export interface Schema$SlsaBuilder {
    id?: string | null;
  }
  /**
   * Indicates that the builder claims certain fields in this message to be complete.
   */
  export interface Schema$SlsaCompleteness {
    /**
     * If true, the builder claims that recipe.arguments is complete, meaning that all external inputs are properly captured in the recipe.
     */
    arguments?: boolean | null;
    /**
     * If true, the builder claims that recipe.environment is claimed to be complete.
     */
    environment?: boolean | null;
    /**
     * If true, the builder claims that materials are complete, usually through some controls to prevent network access. Sometimes called "hermetic".
     */
    materials?: boolean | null;
  }
  /**
   * Other properties of the build.
   */
  export interface Schema$SlsaMetadata {
    /**
     * The timestamp of when the build completed.
     */
    buildFinishedOn?: string | null;
    /**
     * Identifies the particular build invocation, which can be useful for finding associated logs or other ad-hoc analysis. The value SHOULD be globally unique, per in-toto Provenance spec.
     */
    buildInvocationId?: string | null;
    /**
     * The timestamp of when the build started.
     */
    buildStartedOn?: string | null;
    /**
     * Indicates that the builder claims certain fields in this message to be complete.
     */
    completeness?: Schema$SlsaCompleteness;
    /**
     * If true, the builder claims that running the recipe on materials will produce bit-for-bit identical output.
     */
    reproducible?: boolean | null;
  }
  export interface Schema$SlsaProvenance {
    /**
     * required
     */
    builder?: Schema$SlsaBuilder;
    /**
     * The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on. This is considered to be incomplete unless metadata.completeness.materials is true. Unset or null is equivalent to empty.
     */
    materials?: Schema$Material[];
    metadata?: Schema$SlsaMetadata;
    /**
     * Identifies the configuration used for the build. When combined with materials, this SHOULD fully describe the build, such that re-running this recipe results in bit-for-bit identical output (if the build is reproducible). required
     */
    recipe?: Schema$SlsaRecipe;
  }
  /**
   * Keep in sync with schema at https://github.com/slsa-framework/slsa/blob/main/docs/provenance/schema/v1/provenance.proto Builder renamed to ProvenanceBuilder because of Java conflicts.
   */
  export interface Schema$SlsaProvenanceV1 {
    buildDefinition?: Schema$BuildDefinition;
    runDetails?: Schema$RunDetails;
  }
  /**
   * See full explanation of fields at slsa.dev/provenance/v0.2.
   */
  export interface Schema$SlsaProvenanceZeroTwo {
    buildConfig?: {[key: string]: any} | null;
    builder?: Schema$GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder;
    buildType?: string | null;
    invocation?: Schema$GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation;
    materials?: Schema$GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial[];
    metadata?: Schema$GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata;
  }
  /**
   * Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe.
   */
  export interface Schema$SlsaRecipe {
    /**
     * Collection of all external inputs that influenced the build on top of recipe.definedInMaterial and recipe.entryPoint. For example, if the recipe type were "make", then this might be the flags passed to make aside from the target, which is captured in recipe.entryPoint. Depending on the recipe Type, the structure may be different.
     */
    arguments?: {[key: string]: any} | null;
    /**
     * Index in materials containing the recipe steps that are not implied by recipe.type. For example, if the recipe type were "make", then this would point to the source containing the Makefile, not the make program itself. Set to -1 if the recipe doesn't come from a material, as zero is default unset value for int64.
     */
    definedInMaterial?: string | null;
    /**
     * String identifying the entry point into the build. This is often a path to a configuration file and/or a target label within that file. The syntax and meaning are defined by recipe.type. For example, if the recipe type were "make", then this would reference the directory in which to run make as well as which target to use.
     */
    entryPoint?: string | null;
    /**
     * Any other builder-controlled inputs necessary for correctly evaluating the recipe. Usually only needed for reproducing the build but not evaluated as part of policy. Depending on the recipe Type, the structure may be different.
     */
    environment?: {[key: string]: any} | null;
    /**
     * URI indicating what type of recipe was performed. It determines the meaning of recipe.entryPoint, recipe.arguments, recipe.environment, and materials.
     */
    type?: string | null;
  }
  /**
   * Source describes the location of the source used for the build.
   */
  export interface Schema$Source {
    /**
     * If provided, some of the source code used for the build may be found in these locations, in the case where the source repository had multiple remotes or submodules. This list will not include the context specified in the context field.
     */
    additionalContexts?: Schema$SourceContext[];
    /**
     * If provided, the input binary artifacts for the build came from this location.
     */
    artifactStorageSourceUri?: string | null;
    /**
     * If provided, the source code used for the build came from this location.
     */
    context?: Schema$SourceContext;
    /**
     * Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (.tar.gz), the FileHash will be for the single path to that file.
     */
    fileHashes?: {[key: string]: Schema$FileHashes} | null;
  }
  /**
   * A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.
   */
  export interface Schema$SourceContext {
    /**
     * A SourceContext referring to a revision in a Google Cloud Source Repo.
     */
    cloudRepo?: Schema$CloudRepoSourceContext;
    /**
     * A SourceContext referring to a Gerrit project.
     */
    gerrit?: Schema$GerritSourceContext;
    /**
     * A SourceContext referring to any third party Git repo (e.g., GitHub).
     */
    git?: Schema$GitSourceContext;
    /**
     * Labels with user defined metadata.
     */
    labels?: {[key: string]: string} | null;
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
   * StepResult is the declaration of a result for a build step.
   */
  export interface Schema$StepResult {
    attestationContentName?: string | null;
    attestationType?: string | null;
    name?: string | null;
  }
  export interface Schema$Subject {
    /**
     * `"": ""` Algorithms can be e.g. sha256, sha512 See https://github.com/in-toto/attestation/blob/main/spec/field_types.md#DigestSet
     */
    digest?: {[key: string]: string} | null;
    name?: string | null;
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
   * Start and end times for a build execution phase. Next ID: 3
   */
  export interface Schema$TimeSpan {
    /**
     * End of time span.
     */
    endTime?: string | null;
    /**
     * Start of time span.
     */
    startTime?: string | null;
  }
  /**
   * The Upgrade Distribution represents metadata about the Upgrade for each operating system (CPE). Some distributions have additional metadata around updates, classifying them into various categories and severities.
   */
  export interface Schema$UpgradeDistribution {
    /**
     * The operating system classification of this Upgrade, as specified by the upstream operating system upgrade feed. For Windows the classification is one of the category_ids listed at https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ff357803(v=vs.85)
     */
    classification?: string | null;
    /**
     * Required - The specific operating system this metadata applies to. See https://cpe.mitre.org/specification/.
     */
    cpeUri?: string | null;
    /**
     * The cve tied to this Upgrade.
     */
    cve?: string[] | null;
    /**
     * The severity as specified by the upstream operating system.
     */
    severity?: string | null;
  }
  /**
   * An Upgrade Note represents a potential upgrade of a package to a given version. For each package version combination (i.e. bash 4.0, bash 4.1, bash 4.1.2), there will be an Upgrade Note. For Windows, windows_update field represents the information related to the update.
   */
  export interface Schema$UpgradeNote {
    /**
     * Metadata about the upgrade for each specific operating system.
     */
    distributions?: Schema$UpgradeDistribution[];
    /**
     * Required for non-Windows OS. The package this Upgrade is for.
     */
    package?: string | null;
    /**
     * Required for non-Windows OS. The version of the package in machine + human readable form.
     */
    version?: Schema$Version;
    /**
     * Required for Windows OS. Represents the metadata about the Windows update.
     */
    windowsUpdate?: Schema$WindowsUpdate;
  }
  /**
   * An Upgrade Occurrence represents that a specific resource_url could install a specific upgrade. This presence is supplied via local sources (i.e. it is present in the mirror and the running system has noticed its availability). For Windows, both distribution and windows_update contain information for the Windows update.
   */
  export interface Schema$UpgradeOccurrence {
    /**
     * Metadata about the upgrade for available for the specific operating system for the resource_url. This allows efficient filtering, as well as making it easier to use the occurrence.
     */
    distribution?: Schema$UpgradeDistribution;
    /**
     * Required for non-Windows OS. The package this Upgrade is for.
     */
    package?: string | null;
    /**
     * Required for non-Windows OS. The version of the package in a machine + human readable form.
     */
    parsedVersion?: Schema$Version;
    /**
     * Required for Windows OS. Represents the metadata about the Windows update.
     */
    windowsUpdate?: Schema$WindowsUpdate;
  }
  /**
   * Version contains structured information about the version of a package.
   */
  export interface Schema$Version {
    /**
     * Used to correct mistakes in the version numbering scheme.
     */
    epoch?: number | null;
    /**
     * Human readable version string. This string is of the form :- and is only set when kind is NORMAL.
     */
    fullName?: string | null;
    /**
     * Whether this version is specifying part of an inclusive range. Grafeas does not have the capability to specify version ranges; instead we have fields that specify start version and end versions. At times this is insufficient - we also need to specify whether the version is included in the range or is excluded from the range. This boolean is expected to be set to true when the version is included in a range.
     */
    inclusive?: boolean | null;
    /**
     * Required. Distinguishes between sentinel MIN/MAX versions and normal versions.
     */
    kind?: string | null;
    /**
     * Required only when version kind is NORMAL. The main part of the version name.
     */
    name?: string | null;
    /**
     * The iteration of the package build from the above version.
     */
    revision?: string | null;
  }
  /**
   * VexAssessment provides all publisher provided Vex information that is related to this vulnerability.
   */
  export interface Schema$VexAssessment {
    /**
     * Holds the MITRE standard Common Vulnerabilities and Exposures (CVE) tracking number for the vulnerability. Deprecated: Use vulnerability_id instead to denote CVEs.
     */
    cve?: string | null;
    /**
     * Contains information about the impact of this vulnerability, this will change with time.
     */
    impacts?: string[] | null;
    /**
     * Justification provides the justification when the state of the assessment if NOT_AFFECTED.
     */
    justification?: Schema$Justification;
    /**
     * The VulnerabilityAssessment note from which this VexAssessment was generated. This will be of the form: `projects/[PROJECT_ID]/notes/[NOTE_ID]`.
     */
    noteName?: string | null;
    /**
     * Holds a list of references associated with this vulnerability item and assessment.
     */
    relatedUris?: Schema$RelatedUrl[];
    /**
     * Specifies details on how to handle (and presumably, fix) a vulnerability.
     */
    remediations?: Schema$Remediation[];
    /**
     * Provides the state of this Vulnerability assessment.
     */
    state?: string | null;
    /**
     * The vulnerability identifier for this Assessment. Will hold one of common identifiers e.g. CVE, GHSA etc.
     */
    vulnerabilityId?: string | null;
  }
  /**
   * Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution. Next ID: 3
   */
  export interface Schema$Volume {
    /**
     * Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps.
     */
    name?: string | null;
    /**
     * Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths.
     */
    path?: string | null;
  }
  /**
   * A single VulnerabilityAssessmentNote represents one particular product's vulnerability assessment for one CVE.
   */
  export interface Schema$VulnerabilityAssessmentNote {
    /**
     * Represents a vulnerability assessment for the product.
     */
    assessment?: Schema$Assessment;
    /**
     * Identifies the language used by this document, corresponding to IETF BCP 47 / RFC 5646.
     */
    languageCode?: string | null;
    /**
     * A detailed description of this Vex.
     */
    longDescription?: string | null;
    /**
     * The product affected by this vex.
     */
    product?: Schema$Product;
    /**
     * Publisher details of this Note.
     */
    publisher?: Schema$Publisher;
    /**
     * A one sentence description of this Vex.
     */
    shortDescription?: string | null;
    /**
     * The title of the note. E.g. `Vex-Debian-11.4`
     */
    title?: string | null;
  }
  /**
   * A security vulnerability that can be found in resources.
   */
  export interface Schema$VulnerabilityNote {
    /**
     * The CVSS score of this vulnerability. CVSS score is on a scale of 0 - 10 where 0 indicates low severity and 10 indicates high severity.
     */
    cvssScore?: number | null;
    /**
     * The full description of the v2 CVSS for this vulnerability.
     */
    cvssV2?: Schema$CVSS;
    /**
     * The full description of the CVSSv3 for this vulnerability.
     */
    cvssV3?: Schema$CVSSv3;
    /**
     * CVSS version used to populate cvss_score and severity.
     */
    cvssVersion?: string | null;
    /**
     * Details of all known distros and packages affected by this vulnerability.
     */
    details?: Schema$Detail[];
    /**
     * The note provider assigned severity of this vulnerability.
     */
    severity?: string | null;
    /**
     * The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker.
     */
    sourceUpdateTime?: string | null;
    /**
     * Windows details get their own format because the information format and model don't match a normal detail. Specifically Windows updates are done as patches, thus Windows vulnerabilities really are a missing package, rather than a package being at an incorrect version.
     */
    windowsDetails?: Schema$WindowsDetail[];
  }
  /**
   * An occurrence of a severity vulnerability on a resource.
   */
  export interface Schema$VulnerabilityOccurrence {
    /**
     * Output only. The CVSS score of this vulnerability. CVSS score is on a scale of 0 - 10 where 0 indicates low severity and 10 indicates high severity.
     */
    cvssScore?: number | null;
    /**
     * The cvss v2 score for the vulnerability.
     */
    cvssV2?: Schema$CVSS;
    /**
     * The cvss v3 score for the vulnerability.
     */
    cvssv3?: Schema$CVSS;
    /**
     * Output only. CVSS version used to populate cvss_score and severity.
     */
    cvssVersion?: string | null;
    /**
     * The distro assigned severity for this vulnerability when it is available, otherwise this is the note provider assigned severity. When there are multiple PackageIssues for this vulnerability, they can have different effective severities because some might be provided by the distro while others are provided by the language ecosystem for a language pack. For this reason, it is advised to use the effective severity on the PackageIssue level. In the case where multiple PackageIssues have differing effective severities, this field should be the highest severity for any of the PackageIssues.
     */
    effectiveSeverity?: string | null;
    /**
     * Occurrence-specific extra details about the vulnerability.
     */
    extraDetails?: string | null;
    /**
     * Output only. Whether at least one of the affected packages has a fix available.
     */
    fixAvailable?: boolean | null;
    /**
     * Output only. A detailed description of this vulnerability.
     */
    longDescription?: string | null;
    /**
     * Required. The set of affected locations and their fixes (if available) within the associated resource.
     */
    packageIssue?: Schema$PackageIssue[];
    /**
     * Output only. URLs related to this vulnerability.
     */
    relatedUrls?: Schema$RelatedUrl[];
    /**
     * Output only. The note provider assigned severity of this vulnerability.
     */
    severity?: string | null;
    /**
     * Output only. A one sentence description of this vulnerability.
     */
    shortDescription?: string | null;
    /**
     * The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.).
     */
    type?: string | null;
    vexAssessment?: Schema$VexAssessment;
  }
  /**
   * A summary of how many vulnerability occurrences there are per resource and severity type.
   */
  export interface Schema$VulnerabilityOccurrencesSummary {
    /**
     * A listing by resource of the number of fixable and total vulnerabilities.
     */
    counts?: Schema$FixableTotalByDigest[];
    /**
     * Unordered list. Unreachable regions. Populated for requests from the global region when `return_partial_success` is set. Format: projects//locations/
     */
    unreachable?: string[] | null;
  }
  export interface Schema$WindowsDetail {
    /**
     * Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability affects.
     */
    cpeUri?: string | null;
    /**
     * The description of this vulnerability.
     */
    description?: string | null;
    /**
     * Required. The names of the KBs which have hotfixes to mitigate this vulnerability. Note that there may be multiple hotfixes (and thus multiple KBs) that mitigate a given vulnerability. Currently any listed KBs presence is considered a fix.
     */
    fixingKbs?: Schema$KnowledgeBase[];
    /**
     * Required. The name of this vulnerability.
     */
    name?: string | null;
  }
  /**
   * Windows Update represents the metadata about the update for the Windows operating system. The fields in this message come from the Windows Update API documented at https://docs.microsoft.com/en-us/windows/win32/api/wuapi/nn-wuapi-iupdate.
   */
  export interface Schema$WindowsUpdate {
    /**
     * The list of categories to which the update belongs.
     */
    categories?: Schema$Category[];
    /**
     * The localized description of the update.
     */
    description?: string | null;
    /**
     * Required - The unique identifier for the update.
     */
    identity?: Schema$Identity;
    /**
     * The Microsoft Knowledge Base article IDs that are associated with the update.
     */
    kbArticleIds?: string[] | null;
    /**
     * The last published timestamp of the update.
     */
    lastPublishedTimestamp?: string | null;
    /**
     * The hyperlink to the support information for the update.
     */
    supportUrl?: string | null;
    /**
     * The localized title of the update.
     */
    title?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    notes: Resource$Projects$Notes;
    occurrences: Resource$Projects$Occurrences;
    resources: Resource$Projects$Resources;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
      this.notes = new Resource$Projects$Notes(this.context);
      this.occurrences = new Resource$Projects$Occurrences(this.context);
      this.resources = new Resource$Projects$Resources(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    notes: Resource$Projects$Locations$Notes;
    occurrences: Resource$Projects$Locations$Occurrences;
    resources: Resource$Projects$Locations$Resources;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.notes = new Resource$Projects$Locations$Notes(this.context);
      this.occurrences = new Resource$Projects$Locations$Occurrences(
        this.context
      );
      this.resources = new Resource$Projects$Locations$Resources(this.context);
    }
  }

  export class Resource$Projects$Locations$Notes {
    context: APIRequestContext;
    occurrences: Resource$Projects$Locations$Notes$Occurrences;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.occurrences = new Resource$Projects$Locations$Notes$Occurrences(
        this.context
      );
    }

    /**
     * Creates new notes in batch.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.locations.notes.batchCreate({
     *     // Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the notes are to be created.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "notes": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "notes": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Notes$Batchcreate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchCreate(
      params?: Params$Resource$Projects$Locations$Notes$Batchcreate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchCreateNotesResponse>>;
    batchCreate(
      params: Params$Resource$Projects$Locations$Notes$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Locations$Notes$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchCreateNotesResponse>,
      callback: BodyResponseCallback<Schema$BatchCreateNotesResponse>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Locations$Notes$Batchcreate,
      callback: BodyResponseCallback<Schema$BatchCreateNotesResponse>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$BatchCreateNotesResponse>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Notes$Batchcreate
        | BodyResponseCallback<Schema$BatchCreateNotesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchCreateNotesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchCreateNotesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchCreateNotesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Notes$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Notes$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/notes:batchCreate').replace(
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
        createAPIRequest<Schema$BatchCreateNotesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchCreateNotesResponse>(parameters);
      }
    }

    /**
     * Creates a new note.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.locations.notes.create({
     *     // Required. The ID to use for this note.
     *     noteId: 'placeholder-value',
     *     // Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the note is to be created.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attestation": {},
     *       //   "build": {},
     *       //   "compliance": {},
     *       //   "createTime": "my_createTime",
     *       //   "deployment": {},
     *       //   "discovery": {},
     *       //   "dsseAttestation": {},
     *       //   "expirationTime": "my_expirationTime",
     *       //   "image": {},
     *       //   "kind": "my_kind",
     *       //   "longDescription": "my_longDescription",
     *       //   "name": "my_name",
     *       //   "package": {},
     *       //   "relatedNoteNames": [],
     *       //   "relatedUrl": [],
     *       //   "sbomReference": {},
     *       //   "secret": {},
     *       //   "shortDescription": "my_shortDescription",
     *       //   "updateTime": "my_updateTime",
     *       //   "upgrade": {},
     *       //   "vulnerability": {},
     *       //   "vulnerabilityAssessment": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attestation": {},
     *   //   "build": {},
     *   //   "compliance": {},
     *   //   "createTime": "my_createTime",
     *   //   "deployment": {},
     *   //   "discovery": {},
     *   //   "dsseAttestation": {},
     *   //   "expirationTime": "my_expirationTime",
     *   //   "image": {},
     *   //   "kind": "my_kind",
     *   //   "longDescription": "my_longDescription",
     *   //   "name": "my_name",
     *   //   "package": {},
     *   //   "relatedNoteNames": [],
     *   //   "relatedUrl": [],
     *   //   "sbomReference": {},
     *   //   "secret": {},
     *   //   "shortDescription": "my_shortDescription",
     *   //   "updateTime": "my_updateTime",
     *   //   "upgrade": {},
     *   //   "vulnerability": {},
     *   //   "vulnerabilityAssessment": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Notes$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Notes$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Note>>;
    create(
      params: Params$Resource$Projects$Locations$Notes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Notes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Notes$Create,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    create(callback: BodyResponseCallback<Schema$Note>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Notes$Create
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Note>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Notes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Notes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/notes').replace(
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
        createAPIRequest<Schema$Note>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }

    /**
     * Deletes the specified note.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.locations.notes.delete({
     *     // Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     *     name: 'projects/my-project/locations/my-location/notes/my-note',
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
      params: Params$Resource$Projects$Locations$Notes$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Notes$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Notes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Notes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Notes$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Notes$Delete
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
        {}) as Params$Resource$Projects$Locations$Notes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Notes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
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
     * Gets the specified note.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.locations.notes.get({
     *     // Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     *     name: 'projects/my-project/locations/my-location/notes/my-note',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attestation": {},
     *   //   "build": {},
     *   //   "compliance": {},
     *   //   "createTime": "my_createTime",
     *   //   "deployment": {},
     *   //   "discovery": {},
     *   //   "dsseAttestation": {},
     *   //   "expirationTime": "my_expirationTime",
     *   //   "image": {},
     *   //   "kind": "my_kind",
     *   //   "longDescription": "my_longDescription",
     *   //   "name": "my_name",
     *   //   "package": {},
     *   //   "relatedNoteNames": [],
     *   //   "relatedUrl": [],
     *   //   "sbomReference": {},
     *   //   "secret": {},
     *   //   "shortDescription": "my_shortDescription",
     *   //   "updateTime": "my_updateTime",
     *   //   "upgrade": {},
     *   //   "vulnerability": {},
     *   //   "vulnerabilityAssessment": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Notes$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Notes$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Note>>;
    get(
      params: Params$Resource$Projects$Locations$Notes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Notes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Notes$Get,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    get(callback: BodyResponseCallback<Schema$Note>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Notes$Get
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Note>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Notes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Notes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
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
        createAPIRequest<Schema$Note>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }

    /**
     * Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.locations.notes.getIamPolicy({
     *     // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/notes/my-note',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "options": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
      params: Params$Resource$Projects$Locations$Notes$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Notes$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Notes$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Notes$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Notes$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Notes$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Notes$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Notes$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
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
     * Lists notes for the specified project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.locations.notes.list({
     *     // The filter expression.
     *     filter: 'placeholder-value',
     *     // Number of notes to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
     *     pageSize: 'placeholder-value',
     *     // Token to provide to skip to a particular spot in the list.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the project to list notes for in the form of `projects/[PROJECT_ID]`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // If set, the request will return all reachable Notes and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     *     returnPartialSuccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "notes": [],
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
      params: Params$Resource$Projects$Locations$Notes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Notes$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListNotesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Notes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Notes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListNotesResponse>,
      callback: BodyResponseCallback<Schema$ListNotesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Notes$List,
      callback: BodyResponseCallback<Schema$ListNotesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListNotesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Notes$List
        | BodyResponseCallback<Schema$ListNotesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNotesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNotesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListNotesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Notes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Notes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/notes').replace(
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
        createAPIRequest<Schema$ListNotesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNotesResponse>(parameters);
      }
    }

    /**
     * Updates the specified note.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.locations.notes.patch({
     *     // Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     *     name: 'projects/my-project/locations/my-location/notes/my-note',
     *     // The fields to update.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attestation": {},
     *       //   "build": {},
     *       //   "compliance": {},
     *       //   "createTime": "my_createTime",
     *       //   "deployment": {},
     *       //   "discovery": {},
     *       //   "dsseAttestation": {},
     *       //   "expirationTime": "my_expirationTime",
     *       //   "image": {},
     *       //   "kind": "my_kind",
     *       //   "longDescription": "my_longDescription",
     *       //   "name": "my_name",
     *       //   "package": {},
     *       //   "relatedNoteNames": [],
     *       //   "relatedUrl": [],
     *       //   "sbomReference": {},
     *       //   "secret": {},
     *       //   "shortDescription": "my_shortDescription",
     *       //   "updateTime": "my_updateTime",
     *       //   "upgrade": {},
     *       //   "vulnerability": {},
     *       //   "vulnerabilityAssessment": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attestation": {},
     *   //   "build": {},
     *   //   "compliance": {},
     *   //   "createTime": "my_createTime",
     *   //   "deployment": {},
     *   //   "discovery": {},
     *   //   "dsseAttestation": {},
     *   //   "expirationTime": "my_expirationTime",
     *   //   "image": {},
     *   //   "kind": "my_kind",
     *   //   "longDescription": "my_longDescription",
     *   //   "name": "my_name",
     *   //   "package": {},
     *   //   "relatedNoteNames": [],
     *   //   "relatedUrl": [],
     *   //   "sbomReference": {},
     *   //   "secret": {},
     *   //   "shortDescription": "my_shortDescription",
     *   //   "updateTime": "my_updateTime",
     *   //   "upgrade": {},
     *   //   "vulnerability": {},
     *   //   "vulnerabilityAssessment": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Notes$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Notes$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Note>>;
    patch(
      params: Params$Resource$Projects$Locations$Notes$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Notes$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Notes$Patch,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Note>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Notes$Patch
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Note>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Notes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Notes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
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
        createAPIRequest<Schema$Note>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.locations.notes.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/notes/my-note',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
      params: Params$Resource$Projects$Locations$Notes$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Notes$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Notes$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Notes$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Notes$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Notes$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Notes$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Notes$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
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
     * Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await containeranalysis.projects.locations.notes.testIamPermissions({
     *       // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource: 'projects/my-project/locations/my-location/notes/my-note',
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
      params: Params$Resource$Projects$Locations$Notes$Testiampermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Notes$Testiampermissions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Notes$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Notes$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Notes$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Notes$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Notes$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Notes$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Notes$Batchcreate
    extends StandardParameters {
    /**
     * Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the notes are to be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchCreateNotesRequest;
  }
  export interface Params$Resource$Projects$Locations$Notes$Create
    extends StandardParameters {
    /**
     * Required. The ID to use for this note.
     */
    noteId?: string;
    /**
     * Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the note is to be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Note;
  }
  export interface Params$Resource$Projects$Locations$Notes$Delete
    extends StandardParameters {
    /**
     * Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Notes$Get
    extends StandardParameters {
    /**
     * Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Notes$Getiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Notes$List
    extends StandardParameters {
    /**
     * The filter expression.
     */
    filter?: string;
    /**
     * Number of notes to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
     */
    pageSize?: number;
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    pageToken?: string;
    /**
     * Required. The name of the project to list notes for in the form of `projects/[PROJECT_ID]`.
     */
    parent?: string;
    /**
     * If set, the request will return all reachable Notes and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     */
    returnPartialSuccess?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Notes$Patch
    extends StandardParameters {
    /**
     * Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     */
    name?: string;
    /**
     * The fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Note;
  }
  export interface Params$Resource$Projects$Locations$Notes$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Notes$Testiampermissions
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

  export class Resource$Projects$Locations$Notes$Occurrences {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.locations.notes.occurrences.list(
     *     {
     *       // The filter expression.
     *       filter: 'placeholder-value',
     *       // Required. The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     *       name: 'projects/my-project/locations/my-location/notes/my-note',
     *       // Number of occurrences to return in the list.
     *       pageSize: 'placeholder-value',
     *       // Token to provide to skip to a particular spot in the list.
     *       pageToken: 'placeholder-value',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "occurrences": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Notes$Occurrences$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Notes$Occurrences$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListNoteOccurrencesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Notes$Occurrences$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Notes$Occurrences$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNoteOccurrencesResponse>,
      callback: BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Notes$Occurrences$List,
      callback: BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Notes$Occurrences$List
        | BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListNoteOccurrencesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Notes$Occurrences$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Notes$Occurrences$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/occurrences').replace(
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
        createAPIRequest<Schema$ListNoteOccurrencesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNoteOccurrencesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Notes$Occurrences$List
    extends StandardParameters {
    /**
     * The filter expression.
     */
    filter?: string;
    /**
     * Required. The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     */
    name?: string;
    /**
     * Number of occurrences to return in the list.
     */
    pageSize?: number;
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Occurrences {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates new occurrences in batch.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await containeranalysis.projects.locations.occurrences.batchCreate({
     *       // Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrences are to be created.
     *       parent: 'projects/my-project/locations/my-location',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "occurrences": []
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "occurrences": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Occurrences$Batchcreate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchCreate(
      params?: Params$Resource$Projects$Locations$Occurrences$Batchcreate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchCreateOccurrencesResponse>>;
    batchCreate(
      params: Params$Resource$Projects$Locations$Occurrences$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Locations$Occurrences$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>,
      callback: BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Locations$Occurrences$Batchcreate,
      callback: BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Occurrences$Batchcreate
        | BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchCreateOccurrencesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Occurrences$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Occurrences$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/occurrences:batchCreate').replace(
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
        createAPIRequest<Schema$BatchCreateOccurrencesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchCreateOccurrencesResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a new occurrence.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.locations.occurrences.create({
     *     // Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrence is to be created.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attestation": {},
     *       //   "build": {},
     *       //   "compliance": {},
     *       //   "createTime": "my_createTime",
     *       //   "deployment": {},
     *       //   "discovery": {},
     *       //   "dsseAttestation": {},
     *       //   "envelope": {},
     *       //   "image": {},
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "noteName": "my_noteName",
     *       //   "package": {},
     *       //   "remediation": "my_remediation",
     *       //   "resourceUri": "my_resourceUri",
     *       //   "sbomReference": {},
     *       //   "secret": {},
     *       //   "updateTime": "my_updateTime",
     *       //   "upgrade": {},
     *       //   "vulnerability": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attestation": {},
     *   //   "build": {},
     *   //   "compliance": {},
     *   //   "createTime": "my_createTime",
     *   //   "deployment": {},
     *   //   "discovery": {},
     *   //   "dsseAttestation": {},
     *   //   "envelope": {},
     *   //   "image": {},
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "noteName": "my_noteName",
     *   //   "package": {},
     *   //   "remediation": "my_remediation",
     *   //   "resourceUri": "my_resourceUri",
     *   //   "sbomReference": {},
     *   //   "secret": {},
     *   //   "updateTime": "my_updateTime",
     *   //   "upgrade": {},
     *   //   "vulnerability": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Occurrences$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Occurrences$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Occurrence>>;
    create(
      params: Params$Resource$Projects$Locations$Occurrences$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Occurrences$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Occurrence>,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Occurrences$Create,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    create(callback: BodyResponseCallback<Schema$Occurrence>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Occurrences$Create
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Occurrence>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Occurrences$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Occurrences$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/occurrences').replace(
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
        createAPIRequest<Schema$Occurrence>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Occurrence>(parameters);
      }
    }

    /**
     * Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.locations.occurrences.delete({
     *     // Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     *     name: 'projects/my-project/locations/my-location/occurrences/my-occurrence',
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
      params: Params$Resource$Projects$Locations$Occurrences$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Occurrences$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Occurrences$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Occurrences$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Occurrences$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Occurrences$Delete
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
        {}) as Params$Resource$Projects$Locations$Occurrences$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Occurrences$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
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
     * Gets the specified occurrence.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.locations.occurrences.get({
     *     // Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     *     name: 'projects/my-project/locations/my-location/occurrences/my-occurrence',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attestation": {},
     *   //   "build": {},
     *   //   "compliance": {},
     *   //   "createTime": "my_createTime",
     *   //   "deployment": {},
     *   //   "discovery": {},
     *   //   "dsseAttestation": {},
     *   //   "envelope": {},
     *   //   "image": {},
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "noteName": "my_noteName",
     *   //   "package": {},
     *   //   "remediation": "my_remediation",
     *   //   "resourceUri": "my_resourceUri",
     *   //   "sbomReference": {},
     *   //   "secret": {},
     *   //   "updateTime": "my_updateTime",
     *   //   "upgrade": {},
     *   //   "vulnerability": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Occurrences$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Occurrences$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Occurrence>>;
    get(
      params: Params$Resource$Projects$Locations$Occurrences$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Occurrences$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Occurrence>,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Occurrences$Get,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    get(callback: BodyResponseCallback<Schema$Occurrence>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Occurrences$Get
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Occurrence>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Occurrences$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Occurrences$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
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
        createAPIRequest<Schema$Occurrence>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Occurrence>(parameters);
      }
    }

    /**
     * Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await containeranalysis.projects.locations.occurrences.getIamPolicy({
     *       // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/occurrences/my-occurrence',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "options": {}
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
      params: Params$Resource$Projects$Locations$Occurrences$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Occurrences$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Occurrences$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Occurrences$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Occurrences$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Occurrences$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Occurrences$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Occurrences$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
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
     * Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.locations.occurrences.getNotes({
     *     // Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     *     name: 'projects/my-project/locations/my-location/occurrences/my-occurrence',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attestation": {},
     *   //   "build": {},
     *   //   "compliance": {},
     *   //   "createTime": "my_createTime",
     *   //   "deployment": {},
     *   //   "discovery": {},
     *   //   "dsseAttestation": {},
     *   //   "expirationTime": "my_expirationTime",
     *   //   "image": {},
     *   //   "kind": "my_kind",
     *   //   "longDescription": "my_longDescription",
     *   //   "name": "my_name",
     *   //   "package": {},
     *   //   "relatedNoteNames": [],
     *   //   "relatedUrl": [],
     *   //   "sbomReference": {},
     *   //   "secret": {},
     *   //   "shortDescription": "my_shortDescription",
     *   //   "updateTime": "my_updateTime",
     *   //   "upgrade": {},
     *   //   "vulnerability": {},
     *   //   "vulnerabilityAssessment": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getNotes(
      params: Params$Resource$Projects$Locations$Occurrences$Getnotes,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getNotes(
      params?: Params$Resource$Projects$Locations$Occurrences$Getnotes,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Note>>;
    getNotes(
      params: Params$Resource$Projects$Locations$Occurrences$Getnotes,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getNotes(
      params: Params$Resource$Projects$Locations$Occurrences$Getnotes,
      options: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    getNotes(
      params: Params$Resource$Projects$Locations$Occurrences$Getnotes,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    getNotes(callback: BodyResponseCallback<Schema$Note>): void;
    getNotes(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Occurrences$Getnotes
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Note>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Occurrences$Getnotes;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Occurrences$Getnotes;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/notes').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Note>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }

    /**
     * Gets a summary of the number and severity of occurrences.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await containeranalysis.projects.locations.occurrences.getVulnerabilitySummary(
     *       {
     *         // The filter expression.
     *         filter: 'placeholder-value',
     *         // Required. The name of the project to get a vulnerability summary for in the form of `projects/[PROJECT_ID]`.
     *         parent: 'projects/my-project/locations/my-location',
     *         // If set, the request will return all reachable occurrence summaries and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     *         returnPartialSuccess: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "counts": [],
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
    getVulnerabilitySummary(
      params: Params$Resource$Projects$Locations$Occurrences$Getvulnerabilitysummary,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getVulnerabilitySummary(
      params?: Params$Resource$Projects$Locations$Occurrences$Getvulnerabilitysummary,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$VulnerabilityOccurrencesSummary>>;
    getVulnerabilitySummary(
      params: Params$Resource$Projects$Locations$Occurrences$Getvulnerabilitysummary,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getVulnerabilitySummary(
      params: Params$Resource$Projects$Locations$Occurrences$Getvulnerabilitysummary,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>,
      callback: BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>
    ): void;
    getVulnerabilitySummary(
      params: Params$Resource$Projects$Locations$Occurrences$Getvulnerabilitysummary,
      callback: BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>
    ): void;
    getVulnerabilitySummary(
      callback: BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>
    ): void;
    getVulnerabilitySummary(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Occurrences$Getvulnerabilitysummary
        | BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$VulnerabilityOccurrencesSummary>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Occurrences$Getvulnerabilitysummary;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Occurrences$Getvulnerabilitysummary;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/occurrences:vulnerabilitySummary'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$VulnerabilityOccurrencesSummary>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VulnerabilityOccurrencesSummary>(
          parameters
        );
      }
    }

    /**
     * Lists occurrences for the specified project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.locations.occurrences.list({
     *     // The filter expression.
     *     filter: 'placeholder-value',
     *     // Number of occurrences to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
     *     pageSize: 'placeholder-value',
     *     // Token to provide to skip to a particular spot in the list.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // If set, the request will return all reachable Occurrences and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     *     returnPartialSuccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "occurrences": [],
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
      params: Params$Resource$Projects$Locations$Occurrences$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Occurrences$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListOccurrencesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Occurrences$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Occurrences$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOccurrencesResponse>,
      callback: BodyResponseCallback<Schema$ListOccurrencesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Occurrences$List,
      callback: BodyResponseCallback<Schema$ListOccurrencesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOccurrencesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Occurrences$List
        | BodyResponseCallback<Schema$ListOccurrencesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOccurrencesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOccurrencesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListOccurrencesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Occurrences$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Occurrences$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/occurrences').replace(
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
        createAPIRequest<Schema$ListOccurrencesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOccurrencesResponse>(parameters);
      }
    }

    /**
     * Updates the specified occurrence.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.locations.occurrences.patch({
     *     // Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     *     name: 'projects/my-project/locations/my-location/occurrences/my-occurrence',
     *     // The fields to update.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attestation": {},
     *       //   "build": {},
     *       //   "compliance": {},
     *       //   "createTime": "my_createTime",
     *       //   "deployment": {},
     *       //   "discovery": {},
     *       //   "dsseAttestation": {},
     *       //   "envelope": {},
     *       //   "image": {},
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "noteName": "my_noteName",
     *       //   "package": {},
     *       //   "remediation": "my_remediation",
     *       //   "resourceUri": "my_resourceUri",
     *       //   "sbomReference": {},
     *       //   "secret": {},
     *       //   "updateTime": "my_updateTime",
     *       //   "upgrade": {},
     *       //   "vulnerability": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attestation": {},
     *   //   "build": {},
     *   //   "compliance": {},
     *   //   "createTime": "my_createTime",
     *   //   "deployment": {},
     *   //   "discovery": {},
     *   //   "dsseAttestation": {},
     *   //   "envelope": {},
     *   //   "image": {},
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "noteName": "my_noteName",
     *   //   "package": {},
     *   //   "remediation": "my_remediation",
     *   //   "resourceUri": "my_resourceUri",
     *   //   "sbomReference": {},
     *   //   "secret": {},
     *   //   "updateTime": "my_updateTime",
     *   //   "upgrade": {},
     *   //   "vulnerability": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Occurrences$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Occurrences$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Occurrence>>;
    patch(
      params: Params$Resource$Projects$Locations$Occurrences$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Occurrences$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Occurrence>,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Occurrences$Patch,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Occurrence>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Occurrences$Patch
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Occurrence>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Occurrences$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Occurrences$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
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
        createAPIRequest<Schema$Occurrence>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Occurrence>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await containeranalysis.projects.locations.occurrences.setIamPolicy({
     *       // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/occurrences/my-occurrence',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "policy": {}
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
      params: Params$Resource$Projects$Locations$Occurrences$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Occurrences$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Occurrences$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Occurrences$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Occurrences$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Occurrences$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Occurrences$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Occurrences$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
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
     * Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await containeranalysis.projects.locations.occurrences.testIamPermissions({
     *       // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *       resource:
     *         'projects/my-project/locations/my-location/occurrences/my-occurrence',
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
      params: Params$Resource$Projects$Locations$Occurrences$Testiampermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Occurrences$Testiampermissions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Occurrences$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Occurrences$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Occurrences$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Occurrences$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Occurrences$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Occurrences$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
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

  export interface Params$Resource$Projects$Locations$Occurrences$Batchcreate
    extends StandardParameters {
    /**
     * Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrences are to be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchCreateOccurrencesRequest;
  }
  export interface Params$Resource$Projects$Locations$Occurrences$Create
    extends StandardParameters {
    /**
     * Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrence is to be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Occurrence;
  }
  export interface Params$Resource$Projects$Locations$Occurrences$Delete
    extends StandardParameters {
    /**
     * Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Occurrences$Get
    extends StandardParameters {
    /**
     * Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Occurrences$Getiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Occurrences$Getnotes
    extends StandardParameters {
    /**
     * Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Occurrences$Getvulnerabilitysummary
    extends StandardParameters {
    /**
     * The filter expression.
     */
    filter?: string;
    /**
     * Required. The name of the project to get a vulnerability summary for in the form of `projects/[PROJECT_ID]`.
     */
    parent?: string;
    /**
     * If set, the request will return all reachable occurrence summaries and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     */
    returnPartialSuccess?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Occurrences$List
    extends StandardParameters {
    /**
     * The filter expression.
     */
    filter?: string;
    /**
     * Number of occurrences to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
     */
    pageSize?: number;
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    pageToken?: string;
    /**
     * Required. The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`.
     */
    parent?: string;
    /**
     * If set, the request will return all reachable Occurrences and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     */
    returnPartialSuccess?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Occurrences$Patch
    extends StandardParameters {
    /**
     * Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     */
    name?: string;
    /**
     * The fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Occurrence;
  }
  export interface Params$Resource$Projects$Locations$Occurrences$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Occurrences$Testiampermissions
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

  export class Resource$Projects$Locations$Resources {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Generates an SBOM for the given resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.locations.resources.exportSBOM({
     *     // Required. The name of the resource in the form of `projects/[PROJECT_ID]/resources/[RESOURCE_URL]`.
     *     name: 'projects/my-project/locations/my-location/resources/.*',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cloudStorageLocation": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "discoveryOccurrence": "my_discoveryOccurrence"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    exportSBOM(
      params: Params$Resource$Projects$Locations$Resources$Exportsbom,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exportSBOM(
      params?: Params$Resource$Projects$Locations$Resources$Exportsbom,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ExportSBOMResponse>>;
    exportSBOM(
      params: Params$Resource$Projects$Locations$Resources$Exportsbom,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exportSBOM(
      params: Params$Resource$Projects$Locations$Resources$Exportsbom,
      options: MethodOptions | BodyResponseCallback<Schema$ExportSBOMResponse>,
      callback: BodyResponseCallback<Schema$ExportSBOMResponse>
    ): void;
    exportSBOM(
      params: Params$Resource$Projects$Locations$Resources$Exportsbom,
      callback: BodyResponseCallback<Schema$ExportSBOMResponse>
    ): void;
    exportSBOM(callback: BodyResponseCallback<Schema$ExportSBOMResponse>): void;
    exportSBOM(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Resources$Exportsbom
        | BodyResponseCallback<Schema$ExportSBOMResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExportSBOMResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExportSBOMResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ExportSBOMResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Resources$Exportsbom;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Resources$Exportsbom;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:exportSBOM').replace(
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
        createAPIRequest<Schema$ExportSBOMResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExportSBOMResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Resources$Exportsbom
    extends StandardParameters {
    /**
     * Required. The name of the resource in the form of `projects/[PROJECT_ID]/resources/[RESOURCE_URL]`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExportSBOMRequest;
  }

  export class Resource$Projects$Notes {
    context: APIRequestContext;
    occurrences: Resource$Projects$Notes$Occurrences;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.occurrences = new Resource$Projects$Notes$Occurrences(this.context);
    }

    /**
     * Creates new notes in batch.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.notes.batchCreate({
     *     // Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the notes are to be created.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "notes": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "notes": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Notes$Batchcreate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchCreate(
      params?: Params$Resource$Projects$Notes$Batchcreate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchCreateNotesResponse>>;
    batchCreate(
      params: Params$Resource$Projects$Notes$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Notes$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchCreateNotesResponse>,
      callback: BodyResponseCallback<Schema$BatchCreateNotesResponse>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Notes$Batchcreate,
      callback: BodyResponseCallback<Schema$BatchCreateNotesResponse>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$BatchCreateNotesResponse>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Batchcreate
        | BodyResponseCallback<Schema$BatchCreateNotesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchCreateNotesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchCreateNotesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchCreateNotesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notes$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/notes:batchCreate').replace(
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
        createAPIRequest<Schema$BatchCreateNotesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchCreateNotesResponse>(parameters);
      }
    }

    /**
     * Creates a new note.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.notes.create({
     *     // Required. The ID to use for this note.
     *     noteId: 'placeholder-value',
     *     // Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the note is to be created.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attestation": {},
     *       //   "build": {},
     *       //   "compliance": {},
     *       //   "createTime": "my_createTime",
     *       //   "deployment": {},
     *       //   "discovery": {},
     *       //   "dsseAttestation": {},
     *       //   "expirationTime": "my_expirationTime",
     *       //   "image": {},
     *       //   "kind": "my_kind",
     *       //   "longDescription": "my_longDescription",
     *       //   "name": "my_name",
     *       //   "package": {},
     *       //   "relatedNoteNames": [],
     *       //   "relatedUrl": [],
     *       //   "sbomReference": {},
     *       //   "secret": {},
     *       //   "shortDescription": "my_shortDescription",
     *       //   "updateTime": "my_updateTime",
     *       //   "upgrade": {},
     *       //   "vulnerability": {},
     *       //   "vulnerabilityAssessment": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attestation": {},
     *   //   "build": {},
     *   //   "compliance": {},
     *   //   "createTime": "my_createTime",
     *   //   "deployment": {},
     *   //   "discovery": {},
     *   //   "dsseAttestation": {},
     *   //   "expirationTime": "my_expirationTime",
     *   //   "image": {},
     *   //   "kind": "my_kind",
     *   //   "longDescription": "my_longDescription",
     *   //   "name": "my_name",
     *   //   "package": {},
     *   //   "relatedNoteNames": [],
     *   //   "relatedUrl": [],
     *   //   "sbomReference": {},
     *   //   "secret": {},
     *   //   "shortDescription": "my_shortDescription",
     *   //   "updateTime": "my_updateTime",
     *   //   "upgrade": {},
     *   //   "vulnerability": {},
     *   //   "vulnerabilityAssessment": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Notes$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Notes$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Note>>;
    create(
      params: Params$Resource$Projects$Notes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Notes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    create(
      params: Params$Resource$Projects$Notes$Create,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    create(callback: BodyResponseCallback<Schema$Note>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Create
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Note>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/notes').replace(
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
        createAPIRequest<Schema$Note>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }

    /**
     * Deletes the specified note.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.notes.delete({
     *     // Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     *     name: 'projects/my-project/notes/my-note',
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
      params: Params$Resource$Projects$Notes$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Notes$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Notes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Notes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Notes$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Delete
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
        {}) as Params$Resource$Projects$Notes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
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
     * Gets the specified note.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.notes.get({
     *     // Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     *     name: 'projects/my-project/notes/my-note',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attestation": {},
     *   //   "build": {},
     *   //   "compliance": {},
     *   //   "createTime": "my_createTime",
     *   //   "deployment": {},
     *   //   "discovery": {},
     *   //   "dsseAttestation": {},
     *   //   "expirationTime": "my_expirationTime",
     *   //   "image": {},
     *   //   "kind": "my_kind",
     *   //   "longDescription": "my_longDescription",
     *   //   "name": "my_name",
     *   //   "package": {},
     *   //   "relatedNoteNames": [],
     *   //   "relatedUrl": [],
     *   //   "sbomReference": {},
     *   //   "secret": {},
     *   //   "shortDescription": "my_shortDescription",
     *   //   "updateTime": "my_updateTime",
     *   //   "upgrade": {},
     *   //   "vulnerability": {},
     *   //   "vulnerabilityAssessment": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Notes$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Notes$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Note>>;
    get(
      params: Params$Resource$Projects$Notes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Notes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    get(
      params: Params$Resource$Projects$Notes$Get,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    get(callback: BodyResponseCallback<Schema$Note>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Get
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Note>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
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
        createAPIRequest<Schema$Note>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }

    /**
     * Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.notes.getIamPolicy({
     *     // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/notes/my-note',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "options": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
      params: Params$Resource$Projects$Notes$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Projects$Notes$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    getIamPolicy(
      params: Params$Resource$Projects$Notes$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Notes$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Notes$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Getiampolicy
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
        {}) as Params$Resource$Projects$Notes$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
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
     * Lists notes for the specified project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.notes.list({
     *     // The filter expression.
     *     filter: 'placeholder-value',
     *     // Number of notes to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
     *     pageSize: 'placeholder-value',
     *     // Token to provide to skip to a particular spot in the list.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the project to list notes for in the form of `projects/[PROJECT_ID]`.
     *     parent: 'projects/my-project',
     *     // If set, the request will return all reachable Notes and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     *     returnPartialSuccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "notes": [],
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
      params: Params$Resource$Projects$Notes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Notes$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListNotesResponse>>;
    list(
      params: Params$Resource$Projects$Notes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Notes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListNotesResponse>,
      callback: BodyResponseCallback<Schema$ListNotesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Notes$List,
      callback: BodyResponseCallback<Schema$ListNotesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListNotesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$List
        | BodyResponseCallback<Schema$ListNotesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNotesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNotesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListNotesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/notes').replace(
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
        createAPIRequest<Schema$ListNotesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNotesResponse>(parameters);
      }
    }

    /**
     * Updates the specified note.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.notes.patch({
     *     // Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     *     name: 'projects/my-project/notes/my-note',
     *     // The fields to update.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attestation": {},
     *       //   "build": {},
     *       //   "compliance": {},
     *       //   "createTime": "my_createTime",
     *       //   "deployment": {},
     *       //   "discovery": {},
     *       //   "dsseAttestation": {},
     *       //   "expirationTime": "my_expirationTime",
     *       //   "image": {},
     *       //   "kind": "my_kind",
     *       //   "longDescription": "my_longDescription",
     *       //   "name": "my_name",
     *       //   "package": {},
     *       //   "relatedNoteNames": [],
     *       //   "relatedUrl": [],
     *       //   "sbomReference": {},
     *       //   "secret": {},
     *       //   "shortDescription": "my_shortDescription",
     *       //   "updateTime": "my_updateTime",
     *       //   "upgrade": {},
     *       //   "vulnerability": {},
     *       //   "vulnerabilityAssessment": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attestation": {},
     *   //   "build": {},
     *   //   "compliance": {},
     *   //   "createTime": "my_createTime",
     *   //   "deployment": {},
     *   //   "discovery": {},
     *   //   "dsseAttestation": {},
     *   //   "expirationTime": "my_expirationTime",
     *   //   "image": {},
     *   //   "kind": "my_kind",
     *   //   "longDescription": "my_longDescription",
     *   //   "name": "my_name",
     *   //   "package": {},
     *   //   "relatedNoteNames": [],
     *   //   "relatedUrl": [],
     *   //   "sbomReference": {},
     *   //   "secret": {},
     *   //   "shortDescription": "my_shortDescription",
     *   //   "updateTime": "my_updateTime",
     *   //   "upgrade": {},
     *   //   "vulnerability": {},
     *   //   "vulnerabilityAssessment": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Notes$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Notes$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Note>>;
    patch(
      params: Params$Resource$Projects$Notes$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Notes$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    patch(
      params: Params$Resource$Projects$Notes$Patch,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Note>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Patch
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Note>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
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
        createAPIRequest<Schema$Note>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.notes.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/notes/my-note',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
      params: Params$Resource$Projects$Notes$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Projects$Notes$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    setIamPolicy(
      params: Params$Resource$Projects$Notes$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Notes$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Notes$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Setiampolicy
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
        {}) as Params$Resource$Projects$Notes$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
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
     * Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.notes.testIamPermissions({
     *     // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/notes/my-note',
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
      params: Params$Resource$Projects$Notes$Testiampermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    testIamPermissions(
      params?: Params$Resource$Projects$Notes$Testiampermissions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>;
    testIamPermissions(
      params: Params$Resource$Projects$Notes$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Notes$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Notes$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Testiampermissions
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
        {}) as Params$Resource$Projects$Notes$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
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

  export interface Params$Resource$Projects$Notes$Batchcreate
    extends StandardParameters {
    /**
     * Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the notes are to be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchCreateNotesRequest;
  }
  export interface Params$Resource$Projects$Notes$Create
    extends StandardParameters {
    /**
     * Required. The ID to use for this note.
     */
    noteId?: string;
    /**
     * Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the note is to be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Note;
  }
  export interface Params$Resource$Projects$Notes$Delete
    extends StandardParameters {
    /**
     * Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Notes$Get
    extends StandardParameters {
    /**
     * Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Notes$Getiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Notes$List
    extends StandardParameters {
    /**
     * The filter expression.
     */
    filter?: string;
    /**
     * Number of notes to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
     */
    pageSize?: number;
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    pageToken?: string;
    /**
     * Required. The name of the project to list notes for in the form of `projects/[PROJECT_ID]`.
     */
    parent?: string;
    /**
     * If set, the request will return all reachable Notes and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     */
    returnPartialSuccess?: boolean;
  }
  export interface Params$Resource$Projects$Notes$Patch
    extends StandardParameters {
    /**
     * Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     */
    name?: string;
    /**
     * The fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Note;
  }
  export interface Params$Resource$Projects$Notes$Setiampolicy
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
  export interface Params$Resource$Projects$Notes$Testiampermissions
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

  export class Resource$Projects$Notes$Occurrences {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.notes.occurrences.list({
     *     // The filter expression.
     *     filter: 'placeholder-value',
     *     // Required. The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     *     name: 'projects/my-project/notes/my-note',
     *     // Number of occurrences to return in the list.
     *     pageSize: 'placeholder-value',
     *     // Token to provide to skip to a particular spot in the list.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "occurrences": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Notes$Occurrences$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Notes$Occurrences$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListNoteOccurrencesResponse>>;
    list(
      params: Params$Resource$Projects$Notes$Occurrences$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Notes$Occurrences$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNoteOccurrencesResponse>,
      callback: BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Notes$Occurrences$List,
      callback: BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Notes$Occurrences$List
        | BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNoteOccurrencesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListNoteOccurrencesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Notes$Occurrences$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notes$Occurrences$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/occurrences').replace(
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
        createAPIRequest<Schema$ListNoteOccurrencesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNoteOccurrencesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Notes$Occurrences$List
    extends StandardParameters {
    /**
     * The filter expression.
     */
    filter?: string;
    /**
     * Required. The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
     */
    name?: string;
    /**
     * Number of occurrences to return in the list.
     */
    pageSize?: number;
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Occurrences {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates new occurrences in batch.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.occurrences.batchCreate({
     *     // Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrences are to be created.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "occurrences": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "occurrences": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Occurrences$Batchcreate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchCreate(
      params?: Params$Resource$Projects$Occurrences$Batchcreate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchCreateOccurrencesResponse>>;
    batchCreate(
      params: Params$Resource$Projects$Occurrences$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Occurrences$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>,
      callback: BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Occurrences$Batchcreate,
      callback: BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Batchcreate
        | BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchCreateOccurrencesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchCreateOccurrencesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/occurrences:batchCreate').replace(
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
        createAPIRequest<Schema$BatchCreateOccurrencesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchCreateOccurrencesResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a new occurrence.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.occurrences.create({
     *     // Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrence is to be created.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attestation": {},
     *       //   "build": {},
     *       //   "compliance": {},
     *       //   "createTime": "my_createTime",
     *       //   "deployment": {},
     *       //   "discovery": {},
     *       //   "dsseAttestation": {},
     *       //   "envelope": {},
     *       //   "image": {},
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "noteName": "my_noteName",
     *       //   "package": {},
     *       //   "remediation": "my_remediation",
     *       //   "resourceUri": "my_resourceUri",
     *       //   "sbomReference": {},
     *       //   "secret": {},
     *       //   "updateTime": "my_updateTime",
     *       //   "upgrade": {},
     *       //   "vulnerability": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attestation": {},
     *   //   "build": {},
     *   //   "compliance": {},
     *   //   "createTime": "my_createTime",
     *   //   "deployment": {},
     *   //   "discovery": {},
     *   //   "dsseAttestation": {},
     *   //   "envelope": {},
     *   //   "image": {},
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "noteName": "my_noteName",
     *   //   "package": {},
     *   //   "remediation": "my_remediation",
     *   //   "resourceUri": "my_resourceUri",
     *   //   "sbomReference": {},
     *   //   "secret": {},
     *   //   "updateTime": "my_updateTime",
     *   //   "upgrade": {},
     *   //   "vulnerability": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Occurrences$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Occurrences$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Occurrence>>;
    create(
      params: Params$Resource$Projects$Occurrences$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Occurrences$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Occurrence>,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    create(
      params: Params$Resource$Projects$Occurrences$Create,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    create(callback: BodyResponseCallback<Schema$Occurrence>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Create
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Occurrence>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/occurrences').replace(
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
        createAPIRequest<Schema$Occurrence>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Occurrence>(parameters);
      }
    }

    /**
     * Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.occurrences.delete({
     *     // Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     *     name: 'projects/my-project/occurrences/my-occurrence',
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
      params: Params$Resource$Projects$Occurrences$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Occurrences$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Occurrences$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Occurrences$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Occurrences$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Delete
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
        {}) as Params$Resource$Projects$Occurrences$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
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
     * Gets the specified occurrence.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.occurrences.get({
     *     // Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     *     name: 'projects/my-project/occurrences/my-occurrence',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attestation": {},
     *   //   "build": {},
     *   //   "compliance": {},
     *   //   "createTime": "my_createTime",
     *   //   "deployment": {},
     *   //   "discovery": {},
     *   //   "dsseAttestation": {},
     *   //   "envelope": {},
     *   //   "image": {},
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "noteName": "my_noteName",
     *   //   "package": {},
     *   //   "remediation": "my_remediation",
     *   //   "resourceUri": "my_resourceUri",
     *   //   "sbomReference": {},
     *   //   "secret": {},
     *   //   "updateTime": "my_updateTime",
     *   //   "upgrade": {},
     *   //   "vulnerability": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Occurrences$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Occurrences$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Occurrence>>;
    get(
      params: Params$Resource$Projects$Occurrences$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Occurrences$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Occurrence>,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    get(
      params: Params$Resource$Projects$Occurrences$Get,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    get(callback: BodyResponseCallback<Schema$Occurrence>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Get
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Occurrence>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
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
        createAPIRequest<Schema$Occurrence>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Occurrence>(parameters);
      }
    }

    /**
     * Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.occurrences.getIamPolicy({
     *     // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/occurrences/my-occurrence',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "options": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
      params: Params$Resource$Projects$Occurrences$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Projects$Occurrences$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    getIamPolicy(
      params: Params$Resource$Projects$Occurrences$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Occurrences$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Occurrences$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Getiampolicy
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
        {}) as Params$Resource$Projects$Occurrences$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
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
     * Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.occurrences.getNotes({
     *     // Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     *     name: 'projects/my-project/occurrences/my-occurrence',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attestation": {},
     *   //   "build": {},
     *   //   "compliance": {},
     *   //   "createTime": "my_createTime",
     *   //   "deployment": {},
     *   //   "discovery": {},
     *   //   "dsseAttestation": {},
     *   //   "expirationTime": "my_expirationTime",
     *   //   "image": {},
     *   //   "kind": "my_kind",
     *   //   "longDescription": "my_longDescription",
     *   //   "name": "my_name",
     *   //   "package": {},
     *   //   "relatedNoteNames": [],
     *   //   "relatedUrl": [],
     *   //   "sbomReference": {},
     *   //   "secret": {},
     *   //   "shortDescription": "my_shortDescription",
     *   //   "updateTime": "my_updateTime",
     *   //   "upgrade": {},
     *   //   "vulnerability": {},
     *   //   "vulnerabilityAssessment": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getNotes(
      params: Params$Resource$Projects$Occurrences$Getnotes,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getNotes(
      params?: Params$Resource$Projects$Occurrences$Getnotes,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Note>>;
    getNotes(
      params: Params$Resource$Projects$Occurrences$Getnotes,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getNotes(
      params: Params$Resource$Projects$Occurrences$Getnotes,
      options: MethodOptions | BodyResponseCallback<Schema$Note>,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    getNotes(
      params: Params$Resource$Projects$Occurrences$Getnotes,
      callback: BodyResponseCallback<Schema$Note>
    ): void;
    getNotes(callback: BodyResponseCallback<Schema$Note>): void;
    getNotes(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Getnotes
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Note>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Note>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$Getnotes;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Getnotes;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/notes').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Note>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }

    /**
     * Gets a summary of the number and severity of occurrences.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await containeranalysis.projects.occurrences.getVulnerabilitySummary({
     *       // The filter expression.
     *       filter: 'placeholder-value',
     *       // Required. The name of the project to get a vulnerability summary for in the form of `projects/[PROJECT_ID]`.
     *       parent: 'projects/my-project',
     *       // If set, the request will return all reachable occurrence summaries and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     *       returnPartialSuccess: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "counts": [],
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
    getVulnerabilitySummary(
      params: Params$Resource$Projects$Occurrences$Getvulnerabilitysummary,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getVulnerabilitySummary(
      params?: Params$Resource$Projects$Occurrences$Getvulnerabilitysummary,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$VulnerabilityOccurrencesSummary>>;
    getVulnerabilitySummary(
      params: Params$Resource$Projects$Occurrences$Getvulnerabilitysummary,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getVulnerabilitySummary(
      params: Params$Resource$Projects$Occurrences$Getvulnerabilitysummary,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>,
      callback: BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>
    ): void;
    getVulnerabilitySummary(
      params: Params$Resource$Projects$Occurrences$Getvulnerabilitysummary,
      callback: BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>
    ): void;
    getVulnerabilitySummary(
      callback: BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>
    ): void;
    getVulnerabilitySummary(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Getvulnerabilitysummary
        | BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VulnerabilityOccurrencesSummary>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$VulnerabilityOccurrencesSummary>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$Getvulnerabilitysummary;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Occurrences$Getvulnerabilitysummary;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/occurrences:vulnerabilitySummary'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$VulnerabilityOccurrencesSummary>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VulnerabilityOccurrencesSummary>(
          parameters
        );
      }
    }

    /**
     * Lists occurrences for the specified project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.occurrences.list({
     *     // The filter expression.
     *     filter: 'placeholder-value',
     *     // Number of occurrences to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
     *     pageSize: 'placeholder-value',
     *     // Token to provide to skip to a particular spot in the list.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`.
     *     parent: 'projects/my-project',
     *     // If set, the request will return all reachable Occurrences and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     *     returnPartialSuccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "occurrences": [],
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
      params: Params$Resource$Projects$Occurrences$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Occurrences$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListOccurrencesResponse>>;
    list(
      params: Params$Resource$Projects$Occurrences$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Occurrences$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOccurrencesResponse>,
      callback: BodyResponseCallback<Schema$ListOccurrencesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Occurrences$List,
      callback: BodyResponseCallback<Schema$ListOccurrencesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOccurrencesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$List
        | BodyResponseCallback<Schema$ListOccurrencesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOccurrencesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOccurrencesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListOccurrencesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/occurrences').replace(
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
        createAPIRequest<Schema$ListOccurrencesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOccurrencesResponse>(parameters);
      }
    }

    /**
     * Updates the specified occurrence.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.occurrences.patch({
     *     // Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     *     name: 'projects/my-project/occurrences/my-occurrence',
     *     // The fields to update.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attestation": {},
     *       //   "build": {},
     *       //   "compliance": {},
     *       //   "createTime": "my_createTime",
     *       //   "deployment": {},
     *       //   "discovery": {},
     *       //   "dsseAttestation": {},
     *       //   "envelope": {},
     *       //   "image": {},
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "noteName": "my_noteName",
     *       //   "package": {},
     *       //   "remediation": "my_remediation",
     *       //   "resourceUri": "my_resourceUri",
     *       //   "sbomReference": {},
     *       //   "secret": {},
     *       //   "updateTime": "my_updateTime",
     *       //   "upgrade": {},
     *       //   "vulnerability": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attestation": {},
     *   //   "build": {},
     *   //   "compliance": {},
     *   //   "createTime": "my_createTime",
     *   //   "deployment": {},
     *   //   "discovery": {},
     *   //   "dsseAttestation": {},
     *   //   "envelope": {},
     *   //   "image": {},
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "noteName": "my_noteName",
     *   //   "package": {},
     *   //   "remediation": "my_remediation",
     *   //   "resourceUri": "my_resourceUri",
     *   //   "sbomReference": {},
     *   //   "secret": {},
     *   //   "updateTime": "my_updateTime",
     *   //   "upgrade": {},
     *   //   "vulnerability": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Occurrences$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Occurrences$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Occurrence>>;
    patch(
      params: Params$Resource$Projects$Occurrences$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Occurrences$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Occurrence>,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    patch(
      params: Params$Resource$Projects$Occurrences$Patch,
      callback: BodyResponseCallback<Schema$Occurrence>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Occurrence>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Patch
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Occurrence>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Occurrence>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Occurrences$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
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
        createAPIRequest<Schema$Occurrence>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Occurrence>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.occurrences.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/occurrences/my-occurrence',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
      params: Params$Resource$Projects$Occurrences$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Projects$Occurrences$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    setIamPolicy(
      params: Params$Resource$Projects$Occurrences$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Occurrences$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Occurrences$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Setiampolicy
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
        {}) as Params$Resource$Projects$Occurrences$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
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
     * Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.occurrences.testIamPermissions({
     *     // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/occurrences/my-occurrence',
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
      params: Params$Resource$Projects$Occurrences$Testiampermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    testIamPermissions(
      params?: Params$Resource$Projects$Occurrences$Testiampermissions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>;
    testIamPermissions(
      params: Params$Resource$Projects$Occurrences$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Occurrences$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Occurrences$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Occurrences$Testiampermissions
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
        {}) as Params$Resource$Projects$Occurrences$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Occurrences$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
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

  export interface Params$Resource$Projects$Occurrences$Batchcreate
    extends StandardParameters {
    /**
     * Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrences are to be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchCreateOccurrencesRequest;
  }
  export interface Params$Resource$Projects$Occurrences$Create
    extends StandardParameters {
    /**
     * Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrence is to be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Occurrence;
  }
  export interface Params$Resource$Projects$Occurrences$Delete
    extends StandardParameters {
    /**
     * Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Occurrences$Get
    extends StandardParameters {
    /**
     * Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Occurrences$Getiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Occurrences$Getnotes
    extends StandardParameters {
    /**
     * Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Occurrences$Getvulnerabilitysummary
    extends StandardParameters {
    /**
     * The filter expression.
     */
    filter?: string;
    /**
     * Required. The name of the project to get a vulnerability summary for in the form of `projects/[PROJECT_ID]`.
     */
    parent?: string;
    /**
     * If set, the request will return all reachable occurrence summaries and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     */
    returnPartialSuccess?: boolean;
  }
  export interface Params$Resource$Projects$Occurrences$List
    extends StandardParameters {
    /**
     * The filter expression.
     */
    filter?: string;
    /**
     * Number of occurrences to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
     */
    pageSize?: number;
    /**
     * Token to provide to skip to a particular spot in the list.
     */
    pageToken?: string;
    /**
     * Required. The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`.
     */
    parent?: string;
    /**
     * If set, the request will return all reachable Occurrences and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region.
     */
    returnPartialSuccess?: boolean;
  }
  export interface Params$Resource$Projects$Occurrences$Patch
    extends StandardParameters {
    /**
     * Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     */
    name?: string;
    /**
     * The fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Occurrence;
  }
  export interface Params$Resource$Projects$Occurrences$Setiampolicy
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
  export interface Params$Resource$Projects$Occurrences$Testiampermissions
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

  export class Resource$Projects$Resources {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Generates an SBOM for the given resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/containeranalysis.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const containeranalysis = google.containeranalysis('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await containeranalysis.projects.resources.exportSBOM({
     *     // Required. The name of the resource in the form of `projects/[PROJECT_ID]/resources/[RESOURCE_URL]`.
     *     name: 'projects/my-project/resources/.*',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cloudStorageLocation": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "discoveryOccurrence": "my_discoveryOccurrence"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    exportSBOM(
      params: Params$Resource$Projects$Resources$Exportsbom,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exportSBOM(
      params?: Params$Resource$Projects$Resources$Exportsbom,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ExportSBOMResponse>>;
    exportSBOM(
      params: Params$Resource$Projects$Resources$Exportsbom,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exportSBOM(
      params: Params$Resource$Projects$Resources$Exportsbom,
      options: MethodOptions | BodyResponseCallback<Schema$ExportSBOMResponse>,
      callback: BodyResponseCallback<Schema$ExportSBOMResponse>
    ): void;
    exportSBOM(
      params: Params$Resource$Projects$Resources$Exportsbom,
      callback: BodyResponseCallback<Schema$ExportSBOMResponse>
    ): void;
    exportSBOM(callback: BodyResponseCallback<Schema$ExportSBOMResponse>): void;
    exportSBOM(
      paramsOrCallback?:
        | Params$Resource$Projects$Resources$Exportsbom
        | BodyResponseCallback<Schema$ExportSBOMResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExportSBOMResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExportSBOMResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ExportSBOMResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Resources$Exportsbom;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Resources$Exportsbom;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://containeranalysis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:exportSBOM').replace(
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
        createAPIRequest<Schema$ExportSBOMResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExportSBOMResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Resources$Exportsbom
    extends StandardParameters {
    /**
     * Required. The name of the resource in the form of `projects/[PROJECT_ID]/resources/[RESOURCE_URL]`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExportSBOMRequest;
  }
}
