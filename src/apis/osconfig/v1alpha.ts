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

export namespace osconfig_v1alpha {
  export interface Options extends GlobalOptions {
    version: 'v1alpha';
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
   * OS Config API
   *
   * OS management tools that can be used for patch management, patch compliance, and configuration management on VM instances.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const osconfig = google.osconfig('v1alpha');
   * ```
   */
  export class Osconfig {
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
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document
   */
  export interface Schema$CVSSv3 {
    /**
     * This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability.
     */
    attackComplexity?: string | null;
    /**
     * This metric reflects the context by which vulnerability exploitation is possible.
     */
    attackVector?: string | null;
    /**
     * This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability.
     */
    availabilityImpact?: string | null;
    /**
     * The base score is a function of the base metric scores. https://www.first.org/cvss/specification-document#Base-Metrics
     */
    baseScore?: number | null;
    /**
     * This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability.
     */
    confidentialityImpact?: string | null;
    /**
     * The Exploitability sub-score equation is derived from the Base Exploitability metrics. https://www.first.org/cvss/specification-document#2-1-Exploitability-Metrics
     */
    exploitabilityScore?: number | null;
    /**
     * The Impact sub-score equation is derived from the Base Impact metrics.
     */
    impactScore?: number | null;
    /**
     * This metric measures the impact to integrity of a successfully exploited vulnerability.
     */
    integrityImpact?: string | null;
    /**
     * This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability.
     */
    privilegesRequired?: string | null;
    /**
     * The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope.
     */
    scope?: string | null;
    /**
     * This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component.
     */
    userInteraction?: string | null;
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
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Message encapsulating a value that can be either absolute ("fixed") or relative ("percent") to a value.
   */
  export interface Schema$FixedOrPercent {
    /**
     * Specifies a fixed value.
     */
    fixed?: number | null;
    /**
     * Specifies the relative value defined as a percentage, which will be multiplied by a reference value.
     */
    percent?: number | null;
  }
  /**
   * OS policy assignment operation metadata provided by OS policy assignment API methods that return long running operations.
   */
  export interface Schema$GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadata {
    /**
     * The OS policy assignment API method.
     */
    apiMethod?: string | null;
    /**
     * Reference to the `OSPolicyAssignment` API resource. Format: `projects/{project_number\}/locations/{location\}/osPolicyAssignments/{os_policy_assignment_id@revision_id\}`
     */
    osPolicyAssignment?: string | null;
    /**
     * Rollout start time
     */
    rolloutStartTime?: string | null;
    /**
     * State of the rollout
     */
    rolloutState?: string | null;
    /**
     * Rollout update time
     */
    rolloutUpdateTime?: string | null;
  }
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$GoogleCloudOsconfigV2beta__OperationMetadata {
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
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
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
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$GoogleCloudOsconfigV2__OperationMetadata {
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
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
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
   * This API resource represents the OS policies compliance data for a Compute Engine virtual machine (VM) instance at a given point in time. A Compute Engine VM can have multiple OS policy assignments, and each assignment can have multiple OS policies. As a result, multiple OS policies could be applied to a single VM. You can use this API resource to determine both the compliance state of your VM as well as the compliance state of an individual OS policy. For more information, see [View compliance](https://cloud.google.com/compute/docs/os-configuration-management/view-compliance).
   */
  export interface Schema$InstanceOSPoliciesCompliance {
    /**
     * Output only. Detailed compliance state of the VM. This field is populated only when compliance state is `UNKNOWN`. It may contain one of the following values: * `no-compliance-data`: Compliance data is not available for this VM. * `no-agent-detected`: OS Config agent is not detected for this VM. * `config-not-supported-by-agent`: The version of the OS Config agent running on this VM does not support configuration management. * `inactive`: VM is not running. * `internal-service-errors`: There were internal service errors encountered while enforcing compliance. * `agent-errors`: OS config agent encountered errors while enforcing compliance.
     */
    detailedState?: string | null;
    /**
     * Output only. The reason for the `detailed_state` of the VM (if any).
     */
    detailedStateReason?: string | null;
    /**
     * Output only. The Compute Engine VM instance name.
     */
    instance?: string | null;
    /**
     * Output only. Timestamp of the last compliance check for the VM.
     */
    lastComplianceCheckTime?: string | null;
    /**
     * Output only. Unique identifier for the last compliance run. This id will be logged by the OS config agent during a compliance run and can be used for debugging and tracing purpose.
     */
    lastComplianceRunId?: string | null;
    /**
     * Output only. The `InstanceOSPoliciesCompliance` API resource name. Format: `projects/{project_number\}/locations/{location\}/instanceOSPoliciesCompliances/{instance_id\}`
     */
    name?: string | null;
    /**
     * Output only. Compliance data for each `OSPolicy` that is applied to the VM.
     */
    osPolicyCompliances?: Schema$InstanceOSPoliciesComplianceOSPolicyCompliance[];
    /**
     * Output only. Compliance state of the VM.
     */
    state?: string | null;
  }
  /**
   * Compliance data for an OS policy
   */
  export interface Schema$InstanceOSPoliciesComplianceOSPolicyCompliance {
    /**
     * Reference to the `OSPolicyAssignment` API resource that the `OSPolicy` belongs to. Format: `projects/{project_number\}/locations/{location\}/osPolicyAssignments/{os_policy_assignment_id@revision_id\}`
     */
    osPolicyAssignment?: string | null;
    /**
     * The OS policy id
     */
    osPolicyId?: string | null;
    /**
     * Compliance data for each `OSPolicyResource` that is applied to the VM.
     */
    osPolicyResourceCompliances?: Schema$OSPolicyResourceCompliance[];
    /**
     * Compliance state of the OS policy.
     */
    state?: string | null;
  }
  /**
   * This API resource represents the available inventory data for a Compute Engine virtual machine (VM) instance at a given point in time. You can use this API resource to determine the inventory data of your VM. For more information, see [Information provided by OS inventory management](https://cloud.google.com/compute/docs/instances/os-inventory-management#data-collected).
   */
  export interface Schema$Inventory {
    /**
     * Output only. Inventory items related to the VM keyed by an opaque unique identifier for each inventory item. The identifier is unique to each distinct and addressable inventory item and will change, when there is a new package version.
     */
    items?: {[key: string]: Schema$InventoryItem} | null;
    /**
     * Output only. The `Inventory` API resource name. Format: `projects/{project_number\}/locations/{location\}/instances/{instance_id\}/inventory`
     */
    name?: string | null;
    /**
     * Output only. Base level operating system information for the VM.
     */
    osInfo?: Schema$InventoryOsInfo;
    /**
     * Output only. Timestamp of the last reported inventory for the VM.
     */
    updateTime?: string | null;
  }
  /**
   * A single piece of inventory on a VM.
   */
  export interface Schema$InventoryItem {
    /**
     * Software package available to be installed on the VM instance.
     */
    availablePackage?: Schema$InventorySoftwarePackage;
    /**
     * When this inventory item was first detected.
     */
    createTime?: string | null;
    /**
     * Identifier for this item, unique across items for this VM.
     */
    id?: string | null;
    /**
     * Software package present on the VM instance.
     */
    installedPackage?: Schema$InventorySoftwarePackage;
    /**
     * The origin of this inventory item.
     */
    originType?: string | null;
    /**
     * The specific type of inventory, correlating to its specific details.
     */
    type?: string | null;
    /**
     * When this inventory item was last modified.
     */
    updateTime?: string | null;
  }
  /**
   * Operating system information for the VM.
   */
  export interface Schema$InventoryOsInfo {
    /**
     * The system architecture of the operating system.
     */
    architecture?: string | null;
    /**
     * The VM hostname.
     */
    hostname?: string | null;
    /**
     * The kernel release of the operating system.
     */
    kernelRelease?: string | null;
    /**
     * The kernel version of the operating system.
     */
    kernelVersion?: string | null;
    /**
     * The operating system long name. For example 'Debian GNU/Linux 9' or 'Microsoft Window Server 2019 Datacenter'.
     */
    longName?: string | null;
    /**
     * The current version of the OS Config agent running on the VM.
     */
    osconfigAgentVersion?: string | null;
    /**
     * The operating system short name. For example, 'windows' or 'debian'.
     */
    shortName?: string | null;
    /**
     * The version of the operating system.
     */
    version?: string | null;
  }
  /**
   * Software package information of the operating system.
   */
  export interface Schema$InventorySoftwarePackage {
    /**
     * Details of an APT package. For details about the apt package manager, see https://wiki.debian.org/Apt.
     */
    aptPackage?: Schema$InventoryVersionedPackage;
    /**
     * Details of a COS package.
     */
    cosPackage?: Schema$InventoryVersionedPackage;
    /**
     * Details of a Googet package. For details about the googet package manager, see https://github.com/google/googet.
     */
    googetPackage?: Schema$InventoryVersionedPackage;
    /**
     * Details of a Windows Quick Fix engineering package. See https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering for info in Windows Quick Fix Engineering.
     */
    qfePackage?: Schema$InventoryWindowsQuickFixEngineeringPackage;
    /**
     * Details of Windows Application.
     */
    windowsApplication?: Schema$InventoryWindowsApplication;
    /**
     * Details of a Windows Update package. See https://docs.microsoft.com/en-us/windows/win32/api/_wua/ for information about Windows Update.
     */
    wuaPackage?: Schema$InventoryWindowsUpdatePackage;
    /**
     * Yum package info. For details about the yum package manager, see https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/deployment_guide/ch-yum.
     */
    yumPackage?: Schema$InventoryVersionedPackage;
    /**
     * Details of a Zypper package. For details about the Zypper package manager, see https://en.opensuse.org/SDB:Zypper_manual.
     */
    zypperPackage?: Schema$InventoryVersionedPackage;
    /**
     * Details of a Zypper patch. For details about the Zypper package manager, see https://en.opensuse.org/SDB:Zypper_manual.
     */
    zypperPatch?: Schema$InventoryZypperPatch;
  }
  /**
   * Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers.
   */
  export interface Schema$InventoryVersionedPackage {
    /**
     * The system architecture this package is intended for.
     */
    architecture?: string | null;
    /**
     * The name of the package.
     */
    packageName?: string | null;
    /**
     * The version of the package.
     */
    version?: string | null;
  }
  /**
   * Contains information about a Windows application that is retrieved from the Windows Registry. For more information about these fields, see: https://docs.microsoft.com/en-us/windows/win32/msi/uninstall-registry-key
   */
  export interface Schema$InventoryWindowsApplication {
    /**
     * The name of the application or product.
     */
    displayName?: string | null;
    /**
     * The version of the product or application in string format.
     */
    displayVersion?: string | null;
    /**
     * The internet address for technical support.
     */
    helpLink?: string | null;
    /**
     * The last time this product received service. The value of this property is replaced each time a patch is applied or removed from the product or the command-line option is used to repair the product.
     */
    installDate?: Schema$Date;
    /**
     * The name of the manufacturer for the product or application.
     */
    publisher?: string | null;
  }
  /**
   * Information related to a Quick Fix Engineering package. Fields are taken from Windows QuickFixEngineering Interface and match the source names: https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering
   */
  export interface Schema$InventoryWindowsQuickFixEngineeringPackage {
    /**
     * A short textual description of the QFE update.
     */
    caption?: string | null;
    /**
     * A textual description of the QFE update.
     */
    description?: string | null;
    /**
     * Unique identifier associated with a particular QFE update.
     */
    hotFixId?: string | null;
    /**
     * Date that the QFE update was installed. Mapped from installed_on field.
     */
    installTime?: string | null;
  }
  /**
   * Details related to a Windows Update package. Field data and names are taken from Windows Update API IUpdate Interface: https://docs.microsoft.com/en-us/windows/win32/api/_wua/ Descriptive fields like title, and description are localized based on the locale of the VM being updated.
   */
  export interface Schema$InventoryWindowsUpdatePackage {
    /**
     * The categories that are associated with this update package.
     */
    categories?: Schema$InventoryWindowsUpdatePackageWindowsUpdateCategory[];
    /**
     * The localized description of the update package.
     */
    description?: string | null;
    /**
     * A collection of Microsoft Knowledge Base article IDs that are associated with the update package.
     */
    kbArticleIds?: string[] | null;
    /**
     * The last published date of the update, in (UTC) date and time.
     */
    lastDeploymentChangeTime?: string | null;
    /**
     * A collection of URLs that provide more information about the update package.
     */
    moreInfoUrls?: string[] | null;
    /**
     * The revision number of this update package.
     */
    revisionNumber?: number | null;
    /**
     * A hyperlink to the language-specific support information for the update.
     */
    supportUrl?: string | null;
    /**
     * The localized title of the update package.
     */
    title?: string | null;
    /**
     * Gets the identifier of an update package. Stays the same across revisions.
     */
    updateId?: string | null;
  }
  /**
   * Categories specified by the Windows Update.
   */
  export interface Schema$InventoryWindowsUpdatePackageWindowsUpdateCategory {
    /**
     * The identifier of the windows update category.
     */
    id?: string | null;
    /**
     * The name of the windows update category.
     */
    name?: string | null;
  }
  /**
   * Details related to a Zypper Patch.
   */
  export interface Schema$InventoryZypperPatch {
    /**
     * The category of the patch.
     */
    category?: string | null;
    /**
     * The name of the patch.
     */
    patchName?: string | null;
    /**
     * The severity specified for this patch
     */
    severity?: string | null;
    /**
     * Any summary information provided about this patch.
     */
    summary?: string | null;
  }
  /**
   * A response message for listing OS policies compliance data for all Compute Engine VMs in the given location.
   */
  export interface Schema$ListInstanceOSPoliciesCompliancesResponse {
    /**
     * List of instance OS policies compliance objects.
     */
    instanceOsPoliciesCompliances?: Schema$InstanceOSPoliciesCompliance[];
    /**
     * The pagination token to retrieve the next page of instance OS policies compliance objects.
     */
    nextPageToken?: string | null;
  }
  /**
   * A response message for listing inventory data for all VMs in a specified location.
   */
  export interface Schema$ListInventoriesResponse {
    /**
     * List of inventory objects.
     */
    inventories?: Schema$Inventory[];
    /**
     * The pagination token to retrieve the next page of inventory objects.
     */
    nextPageToken?: string | null;
  }
  /**
   * A response message for listing OS Policy assignment reports including the page of results and page token.
   */
  export interface Schema$ListOSPolicyAssignmentReportsResponse {
    /**
     * The pagination token to retrieve the next page of OS policy assignment report objects.
     */
    nextPageToken?: string | null;
    /**
     * List of OS policy assignment reports.
     */
    osPolicyAssignmentReports?: Schema$OSPolicyAssignmentReport[];
  }
  /**
   * A response message for listing all revisions for a OS policy assignment.
   */
  export interface Schema$ListOSPolicyAssignmentRevisionsResponse {
    /**
     * The pagination token to retrieve the next page of OS policy assignment revisions.
     */
    nextPageToken?: string | null;
    /**
     * The OS policy assignment revisions
     */
    osPolicyAssignments?: Schema$OSPolicyAssignment[];
  }
  /**
   * A response message for listing all assignments under given parent.
   */
  export interface Schema$ListOSPolicyAssignmentsResponse {
    /**
     * The pagination token to retrieve the next page of OS policy assignments.
     */
    nextPageToken?: string | null;
    /**
     * The list of assignments
     */
    osPolicyAssignments?: Schema$OSPolicyAssignment[];
  }
  /**
   * A response message for listing vulnerability reports for all VM instances in the specified location.
   */
  export interface Schema$ListVulnerabilityReportsResponse {
    /**
     * The pagination token to retrieve the next page of vulnerabilityReports object.
     */
    nextPageToken?: string | null;
    /**
     * List of vulnerabilityReport objects.
     */
    vulnerabilityReports?: Schema$VulnerabilityReport[];
  }
  /**
   * This is proto2's version of MessageSet. DEPRECATED: DO NOT USE FOR NEW FIELDS. If you are using editions or proto2, please make your own extendable messages for your use case. If you are using proto3, please use `Any` instead. MessageSet was the implementation of extensions for proto1. When proto2 was introduced, extensions were implemented as a first-class feature. This schema for MessageSet was meant to be a "bridge" solution to migrate MessageSet-bearing messages from proto1 to proto2. This schema has been open-sourced only to facilitate the migration of Google products with MessageSet-bearing messages to open-source environments.
   */
  export interface Schema$MessageSet {}
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
   * An OS policy defines the desired state configuration for a VM.
   */
  export interface Schema$OSPolicy {
    /**
     * This flag determines the OS policy compliance status when none of the resource groups within the policy are applicable for a VM. Set this value to `true` if the policy needs to be reported as compliant even if the policy has nothing to validate or enforce.
     */
    allowNoResourceGroupMatch?: boolean | null;
    /**
     * Policy description. Length of the description is limited to 1024 characters.
     */
    description?: string | null;
    /**
     * Required. The id of the OS policy with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the assignment.
     */
    id?: string | null;
    /**
     * Required. Policy mode
     */
    mode?: string | null;
    /**
     * Required. List of resource groups for the policy. For a particular VM, resource groups are evaluated in the order specified and the first resource group that is applicable is selected and the rest are ignored. If none of the resource groups are applicable for a VM, the VM is considered to be non-compliant w.r.t this policy. This behavior can be toggled by the flag `allow_no_resource_group_match`
     */
    resourceGroups?: Schema$OSPolicyResourceGroup[];
  }
  /**
   * OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies).
   */
  export interface Schema$OSPolicyAssignment {
    /**
     * Output only. Indicates that this revision has been successfully rolled out in this zone and new VMs will be assigned OS policies from this revision. For a given OS policy assignment, there is only one revision with a value of `true` for this field.
     */
    baseline?: boolean | null;
    /**
     * Output only. Indicates that this revision deletes the OS policy assignment.
     */
    deleted?: boolean | null;
    /**
     * OS policy assignment description. Length of the description is limited to 1024 characters.
     */
    description?: string | null;
    /**
     * The etag for this OS policy assignment. If this is provided on update, it must match the server's etag.
     */
    etag?: string | null;
    /**
     * Required. Filter to select VMs.
     */
    instanceFilter?: Schema$OSPolicyAssignmentInstanceFilter;
    /**
     * Resource name. Format: `projects/{project_number\}/locations/{location\}/osPolicyAssignments/{os_policy_assignment_id\}` This field is ignored when you create an OS policy assignment.
     */
    name?: string | null;
    /**
     * Required. List of OS policies to be applied to the VMs.
     */
    osPolicies?: Schema$OSPolicy[];
    /**
     * Output only. Indicates that reconciliation is in progress for the revision. This value is `true` when the `rollout_state` is one of: * IN_PROGRESS * CANCELLING
     */
    reconciling?: boolean | null;
    /**
     * Output only. The timestamp that the revision was created.
     */
    revisionCreateTime?: string | null;
    /**
     * Output only. The assignment revision ID A new revision is committed whenever a rollout is triggered for a OS policy assignment
     */
    revisionId?: string | null;
    /**
     * Required. Rollout to deploy the OS policy assignment. A rollout is triggered in the following situations: 1) OSPolicyAssignment is created. 2) OSPolicyAssignment is updated and the update contains changes to one of the following fields: - instance_filter - os_policies 3) OSPolicyAssignment is deleted.
     */
    rollout?: Schema$OSPolicyAssignmentRollout;
    /**
     * Output only. OS policy assignment rollout state
     */
    rolloutState?: string | null;
    /**
     * Output only. Server generated unique id for the OS policy assignment resource.
     */
    uid?: string | null;
  }
  /**
   * Filters to select target VMs for an assignment. If more than one filter criteria is specified below, a VM will be selected if and only if it satisfies all of them.
   */
  export interface Schema$OSPolicyAssignmentInstanceFilter {
    /**
     * Target all VMs in the project. If true, no other criteria is permitted.
     */
    all?: boolean | null;
    /**
     * List of label sets used for VM exclusion. If the list has more than one label set, the VM is excluded if any of the label sets are applicable for the VM.
     */
    exclusionLabels?: Schema$OSPolicyAssignmentLabelSet[];
    /**
     * List of label sets used for VM inclusion. If the list has more than one `LabelSet`, the VM is included if any of the label sets are applicable for the VM.
     */
    inclusionLabels?: Schema$OSPolicyAssignmentLabelSet[];
    /**
     * List of inventories to select VMs. A VM is selected if its inventory data matches at least one of the following inventories.
     */
    inventories?: Schema$OSPolicyAssignmentInstanceFilterInventory[];
    /**
     * Deprecated. Use the `inventories` field instead. A VM is selected if it's OS short name matches with any of the values provided in this list.
     */
    osShortNames?: string[] | null;
  }
  /**
   * VM inventory details.
   */
  export interface Schema$OSPolicyAssignmentInstanceFilterInventory {
    /**
     * Required. The OS short name
     */
    osShortName?: string | null;
    /**
     * The OS version Prefix matches are supported if asterisk(*) is provided as the last character. For example, to match all versions with a major version of `7`, specify the following value for this field `7.*` An empty string matches all OS versions.
     */
    osVersion?: string | null;
  }
  /**
   * Message representing label set. * A label is a key value pair set for a VM. * A LabelSet is a set of labels. * Labels within a LabelSet are ANDed. In other words, a LabelSet is applicable for a VM only if it matches all the labels in the LabelSet. * Example: A LabelSet with 2 labels: `env=prod` and `type=webserver` will only be applicable for those VMs with both labels present.
   */
  export interface Schema$OSPolicyAssignmentLabelSet {
    /**
     * Labels are identified by key/value pairs in this map. A VM should contain all the key/value pairs specified in this map to be selected.
     */
    labels?: {[key: string]: string} | null;
  }
  /**
   * OS policy assignment operation metadata provided by OS policy assignment API methods that return long running operations.
   */
  export interface Schema$OSPolicyAssignmentOperationMetadata {
    /**
     * The OS policy assignment API method.
     */
    apiMethod?: string | null;
    /**
     * Reference to the `OSPolicyAssignment` API resource. Format: `projects/{project_number\}/locations/{location\}/osPolicyAssignments/{os_policy_assignment_id@revision_id\}`
     */
    osPolicyAssignment?: string | null;
    /**
     * Rollout start time
     */
    rolloutStartTime?: string | null;
    /**
     * State of the rollout
     */
    rolloutState?: string | null;
    /**
     * Rollout update time
     */
    rolloutUpdateTime?: string | null;
  }
  /**
   * A report of the OS policy assignment status for a given instance.
   */
  export interface Schema$OSPolicyAssignmentReport {
    /**
     * The Compute Engine VM instance name.
     */
    instance?: string | null;
    /**
     * Unique identifier of the last attempted run to apply the OS policies associated with this assignment on the VM. This ID is logged by the OS Config agent while applying the OS policies associated with this assignment on the VM. NOTE: If the service is unable to successfully connect to the agent for this run, then this id will not be available in the agent logs.
     */
    lastRunId?: string | null;
    /**
     * The `OSPolicyAssignmentReport` API resource name. Format: `projects/{project_number\}/locations/{location\}/instances/{instance_id\}/osPolicyAssignments/{os_policy_assignment_id\}/report`
     */
    name?: string | null;
    /**
     * Reference to the `OSPolicyAssignment` API resource that the `OSPolicy` belongs to. Format: `projects/{project_number\}/locations/{location\}/osPolicyAssignments/{os_policy_assignment_id@revision_id\}`
     */
    osPolicyAssignment?: string | null;
    /**
     * Compliance data for each `OSPolicy` that is applied to the VM.
     */
    osPolicyCompliances?: Schema$OSPolicyAssignmentReportOSPolicyCompliance[];
    /**
     * Timestamp for when the report was last generated.
     */
    updateTime?: string | null;
  }
  /**
   * Compliance data for an OS policy
   */
  export interface Schema$OSPolicyAssignmentReportOSPolicyCompliance {
    /**
     * The compliance state of the OS policy.
     */
    complianceState?: string | null;
    /**
     * The reason for the OS policy to be in an unknown compliance state. This field is always populated when `compliance_state` is `UNKNOWN`. If populated, the field can contain one of the following values: * `vm-not-running`: The VM was not running. * `os-policies-not-supported-by-agent`: The version of the OS Config agent running on the VM does not support running OS policies. * `no-agent-detected`: The OS Config agent is not detected for the VM. * `resource-execution-errors`: The OS Config agent encountered errors while executing one or more resources in the policy. See `os_policy_resource_compliances` for details. * `task-timeout`: The task sent to the agent to apply the policy timed out. * `unexpected-agent-state`: The OS Config agent did not report the final status of the task that attempted to apply the policy. Instead, the agent unexpectedly started working on a different task. This mostly happens when the agent or VM unexpectedly restarts while applying OS policies. * `internal-service-errors`: Internal service errors were encountered while attempting to apply the policy. * `os-policy-execution-pending`: OS policy was assigned to the given VM, but was not executed yet. Typically this is a transient condition that will go away after the next policy execution cycle.
     */
    complianceStateReason?: string | null;
    /**
     * The OS policy id
     */
    osPolicyId?: string | null;
    /**
     * Compliance data for each resource within the policy that is applied to the VM.
     */
    osPolicyResourceCompliances?: Schema$OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceCompliance[];
  }
  /**
   * Compliance data for an OS policy resource.
   */
  export interface Schema$OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceCompliance {
    /**
     * The compliance state of the resource.
     */
    complianceState?: string | null;
    /**
     * A reason for the resource to be in the given compliance state. This field is always populated when `compliance_state` is `UNKNOWN`. The following values are supported when `compliance_state == UNKNOWN` * `execution-errors`: Errors were encountered by the agent while executing the resource and the compliance state couldn't be determined. * `execution-skipped-by-agent`: Resource execution was skipped by the agent because errors were encountered while executing prior resources in the OS policy. * `os-policy-execution-attempt-failed`: The execution of the OS policy containing this resource failed and the compliance state couldn't be determined. * `os-policy-execution-pending`: OS policy that owns this resource was assigned to the given VM, but was not executed yet.
     */
    complianceStateReason?: string | null;
    /**
     * Ordered list of configuration completed by the agent for the OS policy resource.
     */
    configSteps?: Schema$OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStep[];
    /**
     * ExecResource specific output.
     */
    execResourceOutput?: Schema$OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceExecResourceOutput;
    /**
     * The ID of the OS policy resource.
     */
    osPolicyResourceId?: string | null;
  }
  /**
   * ExecResource specific output.
   */
  export interface Schema$OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceExecResourceOutput {
    /**
     * Output from enforcement phase output file (if run). Output size is limited to 100K bytes.
     */
    enforcementOutput?: string | null;
  }
  /**
   * Step performed by the OS Config agent for configuring an `OSPolicy` resource to its desired state.
   */
  export interface Schema$OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStep {
    /**
     * An error message recorded during the execution of this step. Only populated if errors were encountered during this step execution.
     */
    errorMessage?: string | null;
    /**
     * Configuration step type.
     */
    type?: string | null;
  }
  /**
   * Message to configure the rollout at the zonal level for the OS policy assignment.
   */
  export interface Schema$OSPolicyAssignmentRollout {
    /**
     * Required. The maximum number (or percentage) of VMs per zone to disrupt at any given moment.
     */
    disruptionBudget?: Schema$FixedOrPercent;
    /**
     * Required. This determines the minimum duration of time to wait after the configuration changes are applied through the current rollout. A VM continues to count towards the `disruption_budget` at least until this duration of time has passed after configuration changes are applied.
     */
    minWaitDuration?: string | null;
  }
  /**
   * Filtering criteria to select VMs based on inventory details.
   */
  export interface Schema$OSPolicyInventoryFilter {
    /**
     * Required. The OS short name
     */
    osShortName?: string | null;
    /**
     * The OS version Prefix matches are supported if asterisk(*) is provided as the last character. For example, to match all versions with a major version of `7`, specify the following value for this field `7.*` An empty string matches all OS versions.
     */
    osVersion?: string | null;
  }
  /**
   * Filtering criteria to select VMs based on OS details.
   */
  export interface Schema$OSPolicyOSFilter {
    /**
     * This should match OS short name emitted by the OS inventory agent. An empty value matches any OS.
     */
    osShortName?: string | null;
    /**
     * This value should match the version emitted by the OS inventory agent. Prefix matches are supported if asterisk(*) is provided as the last character. For example, to match all versions with a major version of `7`, specify the following value for this field `7.*`
     */
    osVersion?: string | null;
  }
  /**
   * An OS policy resource is used to define the desired state configuration and provides a specific functionality like installing/removing packages, executing a script etc. The system ensures that resources are always in their desired state by taking necessary actions if they have drifted from their desired state.
   */
  export interface Schema$OSPolicyResource {
    /**
     * Exec resource
     */
    exec?: Schema$OSPolicyResourceExecResource;
    /**
     * File resource
     */
    file?: Schema$OSPolicyResourceFileResource;
    /**
     * Required. The id of the resource with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the OS policy.
     */
    id?: string | null;
    /**
     * Package resource
     */
    pkg?: Schema$OSPolicyResourcePackageResource;
    /**
     * Package repository resource
     */
    repository?: Schema$OSPolicyResourceRepositoryResource;
  }
  /**
   * Compliance data for an OS policy resource.
   */
  export interface Schema$OSPolicyResourceCompliance {
    /**
     * Ordered list of configuration steps taken by the agent for the OS policy resource.
     */
    configSteps?: Schema$OSPolicyResourceConfigStep[];
    /**
     * ExecResource specific output.
     */
    execResourceOutput?: Schema$OSPolicyResourceComplianceExecResourceOutput;
    /**
     * The id of the OS policy resource.
     */
    osPolicyResourceId?: string | null;
    /**
     * Compliance state of the OS policy resource.
     */
    state?: string | null;
  }
  /**
   * ExecResource specific output.
   */
  export interface Schema$OSPolicyResourceComplianceExecResourceOutput {
    /**
     * Output from Enforcement phase output file (if run). Output size is limited to 100K bytes.
     */
    enforcementOutput?: string | null;
  }
  /**
   * Step performed by the OS Config agent for configuring an `OSPolicyResource` to its desired state.
   */
  export interface Schema$OSPolicyResourceConfigStep {
    /**
     * An error message recorded during the execution of this step. Only populated when outcome is FAILED.
     */
    errorMessage?: string | null;
    /**
     * Outcome of the configuration step.
     */
    outcome?: string | null;
    /**
     * Configuration step type.
     */
    type?: string | null;
  }
  /**
   * A resource that allows executing scripts on the VM. The `ExecResource` has 2 stages: `validate` and `enforce` and both stages accept a script as an argument to execute. When the `ExecResource` is applied by the agent, it first executes the script in the `validate` stage. The `validate` stage can signal that the `ExecResource` is already in the desired state by returning an exit code of `100`. If the `ExecResource` is not in the desired state, it should return an exit code of `101`. Any other exit code returned by this stage is considered an error. If the `ExecResource` is not in the desired state based on the exit code from the `validate` stage, the agent proceeds to execute the script from the `enforce` stage. If the `ExecResource` is already in the desired state, the `enforce` stage will not be run. Similar to `validate` stage, the `enforce` stage should return an exit code of `100` to indicate that the resource in now in its desired state. Any other exit code is considered an error. NOTE: An exit code of `100` was chosen over `0` (and `101` vs `1`) to have an explicit indicator of `in desired state`, `not in desired state` and errors. Because, for example, Powershell will always return an exit code of `0` unless an `exit` statement is provided in the script. So, for reasons of consistency and being explicit, exit codes `100` and `101` were chosen.
   */
  export interface Schema$OSPolicyResourceExecResource {
    /**
     * What to run to bring this resource into the desired state. An exit code of 100 indicates "success", any other exit code indicates a failure running enforce.
     */
    enforce?: Schema$OSPolicyResourceExecResourceExec;
    /**
     * Required. What to run to validate this resource is in the desired state. An exit code of 100 indicates "in desired state", and exit code of 101 indicates "not in desired state". Any other exit code indicates a failure running validate.
     */
    validate?: Schema$OSPolicyResourceExecResourceExec;
  }
  /**
   * A file or script to execute.
   */
  export interface Schema$OSPolicyResourceExecResourceExec {
    /**
     * Optional arguments to pass to the source during execution.
     */
    args?: string[] | null;
    /**
     * A remote or local file.
     */
    file?: Schema$OSPolicyResourceFile;
    /**
     * Required. The script interpreter to use.
     */
    interpreter?: string | null;
    /**
     * Only recorded for enforce Exec. Path to an output file (that is created by this Exec) whose content will be recorded in OSPolicyResourceCompliance after a successful run. Absence or failure to read this file will result in this ExecResource being non-compliant. Output file size is limited to 100K bytes.
     */
    outputFilePath?: string | null;
    /**
     * An inline script. The size of the script is limited to 32KiB.
     */
    script?: string | null;
  }
  /**
   * A remote or local file.
   */
  export interface Schema$OSPolicyResourceFile {
    /**
     * Defaults to false. When false, files are subject to validations based on the file type: Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified.
     */
    allowInsecure?: boolean | null;
    /**
     * A Cloud Storage object.
     */
    gcs?: Schema$OSPolicyResourceFileGcs;
    /**
     * A local path within the VM to use.
     */
    localPath?: string | null;
    /**
     * A generic remote file.
     */
    remote?: Schema$OSPolicyResourceFileRemote;
  }
  /**
   * Specifies a file available as a Cloud Storage Object.
   */
  export interface Schema$OSPolicyResourceFileGcs {
    /**
     * Required. Bucket of the Cloud Storage object.
     */
    bucket?: string | null;
    /**
     * Generation number of the Cloud Storage object.
     */
    generation?: string | null;
    /**
     * Required. Name of the Cloud Storage object.
     */
    object?: string | null;
  }
  /**
   * Specifies a file available via some URI.
   */
  export interface Schema$OSPolicyResourceFileRemote {
    /**
     * SHA256 checksum of the remote file.
     */
    sha256Checksum?: string | null;
    /**
     * Required. URI from which to fetch the object. It should contain both the protocol and path following the format `{protocol\}://{location\}`.
     */
    uri?: string | null;
  }
  /**
   * A resource that manages the state of a file.
   */
  export interface Schema$OSPolicyResourceFileResource {
    /**
     * A a file with this content. The size of the content is limited to 32KiB.
     */
    content?: string | null;
    /**
     * A remote or local source.
     */
    file?: Schema$OSPolicyResourceFile;
    /**
     * Required. The absolute path of the file within the VM.
     */
    path?: string | null;
    /**
     * Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one bit corresponds to the execute permission. Default behavior is 755. Below are some examples of permissions and their associated values: read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4
     */
    permissions?: string | null;
    /**
     * Required. Desired state of the file.
     */
    state?: string | null;
  }
  /**
   * Resource groups provide a mechanism to group OS policy resources. Resource groups enable OS policy authors to create a single OS policy to be applied to VMs running different operating Systems. When the OS policy is applied to a target VM, the appropriate resource group within the OS policy is selected based on the `OSFilter` specified within the resource group.
   */
  export interface Schema$OSPolicyResourceGroup {
    /**
     * List of inventory filters for the resource group. The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters. For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory_filters[0].os_short_name='rhel' and inventory_filters[1].os_short_name='centos' If the list is empty, this resource group will be applied to the target VM unconditionally.
     */
    inventoryFilters?: Schema$OSPolicyInventoryFilter[];
    /**
     * Deprecated. Use the `inventory_filters` field instead. Used to specify the OS filter for a resource group
     */
    osFilter?: Schema$OSPolicyOSFilter;
    /**
     * Required. List of resources configured for this resource group. The resources are executed in the exact order specified here.
     */
    resources?: Schema$OSPolicyResource[];
  }
  /**
   * A resource that manages a system package.
   */
  export interface Schema$OSPolicyResourcePackageResource {
    /**
     * A package managed by Apt.
     */
    apt?: Schema$OSPolicyResourcePackageResourceAPT;
    /**
     * A deb package file.
     */
    deb?: Schema$OSPolicyResourcePackageResourceDeb;
    /**
     * Required. The desired state the agent should maintain for this package.
     */
    desiredState?: string | null;
    /**
     * A package managed by GooGet.
     */
    googet?: Schema$OSPolicyResourcePackageResourceGooGet;
    /**
     * An MSI package.
     */
    msi?: Schema$OSPolicyResourcePackageResourceMSI;
    /**
     * An rpm package file.
     */
    rpm?: Schema$OSPolicyResourcePackageResourceRPM;
    /**
     * A package managed by YUM.
     */
    yum?: Schema$OSPolicyResourcePackageResourceYUM;
    /**
     * A package managed by Zypper.
     */
    zypper?: Schema$OSPolicyResourcePackageResourceZypper;
  }
  /**
   * A package managed by APT. - install: `apt-get update && apt-get -y install [name]` - remove: `apt-get -y remove [name]`
   */
  export interface Schema$OSPolicyResourcePackageResourceAPT {
    /**
     * Required. Package name.
     */
    name?: string | null;
  }
  /**
   * A deb package file. dpkg packages only support INSTALLED state.
   */
  export interface Schema$OSPolicyResourcePackageResourceDeb {
    /**
     * Whether dependencies should also be installed. - install when false: `dpkg -i package` - install when true: `apt-get update && apt-get -y install package.deb`
     */
    pullDeps?: boolean | null;
    /**
     * Required. A deb package.
     */
    source?: Schema$OSPolicyResourceFile;
  }
  /**
   * A package managed by GooGet. - install: `googet -noconfirm install package` - remove: `googet -noconfirm remove package`
   */
  export interface Schema$OSPolicyResourcePackageResourceGooGet {
    /**
     * Required. Package name.
     */
    name?: string | null;
  }
  /**
   * An MSI package. MSI packages only support INSTALLED state.
   */
  export interface Schema$OSPolicyResourcePackageResourceMSI {
    /**
     * Additional properties to use during installation. This should be in the format of Property=Setting. Appended to the defaults of `ACTION=INSTALL REBOOT=ReallySuppress`.
     */
    properties?: string[] | null;
    /**
     * Required. The MSI package.
     */
    source?: Schema$OSPolicyResourceFile;
  }
  /**
   * An RPM package file. RPM packages only support INSTALLED state.
   */
  export interface Schema$OSPolicyResourcePackageResourceRPM {
    /**
     * Whether dependencies should also be installed. - install when false: `rpm --upgrade --replacepkgs package.rpm` - install when true: `yum -y install package.rpm` or `zypper -y install package.rpm`
     */
    pullDeps?: boolean | null;
    /**
     * Required. An rpm package.
     */
    source?: Schema$OSPolicyResourceFile;
  }
  /**
   * A package managed by YUM. - install: `yum -y install package` - remove: `yum -y remove package`
   */
  export interface Schema$OSPolicyResourcePackageResourceYUM {
    /**
     * Required. Package name.
     */
    name?: string | null;
  }
  /**
   * A package managed by Zypper. - install: `zypper -y install package` - remove: `zypper -y rm package`
   */
  export interface Schema$OSPolicyResourcePackageResourceZypper {
    /**
     * Required. Package name.
     */
    name?: string | null;
  }
  /**
   * A resource that manages a package repository.
   */
  export interface Schema$OSPolicyResourceRepositoryResource {
    /**
     * An Apt Repository.
     */
    apt?: Schema$OSPolicyResourceRepositoryResourceAptRepository;
    /**
     * A Goo Repository.
     */
    goo?: Schema$OSPolicyResourceRepositoryResourceGooRepository;
    /**
     * A Yum Repository.
     */
    yum?: Schema$OSPolicyResourceRepositoryResourceYumRepository;
    /**
     * A Zypper Repository.
     */
    zypper?: Schema$OSPolicyResourceRepositoryResourceZypperRepository;
  }
  /**
   * Represents a single apt package repository. These will be added to a repo file that will be managed at `/etc/apt/sources.list.d/google_osconfig.list`.
   */
  export interface Schema$OSPolicyResourceRepositoryResourceAptRepository {
    /**
     * Required. Type of archive files in this repository.
     */
    archiveType?: string | null;
    /**
     * Required. List of components for this repository. Must contain at least one item.
     */
    components?: string[] | null;
    /**
     * Required. Distribution of this repository.
     */
    distribution?: string | null;
    /**
     * URI of the key file for this repository. The agent maintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg`.
     */
    gpgKey?: string | null;
    /**
     * Required. URI for this repository.
     */
    uri?: string | null;
  }
  /**
   * Represents a Goo package repository. These are added to a repo file that is managed at `C:/ProgramData/GooGet/repos/google_osconfig.repo`.
   */
  export interface Schema$OSPolicyResourceRepositoryResourceGooRepository {
    /**
     * Required. The name of the repository.
     */
    name?: string | null;
    /**
     * Required. The url of the repository.
     */
    url?: string | null;
  }
  /**
   * Represents a single yum package repository. These are added to a repo file that is managed at `/etc/yum.repos.d/google_osconfig.repo`.
   */
  export interface Schema$OSPolicyResourceRepositoryResourceYumRepository {
    /**
     * Required. The location of the repository directory.
     */
    baseUrl?: string | null;
    /**
     * The display name of the repository.
     */
    displayName?: string | null;
    /**
     * URIs of GPG keys.
     */
    gpgKeys?: string[] | null;
    /**
     * Required. A one word, unique name for this repository. This is the `repo id` in the yum config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for resource conflicts.
     */
    id?: string | null;
  }
  /**
   * Represents a single zypper package repository. These are added to a repo file that is managed at `/etc/zypp/repos.d/google_osconfig.repo`.
   */
  export interface Schema$OSPolicyResourceRepositoryResourceZypperRepository {
    /**
     * Required. The location of the repository directory.
     */
    baseUrl?: string | null;
    /**
     * The display name of the repository.
     */
    displayName?: string | null;
    /**
     * URIs of GPG keys.
     */
    gpgKeys?: string[] | null;
    /**
     * Required. A one word, unique name for this repository. This is the `repo id` in the zypper config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for GuestPolicy conflicts.
     */
    id?: string | null;
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
   * Wire-format for a Status object
   */
  export interface Schema$StatusProto {
    /**
     * copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional int32 canonical_code = 6;
     */
    canonicalCode?: number | null;
    /**
     * Numeric code drawn from the space specified below. Often, this is the canonical error space, and code is drawn from google3/util/task/codes.proto copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional int32 code = 1;
     */
    code?: number | null;
    /**
     * Detail message copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional string message = 3;
     */
    message?: string | null;
    /**
     * message_set associates an arbitrary proto message with the status. copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional proto2.bridge.MessageSet message_set = 5;
     */
    messageSet?: Schema$MessageSet;
    /**
     * copybara:strip_begin(b/383363683) Space to which this status belongs copybara:strip_end_and_replace optional string space = 2; // Space to which this status belongs
     */
    space?: string | null;
  }
  /**
   * This API resource represents the vulnerability report for a specified Compute Engine virtual machine (VM) instance at a given point in time. For more information, see [Vulnerability reports](https://cloud.google.com/compute/docs/instances/os-inventory-management#vulnerability-reports).
   */
  export interface Schema$VulnerabilityReport {
    /**
     * Output only. The `vulnerabilityReport` API resource name. Format: `projects/{project_number\}/locations/{location\}/instances/{instance_id\}/vulnerabilityReport`
     */
    name?: string | null;
    /**
     * Output only. The timestamp for when the last vulnerability report was generated for the VM.
     */
    updateTime?: string | null;
    /**
     * Output only. List of vulnerabilities affecting the VM.
     */
    vulnerabilities?: Schema$VulnerabilityReportVulnerability[];
  }
  /**
   * A vulnerability affecting the VM instance.
   */
  export interface Schema$VulnerabilityReportVulnerability {
    /**
     * Corresponds to the `AVAILABLE_PACKAGE` inventory item on the VM. If the vulnerability report was not updated after the VM inventory update, these values might not display in VM inventory. If there is no available fix, the field is empty. The `inventory_item` value specifies the latest `SoftwarePackage` available to the VM that fixes the vulnerability.
     */
    availableInventoryItemIds?: string[] | null;
    /**
     * The timestamp for when the vulnerability was first detected.
     */
    createTime?: string | null;
    /**
     * Contains metadata as per the upstream feed of the operating system and NVD.
     */
    details?: Schema$VulnerabilityReportVulnerabilityDetails;
    /**
     * Corresponds to the `INSTALLED_PACKAGE` inventory item on the VM. This field displays the inventory items affected by this vulnerability. If the vulnerability report was not updated after the VM inventory update, these values might not display in VM inventory. For some distros, this field may be empty.
     */
    installedInventoryItemIds?: string[] | null;
    /**
     * List of items affected by the vulnerability.
     */
    items?: Schema$VulnerabilityReportVulnerabilityItem[];
    /**
     * The timestamp for when the vulnerability was last modified.
     */
    updateTime?: string | null;
  }
  /**
   * Contains metadata information for the vulnerability. This information is collected from the upstream feed of the operating system.
   */
  export interface Schema$VulnerabilityReportVulnerabilityDetails {
    /**
     * The CVE of the vulnerability. CVE cannot be empty and the combination of should be unique across vulnerabilities for a VM.
     */
    cve?: string | null;
    /**
     * The CVSS V2 score of this vulnerability. CVSS V2 score is on a scale of 0 - 10 where 0 indicates low severity and 10 indicates high severity.
     */
    cvssV2Score?: number | null;
    /**
     * The full description of the CVSSv3 for this vulnerability from NVD.
     */
    cvssV3?: Schema$CVSSv3;
    /**
     * The note or description describing the vulnerability from the distro.
     */
    description?: string | null;
    /**
     * Corresponds to the references attached to the `VulnerabilityDetails`.
     */
    references?: Schema$VulnerabilityReportVulnerabilityDetailsReference[];
    /**
     * Assigned severity/impact ranking from the distro.
     */
    severity?: string | null;
  }
  /**
   * A reference for this vulnerability.
   */
  export interface Schema$VulnerabilityReportVulnerabilityDetailsReference {
    /**
     * The source of the reference e.g. NVD.
     */
    source?: string | null;
    /**
     * The url of the reference.
     */
    url?: string | null;
  }
  /**
   * OS inventory item that is affected by a vulnerability or fixed as a result of a vulnerability.
   */
  export interface Schema$VulnerabilityReportVulnerabilityItem {
    /**
     * Corresponds to the `AVAILABLE_PACKAGE` inventory item on the VM. If the vulnerability report was not updated after the VM inventory update, these values might not display in VM inventory. If there is no available fix, the field is empty. The `inventory_item` value specifies the latest `SoftwarePackage` available to the VM that fixes the vulnerability.
     */
    availableInventoryItemId?: string | null;
    /**
     * The recommended [CPE URI](https://cpe.mitre.org/specification/) update that contains a fix for this vulnerability.
     */
    fixedCpeUri?: string | null;
    /**
     * Corresponds to the `INSTALLED_PACKAGE` inventory item on the VM. This field displays the inventory items affected by this vulnerability. If the vulnerability report was not updated after the VM inventory update, these values might not display in VM inventory. For some operating systems, this field might be empty.
     */
    installedInventoryItemId?: string | null;
    /**
     * The upstream OS patch, packages or KB that fixes the vulnerability.
     */
    upstreamFix?: string | null;
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
    instanceOSPoliciesCompliances: Resource$Projects$Locations$Instanceospoliciescompliances;
    instances: Resource$Projects$Locations$Instances;
    osPolicyAssignments: Resource$Projects$Locations$Ospolicyassignments;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.instanceOSPoliciesCompliances =
        new Resource$Projects$Locations$Instanceospoliciescompliances(
          this.context
        );
      this.instances = new Resource$Projects$Locations$Instances(this.context);
      this.osPolicyAssignments =
        new Resource$Projects$Locations$Ospolicyassignments(this.context);
    }
  }

  export class Resource$Projects$Locations$Instanceospoliciescompliances {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get OS policies compliance data for the specified Compute Engine VM instance.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await osconfig.projects.locations.instanceOSPoliciesCompliances.get({
     *       // Required. API resource name for instance OS policies compliance resource. Format: `projects/{project\}/locations/{location\}/instanceOSPoliciesCompliances/{instance\}` For `{project\}`, either Compute Engine project-number or project-id can be provided. For `{instance\}`, either Compute Engine VM instance-id or instance-name can be provided.
     *       name: 'projects/my-project/locations/my-location/instanceOSPoliciesCompliances/my-instanceOSPoliciesCompliance',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "detailedState": "my_detailedState",
     *   //   "detailedStateReason": "my_detailedStateReason",
     *   //   "instance": "my_instance",
     *   //   "lastComplianceCheckTime": "my_lastComplianceCheckTime",
     *   //   "lastComplianceRunId": "my_lastComplianceRunId",
     *   //   "name": "my_name",
     *   //   "osPolicyCompliances": [],
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
    get(
      params: Params$Resource$Projects$Locations$Instanceospoliciescompliances$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Instanceospoliciescompliances$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$InstanceOSPoliciesCompliance>>;
    get(
      params: Params$Resource$Projects$Locations$Instanceospoliciescompliances$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Instanceospoliciescompliances$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$InstanceOSPoliciesCompliance>,
      callback: BodyResponseCallback<Schema$InstanceOSPoliciesCompliance>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Instanceospoliciescompliances$Get,
      callback: BodyResponseCallback<Schema$InstanceOSPoliciesCompliance>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$InstanceOSPoliciesCompliance>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instanceospoliciescompliances$Get
        | BodyResponseCallback<Schema$InstanceOSPoliciesCompliance>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$InstanceOSPoliciesCompliance>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$InstanceOSPoliciesCompliance>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$InstanceOSPoliciesCompliance>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instanceospoliciescompliances$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instanceospoliciescompliances$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$InstanceOSPoliciesCompliance>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$InstanceOSPoliciesCompliance>(
          parameters
        );
      }
    }

    /**
     * List OS policies compliance data for all Compute Engine VM instances in the specified zone.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await osconfig.projects.locations.instanceOSPoliciesCompliances.list({
     *       // If provided, this field specifies the criteria that must be met by a `InstanceOSPoliciesCompliance` API resource to be included in the response.
     *       filter: 'placeholder-value',
     *       // The maximum number of results to return.
     *       pageSize: 'placeholder-value',
     *       // A pagination token returned from a previous call to `ListInstanceOSPoliciesCompliances` that indicates where this listing should continue from.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent resource name. Format: `projects/{project\}/locations/{location\}` For `{project\}`, either Compute Engine project-number or project-id can be provided.
     *       parent: 'projects/my-project/locations/my-location',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "instanceOsPoliciesCompliances": [],
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
      params: Params$Resource$Projects$Locations$Instanceospoliciescompliances$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Instanceospoliciescompliances$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListInstanceOSPoliciesCompliancesResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Instanceospoliciescompliances$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Instanceospoliciescompliances$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListInstanceOSPoliciesCompliancesResponse>,
      callback: BodyResponseCallback<Schema$ListInstanceOSPoliciesCompliancesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Instanceospoliciescompliances$List,
      callback: BodyResponseCallback<Schema$ListInstanceOSPoliciesCompliancesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListInstanceOSPoliciesCompliancesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instanceospoliciescompliances$List
        | BodyResponseCallback<Schema$ListInstanceOSPoliciesCompliancesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListInstanceOSPoliciesCompliancesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListInstanceOSPoliciesCompliancesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListInstanceOSPoliciesCompliancesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instanceospoliciescompliances$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instanceospoliciescompliances$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha/{+parent}/instanceOSPoliciesCompliances'
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
        createAPIRequest<Schema$ListInstanceOSPoliciesCompliancesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListInstanceOSPoliciesCompliancesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Instanceospoliciescompliances$Get
    extends StandardParameters {
    /**
     * Required. API resource name for instance OS policies compliance resource. Format: `projects/{project\}/locations/{location\}/instanceOSPoliciesCompliances/{instance\}` For `{project\}`, either Compute Engine project-number or project-id can be provided. For `{instance\}`, either Compute Engine VM instance-id or instance-name can be provided.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Instanceospoliciescompliances$List
    extends StandardParameters {
    /**
     * If provided, this field specifies the criteria that must be met by a `InstanceOSPoliciesCompliance` API resource to be included in the response.
     */
    filter?: string;
    /**
     * The maximum number of results to return.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to `ListInstanceOSPoliciesCompliances` that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name. Format: `projects/{project\}/locations/{location\}` For `{project\}`, either Compute Engine project-number or project-id can be provided.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Instances {
    context: APIRequestContext;
    inventories: Resource$Projects$Locations$Instances$Inventories;
    osPolicyAssignments: Resource$Projects$Locations$Instances$Ospolicyassignments;
    vulnerabilityReports: Resource$Projects$Locations$Instances$Vulnerabilityreports;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.inventories = new Resource$Projects$Locations$Instances$Inventories(
        this.context
      );
      this.osPolicyAssignments =
        new Resource$Projects$Locations$Instances$Ospolicyassignments(
          this.context
        );
      this.vulnerabilityReports =
        new Resource$Projects$Locations$Instances$Vulnerabilityreports(
          this.context
        );
    }
  }

  export class Resource$Projects$Locations$Instances$Inventories {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get inventory data for the specified VM instance. If the VM has no associated inventory, the message `NOT_FOUND` is returned.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await osconfig.projects.locations.instances.inventories.get({
     *     // Required. API resource name for inventory resource. Format: `projects/{project\}/locations/{location\}/instances/{instance\}/inventory` For `{project\}`, either `project-number` or `project-id` can be provided. For `{instance\}`, either Compute Engine `instance-id` or `instance-name` can be provided.
     *     name: 'projects/my-project/locations/my-location/instances/my-instance/inventory',
     *     // Inventory view indicating what information should be included in the inventory resource. If unspecified, the default view is BASIC.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": {},
     *   //   "name": "my_name",
     *   //   "osInfo": {},
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
      params: Params$Resource$Projects$Locations$Instances$Inventories$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Instances$Inventories$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Inventory>>;
    get(
      params: Params$Resource$Projects$Locations$Instances$Inventories$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Instances$Inventories$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Inventory>,
      callback: BodyResponseCallback<Schema$Inventory>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Instances$Inventories$Get,
      callback: BodyResponseCallback<Schema$Inventory>
    ): void;
    get(callback: BodyResponseCallback<Schema$Inventory>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Inventories$Get
        | BodyResponseCallback<Schema$Inventory>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Inventory>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Inventory>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Inventory>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Inventories$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Inventories$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Inventory>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Inventory>(parameters);
      }
    }

    /**
     * List inventory data for all VM instances in the specified zone.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await osconfig.projects.locations.instances.inventories.list({
     *     // If provided, this field specifies the criteria that must be met by a `Inventory` API resource to be included in the response.
     *     filter: 'placeholder-value',
     *     // The maximum number of results to return.
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call to `ListInventories` that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name. Format: `projects/{project\}/locations/{location\}/instances/-` For `{project\}`, either `project-number` or `project-id` can be provided.
     *     parent: 'projects/my-project/locations/my-location/instances/my-instance',
     *     // Inventory view indicating what information should be included in the inventory resource. If unspecified, the default view is BASIC.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "inventories": [],
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
      params: Params$Resource$Projects$Locations$Instances$Inventories$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Instances$Inventories$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListInventoriesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Instances$Inventories$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Instances$Inventories$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListInventoriesResponse>,
      callback: BodyResponseCallback<Schema$ListInventoriesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Instances$Inventories$List,
      callback: BodyResponseCallback<Schema$ListInventoriesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListInventoriesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Inventories$List
        | BodyResponseCallback<Schema$ListInventoriesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListInventoriesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListInventoriesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListInventoriesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Inventories$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Inventories$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/inventories').replace(
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
        createAPIRequest<Schema$ListInventoriesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListInventoriesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Instances$Inventories$Get
    extends StandardParameters {
    /**
     * Required. API resource name for inventory resource. Format: `projects/{project\}/locations/{location\}/instances/{instance\}/inventory` For `{project\}`, either `project-number` or `project-id` can be provided. For `{instance\}`, either Compute Engine `instance-id` or `instance-name` can be provided.
     */
    name?: string;
    /**
     * Inventory view indicating what information should be included in the inventory resource. If unspecified, the default view is BASIC.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$Inventories$List
    extends StandardParameters {
    /**
     * If provided, this field specifies the criteria that must be met by a `Inventory` API resource to be included in the response.
     */
    filter?: string;
    /**
     * The maximum number of results to return.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to `ListInventories` that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name. Format: `projects/{project\}/locations/{location\}/instances/-` For `{project\}`, either `project-number` or `project-id` can be provided.
     */
    parent?: string;
    /**
     * Inventory view indicating what information should be included in the inventory resource. If unspecified, the default view is BASIC.
     */
    view?: string;
  }

  export class Resource$Projects$Locations$Instances$Ospolicyassignments {
    context: APIRequestContext;
    reports: Resource$Projects$Locations$Instances$Ospolicyassignments$Reports;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.reports =
        new Resource$Projects$Locations$Instances$Ospolicyassignments$Reports(
          this.context
        );
    }
  }

  export class Resource$Projects$Locations$Instances$Ospolicyassignments$Reports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get the OS policy assignment report for the specified Compute Engine VM instance.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await osconfig.projects.locations.instances.osPolicyAssignments.reports.get(
     *       {
     *         // Required. API resource name for OS policy assignment report. Format: `/projects/{project\}/locations/{location\}/instances/{instance\}/osPolicyAssignments/{assignment\}/report` For `{project\}`, either `project-number` or `project-id` can be provided. For `{instance_id\}`, either Compute Engine `instance-id` or `instance-name` can be provided. For `{assignment_id\}`, the OSPolicyAssignment id must be provided.
     *         name: 'projects/my-project/locations/my-location/instances/my-instance/osPolicyAssignments/my-osPolicyAssignment/report',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "instance": "my_instance",
     *   //   "lastRunId": "my_lastRunId",
     *   //   "name": "my_name",
     *   //   "osPolicyAssignment": "my_osPolicyAssignment",
     *   //   "osPolicyCompliances": [],
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
      params: Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$OSPolicyAssignmentReport>>;
    get(
      params: Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OSPolicyAssignmentReport>,
      callback: BodyResponseCallback<Schema$OSPolicyAssignmentReport>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$Get,
      callback: BodyResponseCallback<Schema$OSPolicyAssignmentReport>
    ): void;
    get(callback: BodyResponseCallback<Schema$OSPolicyAssignmentReport>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$Get
        | BodyResponseCallback<Schema$OSPolicyAssignmentReport>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OSPolicyAssignmentReport>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OSPolicyAssignmentReport>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$OSPolicyAssignmentReport>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$OSPolicyAssignmentReport>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OSPolicyAssignmentReport>(parameters);
      }
    }

    /**
     * List OS policy assignment reports for all Compute Engine VM instances in the specified zone.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await osconfig.projects.locations.instances.osPolicyAssignments.reports.list(
     *       {
     *         // If provided, this field specifies the criteria that must be met by the `OSPolicyAssignmentReport` API resource that is included in the response.
     *         filter: 'placeholder-value',
     *         // The maximum number of results to return.
     *         pageSize: 'placeholder-value',
     *         // A pagination token returned from a previous call to the `ListOSPolicyAssignmentReports` method that indicates where this listing should continue from.
     *         pageToken: 'placeholder-value',
     *         // Required. The parent resource name. Format: `projects/{project\}/locations/{location\}/instances/{instance\}/osPolicyAssignments/{assignment\}/reports` For `{project\}`, either `project-number` or `project-id` can be provided. For `{instance\}`, either `instance-name`, `instance-id`, or `-` can be provided. If '-' is provided, the response will include OSPolicyAssignmentReports for all instances in the project/location. For `{assignment\}`, either `assignment-id` or `-` can be provided. If '-' is provided, the response will include OSPolicyAssignmentReports for all OSPolicyAssignments in the project/location. Either {instance\} or {assignment\} must be `-`. For example: `projects/{project\}/locations/{location\}/instances/{instance\}/osPolicyAssignments/-/reports` returns all reports for the instance `projects/{project\}/locations/{location\}/instances/-/osPolicyAssignments/{assignment-id\}/reports` returns all the reports for the given assignment across all instances. `projects/{project\}/locations/{location\}/instances/-/osPolicyAssignments/-/reports` returns all the reports for all assignments across all instances.
     *         parent:
     *           'projects/my-project/locations/my-location/instances/my-instance/osPolicyAssignments/my-osPolicyAssignment',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "osPolicyAssignmentReports": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListOSPolicyAssignmentReportsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentReportsResponse>,
      callback: BodyResponseCallback<Schema$ListOSPolicyAssignmentReportsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$List,
      callback: BodyResponseCallback<Schema$ListOSPolicyAssignmentReportsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListOSPolicyAssignmentReportsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$List
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentReportsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentReportsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentReportsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListOSPolicyAssignmentReportsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/reports').replace(
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
        createAPIRequest<Schema$ListOSPolicyAssignmentReportsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOSPolicyAssignmentReportsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$Get
    extends StandardParameters {
    /**
     * Required. API resource name for OS policy assignment report. Format: `/projects/{project\}/locations/{location\}/instances/{instance\}/osPolicyAssignments/{assignment\}/report` For `{project\}`, either `project-number` or `project-id` can be provided. For `{instance_id\}`, either Compute Engine `instance-id` or `instance-name` can be provided. For `{assignment_id\}`, the OSPolicyAssignment id must be provided.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$List
    extends StandardParameters {
    /**
     * If provided, this field specifies the criteria that must be met by the `OSPolicyAssignmentReport` API resource that is included in the response.
     */
    filter?: string;
    /**
     * The maximum number of results to return.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to the `ListOSPolicyAssignmentReports` method that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name. Format: `projects/{project\}/locations/{location\}/instances/{instance\}/osPolicyAssignments/{assignment\}/reports` For `{project\}`, either `project-number` or `project-id` can be provided. For `{instance\}`, either `instance-name`, `instance-id`, or `-` can be provided. If '-' is provided, the response will include OSPolicyAssignmentReports for all instances in the project/location. For `{assignment\}`, either `assignment-id` or `-` can be provided. If '-' is provided, the response will include OSPolicyAssignmentReports for all OSPolicyAssignments in the project/location. Either {instance\} or {assignment\} must be `-`. For example: `projects/{project\}/locations/{location\}/instances/{instance\}/osPolicyAssignments/-/reports` returns all reports for the instance `projects/{project\}/locations/{location\}/instances/-/osPolicyAssignments/{assignment-id\}/reports` returns all the reports for the given assignment across all instances. `projects/{project\}/locations/{location\}/instances/-/osPolicyAssignments/-/reports` returns all the reports for all assignments across all instances.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Instances$Vulnerabilityreports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the vulnerability report for the specified VM instance. Only VMs with inventory data have vulnerability reports associated with them.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await osconfig.projects.locations.instances.vulnerabilityReports.get({
     *       // Required. API resource name for vulnerability resource. Format: `projects/{project\}/locations/{location\}/instances/{instance\}/vulnerabilityReport` For `{project\}`, either `project-number` or `project-id` can be provided. For `{instance\}`, either Compute Engine `instance-id` or `instance-name` can be provided.
     *       name: 'projects/my-project/locations/my-location/instances/my-instance/vulnerabilityReport',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime",
     *   //   "vulnerabilities": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$VulnerabilityReport>>;
    get(
      params: Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$Get,
      options: MethodOptions | BodyResponseCallback<Schema$VulnerabilityReport>,
      callback: BodyResponseCallback<Schema$VulnerabilityReport>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$Get,
      callback: BodyResponseCallback<Schema$VulnerabilityReport>
    ): void;
    get(callback: BodyResponseCallback<Schema$VulnerabilityReport>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$Get
        | BodyResponseCallback<Schema$VulnerabilityReport>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VulnerabilityReport>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VulnerabilityReport>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$VulnerabilityReport>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$VulnerabilityReport>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VulnerabilityReport>(parameters);
      }
    }

    /**
     * List vulnerability reports for all VM instances in the specified zone.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await osconfig.projects.locations.instances.vulnerabilityReports.list({
     *       // This field supports filtering by the severity level for the vulnerability. For a list of severity levels, see [Severity levels for vulnerabilities](https://cloud.google.com/container-analysis/docs/container-scanning-overview#severity_levels_for_vulnerabilities). The filter field follows the rules described in the [AIP-160](https://google.aip.dev/160) guidelines as follows: + **Filter for a specific severity type**: you can list reports that contain vulnerabilities that are classified as medium by specifying `vulnerabilities.details.severity:MEDIUM`. + **Filter for a range of severities** : you can list reports that have vulnerabilities that are classified as critical or high by specifying `vulnerabilities.details.severity:HIGH OR vulnerabilities.details.severity:CRITICAL`
     *       filter: 'placeholder-value',
     *       // The maximum number of results to return.
     *       pageSize: 'placeholder-value',
     *       // A pagination token returned from a previous call to `ListVulnerabilityReports` that indicates where this listing should continue from.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent resource name. Format: `projects/{project\}/locations/{location\}/instances/-` For `{project\}`, either `project-number` or `project-id` can be provided.
     *       parent: 'projects/my-project/locations/my-location/instances/my-instance',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "vulnerabilityReports": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListVulnerabilityReportsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVulnerabilityReportsResponse>,
      callback: BodyResponseCallback<Schema$ListVulnerabilityReportsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$List,
      callback: BodyResponseCallback<Schema$ListVulnerabilityReportsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListVulnerabilityReportsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$List
        | BodyResponseCallback<Schema$ListVulnerabilityReportsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVulnerabilityReportsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVulnerabilityReportsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListVulnerabilityReportsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/vulnerabilityReports').replace(
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
        createAPIRequest<Schema$ListVulnerabilityReportsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListVulnerabilityReportsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$Get
    extends StandardParameters {
    /**
     * Required. API resource name for vulnerability resource. Format: `projects/{project\}/locations/{location\}/instances/{instance\}/vulnerabilityReport` For `{project\}`, either `project-number` or `project-id` can be provided. For `{instance\}`, either Compute Engine `instance-id` or `instance-name` can be provided.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$List
    extends StandardParameters {
    /**
     * This field supports filtering by the severity level for the vulnerability. For a list of severity levels, see [Severity levels for vulnerabilities](https://cloud.google.com/container-analysis/docs/container-scanning-overview#severity_levels_for_vulnerabilities). The filter field follows the rules described in the [AIP-160](https://google.aip.dev/160) guidelines as follows: + **Filter for a specific severity type**: you can list reports that contain vulnerabilities that are classified as medium by specifying `vulnerabilities.details.severity:MEDIUM`. + **Filter for a range of severities** : you can list reports that have vulnerabilities that are classified as critical or high by specifying `vulnerabilities.details.severity:HIGH OR vulnerabilities.details.severity:CRITICAL`
     */
    filter?: string;
    /**
     * The maximum number of results to return.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to `ListVulnerabilityReports` that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name. Format: `projects/{project\}/locations/{location\}/instances/-` For `{project\}`, either `project-number` or `project-id` can be provided.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Ospolicyassignments {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Ospolicyassignments$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Ospolicyassignments$Operations(
          this.context
        );
    }

    /**
     * Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await osconfig.projects.locations.osPolicyAssignments.create({
     *     // Required. The logical name of the OS policy assignment in the project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.
     *     osPolicyAssignmentId: 'placeholder-value',
     *     // Required. The parent resource name in the form: projects/{project\}/locations/{location\}
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is only idempotent if a `request_id` is provided.
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "baseline": false,
     *       //   "deleted": false,
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "instanceFilter": {},
     *       //   "name": "my_name",
     *       //   "osPolicies": [],
     *       //   "reconciling": false,
     *       //   "revisionCreateTime": "my_revisionCreateTime",
     *       //   "revisionId": "my_revisionId",
     *       //   "rollout": {},
     *       //   "rolloutState": "my_rolloutState",
     *       //   "uid": "my_uid"
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
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Ospolicyassignments$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Ospolicyassignments$Create
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
        {}) as Params$Resource$Projects$Locations$Ospolicyassignments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Ospolicyassignments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/osPolicyAssignments').replace(
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
     * Delete the OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. If the LRO completes and is not cancelled, all revisions associated with the OS policy assignment are deleted. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await osconfig.projects.locations.osPolicyAssignments.delete({
     *     // Required. The name of the OS policy assignment to be deleted
     *     name: 'projects/my-project/locations/my-location/osPolicyAssignments/my-osPolicyAssignment',
     *     // Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is only idempotent if a `request_id` is provided.
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
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Ospolicyassignments$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Ospolicyassignments$Delete
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
        {}) as Params$Resource$Projects$Locations$Ospolicyassignments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Ospolicyassignments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Retrieve an existing OS policy assignment. This method always returns the latest revision. In order to retrieve a previous revision of the assignment, also provide the revision ID in the `name` parameter.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await osconfig.projects.locations.osPolicyAssignments.get({
     *     // Required. The resource name of OS policy assignment. Format: `projects/{project\}/locations/{location\}/osPolicyAssignments/{os_policy_assignment\}@{revisionId\}`
     *     name: 'projects/my-project/locations/my-location/osPolicyAssignments/my-osPolicyAssignment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "baseline": false,
     *   //   "deleted": false,
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "instanceFilter": {},
     *   //   "name": "my_name",
     *   //   "osPolicies": [],
     *   //   "reconciling": false,
     *   //   "revisionCreateTime": "my_revisionCreateTime",
     *   //   "revisionId": "my_revisionId",
     *   //   "rollout": {},
     *   //   "rolloutState": "my_rolloutState",
     *   //   "uid": "my_uid"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Ospolicyassignments$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$OSPolicyAssignment>>;
    get(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$OSPolicyAssignment>,
      callback: BodyResponseCallback<Schema$OSPolicyAssignment>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Get,
      callback: BodyResponseCallback<Schema$OSPolicyAssignment>
    ): void;
    get(callback: BodyResponseCallback<Schema$OSPolicyAssignment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Ospolicyassignments$Get
        | BodyResponseCallback<Schema$OSPolicyAssignment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OSPolicyAssignment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OSPolicyAssignment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$OSPolicyAssignment>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Ospolicyassignments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Ospolicyassignments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$OSPolicyAssignment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OSPolicyAssignment>(parameters);
      }
    }

    /**
     * List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await osconfig.projects.locations.osPolicyAssignments.list({
     *     // The maximum number of assignments to return.
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call to `ListOSPolicyAssignments` that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "osPolicyAssignments": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Ospolicyassignments$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Ospolicyassignments$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListOSPolicyAssignmentsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentsResponse>,
      callback: BodyResponseCallback<Schema$ListOSPolicyAssignmentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$List,
      callback: BodyResponseCallback<Schema$ListOSPolicyAssignmentsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListOSPolicyAssignmentsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Ospolicyassignments$List
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListOSPolicyAssignmentsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Ospolicyassignments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Ospolicyassignments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+parent}/osPolicyAssignments').replace(
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
        createAPIRequest<Schema$ListOSPolicyAssignmentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOSPolicyAssignmentsResponse>(
          parameters
        );
      }
    }

    /**
     * List the OS policy assignment revisions for a given OS policy assignment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await osconfig.projects.locations.osPolicyAssignments.listRevisions({
     *       // Required. The name of the OS policy assignment to list revisions for.
     *       name: 'projects/my-project/locations/my-location/osPolicyAssignments/my-osPolicyAssignment',
     *       // The maximum number of revisions to return.
     *       pageSize: 'placeholder-value',
     *       // A pagination token returned from a previous call to `ListOSPolicyAssignmentRevisions` that indicates where this listing should continue from.
     *       pageToken: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "osPolicyAssignments": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    listRevisions(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Listrevisions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    listRevisions(
      params?: Params$Resource$Projects$Locations$Ospolicyassignments$Listrevisions,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListOSPolicyAssignmentRevisionsResponse>
    >;
    listRevisions(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Listrevisions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listRevisions(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Listrevisions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentRevisionsResponse>,
      callback: BodyResponseCallback<Schema$ListOSPolicyAssignmentRevisionsResponse>
    ): void;
    listRevisions(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Listrevisions,
      callback: BodyResponseCallback<Schema$ListOSPolicyAssignmentRevisionsResponse>
    ): void;
    listRevisions(
      callback: BodyResponseCallback<Schema$ListOSPolicyAssignmentRevisionsResponse>
    ): void;
    listRevisions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Ospolicyassignments$Listrevisions
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentRevisionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentRevisionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentRevisionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListOSPolicyAssignmentRevisionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Ospolicyassignments$Listrevisions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Ospolicyassignments$Listrevisions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}:listRevisions').replace(
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
        createAPIRequest<Schema$ListOSPolicyAssignmentRevisionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOSPolicyAssignmentRevisionsResponse>(
          parameters
        );
      }
    }

    /**
     * Update an existing OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1alpha/projects.locations.osPolicyAssignments.operations/cancel).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await osconfig.projects.locations.osPolicyAssignments.patch({
     *     // Optional. If set to true, and the OS policy assignment is not found, a new OS policy assignment will be created. In this situation, `update_mask` is ignored.
     *     allowMissing: 'placeholder-value',
     *     // Resource name. Format: `projects/{project_number\}/locations/{location\}/osPolicyAssignments/{os_policy_assignment_id\}` This field is ignored when you create an OS policy assignment.
     *     name: 'projects/my-project/locations/my-location/osPolicyAssignments/my-osPolicyAssignment',
     *     // Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is only idempotent if a `request_id` is provided.
     *     requestId: 'placeholder-value',
     *     // Optional. Field mask that controls which fields of the assignment should be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "baseline": false,
     *       //   "deleted": false,
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "instanceFilter": {},
     *       //   "name": "my_name",
     *       //   "osPolicies": [],
     *       //   "reconciling": false,
     *       //   "revisionCreateTime": "my_revisionCreateTime",
     *       //   "revisionId": "my_revisionId",
     *       //   "rollout": {},
     *       //   "rolloutState": "my_rolloutState",
     *       //   "uid": "my_uid"
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
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Ospolicyassignments$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Ospolicyassignments$Patch
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
        {}) as Params$Resource$Projects$Locations$Ospolicyassignments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Ospolicyassignments$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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

  export interface Params$Resource$Projects$Locations$Ospolicyassignments$Create
    extends StandardParameters {
    /**
     * Required. The logical name of the OS policy assignment in the project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.
     */
    osPolicyAssignmentId?: string;
    /**
     * Required. The parent resource name in the form: projects/{project\}/locations/{location\}
     */
    parent?: string;
    /**
     * Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is only idempotent if a `request_id` is provided.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OSPolicyAssignment;
  }
  export interface Params$Resource$Projects$Locations$Ospolicyassignments$Delete
    extends StandardParameters {
    /**
     * Required. The name of the OS policy assignment to be deleted
     */
    name?: string;
    /**
     * Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is only idempotent if a `request_id` is provided.
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Ospolicyassignments$Get
    extends StandardParameters {
    /**
     * Required. The resource name of OS policy assignment. Format: `projects/{project\}/locations/{location\}/osPolicyAssignments/{os_policy_assignment\}@{revisionId\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Ospolicyassignments$List
    extends StandardParameters {
    /**
     * The maximum number of assignments to return.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to `ListOSPolicyAssignments` that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Ospolicyassignments$Listrevisions
    extends StandardParameters {
    /**
     * Required. The name of the OS policy assignment to list revisions for.
     */
    name?: string;
    /**
     * The maximum number of revisions to return.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to `ListOSPolicyAssignmentRevisions` that indicates where this listing should continue from.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Projects$Locations$Ospolicyassignments$Patch
    extends StandardParameters {
    /**
     * Optional. If set to true, and the OS policy assignment is not found, a new OS policy assignment will be created. In this situation, `update_mask` is ignored.
     */
    allowMissing?: boolean;
    /**
     * Resource name. Format: `projects/{project_number\}/locations/{location\}/osPolicyAssignments/{os_policy_assignment_id\}` This field is ignored when you create an OS policy assignment.
     */
    name?: string;
    /**
     * Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is only idempotent if a `request_id` is provided.
     */
    requestId?: string;
    /**
     * Optional. Field mask that controls which fields of the assignment should be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OSPolicyAssignment;
  }

  export class Resource$Projects$Locations$Ospolicyassignments$Operations {
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
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await osconfig.projects.locations.osPolicyAssignments.operations.cancel({
     *       // The name of the operation resource to be cancelled.
     *       name: 'projects/my-project/locations/my-location/osPolicyAssignments/my-osPolicyAssignment/operations/my-operation',
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
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    cancel(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Cancel
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
        {}) as Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}:cancel').replace(
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
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1alpha');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
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
     *     await osconfig.projects.locations.osPolicyAssignments.operations.get({
     *       // The name of the operation resource.
     *       name: 'projects/my-project/locations/my-location/osPolicyAssignments/my-osPolicyAssignment/operations/my-operation',
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
    get(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    get(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Get
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
        {}) as Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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

  export interface Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Cancel
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
  export interface Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
}
