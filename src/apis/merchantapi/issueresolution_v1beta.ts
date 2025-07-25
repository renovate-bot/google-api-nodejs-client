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

export namespace merchantapi_issueresolution_v1beta {
  export interface Options extends GlobalOptions {
    version: 'issueresolution_v1beta';
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
   * Merchant API
   *
   * Programmatically manage your Merchant Center Accounts.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const merchantapi = google.merchantapi('issueresolution_v1beta');
   * ```
   */
  export class Merchantapi {
    context: APIRequestContext;
    accounts: Resource$Accounts;
    issueresolution: Resource$Issueresolution;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
      this.issueresolution = new Resource$Issueresolution(this.context);
    }
  }

  /**
   * An actionable step that can be executed to solve the issue.
   */
  export interface Schema$Action {
    /**
     * Action implemented and performed in (your) third-party application. The application should point the business to the place, where they can access the corresponding functionality or provide instructions, if the specific functionality is not available.
     */
    builtinSimpleAction?: Schema$BuiltInSimpleAction;
    /**
     * Action implemented and performed in (your) third-party application. The application needs to show an additional content and input form to the business as specified for given action. They can trigger the action only when they provided all required inputs.
     */
    builtinUserInputAction?: Schema$BuiltInUserInputAction;
    /**
     * Label of the action button.
     */
    buttonLabel?: string | null;
    /**
     * Action that is implemented and performed outside of (your) third-party application. The application needs to redirect the business to the external location where they can perform the action.
     */
    externalAction?: Schema$ExternalAction;
    /**
     * Controlling whether the button is active or disabled. The value is 'false' when the action was already requested or is not available. If the action is not available then a reason will be present. If (your) third-party application shows a disabled button for action that is not available, then it should also show reasons.
     */
    isAvailable?: boolean | null;
    /**
     * List of reasons why the action is not available. The list of reasons is empty if the action is available. If there is only one reason, it can be displayed next to the disabled button. If there are more reasons, all of them should be displayed, for example in a pop-up dialog.
     */
    reasons?: Schema$Reason[];
  }
  /**
   * Flow that can be selected for an action. When a business selects a flow, application should open a dialog with more information and input form.
   */
  export interface Schema$ActionFlow {
    /**
     * Label for the button to trigger the action from the action dialog. For example: "Request review"
     */
    dialogButtonLabel?: string | null;
    /**
     * Important message to be highlighted in the request dialog. For example: "You can only request a review for disagreeing with this issue once. If it's not approved, you'll need to fix the issue and wait a few days before you can request another review."
     */
    dialogCallout?: Schema$Callout;
    /**
     * Message displayed in the request dialog. For example: "Make sure you've fixed all your country-specific issues. If not, you may have to wait 7 days to request another review". There may be an more information to be shown in a tooltip.
     */
    dialogMessage?: Schema$TextWithTooltip;
    /**
     * Title of the request dialog. For example: "Before you request a review"
     */
    dialogTitle?: string | null;
    /**
     * Not for display but need to be sent back for the selected action flow.
     */
    id?: string | null;
    /**
     * A list of input fields.
     */
    inputs?: Schema$InputField[];
    /**
     * Text value describing the intent for the action flow. It can be used as an input label if business needs to pick one of multiple flows. For example: "I disagree with the issue"
     */
    label?: string | null;
  }
  /**
   * Input provided by the business.
   */
  export interface Schema$ActionInput {
    /**
     * Required. Id of the selected action flow.
     */
    actionFlowId?: string | null;
    /**
     * Required. Values for input fields.
     */
    inputValues?: Schema$InputValue[];
  }
  /**
   * Long text from external source.
   */
  export interface Schema$AdditionalContent {
    /**
     * Long text organized into paragraphs.
     */
    paragraphs?: string[] | null;
    /**
     * Title of the additional content;
     */
    title?: string | null;
  }
  /**
   * Aggregate product statuses for a given reporting context and country.
   */
  export interface Schema$AggregateProductStatus {
    /**
     * The country of the aggregate product statuses. Represented as a [CLDR territory code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml).
     */
    country?: string | null;
    /**
     * The product issues that affect the given reporting context and country.
     */
    itemLevelIssues?: Schema$ItemLevelIssue[];
    /**
     * Identifier. The name of the `AggregateProductStatuses` resource. Format: `accounts/{account\}/aggregateProductStatuses/{aggregateProductStatuses\}`
     */
    name?: string | null;
    /**
     * The reporting context of the aggregate product statuses.
     */
    reportingContext?: string | null;
    /**
     * Products statistics for the given reporting context and country.
     */
    stats?: Schema$Stats;
  }
  /**
   * A detailed impact breakdown for a group of regions where the impact of the issue on different shopping destinations is the same.
   */
  export interface Schema$Breakdown {
    /**
     * Human readable, localized description of issue's effect on different targets. Should be rendered as a list. For example: * "Products not showing in ads" * "Products not showing organically"
     */
    details?: string[] | null;
    /**
     * Lists of regions. Should be rendered as a title for this group of details. The full list should be shown to the business. If the list is too long, it is recommended to make it expandable.
     */
    regions?: Schema$Region[];
  }
  /**
   * Action that is implemented and performed in (your) third-party application. Represents various functionality that is expected to be available to business and will help them with resolving the issue. The application should point the business to the place, where they can access the corresponding functionality. If the functionality is not supported, it is recommended to explain the situation to the business and provide them with instructions how to solve the issue.
   */
  export interface Schema$BuiltInSimpleAction {
    /**
     * Long text from an external source that should be available to the business. Present when the type is `SHOW_ADDITIONAL_CONTENT`.
     */
    additionalContent?: Schema$AdditionalContent;
    /**
     * The attribute that needs to be updated. Present when the type is `EDIT_ITEM_ATTRIBUTE`. This field contains a code for attribute, represented in snake_case. You can find a list of product's attributes, with their codes [here](https://support.google.com/merchants/answer/7052112).
     */
    attributeCode?: string | null;
    /**
     * The type of action that represents a functionality that is expected to be available in third-party application.
     */
    type?: string | null;
  }
  /**
   * Action that is implemented and performed in (your) third-party application. The application needs to show an additional content and input form to the business. They can start the action only when they provided all required inputs. The application will request processing of the action by calling the [triggeraction method](https://developers.google.com/merchant/api/reference/rest/issueresolution_v1beta/issueresolution/triggeraction).
   */
  export interface Schema$BuiltInUserInputAction {
    /**
     * Contains the action's context that must be included as part of the TriggerActionPayload.action_context in TriggerActionRequest.payload to call the `triggeraction` method. The content should be treated as opaque and must not be modified.
     */
    actionContext?: string | null;
    /**
     * Actions may provide multiple different flows. Business selects one that fits best to their intent. Selecting the flow is the first step in user's interaction with the action. It affects what input fields will be available and required and also how the request will be processed.
     */
    flows?: Schema$ActionFlow[];
  }
  /**
   * An important message that should be highlighted. Usually displayed as a banner.
   */
  export interface Schema$Callout {
    /**
     * A full message that needs to be shown to the business.
     */
    fullMessage?: Schema$TextWithTooltip;
    /**
     * Can be used to render messages with different severity in different styles. Snippets off all types contain important information that should be displayed to the business.
     */
    styleHint?: string | null;
  }
  /**
   * Checkbox input allows the business to provide a boolean value. Corresponds to the [html input type=checkbox](https://www.w3.org/TR/2012/WD-html-markup-20121025/input.checkbox.html#input.checkbox). If the business checks the box, the input value for the field is `true`, otherwise it is `false`. This type of input is often used as a confirmation that the business completed required steps before they are allowed to start the action. In such a case, the input field is marked as required and the button to trigger the action should stay disabled until the business checks the box.
   */
  export interface Schema$CheckboxInput {}
  /**
   * Value for checkbox input field.
   */
  export interface Schema$CheckboxInputValue {
    /**
     * Required. True if the business checked the box field. False otherwise.
     */
    value?: boolean | null;
  }
  /**
   * Choice input allows the business to select one of the offered choices. Some choices may be linked to additional input fields that should be displayed under or next to the choice option. The value for the additional input field needs to be provided only when the specific choice is selected by the the business. For example, additional input field can be hidden or disabled until the business selects the specific choice.
   */
  export interface Schema$ChoiceInput {
    /**
     * A list of choices. Only one option can be selected.
     */
    options?: Schema$ChoiceInputOption[];
  }
  /**
   * A choice that the business can select.
   */
  export interface Schema$ChoiceInputOption {
    /**
     * Input that should be displayed when this option is selected. The additional input will not contain a `ChoiceInput`.
     */
    additionalInput?: Schema$InputField;
    /**
     * Not for display but need to be sent back for the selected choice option.
     */
    id?: string | null;
    /**
     * Short description of the choice option. There may be more information to be shown as a tooltip.
     */
    label?: Schema$TextWithTooltip;
  }
  /**
   * Value for choice input field.
   */
  export interface Schema$ChoiceInputValue {
    /**
     * Required. Id of the option that was selected by the business.
     */
    choiceInputOptionId?: string | null;
  }
  /**
   * Action that is implemented and performed outside of the third-party application. It should redirect the business to the provided URL of an external system where they can perform the action. For example to request a review in the Merchant Center.
   */
  export interface Schema$ExternalAction {
    /**
     * The type of external action.
     */
    type?: string | null;
    /**
     * URL to external system, for example Merchant Center, where the business can perform the action.
     */
    uri?: string | null;
  }
  /**
   * Overall impact of the issue.
   */
  export interface Schema$Impact {
    /**
     * Detailed impact breakdown. Explains the types of restriction the issue has in different shopping destinations and territory. If present, it should be rendered to the business. Can be shown as a mouse over dropdown or a dialog. Each breakdown item represents a group of regions with the same impact details.
     */
    breakdowns?: Schema$Breakdown[];
    /**
     * Optional. Message summarizing the overall impact of the issue. If present, it should be rendered to the business. For example: "Disapproves 90k offers in 25 countries"
     */
    message?: string | null;
    /**
     * The severity of the issue.
     */
    severity?: string | null;
  }
  /**
   * Input field that needs to be available to the business. If the field is marked as required, then a value needs to be provided for a successful processing of the request.
   */
  export interface Schema$InputField {
    /**
     * Input field to provide a boolean value. Corresponds to the [html input type=checkbox](https://www.w3.org/TR/2012/WD-html-markup-20121025/input.checkbox.html#input.checkbox).
     */
    checkboxInput?: Schema$CheckboxInput;
    /**
     * Input field to select one of the offered choices. Corresponds to the [html input type=radio](https://www.w3.org/TR/2012/WD-html-markup-20121025/input.radio.html#input.radio).
     */
    choiceInput?: Schema$ChoiceInput;
    /**
     * Not for display but need to be sent back for the given input field.
     */
    id?: string | null;
    /**
     * Input field label. There may be more information to be shown in a tooltip.
     */
    label?: Schema$TextWithTooltip;
    /**
     * Whether the field is required. The action button needs to stay disabled till values for all required fields are provided.
     */
    required?: boolean | null;
    /**
     * Input field to provide text information. Corresponds to the [html input type=text](https://www.w3.org/TR/2012/WD-html-markup-20121025/input.text.html#input.text) or [html textarea](https://www.w3.org/TR/2012/WD-html-markup-20121025/textarea.html#textarea).
     */
    textInput?: Schema$TextInput;
  }
  /**
   * Input provided by the business for input field.
   */
  export interface Schema$InputValue {
    /**
     * Value for checkbox input field.
     */
    checkboxInputValue?: Schema$CheckboxInputValue;
    /**
     * Value for choice input field.
     */
    choiceInputValue?: Schema$ChoiceInputValue;
    /**
     * Required. Id of the corresponding input field.
     */
    inputFieldId?: string | null;
    /**
     * Value for text input field.
     */
    textInputValue?: Schema$TextInputValue;
  }
  /**
   * The ItemLevelIssue of the product status.
   */
  export interface Schema$ItemLevelIssue {
    /**
     * The attribute's name, if the issue is caused by a single attribute.
     */
    attribute?: string | null;
    /**
     * The error code of the issue.
     */
    code?: string | null;
    /**
     * A short issue description in English.
     */
    description?: string | null;
    /**
     * A detailed issue description in English.
     */
    detail?: string | null;
    /**
     * The URL of a web page to help with resolving this issue.
     */
    documentationUri?: string | null;
    /**
     * The number of products affected by this issue.
     */
    productCount?: string | null;
    /**
     * Whether the issue can be resolved by the merchant.
     */
    resolution?: string | null;
    /**
     * How this issue affects serving of the offer.
     */
    severity?: string | null;
  }
  /**
   * Response message for the `ListAggregateProductStatuses` method.
   */
  export interface Schema$ListAggregateProductStatusesResponse {
    /**
     * The `AggregateProductStatuses` resources for the given account.
     */
    aggregateProductStatuses?: Schema$AggregateProductStatus[];
    /**
     * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * The change that happened to the product including old value, new value, country code as the region code and reporting context.
   */
  export interface Schema$ProductChange {
    /**
     * The new value of the changed resource or attribute. If empty, it means that the product was deleted. Will have one of these values : (`approved`, `pending`, `disapproved`, ``)
     */
    newValue?: string | null;
    /**
     * The old value of the changed resource or attribute. If empty, it means that the product was created. Will have one of these values : (`approved`, `pending`, `disapproved`, ``)
     */
    oldValue?: string | null;
    /**
     * Countries that have the change (if applicable). Represented in the ISO 3166 format.
     */
    regionCode?: string | null;
    /**
     * Reporting contexts that have the change (if applicable). Currently this field supports only (`SHOPPING_ADS`, `LOCAL_INVENTORY_ADS`, `YOUTUBE_SHOPPING`, `YOUTUBE_CHECKOUT`, `YOUTUBE_AFFILIATE`) from the enum value [ReportingContextEnum](/merchant/api/reference/rest/Shared.Types/ReportingContextEnum)
     */
    reportingContext?: string | null;
  }
  /**
   * The message that the merchant will receive to notify about product status change event
   */
  export interface Schema$ProductStatusChangeMessage {
    /**
     * The target account that owns the entity that changed. Format : `accounts/{merchant_id\}`
     */
    account?: string | null;
    /**
     * The attribute in the resource that changed, in this case it will be always `Status`.
     */
    attribute?: string | null;
    /**
     * A message to describe the change that happened to the product
     */
    changes?: Schema$ProductChange[];
    /**
     * The time at which the event was generated. If you want to order the notification messages you receive you should rely on this field not on the order of receiving the notifications.
     */
    eventTime?: string | null;
    /**
     * Optional. The product expiration time. This field will not be set if the notification is sent for a product deletion event.
     */
    expirationTime?: string | null;
    /**
     * The account that manages the merchant's account. can be the same as merchant id if it is standalone account. Format : `accounts/{service_provider_id\}`
     */
    managingAccount?: string | null;
    /**
     * The product name. Format: `accounts/{account\}/products/{product\}`
     */
    resource?: string | null;
    /**
     * The product id.
     */
    resourceId?: string | null;
    /**
     * The resource that changed, in this case it will always be `Product`.
     */
    resourceType?: string | null;
  }
  /**
   * A single reason why the action is not available.
   */
  export interface Schema$Reason {
    /**
     * Optional. An action that needs to be performed to solve the problem represented by this reason. This action will always be available. Should be rendered as a link or button next to the summarizing message. For example, the review may be available only once the business configure all required attributes. In such a situation this action can be a link to the form, where they can fill the missing attribute to unblock the main action.
     */
    action?: Schema$Action;
    /**
     * Detailed explanation of the reason. Should be displayed as a hint if present.
     */
    detail?: string | null;
    /**
     * Messages summarizing the reason, why the action is not available. For example: "Review requested on Jan 03. Review requests can take a few days to complete."
     */
    message?: string | null;
  }
  /**
   * Region with code and localized name.
   */
  export interface Schema$Region {
    /**
     * The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml)
     */
    code?: string | null;
    /**
     * The localized name of the region. For region with code='001' the value is 'All countries' or the equivalent in other languages.
     */
    name?: string | null;
  }
  /**
   * Response containing an issue resolution content and actions for listed account issues.
   */
  export interface Schema$RenderAccountIssuesResponse {
    /**
     * List of account issues for a given account. This list can be shown with compressed, expandable items. In the compressed form, the title and impact should be shown for each issue. Once the issue is expanded, the detailed content and available actions should be rendered.
     */
    renderedIssues?: Schema$RenderedIssue[];
  }
  /**
   * An issue affecting specific business or their product.
   */
  export interface Schema$RenderedIssue {
    /**
     * A list of actionable steps that can be executed to solve the issue. An example is requesting a re-review or providing arguments when business disagrees with the issue. Actions that are supported in (your) third-party application can be rendered as buttons and should be available to the business when they expand the issue.
     */
    actions?: Schema$Action[];
    /**
     * Clarifies the severity of the issue. The summarizing message, if present, should be shown right under the title for each issue. It helps business to quickly understand the impact of the issue. The detailed breakdown helps the business to fully understand the impact of the issue. It can be rendered as dialog that opens when the business mouse over the summarized impact statement. Issues with different severity can be styled differently. They may use a different color or icon to signal the difference between `ERROR`, `WARNING` and `INFO`.
     */
    impact?: Schema$Impact;
    /**
     * Details of the issue as a pre-rendered HTML. HTML elements contain CSS classes that can be used to customize the style of the content. Always sanitize the HTML before embedding it directly to your application. The sanitizer needs to allow basic HTML tags, such as: `div`, `span`, `p`, `a`, `ul`, `li`, `table`, `tr`, `td`. For example, you can use [DOMPurify](https://www.npmjs.com/package/dompurify). CSS classes: * `issue-detail` - top level container for the detail of the issue * `callout-banners` - section of the `issue-detail` with callout banners * `callout-banner` - single callout banner, inside `callout-banners` * `callout-banner-info` - callout with important information (default) * `callout-banner-warning` - callout with a warning * `callout-banner-error` - callout informing about an error (most severe) * `issue-content` - section of the `issue-detail`, contains multiple `content-element` * `content-element` - content element such as a list, link or paragraph, inside `issue-content` * `root-causes` - unordered list with items describing root causes of the issue, inside `issue-content` * `root-causes-intro` - intro text before the `root-causes` list, inside `issue-content` * `segment` - section of the text, `span` inside paragraph * `segment-attribute` - section of the text that represents a product attribute, for example 'image\_link' * `segment-literal` - section of the text that contains a special value, for example '0-1000 kg' * `segment-bold` - section of the text that should be rendered as bold * `segment-italic` - section of the text that should be rendered as italic * `tooltip` - used on paragraphs that should be rendered with a tooltip. A section of the text in such a paragraph will have a class `tooltip-text` and is intended to be shown in a mouse over dialog. If the style is not used, the `tooltip-text` section would be shown on a new line, after the main part of the text. * `tooltip-text` - marks a section of the text within a `tooltip`, that is intended to be shown in a mouse over dialog. * `tooltip-icon` - marks a section of the text within a `tooltip`, that can be replaced with a tooltip icon, for example '?' or 'i'. By default, this section contains a `br` tag, that is separating the main text and the tooltip text when the style is not used. * `tooltip-style-question` - the tooltip shows helpful information, can use the '?' as an icon. * `tooltip-style-info` - the tooltip adds additional information fitting to the context, can use the 'i' as an icon. * `content-moderation` - marks the paragraph that explains how the issue was identified. * `new-element` - Present for new elements added to the pre-rendered content in the future. To make sure that a new content element does not break your style, you can hide everything with this class.
     */
    prerenderedContent?: string | null;
    /**
     * Pre-rendered HTML that contains a link to the external location where the ODS can be requested and instructions for how to request it. HTML elements contain CSS classes that can be used to customize the style of this snippet. Always sanitize the HTML before embedding it directly to your application. The sanitizer needs to allow basic HTML tags, such as: `div`, `span`, `p`, `a`, `ul`, `li`, `table`, `tr`, `td`. For example, you can use [DOMPurify](https://www.npmjs.com/package/dompurify). CSS classes: * `ods-section`* - wrapper around the out-of-court dispute resolution section * `ods-description`* - intro text for the out-of-court dispute resolution. It may contain multiple segments and a link. * `ods-param`* - wrapper around the header-value pair for parameters that the business may need to provide during the ODS process. * `ods-routing-id`* - ods param for the Routing ID. * `ods-reference-id`* - ods param for the Routing ID. * `ods-param-header`* - header for the ODS parameter * `ods-param-value`* - value of the ODS parameter. This value should be rendered in a way that it is easy for the user to identify and copy. * `segment` - section of the text, `span` inside paragraph * `segment-attribute` - section of the text that represents a product attribute, for example 'image\_link' * `segment-literal` - section of the text that contains a special value, for example '0-1000 kg' * `segment-bold` - section of the text that should be rendered as bold * `segment-italic` - section of the text that should be rendered as italic * `tooltip` - used on paragraphs that should be rendered with a tooltip. A section of the text in such a paragraph will have a class `tooltip-text` and is intended to be shown in a mouse over dialog. If the style is not used, the `tooltip-text` section would be shown on a new line, after the main part of the text. * `tooltip-text` - marks a section of the text within a `tooltip`, that is intended to be shown in a mouse over dialog. * `tooltip-icon` - marks a section of the text within a `tooltip`, that can be replaced with a tooltip icon, for example '?' or 'i'. By default, this section contains a `br` tag, that is separating the main text and the tooltip text when the style is not used. * `tooltip-style-question` - the tooltip shows helpful information, can use the '?' as an icon. * `tooltip-style-info` - the tooltip adds additional information fitting to the context, can use the 'i' as an icon.
     */
    prerenderedOutOfCourtDisputeSettlement?: string | null;
    /**
     * Title of the issue.
     */
    title?: string | null;
  }
  /**
   * The payload for configuring how the content should be rendered.
   */
  export interface Schema$RenderIssuesRequestPayload {
    /**
     * Optional. How the detailed content should be returned. Default option is to return the content as a pre-rendered HTML text.
     */
    contentOption?: string | null;
    /**
     * Optional. How actions with user input form should be handled. If not provided, actions will be returned as links that points the business to Merchant Center where they can request the action.
     */
    userInputActionOption?: string | null;
  }
  /**
   * Response containing an issue resolution content and actions for listed product issues.
   */
  export interface Schema$RenderProductIssuesResponse {
    /**
     * List of issues for a given product. This list can be shown with compressed, expandable items. In the compressed form, the title and impact should be shown for each issue. Once the issue is expanded, the detailed content and available actions should be rendered.
     */
    renderedIssues?: Schema$RenderedIssue[];
  }
  /**
   * Products statistics.
   */
  export interface Schema$Stats {
    /**
     * The number of products that are active.
     */
    activeCount?: string | null;
    /**
     * The number of products that are disapproved.
     */
    disapprovedCount?: string | null;
    /**
     * The number of products that are expiring.
     */
    expiringCount?: string | null;
    /**
     * The number of products that are pending.
     */
    pendingCount?: string | null;
  }
  /**
   * Text input allows the business to provide a text value.
   */
  export interface Schema$TextInput {
    /**
     * Additional info regarding the field to be displayed to the business. For example, warning to not include personal identifiable information. There may be more information to be shown in a tooltip.
     */
    additionalInfo?: Schema$TextWithTooltip;
    /**
     * Text to be used as the [aria-label](https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html) for the input.
     */
    ariaLabel?: string | null;
    /**
     * Information about the required format. If present, it should be shown close to the input field to help the business to provide a correct value. For example: "VAT numbers should be in a format similar to SK9999999999"
     */
    formatInfo?: string | null;
    /**
     * Type of the text input
     */
    type?: string | null;
  }
  /**
   * Value for text input field.
   */
  export interface Schema$TextInputValue {
    /**
     * Required. Text provided by the business.
     */
    value?: string | null;
  }
  /**
   * Block of text that may contain a tooltip with more information.
   */
  export interface Schema$TextWithTooltip {
    /**
     * Value of the tooltip as a simple text.
     */
    simpleTooltipValue?: string | null;
    /**
     * Value of the message as a simple text.
     */
    simpleValue?: string | null;
    /**
     * The suggested type of an icon for tooltip, if a tooltip is present.
     */
    tooltipIconStyle?: string | null;
  }
  /**
   * The payload for the triggered action.
   */
  export interface Schema$TriggerActionPayload {
    /**
     * Required. The context from the selected action. The value is obtained from rendered issues and needs to be sent back to identify the action that is being triggered.
     */
    actionContext?: string | null;
    /**
     * Required. Input provided by the business.
     */
    actionInput?: Schema$ActionInput;
  }
  /**
   * Response informing about the started action.
   */
  export interface Schema$TriggerActionResponse {
    /**
     * The message for the business.
     */
    message?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    aggregateProductStatuses: Resource$Accounts$Aggregateproductstatuses;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.aggregateProductStatuses =
        new Resource$Accounts$Aggregateproductstatuses(this.context);
    }
  }

  export class Resource$Accounts$Aggregateproductstatuses {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the `AggregateProductStatuses` resources for your merchant account. The response might contain fewer items than specified by `pageSize`. If `pageToken` was returned in previous request, it can be used to obtain additional results.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const merchantapi = google.merchantapi('issueresolution_v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await merchantapi.accounts.aggregateProductStatuses.list({
     *     // Optional. A filter expression that filters the aggregate product statuses. Filtering is only supported by the `reporting_context` and `country` field. For example: `reporting_context = "SHOPPING_ADS" AND country = "US"`.
     *     filter: 'placeholder-value',
     *     // Optional. The maximum number of aggregate product statuses to return. The service may return fewer than this value. If unspecified, at most 25 aggregate product statuses are returned. The maximum value is 250; values above 250 are coerced to 250.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListAggregateProductStatuses` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAggregateProductStatuses` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The account to list aggregate product statuses for. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aggregateProductStatuses": [],
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
      params: Params$Resource$Accounts$Aggregateproductstatuses$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Aggregateproductstatuses$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListAggregateProductStatusesResponse>
    >;
    list(
      params: Params$Resource$Accounts$Aggregateproductstatuses$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Aggregateproductstatuses$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAggregateProductStatusesResponse>,
      callback: BodyResponseCallback<Schema$ListAggregateProductStatusesResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Aggregateproductstatuses$List,
      callback: BodyResponseCallback<Schema$ListAggregateProductStatusesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAggregateProductStatusesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Aggregateproductstatuses$List
        | BodyResponseCallback<Schema$ListAggregateProductStatusesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAggregateProductStatusesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAggregateProductStatusesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListAggregateProductStatusesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Aggregateproductstatuses$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Aggregateproductstatuses$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/issueresolution/v1beta/{+parent}/aggregateProductStatuses'
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
        createAPIRequest<Schema$ListAggregateProductStatusesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAggregateProductStatusesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Aggregateproductstatuses$List
    extends StandardParameters {
    /**
     * Optional. A filter expression that filters the aggregate product statuses. Filtering is only supported by the `reporting_context` and `country` field. For example: `reporting_context = "SHOPPING_ADS" AND country = "US"`.
     */
    filter?: string;
    /**
     * Optional. The maximum number of aggregate product statuses to return. The service may return fewer than this value. If unspecified, at most 25 aggregate product statuses are returned. The maximum value is 250; values above 250 are coerced to 250.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListAggregateProductStatuses` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAggregateProductStatuses` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The account to list aggregate product statuses for. Format: `accounts/{account\}`
     */
    parent?: string;
  }

  export class Resource$Issueresolution {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Provide a list of business's account issues with an issue resolution content and available actions. This content and actions are meant to be rendered and shown in third-party applications.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const merchantapi = google.merchantapi('issueresolution_v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await merchantapi.issueresolution.renderaccountissues({
     *     // Optional. The [IETF BCP-47](https://tools.ietf.org/html/bcp47) language code used to localize issue resolution content. If not set, the result will be in default language `en-US`.
     *     languageCode: 'placeholder-value',
     *     // Required. The account to fetch issues for. Format: `accounts/{account\}`
     *     name: 'accounts/my-account',
     *     // Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in an issue resolution content. For example 'America/Los_Angeles'. If not set, results will use as a default UTC.
     *     timeZone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentOption": "my_contentOption",
     *       //   "userInputActionOption": "my_userInputActionOption"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "renderedIssues": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    renderaccountissues(
      params: Params$Resource$Issueresolution$Renderaccountissues,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    renderaccountissues(
      params?: Params$Resource$Issueresolution$Renderaccountissues,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RenderAccountIssuesResponse>>;
    renderaccountissues(
      params: Params$Resource$Issueresolution$Renderaccountissues,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    renderaccountissues(
      params: Params$Resource$Issueresolution$Renderaccountissues,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RenderAccountIssuesResponse>,
      callback: BodyResponseCallback<Schema$RenderAccountIssuesResponse>
    ): void;
    renderaccountissues(
      params: Params$Resource$Issueresolution$Renderaccountissues,
      callback: BodyResponseCallback<Schema$RenderAccountIssuesResponse>
    ): void;
    renderaccountissues(
      callback: BodyResponseCallback<Schema$RenderAccountIssuesResponse>
    ): void;
    renderaccountissues(
      paramsOrCallback?:
        | Params$Resource$Issueresolution$Renderaccountissues
        | BodyResponseCallback<Schema$RenderAccountIssuesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RenderAccountIssuesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RenderAccountIssuesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RenderAccountIssuesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Issueresolution$Renderaccountissues;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Issueresolution$Renderaccountissues;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/issueresolution/v1beta/{+name}:renderaccountissues'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RenderAccountIssuesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RenderAccountIssuesResponse>(parameters);
      }
    }

    /**
     * Provide a list of issues for business's product with an issue resolution content and available actions. This content and actions are meant to be rendered and shown in third-party applications.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const merchantapi = google.merchantapi('issueresolution_v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await merchantapi.issueresolution.renderproductissues({
     *     // Optional. The [IETF BCP-47](https://tools.ietf.org/html/bcp47) language code used to localize an issue resolution content. If not set, the result will be in default language `en-US`.
     *     languageCode: 'placeholder-value',
     *     // Required. The name of the product to fetch issues for. Format: `accounts/{account\}/products/{product\}`
     *     name: 'accounts/my-account/products/my-product',
     *     // Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in an issue resolution content. For example 'America/Los_Angeles'. If not set, results will use as a default UTC.
     *     timeZone: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentOption": "my_contentOption",
     *       //   "userInputActionOption": "my_userInputActionOption"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "renderedIssues": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    renderproductissues(
      params: Params$Resource$Issueresolution$Renderproductissues,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    renderproductissues(
      params?: Params$Resource$Issueresolution$Renderproductissues,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RenderProductIssuesResponse>>;
    renderproductissues(
      params: Params$Resource$Issueresolution$Renderproductissues,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    renderproductissues(
      params: Params$Resource$Issueresolution$Renderproductissues,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RenderProductIssuesResponse>,
      callback: BodyResponseCallback<Schema$RenderProductIssuesResponse>
    ): void;
    renderproductissues(
      params: Params$Resource$Issueresolution$Renderproductissues,
      callback: BodyResponseCallback<Schema$RenderProductIssuesResponse>
    ): void;
    renderproductissues(
      callback: BodyResponseCallback<Schema$RenderProductIssuesResponse>
    ): void;
    renderproductissues(
      paramsOrCallback?:
        | Params$Resource$Issueresolution$Renderproductissues
        | BodyResponseCallback<Schema$RenderProductIssuesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RenderProductIssuesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RenderProductIssuesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RenderProductIssuesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Issueresolution$Renderproductissues;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Issueresolution$Renderproductissues;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/issueresolution/v1beta/{+name}:renderproductissues'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RenderProductIssuesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RenderProductIssuesResponse>(parameters);
      }
    }

    /**
     * Start an action. The action can be requested by a business in third-party application. Before the business can request the action, the third-party application needs to show them action specific content and display a user input form. The action can be successfully started only once all `required` inputs are provided. If any `required` input is missing, or invalid value was provided, the service will return 400 error. Validation errors will contain Ids for all problematic field together with translated, human readable error messages that can be shown to the user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const merchantapi = google.merchantapi('issueresolution_v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await merchantapi.issueresolution.triggeraction({
     *     // Optional. Language code [IETF BCP 47 syntax](https://tools.ietf.org/html/bcp47) used to localize the response. If not set, the result will be in default language `en-US`.
     *     languageCode: 'placeholder-value',
     *     // Required. The business's account that is triggering the action. Format: `accounts/{account\}`
     *     name: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "actionContext": "my_actionContext",
     *       //   "actionInput": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "message": "my_message"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    triggeraction(
      params: Params$Resource$Issueresolution$Triggeraction,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    triggeraction(
      params?: Params$Resource$Issueresolution$Triggeraction,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TriggerActionResponse>>;
    triggeraction(
      params: Params$Resource$Issueresolution$Triggeraction,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    triggeraction(
      params: Params$Resource$Issueresolution$Triggeraction,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TriggerActionResponse>,
      callback: BodyResponseCallback<Schema$TriggerActionResponse>
    ): void;
    triggeraction(
      params: Params$Resource$Issueresolution$Triggeraction,
      callback: BodyResponseCallback<Schema$TriggerActionResponse>
    ): void;
    triggeraction(
      callback: BodyResponseCallback<Schema$TriggerActionResponse>
    ): void;
    triggeraction(
      paramsOrCallback?:
        | Params$Resource$Issueresolution$Triggeraction
        | BodyResponseCallback<Schema$TriggerActionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TriggerActionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TriggerActionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TriggerActionResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Issueresolution$Triggeraction;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Issueresolution$Triggeraction;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/issueresolution/v1beta/{+name}:triggeraction'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$TriggerActionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TriggerActionResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Issueresolution$Renderaccountissues
    extends StandardParameters {
    /**
     * Optional. The [IETF BCP-47](https://tools.ietf.org/html/bcp47) language code used to localize issue resolution content. If not set, the result will be in default language `en-US`.
     */
    languageCode?: string;
    /**
     * Required. The account to fetch issues for. Format: `accounts/{account\}`
     */
    name?: string;
    /**
     * Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in an issue resolution content. For example 'America/Los_Angeles'. If not set, results will use as a default UTC.
     */
    timeZone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RenderIssuesRequestPayload;
  }
  export interface Params$Resource$Issueresolution$Renderproductissues
    extends StandardParameters {
    /**
     * Optional. The [IETF BCP-47](https://tools.ietf.org/html/bcp47) language code used to localize an issue resolution content. If not set, the result will be in default language `en-US`.
     */
    languageCode?: string;
    /**
     * Required. The name of the product to fetch issues for. Format: `accounts/{account\}/products/{product\}`
     */
    name?: string;
    /**
     * Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in an issue resolution content. For example 'America/Los_Angeles'. If not set, results will use as a default UTC.
     */
    timeZone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RenderIssuesRequestPayload;
  }
  export interface Params$Resource$Issueresolution$Triggeraction
    extends StandardParameters {
    /**
     * Optional. Language code [IETF BCP 47 syntax](https://tools.ietf.org/html/bcp47) used to localize the response. If not set, the result will be in default language `en-US`.
     */
    languageCode?: string;
    /**
     * Required. The business's account that is triggering the action. Format: `accounts/{account\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TriggerActionPayload;
  }
}
