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

export namespace language_v1 {
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
   * Cloud Natural Language API
   *
   * Provides natural language understanding technologies, such as sentiment analysis, entity recognition, entity sentiment analysis, and other text annotations, to developers.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const language = google.language('v1');
   * ```
   */
  export class Language {
    context: APIRequestContext;
    documents: Resource$Documents;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.documents = new Resource$Documents(this.context);
    }
  }

  /**
   * The entity analysis request message.
   */
  export interface Schema$AnalyzeEntitiesRequest {
    /**
     * Required. Input document.
     */
    document?: Schema$Document;
    /**
     * The encoding type used by the API to calculate offsets.
     */
    encodingType?: string | null;
  }
  /**
   * The entity analysis response message.
   */
  export interface Schema$AnalyzeEntitiesResponse {
    /**
     * The recognized entities in the input document.
     */
    entities?: Schema$Entity[];
    /**
     * The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.
     */
    language?: string | null;
  }
  /**
   * The entity-level sentiment analysis request message.
   */
  export interface Schema$AnalyzeEntitySentimentRequest {
    /**
     * Required. Input document.
     */
    document?: Schema$Document;
    /**
     * The encoding type used by the API to calculate offsets.
     */
    encodingType?: string | null;
  }
  /**
   * The entity-level sentiment analysis response message.
   */
  export interface Schema$AnalyzeEntitySentimentResponse {
    /**
     * The recognized entities in the input document with associated sentiments.
     */
    entities?: Schema$Entity[];
    /**
     * The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.
     */
    language?: string | null;
  }
  /**
   * The sentiment analysis request message.
   */
  export interface Schema$AnalyzeSentimentRequest {
    /**
     * Required. Input document.
     */
    document?: Schema$Document;
    /**
     * The encoding type used by the API to calculate sentence offsets.
     */
    encodingType?: string | null;
  }
  /**
   * The sentiment analysis response message.
   */
  export interface Schema$AnalyzeSentimentResponse {
    /**
     * The overall sentiment of the input document.
     */
    documentSentiment?: Schema$Sentiment;
    /**
     * The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.
     */
    language?: string | null;
    /**
     * The sentiment for all the sentences in the document.
     */
    sentences?: Schema$Sentence[];
  }
  /**
   * The syntax analysis request message.
   */
  export interface Schema$AnalyzeSyntaxRequest {
    /**
     * Required. Input document.
     */
    document?: Schema$Document;
    /**
     * The encoding type used by the API to calculate offsets.
     */
    encodingType?: string | null;
  }
  /**
   * The syntax analysis response message.
   */
  export interface Schema$AnalyzeSyntaxResponse {
    /**
     * The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.
     */
    language?: string | null;
    /**
     * Sentences in the input document.
     */
    sentences?: Schema$Sentence[];
    /**
     * Tokens, along with their syntactic information, in the input document.
     */
    tokens?: Schema$Token[];
  }
  /**
   * The request message for the text annotation API, which can perform multiple analysis types (sentiment, entities, and syntax) in one call.
   */
  export interface Schema$AnnotateTextRequest {
    /**
     * Required. Input document.
     */
    document?: Schema$Document;
    /**
     * The encoding type used by the API to calculate offsets.
     */
    encodingType?: string | null;
    /**
     * Required. The enabled features.
     */
    features?: Schema$AnnotateTextRequestFeatures;
  }
  /**
   * All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input.
   */
  export interface Schema$AnnotateTextRequestFeatures {
    /**
     * Optional. The model options to use for classification. Defaults to v1 options if not specified. Only used if `classify_text` is set to true.
     */
    classificationModelOptions?: Schema$ClassificationModelOptions;
    /**
     * Classify the full document into categories.
     */
    classifyText?: boolean | null;
    /**
     * Extract document-level sentiment.
     */
    extractDocumentSentiment?: boolean | null;
    /**
     * Extract entities.
     */
    extractEntities?: boolean | null;
    /**
     * Extract entities and their associated sentiment.
     */
    extractEntitySentiment?: boolean | null;
    /**
     * Extract syntax information.
     */
    extractSyntax?: boolean | null;
    /**
     * Moderate the document for harmful and sensitive categories.
     */
    moderateText?: boolean | null;
  }
  /**
   * The text annotations response message.
   */
  export interface Schema$AnnotateTextResponse {
    /**
     * Categories identified in the input document.
     */
    categories?: Schema$ClassificationCategory[];
    /**
     * The overall sentiment for the document. Populated if the user enables AnnotateTextRequest.Features.extract_document_sentiment.
     */
    documentSentiment?: Schema$Sentiment;
    /**
     * Entities, along with their semantic information, in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_entities.
     */
    entities?: Schema$Entity[];
    /**
     * The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.
     */
    language?: string | null;
    /**
     * Harmful and sensitive categories identified in the input document.
     */
    moderationCategories?: Schema$ClassificationCategory[];
    /**
     * Sentences in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_syntax.
     */
    sentences?: Schema$Sentence[];
    /**
     * Tokens, along with their syntactic information, in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_syntax.
     */
    tokens?: Schema$Token[];
  }
  /**
   * Represents a category returned from the text classifier.
   */
  export interface Schema$ClassificationCategory {
    /**
     * The classifier's confidence of the category. Number represents how certain the classifier is that this category represents the given text.
     */
    confidence?: number | null;
    /**
     * The name of the category representing the document.
     */
    name?: string | null;
  }
  /**
   * Model options available for classification requests.
   */
  export interface Schema$ClassificationModelOptions {
    /**
     * Setting this field will use the V1 model and V1 content categories version. The V1 model is a legacy model; support for this will be discontinued in the future.
     */
    v1Model?: Schema$ClassificationModelOptionsV1Model;
    /**
     * Setting this field will use the V2 model with the appropriate content categories version. The V2 model is a better performing model.
     */
    v2Model?: Schema$ClassificationModelOptionsV2Model;
  }
  /**
   * Options for the V1 model.
   */
  export interface Schema$ClassificationModelOptionsV1Model {}
  /**
   * Options for the V2 model.
   */
  export interface Schema$ClassificationModelOptionsV2Model {
    /**
     * The content categories used for classification.
     */
    contentCategoriesVersion?: string | null;
  }
  /**
   * The document classification request message.
   */
  export interface Schema$ClassifyTextRequest {
    /**
     * Optional. Model options to use for classification. Defaults to v1 options if not specified.
     */
    classificationModelOptions?: Schema$ClassificationModelOptions;
    /**
     * Required. Input document.
     */
    document?: Schema$Document;
  }
  /**
   * The document classification response message.
   */
  export interface Schema$ClassifyTextResponse {
    /**
     * Categories representing the input document.
     */
    categories?: Schema$ClassificationCategory[];
  }
  /**
   * Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); \} public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); \} return resultBuilder.build(); \} // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; \} return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; \} static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; \} Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; \} [result autorelease]; return result; \} // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); \} var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); \}; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); \} resultBuilder.push(hexString); return resultBuilder.join(''); \}; // ...
   */
  export interface Schema$Color {
    /**
     * The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).
     */
    alpha?: number | null;
    /**
     * The amount of blue in the color as a value in the interval [0, 1].
     */
    blue?: number | null;
    /**
     * The amount of green in the color as a value in the interval [0, 1].
     */
    green?: number | null;
    /**
     * The amount of red in the color as a value in the interval [0, 1].
     */
    red?: number | null;
  }
  /**
   * Metric for billing reports.
   */
  export interface Schema$CpuMetric {
    /**
     * Required. Number of CPU cores.
     */
    coreNumber?: string | null;
    /**
     * Required. Total seconds of core usage, e.g. 4.
     */
    coreSec?: string | null;
    /**
     * Required. Type of cpu, e.g. N2.
     */
    cpuType?: string | null;
    /**
     * Required. Machine spec, e.g. N1_STANDARD_4.
     */
    machineSpec?: string | null;
    /**
     * Billing tracking labels. They do not contain any user data but only the labels set by Vertex Core Infra itself. Tracking labels' keys are defined with special format: goog-[\p{Ll\}\p{N\}]+ E.g. "key": "goog-k8s-cluster-name","value": "us-east1-b4rk"
     */
    trackingLabels?: {[key: string]: string} | null;
  }
  /**
   * Represents dependency parse tree information for a token. (For more information on dependency labels, see http://www.aclweb.org/anthology/P13-2017
   */
  export interface Schema$DependencyEdge {
    /**
     * Represents the head of this token in the dependency tree. This is the index of the token which has an arc going to this token. The index is the position of the token in the array of tokens returned by the API method. If this token is a root token, then the `head_token_index` is its own index.
     */
    headTokenIndex?: number | null;
    /**
     * The parse label for the token.
     */
    label?: string | null;
  }
  export interface Schema$DiskMetric {
    /**
     * Required. Type of Disk, e.g. REGIONAL_SSD.
     */
    diskType?: string | null;
    /**
     * Required. Seconds of physical disk usage, e.g. 3600.
     */
    gibSec?: string | null;
  }
  /**
   * Represents the input to API methods.
   */
  export interface Schema$Document {
    /**
     * The content of the input in string format. Cloud audit logging exempt since it is based on user data.
     */
    content?: string | null;
    /**
     * The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported.
     */
    gcsContentUri?: string | null;
    /**
     * The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. [Language Support](https://cloud.google.com/natural-language/docs/languages) lists currently supported languages for each API method. If the language (either specified by the caller or automatically detected) is not supported by the called API method, an `INVALID_ARGUMENT` error is returned.
     */
    language?: string | null;
    /**
     * Required. If the type is not set or is `TYPE_UNSPECIFIED`, returns an `INVALID_ARGUMENT` error.
     */
    type?: string | null;
  }
  /**
   * Represents a phrase in the text that is a known entity, such as a person, an organization, or location. The API associates information, such as salience and mentions, with entities.
   */
  export interface Schema$Entity {
    /**
     * The mentions of this entity in the input document. The API currently supports proper noun mentions.
     */
    mentions?: Schema$EntityMention[];
    /**
     * Metadata associated with the entity. For most entity types, the metadata is a Wikipedia URL (`wikipedia_url`) and Knowledge Graph MID (`mid`), if they are available. For the metadata associated with other entity types, see the Type table below.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * The representative name for the entity.
     */
    name?: string | null;
    /**
     * The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient.
     */
    salience?: number | null;
    /**
     * For calls to AnalyzeEntitySentiment or if AnnotateTextRequest.Features.extract_entity_sentiment is set to true, this field will contain the aggregate sentiment expressed for this entity in the provided document.
     */
    sentiment?: Schema$Sentiment;
    /**
     * The entity type.
     */
    type?: string | null;
  }
  /**
   * Represents a mention for an entity in the text. Currently, proper noun mentions are supported.
   */
  export interface Schema$EntityMention {
    /**
     * For calls to AnalyzeEntitySentiment or if AnnotateTextRequest.Features.extract_entity_sentiment is set to true, this field will contain the sentiment expressed for this mention of the entity in the provided document.
     */
    sentiment?: Schema$Sentiment;
    /**
     * The mention text.
     */
    text?: Schema$TextSpan;
    /**
     * The type of the entity mention.
     */
    type?: string | null;
  }
  export interface Schema$GpuMetric {
    /**
     * Required. Seconds of GPU usage, e.g. 3600.
     */
    gpuSec?: string | null;
    /**
     * Required. Type of GPU, e.g. NVIDIA_TESLA_V100.
     */
    gpuType?: string | null;
    /**
     * Required. Machine spec, e.g. N1_STANDARD_4.
     */
    machineSpec?: string | null;
    /**
     * Billing tracking labels. They do not contain any user data but only the labels set by Vertex Core Infra itself. Tracking labels' keys are defined with special format: goog-[\p{Ll\}\p{N\}]+ E.g. "key": "goog-k8s-cluster-name","value": "us-east1-b4rk"
     */
    trackingLabels?: {[key: string]: string} | null;
  }
  /**
   * LINT: LEGACY_NAMES Infra Usage of billing metrics.
   */
  export interface Schema$InfraUsage {
    /**
     * Aggregated core metrics since requested start_time.
     */
    cpuMetrics?: Schema$CpuMetric[];
    /**
     * Aggregated persistent disk metrics since requested start_time.
     */
    diskMetrics?: Schema$DiskMetric[];
    /**
     * Aggregated gpu metrics since requested start_time.
     */
    gpuMetrics?: Schema$GpuMetric[];
    /**
     * Aggregated ram metrics since requested start_time.
     */
    ramMetrics?: Schema$RamMetric[];
    /**
     * Aggregated tpu metrics since requested start_time.
     */
    tpuMetrics?: Schema$TpuMetric[];
  }
  /**
   * The document moderation request message.
   */
  export interface Schema$ModerateTextRequest {
    /**
     * Required. Input document.
     */
    document?: Schema$Document;
  }
  /**
   * The document moderation response message.
   */
  export interface Schema$ModerateTextResponse {
    /**
     * Harmful and sensitive categories representing the input document.
     */
    moderationCategories?: Schema$ClassificationCategory[];
  }
  /**
   * Represents part of speech information for a token. Parts of speech are as defined in http://www.lrec-conf.org/proceedings/lrec2012/pdf/274_Paper.pdf
   */
  export interface Schema$PartOfSpeech {
    /**
     * The grammatical aspect.
     */
    aspect?: string | null;
    /**
     * The grammatical case.
     */
    case?: string | null;
    /**
     * The grammatical form.
     */
    form?: string | null;
    /**
     * The grammatical gender.
     */
    gender?: string | null;
    /**
     * The grammatical mood.
     */
    mood?: string | null;
    /**
     * The grammatical number.
     */
    number?: string | null;
    /**
     * The grammatical person.
     */
    person?: string | null;
    /**
     * The grammatical properness.
     */
    proper?: string | null;
    /**
     * The grammatical reciprocity.
     */
    reciprocity?: string | null;
    /**
     * The part of speech tag.
     */
    tag?: string | null;
    /**
     * The grammatical tense.
     */
    tense?: string | null;
    /**
     * The grammatical voice.
     */
    voice?: string | null;
  }
  export interface Schema$RamMetric {
    /**
     * Required. VM memory in Gigabyte second, e.g. 3600. Using int64 type to match billing metrics definition.
     */
    gibSec?: string | null;
    /**
     * Required. Machine spec, e.g. N1_STANDARD_4.
     */
    machineSpec?: string | null;
    /**
     * Required. VM memory in gb.
     */
    memories?: number | null;
    /**
     * Required. Type of ram.
     */
    ramType?: string | null;
    /**
     * Billing tracking labels. They do not contain any user data but only the labels set by Vertex Core Infra itself. Tracking labels' keys are defined with special format: goog-[\p{Ll\}\p{N\}]+ E.g. "key": "goog-k8s-cluster-name","value": "us-east1-b4rk"
     */
    trackingLabels?: {[key: string]: string} | null;
  }
  /**
   * Represents a sentence in the input document.
   */
  export interface Schema$Sentence {
    /**
     * For calls to AnalyzeSentiment or if AnnotateTextRequest.Features.extract_document_sentiment is set to true, this field will contain the sentiment for the sentence.
     */
    sentiment?: Schema$Sentiment;
    /**
     * The sentence text.
     */
    text?: Schema$TextSpan;
  }
  /**
   * Represents the feeling associated with the entire text or entities in the text.
   */
  export interface Schema$Sentiment {
    /**
     * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment regardless of score (positive or negative).
     */
    magnitude?: number | null;
    /**
     * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
     */
    score?: number | null;
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
   * Represents a text span in the input document.
   */
  export interface Schema$TextSpan {
    /**
     * The API calculates the beginning offset of the content in the original document according to the EncodingType specified in the API request.
     */
    beginOffset?: number | null;
    /**
     * The content of the text span, which is a substring of the document.
     */
    content?: string | null;
  }
  /**
   * Represents the smallest syntactic building block of the text.
   */
  export interface Schema$Token {
    /**
     * Dependency tree parse for this token.
     */
    dependencyEdge?: Schema$DependencyEdge;
    /**
     * [Lemma](https://en.wikipedia.org/wiki/Lemma_%28morphology%29) of the token.
     */
    lemma?: string | null;
    /**
     * Parts of speech tag for this token.
     */
    partOfSpeech?: Schema$PartOfSpeech;
    /**
     * The token text.
     */
    text?: Schema$TextSpan;
  }
  export interface Schema$TpuMetric {
    /**
     * Required. Seconds of TPU usage, e.g. 3600.
     */
    tpuSec?: string | null;
    /**
     * Required. Type of TPU, e.g. TPU_V2, TPU_V3_POD.
     */
    tpuType?: string | null;
  }
  /**
   * The data statistics of a series of ARRAY values.
   */
  export interface Schema$XPSArrayStats {
    commonStats?: Schema$XPSCommonStats;
    /**
     * Stats of all the values of all arrays, as if they were a single long series of data. The type depends on the element type of the array.
     */
    memberStats?: Schema$XPSDataStats;
  }
  export interface Schema$XPSBatchPredictResponse {
    /**
     * Examples for batch prediction result. Under full API implementation, results are stored in shared RecordIO of AnnotatedExample protobufs, the annotations field of which is populated by XPS backend.
     */
    exampleSet?: Schema$XPSExampleSet;
  }
  /**
   * Bounding box matching model metrics for a single intersection-over-union threshold and multiple label match confidence thresholds.
   */
  export interface Schema$XPSBoundingBoxMetricsEntry {
    /**
     * Metrics for each label-match confidence_threshold from 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99.
     */
    confidenceMetricsEntries?: Schema$XPSBoundingBoxMetricsEntryConfidenceMetricsEntry[];
    /**
     * The intersection-over-union threshold value used to compute this metrics entry.
     */
    iouThreshold?: number | null;
    /**
     * The mean average precision.
     */
    meanAveragePrecision?: number | null;
  }
  /**
   * Metrics for a single confidence threshold.
   */
  export interface Schema$XPSBoundingBoxMetricsEntryConfidenceMetricsEntry {
    /**
     * The confidence threshold value used to compute the metrics.
     */
    confidenceThreshold?: number | null;
    /**
     * The harmonic mean of recall and precision.
     */
    f1Score?: number | null;
    /**
     * Precision for the given confidence threshold.
     */
    precision?: number | null;
    /**
     * Recall for the given confidence threshold.
     */
    recall?: number | null;
  }
  /**
   * The data statistics of a series of CATEGORY values.
   */
  export interface Schema$XPSCategoryStats {
    commonStats?: Schema$XPSCommonStats;
    /**
     * The statistics of the top 20 CATEGORY values, ordered by CategoryStats.SingleCategoryStats.count.
     */
    topCategoryStats?: Schema$XPSCategoryStatsSingleCategoryStats[];
  }
  /**
   * The statistics of a single CATEGORY value.
   */
  export interface Schema$XPSCategoryStatsSingleCategoryStats {
    /**
     * The number of occurrences of this value in the series.
     */
    count?: string | null;
    /**
     * The CATEGORY value.
     */
    value?: string | null;
  }
  /**
   * Model evaluation metrics for classification problems. It can be used for image and video classification. Next tag: 9.
   */
  export interface Schema$XPSClassificationEvaluationMetrics {
    /**
     * The Area under precision recall curve metric.
     */
    auPrc?: number | null;
    /**
     * The Area Under Receiver Operating Characteristic curve metric. Micro-averaged for the overall evaluation.
     */
    auRoc?: number | null;
    /**
     * The Area under precision recall curve metric based on priors.
     */
    baseAuPrc?: number | null;
    /**
     * Metrics that have confidence thresholds. Precision-recall curve can be derived from it.
     */
    confidenceMetricsEntries?: Schema$XPSConfidenceMetricsEntry[];
    /**
     * Confusion matrix of the evaluation. Only set for MULTICLASS classification problems where number of annotation specs is no more than 10. Only set for model level evaluation, not for evaluation per label.
     */
    confusionMatrix?: Schema$XPSConfusionMatrix;
    /**
     * The number of examples used for model evaluation.
     */
    evaluatedExamplesCount?: number | null;
    /**
     * The Log Loss metric.
     */
    logLoss?: number | null;
  }
  /**
   * Map from color to display name. Will only be used by Image Segmentation for uCAIP.
   */
  export interface Schema$XPSColorMap {
    /**
     * Should be used during training.
     */
    annotationSpecIdToken?: string | null;
    /**
     * This type is deprecated in favor of the IntColor below. This is because google.type.Color represent color has a float which semantically does not reflect discrete classes/categories concept. Moreover, to handle it well we need to have some tolerance when converting to a discretized color. As such, the recommendation is to have API surface still use google.type.Color while internally IntColor is used.
     */
    color?: Schema$Color;
    /**
     * Should be used during preprocessing.
     */
    displayName?: string | null;
    intColor?: Schema$XPSColorMapIntColor;
  }
  /**
   * RGB color and each channel is represented by an integer.
   */
  export interface Schema$XPSColorMapIntColor {
    /**
     * The value should be in range of [0, 255].
     */
    blue?: number | null;
    /**
     * The value should be in range of [0, 255].
     */
    green?: number | null;
    /**
     * The value should be in range of [0, 255].
     */
    red?: number | null;
  }
  export interface Schema$XPSColumnSpec {
    /**
     * The unique id of the column. When Preprocess, the Tables BE will popuate the order id of the column, which reflects the order of the column inside the table, i.e. 0 means the first column in the table, N-1 means the last column. AutoML BE will persist this order id in Spanner and set the order id here when calling RefreshTablesStats and Train. Note: it's different than the column_spec_id that is generated in AutoML BE.
     */
    columnId?: number | null;
    /**
     * The data stats of the column. It's outputed in RefreshTablesStats and a required input for Train.
     */
    dataStats?: Schema$XPSDataStats;
    /**
     * The data type of the column. It's outputed in Preprocess rpc and a required input for RefreshTablesStats and Train.
     */
    dataType?: Schema$XPSDataType;
    /**
     * The display name of the column. It's outputed in Preprocess and a required input for RefreshTablesStats and Train.
     */
    displayName?: string | null;
    forecastingMetadata?: Schema$XPSColumnSpecForecastingMetadata;
    /**
     * It's outputed in RefreshTablesStats, and a required input in Train.
     */
    topCorrelatedColumns?: Schema$XPSColumnSpecCorrelatedColumn[];
  }
  /**
   * Identifies a table's column, and its correlation with the column this ColumnSpec describes.
   */
  export interface Schema$XPSColumnSpecCorrelatedColumn {
    columnId?: number | null;
    correlationStats?: Schema$XPSCorrelationStats;
  }
  export interface Schema$XPSColumnSpecForecastingMetadata {
    /**
     * The type of the column for FORECASTING model training purposes.
     */
    columnType?: string | null;
  }
  /**
   * Common statistics for a column with a specified data type.
   */
  export interface Schema$XPSCommonStats {
    distinctValueCount?: string | null;
    nullValueCount?: string | null;
    validValueCount?: string | null;
  }
  /**
   * ConfidenceMetricsEntry includes generic precision, recall, f1 score etc. Next tag: 16.
   */
  export interface Schema$XPSConfidenceMetricsEntry {
    /**
     * Metrics are computed with an assumption that the model never return predictions with score lower than this value.
     */
    confidenceThreshold?: number | null;
    /**
     * The harmonic mean of recall and precision.
     */
    f1Score?: number | null;
    /**
     * The harmonic mean of recall_at1 and precision_at1.
     */
    f1ScoreAt1?: number | null;
    /**
     * The number of ground truth labels that are not matched by a model created label.
     */
    falseNegativeCount?: string | null;
    /**
     * The number of model created labels that do not match a ground truth label.
     */
    falsePositiveCount?: string | null;
    /**
     * False Positive Rate for the given confidence threshold.
     */
    falsePositiveRate?: number | null;
    /**
     * The False Positive Rate when only considering the label that has the highest prediction score and not below the confidence threshold for each example.
     */
    falsePositiveRateAt1?: number | null;
    /**
     * Metrics are computed with an assumption that the model always returns at most this many predictions (ordered by their score, descendingly), but they all still need to meet the confidence_threshold.
     */
    positionThreshold?: number | null;
    /**
     * Precision for the given confidence threshold.
     */
    precision?: number | null;
    /**
     * The precision when only considering the label that has the highest prediction score and not below the confidence threshold for each example.
     */
    precisionAt1?: number | null;
    /**
     * Recall (true positive rate) for the given confidence threshold.
     */
    recall?: number | null;
    /**
     * The recall (true positive rate) when only considering the label that has the highest prediction score and not below the confidence threshold for each example.
     */
    recallAt1?: number | null;
    /**
     * The number of labels that were not created by the model, but if they would, they would not match a ground truth label.
     */
    trueNegativeCount?: string | null;
    /**
     * The number of model created labels that match a ground truth label.
     */
    truePositiveCount?: string | null;
  }
  /**
   * Confusion matrix of the model running the classification.
   */
  export interface Schema$XPSConfusionMatrix {
    /**
     * For the following three repeated fields, only one is intended to be set. annotation_spec_id_token is preferable to be set. ID tokens of the annotation specs used in the confusion matrix.
     */
    annotationSpecIdToken?: string[] | null;
    /**
     * Category (mainly for segmentation). Set only for image segmentation models. Note: uCAIP Image Segmentation should use annotation_spec_id_token.
     */
    category?: number[] | null;
    /**
     * Rows in the confusion matrix. The number of rows is equal to the size of `annotation_spec_id_token`. `row[i].value[j]` is the number of examples that have ground truth of the `annotation_spec_id_token[i]` and are predicted as `annotation_spec_id_token[j]` by the model being evaluated.
     */
    row?: Schema$XPSConfusionMatrixRow[];
    /**
     * Sentiment labels used in the confusion matrix. Set only for text sentiment models. For AutoML Text Revamp, use `annotation_spec_id_token` instead and leave this field empty.
     */
    sentimentLabel?: number[] | null;
  }
  /**
   * A row in the confusion matrix.
   */
  export interface Schema$XPSConfusionMatrixRow {
    /**
     * Same as above except intended to represent other counts (for e.g. for segmentation this is pixel count). NOTE(params): Only example_count or count is set (oneoff does not support repeated fields unless they are embedded inside another message).
     */
    count?: string[] | null;
    /**
     * Value of the specific cell in the confusion matrix. The number of values each row has (i.e. the length of the row) is equal to the length of the annotation_spec_id_token field.
     */
    exampleCount?: number[] | null;
  }
  /**
   * A model format used for iOS mobile devices.
   */
  export interface Schema$XPSCoreMlFormat {}
  /**
   * A correlation statistics between two series of DataType values. The series may have differing DataType-s, but within a single series the DataType must be the same.
   */
  export interface Schema$XPSCorrelationStats {
    /**
     * The correlation value using the Cramer's V measure.
     */
    cramersV?: number | null;
  }
  /**
   * Different types of errors and the stats associatesd with each error.
   */
  export interface Schema$XPSDataErrors {
    /**
     * Number of records having errors associated with the enum.
     */
    count?: number | null;
    /**
     * Type of the error.
     */
    errorType?: string | null;
  }
  /**
   * The data statistics of a series of values that share the same DataType.
   */
  export interface Schema$XPSDataStats {
    /**
     * The statistics for ARRAY DataType.
     */
    arrayStats?: Schema$XPSArrayStats;
    /**
     * The statistics for CATEGORY DataType.
     */
    categoryStats?: Schema$XPSCategoryStats;
    /**
     * The number of distinct values.
     */
    distinctValueCount?: string | null;
    /**
     * The statistics for FLOAT64 DataType.
     */
    float64Stats?: Schema$XPSFloat64Stats;
    /**
     * The number of values that are null.
     */
    nullValueCount?: string | null;
    /**
     * The statistics for STRING DataType.
     */
    stringStats?: Schema$XPSStringStats;
    /**
     * The statistics for STRUCT DataType.
     */
    structStats?: Schema$XPSStructStats;
    /**
     * The statistics for TIMESTAMP DataType.
     */
    timestampStats?: Schema$XPSTimestampStats;
    /**
     * The number of values that are valid.
     */
    validValueCount?: string | null;
  }
  /**
   * Indicated the type of data that can be stored in a structured data entity (e.g. a table).
   */
  export interface Schema$XPSDataType {
    /**
     * The highly compatible data types to this data type.
     */
    compatibleDataTypes?: Schema$XPSDataType[];
    /**
     * If type_code == ARRAY, then `list_element_type` is the type of the elements.
     */
    listElementType?: Schema$XPSDataType;
    /**
     * If true, this DataType can also be `null`.
     */
    nullable?: boolean | null;
    /**
     * If type_code == STRUCT, then `struct_type` provides type information for the struct's fields.
     */
    structType?: Schema$XPSStructType;
    /**
     * If type_code == TIMESTAMP then `time_format` provides the format in which that time field is expressed. The time_format must be written in `strftime` syntax. If time_format is not set, then the default format as described on the field is used.
     */
    timeFormat?: string | null;
    /**
     * Required. The TypeCode for this type.
     */
    typeCode?: string | null;
  }
  /**
   * A model format used for Docker containers. Use the params field to customize the container. The container is verified to work correctly on ubuntu 16.04 operating system.
   */
  export interface Schema$XPSDockerFormat {
    /**
     * Optional. Additional cpu information describing the requirements for the to be exported model files.
     */
    cpuArchitecture?: string | null;
    /**
     * Optional. Additional gpu information describing the requirements for the to be exported model files.
     */
    gpuArchitecture?: string | null;
  }
  /**
   * A model format used for [Edge TPU](https://cloud.google.com/edge-tpu/) devices.
   */
  export interface Schema$XPSEdgeTpuTfLiteFormat {}
  /**
   * Contains xPS-specific model evaluation metrics either for a single annotation spec (label), or for the model overall. Next tag: 18.
   */
  export interface Schema$XPSEvaluationMetrics {
    /**
     * The annotation_spec for which this evaluation metrics instance had been created. Empty iff this is an overall model evaluation (like Tables evaluation metrics), i.e. aggregated across all labels. The value comes from the input annotations in AnnotatedExample. For MVP product or for text sentiment models where annotation_spec_id_token is not available, set label instead.
     */
    annotationSpecIdToken?: string | null;
    /**
     * The integer category label for which this evaluation metric instance had been created. Valid categories are 0 or higher. Overall model evaluation should set this to negative values (rather than implicit zero). Only used for Image Segmentation (prefer to set annotation_spec_id_token instead). Note: uCAIP Image Segmentation should use annotation_spec_id_token.
     */
    category?: number | null;
    /**
     * The number of examples used to create this evaluation metrics instance.
     */
    evaluatedExampleCount?: number | null;
    imageClassificationEvalMetrics?: Schema$XPSClassificationEvaluationMetrics;
    imageObjectDetectionEvalMetrics?: Schema$XPSImageObjectDetectionEvaluationMetrics;
    imageSegmentationEvalMetrics?: Schema$XPSImageSegmentationEvaluationMetrics;
    /**
     * The label for which this evaluation metrics instance had been created. Empty iff this is an overall model evaluation (like Tables evaluation metrics), i.e. aggregated across all labels. The label maps to AnnotationSpec.display_name in Public API protos. Only used by MVP implementation and text sentiment FULL implementation.
     */
    label?: string | null;
    regressionEvalMetrics?: Schema$XPSRegressionEvaluationMetrics;
    tablesClassificationEvalMetrics?: Schema$XPSClassificationEvaluationMetrics;
    tablesEvalMetrics?: Schema$XPSTablesEvaluationMetrics;
    textClassificationEvalMetrics?: Schema$XPSClassificationEvaluationMetrics;
    textExtractionEvalMetrics?: Schema$XPSTextExtractionEvaluationMetrics;
    textSentimentEvalMetrics?: Schema$XPSTextSentimentEvaluationMetrics;
    translationEvalMetrics?: Schema$XPSTranslationEvaluationMetrics;
    videoActionRecognitionEvalMetrics?: Schema$XPSVideoActionRecognitionEvaluationMetrics;
    videoClassificationEvalMetrics?: Schema$XPSClassificationEvaluationMetrics;
    videoObjectTrackingEvalMetrics?: Schema$XPSVideoObjectTrackingEvaluationMetrics;
  }
  /**
   * Specifies location of model evaluation metrics.
   */
  export interface Schema$XPSEvaluationMetricsSet {
    /**
     * Inline EvaluationMetrics - should be relatively small. For passing large quantities of exhaustive metrics, use file_spec.
     */
    evaluationMetrics?: Schema$XPSEvaluationMetrics[];
    /**
     * File spec containing evaluation metrics of a model, must point to RecordIO file(s) of intelligence.cloud.automl.xps.EvaluationMetrics messages.
     */
    fileSpec?: Schema$XPSFileSpec;
    /**
     * Number of the evaluation metrics (usually one per label plus overall).
     */
    numEvaluationMetrics?: string | null;
  }
  /**
   * Set of examples or input sources.
   */
  export interface Schema$XPSExampleSet {
    /**
     * File spec of the examples or input sources.
     */
    fileSpec?: Schema$XPSFileSpec;
    /**
     * Fingerprint of the example set.
     */
    fingerprint?: string | null;
    /**
     * Number of examples.
     */
    numExamples?: string | null;
    /**
     * Number of input sources.
     */
    numInputSources?: string | null;
  }
  export interface Schema$XPSExportModelOutputConfig {
    coreMlFormat?: Schema$XPSCoreMlFormat;
    dockerFormat?: Schema$XPSDockerFormat;
    edgeTpuTfLiteFormat?: Schema$XPSEdgeTpuTfLiteFormat;
    /**
     * For any model and format: If true, will additionally export FirebaseExportedModelInfo in a firebase.txt file.
     */
    exportFirebaseAuxiliaryInfo?: boolean | null;
    /**
     * The Google Contained Registry path the exported files to be pushed to. This location is set if the exported format is DOCKDER.
     */
    outputGcrUri?: string | null;
    /**
     * The Google Cloud Storage directory where XPS will output the exported models and related files. Format: gs://bucket/directory
     */
    outputGcsUri?: string | null;
    tfJsFormat?: Schema$XPSTfJsFormat;
    tfLiteFormat?: Schema$XPSTfLiteFormat;
    tfSavedModelFormat?: Schema$XPSTfSavedModelFormat;
  }
  /**
   * Spec of input and output files, on external file systems (for example, Colossus Namespace System or Google Cloud Storage).
   */
  export interface Schema$XPSFileSpec {
    /**
     * Deprecated. Use file_spec.
     */
    directoryPath?: string | null;
    fileFormat?: string | null;
    /**
     * Single file path, or file pattern of format "/path/to/file@shard_count". E.g. /cns/cell-d/somewhere/file@2 is expanded to two files: /cns/cell-d/somewhere/file-00000-of-00002 and /cns/cell-d/somewhere/file-00001-of-00002.
     */
    fileSpec?: string | null;
    /**
     * Deprecated. Use file_spec.
     */
    singleFilePath?: string | null;
  }
  /**
   * The data statistics of a series of FLOAT64 values.
   */
  export interface Schema$XPSFloat64Stats {
    commonStats?: Schema$XPSCommonStats;
    /**
     * Histogram buckets of the data series. Sorted by the min value of the bucket, ascendingly, and the number of the buckets is dynamically generated. The buckets are non-overlapping and completely cover whole FLOAT64 range with min of first bucket being `"-Infinity"`, and max of the last one being `"Infinity"`.
     */
    histogramBuckets?: Schema$XPSFloat64StatsHistogramBucket[];
    /**
     * The mean of the series.
     */
    mean?: number | null;
    /**
     * Ordered from 0 to k k-quantile values of the data series of n values. The value at index i is, approximately, the i*n/k-th smallest value in the series; for i = 0 and i = k these are, respectively, the min and max values.
     */
    quantiles?: number[] | null;
    /**
     * The standard deviation of the series.
     */
    standardDeviation?: number | null;
  }
  /**
   * A bucket of a histogram.
   */
  export interface Schema$XPSFloat64StatsHistogramBucket {
    /**
     * The number of data values that are in the bucket, i.e. are between min and max values.
     */
    count?: string | null;
    /**
     * The maximum value of the bucket, exclusive unless max = `"Infinity"`, in which case it's inclusive.
     */
    max?: number | null;
    /**
     * The minimum value of the bucket, inclusive.
     */
    min?: number | null;
  }
  export interface Schema$XPSImageClassificationTrainResponse {
    /**
     * Total number of classes.
     */
    classCount?: string | null;
    /**
     * Information of downloadable models that are pre-generated as part of training flow and will be persisted in AutoMl backend. Populated for AutoMl requests.
     */
    exportModelSpec?: Schema$XPSImageExportModelSpec;
    /**
     * ## The fields below are only populated under uCAIP request scope.
     */
    modelArtifactSpec?: Schema$XPSImageModelArtifactSpec;
    modelServingSpec?: Schema$XPSImageModelServingSpec;
    /**
     * Stop reason for training job, e.g. 'TRAIN_BUDGET_REACHED', 'MODEL_CONVERGED', 'MODEL_EARLY_STOPPED'.
     */
    stopReason?: string | null;
    /**
     * The actual cost to create this model. - For edge type model, the cost is expressed in node hour. - For cloud type model,the cost is expressed in compute hour. - Populated for models created before GA. To be deprecated after GA.
     */
    trainCostInNodeTime?: string | null;
    /**
     * The actual training cost, expressed in node seconds. Populated for models trained in node time.
     */
    trainCostNodeSeconds?: string | null;
  }
  /**
   * Information of downloadable models that are pre-generated as part of training flow and will be persisted in AutoMl backend. Upon receiving ExportModel request from user, AutoMl backend can serve the pre-generated models to user if exists (by copying the files from internal path to user provided location), otherwise, AutoMl backend will call xPS ExportModel API to generate the model on the fly with the requesting format.
   */
  export interface Schema$XPSImageExportModelSpec {
    /**
     * Contains the model format and internal location of the model files to be exported/downloaded. Use the Google Cloud Storage bucket name which is provided via TrainRequest.gcs_bucket_name to store the model files.
     */
    exportModelOutputConfig?: Schema$XPSExportModelOutputConfig[];
  }
  /**
   * Stores the locations and related metadata of the model artifacts. Populated for uCAIP requests only.
   */
  export interface Schema$XPSImageModelArtifactSpec {
    /**
     * The Tensorflow checkpoint files. e.g. Used for resumable training.
     */
    checkpointArtifact?: Schema$XPSModelArtifactItem;
    /**
     * The model binary files in different formats for model export.
     */
    exportArtifact?: Schema$XPSModelArtifactItem[];
    /**
     * Google Cloud Storage URI of decoded labels file for model export 'dict.txt'.
     */
    labelGcsUri?: string | null;
    /**
     * The default model binary file used for serving (e.g. online predict, batch predict) via public Cloud AI Platform API.
     */
    servingArtifact?: Schema$XPSModelArtifactItem;
    /**
     * Google Cloud Storage URI prefix of Tensorflow JavaScript binary files 'groupX-shardXofX.bin'. Deprecated.
     */
    tfJsBinaryGcsPrefix?: string | null;
    /**
     * Google Cloud Storage URI of Tensorflow Lite metadata 'tflite_metadata.json'.
     */
    tfLiteMetadataGcsUri?: string | null;
  }
  /**
   * Serving specification for image models.
   */
  export interface Schema$XPSImageModelServingSpec {
    /**
     * Populate under uCAIP request scope.
     */
    modelThroughputEstimation?: Schema$XPSImageModelServingSpecModelThroughputEstimation[];
    /**
     * An estimated value of how much traffic a node can serve. Populated for AutoMl request only.
     */
    nodeQps?: number | null;
    /**
     * ## The fields below are only populated under uCAIP request scope. https://cloud.google.com/ml-engine/docs/runtime-version-list
     */
    tfRuntimeVersion?: string | null;
  }
  export interface Schema$XPSImageModelServingSpecModelThroughputEstimation {
    computeEngineAcceleratorType?: string | null;
    /**
     * Estimated latency.
     */
    latencyInMilliseconds?: number | null;
    /**
     * The approximate qps a deployed node can serve.
     */
    nodeQps?: number | null;
    servomaticPartitionType?: string | null;
  }
  /**
   * Model evaluation metrics for image object detection problems. Evaluates prediction quality of labeled bounding boxes.
   */
  export interface Schema$XPSImageObjectDetectionEvaluationMetrics {
    /**
     * The single metric for bounding boxes evaluation: the mean_average_precision averaged over all bounding_box_metrics_entries.
     */
    boundingBoxMeanAveragePrecision?: number | null;
    /**
     * The bounding boxes match metrics for each Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and each label confidence threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 pair.
     */
    boundingBoxMetricsEntries?: Schema$XPSBoundingBoxMetricsEntry[];
    /**
     * The total number of bounding boxes (i.e. summed over all images) the ground truth used to create this evaluation had.
     */
    evaluatedBoundingBoxCount?: number | null;
  }
  export interface Schema$XPSImageObjectDetectionModelSpec {
    /**
     * Total number of classes.
     */
    classCount?: string | null;
    exportModelSpec?: Schema$XPSImageExportModelSpec;
    /**
     * Max number of bounding box.
     */
    maxBoundingBoxCount?: string | null;
    /**
     * ## The fields below are only populated under uCAIP request scope.
     */
    modelArtifactSpec?: Schema$XPSImageModelArtifactSpec;
    modelServingSpec?: Schema$XPSImageModelServingSpec;
    /**
     * Stop reason for training job, e.g. 'TRAIN_BUDGET_REACHED', 'MODEL_CONVERGED'.
     */
    stopReason?: string | null;
    /**
     * The actual train cost of creating this model, expressed in node seconds, i.e. 3,600 value in this field means 1 node hour.
     */
    trainCostNodeSeconds?: string | null;
  }
  /**
   * Model evaluation metrics for image segmentation problems. Next tag: 4.
   */
  export interface Schema$XPSImageSegmentationEvaluationMetrics {
    /**
     * Metrics that have confidence thresholds. Precision-recall curve can be derived from it.
     */
    confidenceMetricsEntries?: Schema$XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry[];
  }
  /**
   * Metrics for a single confidence threshold.
   */
  export interface Schema$XPSImageSegmentationEvaluationMetricsConfidenceMetricsEntry {
    /**
     * The confidence threshold value used to compute the metrics.
     */
    confidenceThreshold?: number | null;
    /**
     * Confusion matrix of the per confidence_threshold evaluation. Pixel counts are set here. Only set for model level evaluation, not for evaluation per label.
     */
    confusionMatrix?: Schema$XPSConfusionMatrix;
    /**
     * DSC or the F1 score: The harmonic mean of recall and precision.
     */
    diceScoreCoefficient?: number | null;
    /**
     * IOU score.
     */
    iouScore?: number | null;
    /**
     * Precision for the given confidence threshold.
     */
    precision?: number | null;
    /**
     * Recall for the given confidence threshold.
     */
    recall?: number | null;
  }
  export interface Schema$XPSImageSegmentationTrainResponse {
    /**
     * Color map of the model.
     */
    colorMaps?: Schema$XPSColorMap[];
    /**
     * NOTE: These fields are not used/needed in EAP but will be set later.
     */
    exportModelSpec?: Schema$XPSImageExportModelSpec;
    /**
     * ## The fields below are only populated under uCAIP request scope. Model artifact spec stores and model gcs pathes and related metadata
     */
    modelArtifactSpec?: Schema$XPSImageModelArtifactSpec;
    modelServingSpec?: Schema$XPSImageModelServingSpec;
    /**
     * Stop reason for training job, e.g. 'TRAIN_BUDGET_REACHED', 'MODEL_CONVERGED'.
     */
    stopReason?: string | null;
    /**
     * The actual train cost of creating this model, expressed in node seconds, i.e. 3,600 value in this field means 1 node hour.
     */
    trainCostNodeSeconds?: string | null;
  }
  /**
   * An attribution method that computes the Aumann-Shapley value taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1703.01365
   */
  export interface Schema$XPSIntegratedGradientsAttribution {
    /**
     * The number of steps for approximating the path integral. A good value to start is 50 and gradually increase until the sum to diff property is within the desired error range. Valid range of its value is [1, 100], inclusively.
     */
    stepCount?: number | null;
  }
  export interface Schema$XPSMetricEntry {
    /**
     * For billing metrics that are using legacy sku's, set the legacy billing metric id here. This will be sent to Chemist as the "cloudbilling.googleapis.com/argentum_metric_id" label. Otherwise leave empty.
     */
    argentumMetricId?: string | null;
    /**
     * A double value.
     */
    doubleValue?: number | null;
    /**
     * A signed 64-bit integer value.
     */
    int64Value?: string | null;
    /**
     * The metric name defined in the service configuration.
     */
    metricName?: string | null;
    /**
     * Billing system labels for this (metric, value) pair.
     */
    systemLabels?: Schema$XPSMetricEntryLabel[];
  }
  export interface Schema$XPSMetricEntryLabel {
    /**
     * The name of the label.
     */
    labelName?: string | null;
    /**
     * The value of the label.
     */
    labelValue?: string | null;
  }
  /**
   * A single model artifact item.
   */
  export interface Schema$XPSModelArtifactItem {
    /**
     * The model artifact format.
     */
    artifactFormat?: string | null;
    /**
     * The Google Cloud Storage URI that stores the model binary files.
     */
    gcsUri?: string | null;
  }
  export interface Schema$XPSPreprocessResponse {
    /**
     * Preprocessed examples, that are to be imported into AutoML storage. This should point to RecordIO file(s) of PreprocessedExample messages. The PreprocessedExample.mvp_training_data-s returned here are later verbatim passed to Train() call in TrainExample.mvp_training_data.
     */
    outputExampleSet?: Schema$XPSExampleSet;
    speechPreprocessResp?: Schema$XPSSpeechPreprocessResponse;
    tablesPreprocessResponse?: Schema$XPSTablesPreprocessResponse;
    translationPreprocessResp?: Schema$XPSTranslationPreprocessResponse;
  }
  /**
   * Model evaluation metrics for regression problems. It can be used for Tables.
   */
  export interface Schema$XPSRegressionEvaluationMetrics {
    /**
     * Mean Absolute Error (MAE).
     */
    meanAbsoluteError?: number | null;
    /**
     * Mean absolute percentage error. Only set if all ground truth values are positive.
     */
    meanAbsolutePercentageError?: number | null;
    /**
     * A list of actual versus predicted points for the model being evaluated.
     */
    regressionMetricsEntries?: Schema$XPSRegressionMetricsEntry[];
    /**
     * Root Mean Squared Error (RMSE).
     */
    rootMeanSquaredError?: number | null;
    /**
     * Root mean squared log error.
     */
    rootMeanSquaredLogError?: number | null;
    /**
     * R squared.
     */
    rSquared?: number | null;
  }
  /**
   * A pair of actual & observed values for the model being evaluated.
   */
  export interface Schema$XPSRegressionMetricsEntry {
    /**
     * The observed value for a row in the dataset.
     */
    predictedValue?: number | null;
    /**
     * The actual target value for a row in the dataset.
     */
    trueValue?: number | null;
  }
  export interface Schema$XPSReportingMetrics {
    /**
     * The effective time training used. If set, this is used for quota management and billing. Deprecated. AutoML BE doesn't use this. Don't set.
     */
    effectiveTrainingDuration?: string | null;
    /**
     * One entry per metric name. The values must be aggregated per metric name.
     */
    metricEntries?: Schema$XPSMetricEntry[];
  }
  export interface Schema$XPSResponseExplanationMetadata {
    /**
     * Metadata of the input.
     */
    inputs?: {
      [key: string]: Schema$XPSResponseExplanationMetadataInputMetadata;
    } | null;
    /**
     * Metadata of the output.
     */
    outputs?: {
      [key: string]: Schema$XPSResponseExplanationMetadataOutputMetadata;
    } | null;
  }
  /**
   * Metadata of the input of a feature.
   */
  export interface Schema$XPSResponseExplanationMetadataInputMetadata {
    /**
     * Name of the input tensor for this model. Only needed in train response.
     */
    inputTensorName?: string | null;
    /**
     * Modality of the feature. Valid values are: numeric, image. Defaults to numeric.
     */
    modality?: string | null;
    /**
     * Visualization configurations for image explanation.
     */
    visualizationConfig?: Schema$XPSVisualization;
  }
  /**
   * Metadata of the prediction output to be explained.
   */
  export interface Schema$XPSResponseExplanationMetadataOutputMetadata {
    /**
     * Name of the output tensor. Only needed in train response.
     */
    outputTensorName?: string | null;
  }
  export interface Schema$XPSResponseExplanationParameters {
    /**
     * An attribution method that computes Aumann-Shapley values taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1703.01365
     */
    integratedGradientsAttribution?: Schema$XPSIntegratedGradientsAttribution;
    /**
     * An attribution method that redistributes Integrated Gradients attribution to segmented regions, taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1906.02825 XRAI currently performs better on natural images, like a picture of a house or an animal. If the images are taken in artificial environments, like a lab or manufacturing line, or from diagnostic equipment, like x-rays or quality-control cameras, use Integrated Gradients instead.
     */
    xraiAttribution?: Schema$XPSXraiAttribution;
  }
  /**
   * Specification of Model explanation. Feature-based XAI in AutoML Vision ICN is deprecated.
   */
  export interface Schema$XPSResponseExplanationSpec {
    /**
     * Explanation type. For AutoML Image Classification models, possible values are: * `image-integrated-gradients` * `image-xrai`
     */
    explanationType?: string | null;
    /**
     * Metadata describing the Model's input and output for explanation.
     */
    metadata?: Schema$XPSResponseExplanationMetadata;
    /**
     * Parameters that configure explaining of the Model's predictions.
     */
    parameters?: Schema$XPSResponseExplanationParameters;
  }
  export interface Schema$XPSRow {
    /**
     * The ids of the columns. Note: The below `values` field must match order of this field, if this field is set.
     */
    columnIds?: number[] | null;
    /**
     * The values of the row cells, given in the same order as the column_ids. If column_ids is not set, then in the same order as the input_feature_column_ids in TablesModelMetadata.
     */
    values?: any[] | null;
  }
  export interface Schema$XPSSpeechEvaluationMetrics {
    /**
     * Evaluation metrics for all submodels contained in this model.
     */
    subModelEvaluationMetrics?: Schema$XPSSpeechEvaluationMetricsSubModelEvaluationMetric[];
  }
  export interface Schema$XPSSpeechEvaluationMetricsSubModelEvaluationMetric {
    /**
     * Type of the biasing model.
     */
    biasingModelType?: string | null;
    /**
     * If true then it means we have an enhanced version of the biasing models.
     */
    isEnhancedModel?: boolean | null;
    numDeletions?: number | null;
    numInsertions?: number | null;
    numSubstitutions?: number | null;
    /**
     * Number of utterances used in the wer computation.
     */
    numUtterances?: number | null;
    /**
     * Number of words over which the word error rate was computed.
     */
    numWords?: number | null;
    /**
     * Below fields are used for debugging purposes
     */
    sentenceAccuracy?: number | null;
    /**
     * Word error rate (standard error metric used for speech recognition).
     */
    wer?: number | null;
  }
  export interface Schema$XPSSpeechModelSpec {
    /**
     * Required for speech xps backend. Speech xps has to use dataset_id and model_id as the primary key in db so that speech API can query the db directly.
     */
    datasetId?: string | null;
    language?: string | null;
    /**
     * Model specs for all submodels contained in this model.
     */
    subModelSpecs?: Schema$XPSSpeechModelSpecSubModelSpec[];
  }
  export interface Schema$XPSSpeechModelSpecSubModelSpec {
    /**
     * Type of the biasing model.
     */
    biasingModelType?: string | null;
    /**
     * In S3, Recognition ClientContextId.client_id
     */
    clientId?: string | null;
    /**
     * In S3, Recognition ClientContextId.context_id
     */
    contextId?: string | null;
    /**
     * If true then it means we have an enhanced version of the biasing models.
     */
    isEnhancedModel?: boolean | null;
  }
  export interface Schema$XPSSpeechPreprocessResponse {
    /**
     * Location od shards of sstables (test data) of DataUtterance protos.
     */
    cnsTestDataPath?: string | null;
    /**
     * Location of shards of sstables (training data) of DataUtterance protos.
     */
    cnsTrainDataPath?: string | null;
    /**
     * The metrics for prebuilt speech models. They are included here because there is no prebuilt speech models stored in the AutoML.
     */
    prebuiltModelEvaluationMetrics?: Schema$XPSSpeechEvaluationMetrics;
    /**
     * Stats associated with the data.
     */
    speechPreprocessStats?: Schema$XPSSpeechPreprocessStats;
  }
  export interface Schema$XPSSpeechPreprocessStats {
    /**
     * Different types of data errors and the counts associated with them.
     */
    dataErrors?: Schema$XPSDataErrors[];
    /**
     * The number of rows marked HUMAN_LABELLED
     */
    numHumanLabeledExamples?: number | null;
    /**
     * The number of samples found in the previously recorded logs data.
     */
    numLogsExamples?: number | null;
    /**
     * The number of rows marked as MACHINE_TRANSCRIBED
     */
    numMachineTranscribedExamples?: number | null;
    /**
     * The number of examples labelled as TEST by Speech xps server.
     */
    testExamplesCount?: number | null;
    /**
     * The number of sentences in the test data set.
     */
    testSentencesCount?: number | null;
    /**
     * The number of words in the test data set.
     */
    testWordsCount?: number | null;
    /**
     * The number of examples labeled as TRAIN by Speech xps server.
     */
    trainExamplesCount?: number | null;
    /**
     * The number of sentences in the training data set.
     */
    trainSentencesCount?: number | null;
    /**
     * The number of words in the training data set.
     */
    trainWordsCount?: number | null;
  }
  /**
   * The data statistics of a series of STRING values.
   */
  export interface Schema$XPSStringStats {
    commonStats?: Schema$XPSCommonStats;
    /**
     * The statistics of the top 20 unigrams, ordered by StringStats.UnigramStats.count.
     */
    topUnigramStats?: Schema$XPSStringStatsUnigramStats[];
  }
  /**
   * The statistics of a unigram.
   */
  export interface Schema$XPSStringStatsUnigramStats {
    /**
     * The number of occurrences of this unigram in the series.
     */
    count?: string | null;
    /**
     * The unigram.
     */
    value?: string | null;
  }
  /**
   * The data statistics of a series of STRUCT values.
   */
  export interface Schema$XPSStructStats {
    commonStats?: Schema$XPSCommonStats;
    /**
     * Map from a field name of the struct to data stats aggregated over series of all data in that field across all the structs.
     */
    fieldStats?: {[key: string]: Schema$XPSDataStats} | null;
  }
  /**
   * `StructType` defines the DataType-s of a STRUCT type.
   */
  export interface Schema$XPSStructType {
    /**
     * Unordered map of struct field names to their data types.
     */
    fields?: {[key: string]: Schema$XPSDataType} | null;
  }
  /**
   * Metrics for Tables classification problems.
   */
  export interface Schema$XPSTablesClassificationMetrics {
    /**
     * Metrics building a curve.
     */
    curveMetrics?: Schema$XPSTablesClassificationMetricsCurveMetrics[];
  }
  /**
   * Metrics curve data point for a single value.
   */
  export interface Schema$XPSTablesClassificationMetricsCurveMetrics {
    /**
     * The area under the precision-recall curve.
     */
    aucPr?: number | null;
    /**
     * The area under receiver operating characteristic curve.
     */
    aucRoc?: number | null;
    /**
     * Metrics that have confidence thresholds. Precision-recall curve and ROC curve can be derived from them.
     */
    confidenceMetricsEntries?: Schema$XPSTablesConfidenceMetricsEntry[];
    /**
     * The Log loss metric.
     */
    logLoss?: number | null;
    /**
     * The position threshold value used to compute the metrics.
     */
    positionThreshold?: number | null;
    /**
     * The CATEGORY row value (for ARRAY unnested) the curve metrics are for.
     */
    value?: string | null;
  }
  /**
   * Metrics for a single confidence threshold.
   */
  export interface Schema$XPSTablesConfidenceMetricsEntry {
    /**
     * The confidence threshold value used to compute the metrics.
     */
    confidenceThreshold?: number | null;
    /**
     * The harmonic mean of recall and precision. (2 * precision * recall) / (precision + recall)
     */
    f1Score?: number | null;
    /**
     * False negative count.
     */
    falseNegativeCount?: string | null;
    /**
     * False positive count.
     */
    falsePositiveCount?: string | null;
    /**
     * FPR = #false positives / (#false positives + #true negatives)
     */
    falsePositiveRate?: number | null;
    /**
     * Precision = #true positives / (#true positives + #false positives).
     */
    precision?: number | null;
    /**
     * Recall = #true positives / (#true positives + #false negatives).
     */
    recall?: number | null;
    /**
     * True negative count.
     */
    trueNegativeCount?: string | null;
    /**
     * True positive count.
     */
    truePositiveCount?: string | null;
    /**
     * TPR = #true positives / (#true positives + #false negatvies)
     */
    truePositiveRate?: number | null;
  }
  /**
   * Metadata for a dataset used for AutoML Tables.
   */
  export interface Schema$XPSTablesDatasetMetadata {
    /**
     * Id the column to split the table.
     */
    mlUseColumnId?: number | null;
    /**
     * Primary table.
     */
    primaryTableSpec?: Schema$XPSTableSpec;
    /**
     * (the column id : its CorrelationStats with target column).
     */
    targetColumnCorrelations?: {
      [key: string]: Schema$XPSCorrelationStats;
    } | null;
    /**
     * Id of the primary table column that should be used as the training label.
     */
    targetColumnId?: number | null;
    /**
     * Id of the primary table column that should be used as the weight column.
     */
    weightColumnId?: number | null;
  }
  export interface Schema$XPSTablesEvaluationMetrics {
    /**
     * Classification metrics.
     */
    classificationMetrics?: Schema$XPSTablesClassificationMetrics;
    /**
     * Regression metrics.
     */
    regressionMetrics?: Schema$XPSTablesRegressionMetrics;
  }
  /**
   * An information specific to given column and Tables Model, in context of the Model and the predictions created by it.
   */
  export interface Schema$XPSTablesModelColumnInfo {
    /**
     * The ID of the column.
     */
    columnId?: number | null;
    /**
     * When given as part of a Model: Measurement of how much model predictions correctness on the TEST data depend on values in this column. A value between 0 and 1, higher means higher influence. These values are normalized - for all input feature columns of a given model they add to 1. When given back by Predict or Batch Predict: Measurement of how impactful for the prediction returned for the given row the value in this column was. Specifically, the feature importance specifies the marginal contribution that the feature made to the prediction score compared to the baseline score. These values are computed using the Sampled Shapley method.
     */
    featureImportance?: number | null;
  }
  /**
   * A description of Tables model structure.
   */
  export interface Schema$XPSTablesModelStructure {
    /**
     * A list of models.
     */
    modelParameters?: Schema$XPSTablesModelStructureModelParameters[];
  }
  /**
   * Model hyper-parameters for a model.
   */
  export interface Schema$XPSTablesModelStructureModelParameters {
    hyperparameters?: Schema$XPSTablesModelStructureModelParametersParameter[];
  }
  export interface Schema$XPSTablesModelStructureModelParametersParameter {
    /**
     * Float type parameter value.
     */
    floatValue?: number | null;
    /**
     * Integer type parameter value.
     */
    intValue?: string | null;
    /**
     * Parameter name.
     */
    name?: string | null;
    /**
     * String type parameter value.
     */
    stringValue?: string | null;
  }
  export interface Schema$XPSTableSpec {
    /**
     * Mapping from column id to column spec.
     */
    columnSpecs?: {[key: string]: Schema$XPSColumnSpec} | null;
    /**
     * The total size of imported data of the table.
     */
    importedDataSizeInBytes?: string | null;
    /**
     * The number of rows in the table.
     */
    rowCount?: string | null;
    /**
     * The id of the time column.
     */
    timeColumnId?: number | null;
    /**
     * The number of valid rows.
     */
    validRowCount?: string | null;
  }
  export interface Schema$XPSTablesPreprocessResponse {
    /**
     * The table/column id, column_name and the DataTypes of the columns will be populated.
     */
    tablesDatasetMetadata?: Schema$XPSTablesDatasetMetadata;
  }
  /**
   * Metrics for Tables regression problems.
   */
  export interface Schema$XPSTablesRegressionMetrics {
    /**
     * Mean absolute error.
     */
    meanAbsoluteError?: number | null;
    /**
     * Mean absolute percentage error, only set if all of the target column's values are positive.
     */
    meanAbsolutePercentageError?: number | null;
    /**
     * A list of actual versus predicted points for the model being evaluated.
     */
    regressionMetricsEntries?: Schema$XPSRegressionMetricsEntry[];
    /**
     * Root mean squared error.
     */
    rootMeanSquaredError?: number | null;
    /**
     * Root mean squared log error.
     */
    rootMeanSquaredLogError?: number | null;
    /**
     * R squared.
     */
    rSquared?: number | null;
  }
  export interface Schema$XPSTablesTrainingOperationMetadata {
    /**
     * Current stage of creating model.
     */
    createModelStage?: string | null;
    /**
     * The optimization objective for model.
     */
    optimizationObjective?: string | null;
    /**
     * This field is for training. When the operation is terminated successfully, AutoML Backend post this field to operation metadata in spanner. If the metadata has no trials returned, the training operation is supposed to be a failure.
     */
    topTrials?: Schema$XPSTuningTrial[];
    /**
     * Creating model budget.
     */
    trainBudgetMilliNodeHours?: string | null;
    /**
     * This field records the training objective value with respect to time, giving insight into how the model architecture search is performing as training time elapses.
     */
    trainingObjectivePoints?: Schema$XPSTrainingObjectivePoint[];
    /**
     * Timestamp when training process starts.
     */
    trainingStartTime?: string | null;
  }
  export interface Schema$XPSTablesTrainResponse {
    modelStructure?: Schema$XPSTablesModelStructure;
    /**
     * Sample rows from the dataset this model was trained.
     */
    predictionSampleRows?: Schema$XPSRow[];
    /**
     * Output only. Auxiliary information for each of the input_feature_column_specs, with respect to this particular model.
     */
    tablesModelColumnInfo?: Schema$XPSTablesModelColumnInfo[];
    /**
     * The actual training cost of the model, expressed in milli node hours, i.e. 1,000 value in this field means 1 node hour. Guaranteed to not exceed the train budget.
     */
    trainCostMilliNodeHours?: string | null;
  }
  /**
   * Component model.
   */
  export interface Schema$XPSTextComponentModel {
    /**
     * The Cloud Storage resource path to hold batch prediction model.
     */
    batchPredictionModelGcsUri?: string | null;
    /**
     * The Cloud Storage resource path to hold online prediction model.
     */
    onlinePredictionModelGcsUri?: string | null;
    /**
     * The partition where the model is deployed. Populated by uCAIP BE as part of online PredictRequest.
     */
    partition?: string | null;
    /**
     * The default model binary file used for serving (e.g. online predict, batch predict) via public Cloud Ai Platform API.
     */
    servingArtifact?: Schema$XPSModelArtifactItem;
    /**
     * The name of servo model. Populated by uCAIP BE as part of online PredictRequest.
     */
    servoModelName?: string | null;
    /**
     * The name of the trained NL submodel.
     */
    submodelName?: string | null;
    /**
     * The type of trained NL submodel
     */
    submodelType?: string | null;
    /**
     * ## The fields below are only populated under uCAIP request scope. https://cloud.google.com/ml-engine/docs/runtime-version-list
     */
    tfRuntimeVersion?: string | null;
    /**
     * The servomatic model version number. Populated by uCAIP BE as part of online PredictRequest.
     */
    versionNumber?: string | null;
  }
  export interface Schema$XPSTextExtractionEvaluationMetrics {
    /**
     * Values are at the highest F1 score on the precision-recall curve. Only confidence_threshold, recall, precision, and f1_score will be set.
     */
    bestF1ConfidenceMetrics?: Schema$XPSConfidenceMetricsEntry;
    /**
     * If the enclosing EvaluationMetrics.label is empty, confidence_metrics_entries is an evaluation of the entire model across all labels. If the enclosing EvaluationMetrics.label is set, confidence_metrics_entries applies to that label.
     */
    confidenceMetricsEntries?: Schema$XPSConfidenceMetricsEntry[];
    /**
     * Confusion matrix of the model, at the default confidence threshold (0.0). Only set for whole-model evaluation, not for evaluation per label.
     */
    confusionMatrix?: Schema$XPSConfusionMatrix;
    /**
     * Only recall, precision, and f1_score will be set.
     */
    perLabelConfidenceMetrics?: {
      [key: string]: Schema$XPSConfidenceMetricsEntry;
    } | null;
  }
  /**
   * Model evaluation metrics for text sentiment problems.
   */
  export interface Schema$XPSTextSentimentEvaluationMetrics {
    /**
     * Output only. Confusion matrix of the evaluation. Only set for the overall model evaluation, not for evaluation of a single annotation spec.
     */
    confusionMatrix?: Schema$XPSConfusionMatrix;
    /**
     * Output only. The harmonic mean of recall and precision.
     */
    f1Score?: number | null;
    /**
     * Output only. Linear weighted kappa. Only set for the overall model evaluation, not for evaluation of a single annotation spec.
     */
    linearKappa?: number | null;
    /**
     * Output only. Mean absolute error. Only set for the overall model evaluation, not for evaluation of a single annotation spec.
     */
    meanAbsoluteError?: number | null;
    /**
     * Output only. Mean squared error. Only set for the overall model evaluation, not for evaluation of a single annotation spec.
     */
    meanSquaredError?: number | null;
    /**
     * Output only. Precision.
     */
    precision?: number | null;
    /**
     * Output only. Quadratic weighted kappa. Only set for the overall model evaluation, not for evaluation of a single annotation spec.
     */
    quadraticKappa?: number | null;
    /**
     * Output only. Recall.
     */
    recall?: number | null;
  }
  /**
   * TextToSpeech train response
   */
  export interface Schema$XPSTextToSpeechTrainResponse {}
  export interface Schema$XPSTextTrainResponse {
    /**
     * Component submodels.
     */
    componentModel?: Schema$XPSTextComponentModel[];
  }
  /**
   * A [TensorFlow.js](https://www.tensorflow.org/js) model that can be used in the browser and in Node.js using JavaScript.
   */
  export interface Schema$XPSTfJsFormat {}
  /**
   * LINT.IfChange A model format used for mobile and IoT devices. See https://www.tensorflow.org/lite.
   */
  export interface Schema$XPSTfLiteFormat {}
  /**
   * A tensorflow model format in SavedModel format.
   */
  export interface Schema$XPSTfSavedModelFormat {}
  /**
   * The data statistics of a series of TIMESTAMP values.
   */
  export interface Schema$XPSTimestampStats {
    commonStats?: Schema$XPSCommonStats;
    /**
     * The string key is the pre-defined granularity. Currently supported: hour_of_day, day_of_week, month_of_year. Granularities finer that the granularity of timestamp data are not populated (e.g. if timestamps are at day granularity, then hour_of_day is not populated).
     */
    granularStats?: {
      [key: string]: Schema$XPSTimestampStatsGranularStats;
    } | null;
    medianTimestampNanos?: string | null;
  }
  /**
   * Stats split by a defined in context granularity.
   */
  export interface Schema$XPSTimestampStatsGranularStats {
    /**
     * A map from granularity key to example count for that key. E.g. for hour_of_day `13` means 1pm, or for month_of_year `5` means May).
     */
    buckets?: {[key: string]: string} | null;
  }
  /**
   * Track matching model metrics for a single track match threshold and multiple label match confidence thresholds. Next tag: 6.
   */
  export interface Schema$XPSTrackMetricsEntry {
    /**
     * Output only. Metrics for each label-match confidence_threshold from 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. Precision-recall curve is derived from them.
     */
    confidenceMetricsEntries?: Schema$XPSTrackMetricsEntryConfidenceMetricsEntry[];
    /**
     * Output only. The intersection-over-union threshold value between bounding boxes across frames used to compute this metric entry.
     */
    iouThreshold?: number | null;
    /**
     * Output only. The mean bounding box iou over all confidence thresholds.
     */
    meanBoundingBoxIou?: number | null;
    /**
     * Output only. The mean mismatch rate over all confidence thresholds.
     */
    meanMismatchRate?: number | null;
    /**
     * Output only. The mean average precision over all confidence thresholds.
     */
    meanTrackingAveragePrecision?: number | null;
  }
  /**
   * Metrics for a single confidence threshold. Next tag: 6.
   */
  export interface Schema$XPSTrackMetricsEntryConfidenceMetricsEntry {
    /**
     * Output only. Bounding box intersection-over-union precision. Measures how well the bounding boxes overlap between each other (e.g. complete overlap or just barely above iou_threshold).
     */
    boundingBoxIou?: number | null;
    /**
     * Output only. The confidence threshold value used to compute the metrics.
     */
    confidenceThreshold?: number | null;
    /**
     * Output only. Mismatch rate, which measures the tracking consistency, i.e. correctness of instance ID continuity.
     */
    mismatchRate?: number | null;
    /**
     * Output only. Tracking precision.
     */
    trackingPrecision?: number | null;
    /**
     * Output only. Tracking recall.
     */
    trackingRecall?: number | null;
  }
  export interface Schema$XPSTrainingObjectivePoint {
    /**
     * The time at which this point was recorded.
     */
    createTime?: string | null;
    /**
     * The objective value when this point was recorded.
     */
    value?: number | null;
  }
  export interface Schema$XPSTrainResponse {
    /**
     * Estimated model size in bytes once deployed.
     */
    deployedModelSizeBytes?: string | null;
    /**
     * Optional vision model error analysis configuration. The field is set when model error analysis is enabled in the training request. The results of error analysis will be binded together with evaluation results (in the format of AnnotatedExample).
     */
    errorAnalysisConfigs?: Schema$XPSVisionErrorAnalysisConfig[];
    /**
     * Examples used to evaluate the model (usually the test set), with the predicted annotations. The file_spec should point to recordio file(s) of AnnotatedExample. For each returned example, the example_id_token and annotations predicted by the model must be set. The example payload can and is recommended to be omitted.
     */
    evaluatedExampleSet?: Schema$XPSExampleSet;
    /**
     * The trained model evaluation metrics. This can be optionally returned.
     */
    evaluationMetricsSet?: Schema$XPSEvaluationMetricsSet;
    /**
     * VisionExplanationConfig for XAI on test set. Optional for when XAI is enable in training request.
     */
    explanationConfigs?: Schema$XPSResponseExplanationSpec[];
    imageClassificationTrainResp?: Schema$XPSImageClassificationTrainResponse;
    imageObjectDetectionTrainResp?: Schema$XPSImageObjectDetectionModelSpec;
    imageSegmentationTrainResp?: Schema$XPSImageSegmentationTrainResponse;
    /**
     * Token that represents the trained model. This is considered immutable and is persisted in AutoML. xPS can put their own proto in the byte string, to e.g. point to the model checkpoints. The token is passed to other xPS APIs to refer to the model.
     */
    modelToken?: string | null;
    speechTrainResp?: Schema$XPSSpeechModelSpec;
    tablesTrainResp?: Schema$XPSTablesTrainResponse;
    textToSpeechTrainResp?: Schema$XPSTextToSpeechTrainResponse;
    /**
     * Will only be needed for uCAIP from Beta.
     */
    textTrainResp?: Schema$XPSTextTrainResponse;
    translationTrainResp?: Schema$XPSTranslationTrainResponse;
    videoActionRecognitionTrainResp?: Schema$XPSVideoActionRecognitionTrainResponse;
    videoClassificationTrainResp?: Schema$XPSVideoClassificationTrainResponse;
    videoObjectTrackingTrainResp?: Schema$XPSVideoObjectTrackingTrainResponse;
  }
  /**
   * Evaluation metrics for the dataset.
   */
  export interface Schema$XPSTranslationEvaluationMetrics {
    /**
     * BLEU score for base model.
     */
    baseBleuScore?: number | null;
    /**
     * BLEU score.
     */
    bleuScore?: number | null;
  }
  /**
   * Translation preprocess response.
   */
  export interface Schema$XPSTranslationPreprocessResponse {
    /**
     * Total example count parsed.
     */
    parsedExampleCount?: string | null;
    /**
     * Total valid example count.
     */
    validExampleCount?: string | null;
  }
  /**
   * Train response for translation.
   */
  export interface Schema$XPSTranslationTrainResponse {
    /**
     * Type of the model.
     */
    modelType?: string | null;
  }
  /**
   * Metrics for a tuning job generated, will get forwarded to Stackdriver as model tuning logs. Setting this as a standalone message out of CreateModelMetadata to avoid confusion as we expose this message only to users.
   */
  export interface Schema$XPSTuningTrial {
    /**
     * Model parameters for the trial.
     */
    modelStructure?: Schema$XPSTablesModelStructure;
    /**
     * The optimization objective evaluation of the eval split data.
     */
    trainingObjectivePoint?: Schema$XPSTrainingObjectivePoint;
  }
  /**
   * The Evaluation metrics entry given a specific precision_window_length.
   */
  export interface Schema$XPSVideoActionMetricsEntry {
    /**
     * Metrics for each label-match confidence_threshold from 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99.
     */
    confidenceMetricsEntries?: Schema$XPSVideoActionMetricsEntryConfidenceMetricsEntry[];
    /**
     * The mean average precision.
     */
    meanAveragePrecision?: number | null;
    /**
     * This VideoActionMetricsEntry is calculated based on this prediction window length. If the predicted action's timestamp is inside the time window whose center is the ground truth action's timestamp with this specific length, the prediction result is treated as a true positive.
     */
    precisionWindowLength?: string | null;
  }
  /**
   * Metrics for a single confidence threshold.
   */
  export interface Schema$XPSVideoActionMetricsEntryConfidenceMetricsEntry {
    /**
     * Output only. The confidence threshold value used to compute the metrics.
     */
    confidenceThreshold?: number | null;
    /**
     * Output only. The harmonic mean of recall and precision.
     */
    f1Score?: number | null;
    /**
     * Output only. Precision for the given confidence threshold.
     */
    precision?: number | null;
    /**
     * Output only. Recall for the given confidence threshold.
     */
    recall?: number | null;
  }
  /**
   * Model evaluation metrics for video action recognition.
   */
  export interface Schema$XPSVideoActionRecognitionEvaluationMetrics {
    /**
     * Output only. The number of ground truth actions used to create this evaluation.
     */
    evaluatedActionCount?: number | null;
    /**
     * Output only. The metric entries for precision window lengths: 1s,2s,3s,4s, 5s.
     */
    videoActionMetricsEntries?: Schema$XPSVideoActionMetricsEntry[];
  }
  export interface Schema$XPSVideoActionRecognitionTrainResponse {
    /**
     * ## The fields below are only populated under uCAIP request scope.
     */
    modelArtifactSpec?: Schema$XPSVideoModelArtifactSpec;
    /**
     * The actual train cost of creating this model, expressed in node seconds, i.e. 3,600 value in this field means 1 node hour.
     */
    trainCostNodeSeconds?: string | null;
  }
  export interface Schema$XPSVideoBatchPredictOperationMetadata {
    /**
     * All the partial batch prediction results that are completed at the moment. Output examples are sorted by completion time. The order will not be changed. Each output example should be the path of a single RecordIO file of AnnotatedExamples.
     */
    outputExamples?: string[] | null;
  }
  export interface Schema$XPSVideoClassificationTrainResponse {
    /**
     * ## The fields below are only populated under uCAIP request scope.
     */
    modelArtifactSpec?: Schema$XPSVideoModelArtifactSpec;
    /**
     * The actual train cost of creating this model, expressed in node seconds, i.e. 3,600 value in this field means 1 node hour.
     */
    trainCostNodeSeconds?: string | null;
  }
  /**
   * Information of downloadable models that are pre-generated as part of training flow and will be persisted in AutoMl backend. Upon receiving ExportModel request from user, AutoMl backend can serve the pre-generated models to user if exists (by copying the files from internal path to user provided location), otherwise, AutoMl backend will call xPS ExportModel API to generate the model on the fly with the requesting format.
   */
  export interface Schema$XPSVideoExportModelSpec {
    /**
     * Contains the model format and internal location of the model files to be exported/downloaded. Use the Google Cloud Storage bucket name which is provided via TrainRequest.gcs_bucket_name to store the model files.
     */
    exportModelOutputConfig?: Schema$XPSExportModelOutputConfig[];
  }
  export interface Schema$XPSVideoModelArtifactSpec {
    /**
     * The model binary files in different formats for model export.
     */
    exportArtifact?: Schema$XPSModelArtifactItem[];
    /**
     * The default model binary file used for serving (e.g. batch predict) via public Cloud AI Platform API.
     */
    servingArtifact?: Schema$XPSModelArtifactItem;
  }
  /**
   * Model evaluation metrics for ObjectTracking problems. Next tag: 10.
   */
  export interface Schema$XPSVideoObjectTrackingEvaluationMetrics {
    /**
     * Output only. The single metric for bounding boxes evaluation: the mean_average_precision averaged over all bounding_box_metrics_entries.
     */
    boundingBoxMeanAveragePrecision?: number | null;
    /**
     * Output only. The bounding boxes match metrics for each Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99.
     */
    boundingBoxMetricsEntries?: Schema$XPSBoundingBoxMetricsEntry[];
    /**
     * The number of bounding boxes used for model evaluation.
     */
    evaluatedBoundingboxCount?: number | null;
    /**
     * The number of video frames used for model evaluation.
     */
    evaluatedFrameCount?: number | null;
    /**
     * The number of tracks used for model evaluation.
     */
    evaluatedTrackCount?: number | null;
    /**
     * Output only. The single metric for tracks accuracy evaluation: the mean_average_precision averaged over all track_metrics_entries.
     */
    trackMeanAveragePrecision?: number | null;
    /**
     * Output only. The single metric for tracks bounding box iou evaluation: the mean_bounding_box_iou averaged over all track_metrics_entries.
     */
    trackMeanBoundingBoxIou?: number | null;
    /**
     * Output only. The single metric for tracking consistency evaluation: the mean_mismatch_rate averaged over all track_metrics_entries.
     */
    trackMeanMismatchRate?: number | null;
    /**
     * Output only. The tracks match metrics for each Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99.
     */
    trackMetricsEntries?: Schema$XPSTrackMetricsEntry[];
  }
  export interface Schema$XPSVideoObjectTrackingTrainResponse {
    /**
     * Populated for AutoML request only.
     */
    exportModelSpec?: Schema$XPSVideoExportModelSpec;
    /**
     * ## The fields below are only populated under uCAIP request scope.
     */
    modelArtifactSpec?: Schema$XPSVideoModelArtifactSpec;
    /**
     * The actual train cost of creating this model, expressed in node seconds, i.e. 3,600 value in this field means 1 node hour.
     */
    trainCostNodeSeconds?: string | null;
  }
  export interface Schema$XPSVideoTrainingOperationMetadata {
    /**
     * This is an estimation of the node hours necessary for training a model, expressed in milli node hours (i.e. 1,000 value in this field means 1 node hour). A node hour represents the time a virtual machine spends running your training job. The cost of one node running for one hour is a node hour.
     */
    trainCostMilliNodeHour?: string | null;
  }
  /**
   * The vision model error analysis configuration. Next tag: 3
   */
  export interface Schema$XPSVisionErrorAnalysisConfig {
    /**
     * The number of query examples in error analysis.
     */
    exampleCount?: number | null;
    /**
     * The query type used in retrieval. The enum values are frozen in the foreseeable future.
     */
    queryType?: string | null;
  }
  export interface Schema$XPSVisionTrainingOperationMetadata {
    /**
     * Aggregated infra usage within certain time period, for billing report purpose if XAI is enable in training request.
     */
    explanationUsage?: Schema$InfraUsage;
  }
  /**
   * Visualization configurations for image explanation.
   */
  export interface Schema$XPSVisualization {
    /**
     * Excludes attributions below the specified percentile, from the highlighted areas. Defaults to 62.
     */
    clipPercentLowerbound?: number | null;
    /**
     * Excludes attributions above the specified percentile from the highlighted areas. Using the clip_percent_upperbound and clip_percent_lowerbound together can be useful for filtering out noise and making it easier to see areas of strong attribution. Defaults to 99.9.
     */
    clipPercentUpperbound?: number | null;
    /**
     * The color scheme used for the highlighted areas. Defaults to PINK_GREEN for Integrated Gradients attribution, which shows positive attributions in green and negative in pink. Defaults to VIRIDIS for XRAI attribution, which highlights the most influential regions in yellow and the least influential in blue.
     */
    colorMap?: string | null;
    /**
     * How the original image is displayed in the visualization. Adjusting the overlay can help increase visual clarity if the original image makes it difficult to view the visualization. Defaults to NONE.
     */
    overlayType?: string | null;
    /**
     * Whether to only highlight pixels with positive contributions, negative or both. Defaults to POSITIVE.
     */
    polarity?: string | null;
    /**
     * Type of the image visualization. Only applicable to Integrated Gradients attribution. OUTLINES shows regions of attribution, while PIXELS shows per-pixel attribution. Defaults to OUTLINES.
     */
    type?: string | null;
  }
  export interface Schema$XPSXpsOperationMetadata {
    /**
     * Optional. XPS server can opt to provide example count of the long running operation (e.g. training, data importing, batch prediction).
     */
    exampleCount?: string | null;
    /**
     * Metrics for the operation. By the time the operation is terminated (whether succeeded or failed) as returned from XPS, AutoML BE assumes the metrics are finalized. AutoML BE transparently posts the metrics to Chemist if it's not empty, regardless of the response content or error type. If user is supposed to be charged in case of cancellation/error, this field should be set. In the case where the type of LRO doesn't require any billing, this field should be left unset.
     */
    reportingMetrics?: Schema$XPSReportingMetrics;
    tablesTrainingOperationMetadata?: Schema$XPSTablesTrainingOperationMetadata;
    videoBatchPredictOperationMetadata?: Schema$XPSVideoBatchPredictOperationMetadata;
    videoTrainingOperationMetadata?: Schema$XPSVideoTrainingOperationMetadata;
    visionTrainingOperationMetadata?: Schema$XPSVisionTrainingOperationMetadata;
  }
  /**
   * An explanation method that redistributes Integrated Gradients attributions to segmented regions, taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1906.02825 Only supports image Models (modality is IMAGE).
   */
  export interface Schema$XPSXraiAttribution {
    /**
     * The number of steps for approximating the path integral. A good value to start is 50 and gradually increase until the sum to diff property is met within the desired error range. Valid range of its value is [1, 100], inclusively.
     */
    stepCount?: number | null;
  }

  export class Resource$Documents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/language.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const language = google.language('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-language',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await language.documents.analyzeEntities({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "document": {},
     *       //   "encodingType": "my_encodingType"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entities": [],
     *   //   "language": "my_language"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    analyzeEntities(
      params: Params$Resource$Documents$Analyzeentities,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    analyzeEntities(
      params?: Params$Resource$Documents$Analyzeentities,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AnalyzeEntitiesResponse>>;
    analyzeEntities(
      params: Params$Resource$Documents$Analyzeentities,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    analyzeEntities(
      params: Params$Resource$Documents$Analyzeentities,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AnalyzeEntitiesResponse>,
      callback: BodyResponseCallback<Schema$AnalyzeEntitiesResponse>
    ): void;
    analyzeEntities(
      params: Params$Resource$Documents$Analyzeentities,
      callback: BodyResponseCallback<Schema$AnalyzeEntitiesResponse>
    ): void;
    analyzeEntities(
      callback: BodyResponseCallback<Schema$AnalyzeEntitiesResponse>
    ): void;
    analyzeEntities(
      paramsOrCallback?:
        | Params$Resource$Documents$Analyzeentities
        | BodyResponseCallback<Schema$AnalyzeEntitiesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AnalyzeEntitiesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AnalyzeEntitiesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AnalyzeEntitiesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Documents$Analyzeentities;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Analyzeentities;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://language.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/documents:analyzeEntities').replace(
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
        createAPIRequest<Schema$AnalyzeEntitiesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AnalyzeEntitiesResponse>(parameters);
      }
    }

    /**
     * Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/language.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const language = google.language('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-language',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await language.documents.analyzeEntitySentiment({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "document": {},
     *       //   "encodingType": "my_encodingType"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entities": [],
     *   //   "language": "my_language"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    analyzeEntitySentiment(
      params: Params$Resource$Documents$Analyzeentitysentiment,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    analyzeEntitySentiment(
      params?: Params$Resource$Documents$Analyzeentitysentiment,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AnalyzeEntitySentimentResponse>>;
    analyzeEntitySentiment(
      params: Params$Resource$Documents$Analyzeentitysentiment,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    analyzeEntitySentiment(
      params: Params$Resource$Documents$Analyzeentitysentiment,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AnalyzeEntitySentimentResponse>,
      callback: BodyResponseCallback<Schema$AnalyzeEntitySentimentResponse>
    ): void;
    analyzeEntitySentiment(
      params: Params$Resource$Documents$Analyzeentitysentiment,
      callback: BodyResponseCallback<Schema$AnalyzeEntitySentimentResponse>
    ): void;
    analyzeEntitySentiment(
      callback: BodyResponseCallback<Schema$AnalyzeEntitySentimentResponse>
    ): void;
    analyzeEntitySentiment(
      paramsOrCallback?:
        | Params$Resource$Documents$Analyzeentitysentiment
        | BodyResponseCallback<Schema$AnalyzeEntitySentimentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AnalyzeEntitySentimentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AnalyzeEntitySentimentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AnalyzeEntitySentimentResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Documents$Analyzeentitysentiment;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Analyzeentitysentiment;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://language.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/documents:analyzeEntitySentiment').replace(
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
        createAPIRequest<Schema$AnalyzeEntitySentimentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AnalyzeEntitySentimentResponse>(
          parameters
        );
      }
    }

    /**
     * Analyzes the sentiment of the provided text.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/language.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const language = google.language('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-language',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await language.documents.analyzeSentiment({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "document": {},
     *       //   "encodingType": "my_encodingType"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "documentSentiment": {},
     *   //   "language": "my_language",
     *   //   "sentences": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    analyzeSentiment(
      params: Params$Resource$Documents$Analyzesentiment,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    analyzeSentiment(
      params?: Params$Resource$Documents$Analyzesentiment,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AnalyzeSentimentResponse>>;
    analyzeSentiment(
      params: Params$Resource$Documents$Analyzesentiment,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    analyzeSentiment(
      params: Params$Resource$Documents$Analyzesentiment,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AnalyzeSentimentResponse>,
      callback: BodyResponseCallback<Schema$AnalyzeSentimentResponse>
    ): void;
    analyzeSentiment(
      params: Params$Resource$Documents$Analyzesentiment,
      callback: BodyResponseCallback<Schema$AnalyzeSentimentResponse>
    ): void;
    analyzeSentiment(
      callback: BodyResponseCallback<Schema$AnalyzeSentimentResponse>
    ): void;
    analyzeSentiment(
      paramsOrCallback?:
        | Params$Resource$Documents$Analyzesentiment
        | BodyResponseCallback<Schema$AnalyzeSentimentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AnalyzeSentimentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AnalyzeSentimentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AnalyzeSentimentResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Documents$Analyzesentiment;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Analyzesentiment;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://language.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/documents:analyzeSentiment').replace(
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
        createAPIRequest<Schema$AnalyzeSentimentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AnalyzeSentimentResponse>(parameters);
      }
    }

    /**
     * Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/language.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const language = google.language('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-language',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await language.documents.analyzeSyntax({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "document": {},
     *       //   "encodingType": "my_encodingType"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "language": "my_language",
     *   //   "sentences": [],
     *   //   "tokens": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    analyzeSyntax(
      params: Params$Resource$Documents$Analyzesyntax,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    analyzeSyntax(
      params?: Params$Resource$Documents$Analyzesyntax,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AnalyzeSyntaxResponse>>;
    analyzeSyntax(
      params: Params$Resource$Documents$Analyzesyntax,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    analyzeSyntax(
      params: Params$Resource$Documents$Analyzesyntax,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AnalyzeSyntaxResponse>,
      callback: BodyResponseCallback<Schema$AnalyzeSyntaxResponse>
    ): void;
    analyzeSyntax(
      params: Params$Resource$Documents$Analyzesyntax,
      callback: BodyResponseCallback<Schema$AnalyzeSyntaxResponse>
    ): void;
    analyzeSyntax(
      callback: BodyResponseCallback<Schema$AnalyzeSyntaxResponse>
    ): void;
    analyzeSyntax(
      paramsOrCallback?:
        | Params$Resource$Documents$Analyzesyntax
        | BodyResponseCallback<Schema$AnalyzeSyntaxResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AnalyzeSyntaxResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AnalyzeSyntaxResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AnalyzeSyntaxResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Documents$Analyzesyntax;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Analyzesyntax;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://language.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/documents:analyzeSyntax').replace(
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
        createAPIRequest<Schema$AnalyzeSyntaxResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AnalyzeSyntaxResponse>(parameters);
      }
    }

    /**
     * A convenience method that provides all the features that analyzeSentiment, analyzeEntities, and analyzeSyntax provide in one call.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/language.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const language = google.language('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-language',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await language.documents.annotateText({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "document": {},
     *       //   "encodingType": "my_encodingType",
     *       //   "features": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "categories": [],
     *   //   "documentSentiment": {},
     *   //   "entities": [],
     *   //   "language": "my_language",
     *   //   "moderationCategories": [],
     *   //   "sentences": [],
     *   //   "tokens": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    annotateText(
      params: Params$Resource$Documents$Annotatetext,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    annotateText(
      params?: Params$Resource$Documents$Annotatetext,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AnnotateTextResponse>>;
    annotateText(
      params: Params$Resource$Documents$Annotatetext,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    annotateText(
      params: Params$Resource$Documents$Annotatetext,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AnnotateTextResponse>,
      callback: BodyResponseCallback<Schema$AnnotateTextResponse>
    ): void;
    annotateText(
      params: Params$Resource$Documents$Annotatetext,
      callback: BodyResponseCallback<Schema$AnnotateTextResponse>
    ): void;
    annotateText(
      callback: BodyResponseCallback<Schema$AnnotateTextResponse>
    ): void;
    annotateText(
      paramsOrCallback?:
        | Params$Resource$Documents$Annotatetext
        | BodyResponseCallback<Schema$AnnotateTextResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AnnotateTextResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AnnotateTextResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AnnotateTextResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Documents$Annotatetext;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Annotatetext;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://language.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/documents:annotateText').replace(
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
        createAPIRequest<Schema$AnnotateTextResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AnnotateTextResponse>(parameters);
      }
    }

    /**
     * Classifies a document into categories.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/language.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const language = google.language('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-language',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await language.documents.classifyText({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "classificationModelOptions": {},
     *       //   "document": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "categories": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    classifyText(
      params: Params$Resource$Documents$Classifytext,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    classifyText(
      params?: Params$Resource$Documents$Classifytext,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ClassifyTextResponse>>;
    classifyText(
      params: Params$Resource$Documents$Classifytext,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    classifyText(
      params: Params$Resource$Documents$Classifytext,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ClassifyTextResponse>,
      callback: BodyResponseCallback<Schema$ClassifyTextResponse>
    ): void;
    classifyText(
      params: Params$Resource$Documents$Classifytext,
      callback: BodyResponseCallback<Schema$ClassifyTextResponse>
    ): void;
    classifyText(
      callback: BodyResponseCallback<Schema$ClassifyTextResponse>
    ): void;
    classifyText(
      paramsOrCallback?:
        | Params$Resource$Documents$Classifytext
        | BodyResponseCallback<Schema$ClassifyTextResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ClassifyTextResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ClassifyTextResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ClassifyTextResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Documents$Classifytext;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Classifytext;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://language.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/documents:classifyText').replace(
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
        createAPIRequest<Schema$ClassifyTextResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ClassifyTextResponse>(parameters);
      }
    }

    /**
     * Moderates a document for harmful and sensitive categories.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/language.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const language = google.language('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-language',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await language.documents.moderateText({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "document": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "moderationCategories": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    moderateText(
      params: Params$Resource$Documents$Moderatetext,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    moderateText(
      params?: Params$Resource$Documents$Moderatetext,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ModerateTextResponse>>;
    moderateText(
      params: Params$Resource$Documents$Moderatetext,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    moderateText(
      params: Params$Resource$Documents$Moderatetext,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ModerateTextResponse>,
      callback: BodyResponseCallback<Schema$ModerateTextResponse>
    ): void;
    moderateText(
      params: Params$Resource$Documents$Moderatetext,
      callback: BodyResponseCallback<Schema$ModerateTextResponse>
    ): void;
    moderateText(
      callback: BodyResponseCallback<Schema$ModerateTextResponse>
    ): void;
    moderateText(
      paramsOrCallback?:
        | Params$Resource$Documents$Moderatetext
        | BodyResponseCallback<Schema$ModerateTextResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ModerateTextResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ModerateTextResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ModerateTextResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Documents$Moderatetext;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Documents$Moderatetext;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://language.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/documents:moderateText').replace(
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
        createAPIRequest<Schema$ModerateTextResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ModerateTextResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Documents$Analyzeentities
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$AnalyzeEntitiesRequest;
  }
  export interface Params$Resource$Documents$Analyzeentitysentiment
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$AnalyzeEntitySentimentRequest;
  }
  export interface Params$Resource$Documents$Analyzesentiment
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$AnalyzeSentimentRequest;
  }
  export interface Params$Resource$Documents$Analyzesyntax
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$AnalyzeSyntaxRequest;
  }
  export interface Params$Resource$Documents$Annotatetext
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$AnnotateTextRequest;
  }
  export interface Params$Resource$Documents$Classifytext
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$ClassifyTextRequest;
  }
  export interface Params$Resource$Documents$Moderatetext
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$ModerateTextRequest;
  }
}
