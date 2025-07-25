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

export namespace datalabeling_v1beta1 {
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
   * Data Labeling API
   *
   * Public API for Google Cloud AI Data Labeling Service.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const datalabeling = google.datalabeling('v1beta1');
   * ```
   */
  export class Datalabeling {
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
   * Metadata of a CreateInstruction operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1CreateInstructionMetadata {
    /**
     * Timestamp when create instruction request was created.
     */
    createTime?: string | null;
    /**
     * The name of the created Instruction. projects/{project_id\}/instructions/{instruction_id\}
     */
    instruction?: string | null;
    /**
     * Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
     */
    partialFailures?: Schema$GoogleRpcStatus[];
  }
  /**
   * Metadata of an ExportData operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1ExportDataOperationMetadata {
    /**
     * Output only. The name of annotated dataset in format "projects/x/datasets/x/annotatedDatasets/x".
     */
    annotatedDataset?: string | null;
    /**
     * Output only. Timestamp when export dataset request was created.
     */
    createTime?: string | null;
    /**
     * Output only. The name of dataset to be exported. "projects/x/datasets/x"
     */
    dataset?: string | null;
    /**
     * Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
     */
    partialFailures?: Schema$GoogleRpcStatus[];
  }
  /**
   * Response used for ExportDataset longrunning operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1ExportDataOperationResponse {
    /**
     * Output only. The name of annotated dataset in format "projects/x/datasets/x/annotatedDatasets/x".
     */
    annotatedDataset?: string | null;
    /**
     * Ouptut only. The name of dataset. "projects/x/datasets/x"
     */
    dataset?: string | null;
    /**
     * Output only. Number of examples exported successfully.
     */
    exportCount?: number | null;
    /**
     * Output only. Statistic infos of labels in the exported dataset.
     */
    labelStats?: Schema$GoogleCloudDatalabelingV1alpha1LabelStats;
    /**
     * Output only. output_config in the ExportData request.
     */
    outputConfig?: Schema$GoogleCloudDatalabelingV1alpha1OutputConfig;
    /**
     * Output only. Total number of examples requested to export
     */
    totalCount?: number | null;
  }
  /**
   * Export destination of the data.Only gcs path is allowed in output_uri.
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1GcsDestination {
    /**
     * Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported.
     */
    mimeType?: string | null;
    /**
     * Required. The output uri of destination file.
     */
    outputUri?: string | null;
  }
  /**
   * Export folder destination of the data.
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1GcsFolderDestination {
    /**
     * Required. Cloud Storage directory to export data to.
     */
    outputFolderUri?: string | null;
  }
  /**
   * Configuration for how human labeling task should be done.
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig {
    /**
     * Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long.
     */
    annotatedDatasetDescription?: string | null;
    /**
     * Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters .
     */
    annotatedDatasetDisplayName?: string | null;
    /**
     * Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/
     */
    contributorEmails?: string[] | null;
    /**
     * Required. Instruction resource name.
     */
    instruction?: string | null;
    /**
     * Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128\}`.
     */
    labelGroup?: string | null;
    /**
     * Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification.
     */
    languageCode?: string | null;
    /**
     * Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds.
     */
    questionDuration?: string | null;
    /**
     * Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.
     */
    replicaCount?: number | null;
    /**
     * Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent.
     */
    userEmailAddress?: string | null;
  }
  /**
   * Metadata of an ImportData operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1ImportDataOperationMetadata {
    /**
     * Output only. Timestamp when import dataset request was created.
     */
    createTime?: string | null;
    /**
     * Output only. The name of imported dataset. "projects/x/datasets/x"
     */
    dataset?: string | null;
    /**
     * Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
     */
    partialFailures?: Schema$GoogleRpcStatus[];
  }
  /**
   * Response used for ImportData longrunning operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1ImportDataOperationResponse {
    /**
     * Ouptut only. The name of imported dataset.
     */
    dataset?: string | null;
    /**
     * Output only. Number of examples imported successfully.
     */
    importCount?: number | null;
    /**
     * Output only. Total number of examples requested to import
     */
    totalCount?: number | null;
  }
  /**
   * Details of a LabelImageBoundingBox operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
  }
  /**
   * Details of LabelImageBoundingPoly operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
  }
  /**
   * Metadata of a LabelImageClassification operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelImageOrientedBoundingBox operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadata {
    /**
     * Basic human annotation config.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
  }
  /**
   * Details of LabelImagePolyline operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelImageSegmentation operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadata {
    /**
     * Basic human annotation config.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
  }
  /**
   * Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1LabelOperationMetadata {
    /**
     * Output only. The name of annotated dataset in format "projects/x/datasets/x/annotatedDatasets/x".
     */
    annotatedDataset?: string | null;
    /**
     * Output only. Timestamp when labeling request was created.
     */
    createTime?: string | null;
    /**
     * Output only. The name of dataset to be labeled. "projects/x/datasets/x"
     */
    dataset?: string | null;
    /**
     * Details of label image bounding box operation.
     */
    imageBoundingBoxDetails?: Schema$GoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadata;
    /**
     * Details of label image bounding poly operation.
     */
    imageBoundingPolyDetails?: Schema$GoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadata;
    /**
     * Details of label image classification operation.
     */
    imageClassificationDetails?: Schema$GoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadata;
    /**
     * Details of label image oriented bounding box operation.
     */
    imageOrientedBoundingBoxDetails?: Schema$GoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadata;
    /**
     * Details of label image polyline operation.
     */
    imagePolylineDetails?: Schema$GoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadata;
    /**
     * Details of label image segmentation operation.
     */
    imageSegmentationDetails?: Schema$GoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadata;
    /**
     * Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
     */
    partialFailures?: Schema$GoogleRpcStatus[];
    /**
     * Output only. Progress of label operation. Range: [0, 100].
     */
    progressPercent?: number | null;
    /**
     * Details of label text classification operation.
     */
    textClassificationDetails?: Schema$GoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadata;
    /**
     * Details of label text entity extraction operation.
     */
    textEntityExtractionDetails?: Schema$GoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadata;
    /**
     * Details of label video classification operation.
     */
    videoClassificationDetails?: Schema$GoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadata;
    /**
     * Details of label video event operation.
     */
    videoEventDetails?: Schema$GoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadata;
    /**
     * Details of label video object detection operation.
     */
    videoObjectDetectionDetails?: Schema$GoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadata;
    /**
     * Details of label video object tracking operation.
     */
    videoObjectTrackingDetails?: Schema$GoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadata;
  }
  /**
   * Statistics about annotation specs.
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1LabelStats {
    /**
     * Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations.
     */
    exampleCount?: {[key: string]: string} | null;
  }
  /**
   * Details of a LabelTextClassification operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelTextEntityExtraction operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelVideoClassification operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelVideoEvent operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelVideoObjectDetection operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelVideoObjectTracking operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig;
  }
  /**
   * The configuration of output data.
   */
  export interface Schema$GoogleCloudDatalabelingV1alpha1OutputConfig {
    /**
     * Output to a file in Cloud Storage. Should be used for labeling output other than image segmentation.
     */
    gcsDestination?: Schema$GoogleCloudDatalabelingV1alpha1GcsDestination;
    /**
     * Output to a folder in Cloud Storage. Should be used for image segmentation or document de-identification labeling outputs.
     */
    gcsFolderDestination?: Schema$GoogleCloudDatalabelingV1alpha1GcsFolderDestination;
  }
  /**
   * AnnotatedDataset is a set holding annotations for data in a Dataset. Each labeling task will generate an AnnotatedDataset under the Dataset that the task is requested for.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1AnnotatedDataset {
    /**
     * Output only. Source of the annotation.
     */
    annotationSource?: string | null;
    /**
     * Output only. Type of the annotation. It is specified when starting labeling task.
     */
    annotationType?: string | null;
    /**
     * Output only. The names of any related resources that are blocking changes to the annotated dataset.
     */
    blockingResources?: string[] | null;
    /**
     * Output only. Number of examples that have annotation in the annotated dataset.
     */
    completedExampleCount?: string | null;
    /**
     * Output only. Time the AnnotatedDataset was created.
     */
    createTime?: string | null;
    /**
     * Output only. The description of the AnnotatedDataset. It is specified in HumanAnnotationConfig when user starts a labeling task. Maximum of 10000 characters.
     */
    description?: string | null;
    /**
     * Output only. The display name of the AnnotatedDataset. It is specified in HumanAnnotationConfig when user starts a labeling task. Maximum of 64 characters.
     */
    displayName?: string | null;
    /**
     * Output only. Number of examples in the annotated dataset.
     */
    exampleCount?: string | null;
    /**
     * Output only. Per label statistics.
     */
    labelStats?: Schema$GoogleCloudDatalabelingV1beta1LabelStats;
    /**
     * Output only. Additional information about AnnotatedDataset.
     */
    metadata?: Schema$GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata;
    /**
     * Output only. AnnotatedDataset resource name in format of: projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/ {annotated_dataset_id\}
     */
    name?: string | null;
  }
  /**
   * Metadata on AnnotatedDataset.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata {
    /**
     * Configuration for image bounding box and bounding poly task.
     */
    boundingPolyConfig?: Schema$GoogleCloudDatalabelingV1beta1BoundingPolyConfig;
    /**
     * Configuration for video event labeling task.
     */
    eventConfig?: Schema$GoogleCloudDatalabelingV1beta1EventConfig;
    /**
     * HumanAnnotationConfig used when requesting the human labeling task for this AnnotatedDataset.
     */
    humanAnnotationConfig?: Schema$GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
    /**
     * Configuration for image classification task.
     */
    imageClassificationConfig?: Schema$GoogleCloudDatalabelingV1beta1ImageClassificationConfig;
    /**
     * Configuration for video object detection task.
     */
    objectDetectionConfig?: Schema$GoogleCloudDatalabelingV1beta1ObjectDetectionConfig;
    /**
     * Configuration for video object tracking task.
     */
    objectTrackingConfig?: Schema$GoogleCloudDatalabelingV1beta1ObjectTrackingConfig;
    /**
     * Configuration for image polyline task.
     */
    polylineConfig?: Schema$GoogleCloudDatalabelingV1beta1PolylineConfig;
    /**
     * Configuration for image segmentation task.
     */
    segmentationConfig?: Schema$GoogleCloudDatalabelingV1beta1SegmentationConfig;
    /**
     * Configuration for text classification task.
     */
    textClassificationConfig?: Schema$GoogleCloudDatalabelingV1beta1TextClassificationConfig;
    /**
     * Configuration for text entity extraction task.
     */
    textEntityExtractionConfig?: Schema$GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig;
    /**
     * Configuration for video classification task.
     */
    videoClassificationConfig?: Schema$GoogleCloudDatalabelingV1beta1VideoClassificationConfig;
  }
  /**
   * Annotation for Example. Each example may have one or more annotations. For example in image classification problem, each image might have one or more labels. We call labels binded with this image an Annotation.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1Annotation {
    /**
     * Output only. Annotation metadata, including information like votes for labels.
     */
    annotationMetadata?: Schema$GoogleCloudDatalabelingV1beta1AnnotationMetadata;
    /**
     * Output only. Sentiment for this annotation.
     */
    annotationSentiment?: string | null;
    /**
     * Output only. The source of the annotation.
     */
    annotationSource?: string | null;
    /**
     * Output only. This is the actual annotation value, e.g classification, bounding box values are stored here.
     */
    annotationValue?: Schema$GoogleCloudDatalabelingV1beta1AnnotationValue;
    /**
     * Output only. Unique name of this annotation, format is: projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/{annotated_dataset\}/examples/{example_id\}/annotations/{annotation_id\}
     */
    name?: string | null;
  }
  /**
   * Additional information associated with the annotation.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1AnnotationMetadata {
    /**
     * Metadata related to human labeling.
     */
    operatorMetadata?: Schema$GoogleCloudDatalabelingV1beta1OperatorMetadata;
  }
  /**
   * Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1AnnotationSpec {
    /**
     * Optional. User-provided description of the annotation specification. The description can be up to 10,000 characters long.
     */
    description?: string | null;
    /**
     * Required. The display name of the AnnotationSpec. Maximum of 64 characters.
     */
    displayName?: string | null;
    /**
     * Output only. This is the integer index of the AnnotationSpec. The index for the whole AnnotationSpecSet is sequential starting from 0. For example, an AnnotationSpecSet with classes `dog` and `cat`, might contain one AnnotationSpec with `{ display_name: "dog", index: 0 \}` and one AnnotationSpec with `{ display_name: "cat", index: 1 \}`. This is especially useful for model training as it encodes the string labels into numeric values.
     */
    index?: number | null;
  }
  /**
   * An AnnotationSpecSet is a collection of label definitions. For example, in image classification tasks, you define a set of possible labels for images as an AnnotationSpecSet. An AnnotationSpecSet is immutable upon creation.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet {
    /**
     * Required. The array of AnnotationSpecs that you define when you create the AnnotationSpecSet. These are the possible labels for the labeling task.
     */
    annotationSpecs?: Schema$GoogleCloudDatalabelingV1beta1AnnotationSpec[];
    /**
     * Output only. The names of any related resources that are blocking changes to the annotation spec set.
     */
    blockingResources?: string[] | null;
    /**
     * Optional. User-provided description of the annotation specification set. The description can be up to 10,000 characters long.
     */
    description?: string | null;
    /**
     * Required. The display name for AnnotationSpecSet that you define when you create it. Maximum of 64 characters.
     */
    displayName?: string | null;
    /**
     * Output only. The AnnotationSpecSet resource name in the following format: "projects/{project_id\}/annotationSpecSets/{annotation_spec_set_id\}"
     */
    name?: string | null;
  }
  /**
   * Annotation spec set with the setting of allowing multi labels or not.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig {
    /**
     * Optional. If allow_multi_label is true, contributors are able to choose multiple labels from one annotation spec set.
     */
    allowMultiLabel?: boolean | null;
    /**
     * Required. Annotation spec set resource name.
     */
    annotationSpecSet?: string | null;
  }
  /**
   * Annotation value for an example.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1AnnotationValue {
    /**
     * Annotation value for image bounding box, oriented bounding box and polygon cases.
     */
    imageBoundingPolyAnnotation?: Schema$GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation;
    /**
     * Annotation value for image classification case.
     */
    imageClassificationAnnotation?: Schema$GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation;
    /**
     * Annotation value for image polyline cases. Polyline here is different from BoundingPoly. It is formed by line segments connected to each other but not closed form(Bounding Poly). The line segments can cross each other.
     */
    imagePolylineAnnotation?: Schema$GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation;
    /**
     * Annotation value for image segmentation.
     */
    imageSegmentationAnnotation?: Schema$GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation;
    /**
     * Annotation value for text classification case.
     */
    textClassificationAnnotation?: Schema$GoogleCloudDatalabelingV1beta1TextClassificationAnnotation;
    /**
     * Annotation value for text entity extraction case.
     */
    textEntityExtractionAnnotation?: Schema$GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation;
    /**
     * Annotation value for video classification case.
     */
    videoClassificationAnnotation?: Schema$GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation;
    /**
     * Annotation value for video event case.
     */
    videoEventAnnotation?: Schema$GoogleCloudDatalabelingV1beta1VideoEventAnnotation;
    /**
     * Annotation value for video object detection and tracking case.
     */
    videoObjectTrackingAnnotation?: Schema$GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation;
  }
  /**
   * Records a failed evaluation job run.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1Attempt {
    attemptTime?: string | null;
    /**
     * Details of errors that occurred.
     */
    partialFailures?: Schema$GoogleRpcStatus[];
  }
  /**
   * The BigQuery location for input data. If used in an EvaluationJob, this is where the service saves the prediction input and output sampled from the model version.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1BigQuerySource {
    /**
     * Required. BigQuery URI to a table, up to 2,000 characters long. If you specify the URI of a table that does not exist, Data Labeling Service creates a table at the URI with the correct schema when you create your EvaluationJob. If you specify the URI of a table that already exists, it must have the [correct schema](/ml-engine/docs/continuous-evaluation/create-job#table-schema). Provide the table URI in the following format: "bq://{your_project_id\}/ {your_dataset_name\}/{your_table_name\}" [Learn more](/ml-engine/docs/continuous-evaluation/create-job#table-schema).
     */
    inputUri?: string | null;
  }
  /**
   * Options regarding evaluation between bounding boxes.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions {
    /**
     * Minimum [intersection-over-union (IOU)](/vision/automl/object-detection/docs/evaluate#intersection-over-union) required for 2 bounding boxes to be considered a match. This must be a number between 0 and 1.
     */
    iouThreshold?: number | null;
  }
  /**
   * A bounding polygon in the image.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1BoundingPoly {
    /**
     * The bounding polygon vertices.
     */
    vertices?: Schema$GoogleCloudDatalabelingV1beta1Vertex[];
  }
  /**
   * Config for image bounding poly (and bounding box) human labeling task.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1BoundingPolyConfig {
    /**
     * Required. Annotation spec set resource name.
     */
    annotationSpecSet?: string | null;
    /**
     * Optional. Instruction message showed on contributors UI.
     */
    instructionMessage?: string | null;
  }
  /**
   * Metadata for classification annotations.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ClassificationMetadata {
    /**
     * Whether the classification task is multi-label or not.
     */
    isMultiLabel?: boolean | null;
  }
  /**
   * Metrics calculated for a classification model.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ClassificationMetrics {
    /**
     * Confusion matrix of predicted labels vs. ground truth labels.
     */
    confusionMatrix?: Schema$GoogleCloudDatalabelingV1beta1ConfusionMatrix;
    /**
     * Precision-recall curve based on ground truth labels, predicted labels, and scores for the predicted labels.
     */
    prCurve?: Schema$GoogleCloudDatalabelingV1beta1PrCurve;
  }
  export interface Schema$GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry {
    /**
     * Threshold used for this entry. For classification tasks, this is a classification threshold: a predicted label is categorized as positive or negative (in the context of this point on the PR curve) based on whether the label's score meets this threshold. For image object detection (bounding box) tasks, this is the [intersection-over-union (IOU)](/vision/automl/object-detection/docs/evaluate#intersection-over-union) threshold for the context of this point on the PR curve.
     */
    confidenceThreshold?: number | null;
    /**
     * Harmonic mean of recall and precision.
     */
    f1Score?: number | null;
    /**
     * The harmonic mean of recall_at1 and precision_at1.
     */
    f1ScoreAt1?: number | null;
    /**
     * The harmonic mean of recall_at5 and precision_at5.
     */
    f1ScoreAt5?: number | null;
    /**
     * Precision value.
     */
    precision?: number | null;
    /**
     * Precision value for entries with label that has highest score.
     */
    precisionAt1?: number | null;
    /**
     * Precision value for entries with label that has highest 5 scores.
     */
    precisionAt5?: number | null;
    /**
     * Recall value.
     */
    recall?: number | null;
    /**
     * Recall value for entries with label that has highest score.
     */
    recallAt1?: number | null;
    /**
     * Recall value for entries with label that has highest 5 scores.
     */
    recallAt5?: number | null;
  }
  /**
   * Confusion matrix of the model running the classification. Only applicable when the metrics entry aggregates multiple labels. Not applicable when the entry is for a single label.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ConfusionMatrix {
    row?: Schema$GoogleCloudDatalabelingV1beta1Row[];
  }
  export interface Schema$GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry {
    /**
     * The annotation spec of a predicted label.
     */
    annotationSpec?: Schema$GoogleCloudDatalabelingV1beta1AnnotationSpec;
    /**
     * Number of items predicted to have this label. (The ground truth label for these items is the `Row.annotationSpec` of this entry's parent.)
     */
    itemCount?: number | null;
  }
  /**
   * Request message for CreateAnnotationSpecSet.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest {
    /**
     * Required. Annotation spec set to create. Annotation specs must be included. Only one annotation spec will be accepted for annotation specs with same display_name.
     */
    annotationSpecSet?: Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet;
  }
  /**
   * Request message for CreateDataset.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1CreateDatasetRequest {
    /**
     * Required. The dataset to be created.
     */
    dataset?: Schema$GoogleCloudDatalabelingV1beta1Dataset;
  }
  /**
   *  Request message for CreateEvaluationJob.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest {
    /**
     * Required. The evaluation job to create.
     */
    job?: Schema$GoogleCloudDatalabelingV1beta1EvaluationJob;
  }
  /**
   * Metadata of a CreateInstruction operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1CreateInstructionMetadata {
    /**
     * Timestamp when create instruction request was created.
     */
    createTime?: string | null;
    /**
     * The name of the created Instruction. projects/{project_id\}/instructions/{instruction_id\}
     */
    instruction?: string | null;
    /**
     * Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
     */
    partialFailures?: Schema$GoogleRpcStatus[];
  }
  /**
   * Request message for CreateInstruction.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1CreateInstructionRequest {
    /**
     * Required. Instruction of how to perform the labeling task.
     */
    instruction?: Schema$GoogleCloudDatalabelingV1beta1Instruction;
  }
  /**
   * Deprecated: this instruction format is not supported any more. Instruction from a CSV file.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1CsvInstruction {
    /**
     * CSV file for the instruction. Only gcs path is allowed.
     */
    gcsFileUri?: string | null;
  }
  /**
   * DataItem is a piece of data, without annotation. For example, an image.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1DataItem {
    /**
     * The image payload, a container of the image bytes/uri.
     */
    imagePayload?: Schema$GoogleCloudDatalabelingV1beta1ImagePayload;
    /**
     * Output only. Name of the data item, in format of: projects/{project_id\}/datasets/{dataset_id\}/dataItems/{data_item_id\}
     */
    name?: string | null;
    /**
     * The text payload, a container of text content.
     */
    textPayload?: Schema$GoogleCloudDatalabelingV1beta1TextPayload;
    /**
     * The video payload, a container of the video uri.
     */
    videoPayload?: Schema$GoogleCloudDatalabelingV1beta1VideoPayload;
  }
  /**
   * Dataset is the resource to hold your data. You can request multiple labeling tasks for a dataset while each one will generate an AnnotatedDataset.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1Dataset {
    /**
     * Output only. The names of any related resources that are blocking changes to the dataset.
     */
    blockingResources?: string[] | null;
    /**
     * Output only. Time the dataset is created.
     */
    createTime?: string | null;
    /**
     * Output only. The number of data items in the dataset.
     */
    dataItemCount?: string | null;
    /**
     * Optional. User-provided description of the annotation specification set. The description can be up to 10000 characters long.
     */
    description?: string | null;
    /**
     * Required. The display name of the dataset. Maximum of 64 characters.
     */
    displayName?: string | null;
    /**
     * Output only. This is populated with the original input configs where ImportData is called. It is available only after the clients import data to this dataset.
     */
    inputConfigs?: Schema$GoogleCloudDatalabelingV1beta1InputConfig[];
    /**
     * Last time that the Dataset is migrated to AI Platform V2. If any of the AnnotatedDataset is migrated, the last_migration_time in Dataset is also updated.
     */
    lastMigrateTime?: string | null;
    /**
     * Output only. Dataset resource name, format is: projects/{project_id\}/datasets/{dataset_id\}
     */
    name?: string | null;
  }
  /**
   * Describes an evaluation between a machine learning model's predictions and ground truth labels. Created when an EvaluationJob runs successfully.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1Evaluation {
    /**
     * Output only. Type of task that the model version being evaluated performs, as defined in the evaluationJobConfig.inputConfig.annotationType field of the evaluation job that created this evaluation.
     */
    annotationType?: string | null;
    /**
     * Output only. Options used in the evaluation job that created this evaluation.
     */
    config?: Schema$GoogleCloudDatalabelingV1beta1EvaluationConfig;
    /**
     * Output only. Timestamp for when this evaluation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The number of items in the ground truth dataset that were used for this evaluation. Only populated when the evaulation is for certain AnnotationTypes.
     */
    evaluatedItemCount?: string | null;
    /**
     * Output only. Timestamp for when the evaluation job that created this evaluation ran.
     */
    evaluationJobRunTime?: string | null;
    /**
     * Output only. Metrics comparing predictions to ground truth labels.
     */
    evaluationMetrics?: Schema$GoogleCloudDatalabelingV1beta1EvaluationMetrics;
    /**
     * Output only. Resource name of an evaluation. The name has the following format: "projects/{project_id\}/datasets/{dataset_id\}/evaluations/ {evaluation_id\}'
     */
    name?: string | null;
  }
  /**
   * Configuration details used for calculating evaluation metrics and creating an Evaluation.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1EvaluationConfig {
    /**
     * Only specify this field if the related model performs image object detection (`IMAGE_BOUNDING_BOX_ANNOTATION`). Describes how to evaluate bounding boxes.
     */
    boundingBoxEvaluationOptions?: Schema$GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions;
  }
  /**
   * Defines an evaluation job that runs periodically to generate Evaluations. [Creating an evaluation job](/ml-engine/docs/continuous-evaluation/create-job) is the starting point for using continuous evaluation.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1EvaluationJob {
    /**
     * Required. Name of the AnnotationSpecSet describing all the labels that your machine learning model outputs. You must create this resource before you create an evaluation job and provide its name in the following format: "projects/{project_id\}/annotationSpecSets/{annotation_spec_set_id\}"
     */
    annotationSpecSet?: string | null;
    /**
     * Output only. Every time the evaluation job runs and an error occurs, the failed attempt is appended to this array.
     */
    attempts?: Schema$GoogleCloudDatalabelingV1beta1Attempt[];
    /**
     * Output only. Timestamp of when this evaluation job was created.
     */
    createTime?: string | null;
    /**
     * Required. Description of the job. The description can be up to 25,000 characters long.
     */
    description?: string | null;
    /**
     * Required. Configuration details for the evaluation job.
     */
    evaluationJobConfig?: Schema$GoogleCloudDatalabelingV1beta1EvaluationJobConfig;
    /**
     * Required. Whether you want Data Labeling Service to provide ground truth labels for prediction input. If you want the service to assign human labelers to annotate your data, set this to `true`. If you want to provide your own ground truth labels in the evaluation job's BigQuery table, set this to `false`.
     */
    labelMissingGroundTruth?: boolean | null;
    /**
     * Required. The [AI Platform Prediction model version](/ml-engine/docs/prediction-overview) to be evaluated. Prediction input and output is sampled from this model version. When creating an evaluation job, specify the model version in the following format: "projects/{project_id\}/models/{model_name\}/versions/{version_name\}" There can only be one evaluation job per model version.
     */
    modelVersion?: string | null;
    /**
     * Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: "projects/{project_id\}/evaluationJobs/ {evaluation_job_id\}"
     */
    name?: string | null;
    /**
     * Required. Describes the interval at which the job runs. This interval must be at least 1 day, and it is rounded to the nearest day. For example, if you specify a 50-hour interval, the job runs every 2 days. You can provide the schedule in [crontab format](/scheduler/docs/configuring/cron-job-schedules) or in an [English-like format](/appengine/docs/standard/python/config/cronref#schedule_format). Regardless of what you specify, the job will run at 10:00 AM UTC. Only the interval from this schedule is used, not the specific time of day.
     */
    schedule?: string | null;
    /**
     * Output only. Describes the current state of the job.
     */
    state?: string | null;
  }
  /**
   * Provides details for how an evaluation job sends email alerts based on the results of a run.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig {
    /**
     * Required. An email address to send alerts to.
     */
    email?: string | null;
    /**
     * Required. A number between 0 and 1 that describes a minimum mean average precision threshold. When the evaluation job runs, if it calculates that your model version's predictions from the recent interval have meanAveragePrecision below this threshold, then it sends an alert to your specified email.
     */
    minAcceptableMeanAveragePrecision?: number | null;
  }
  /**
   * Configures specific details of how a continuous evaluation job works. Provide this configuration when you create an EvaluationJob.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1EvaluationJobConfig {
    /**
     * Required. Prediction keys that tell Data Labeling Service where to find the data for evaluation in your BigQuery table. When the service samples prediction input and output from your model version and saves it to BigQuery, the data gets stored as JSON strings in the BigQuery table. These keys tell Data Labeling Service how to parse the JSON. You can provide the following entries in this field: * `data_json_key`: the data key for prediction input. You must provide either this key or `reference_json_key`. * `reference_json_key`: the data reference key for prediction input. You must provide either this key or `data_json_key`. * `label_json_key`: the label key for prediction output. Required. * `label_score_json_key`: the score key for prediction output. Required. * `bounding_box_json_key`: the bounding box key for prediction output. Required if your model version perform image object detection. Learn [how to configure prediction keys](/ml-engine/docs/continuous-evaluation/create-job#prediction-keys).
     */
    bigqueryImportKeys?: {[key: string]: string} | null;
    /**
     * Specify this field if your model version performs image object detection (bounding box detection). `annotationSpecSet` in this configuration must match EvaluationJob.annotationSpecSet.
     */
    boundingPolyConfig?: Schema$GoogleCloudDatalabelingV1beta1BoundingPolyConfig;
    /**
     * Required. Details for calculating evaluation metrics and creating Evaulations. If your model version performs image object detection, you must specify the `boundingBoxEvaluationOptions` field within this configuration. Otherwise, provide an empty object for this configuration.
     */
    evaluationConfig?: Schema$GoogleCloudDatalabelingV1beta1EvaluationConfig;
    /**
     * Optional. Configuration details for evaluation job alerts. Specify this field if you want to receive email alerts if the evaluation job finds that your predictions have low mean average precision during a run.
     */
    evaluationJobAlertConfig?: Schema$GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig;
    /**
     * Required. The maximum number of predictions to sample and save to BigQuery during each evaluation interval. This limit overrides `example_sample_percentage`: even if the service has not sampled enough predictions to fulfill `example_sample_perecentage` during an interval, it stops sampling predictions when it meets this limit.
     */
    exampleCount?: number | null;
    /**
     * Required. Fraction of predictions to sample and save to BigQuery during each evaluation interval. For example, 0.1 means 10% of predictions served by your model version get saved to BigQuery.
     */
    exampleSamplePercentage?: number | null;
    /**
     * Optional. Details for human annotation of your data. If you set labelMissingGroundTruth to `true` for this evaluation job, then you must specify this field. If you plan to provide your own ground truth labels, then omit this field. Note that you must create an Instruction resource before you can specify this field. Provide the name of the instruction resource in the `instruction` field within this configuration.
     */
    humanAnnotationConfig?: Schema$GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
    /**
     * Specify this field if your model version performs image classification or general classification. `annotationSpecSet` in this configuration must match EvaluationJob.annotationSpecSet. `allowMultiLabel` in this configuration must match `classificationMetadata.isMultiLabel` in input_config.
     */
    imageClassificationConfig?: Schema$GoogleCloudDatalabelingV1beta1ImageClassificationConfig;
    /**
     * Rquired. Details for the sampled prediction input. Within this configuration, there are requirements for several fields: * `dataType` must be one of `IMAGE`, `TEXT`, or `GENERAL_DATA`. * `annotationType` must be one of `IMAGE_CLASSIFICATION_ANNOTATION`, `TEXT_CLASSIFICATION_ANNOTATION`, `GENERAL_CLASSIFICATION_ANNOTATION`, or `IMAGE_BOUNDING_BOX_ANNOTATION` (image object detection). * If your machine learning model performs classification, you must specify `classificationMetadata.isMultiLabel`. * You must specify `bigquerySource` (not `gcsSource`).
     */
    inputConfig?: Schema$GoogleCloudDatalabelingV1beta1InputConfig;
    /**
     * Specify this field if your model version performs text classification. `annotationSpecSet` in this configuration must match EvaluationJob.annotationSpecSet. `allowMultiLabel` in this configuration must match `classificationMetadata.isMultiLabel` in input_config.
     */
    textClassificationConfig?: Schema$GoogleCloudDatalabelingV1beta1TextClassificationConfig;
  }
  export interface Schema$GoogleCloudDatalabelingV1beta1EvaluationMetrics {
    classificationMetrics?: Schema$GoogleCloudDatalabelingV1beta1ClassificationMetrics;
    objectDetectionMetrics?: Schema$GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics;
  }
  /**
   * Config for video event human labeling task.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1EventConfig {
    /**
     * Required. The list of annotation spec set resource name. Similar to video classification, we support selecting event from multiple AnnotationSpecSet at the same time.
     */
    annotationSpecSets?: string[] | null;
    /**
     * Videos will be cut to smaller clips to make it easier for labelers to work on. Users can configure is field in seconds, if not set, default value is 60s.
     */
    clipLength?: number | null;
    /**
     * The overlap length between different video clips. Users can configure is field in seconds, if not set, default value is 1s.
     */
    overlapLength?: number | null;
  }
  /**
   * An Example is a piece of data and its annotation. For example, an image with label "house".
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1Example {
    /**
     * Output only. Annotations for the piece of data in Example. One piece of data can have multiple annotations.
     */
    annotations?: Schema$GoogleCloudDatalabelingV1beta1Annotation[];
    /**
     * The image payload, a container of the image bytes/uri.
     */
    imagePayload?: Schema$GoogleCloudDatalabelingV1beta1ImagePayload;
    /**
     * Output only. Name of the example, in format of: projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/ {annotated_dataset_id\}/examples/{example_id\}
     */
    name?: string | null;
    /**
     * The text payload, a container of the text content.
     */
    textPayload?: Schema$GoogleCloudDatalabelingV1beta1TextPayload;
    /**
     * The video payload, a container of the video uri.
     */
    videoPayload?: Schema$GoogleCloudDatalabelingV1beta1VideoPayload;
  }
  /**
   * Example comparisons comparing ground truth output and predictions for a specific input.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ExampleComparison {
    /**
     * The ground truth output for the input.
     */
    groundTruthExample?: Schema$GoogleCloudDatalabelingV1beta1Example;
    /**
     * Predictions by the model for the input.
     */
    modelCreatedExamples?: Schema$GoogleCloudDatalabelingV1beta1Example[];
  }
  /**
   * Metadata of an ExportData operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ExportDataOperationMetadata {
    /**
     * Output only. The name of annotated dataset in format "projects/x/datasets/x/annotatedDatasets/x".
     */
    annotatedDataset?: string | null;
    /**
     * Output only. Timestamp when export dataset request was created.
     */
    createTime?: string | null;
    /**
     * Output only. The name of dataset to be exported. "projects/x/datasets/x"
     */
    dataset?: string | null;
    /**
     * Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
     */
    partialFailures?: Schema$GoogleRpcStatus[];
  }
  /**
   * Response used for ExportDataset longrunning operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ExportDataOperationResponse {
    /**
     * Output only. The name of annotated dataset in format "projects/x/datasets/x/annotatedDatasets/x".
     */
    annotatedDataset?: string | null;
    /**
     * Ouptut only. The name of dataset. "projects/x/datasets/x"
     */
    dataset?: string | null;
    /**
     * Output only. Number of examples exported successfully.
     */
    exportCount?: number | null;
    /**
     * Output only. Statistic infos of labels in the exported dataset.
     */
    labelStats?: Schema$GoogleCloudDatalabelingV1beta1LabelStats;
    /**
     * Output only. output_config in the ExportData request.
     */
    outputConfig?: Schema$GoogleCloudDatalabelingV1beta1OutputConfig;
    /**
     * Output only. Total number of examples requested to export
     */
    totalCount?: number | null;
  }
  /**
   * Request message for ExportData API.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ExportDataRequest {
    /**
     * Required. Annotated dataset resource name. DataItem in Dataset and their annotations in specified annotated dataset will be exported. It's in format of projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/ {annotated_dataset_id\}
     */
    annotatedDataset?: string | null;
    /**
     * Optional. Filter is not supported at this moment.
     */
    filter?: string | null;
    /**
     * Required. Specify the output destination.
     */
    outputConfig?: Schema$GoogleCloudDatalabelingV1beta1OutputConfig;
    /**
     * Email of the user who started the export task and should be notified by email. If empty no notification will be sent.
     */
    userEmailAddress?: string | null;
  }
  /**
   * A feedback message inside a feedback thread.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1FeedbackMessage {
    /**
     * String content of the feedback. Maximum of 10000 characters.
     */
    body?: string | null;
    /**
     * Create time.
     */
    createTime?: string | null;
    /**
     * The image storing this feedback if the feedback is an image representing operator's comments.
     */
    image?: string | null;
    /**
     * Name of the feedback message in a feedback thread. Format: 'project/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/{annotated_dataset_id\}/feedbackThreads/{feedback_thread_id\}/feedbackMessage/{feedback_message_id\}'
     */
    name?: string | null;
    operatorFeedbackMetadata?: Schema$GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata;
    requesterFeedbackMetadata?: Schema$GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata;
  }
  /**
   * A feedback thread of a certain labeling task on a certain annotated dataset.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1FeedbackThread {
    /**
     * Metadata regarding the feedback thread.
     */
    feedbackThreadMetadata?: Schema$GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata;
    /**
     * Name of the feedback thread. Format: 'project/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/{annotated_dataset_id\}/feedbackThreads/{feedback_thread_id\}'
     */
    name?: string | null;
  }
  export interface Schema$GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata {
    /**
     * When the thread is created
     */
    createTime?: string | null;
    /**
     * When the thread is last updated.
     */
    lastUpdateTime?: string | null;
    status?: string | null;
    /**
     * An image thumbnail of this thread.
     */
    thumbnail?: string | null;
  }
  /**
   * Export destination of the data.Only gcs path is allowed in output_uri.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1GcsDestination {
    /**
     * Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported.
     */
    mimeType?: string | null;
    /**
     * Required. The output uri of destination file.
     */
    outputUri?: string | null;
  }
  /**
   * Export folder destination of the data.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1GcsFolderDestination {
    /**
     * Required. Cloud Storage directory to export data to.
     */
    outputFolderUri?: string | null;
  }
  /**
   * Source of the Cloud Storage file to be imported.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1GcsSource {
    /**
     * Required. The input URI of source file. This must be a Cloud Storage path (`gs://...`).
     */
    inputUri?: string | null;
    /**
     * Required. The format of the source file. Only "text/csv" is supported.
     */
    mimeType?: string | null;
  }
  /**
   * Configuration for how human labeling task should be done.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1HumanAnnotationConfig {
    /**
     * Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long.
     */
    annotatedDatasetDescription?: string | null;
    /**
     * Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters .
     */
    annotatedDatasetDisplayName?: string | null;
    /**
     * Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/
     */
    contributorEmails?: string[] | null;
    /**
     * Required. Instruction resource name.
     */
    instruction?: string | null;
    /**
     * Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128\}`.
     */
    labelGroup?: string | null;
    /**
     * Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification.
     */
    languageCode?: string | null;
    /**
     * Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds.
     */
    questionDuration?: string | null;
    /**
     * Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.
     */
    replicaCount?: number | null;
    /**
     * Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent.
     */
    userEmailAddress?: string | null;
  }
  /**
   * Image bounding poly annotation. It represents a polygon including bounding box in the image.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation {
    /**
     * Label of object in this bounding polygon.
     */
    annotationSpec?: Schema$GoogleCloudDatalabelingV1beta1AnnotationSpec;
    boundingPoly?: Schema$GoogleCloudDatalabelingV1beta1BoundingPoly;
    normalizedBoundingPoly?: Schema$GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly;
  }
  /**
   * Image classification annotation definition.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation {
    /**
     * Label of image.
     */
    annotationSpec?: Schema$GoogleCloudDatalabelingV1beta1AnnotationSpec;
  }
  /**
   * Config for image classification human labeling task.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ImageClassificationConfig {
    /**
     * Optional. If allow_multi_label is true, contributors are able to choose multiple labels for one image.
     */
    allowMultiLabel?: boolean | null;
    /**
     * Required. Annotation spec set resource name.
     */
    annotationSpecSet?: string | null;
    /**
     * Optional. The type of how to aggregate answers.
     */
    answerAggregationType?: string | null;
  }
  /**
   * Container of information about an image.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ImagePayload {
    /**
     * A byte string of a thumbnail image.
     */
    imageThumbnail?: string | null;
    /**
     * Image uri from the user bucket.
     */
    imageUri?: string | null;
    /**
     * Image format.
     */
    mimeType?: string | null;
    /**
     * Signed uri of the image file in the service bucket.
     */
    signedUri?: string | null;
  }
  /**
   * A polyline for the image annotation.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation {
    /**
     * Label of this polyline.
     */
    annotationSpec?: Schema$GoogleCloudDatalabelingV1beta1AnnotationSpec;
    normalizedPolyline?: Schema$GoogleCloudDatalabelingV1beta1NormalizedPolyline;
    polyline?: Schema$GoogleCloudDatalabelingV1beta1Polyline;
  }
  /**
   * Image segmentation annotation.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation {
    /**
     * The mapping between rgb color and annotation spec. The key is the rgb color represented in format of rgb(0, 0, 0). The value is the AnnotationSpec.
     */
    annotationColors?: {
      [key: string]: Schema$GoogleCloudDatalabelingV1beta1AnnotationSpec;
    } | null;
    /**
     * A byte string of a full image's color map.
     */
    imageBytes?: string | null;
    /**
     * Image format.
     */
    mimeType?: string | null;
  }
  /**
   * Metadata of an ImportData operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ImportDataOperationMetadata {
    /**
     * Output only. Timestamp when import dataset request was created.
     */
    createTime?: string | null;
    /**
     * Output only. The name of imported dataset. "projects/x/datasets/x"
     */
    dataset?: string | null;
    /**
     * Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
     */
    partialFailures?: Schema$GoogleRpcStatus[];
  }
  /**
   * Response used for ImportData longrunning operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ImportDataOperationResponse {
    /**
     * Ouptut only. The name of imported dataset.
     */
    dataset?: string | null;
    /**
     * Output only. Number of examples imported successfully.
     */
    importCount?: number | null;
    /**
     * Output only. Total number of examples requested to import
     */
    totalCount?: number | null;
  }
  /**
   * Request message for ImportData API.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ImportDataRequest {
    /**
     * Required. Specify the input source of the data.
     */
    inputConfig?: Schema$GoogleCloudDatalabelingV1beta1InputConfig;
    /**
     * Email of the user who started the import task and should be notified by email. If empty no notification will be sent.
     */
    userEmailAddress?: string | null;
  }
  /**
   * The configuration of input data, including data type, location, etc.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1InputConfig {
    /**
     * Optional. The type of annotation to be performed on this data. You must specify this field if you are using this InputConfig in an EvaluationJob.
     */
    annotationType?: string | null;
    /**
     * Source located in BigQuery. You must specify this field if you are using this InputConfig in an EvaluationJob.
     */
    bigquerySource?: Schema$GoogleCloudDatalabelingV1beta1BigQuerySource;
    /**
     * Optional. Metadata about annotations for the input. You must specify this field if you are using this InputConfig in an EvaluationJob for a model version that performs classification.
     */
    classificationMetadata?: Schema$GoogleCloudDatalabelingV1beta1ClassificationMetadata;
    /**
     * Required. Data type must be specifed when user tries to import data.
     */
    dataType?: string | null;
    /**
     * Source located in Cloud Storage.
     */
    gcsSource?: Schema$GoogleCloudDatalabelingV1beta1GcsSource;
    /**
     * Required for text import, as language code must be specified.
     */
    textMetadata?: Schema$GoogleCloudDatalabelingV1beta1TextMetadata;
  }
  /**
   * Instruction of how to perform the labeling task for human operators. Currently only PDF instruction is supported.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1Instruction {
    /**
     * Output only. The names of any related resources that are blocking changes to the instruction.
     */
    blockingResources?: string[] | null;
    /**
     * Output only. Creation time of instruction.
     */
    createTime?: string | null;
    /**
     * Deprecated: this instruction format is not supported any more. Instruction from a CSV file, such as for classification task. The CSV file should have exact two columns, in the following format: * The first column is labeled data, such as an image reference, text. * The second column is comma separated labels associated with data.
     */
    csvInstruction?: Schema$GoogleCloudDatalabelingV1beta1CsvInstruction;
    /**
     * Required. The data type of this instruction.
     */
    dataType?: string | null;
    /**
     * Optional. User-provided description of the instruction. The description can be up to 10000 characters long.
     */
    description?: string | null;
    /**
     * Required. The display name of the instruction. Maximum of 64 characters.
     */
    displayName?: string | null;
    /**
     * Output only. Instruction resource name, format: projects/{project_id\}/instructions/{instruction_id\}
     */
    name?: string | null;
    /**
     * Instruction from a PDF document. The PDF should be in a Cloud Storage bucket.
     */
    pdfInstruction?: Schema$GoogleCloudDatalabelingV1beta1PdfInstruction;
    /**
     * Output only. Last update time of instruction.
     */
    updateTime?: string | null;
  }
  /**
   * Details of a LabelImageBoundingBox operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
  }
  /**
   * Details of LabelImageBoundingPoly operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
  }
  /**
   * Metadata of a LabelImageClassification operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelImageOrientedBoundingBox operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadata {
    /**
     * Basic human annotation config.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
  }
  /**
   * Details of LabelImagePolyline operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
  }
  /**
   *  Request message for starting an image labeling task.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1LabelImageRequest {
    /**
     * Required. Basic human annotation config.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
    /**
     * Configuration for bounding box and bounding poly task. One of image_classification_config, bounding_poly_config, polyline_config and segmentation_config are required.
     */
    boundingPolyConfig?: Schema$GoogleCloudDatalabelingV1beta1BoundingPolyConfig;
    /**
     * Required. The type of image labeling task.
     */
    feature?: string | null;
    /**
     * Configuration for image classification task. One of image_classification_config, bounding_poly_config, polyline_config and segmentation_config are required.
     */
    imageClassificationConfig?: Schema$GoogleCloudDatalabelingV1beta1ImageClassificationConfig;
    /**
     * Configuration for polyline task. One of image_classification_config, bounding_poly_config, polyline_config and segmentation_config are required.
     */
    polylineConfig?: Schema$GoogleCloudDatalabelingV1beta1PolylineConfig;
    /**
     * Configuration for segmentation task. One of image_classification_config, bounding_poly_config, polyline_config and segmentation_config are required.
     */
    segmentationConfig?: Schema$GoogleCloudDatalabelingV1beta1SegmentationConfig;
  }
  /**
   * Details of a LabelImageSegmentation operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadata {
    /**
     * Basic human annotation config.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
  }
  /**
   * Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1LabelOperationMetadata {
    /**
     * Output only. The name of annotated dataset in format "projects/x/datasets/x/annotatedDatasets/x".
     */
    annotatedDataset?: string | null;
    /**
     * Output only. Timestamp when labeling request was created.
     */
    createTime?: string | null;
    /**
     * Output only. The name of dataset to be labeled. "projects/x/datasets/x"
     */
    dataset?: string | null;
    /**
     * Details of label image bounding box operation.
     */
    imageBoundingBoxDetails?: Schema$GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadata;
    /**
     * Details of label image bounding poly operation.
     */
    imageBoundingPolyDetails?: Schema$GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadata;
    /**
     * Details of label image classification operation.
     */
    imageClassificationDetails?: Schema$GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadata;
    /**
     * Details of label image oriented bounding box operation.
     */
    imageOrientedBoundingBoxDetails?: Schema$GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadata;
    /**
     * Details of label image polyline operation.
     */
    imagePolylineDetails?: Schema$GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadata;
    /**
     * Details of label image segmentation operation.
     */
    imageSegmentationDetails?: Schema$GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadata;
    /**
     * Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
     */
    partialFailures?: Schema$GoogleRpcStatus[];
    /**
     * Output only. Progress of label operation. Range: [0, 100].
     */
    progressPercent?: number | null;
    /**
     * Details of label text classification operation.
     */
    textClassificationDetails?: Schema$GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadata;
    /**
     * Details of label text entity extraction operation.
     */
    textEntityExtractionDetails?: Schema$GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadata;
    /**
     * Details of label video classification operation.
     */
    videoClassificationDetails?: Schema$GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadata;
    /**
     * Details of label video event operation.
     */
    videoEventDetails?: Schema$GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadata;
    /**
     * Details of label video object detection operation.
     */
    videoObjectDetectionDetails?: Schema$GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadata;
    /**
     * Details of label video object tracking operation.
     */
    videoObjectTrackingDetails?: Schema$GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadata;
  }
  /**
   * Statistics about annotation specs.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1LabelStats {
    /**
     * Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations.
     */
    exampleCount?: {[key: string]: string} | null;
  }
  /**
   * Details of a LabelTextClassification operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelTextEntityExtraction operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
  }
  /**
   * Request message for LabelText.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1LabelTextRequest {
    /**
     * Required. Basic human annotation config.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
    /**
     * Required. The type of text labeling task.
     */
    feature?: string | null;
    /**
     * Configuration for text classification task. One of text_classification_config and text_entity_extraction_config is required.
     */
    textClassificationConfig?: Schema$GoogleCloudDatalabelingV1beta1TextClassificationConfig;
    /**
     * Configuration for entity extraction task. One of text_classification_config and text_entity_extraction_config is required.
     */
    textEntityExtractionConfig?: Schema$GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig;
  }
  /**
   * Details of a LabelVideoClassification operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelVideoEvent operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelVideoObjectDetection operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelVideoObjectTracking operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
  }
  /**
   *  Request message for LabelVideo.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1LabelVideoRequest {
    /**
     * Required. Basic human annotation config.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
    /**
     * Configuration for video event task. One of video_classification_config, object_detection_config, object_tracking_config and event_config is required.
     */
    eventConfig?: Schema$GoogleCloudDatalabelingV1beta1EventConfig;
    /**
     * Required. The type of video labeling task.
     */
    feature?: string | null;
    /**
     * Configuration for video object detection task. One of video_classification_config, object_detection_config, object_tracking_config and event_config is required.
     */
    objectDetectionConfig?: Schema$GoogleCloudDatalabelingV1beta1ObjectDetectionConfig;
    /**
     * Configuration for video object tracking task. One of video_classification_config, object_detection_config, object_tracking_config and event_config is required.
     */
    objectTrackingConfig?: Schema$GoogleCloudDatalabelingV1beta1ObjectTrackingConfig;
    /**
     * Configuration for video classification task. One of video_classification_config, object_detection_config, object_tracking_config and event_config is required.
     */
    videoClassificationConfig?: Schema$GoogleCloudDatalabelingV1beta1VideoClassificationConfig;
  }
  /**
   * Results of listing annotated datasets for a dataset.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse {
    /**
     * The list of annotated datasets to return.
     */
    annotatedDatasets?: Schema$GoogleCloudDatalabelingV1beta1AnnotatedDataset[];
    /**
     * A token to retrieve next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Results of listing annotation spec set under a project.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse {
    /**
     * The list of annotation spec sets.
     */
    annotationSpecSets?: Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet[];
    /**
     * A token to retrieve next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Results of listing data items in a dataset.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse {
    /**
     * The list of data items to return.
     */
    dataItems?: Schema$GoogleCloudDatalabelingV1beta1DataItem[];
    /**
     * A token to retrieve next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Results of listing datasets within a project.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ListDatasetsResponse {
    /**
     * The list of datasets to return.
     */
    datasets?: Schema$GoogleCloudDatalabelingV1beta1Dataset[];
    /**
     * A token to retrieve next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Results for listing evaluation jobs.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse {
    /**
     * The list of evaluation jobs to return.
     */
    evaluationJobs?: Schema$GoogleCloudDatalabelingV1beta1EvaluationJob[];
    /**
     * A token to retrieve next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Results of listing Examples in and annotated dataset.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ListExamplesResponse {
    /**
     * The list of examples to return.
     */
    examples?: Schema$GoogleCloudDatalabelingV1beta1Example[];
    /**
     * A token to retrieve next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Results for listing FeedbackMessages.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse {
    /**
     * The list of feedback messages to return.
     */
    feedbackMessages?: Schema$GoogleCloudDatalabelingV1beta1FeedbackMessage[];
    /**
     * A token to retrieve next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Results for listing FeedbackThreads.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse {
    /**
     * The list of feedback threads to return.
     */
    feedbackThreads?: Schema$GoogleCloudDatalabelingV1beta1FeedbackThread[];
    /**
     * A token to retrieve next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Results of listing instructions under a project.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ListInstructionsResponse {
    /**
     * The list of Instructions to return.
     */
    instructions?: Schema$GoogleCloudDatalabelingV1beta1Instruction[];
    /**
     * A token to retrieve next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Normalized bounding polygon.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly {
    /**
     * The bounding polygon normalized vertices.
     */
    normalizedVertices?: Schema$GoogleCloudDatalabelingV1beta1NormalizedVertex[];
  }
  /**
   * Normalized polyline.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1NormalizedPolyline {
    /**
     * The normalized polyline vertices.
     */
    normalizedVertices?: Schema$GoogleCloudDatalabelingV1beta1NormalizedVertex[];
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1NormalizedVertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * Config for video object detection human labeling task. Object detection will be conducted on the images extracted from the video, and those objects will be labeled with bounding boxes. User need to specify the number of images to be extracted per second as the extraction frame rate.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ObjectDetectionConfig {
    /**
     * Required. Annotation spec set resource name.
     */
    annotationSpecSet?: string | null;
    /**
     * Required. Number of frames per second to be extracted from the video.
     */
    extractionFrameRate?: number | null;
  }
  /**
   * Metrics calculated for an image object detection (bounding box) model.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics {
    /**
     * Precision-recall curve.
     */
    prCurve?: Schema$GoogleCloudDatalabelingV1beta1PrCurve;
  }
  /**
   * Config for video object tracking human labeling task.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ObjectTrackingConfig {
    /**
     * Required. Annotation spec set resource name.
     */
    annotationSpecSet?: string | null;
    /**
     * Videos will be cut to smaller clips to make it easier for labelers to work on. Users can configure is field in seconds, if not set, default value is 20s.
     */
    clipLength?: number | null;
    /**
     * The overlap length between different video clips. Users can configure is field in seconds, if not set, default value is 0.3s.
     */
    overlapLength?: number | null;
  }
  /**
   * Video frame level annotation for object detection and tracking.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ObjectTrackingFrame {
    boundingPoly?: Schema$GoogleCloudDatalabelingV1beta1BoundingPoly;
    normalizedBoundingPoly?: Schema$GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly;
    /**
     * The time offset of this frame relative to the beginning of the video.
     */
    timeOffset?: string | null;
  }
  /**
   * Metadata describing the feedback from the operator.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata {}
  /**
   * General information useful for labels coming from contributors.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1OperatorMetadata {
    /**
     * Comments from contributors.
     */
    comments?: string[] | null;
    /**
     * The total number of contributors that choose this label.
     */
    labelVotes?: number | null;
    /**
     * Confidence score corresponding to a label. For examle, if 3 contributors have answered the question and 2 of them agree on the final label, the confidence score will be 0.67 (2/3).
     */
    score?: number | null;
    /**
     * The total number of contributors that answer this question.
     */
    totalVotes?: number | null;
  }
  /**
   * The configuration of output data.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1OutputConfig {
    /**
     * Output to a file in Cloud Storage. Should be used for labeling output other than image segmentation.
     */
    gcsDestination?: Schema$GoogleCloudDatalabelingV1beta1GcsDestination;
    /**
     * Output to a folder in Cloud Storage. Should be used for image segmentation or document de-identification labeling outputs.
     */
    gcsFolderDestination?: Schema$GoogleCloudDatalabelingV1beta1GcsFolderDestination;
  }
  /**
   * Request message for PauseEvaluationJob.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequest {}
  /**
   * Instruction from a PDF file.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1PdfInstruction {
    /**
     * PDF file for the instruction. Only gcs path is allowed.
     */
    gcsFileUri?: string | null;
  }
  /**
   * A line with multiple line segments.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1Polyline {
    /**
     * The polyline vertices.
     */
    vertices?: Schema$GoogleCloudDatalabelingV1beta1Vertex[];
  }
  /**
   * Config for image polyline human labeling task.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1PolylineConfig {
    /**
     * Required. Annotation spec set resource name.
     */
    annotationSpecSet?: string | null;
    /**
     * Optional. Instruction message showed on contributors UI.
     */
    instructionMessage?: string | null;
  }
  export interface Schema$GoogleCloudDatalabelingV1beta1PrCurve {
    /**
     * The annotation spec of the label for which the precision-recall curve calculated. If this field is empty, that means the precision-recall curve is an aggregate curve for all labels.
     */
    annotationSpec?: Schema$GoogleCloudDatalabelingV1beta1AnnotationSpec;
    /**
     * Area under the precision-recall curve. Not to be confused with area under a receiver operating characteristic (ROC) curve.
     */
    areaUnderCurve?: number | null;
    /**
     * Entries that make up the precision-recall graph. Each entry is a "point" on the graph drawn for a different `confidence_threshold`.
     */
    confidenceMetricsEntries?: Schema$GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry[];
    /**
     * Mean average prcision of this curve.
     */
    meanAveragePrecision?: number | null;
  }
  /**
   * Metadata describing the feedback from the labeling task requester.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata {}
  /**
   * Request message ResumeEvaluationJob.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequest {}
  /**
   * A row in the confusion matrix. Each entry in this row has the same ground truth label.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1Row {
    /**
     * The annotation spec of the ground truth label for this row.
     */
    annotationSpec?: Schema$GoogleCloudDatalabelingV1beta1AnnotationSpec;
    /**
     * A list of the confusion matrix entries. One entry for each possible predicted label.
     */
    entries?: Schema$GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry[];
  }
  /**
   * Results of searching evaluations.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse {
    /**
     * The list of evaluations matching the search.
     */
    evaluations?: Schema$GoogleCloudDatalabelingV1beta1Evaluation[];
    /**
     * A token to retrieve next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Request message of SearchExampleComparisons.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest {
    /**
     * Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     */
    pageSize?: number | null;
    /**
     * Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken of the response to a previous search rquest. If you don't specify this field, the API call requests the first page of the search.
     */
    pageToken?: string | null;
  }
  /**
   * Results of searching example comparisons.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse {
    /**
     * A list of example comparisons matching the search criteria.
     */
    exampleComparisons?: Schema$GoogleCloudDatalabelingV1beta1ExampleComparison[];
    /**
     * A token to retrieve next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Config for image segmentation
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1SegmentationConfig {
    /**
     * Required. Annotation spec set resource name. format: projects/{project_id\}/annotationSpecSets/{annotation_spec_set_id\}
     */
    annotationSpecSet?: string | null;
    /**
     * Instruction message showed on labelers UI.
     */
    instructionMessage?: string | null;
  }
  /**
   * Config for setting up sentiments.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1SentimentConfig {
    /**
     * If set to true, contributors will have the option to select sentiment of the label they selected, to mark it as negative or positive label. Default is false.
     */
    enableLabelSentimentSelection?: boolean | null;
  }
  /**
   * Start and end position in a sequence (e.g. text segment).
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1SequentialSegment {
    /**
     * End position (exclusive).
     */
    end?: number | null;
    /**
     * Start position (inclusive).
     */
    start?: number | null;
  }
  /**
   * Text classification annotation.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1TextClassificationAnnotation {
    /**
     * Label of the text.
     */
    annotationSpec?: Schema$GoogleCloudDatalabelingV1beta1AnnotationSpec;
  }
  /**
   * Config for text classification human labeling task.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1TextClassificationConfig {
    /**
     * Optional. If allow_multi_label is true, contributors are able to choose multiple labels for one text segment.
     */
    allowMultiLabel?: boolean | null;
    /**
     * Required. Annotation spec set resource name.
     */
    annotationSpecSet?: string | null;
    /**
     * Optional. Configs for sentiment selection. We deprecate sentiment analysis in data labeling side as it is incompatible with uCAIP.
     */
    sentimentConfig?: Schema$GoogleCloudDatalabelingV1beta1SentimentConfig;
  }
  /**
   * Text entity extraction annotation.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation {
    /**
     * Label of the text entities.
     */
    annotationSpec?: Schema$GoogleCloudDatalabelingV1beta1AnnotationSpec;
    /**
     * Position of the entity.
     */
    sequentialSegment?: Schema$GoogleCloudDatalabelingV1beta1SequentialSegment;
  }
  /**
   * Config for text entity extraction human labeling task.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig {
    /**
     * Required. Annotation spec set resource name.
     */
    annotationSpecSet?: string | null;
  }
  /**
   * Metadata for the text.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1TextMetadata {
    /**
     * The language of this text, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US.
     */
    languageCode?: string | null;
  }
  /**
   * Container of information about a piece of text.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1TextPayload {
    /**
     * Text content.
     */
    textContent?: string | null;
  }
  /**
   * A time period inside of an example that has a time dimension (e.g. video).
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1TimeSegment {
    /**
     * End of the time segment (exclusive), represented as the duration since the example start.
     */
    endTimeOffset?: string | null;
    /**
     * Start of the time segment (inclusive), represented as the duration since the example start.
     */
    startTimeOffset?: string | null;
  }
  /**
   * A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1Vertex {
    /**
     * X coordinate.
     */
    x?: number | null;
    /**
     * Y coordinate.
     */
    y?: number | null;
  }
  /**
   * Video classification annotation.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation {
    /**
     * Label of the segment specified by time_segment.
     */
    annotationSpec?: Schema$GoogleCloudDatalabelingV1beta1AnnotationSpec;
    /**
     * The time segment of the video to which the annotation applies.
     */
    timeSegment?: Schema$GoogleCloudDatalabelingV1beta1TimeSegment;
  }
  /**
   * Config for video classification human labeling task. Currently two types of video classification are supported: 1. Assign labels on the entire video. 2. Split the video into multiple video clips based on camera shot, and assign labels on each video clip.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1VideoClassificationConfig {
    /**
     * Required. The list of annotation spec set configs. Since watching a video clip takes much longer time than an image, we support label with multiple AnnotationSpecSet at the same time. Labels in each AnnotationSpecSet will be shown in a group to contributors. Contributors can select one or more (depending on whether to allow multi label) from each group.
     */
    annotationSpecSetConfigs?: Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig[];
    /**
     * Optional. Option to apply shot detection on the video.
     */
    applyShotDetection?: boolean | null;
  }
  /**
   * Video event annotation.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1VideoEventAnnotation {
    /**
     * Label of the event in this annotation.
     */
    annotationSpec?: Schema$GoogleCloudDatalabelingV1beta1AnnotationSpec;
    /**
     * The time segment of the video to which the annotation applies.
     */
    timeSegment?: Schema$GoogleCloudDatalabelingV1beta1TimeSegment;
  }
  /**
   * Video object tracking annotation.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation {
    /**
     * Label of the object tracked in this annotation.
     */
    annotationSpec?: Schema$GoogleCloudDatalabelingV1beta1AnnotationSpec;
    /**
     * The list of frames where this object track appears.
     */
    objectTrackingFrames?: Schema$GoogleCloudDatalabelingV1beta1ObjectTrackingFrame[];
    /**
     * The time segment of the video to which object tracking applies.
     */
    timeSegment?: Schema$GoogleCloudDatalabelingV1beta1TimeSegment;
  }
  /**
   * Container of information of a video.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1VideoPayload {
    /**
     * FPS of the video.
     */
    frameRate?: number | null;
    /**
     * Video format.
     */
    mimeType?: string | null;
    /**
     * Signed uri of the video file in the service bucket.
     */
    signedUri?: string | null;
    /**
     * The list of video thumbnails.
     */
    videoThumbnails?: Schema$GoogleCloudDatalabelingV1beta1VideoThumbnail[];
    /**
     * Video uri from the user bucket.
     */
    videoUri?: string | null;
  }
  /**
   * Container of information of a video thumbnail.
   */
  export interface Schema$GoogleCloudDatalabelingV1beta1VideoThumbnail {
    /**
     * A byte string of the video frame.
     */
    thumbnail?: string | null;
    /**
     * Time offset relative to the beginning of the video, corresponding to the video frame where the thumbnail has been extracted from.
     */
    timeOffset?: string | null;
  }
  /**
   * Metadata of a CreateInstruction operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1CreateInstructionMetadata {
    /**
     * Timestamp when create instruction request was created.
     */
    createTime?: string | null;
    /**
     * The name of the created Instruction. projects/{project_id\}/instructions/{instruction_id\}
     */
    instruction?: string | null;
    /**
     * Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
     */
    partialFailures?: Schema$GoogleRpcStatus[];
  }
  /**
   * Metadata of an ExportData operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadata {
    /**
     * Output only. The name of annotated dataset in format "projects/x/datasets/x/annotatedDatasets/x".
     */
    annotatedDataset?: string | null;
    /**
     * Output only. Timestamp when export dataset request was created.
     */
    createTime?: string | null;
    /**
     * Output only. The name of dataset to be exported. "projects/x/datasets/x"
     */
    dataset?: string | null;
    /**
     * Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
     */
    partialFailures?: Schema$GoogleRpcStatus[];
  }
  /**
   * Response used for ExportDataset longrunning operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1ExportDataOperationResponse {
    /**
     * Output only. The name of annotated dataset in format "projects/x/datasets/x/annotatedDatasets/x".
     */
    annotatedDataset?: string | null;
    /**
     * Ouptut only. The name of dataset. "projects/x/datasets/x"
     */
    dataset?: string | null;
    /**
     * Output only. Number of examples exported successfully.
     */
    exportCount?: number | null;
    /**
     * Output only. Statistic infos of labels in the exported dataset.
     */
    labelStats?: Schema$GoogleCloudDatalabelingV1p1alpha1LabelStats;
    /**
     * Output only. output_config in the ExportData request.
     */
    outputConfig?: Schema$GoogleCloudDatalabelingV1p1alpha1OutputConfig;
    /**
     * Output only. Total number of examples requested to export
     */
    totalCount?: number | null;
  }
  /**
   * Export destination of the data.Only gcs path is allowed in output_uri.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1GcsDestination {
    /**
     * Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported.
     */
    mimeType?: string | null;
    /**
     * Required. The output uri of destination file.
     */
    outputUri?: string | null;
  }
  /**
   * Export folder destination of the data.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1GcsFolderDestination {
    /**
     * Required. Cloud Storage directory to export data to.
     */
    outputFolderUri?: string | null;
  }
  /**
   * Metadata of an GenerateAnalysisReport operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadata {
    /**
     * Timestamp when generate report request was created.
     */
    createTime?: string | null;
    /**
     * The name of the dataset for which the analysis report is generated. Format: "projects/x/datasets/x"
     */
    dataset?: string | null;
  }
  /**
   * Configuration for how human labeling task should be done.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig {
    /**
     * Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long.
     */
    annotatedDatasetDescription?: string | null;
    /**
     * Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters .
     */
    annotatedDatasetDisplayName?: string | null;
    /**
     * Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/
     */
    contributorEmails?: string[] | null;
    /**
     * Required. Instruction resource name.
     */
    instruction?: string | null;
    /**
     * Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128\}`.
     */
    labelGroup?: string | null;
    /**
     * Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification.
     */
    languageCode?: string | null;
    /**
     * Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds.
     */
    questionDuration?: string | null;
    /**
     * Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.
     */
    replicaCount?: number | null;
    /**
     * Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent.
     */
    userEmailAddress?: string | null;
  }
  /**
   * Metadata of an ImportData operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1ImportDataOperationMetadata {
    /**
     * Output only. Timestamp when import dataset request was created.
     */
    createTime?: string | null;
    /**
     * Output only. The name of imported dataset. "projects/x/datasets/x"
     */
    dataset?: string | null;
    /**
     * Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
     */
    partialFailures?: Schema$GoogleRpcStatus[];
  }
  /**
   * Response used for ImportData longrunning operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1ImportDataOperationResponse {
    /**
     * Ouptut only. The name of imported dataset.
     */
    dataset?: string | null;
    /**
     * Output only. Number of examples imported successfully.
     */
    importCount?: number | null;
    /**
     * Output only. Total number of examples requested to import
     */
    totalCount?: number | null;
  }
  /**
   * Details of a LabelImageBoundingBox operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
  }
  /**
   * Details of LabelImageBoundingPoly operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
  }
  /**
   * Metadata of a LabelImageClassification operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelImageOrientedBoundingBox operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadata {
    /**
     * Basic human annotation config.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
  }
  /**
   * Details of LabelImagePolyline operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelImageSegmentation operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadata {
    /**
     * Basic human annotation config.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
  }
  /**
   * Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1LabelOperationMetadata {
    /**
     * Output only. The name of annotated dataset in format "projects/x/datasets/x/annotatedDatasets/x".
     */
    annotatedDataset?: string | null;
    /**
     * Output only. Timestamp when labeling request was created.
     */
    createTime?: string | null;
    /**
     * Output only. The name of dataset to be labeled. "projects/x/datasets/x"
     */
    dataset?: string | null;
    /**
     * Details of label image bounding box operation.
     */
    imageBoundingBoxDetails?: Schema$GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadata;
    /**
     * Details of label image bounding poly operation.
     */
    imageBoundingPolyDetails?: Schema$GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadata;
    /**
     * Details of label image classification operation.
     */
    imageClassificationDetails?: Schema$GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadata;
    /**
     * Details of label image oriented bounding box operation.
     */
    imageOrientedBoundingBoxDetails?: Schema$GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadata;
    /**
     * Details of label image polyline operation.
     */
    imagePolylineDetails?: Schema$GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadata;
    /**
     * Details of label image segmentation operation.
     */
    imageSegmentationDetails?: Schema$GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadata;
    /**
     * Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
     */
    partialFailures?: Schema$GoogleRpcStatus[];
    /**
     * Output only. Progress of label operation. Range: [0, 100].
     */
    progressPercent?: number | null;
    /**
     * Details of label text classification operation.
     */
    textClassificationDetails?: Schema$GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadata;
    /**
     * Details of label text entity extraction operation.
     */
    textEntityExtractionDetails?: Schema$GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadata;
    /**
     * Details of label video classification operation.
     */
    videoClassificationDetails?: Schema$GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadata;
    /**
     * Details of label video event operation.
     */
    videoEventDetails?: Schema$GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadata;
    /**
     * Details of label video object detection operation.
     */
    videoObjectDetectionDetails?: Schema$GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadata;
    /**
     * Details of label video object tracking operation.
     */
    videoObjectTrackingDetails?: Schema$GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadata;
  }
  /**
   * Statistics about annotation specs.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1LabelStats {
    /**
     * Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations.
     */
    exampleCount?: {[key: string]: string} | null;
  }
  /**
   * Details of a LabelTextClassification operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelTextEntityExtraction operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelVideoClassification operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelVideoEvent operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelVideoObjectDetection operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelVideoObjectTracking operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig;
  }
  /**
   * The configuration of output data.
   */
  export interface Schema$GoogleCloudDatalabelingV1p1alpha1OutputConfig {
    /**
     * Output to a file in Cloud Storage. Should be used for labeling output other than image segmentation.
     */
    gcsDestination?: Schema$GoogleCloudDatalabelingV1p1alpha1GcsDestination;
    /**
     * Output to a folder in Cloud Storage. Should be used for image segmentation or document de-identification labeling outputs.
     */
    gcsFolderDestination?: Schema$GoogleCloudDatalabelingV1p1alpha1GcsFolderDestination;
  }
  /**
   * Metadata of a CreateInstruction operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1CreateInstructionMetadata {
    /**
     * Timestamp when create instruction request was created.
     */
    createTime?: string | null;
    /**
     * The name of the created Instruction. projects/{project_id\}/instructions/{instruction_id\}
     */
    instruction?: string | null;
    /**
     * Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
     */
    partialFailures?: Schema$GoogleRpcStatus[];
  }
  /**
   * Metadata of an ExportData operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1ExportDataOperationMetadata {
    /**
     * Output only. The name of annotated dataset in format "projects/x/datasets/x/annotatedDatasets/x".
     */
    annotatedDataset?: string | null;
    /**
     * Output only. Timestamp when export dataset request was created.
     */
    createTime?: string | null;
    /**
     * Output only. The name of dataset to be exported. "projects/x/datasets/x"
     */
    dataset?: string | null;
    /**
     * Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
     */
    partialFailures?: Schema$GoogleRpcStatus[];
  }
  /**
   * Response used for ExportDataset longrunning operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1ExportDataOperationResponse {
    /**
     * Output only. The name of annotated dataset in format "projects/x/datasets/x/annotatedDatasets/x".
     */
    annotatedDataset?: string | null;
    /**
     * Ouptut only. The name of dataset. "projects/x/datasets/x"
     */
    dataset?: string | null;
    /**
     * Output only. Number of examples exported successfully.
     */
    exportCount?: number | null;
    /**
     * Output only. Statistic infos of labels in the exported dataset.
     */
    labelStats?: Schema$GoogleCloudDatalabelingV1p2alpha1LabelStats;
    /**
     * Output only. output_config in the ExportData request.
     */
    outputConfig?: Schema$GoogleCloudDatalabelingV1p2alpha1OutputConfig;
    /**
     * Output only. Total number of examples requested to export
     */
    totalCount?: number | null;
  }
  /**
   * Export destination of the data.Only gcs path is allowed in output_uri.
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1GcsDestination {
    /**
     * Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported.
     */
    mimeType?: string | null;
    /**
     * Required. The output uri of destination file.
     */
    outputUri?: string | null;
  }
  /**
   * Export folder destination of the data.
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1GcsFolderDestination {
    /**
     * Required. Cloud Storage directory to export data to.
     */
    outputFolderUri?: string | null;
  }
  /**
   * Configuration for how human labeling task should be done.
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig {
    /**
     * Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long.
     */
    annotatedDatasetDescription?: string | null;
    /**
     * Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters .
     */
    annotatedDatasetDisplayName?: string | null;
    /**
     * Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/
     */
    contributorEmails?: string[] | null;
    /**
     * Required. Instruction resource name.
     */
    instruction?: string | null;
    /**
     * Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128\}`.
     */
    labelGroup?: string | null;
    /**
     * Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification.
     */
    languageCode?: string | null;
    /**
     * Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds.
     */
    questionDuration?: string | null;
    /**
     * Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.
     */
    replicaCount?: number | null;
    /**
     * Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent.
     */
    userEmailAddress?: string | null;
  }
  /**
   * Metadata of an ImportData operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1ImportDataOperationMetadata {
    /**
     * Output only. Timestamp when import dataset request was created.
     */
    createTime?: string | null;
    /**
     * Output only. The name of imported dataset. "projects/x/datasets/x"
     */
    dataset?: string | null;
    /**
     * Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
     */
    partialFailures?: Schema$GoogleRpcStatus[];
  }
  /**
   * Response used for ImportData longrunning operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponse {
    /**
     * Ouptut only. The name of imported dataset.
     */
    dataset?: string | null;
    /**
     * Output only. Number of examples imported successfully.
     */
    importCount?: number | null;
    /**
     * Output only. Total number of examples requested to import
     */
    totalCount?: number | null;
  }
  /**
   * Details of a LabelImageBoundingBox operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
  }
  /**
   * Details of LabelImageBoundingPoly operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
  }
  /**
   * Metadata of a LabelImageClassification operation.
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelImageOrientedBoundingBox operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadata {
    /**
     * Basic human annotation config.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
  }
  /**
   * Details of LabelImagePolyline operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelImageSegmentation operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadata {
    /**
     * Basic human annotation config.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
  }
  /**
   * Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1LabelOperationMetadata {
    /**
     * Output only. The name of annotated dataset in format "projects/x/datasets/x/annotatedDatasets/x".
     */
    annotatedDataset?: string | null;
    /**
     * Output only. Timestamp when labeling request was created.
     */
    createTime?: string | null;
    /**
     * Output only. The name of dataset to be labeled. "projects/x/datasets/x"
     */
    dataset?: string | null;
    /**
     * Details of label image bounding box operation.
     */
    imageBoundingBoxDetails?: Schema$GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadata;
    /**
     * Details of label image bounding poly operation.
     */
    imageBoundingPolyDetails?: Schema$GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadata;
    /**
     * Details of label image classification operation.
     */
    imageClassificationDetails?: Schema$GoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadata;
    /**
     * Details of label image oriented bounding box operation.
     */
    imageOrientedBoundingBoxDetails?: Schema$GoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadata;
    /**
     * Details of label image polyline operation.
     */
    imagePolylineDetails?: Schema$GoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadata;
    /**
     * Details of label image segmentation operation.
     */
    imageSegmentationDetails?: Schema$GoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadata;
    /**
     * Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.
     */
    partialFailures?: Schema$GoogleRpcStatus[];
    /**
     * Output only. Progress of label operation. Range: [0, 100].
     */
    progressPercent?: number | null;
    /**
     * Details of label text classification operation.
     */
    textClassificationDetails?: Schema$GoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadata;
    /**
     * Details of label text entity extraction operation.
     */
    textEntityExtractionDetails?: Schema$GoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadata;
    /**
     * Details of label video classification operation.
     */
    videoClassificationDetails?: Schema$GoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadata;
    /**
     * Details of label video event operation.
     */
    videoEventDetails?: Schema$GoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadata;
    /**
     * Details of label video object detection operation.
     */
    videoObjectDetectionDetails?: Schema$GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadata;
    /**
     * Details of label video object tracking operation.
     */
    videoObjectTrackingDetails?: Schema$GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadata;
  }
  /**
   * Statistics about annotation specs.
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1LabelStats {
    /**
     * Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations.
     */
    exampleCount?: {[key: string]: string} | null;
  }
  /**
   * Details of a LabelTextClassification operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelTextEntityExtraction operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelVideoClassification operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelVideoEvent operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelVideoObjectDetection operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
  }
  /**
   * Details of a LabelVideoObjectTracking operation metadata.
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadata {
    /**
     * Basic human annotation config used in labeling request.
     */
    basicConfig?: Schema$GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig;
  }
  /**
   * The configuration of output data.
   */
  export interface Schema$GoogleCloudDatalabelingV1p2alpha1OutputConfig {
    /**
     * Output to a file in Cloud Storage. Should be used for labeling output other than image segmentation.
     */
    gcsDestination?: Schema$GoogleCloudDatalabelingV1p2alpha1GcsDestination;
    /**
     * Output to a folder in Cloud Storage. Should be used for image segmentation or document de-identification labeling outputs.
     */
    gcsFolderDestination?: Schema$GoogleCloudDatalabelingV1p2alpha1GcsFolderDestination;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$GoogleLongrunningListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$GoogleLongrunningOperation[];
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpcStatus;
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
    annotationSpecSets: Resource$Projects$Annotationspecsets;
    datasets: Resource$Projects$Datasets;
    evaluationJobs: Resource$Projects$Evaluationjobs;
    evaluations: Resource$Projects$Evaluations;
    instructions: Resource$Projects$Instructions;
    operations: Resource$Projects$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.annotationSpecSets = new Resource$Projects$Annotationspecsets(
        this.context
      );
      this.datasets = new Resource$Projects$Datasets(this.context);
      this.evaluationJobs = new Resource$Projects$Evaluationjobs(this.context);
      this.evaluations = new Resource$Projects$Evaluations(this.context);
      this.instructions = new Resource$Projects$Instructions(this.context);
      this.operations = new Resource$Projects$Operations(this.context);
    }
  }

  export class Resource$Projects$Annotationspecsets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an annotation spec set by providing a set of labels.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.annotationSpecSets.create({
     *     // Required. AnnotationSpecSet resource parent, format: projects/{project_id\}
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotationSpecSet": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotationSpecs": [],
     *   //   "blockingResources": [],
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
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
    create(
      params: Params$Resource$Projects$Annotationspecsets$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Annotationspecsets$Create,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet>
    >;
    create(
      params: Params$Resource$Projects$Annotationspecsets$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Annotationspecsets$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet>
    ): void;
    create(
      params: Params$Resource$Projects$Annotationspecsets$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Annotationspecsets$Create
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Annotationspecsets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Annotationspecsets$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/annotationSpecSets').replace(
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet>(
          parameters
        );
      }
    }

    /**
     * Deletes an annotation spec set by resource name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.annotationSpecSets.delete({
     *     // Required. AnnotationSpec resource name, format: `projects/{project_id\}/annotationSpecSets/{annotation_spec_set_id\}`.
     *     name: 'projects/my-project/annotationSpecSets/my-annotationSpecSet',
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
      params: Params$Resource$Projects$Annotationspecsets$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Annotationspecsets$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Projects$Annotationspecsets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Annotationspecsets$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Annotationspecsets$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Annotationspecsets$Delete
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
        {}) as Params$Resource$Projects$Annotationspecsets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Annotationspecsets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets an annotation spec set by resource name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.annotationSpecSets.get({
     *     // Required. AnnotationSpecSet resource name, format: projects/{project_id\}/annotationSpecSets/{annotation_spec_set_id\}
     *     name: 'projects/my-project/annotationSpecSets/my-annotationSpecSet',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotationSpecs": [],
     *   //   "blockingResources": [],
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
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
      params: Params$Resource$Projects$Annotationspecsets$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Annotationspecsets$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet>
    >;
    get(
      params: Params$Resource$Projects$Annotationspecsets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Annotationspecsets$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet>
    ): void;
    get(
      params: Params$Resource$Projects$Annotationspecsets$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Annotationspecsets$Get
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Annotationspecsets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Annotationspecsets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1AnnotationSpecSet>(
          parameters
        );
      }
    }

    /**
     * Lists annotation spec sets for a project. Pagination is supported.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.annotationSpecSets.list({
     *     // Optional. Filter is not supported at this moment.
     *     filter: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results for the server to return. Typically obtained by ListAnnotationSpecSetsResponse.next_page_token of the previous [DataLabelingService.ListAnnotationSpecSets] call. Return first page if empty.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent of AnnotationSpecSet resource, format: projects/{project_id\}
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotationSpecSets": [],
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
      params: Params$Resource$Projects$Annotationspecsets$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Annotationspecsets$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse>
    >;
    list(
      params: Params$Resource$Projects$Annotationspecsets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Annotationspecsets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Annotationspecsets$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Annotationspecsets$List
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Annotationspecsets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Annotationspecsets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/annotationSpecSets').replace(
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Annotationspecsets$Create
    extends StandardParameters {
    /**
     * Required. AnnotationSpecSet resource parent, format: projects/{project_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest;
  }
  export interface Params$Resource$Projects$Annotationspecsets$Delete
    extends StandardParameters {
    /**
     * Required. AnnotationSpec resource name, format: `projects/{project_id\}/annotationSpecSets/{annotation_spec_set_id\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Annotationspecsets$Get
    extends StandardParameters {
    /**
     * Required. AnnotationSpecSet resource name, format: projects/{project_id\}/annotationSpecSets/{annotation_spec_set_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Annotationspecsets$List
    extends StandardParameters {
    /**
     * Optional. Filter is not supported at this moment.
     */
    filter?: string;
    /**
     * Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results for the server to return. Typically obtained by ListAnnotationSpecSetsResponse.next_page_token of the previous [DataLabelingService.ListAnnotationSpecSets] call. Return first page if empty.
     */
    pageToken?: string;
    /**
     * Required. Parent of AnnotationSpecSet resource, format: projects/{project_id\}
     */
    parent?: string;
  }

  export class Resource$Projects$Datasets {
    context: APIRequestContext;
    annotatedDatasets: Resource$Projects$Datasets$Annotateddatasets;
    dataItems: Resource$Projects$Datasets$Dataitems;
    evaluations: Resource$Projects$Datasets$Evaluations;
    image: Resource$Projects$Datasets$Image;
    text: Resource$Projects$Datasets$Text;
    video: Resource$Projects$Datasets$Video;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.annotatedDatasets = new Resource$Projects$Datasets$Annotateddatasets(
        this.context
      );
      this.dataItems = new Resource$Projects$Datasets$Dataitems(this.context);
      this.evaluations = new Resource$Projects$Datasets$Evaluations(
        this.context
      );
      this.image = new Resource$Projects$Datasets$Image(this.context);
      this.text = new Resource$Projects$Datasets$Text(this.context);
      this.video = new Resource$Projects$Datasets$Video(this.context);
    }

    /**
     *  Creates dataset. If success return a Dataset resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.datasets.create({
     *     // Required. Dataset resource parent, format: projects/{project_id\}
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataset": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "blockingResources": [],
     *   //   "createTime": "my_createTime",
     *   //   "dataItemCount": "my_dataItemCount",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "inputConfigs": [],
     *   //   "lastMigrateTime": "my_lastMigrateTime",
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
    create(
      params: Params$Resource$Projects$Datasets$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Datasets$Create,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1Dataset>
    >;
    create(
      params: Params$Resource$Projects$Datasets$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Datasets$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Dataset>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Dataset>
    ): void;
    create(
      params: Params$Resource$Projects$Datasets$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Dataset>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Dataset>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Create
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Dataset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Dataset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Dataset>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1Dataset>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Datasets$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/datasets').replace(
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1Dataset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1Dataset>(
          parameters
        );
      }
    }

    /**
     * Deletes a dataset by resource name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.datasets.delete({
     *     // Required. Dataset resource name, format: projects/{project_id\}/datasets/{dataset_id\}
     *     name: 'projects/my-project/datasets/my-dataset',
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
      params: Params$Resource$Projects$Datasets$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Datasets$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Projects$Datasets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Datasets$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Datasets$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Delete
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
        {}) as Params$Resource$Projects$Datasets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Datasets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Exports data and annotations from dataset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.datasets.exportData({
     *     // Required. Dataset resource name, format: projects/{project_id\}/datasets/{dataset_id\}
     *     name: 'projects/my-project/datasets/my-dataset',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotatedDataset": "my_annotatedDataset",
     *       //   "filter": "my_filter",
     *       //   "outputConfig": {},
     *       //   "userEmailAddress": "my_userEmailAddress"
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
    exportData(
      params: Params$Resource$Projects$Datasets$Exportdata,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exportData(
      params?: Params$Resource$Projects$Datasets$Exportdata,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    exportData(
      params: Params$Resource$Projects$Datasets$Exportdata,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exportData(
      params: Params$Resource$Projects$Datasets$Exportdata,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    exportData(
      params: Params$Resource$Projects$Datasets$Exportdata,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    exportData(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    exportData(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Exportdata
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$Exportdata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Datasets$Exportdata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:exportData').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets dataset by resource name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.datasets.get({
     *     // Required. Dataset resource name, format: projects/{project_id\}/datasets/{dataset_id\}
     *     name: 'projects/my-project/datasets/my-dataset',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "blockingResources": [],
     *   //   "createTime": "my_createTime",
     *   //   "dataItemCount": "my_dataItemCount",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "inputConfigs": [],
     *   //   "lastMigrateTime": "my_lastMigrateTime",
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
      params: Params$Resource$Projects$Datasets$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Datasets$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1Dataset>
    >;
    get(
      params: Params$Resource$Projects$Datasets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Datasets$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Dataset>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Dataset>
    ): void;
    get(
      params: Params$Resource$Projects$Datasets$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Dataset>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Dataset>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Get
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Dataset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Dataset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Dataset>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1Dataset>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Datasets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1Dataset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1Dataset>(
          parameters
        );
      }
    }

    /**
     * Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.datasets.importData({
     *     // Required. Dataset resource name, format: projects/{project_id\}/datasets/{dataset_id\}
     *     name: 'projects/my-project/datasets/my-dataset',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "inputConfig": {},
     *       //   "userEmailAddress": "my_userEmailAddress"
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
    importData(
      params: Params$Resource$Projects$Datasets$Importdata,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    importData(
      params?: Params$Resource$Projects$Datasets$Importdata,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    importData(
      params: Params$Resource$Projects$Datasets$Importdata,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    importData(
      params: Params$Resource$Projects$Datasets$Importdata,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    importData(
      params: Params$Resource$Projects$Datasets$Importdata,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    importData(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    importData(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Importdata
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$Importdata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Datasets$Importdata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:importData').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists datasets under a project. Pagination is supported.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.datasets.list({
     *     // Optional. Filter on dataset is not supported at this moment.
     *     filter: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results for the server to return. Typically obtained by ListDatasetsResponse.next_page_token of the previous [DataLabelingService.ListDatasets] call. Returns the first page if empty.
     *     pageToken: 'placeholder-value',
     *     // Required. Dataset resource parent, format: projects/{project_id\}
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "datasets": [],
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
      params: Params$Resource$Projects$Datasets$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Datasets$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1ListDatasetsResponse>
    >;
    list(
      params: Params$Resource$Projects$Datasets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Datasets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListDatasetsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListDatasetsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Datasets$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListDatasetsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListDatasetsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$List
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListDatasetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListDatasetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListDatasetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1ListDatasetsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Datasets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/datasets').replace(
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1ListDatasetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1ListDatasetsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Datasets$Create
    extends StandardParameters {
    /**
     * Required. Dataset resource parent, format: projects/{project_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatalabelingV1beta1CreateDatasetRequest;
  }
  export interface Params$Resource$Projects$Datasets$Delete
    extends StandardParameters {
    /**
     * Required. Dataset resource name, format: projects/{project_id\}/datasets/{dataset_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Datasets$Exportdata
    extends StandardParameters {
    /**
     * Required. Dataset resource name, format: projects/{project_id\}/datasets/{dataset_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatalabelingV1beta1ExportDataRequest;
  }
  export interface Params$Resource$Projects$Datasets$Get
    extends StandardParameters {
    /**
     * Required. Dataset resource name, format: projects/{project_id\}/datasets/{dataset_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Datasets$Importdata
    extends StandardParameters {
    /**
     * Required. Dataset resource name, format: projects/{project_id\}/datasets/{dataset_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatalabelingV1beta1ImportDataRequest;
  }
  export interface Params$Resource$Projects$Datasets$List
    extends StandardParameters {
    /**
     * Optional. Filter on dataset is not supported at this moment.
     */
    filter?: string;
    /**
     * Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results for the server to return. Typically obtained by ListDatasetsResponse.next_page_token of the previous [DataLabelingService.ListDatasets] call. Returns the first page if empty.
     */
    pageToken?: string;
    /**
     * Required. Dataset resource parent, format: projects/{project_id\}
     */
    parent?: string;
  }

  export class Resource$Projects$Datasets$Annotateddatasets {
    context: APIRequestContext;
    dataItems: Resource$Projects$Datasets$Annotateddatasets$Dataitems;
    examples: Resource$Projects$Datasets$Annotateddatasets$Examples;
    feedbackThreads: Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dataItems =
        new Resource$Projects$Datasets$Annotateddatasets$Dataitems(
          this.context
        );
      this.examples = new Resource$Projects$Datasets$Annotateddatasets$Examples(
        this.context
      );
      this.feedbackThreads =
        new Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads(
          this.context
        );
    }

    /**
     * Deletes an annotated dataset by resource name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.datasets.annotatedDatasets.delete({
     *     // Required. Name of the annotated dataset to delete, format: projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/ {annotated_dataset_id\}
     *     name: 'projects/my-project/datasets/my-dataset/annotatedDatasets/my-annotatedDataset',
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
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Datasets$Annotateddatasets$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Annotateddatasets$Delete
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
        {}) as Params$Resource$Projects$Datasets$Annotateddatasets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Datasets$Annotateddatasets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets an annotated dataset by resource name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.datasets.annotatedDatasets.get({
     *     // Required. Name of the annotated dataset to get, format: projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/ {annotated_dataset_id\}
     *     name: 'projects/my-project/datasets/my-dataset/annotatedDatasets/my-annotatedDataset',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotationSource": "my_annotationSource",
     *   //   "annotationType": "my_annotationType",
     *   //   "blockingResources": [],
     *   //   "completedExampleCount": "my_completedExampleCount",
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "exampleCount": "my_exampleCount",
     *   //   "labelStats": {},
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
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Datasets$Annotateddatasets$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1AnnotatedDataset>
    >;
    get(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1AnnotatedDataset>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1AnnotatedDataset>
    ): void;
    get(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1AnnotatedDataset>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1AnnotatedDataset>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Annotateddatasets$Get
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1AnnotatedDataset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1AnnotatedDataset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1AnnotatedDataset>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1AnnotatedDataset>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$Annotateddatasets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Datasets$Annotateddatasets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1AnnotatedDataset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1AnnotatedDataset>(
          parameters
        );
      }
    }

    /**
     * Lists annotated datasets for a dataset. Pagination is supported.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.datasets.annotatedDatasets.list({
     *     // Optional. Filter is not supported at this moment.
     *     filter: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results for the server to return. Typically obtained by ListAnnotatedDatasetsResponse.next_page_token of the previous [DataLabelingService.ListAnnotatedDatasets] call. Return first page if empty.
     *     pageToken: 'placeholder-value',
     *     // Required. Name of the dataset to list annotated datasets, format: projects/{project_id\}/datasets/{dataset_id\}
     *     parent: 'projects/my-project/datasets/my-dataset',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotatedDatasets": [],
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
      params: Params$Resource$Projects$Datasets$Annotateddatasets$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Datasets$Annotateddatasets$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse>
    >;
    list(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Annotateddatasets$List
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$Annotateddatasets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Datasets$Annotateddatasets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/annotatedDatasets').replace(
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Datasets$Annotateddatasets$Delete
    extends StandardParameters {
    /**
     * Required. Name of the annotated dataset to delete, format: projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/ {annotated_dataset_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Datasets$Annotateddatasets$Get
    extends StandardParameters {
    /**
     * Required. Name of the annotated dataset to get, format: projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/ {annotated_dataset_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Datasets$Annotateddatasets$List
    extends StandardParameters {
    /**
     * Optional. Filter is not supported at this moment.
     */
    filter?: string;
    /**
     * Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results for the server to return. Typically obtained by ListAnnotatedDatasetsResponse.next_page_token of the previous [DataLabelingService.ListAnnotatedDatasets] call. Return first page if empty.
     */
    pageToken?: string;
    /**
     * Required. Name of the dataset to list annotated datasets, format: projects/{project_id\}/datasets/{dataset_id\}
     */
    parent?: string;
  }

  export class Resource$Projects$Datasets$Annotateddatasets$Dataitems {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a data item in a dataset by resource name. This API can be called after data are imported into dataset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *     await datalabeling.projects.datasets.annotatedDatasets.dataItems.get({
     *       // Required. The name of the data item to get, format: projects/{project_id\}/datasets/{dataset_id\}/dataItems/{data_item_id\}
     *       name: 'projects/my-project/datasets/my-dataset/annotatedDatasets/my-annotatedDataset/dataItems/my-dataItem',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "imagePayload": {},
     *   //   "name": "my_name",
     *   //   "textPayload": {},
     *   //   "videoPayload": {}
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
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Dataitems$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Datasets$Annotateddatasets$Dataitems$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1DataItem>
    >;
    get(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Dataitems$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Dataitems$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1DataItem>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1DataItem>
    ): void;
    get(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Dataitems$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1DataItem>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1DataItem>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Annotateddatasets$Dataitems$Get
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1DataItem>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1DataItem>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1DataItem>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1DataItem>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$Annotateddatasets$Dataitems$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Datasets$Annotateddatasets$Dataitems$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1DataItem>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1DataItem>(
          parameters
        );
      }
    }

    /**
     * Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *     await datalabeling.projects.datasets.annotatedDatasets.dataItems.list({
     *       // Optional. Filter is not supported at this moment.
     *       filter: 'placeholder-value',
     *       // Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     *       pageSize: 'placeholder-value',
     *       // Optional. A token identifying a page of results for the server to return. Typically obtained by ListDataItemsResponse.next_page_token of the previous [DataLabelingService.ListDataItems] call. Return first page if empty.
     *       pageToken: 'placeholder-value',
     *       // Required. Name of the dataset to list data items, format: projects/{project_id\}/datasets/{dataset_id\}
     *       parent:
     *         'projects/my-project/datasets/my-dataset/annotatedDatasets/my-annotatedDataset',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataItems": [],
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
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Dataitems$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Datasets$Annotateddatasets$Dataitems$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse>
    >;
    list(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Dataitems$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Dataitems$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Dataitems$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Annotateddatasets$Dataitems$List
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$Annotateddatasets$Dataitems$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Datasets$Annotateddatasets$Dataitems$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/dataItems').replace(
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Datasets$Annotateddatasets$Dataitems$Get
    extends StandardParameters {
    /**
     * Required. The name of the data item to get, format: projects/{project_id\}/datasets/{dataset_id\}/dataItems/{data_item_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Datasets$Annotateddatasets$Dataitems$List
    extends StandardParameters {
    /**
     * Optional. Filter is not supported at this moment.
     */
    filter?: string;
    /**
     * Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results for the server to return. Typically obtained by ListDataItemsResponse.next_page_token of the previous [DataLabelingService.ListDataItems] call. Return first page if empty.
     */
    pageToken?: string;
    /**
     * Required. Name of the dataset to list data items, format: projects/{project_id\}/datasets/{dataset_id\}
     */
    parent?: string;
  }

  export class Resource$Projects$Datasets$Annotateddatasets$Examples {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets an example by resource name, including both data and annotation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *     await datalabeling.projects.datasets.annotatedDatasets.examples.get({
     *       // Optional. An expression for filtering Examples. Filter by annotation_spec.display_name is supported. Format "annotation_spec.display_name = {display_name\}"
     *       filter: 'placeholder-value',
     *       // Required. Name of example, format: projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/ {annotated_dataset_id\}/examples/{example_id\}
     *       name: 'projects/my-project/datasets/my-dataset/annotatedDatasets/my-annotatedDataset/examples/my-example',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": [],
     *   //   "imagePayload": {},
     *   //   "name": "my_name",
     *   //   "textPayload": {},
     *   //   "videoPayload": {}
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
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Examples$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Datasets$Annotateddatasets$Examples$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1Example>
    >;
    get(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Examples$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Examples$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Example>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Example>
    ): void;
    get(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Examples$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Example>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Example>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Annotateddatasets$Examples$Get
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Example>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Example>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Example>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1Example>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$Annotateddatasets$Examples$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Datasets$Annotateddatasets$Examples$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1Example>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1Example>(
          parameters
        );
      }
    }

    /**
     * Lists examples in an annotated dataset. Pagination is supported.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *     await datalabeling.projects.datasets.annotatedDatasets.examples.list({
     *       // Optional. An expression for filtering Examples. For annotated datasets that have annotation spec set, filter by annotation_spec.display_name is supported. Format "annotation_spec.display_name = {display_name\}"
     *       filter: 'placeholder-value',
     *       // Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     *       pageSize: 'placeholder-value',
     *       // Optional. A token identifying a page of results for the server to return. Typically obtained by ListExamplesResponse.next_page_token of the previous [DataLabelingService.ListExamples] call. Return first page if empty.
     *       pageToken: 'placeholder-value',
     *       // Required. Example resource parent.
     *       parent:
     *         'projects/my-project/datasets/my-dataset/annotatedDatasets/my-annotatedDataset',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "examples": [],
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
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Examples$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Datasets$Annotateddatasets$Examples$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1ListExamplesResponse>
    >;
    list(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Examples$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Examples$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListExamplesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListExamplesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Examples$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListExamplesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListExamplesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Annotateddatasets$Examples$List
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListExamplesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListExamplesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListExamplesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1ListExamplesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$Annotateddatasets$Examples$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Datasets$Annotateddatasets$Examples$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/examples').replace(
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1ListExamplesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1ListExamplesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Datasets$Annotateddatasets$Examples$Get
    extends StandardParameters {
    /**
     * Optional. An expression for filtering Examples. Filter by annotation_spec.display_name is supported. Format "annotation_spec.display_name = {display_name\}"
     */
    filter?: string;
    /**
     * Required. Name of example, format: projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/ {annotated_dataset_id\}/examples/{example_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Datasets$Annotateddatasets$Examples$List
    extends StandardParameters {
    /**
     * Optional. An expression for filtering Examples. For annotated datasets that have annotation spec set, filter by annotation_spec.display_name is supported. Format "annotation_spec.display_name = {display_name\}"
     */
    filter?: string;
    /**
     * Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results for the server to return. Typically obtained by ListExamplesResponse.next_page_token of the previous [DataLabelingService.ListExamples] call. Return first page if empty.
     */
    pageToken?: string;
    /**
     * Required. Example resource parent.
     */
    parent?: string;
  }

  export class Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads {
    context: APIRequestContext;
    feedbackMessages: Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.feedbackMessages =
        new Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages(
          this.context
        );
    }

    /**
     * Delete a FeedbackThread.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *     await datalabeling.projects.datasets.annotatedDatasets.feedbackThreads.delete(
     *       {
     *         // Required. Name of the FeedbackThread that is going to be deleted. Format: 'projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/{annotated_dataset_id\}/feedbackThreads/{feedback_thread_id\}'.
     *         name: 'projects/my-project/datasets/my-dataset/annotatedDatasets/my-annotatedDataset/feedbackThreads/my-feedbackThread',
     *       },
     *     );
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
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Delete
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
        {}) as Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     *  Get a FeedbackThread object.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *     await datalabeling.projects.datasets.annotatedDatasets.feedbackThreads.get({
     *       // Required. Name of the feedback. Format: 'projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/{annotated_dataset_id\}/feedbackThreads/{feedback_thread_id\}'.
     *       name: 'projects/my-project/datasets/my-dataset/annotatedDatasets/my-annotatedDataset/feedbackThreads/my-feedbackThread',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "feedbackThreadMetadata": {},
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
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1FeedbackThread>
    >;
    get(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1FeedbackThread>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1FeedbackThread>
    ): void;
    get(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1FeedbackThread>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1FeedbackThread>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Get
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1FeedbackThread>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1FeedbackThread>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1FeedbackThread>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1FeedbackThread>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1FeedbackThread>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1FeedbackThread>(
          parameters
        );
      }
    }

    /**
     * List FeedbackThreads with pagination.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *     await datalabeling.projects.datasets.annotatedDatasets.feedbackThreads.list(
     *       {
     *         // Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     *         pageSize: 'placeholder-value',
     *         // Optional. A token identifying a page of results for the server to return. Typically obtained by ListFeedbackThreads.next_page_token of the previous [DataLabelingService.ListFeedbackThreads] call. Return first page if empty.
     *         pageToken: 'placeholder-value',
     *         // Required. FeedbackThread resource parent. Format: "projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/{annotated_dataset_id\}"
     *         parent:
     *           'projects/my-project/datasets/my-dataset/annotatedDatasets/my-annotatedDataset',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "feedbackThreads": [],
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
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse>
    >;
    list(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$List
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/feedbackThreads').replace(
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Delete
    extends StandardParameters {
    /**
     * Required. Name of the FeedbackThread that is going to be deleted. Format: 'projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/{annotated_dataset_id\}/feedbackThreads/{feedback_thread_id\}'.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Get
    extends StandardParameters {
    /**
     * Required. Name of the feedback. Format: 'projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/{annotated_dataset_id\}/feedbackThreads/{feedback_thread_id\}'.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$List
    extends StandardParameters {
    /**
     * Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results for the server to return. Typically obtained by ListFeedbackThreads.next_page_token of the previous [DataLabelingService.ListFeedbackThreads] call. Return first page if empty.
     */
    pageToken?: string;
    /**
     * Required. FeedbackThread resource parent. Format: "projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/{annotated_dataset_id\}"
     */
    parent?: string;
  }

  export class Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a FeedbackMessage object.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *     await datalabeling.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.create(
     *       {
     *         // Required. FeedbackMessage resource parent, format: projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/{annotated_dataset_id\}/feedbackThreads/{feedback_thread_id\}.
     *         parent:
     *           'projects/my-project/datasets/my-dataset/annotatedDatasets/my-annotatedDataset/feedbackThreads/my-feedbackThread',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "body": "my_body",
     *           //   "createTime": "my_createTime",
     *           //   "image": "my_image",
     *           //   "name": "my_name",
     *           //   "operatorFeedbackMetadata": {},
     *           //   "requesterFeedbackMetadata": {}
     *           // }
     *         },
     *       },
     *     );
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
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    create(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/feedbackMessages').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Delete a FeedbackMessage.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *     await datalabeling.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.delete(
     *       {
     *         // Required. Name of the FeedbackMessage that is going to be deleted. Format: 'projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/{annotated_dataset_id\}/feedbackThreads/{feedback_thread_id\}/feedbackMessages/{feedback_message_id\}'.
     *         name: 'projects/my-project/datasets/my-dataset/annotatedDatasets/my-annotatedDataset/feedbackThreads/my-feedbackThread/feedbackMessages/my-feedbackMessage',
     *       },
     *     );
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
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Delete
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
        {}) as Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Get a FeedbackMessage object.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *     await datalabeling.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.get(
     *       {
     *         // Required. Name of the feedback. Format: 'projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/{annotated_dataset_id\}/feedbackThreads/{feedback_thread_id\}/feedbackMessages/{feedback_message_id\}'.
     *         name: 'projects/my-project/datasets/my-dataset/annotatedDatasets/my-annotatedDataset/feedbackThreads/my-feedbackThread/feedbackMessages/my-feedbackMessage',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "body": "my_body",
     *   //   "createTime": "my_createTime",
     *   //   "image": "my_image",
     *   //   "name": "my_name",
     *   //   "operatorFeedbackMetadata": {},
     *   //   "requesterFeedbackMetadata": {}
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
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1FeedbackMessage>
    >;
    get(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1FeedbackMessage>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1FeedbackMessage>
    ): void;
    get(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1FeedbackMessage>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1FeedbackMessage>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Get
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1FeedbackMessage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1FeedbackMessage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1FeedbackMessage>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1FeedbackMessage>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1FeedbackMessage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1FeedbackMessage>(
          parameters
        );
      }
    }

    /**
     * List FeedbackMessages with pagination.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *     await datalabeling.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.list(
     *       {
     *         // Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     *         pageSize: 'placeholder-value',
     *         // Optional. A token identifying a page of results for the server to return. Typically obtained by ListFeedbackMessages.next_page_token of the previous [DataLabelingService.ListFeedbackMessages] call. Return first page if empty.
     *         pageToken: 'placeholder-value',
     *         // Required. FeedbackMessage resource parent. Format: "projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/{annotated_dataset_id\}/feedbackThreads/{feedback_thread_id\}"
     *         parent:
     *           'projects/my-project/datasets/my-dataset/annotatedDatasets/my-annotatedDataset/feedbackThreads/my-feedbackThread',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "feedbackMessages": [],
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
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse>
    >;
    list(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$List
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/feedbackMessages').replace(
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Create
    extends StandardParameters {
    /**
     * Required. FeedbackMessage resource parent, format: projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/{annotated_dataset_id\}/feedbackThreads/{feedback_thread_id\}.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatalabelingV1beta1FeedbackMessage;
  }
  export interface Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Delete
    extends StandardParameters {
    /**
     * Required. Name of the FeedbackMessage that is going to be deleted. Format: 'projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/{annotated_dataset_id\}/feedbackThreads/{feedback_thread_id\}/feedbackMessages/{feedback_message_id\}'.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$Get
    extends StandardParameters {
    /**
     * Required. Name of the feedback. Format: 'projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/{annotated_dataset_id\}/feedbackThreads/{feedback_thread_id\}/feedbackMessages/{feedback_message_id\}'.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Datasets$Annotateddatasets$Feedbackthreads$Feedbackmessages$List
    extends StandardParameters {
    /**
     * Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results for the server to return. Typically obtained by ListFeedbackMessages.next_page_token of the previous [DataLabelingService.ListFeedbackMessages] call. Return first page if empty.
     */
    pageToken?: string;
    /**
     * Required. FeedbackMessage resource parent. Format: "projects/{project_id\}/datasets/{dataset_id\}/annotatedDatasets/{annotated_dataset_id\}/feedbackThreads/{feedback_thread_id\}"
     */
    parent?: string;
  }

  export class Resource$Projects$Datasets$Dataitems {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a data item in a dataset by resource name. This API can be called after data are imported into dataset.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.datasets.dataItems.get({
     *     // Required. The name of the data item to get, format: projects/{project_id\}/datasets/{dataset_id\}/dataItems/{data_item_id\}
     *     name: 'projects/my-project/datasets/my-dataset/dataItems/my-dataItem',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "imagePayload": {},
     *   //   "name": "my_name",
     *   //   "textPayload": {},
     *   //   "videoPayload": {}
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
      params: Params$Resource$Projects$Datasets$Dataitems$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Datasets$Dataitems$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1DataItem>
    >;
    get(
      params: Params$Resource$Projects$Datasets$Dataitems$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Datasets$Dataitems$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1DataItem>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1DataItem>
    ): void;
    get(
      params: Params$Resource$Projects$Datasets$Dataitems$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1DataItem>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1DataItem>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Dataitems$Get
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1DataItem>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1DataItem>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1DataItem>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1DataItem>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$Dataitems$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Datasets$Dataitems$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1DataItem>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1DataItem>(
          parameters
        );
      }
    }

    /**
     * Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.datasets.dataItems.list({
     *     // Optional. Filter is not supported at this moment.
     *     filter: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results for the server to return. Typically obtained by ListDataItemsResponse.next_page_token of the previous [DataLabelingService.ListDataItems] call. Return first page if empty.
     *     pageToken: 'placeholder-value',
     *     // Required. Name of the dataset to list data items, format: projects/{project_id\}/datasets/{dataset_id\}
     *     parent: 'projects/my-project/datasets/my-dataset',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataItems": [],
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
      params: Params$Resource$Projects$Datasets$Dataitems$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Datasets$Dataitems$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse>
    >;
    list(
      params: Params$Resource$Projects$Datasets$Dataitems$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Datasets$Dataitems$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Datasets$Dataitems$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Dataitems$List
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$Dataitems$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Datasets$Dataitems$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/dataItems').replace(
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1ListDataItemsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Datasets$Dataitems$Get
    extends StandardParameters {
    /**
     * Required. The name of the data item to get, format: projects/{project_id\}/datasets/{dataset_id\}/dataItems/{data_item_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Datasets$Dataitems$List
    extends StandardParameters {
    /**
     * Optional. Filter is not supported at this moment.
     */
    filter?: string;
    /**
     * Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results for the server to return. Typically obtained by ListDataItemsResponse.next_page_token of the previous [DataLabelingService.ListDataItems] call. Return first page if empty.
     */
    pageToken?: string;
    /**
     * Required. Name of the dataset to list data items, format: projects/{project_id\}/datasets/{dataset_id\}
     */
    parent?: string;
  }

  export class Resource$Projects$Datasets$Evaluations {
    context: APIRequestContext;
    exampleComparisons: Resource$Projects$Datasets$Evaluations$Examplecomparisons;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.exampleComparisons =
        new Resource$Projects$Datasets$Evaluations$Examplecomparisons(
          this.context
        );
    }

    /**
     *  Gets an evaluation by resource name (to search, use projects.evaluations.search).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.datasets.evaluations.get({
     *     // Required. Name of the evaluation. Format: "projects/{project_id\}/datasets/ {dataset_id\}/evaluations/{evaluation_id\}'
     *     name: 'projects/my-project/datasets/my-dataset/evaluations/my-evaluation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotationType": "my_annotationType",
     *   //   "config": {},
     *   //   "createTime": "my_createTime",
     *   //   "evaluatedItemCount": "my_evaluatedItemCount",
     *   //   "evaluationJobRunTime": "my_evaluationJobRunTime",
     *   //   "evaluationMetrics": {},
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
      params: Params$Resource$Projects$Datasets$Evaluations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Datasets$Evaluations$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1Evaluation>
    >;
    get(
      params: Params$Resource$Projects$Datasets$Evaluations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Datasets$Evaluations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Evaluation>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Evaluation>
    ): void;
    get(
      params: Params$Resource$Projects$Datasets$Evaluations$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Evaluation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Evaluation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Evaluations$Get
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Evaluation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Evaluation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Evaluation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1Evaluation>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$Evaluations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Datasets$Evaluations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1Evaluation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1Evaluation>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Datasets$Evaluations$Get
    extends StandardParameters {
    /**
     * Required. Name of the evaluation. Format: "projects/{project_id\}/datasets/ {dataset_id\}/evaluations/{evaluation_id\}'
     */
    name?: string;
  }

  export class Resource$Projects$Datasets$Evaluations$Examplecomparisons {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *     await datalabeling.projects.datasets.evaluations.exampleComparisons.search({
     *       // Required. Name of the Evaluation resource to search for example comparisons from. Format: "projects/{project_id\}/datasets/{dataset_id\}/evaluations/ {evaluation_id\}"
     *       parent:
     *         'projects/my-project/datasets/my-dataset/evaluations/my-evaluation',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "pageSize": 0,
     *         //   "pageToken": "my_pageToken"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "exampleComparisons": [],
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
    search(
      params: Params$Resource$Projects$Datasets$Evaluations$Examplecomparisons$Search,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    search(
      params?: Params$Resource$Projects$Datasets$Evaluations$Examplecomparisons$Search,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse>
    >;
    search(
      params: Params$Resource$Projects$Datasets$Evaluations$Examplecomparisons$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Projects$Datasets$Evaluations$Examplecomparisons$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse>
    ): void;
    search(
      params: Params$Resource$Projects$Datasets$Evaluations$Examplecomparisons$Search,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Evaluations$Examplecomparisons$Search
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$Evaluations$Examplecomparisons$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Datasets$Evaluations$Examplecomparisons$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/{+parent}/exampleComparisons:search'
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Datasets$Evaluations$Examplecomparisons$Search
    extends StandardParameters {
    /**
     * Required. Name of the Evaluation resource to search for example comparisons from. Format: "projects/{project_id\}/datasets/{dataset_id\}/evaluations/ {evaluation_id\}"
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest;
  }

  export class Resource$Projects$Datasets$Image {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     *  Starts a labeling task for image. The type of image labeling task is configured by feature in the request.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.datasets.image.label({
     *     // Required. Name of the dataset to request labeling task, format: projects/{project_id\}/datasets/{dataset_id\}
     *     parent: 'projects/my-project/datasets/my-dataset',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "basicConfig": {},
     *       //   "boundingPolyConfig": {},
     *       //   "feature": "my_feature",
     *       //   "imageClassificationConfig": {},
     *       //   "polylineConfig": {},
     *       //   "segmentationConfig": {}
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
    label(
      params: Params$Resource$Projects$Datasets$Image$Label,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    label(
      params?: Params$Resource$Projects$Datasets$Image$Label,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    label(
      params: Params$Resource$Projects$Datasets$Image$Label,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    label(
      params: Params$Resource$Projects$Datasets$Image$Label,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    label(
      params: Params$Resource$Projects$Datasets$Image$Label,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    label(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    label(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Image$Label
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$Image$Label;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Datasets$Image$Label;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/image:label').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Datasets$Image$Label
    extends StandardParameters {
    /**
     * Required. Name of the dataset to request labeling task, format: projects/{project_id\}/datasets/{dataset_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatalabelingV1beta1LabelImageRequest;
  }

  export class Resource$Projects$Datasets$Text {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts a labeling task for text. The type of text labeling task is configured by feature in the request.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.datasets.text.label({
     *     // Required. Name of the data set to request labeling task, format: projects/{project_id\}/datasets/{dataset_id\}
     *     parent: 'projects/my-project/datasets/my-dataset',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "basicConfig": {},
     *       //   "feature": "my_feature",
     *       //   "textClassificationConfig": {},
     *       //   "textEntityExtractionConfig": {}
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
    label(
      params: Params$Resource$Projects$Datasets$Text$Label,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    label(
      params?: Params$Resource$Projects$Datasets$Text$Label,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    label(
      params: Params$Resource$Projects$Datasets$Text$Label,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    label(
      params: Params$Resource$Projects$Datasets$Text$Label,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    label(
      params: Params$Resource$Projects$Datasets$Text$Label,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    label(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    label(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Text$Label
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$Text$Label;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Datasets$Text$Label;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/text:label').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Datasets$Text$Label
    extends StandardParameters {
    /**
     * Required. Name of the data set to request labeling task, format: projects/{project_id\}/datasets/{dataset_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatalabelingV1beta1LabelTextRequest;
  }

  export class Resource$Projects$Datasets$Video {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts a labeling task for video. The type of video labeling task is configured by feature in the request.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.datasets.video.label({
     *     // Required. Name of the dataset to request labeling task, format: projects/{project_id\}/datasets/{dataset_id\}
     *     parent: 'projects/my-project/datasets/my-dataset',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "basicConfig": {},
     *       //   "eventConfig": {},
     *       //   "feature": "my_feature",
     *       //   "objectDetectionConfig": {},
     *       //   "objectTrackingConfig": {},
     *       //   "videoClassificationConfig": {}
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
    label(
      params: Params$Resource$Projects$Datasets$Video$Label,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    label(
      params?: Params$Resource$Projects$Datasets$Video$Label,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    label(
      params: Params$Resource$Projects$Datasets$Video$Label,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    label(
      params: Params$Resource$Projects$Datasets$Video$Label,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    label(
      params: Params$Resource$Projects$Datasets$Video$Label,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    label(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    label(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasets$Video$Label
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasets$Video$Label;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Datasets$Video$Label;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/video:label').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Datasets$Video$Label
    extends StandardParameters {
    /**
     * Required. Name of the dataset to request labeling task, format: projects/{project_id\}/datasets/{dataset_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatalabelingV1beta1LabelVideoRequest;
  }

  export class Resource$Projects$Evaluationjobs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     *  Creates an evaluation job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.evaluationJobs.create({
     *     // Required. Evaluation job resource parent. Format: "projects/{project_id\}"
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "job": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotationSpecSet": "my_annotationSpecSet",
     *   //   "attempts": [],
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "evaluationJobConfig": {},
     *   //   "labelMissingGroundTruth": false,
     *   //   "modelVersion": "my_modelVersion",
     *   //   "name": "my_name",
     *   //   "schedule": "my_schedule",
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
    create(
      params: Params$Resource$Projects$Evaluationjobs$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Evaluationjobs$Create,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
    >;
    create(
      params: Params$Resource$Projects$Evaluationjobs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Evaluationjobs$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
    ): void;
    create(
      params: Params$Resource$Projects$Evaluationjobs$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Evaluationjobs$Create
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Evaluationjobs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Evaluationjobs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/evaluationJobs').replace(
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>(
          parameters
        );
      }
    }

    /**
     * Stops and deletes an evaluation job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.evaluationJobs.delete({
     *     // Required. Name of the evaluation job that is going to be deleted. Format: "projects/{project_id\}/evaluationJobs/{evaluation_job_id\}"
     *     name: 'projects/my-project/evaluationJobs/my-evaluationJob',
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
      params: Params$Resource$Projects$Evaluationjobs$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Evaluationjobs$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Projects$Evaluationjobs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Evaluationjobs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Evaluationjobs$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Evaluationjobs$Delete
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
        {}) as Params$Resource$Projects$Evaluationjobs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Evaluationjobs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets an evaluation job by resource name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.evaluationJobs.get({
     *     // Required. Name of the evaluation job. Format: "projects/{project_id\} /evaluationJobs/{evaluation_job_id\}"
     *     name: 'projects/my-project/evaluationJobs/my-evaluationJob',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotationSpecSet": "my_annotationSpecSet",
     *   //   "attempts": [],
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "evaluationJobConfig": {},
     *   //   "labelMissingGroundTruth": false,
     *   //   "modelVersion": "my_modelVersion",
     *   //   "name": "my_name",
     *   //   "schedule": "my_schedule",
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
      params: Params$Resource$Projects$Evaluationjobs$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Evaluationjobs$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
    >;
    get(
      params: Params$Resource$Projects$Evaluationjobs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Evaluationjobs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
    ): void;
    get(
      params: Params$Resource$Projects$Evaluationjobs$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Evaluationjobs$Get
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Evaluationjobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Evaluationjobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>(
          parameters
        );
      }
    }

    /**
     * Lists all evaluation jobs within a project with possible filters. Pagination is supported.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.evaluationJobs.list({
     *     // Optional. You can filter the jobs to list by model_id (also known as model_name, as described in EvaluationJob.modelVersion) or by evaluation job state (as described in EvaluationJob.state). To filter by both criteria, use the `AND` operator or the `OR` operator. For example, you can use the following string for your filter: "evaluation_job.model_id = {model_name\} AND evaluation_job.state = {evaluation_job_state\}"
     *     filter: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken in the response to the previous request. The request returns the first page if this is empty.
     *     pageToken: 'placeholder-value',
     *     // Required. Evaluation job resource parent. Format: "projects/{project_id\}"
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "evaluationJobs": [],
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
      params: Params$Resource$Projects$Evaluationjobs$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Evaluationjobs$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse>
    >;
    list(
      params: Params$Resource$Projects$Evaluationjobs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Evaluationjobs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Evaluationjobs$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Evaluationjobs$List
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Evaluationjobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Evaluationjobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/evaluationJobs').replace(
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.evaluationJobs.patch({
     *     // Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: "projects/{project_id\}/evaluationJobs/ {evaluation_job_id\}"
     *     name: 'projects/my-project/evaluationJobs/my-evaluationJob',
     *     // Optional. Mask for which fields to update. You can only provide the following fields: * `evaluationJobConfig.humanAnnotationConfig.instruction` * `evaluationJobConfig.exampleCount` * `evaluationJobConfig.exampleSamplePercentage` You can provide more than one of these fields by separating them with commas.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotationSpecSet": "my_annotationSpecSet",
     *       //   "attempts": [],
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "evaluationJobConfig": {},
     *       //   "labelMissingGroundTruth": false,
     *       //   "modelVersion": "my_modelVersion",
     *       //   "name": "my_name",
     *       //   "schedule": "my_schedule",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotationSpecSet": "my_annotationSpecSet",
     *   //   "attempts": [],
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "evaluationJobConfig": {},
     *   //   "labelMissingGroundTruth": false,
     *   //   "modelVersion": "my_modelVersion",
     *   //   "name": "my_name",
     *   //   "schedule": "my_schedule",
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
    patch(
      params: Params$Resource$Projects$Evaluationjobs$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Evaluationjobs$Patch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
    >;
    patch(
      params: Params$Resource$Projects$Evaluationjobs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Evaluationjobs$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
    ): void;
    patch(
      params: Params$Resource$Projects$Evaluationjobs$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Evaluationjobs$Patch
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Evaluationjobs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Evaluationjobs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1EvaluationJob>(
          parameters
        );
      }
    }

    /**
     * Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.evaluationJobs.pause({
     *     // Required. Name of the evaluation job that is going to be paused. Format: "projects/{project_id\}/evaluationJobs/{evaluation_job_id\}"
     *     name: 'projects/my-project/evaluationJobs/my-evaluationJob',
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
    pause(
      params: Params$Resource$Projects$Evaluationjobs$Pause,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    pause(
      params?: Params$Resource$Projects$Evaluationjobs$Pause,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    pause(
      params: Params$Resource$Projects$Evaluationjobs$Pause,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    pause(
      params: Params$Resource$Projects$Evaluationjobs$Pause,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    pause(
      params: Params$Resource$Projects$Evaluationjobs$Pause,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    pause(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    pause(
      paramsOrCallback?:
        | Params$Resource$Projects$Evaluationjobs$Pause
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
        {}) as Params$Resource$Projects$Evaluationjobs$Pause;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Evaluationjobs$Pause;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:pause').replace(
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.evaluationJobs.resume({
     *     // Required. Name of the evaluation job that is going to be resumed. Format: "projects/{project_id\}/evaluationJobs/{evaluation_job_id\}"
     *     name: 'projects/my-project/evaluationJobs/my-evaluationJob',
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
    resume(
      params: Params$Resource$Projects$Evaluationjobs$Resume,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    resume(
      params?: Params$Resource$Projects$Evaluationjobs$Resume,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    resume(
      params: Params$Resource$Projects$Evaluationjobs$Resume,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resume(
      params: Params$Resource$Projects$Evaluationjobs$Resume,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    resume(
      params: Params$Resource$Projects$Evaluationjobs$Resume,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    resume(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    resume(
      paramsOrCallback?:
        | Params$Resource$Projects$Evaluationjobs$Resume
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
        {}) as Params$Resource$Projects$Evaluationjobs$Resume;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Evaluationjobs$Resume;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:resume').replace(
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Evaluationjobs$Create
    extends StandardParameters {
    /**
     * Required. Evaluation job resource parent. Format: "projects/{project_id\}"
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest;
  }
  export interface Params$Resource$Projects$Evaluationjobs$Delete
    extends StandardParameters {
    /**
     * Required. Name of the evaluation job that is going to be deleted. Format: "projects/{project_id\}/evaluationJobs/{evaluation_job_id\}"
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Evaluationjobs$Get
    extends StandardParameters {
    /**
     * Required. Name of the evaluation job. Format: "projects/{project_id\} /evaluationJobs/{evaluation_job_id\}"
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Evaluationjobs$List
    extends StandardParameters {
    /**
     * Optional. You can filter the jobs to list by model_id (also known as model_name, as described in EvaluationJob.modelVersion) or by evaluation job state (as described in EvaluationJob.state). To filter by both criteria, use the `AND` operator or the `OR` operator. For example, you can use the following string for your filter: "evaluation_job.model_id = {model_name\} AND evaluation_job.state = {evaluation_job_state\}"
     */
    filter?: string;
    /**
     * Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken in the response to the previous request. The request returns the first page if this is empty.
     */
    pageToken?: string;
    /**
     * Required. Evaluation job resource parent. Format: "projects/{project_id\}"
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Evaluationjobs$Patch
    extends StandardParameters {
    /**
     * Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: "projects/{project_id\}/evaluationJobs/ {evaluation_job_id\}"
     */
    name?: string;
    /**
     * Optional. Mask for which fields to update. You can only provide the following fields: * `evaluationJobConfig.humanAnnotationConfig.instruction` * `evaluationJobConfig.exampleCount` * `evaluationJobConfig.exampleSamplePercentage` You can provide more than one of these fields by separating them with commas.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatalabelingV1beta1EvaluationJob;
  }
  export interface Params$Resource$Projects$Evaluationjobs$Pause
    extends StandardParameters {
    /**
     * Required. Name of the evaluation job that is going to be paused. Format: "projects/{project_id\}/evaluationJobs/{evaluation_job_id\}"
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequest;
  }
  export interface Params$Resource$Projects$Evaluationjobs$Resume
    extends StandardParameters {
    /**
     * Required. Name of the evaluation job that is going to be resumed. Format: "projects/{project_id\}/evaluationJobs/{evaluation_job_id\}"
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequest;
  }

  export class Resource$Projects$Evaluations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Searches evaluations within a project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.evaluations.search({
     *     // Optional. To search evaluations, you can filter by the following: * evaluation_job.evaluation_job_id (the last part of EvaluationJob.name) * evaluation_job.model_id (the {model_name\} portion of EvaluationJob.modelVersion) * evaluation_job.evaluation_job_run_time_start (Minimum threshold for the evaluationJobRunTime that created the evaluation) * evaluation_job.evaluation_job_run_time_end (Maximum threshold for the evaluationJobRunTime that created the evaluation) * evaluation_job.job_state (EvaluationJob.state) * annotation_spec.display_name (the Evaluation contains a metric for the annotation spec with this displayName) To filter by multiple critiera, use the `AND` operator or the `OR` operator. The following examples shows a string that filters by several critiera: "evaluation_job.evaluation_job_id = {evaluation_job_id\} AND evaluation_job.model_id = {model_name\} AND evaluation_job.evaluation_job_run_time_start = {timestamp_1\} AND evaluation_job.evaluation_job_run_time_end = {timestamp_2\} AND annotation_spec.display_name = {display_name\}"
     *     filter: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken of the response to a previous search request. If you don't specify this field, the API call requests the first page of the search.
     *     pageToken: 'placeholder-value',
     *     // Required. Evaluation search parent (project ID). Format: "projects/ {project_id\}"
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "evaluations": [],
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
    search(
      params: Params$Resource$Projects$Evaluations$Search,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    search(
      params?: Params$Resource$Projects$Evaluations$Search,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse>
    >;
    search(
      params: Params$Resource$Projects$Evaluations$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Projects$Evaluations$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse>
    ): void;
    search(
      params: Params$Resource$Projects$Evaluations$Search,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Projects$Evaluations$Search
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Evaluations$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Evaluations$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/evaluations:search').replace(
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Evaluations$Search
    extends StandardParameters {
    /**
     * Optional. To search evaluations, you can filter by the following: * evaluation_job.evaluation_job_id (the last part of EvaluationJob.name) * evaluation_job.model_id (the {model_name\} portion of EvaluationJob.modelVersion) * evaluation_job.evaluation_job_run_time_start (Minimum threshold for the evaluationJobRunTime that created the evaluation) * evaluation_job.evaluation_job_run_time_end (Maximum threshold for the evaluationJobRunTime that created the evaluation) * evaluation_job.job_state (EvaluationJob.state) * annotation_spec.display_name (the Evaluation contains a metric for the annotation spec with this displayName) To filter by multiple critiera, use the `AND` operator or the `OR` operator. The following examples shows a string that filters by several critiera: "evaluation_job.evaluation_job_id = {evaluation_job_id\} AND evaluation_job.model_id = {model_name\} AND evaluation_job.evaluation_job_run_time_start = {timestamp_1\} AND evaluation_job.evaluation_job_run_time_end = {timestamp_2\} AND annotation_spec.display_name = {display_name\}"
     */
    filter?: string;
    /**
     * Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken of the response to a previous search request. If you don't specify this field, the API call requests the first page of the search.
     */
    pageToken?: string;
    /**
     * Required. Evaluation search parent (project ID). Format: "projects/ {project_id\}"
     */
    parent?: string;
  }

  export class Resource$Projects$Instructions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an instruction for how data should be labeled.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.instructions.create({
     *     // Required. Instruction resource parent, format: projects/{project_id\}
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "instruction": {}
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
      params: Params$Resource$Projects$Instructions$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Instructions$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    create(
      params: Params$Resource$Projects$Instructions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Instructions$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Instructions$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Instructions$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instructions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instructions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/instructions').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes an instruction object by resource name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.instructions.delete({
     *     // Required. Instruction resource name, format: projects/{project_id\}/instructions/{instruction_id\}
     *     name: 'projects/my-project/instructions/my-instruction',
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
      params: Params$Resource$Projects$Instructions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Instructions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Projects$Instructions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Instructions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Instructions$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Instructions$Delete
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
        {}) as Params$Resource$Projects$Instructions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instructions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets an instruction by resource name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.instructions.get({
     *     // Required. Instruction resource name, format: projects/{project_id\}/instructions/{instruction_id\}
     *     name: 'projects/my-project/instructions/my-instruction',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "blockingResources": [],
     *   //   "createTime": "my_createTime",
     *   //   "csvInstruction": {},
     *   //   "dataType": "my_dataType",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "pdfInstruction": {},
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
      params: Params$Resource$Projects$Instructions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Instructions$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1Instruction>
    >;
    get(
      params: Params$Resource$Projects$Instructions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Instructions$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Instruction>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Instruction>
    ): void;
    get(
      params: Params$Resource$Projects$Instructions$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Instruction>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Instruction>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Instructions$Get
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Instruction>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Instruction>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1Instruction>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1Instruction>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instructions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instructions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1Instruction>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1Instruction>(
          parameters
        );
      }
    }

    /**
     * Lists instructions for a project. Pagination is supported.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.instructions.list({
     *     // Optional. Filter is not supported at this moment.
     *     filter: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results for the server to return. Typically obtained by ListInstructionsResponse.next_page_token of the previous [DataLabelingService.ListInstructions] call. Return first page if empty.
     *     pageToken: 'placeholder-value',
     *     // Required. Instruction resource parent, format: projects/{project_id\}
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "instructions": [],
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
      params: Params$Resource$Projects$Instructions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Instructions$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1ListInstructionsResponse>
    >;
    list(
      params: Params$Resource$Projects$Instructions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Instructions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListInstructionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListInstructionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Instructions$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListInstructionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListInstructionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Instructions$List
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListInstructionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListInstructionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDatalabelingV1beta1ListInstructionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudDatalabelingV1beta1ListInstructionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instructions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instructions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/instructions').replace(
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
        createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1ListInstructionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatalabelingV1beta1ListInstructionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Instructions$Create
    extends StandardParameters {
    /**
     * Required. Instruction resource parent, format: projects/{project_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatalabelingV1beta1CreateInstructionRequest;
  }
  export interface Params$Resource$Projects$Instructions$Delete
    extends StandardParameters {
    /**
     * Required. Instruction resource name, format: projects/{project_id\}/instructions/{instruction_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Instructions$Get
    extends StandardParameters {
    /**
     * Required. Instruction resource name, format: projects/{project_id\}/instructions/{instruction_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Instructions$List
    extends StandardParameters {
    /**
     * Optional. Filter is not supported at this moment.
     */
    filter?: string;
    /**
     * Optional. Requested page size. Server may return fewer results than requested. Default value is 100.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results for the server to return. Typically obtained by ListInstructionsResponse.next_page_token of the previous [DataLabelingService.ListInstructions] call. Return first page if empty.
     */
    pageToken?: string;
    /**
     * Required. Instruction resource parent, format: projects/{project_id\}
     */
    parent?: string;
  }

  export class Resource$Projects$Operations {
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
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'projects/my-project/operations/my-operation',
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
      params: Params$Resource$Projects$Operations$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Projects$Operations$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    cancel(
      params: Params$Resource$Projects$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Operations$Cancel,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$Cancel
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
        {}) as Params$Resource$Projects$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:cancel').replace(
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.operations.delete({
     *     // The name of the operation resource to be deleted.
     *     name: 'projects/my-project/operations/my-operation',
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
      params: Params$Resource$Projects$Operations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Operations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
    delete(
      params: Params$Resource$Projects$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Operations$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$Delete
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
        {}) as Params$Resource$Projects$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.operations.get({
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
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    get(
      params: Params$Resource$Projects$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
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

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datalabeling.googleapis.com
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
     * const datalabeling = google.datalabeling('v1beta1');
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
     *   const res = await datalabeling.projects.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project',
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
      params: Params$Resource$Projects$Operations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Operations$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleLongrunningListOperationsResponse>
    >;
    list(
      params: Params$Resource$Projects$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleLongrunningListOperationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datalabeling.googleapis.com/';
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
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Operations$List
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
}
