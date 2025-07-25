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

export namespace forms_v1 {
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
   * Google Forms API
   *
   * Reads and writes Google Forms and responses.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const forms = google.forms('v1');
   * ```
   */
  export class Forms {
    context: APIRequestContext;
    forms: Resource$Forms;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.forms = new Resource$Forms(this.context);
    }
  }

  /**
   * The submitted answer for a question.
   */
  export interface Schema$Answer {
    /**
     * Output only. The answers to a file upload question.
     */
    fileUploadAnswers?: Schema$FileUploadAnswers;
    /**
     * Output only. The grade for the answer if the form was a quiz.
     */
    grade?: Schema$Grade;
    /**
     * Output only. The question's ID. See also Question.question_id.
     */
    questionId?: string | null;
    /**
     * Output only. The specific answers as text.
     */
    textAnswers?: Schema$TextAnswers;
  }
  /**
   * A batch of updates to perform on a form. All the specified updates are made or none of them are.
   */
  export interface Schema$BatchUpdateFormRequest {
    /**
     * Whether to return an updated version of the model in the response.
     */
    includeFormInResponse?: boolean | null;
    /**
     * Required. The update requests of this batch.
     */
    requests?: Schema$Request[];
    /**
     * Provides control over how write requests are executed.
     */
    writeControl?: Schema$WriteControl;
  }
  /**
   * Response to a BatchUpdateFormRequest.
   */
  export interface Schema$BatchUpdateFormResponse {
    /**
     * Based on the bool request field `include_form_in_response`, a form with all applied mutations/updates is returned or not. This may be later than the revision ID created by these changes.
     */
    form?: Schema$Form;
    /**
     * The reply of the updates. This maps 1:1 with the update requests, although replies to some requests may be empty.
     */
    replies?: Schema$Response[];
    /**
     * The updated write control after applying the request.
     */
    writeControl?: Schema$WriteControl;
  }
  /**
   * A radio/checkbox/dropdown question.
   */
  export interface Schema$ChoiceQuestion {
    /**
     * Required. List of options that a respondent must choose from.
     */
    options?: Schema$Option[];
    /**
     * Whether the options should be displayed in random order for different instances of the quiz. This is often used to prevent cheating by respondents who might be looking at another respondent's screen, or to address bias in a survey that might be introduced by always putting the same options first or last.
     */
    shuffle?: boolean | null;
    /**
     * Required. The type of choice question.
     */
    type?: string | null;
  }
  /**
   * A Pub/Sub topic.
   */
  export interface Schema$CloudPubsubTopic {
    /**
     * Required. A fully qualified Pub/Sub topic name to publish the events to. This topic must be owned by the calling project and already exist in Pub/Sub.
     */
    topicName?: string | null;
  }
  /**
   * A single correct answer for a question. For multiple-valued (`CHECKBOX`) questions, several `CorrectAnswer`s may be needed to represent a single correct response option.
   */
  export interface Schema$CorrectAnswer {
    /**
     * Required. The correct answer value. See the documentation for TextAnswer.value for details on how various value types are formatted.
     */
    value?: string | null;
  }
  /**
   * The answer key for a question.
   */
  export interface Schema$CorrectAnswers {
    /**
     * A list of correct answers. A quiz response can be automatically graded based on these answers. For single-valued questions, a response is marked correct if it matches any value in this list (in other words, multiple correct answers are possible). For multiple-valued (`CHECKBOX`) questions, a response is marked correct if it contains exactly the values in this list.
     */
    answers?: Schema$CorrectAnswer[];
  }
  /**
   * Create an item in a form.
   */
  export interface Schema$CreateItemRequest {
    /**
     * Required. The item to create.
     */
    item?: Schema$Item;
    /**
     * Required. Where to place the new item.
     */
    location?: Schema$Location;
  }
  /**
   * The result of creating an item.
   */
  export interface Schema$CreateItemResponse {
    /**
     * The ID of the created item.
     */
    itemId?: string | null;
    /**
     * The ID of the question created as part of this item, for a question group it lists IDs of all the questions created for this item.
     */
    questionId?: string[] | null;
  }
  /**
   * Create a new watch.
   */
  export interface Schema$CreateWatchRequest {
    /**
     * Required. The watch object. No ID should be set on this object; use `watch_id` instead.
     */
    watch?: Schema$Watch;
    /**
     * The ID to use for the watch. If specified, the ID must not already be in use. If not specified, an ID is generated. This value should be 4-63 characters, and valid characters are /a-z-/.
     */
    watchId?: string | null;
  }
  /**
   * A date question. Date questions default to just month + day.
   */
  export interface Schema$DateQuestion {
    /**
     * Whether to include the time as part of the question.
     */
    includeTime?: boolean | null;
    /**
     * Whether to include the year as part of the question.
     */
    includeYear?: boolean | null;
  }
  /**
   * Delete an item in a form.
   */
  export interface Schema$DeleteItemRequest {
    /**
     * Required. The location of the item to delete.
     */
    location?: Schema$Location;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Supplementary material to the feedback.
   */
  export interface Schema$ExtraMaterial {
    /**
     * Text feedback.
     */
    link?: Schema$TextLink;
    /**
     * Video feedback.
     */
    video?: Schema$VideoLink;
  }
  /**
   * Feedback for a respondent about their response to a question.
   */
  export interface Schema$Feedback {
    /**
     * Additional information provided as part of the feedback, often used to point the respondent to more reading and resources.
     */
    material?: Schema$ExtraMaterial[];
    /**
     * Required. The main text of the feedback.
     */
    text?: string | null;
  }
  /**
   * Info for a single file submitted to a file upload question.
   */
  export interface Schema$FileUploadAnswer {
    /**
     * Output only. The ID of the Google Drive file.
     */
    fileId?: string | null;
    /**
     * Output only. The file name, as stored in Google Drive on upload.
     */
    fileName?: string | null;
    /**
     * Output only. The MIME type of the file, as stored in Google Drive on upload.
     */
    mimeType?: string | null;
  }
  /**
   * All submitted files for a FileUpload question.
   */
  export interface Schema$FileUploadAnswers {
    /**
     * Output only. All submitted files for a FileUpload question.
     */
    answers?: Schema$FileUploadAnswer[];
  }
  /**
   * A file upload question. The API currently does not support creating file upload questions.
   */
  export interface Schema$FileUploadQuestion {
    /**
     * Required. The ID of the Drive folder where uploaded files are stored.
     */
    folderId?: string | null;
    /**
     * Maximum number of files that can be uploaded for this question in a single response.
     */
    maxFiles?: number | null;
    /**
     * Maximum number of bytes allowed for any single file uploaded to this question.
     */
    maxFileSize?: string | null;
    /**
     * File types accepted by this question.
     */
    types?: string[] | null;
  }
  /**
   * A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk).
   */
  export interface Schema$Form {
    /**
     * Output only. The form ID.
     */
    formId?: string | null;
    /**
     * Required. The title and description of the form.
     */
    info?: Schema$Info;
    /**
     * Required. A list of the form's items, which can include section headers, questions, embedded media, etc.
     */
    items?: Schema$Item[];
    /**
     * Output only. The ID of the linked Google Sheet which is accumulating responses from this Form (if such a Sheet exists).
     */
    linkedSheetId?: string | null;
    /**
     * Output only. The publishing settings for a form. This field isn't set for legacy forms because they don't have the publish_settings field. All newly created forms support publish settings. Forms with publish_settings value set can call SetPublishSettings API to publish or unpublish the form.
     */
    publishSettings?: Schema$PublishSettings;
    /**
     * Output only. The form URI to share with responders. This opens a page that allows the user to submit responses but not edit the questions. For forms that have publish_settings value set, this is the published form URI.
     */
    responderUri?: string | null;
    /**
     * Output only. The revision ID of the form. Used in the WriteControl in update requests to identify the revision on which the changes are based. The format of the revision ID may change over time, so it should be treated opaquely. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the form *content* has not changed. Conversely, a changed ID (for the same form and user) usually means the form *content* has been updated; however, a changed ID can also be due to internal factors such as ID format changes. Form content excludes form metadata, including: * sharing settings (who has access to the form) * publish_settings (if the form supports publishing and if it is published)
     */
    revisionId?: string | null;
    /**
     * The form's settings. This must be updated with UpdateSettingsRequest; it is ignored during CreateForm and UpdateFormInfoRequest.
     */
    settings?: Schema$FormSettings;
  }
  /**
   * A form response.
   */
  export interface Schema$FormResponse {
    /**
     * Output only. The actual answers to the questions, keyed by question_id.
     */
    answers?: {[key: string]: Schema$Answer} | null;
    /**
     * Output only. Timestamp for the first time the response was submitted.
     */
    createTime?: string | null;
    /**
     * Output only. The form ID.
     */
    formId?: string | null;
    /**
     * Output only. Timestamp for the most recent time the response was submitted. Does not track changes to grades.
     */
    lastSubmittedTime?: string | null;
    /**
     * Output only. The email address (if collected) for the respondent.
     */
    respondentEmail?: string | null;
    /**
     * Output only. The response ID.
     */
    responseId?: string | null;
    /**
     * Output only. The total number of points the respondent received for their submission Only set if the form was a quiz and the response was graded. This includes points automatically awarded via autograding adjusted by any manual corrections entered by the form owner.
     */
    totalScore?: number | null;
  }
  /**
   * A form's settings.
   */
  export interface Schema$FormSettings {
    /**
     * Optional. The setting that determines whether the form collects email addresses from respondents.
     */
    emailCollectionType?: string | null;
    /**
     * Settings related to quiz forms and grading.
     */
    quizSettings?: Schema$QuizSettings;
  }
  /**
   * Grade information associated with a respondent's answer to a question.
   */
  export interface Schema$Grade {
    /**
     * Output only. Whether the question was answered correctly or not. A zero-point score is not enough to infer incorrectness, since a correctly answered question could be worth zero points.
     */
    correct?: boolean | null;
    /**
     * Output only. Additional feedback given for an answer.
     */
    feedback?: Schema$Feedback;
    /**
     * Output only. The numeric score awarded for the answer.
     */
    score?: number | null;
  }
  /**
   * Grading for a single question
   */
  export interface Schema$Grading {
    /**
     * Required. The answer key for the question. Responses are automatically graded based on this field.
     */
    correctAnswers?: Schema$CorrectAnswers;
    /**
     * The feedback displayed for all answers. This is commonly used for short answer questions when a quiz owner wants to quickly give respondents some sense of whether they answered the question correctly before they've had a chance to officially grade the response. General feedback cannot be set for automatically graded multiple choice questions.
     */
    generalFeedback?: Schema$Feedback;
    /**
     * Required. The maximum number of points a respondent can automatically get for a correct answer. This must not be negative.
     */
    pointValue?: number | null;
    /**
     * The feedback displayed for correct responses. This feedback can only be set for multiple choice questions that have correct answers provided.
     */
    whenRight?: Schema$Feedback;
    /**
     * The feedback displayed for incorrect responses. This feedback can only be set for multiple choice questions that have correct answers provided.
     */
    whenWrong?: Schema$Feedback;
  }
  /**
   * A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns.
   */
  export interface Schema$Grid {
    /**
     * Required. The choices shared by each question in the grid. In other words, the values of the columns. Only `CHECK_BOX` and `RADIO` choices are allowed.
     */
    columns?: Schema$ChoiceQuestion;
    /**
     * If `true`, the questions are randomly ordered. In other words, the rows appear in a different order for every respondent.
     */
    shuffleQuestions?: boolean | null;
  }
  /**
   * Data representing an image.
   */
  export interface Schema$Image {
    /**
     * A description of the image that is shown on hover and read by screenreaders.
     */
    altText?: string | null;
    /**
     * Output only. A URI from which you can download the image; this is valid only for a limited time.
     */
    contentUri?: string | null;
    /**
     * Properties of an image.
     */
    properties?: Schema$MediaProperties;
    /**
     * Input only. The source URI is the URI used to insert the image. The source URI can be empty when fetched.
     */
    sourceUri?: string | null;
  }
  /**
   * An item containing an image.
   */
  export interface Schema$ImageItem {
    /**
     * Required. The image displayed in the item.
     */
    image?: Schema$Image;
  }
  /**
   * The general information for a form.
   */
  export interface Schema$Info {
    /**
     * The description of the form.
     */
    description?: string | null;
    /**
     * Output only. The title of the document which is visible in Drive. If Info.title is empty, `document_title` may appear in its place in the Google Forms UI and be visible to responders. `document_title` can be set on create, but cannot be modified by a batchUpdate request. Please use the [Google Drive API](https://developers.google.com/drive/api/v3/reference/files/update) if you need to programmatically update `document_title`.
     */
    documentTitle?: string | null;
    /**
     * Required. The title of the form which is visible to responders.
     */
    title?: string | null;
  }
  /**
   * A single item of the form. `kind` defines which kind of item it is.
   */
  export interface Schema$Item {
    /**
     * The description of the item.
     */
    description?: string | null;
    /**
     * Displays an image on the page.
     */
    imageItem?: Schema$ImageItem;
    /**
     * The item ID. On creation, it can be provided but the ID must not be already used in the form. If not provided, a new ID is assigned.
     */
    itemId?: string | null;
    /**
     * Starts a new page with a title.
     */
    pageBreakItem?: Schema$PageBreakItem;
    /**
     * Poses one or more questions to the user with a single major prompt.
     */
    questionGroupItem?: Schema$QuestionGroupItem;
    /**
     * Poses a question to the user.
     */
    questionItem?: Schema$QuestionItem;
    /**
     * Displays a title and description on the page.
     */
    textItem?: Schema$TextItem;
    /**
     * The title of the item.
     */
    title?: string | null;
    /**
     * Displays a video on the page.
     */
    videoItem?: Schema$VideoItem;
  }
  /**
   * Response to a ListFormResponsesRequest.
   */
  export interface Schema$ListFormResponsesResponse {
    /**
     * If set, there are more responses. To get the next page of responses, provide this as `page_token` in a future request.
     */
    nextPageToken?: string | null;
    /**
     * The returned form responses. Note: The `formId` field is not returned in the `FormResponse` object for list requests.
     */
    responses?: Schema$FormResponse[];
  }
  /**
   * The response of a ListWatchesRequest.
   */
  export interface Schema$ListWatchesResponse {
    /**
     * The returned watches.
     */
    watches?: Schema$Watch[];
  }
  /**
   * A specific location in a form.
   */
  export interface Schema$Location {
    /**
     * The index of an item in the form. This must be in the range [0..*N*), where *N* is the number of items in the form.
     */
    index?: number | null;
  }
  /**
   * Properties of the media.
   */
  export interface Schema$MediaProperties {
    /**
     * Position of the media.
     */
    alignment?: string | null;
    /**
     * The width of the media in pixels. When the media is displayed, it is scaled to the smaller of this value or the width of the displayed form. The original aspect ratio of the media is preserved. If a width is not specified when the media is added to the form, it is set to the width of the media source. Width must be between 0 and 740, inclusive. Setting width to 0 or unspecified is only permitted when updating the media source.
     */
    width?: number | null;
  }
  /**
   * Move an item in a form.
   */
  export interface Schema$MoveItemRequest {
    /**
     * Required. The new location for the item.
     */
    newLocation?: Schema$Location;
    /**
     * Required. The location of the item to move.
     */
    originalLocation?: Schema$Location;
  }
  /**
   * An option for a Choice question.
   */
  export interface Schema$Option {
    /**
     * Section navigation type.
     */
    goToAction?: string | null;
    /**
     * Item ID of section header to go to.
     */
    goToSectionId?: string | null;
    /**
     * Display image as an option.
     */
    image?: Schema$Image;
    /**
     * Whether the option is "other". Currently only applies to `RADIO` and `CHECKBOX` choice types, but is not allowed in a QuestionGroupItem.
     */
    isOther?: boolean | null;
    /**
     * Required. The choice as presented to the user.
     */
    value?: string | null;
  }
  /**
   * A page break. The title and description of this item are shown at the top of the new page.
   */
  export interface Schema$PageBreakItem {}
  /**
   * The publishing settings of a form.
   */
  export interface Schema$PublishSettings {
    /**
     * Optional. The publishing state of a form. When updating `publish_state`, both `is_published` and `is_accepting_responses` must be set. However, setting `is_accepting_responses` to `true` and `is_published` to `false` isn't supported and returns an error.
     */
    publishState?: Schema$PublishState;
  }
  /**
   * The publishing state of a form.
   */
  export interface Schema$PublishState {
    /**
     * Required. Whether the form accepts responses. If `is_published` is set to `false`, this field is forced to `false`.
     */
    isAcceptingResponses?: boolean | null;
    /**
     * Required. Whether the form is published and visible to others.
     */
    isPublished?: boolean | null;
  }
  /**
   * Any question. The specific type of question is known by its `kind`.
   */
  export interface Schema$Question {
    /**
     * A respondent can choose from a pre-defined set of options.
     */
    choiceQuestion?: Schema$ChoiceQuestion;
    /**
     * A respondent can enter a date.
     */
    dateQuestion?: Schema$DateQuestion;
    /**
     * A respondent can upload one or more files.
     */
    fileUploadQuestion?: Schema$FileUploadQuestion;
    /**
     * Grading setup for the question.
     */
    grading?: Schema$Grading;
    /**
     * Read only. The question ID. On creation, it can be provided but the ID must not be already used in the form. If not provided, a new ID is assigned.
     */
    questionId?: string | null;
    /**
     * A respondent can choose a rating from a pre-defined set of icons.
     */
    ratingQuestion?: Schema$RatingQuestion;
    /**
     * Whether the question must be answered in order for a respondent to submit their response.
     */
    required?: boolean | null;
    /**
     * A row of a QuestionGroupItem.
     */
    rowQuestion?: Schema$RowQuestion;
    /**
     * A respondent can choose a number from a range.
     */
    scaleQuestion?: Schema$ScaleQuestion;
    /**
     * A respondent can enter a free text response.
     */
    textQuestion?: Schema$TextQuestion;
    /**
     * A respondent can enter a time.
     */
    timeQuestion?: Schema$TimeQuestion;
  }
  /**
   * Defines a question that comprises multiple questions grouped together.
   */
  export interface Schema$QuestionGroupItem {
    /**
     * The question group is a grid with rows of multiple choice questions that share the same options. When `grid` is set, all questions in the group must be of kind `row`.
     */
    grid?: Schema$Grid;
    /**
     * The image displayed within the question group above the specific questions.
     */
    image?: Schema$Image;
    /**
     * Required. A list of questions that belong in this question group. A question must only belong to one group. The `kind` of the group may affect what types of questions are allowed.
     */
    questions?: Schema$Question[];
  }
  /**
   * A form item containing a single question.
   */
  export interface Schema$QuestionItem {
    /**
     * The image displayed within the question.
     */
    image?: Schema$Image;
    /**
     * Required. The displayed question.
     */
    question?: Schema$Question;
  }
  /**
   * Settings related to quiz forms and grading. These must be updated with the UpdateSettingsRequest.
   */
  export interface Schema$QuizSettings {
    /**
     * Whether this form is a quiz or not. When true, responses are graded based on question Grading. Upon setting to false, all question Grading is deleted.
     */
    isQuiz?: boolean | null;
  }
  /**
   * A rating question. The user has a range of icons to choose from.
   */
  export interface Schema$RatingQuestion {
    /**
     * Required. The icon type to use for the rating.
     */
    iconType?: string | null;
    /**
     * Required. The rating scale level of the rating question.
     */
    ratingScaleLevel?: number | null;
  }
  /**
   * Renew an existing Watch for seven days.
   */
  export interface Schema$RenewWatchRequest {}
  /**
   * The kinds of update requests that can be made.
   */
  export interface Schema$Request {
    /**
     * Create a new item.
     */
    createItem?: Schema$CreateItemRequest;
    /**
     * Delete an item.
     */
    deleteItem?: Schema$DeleteItemRequest;
    /**
     * Move an item to a specified location.
     */
    moveItem?: Schema$MoveItemRequest;
    /**
     * Update Form's Info.
     */
    updateFormInfo?: Schema$UpdateFormInfoRequest;
    /**
     * Update an item.
     */
    updateItem?: Schema$UpdateItemRequest;
    /**
     * Updates the Form's settings.
     */
    updateSettings?: Schema$UpdateSettingsRequest;
  }
  /**
   * A single response from an update.
   */
  export interface Schema$Response {
    /**
     * The result of creating an item.
     */
    createItem?: Schema$CreateItemResponse;
  }
  /**
   * Configuration for a question that is part of a question group.
   */
  export interface Schema$RowQuestion {
    /**
     * Required. The title for the single row in the QuestionGroupItem.
     */
    title?: string | null;
  }
  /**
   * A scale question. The user has a range of numeric values to choose from.
   */
  export interface Schema$ScaleQuestion {
    /**
     * Required. The highest possible value for the scale.
     */
    high?: number | null;
    /**
     * The label to display describing the highest point on the scale.
     */
    highLabel?: string | null;
    /**
     * Required. The lowest possible value for the scale.
     */
    low?: number | null;
    /**
     * The label to display describing the lowest point on the scale.
     */
    lowLabel?: string | null;
  }
  /**
   * Updates the publish settings of a Form.
   */
  export interface Schema$SetPublishSettingsRequest {
    /**
     * Required. The desired publish settings to apply to the form.
     */
    publishSettings?: Schema$PublishSettings;
    /**
     * Optional. The `publish_settings` fields to update. This field mask accepts the following values: * `publish_state`: Updates or replaces all `publish_state` settings. * `"*"`: Updates or replaces all `publish_settings` fields.
     */
    updateMask?: string | null;
  }
  /**
   * The response of a SetPublishSettings request.
   */
  export interface Schema$SetPublishSettingsResponse {
    /**
     * Required. The ID of the Form. This is same as the Form.form_id field.
     */
    formId?: string | null;
    /**
     * The publish settings of the form.
     */
    publishSettings?: Schema$PublishSettings;
  }
  /**
   * An answer to a question represented as text.
   */
  export interface Schema$TextAnswer {
    /**
     * Output only. The answer value. Formatting used for different kinds of question: * ChoiceQuestion * `RADIO` or `DROP_DOWN`: A single string corresponding to the option that was selected. * `CHECKBOX`: Multiple strings corresponding to each option that was selected. * TextQuestion: The text that the user entered. * ScaleQuestion: A string containing the number that was selected. * DateQuestion * Without time or year: MM-DD e.g. "05-19" * With year: YYYY-MM-DD e.g. "1986-05-19" * With time: MM-DD HH:MM e.g. "05-19 14:51" * With year and time: YYYY-MM-DD HH:MM e.g. "1986-05-19 14:51" * TimeQuestion: String with time or duration in HH:MM format e.g. "14:51" * RowQuestion within QuestionGroupItem: The answer for each row of a QuestionGroupItem is represented as a separate Answer. Each will contain one string for `RADIO`-type choices or multiple strings for `CHECKBOX` choices.
     */
    value?: string | null;
  }
  /**
   * A question's answers as text.
   */
  export interface Schema$TextAnswers {
    /**
     * Output only. Answers to a question. For multiple-value ChoiceQuestions, each answer is a separate value.
     */
    answers?: Schema$TextAnswer[];
  }
  /**
   * A text item.
   */
  export interface Schema$TextItem {}
  /**
   * Link for text.
   */
  export interface Schema$TextLink {
    /**
     * Required. Display text for the URI.
     */
    displayText?: string | null;
    /**
     * Required. The URI.
     */
    uri?: string | null;
  }
  /**
   * A text-based question.
   */
  export interface Schema$TextQuestion {
    /**
     * Whether the question is a paragraph question or not. If not, the question is a short text question.
     */
    paragraph?: boolean | null;
  }
  /**
   * A time question.
   */
  export interface Schema$TimeQuestion {
    /**
     * `true` if the question is about an elapsed time. Otherwise it is about a time of day.
     */
    duration?: boolean | null;
  }
  /**
   * Update Form's Info.
   */
  export interface Schema$UpdateFormInfoRequest {
    /**
     * The info to update.
     */
    info?: Schema$Info;
    /**
     * Required. Only values named in this mask are changed. At least one field must be specified. The root `info` is implied and should not be specified. A single `"*"` can be used as short-hand for updating every field.
     */
    updateMask?: string | null;
  }
  /**
   * Update an item in a form.
   */
  export interface Schema$UpdateItemRequest {
    /**
     * Required. New values for the item. Note that item and question IDs are used if they are provided (and are in the field mask). If an ID is blank (and in the field mask) a new ID is generated. This means you can modify an item by getting the form via forms.get, modifying your local copy of that item to be how you want it, and using UpdateItemRequest to write it back, with the IDs being the same (or not in the field mask).
     */
    item?: Schema$Item;
    /**
     * Required. The location identifying the item to update.
     */
    location?: Schema$Location;
    /**
     * Required. Only values named in this mask are changed.
     */
    updateMask?: string | null;
  }
  /**
   * Update Form's FormSettings.
   */
  export interface Schema$UpdateSettingsRequest {
    /**
     * Required. The settings to update with.
     */
    settings?: Schema$FormSettings;
    /**
     * Required. Only values named in this mask are changed. At least one field must be specified. The root `settings` is implied and should not be specified. A single `"*"` can be used as short-hand for updating every field.
     */
    updateMask?: string | null;
  }
  /**
   * Data representing a video.
   */
  export interface Schema$Video {
    /**
     * Properties of a video.
     */
    properties?: Schema$MediaProperties;
    /**
     * Required. A YouTube URI.
     */
    youtubeUri?: string | null;
  }
  /**
   * An item containing a video.
   */
  export interface Schema$VideoItem {
    /**
     * The text displayed below the video.
     */
    caption?: string | null;
    /**
     * Required. The video displayed in the item.
     */
    video?: Schema$Video;
  }
  /**
   * Link to a video.
   */
  export interface Schema$VideoLink {
    /**
     * Required. The display text for the link.
     */
    displayText?: string | null;
    /**
     * The URI of a YouTube video.
     */
    youtubeUri?: string | null;
  }
  /**
   * A watch for events for a form. When the designated event happens, a notification will be published to the specified target. The notification's attributes will include a `formId` key that has the ID of the watched form and an `eventType` key that has the string of the type. Messages are sent with at-least-once delivery and are only dropped in extraordinary circumstances. Typically all notifications should be reliably delivered within a few seconds; however, in some situations notifications may be delayed. A watch expires seven days after it is created unless it is renewed with watches.renew
   */
  export interface Schema$Watch {
    /**
     * Output only. Timestamp of when this was created.
     */
    createTime?: string | null;
    /**
     * Output only. The most recent error type for an attempted delivery. To begin watching the form again a call can be made to watches.renew which also clears this error information.
     */
    errorType?: string | null;
    /**
     * Required. Which event type to watch for.
     */
    eventType?: string | null;
    /**
     * Output only. Timestamp for when this will expire. Each watches.renew call resets this to seven days in the future.
     */
    expireTime?: string | null;
    /**
     * Output only. The ID of this watch. See notes on CreateWatchRequest.watch_id.
     */
    id?: string | null;
    /**
     * Output only. The current state of the watch. Additional details about suspended watches can be found by checking the `error_type`.
     */
    state?: string | null;
    /**
     * Required. Where to send the notification.
     */
    target?: Schema$WatchTarget;
  }
  /**
   * The target for notification delivery.
   */
  export interface Schema$WatchTarget {
    /**
     * A Pub/Sub topic. To receive notifications, the topic must grant publish privileges to the Forms service account `serviceAccount:forms-notifications@system.gserviceaccount.com`. Only the project that owns a topic may create a watch with it. Pub/Sub delivery guarantees should be considered.
     */
    topic?: Schema$CloudPubsubTopic;
  }
  /**
   * Provides control over how write requests are executed.
   */
  export interface Schema$WriteControl {
    /**
     * The revision ID of the form that the write request is applied to. If this is not the latest revision of the form, the request is not processed and returns a 400 bad request error.
     */
    requiredRevisionId?: string | null;
    /**
     * The target revision ID of the form that the write request is applied to. If changes have occurred after this revision, the changes in this update request are transformed against those changes. This results in a new revision of the form that incorporates both the changes in the request and the intervening changes, with the server resolving conflicting changes. The target revision ID may only be used to write to recent versions of a form. If the target revision is too far behind the latest revision, the request is not processed and returns a 400 (Bad Request Error). The request may be retried after reading the latest version of the form. In most cases a target revision ID remains valid for several minutes after it is read, but for frequently-edited forms this window may be shorter.
     */
    targetRevisionId?: string | null;
  }

  export class Resource$Forms {
    context: APIRequestContext;
    responses: Resource$Forms$Responses;
    watches: Resource$Forms$Watches;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.responses = new Resource$Forms$Responses(this.context);
      this.watches = new Resource$Forms$Watches(this.context);
    }

    /**
     * Change the form with a batch of updates.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/forms.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const forms = google.forms('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/forms.body',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await forms.forms.batchUpdate({
     *     // Required. The form ID.
     *     formId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "includeFormInResponse": false,
     *       //   "requests": [],
     *       //   "writeControl": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "form": {},
     *   //   "replies": [],
     *   //   "writeControl": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchUpdate(
      params: Params$Resource$Forms$Batchupdate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchUpdate(
      params?: Params$Resource$Forms$Batchupdate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchUpdateFormResponse>>;
    batchUpdate(
      params: Params$Resource$Forms$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Forms$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchUpdateFormResponse>,
      callback: BodyResponseCallback<Schema$BatchUpdateFormResponse>
    ): void;
    batchUpdate(
      params: Params$Resource$Forms$Batchupdate,
      callback: BodyResponseCallback<Schema$BatchUpdateFormResponse>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$BatchUpdateFormResponse>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Forms$Batchupdate
        | BodyResponseCallback<Schema$BatchUpdateFormResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchUpdateFormResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchUpdateFormResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchUpdateFormResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Forms$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Forms$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://forms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/forms/{formId}:batchUpdate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['formId'],
        pathParams: ['formId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchUpdateFormResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchUpdateFormResponse>(parameters);
      }
    }

    /**
     * Create a new form using the title given in the provided form message in the request. *Important:* Only the form.info.title and form.info.document_title fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call forms.create to create an empty form with a title and (optional) document title, and then call forms.update to add the items.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/forms.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const forms = google.forms('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/forms.body',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await forms.forms.create({
     *     // Optional. Whether the form is unpublished. If set to `true`, the form doesn't accept responses. If set to `false` or unset, the form is published and accepts responses.
     *     unpublished: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "formId": "my_formId",
     *       //   "info": {},
     *       //   "items": [],
     *       //   "linkedSheetId": "my_linkedSheetId",
     *       //   "publishSettings": {},
     *       //   "responderUri": "my_responderUri",
     *       //   "revisionId": "my_revisionId",
     *       //   "settings": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "formId": "my_formId",
     *   //   "info": {},
     *   //   "items": [],
     *   //   "linkedSheetId": "my_linkedSheetId",
     *   //   "publishSettings": {},
     *   //   "responderUri": "my_responderUri",
     *   //   "revisionId": "my_revisionId",
     *   //   "settings": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Forms$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Forms$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Form>>;
    create(
      params: Params$Resource$Forms$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Forms$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Form>,
      callback: BodyResponseCallback<Schema$Form>
    ): void;
    create(
      params: Params$Resource$Forms$Create,
      callback: BodyResponseCallback<Schema$Form>
    ): void;
    create(callback: BodyResponseCallback<Schema$Form>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Forms$Create
        | BodyResponseCallback<Schema$Form>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Form>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Form>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Form>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Forms$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Forms$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://forms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/forms').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Form>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Form>(parameters);
      }
    }

    /**
     * Get a form.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/forms.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const forms = google.forms('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *       'https://www.googleapis.com/auth/forms.body',
     *       'https://www.googleapis.com/auth/forms.body.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await forms.forms.get({
     *     // Required. The form ID.
     *     formId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "formId": "my_formId",
     *   //   "info": {},
     *   //   "items": [],
     *   //   "linkedSheetId": "my_linkedSheetId",
     *   //   "publishSettings": {},
     *   //   "responderUri": "my_responderUri",
     *   //   "revisionId": "my_revisionId",
     *   //   "settings": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Forms$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Forms$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Form>>;
    get(
      params: Params$Resource$Forms$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Forms$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Form>,
      callback: BodyResponseCallback<Schema$Form>
    ): void;
    get(
      params: Params$Resource$Forms$Get,
      callback: BodyResponseCallback<Schema$Form>
    ): void;
    get(callback: BodyResponseCallback<Schema$Form>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Forms$Get
        | BodyResponseCallback<Schema$Form>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Form>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Form>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Form>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Forms$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Forms$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://forms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/forms/{formId}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['formId'],
        pathParams: ['formId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Form>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Form>(parameters);
      }
    }

    /**
     * Updates the publish settings of a form. Legacy forms aren't supported because they don't have the `publish_settings` field.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/forms.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const forms = google.forms('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/forms.body',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await forms.forms.setPublishSettings({
     *     // Required. The ID of the form. You can get the id from Form.form_id field.
     *     formId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "publishSettings": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "formId": "my_formId",
     *   //   "publishSettings": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setPublishSettings(
      params: Params$Resource$Forms$Setpublishsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setPublishSettings(
      params?: Params$Resource$Forms$Setpublishsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SetPublishSettingsResponse>>;
    setPublishSettings(
      params: Params$Resource$Forms$Setpublishsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setPublishSettings(
      params: Params$Resource$Forms$Setpublishsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SetPublishSettingsResponse>,
      callback: BodyResponseCallback<Schema$SetPublishSettingsResponse>
    ): void;
    setPublishSettings(
      params: Params$Resource$Forms$Setpublishsettings,
      callback: BodyResponseCallback<Schema$SetPublishSettingsResponse>
    ): void;
    setPublishSettings(
      callback: BodyResponseCallback<Schema$SetPublishSettingsResponse>
    ): void;
    setPublishSettings(
      paramsOrCallback?:
        | Params$Resource$Forms$Setpublishsettings
        | BodyResponseCallback<Schema$SetPublishSettingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SetPublishSettingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SetPublishSettingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SetPublishSettingsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Forms$Setpublishsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Forms$Setpublishsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://forms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/forms/{formId}:setPublishSettings').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['formId'],
        pathParams: ['formId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SetPublishSettingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SetPublishSettingsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Forms$Batchupdate
    extends StandardParameters {
    /**
     * Required. The form ID.
     */
    formId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchUpdateFormRequest;
  }
  export interface Params$Resource$Forms$Create extends StandardParameters {
    /**
     * Optional. Whether the form is unpublished. If set to `true`, the form doesn't accept responses. If set to `false` or unset, the form is published and accepts responses.
     */
    unpublished?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Form;
  }
  export interface Params$Resource$Forms$Get extends StandardParameters {
    /**
     * Required. The form ID.
     */
    formId?: string;
  }
  export interface Params$Resource$Forms$Setpublishsettings
    extends StandardParameters {
    /**
     * Required. The ID of the form. You can get the id from Form.form_id field.
     */
    formId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetPublishSettingsRequest;
  }

  export class Resource$Forms$Responses {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get one response from the form.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/forms.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const forms = google.forms('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/forms.responses.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await forms.forms.responses.get({
     *     // Required. The form ID.
     *     formId: 'placeholder-value',
     *     // Required. The response ID within the form.
     *     responseId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "answers": {},
     *   //   "createTime": "my_createTime",
     *   //   "formId": "my_formId",
     *   //   "lastSubmittedTime": "my_lastSubmittedTime",
     *   //   "respondentEmail": "my_respondentEmail",
     *   //   "responseId": "my_responseId",
     *   //   "totalScore": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Forms$Responses$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Forms$Responses$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$FormResponse>>;
    get(
      params: Params$Resource$Forms$Responses$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Forms$Responses$Get,
      options: MethodOptions | BodyResponseCallback<Schema$FormResponse>,
      callback: BodyResponseCallback<Schema$FormResponse>
    ): void;
    get(
      params: Params$Resource$Forms$Responses$Get,
      callback: BodyResponseCallback<Schema$FormResponse>
    ): void;
    get(callback: BodyResponseCallback<Schema$FormResponse>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Forms$Responses$Get
        | BodyResponseCallback<Schema$FormResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FormResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FormResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$FormResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Forms$Responses$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Forms$Responses$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://forms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/forms/{formId}/responses/{responseId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['formId', 'responseId'],
        pathParams: ['formId', 'responseId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FormResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FormResponse>(parameters);
      }
    }

    /**
     * List a form's responses.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/forms.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const forms = google.forms('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/forms.responses.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await forms.forms.responses.list({
     *     // Which form responses to return. Currently, the only supported filters are: * timestamp \> *N* which means to get all form responses submitted after (but not at) timestamp *N*. * timestamp \>= *N* which means to get all form responses submitted at and after timestamp *N*. For both supported filters, timestamp must be formatted in RFC3339 UTC "Zulu" format. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     *     filter: 'placeholder-value',
     *     // Required. ID of the Form whose responses to list.
     *     formId: 'placeholder-value',
     *     // The maximum number of responses to return. The service may return fewer than this value. If unspecified or zero, at most 5000 responses are returned.
     *     pageSize: 'placeholder-value',
     *     // A page token returned by a previous list response. If this field is set, the form and the values of the filter must be the same as for the original request.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "responses": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Forms$Responses$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Forms$Responses$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListFormResponsesResponse>>;
    list(
      params: Params$Resource$Forms$Responses$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Forms$Responses$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListFormResponsesResponse>,
      callback: BodyResponseCallback<Schema$ListFormResponsesResponse>
    ): void;
    list(
      params: Params$Resource$Forms$Responses$List,
      callback: BodyResponseCallback<Schema$ListFormResponsesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListFormResponsesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Forms$Responses$List
        | BodyResponseCallback<Schema$ListFormResponsesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListFormResponsesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListFormResponsesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListFormResponsesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Forms$Responses$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Forms$Responses$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://forms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/forms/{formId}/responses').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['formId'],
        pathParams: ['formId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListFormResponsesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListFormResponsesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Forms$Responses$Get
    extends StandardParameters {
    /**
     * Required. The form ID.
     */
    formId?: string;
    /**
     * Required. The response ID within the form.
     */
    responseId?: string;
  }
  export interface Params$Resource$Forms$Responses$List
    extends StandardParameters {
    /**
     * Which form responses to return. Currently, the only supported filters are: * timestamp \> *N* which means to get all form responses submitted after (but not at) timestamp *N*. * timestamp \>= *N* which means to get all form responses submitted at and after timestamp *N*. For both supported filters, timestamp must be formatted in RFC3339 UTC "Zulu" format. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    filter?: string;
    /**
     * Required. ID of the Form whose responses to list.
     */
    formId?: string;
    /**
     * The maximum number of responses to return. The service may return fewer than this value. If unspecified or zero, at most 5000 responses are returned.
     */
    pageSize?: number;
    /**
     * A page token returned by a previous list response. If this field is set, the form and the values of the filter must be the same as for the original request.
     */
    pageToken?: string;
  }

  export class Resource$Forms$Watches {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a new watch. If a watch ID is provided, it must be unused. For each invoking project, the per form limit is one watch per Watch.EventType. A watch expires seven days after it is created (see Watch.expire_time).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/forms.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const forms = google.forms('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *       'https://www.googleapis.com/auth/forms.body',
     *       'https://www.googleapis.com/auth/forms.body.readonly',
     *       'https://www.googleapis.com/auth/forms.responses.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await forms.forms.watches.create({
     *     // Required. ID of the Form to watch.
     *     formId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "watch": {},
     *       //   "watchId": "my_watchId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "errorType": "my_errorType",
     *   //   "eventType": "my_eventType",
     *   //   "expireTime": "my_expireTime",
     *   //   "id": "my_id",
     *   //   "state": "my_state",
     *   //   "target": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Forms$Watches$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Forms$Watches$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Watch>>;
    create(
      params: Params$Resource$Forms$Watches$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Forms$Watches$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Watch>,
      callback: BodyResponseCallback<Schema$Watch>
    ): void;
    create(
      params: Params$Resource$Forms$Watches$Create,
      callback: BodyResponseCallback<Schema$Watch>
    ): void;
    create(callback: BodyResponseCallback<Schema$Watch>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Forms$Watches$Create
        | BodyResponseCallback<Schema$Watch>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Watch>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Watch>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Watch>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Forms$Watches$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Forms$Watches$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://forms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/forms/{formId}/watches').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['formId'],
        pathParams: ['formId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Watch>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Watch>(parameters);
      }
    }

    /**
     * Delete a watch.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/forms.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const forms = google.forms('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *       'https://www.googleapis.com/auth/forms.body',
     *       'https://www.googleapis.com/auth/forms.body.readonly',
     *       'https://www.googleapis.com/auth/forms.responses.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await forms.forms.watches.delete({
     *     // Required. The ID of the Form.
     *     formId: 'placeholder-value',
     *     // Required. The ID of the Watch to delete.
     *     watchId: 'placeholder-value',
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
      params: Params$Resource$Forms$Watches$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Forms$Watches$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Forms$Watches$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Forms$Watches$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Forms$Watches$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Forms$Watches$Delete
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
        {}) as Params$Resource$Forms$Watches$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Forms$Watches$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://forms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/forms/{formId}/watches/{watchId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['formId', 'watchId'],
        pathParams: ['formId', 'watchId'],
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
     * Return a list of the watches owned by the invoking project. The maximum number of watches is two: For each invoker, the limit is one for each event type per form.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/forms.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const forms = google.forms('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *       'https://www.googleapis.com/auth/forms.body',
     *       'https://www.googleapis.com/auth/forms.body.readonly',
     *       'https://www.googleapis.com/auth/forms.responses.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await forms.forms.watches.list({
     *     // Required. ID of the Form whose watches to list.
     *     formId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "watches": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Forms$Watches$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Forms$Watches$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListWatchesResponse>>;
    list(
      params: Params$Resource$Forms$Watches$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Forms$Watches$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListWatchesResponse>,
      callback: BodyResponseCallback<Schema$ListWatchesResponse>
    ): void;
    list(
      params: Params$Resource$Forms$Watches$List,
      callback: BodyResponseCallback<Schema$ListWatchesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListWatchesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Forms$Watches$List
        | BodyResponseCallback<Schema$ListWatchesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListWatchesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListWatchesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListWatchesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Forms$Watches$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Forms$Watches$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://forms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/forms/{formId}/watches').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['formId'],
        pathParams: ['formId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListWatchesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListWatchesResponse>(parameters);
      }
    }

    /**
     * Renew an existing watch for seven days. The state of the watch after renewal is `ACTIVE`, and the `expire_time` is seven days from the renewal. Renewing a watch in an error state (e.g. `SUSPENDED`) succeeds if the error is no longer present, but fail otherwise. After a watch has expired, RenewWatch returns `NOT_FOUND`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/forms.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const forms = google.forms('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *       'https://www.googleapis.com/auth/forms.body',
     *       'https://www.googleapis.com/auth/forms.body.readonly',
     *       'https://www.googleapis.com/auth/forms.responses.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await forms.forms.watches.renew({
     *     // Required. The ID of the Form.
     *     formId: 'placeholder-value',
     *     // Required. The ID of the Watch to renew.
     *     watchId: 'placeholder-value',
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
     *   //   "createTime": "my_createTime",
     *   //   "errorType": "my_errorType",
     *   //   "eventType": "my_eventType",
     *   //   "expireTime": "my_expireTime",
     *   //   "id": "my_id",
     *   //   "state": "my_state",
     *   //   "target": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    renew(
      params: Params$Resource$Forms$Watches$Renew,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    renew(
      params?: Params$Resource$Forms$Watches$Renew,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Watch>>;
    renew(
      params: Params$Resource$Forms$Watches$Renew,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    renew(
      params: Params$Resource$Forms$Watches$Renew,
      options: MethodOptions | BodyResponseCallback<Schema$Watch>,
      callback: BodyResponseCallback<Schema$Watch>
    ): void;
    renew(
      params: Params$Resource$Forms$Watches$Renew,
      callback: BodyResponseCallback<Schema$Watch>
    ): void;
    renew(callback: BodyResponseCallback<Schema$Watch>): void;
    renew(
      paramsOrCallback?:
        | Params$Resource$Forms$Watches$Renew
        | BodyResponseCallback<Schema$Watch>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Watch>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Watch>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Watch>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Forms$Watches$Renew;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Forms$Watches$Renew;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://forms.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/forms/{formId}/watches/{watchId}:renew'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['formId', 'watchId'],
        pathParams: ['formId', 'watchId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Watch>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Watch>(parameters);
      }
    }
  }

  export interface Params$Resource$Forms$Watches$Create
    extends StandardParameters {
    /**
     * Required. ID of the Form to watch.
     */
    formId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateWatchRequest;
  }
  export interface Params$Resource$Forms$Watches$Delete
    extends StandardParameters {
    /**
     * Required. The ID of the Form.
     */
    formId?: string;
    /**
     * Required. The ID of the Watch to delete.
     */
    watchId?: string;
  }
  export interface Params$Resource$Forms$Watches$List
    extends StandardParameters {
    /**
     * Required. ID of the Form whose watches to list.
     */
    formId?: string;
  }
  export interface Params$Resource$Forms$Watches$Renew
    extends StandardParameters {
    /**
     * Required. The ID of the Form.
     */
    formId?: string;
    /**
     * Required. The ID of the Watch to renew.
     */
    watchId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RenewWatchRequest;
  }
}
