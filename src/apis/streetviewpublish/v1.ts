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

export namespace streetviewpublish_v1 {
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
   * Street View Publish API
   *
   * Publishes 360 photos to Google Maps, along with position, orientation, and connectivity metadata. Apps can offer an interface for positioning, connecting, and uploading user-generated Street View images.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const streetviewpublish = google.streetviewpublish('v1');
   * ```
   */
  export class Streetviewpublish {
    context: APIRequestContext;
    photo: Resource$Photo;
    photos: Resource$Photos;
    photoSequence: Resource$Photosequence;
    photoSequences: Resource$Photosequences;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.photo = new Resource$Photo(this.context);
      this.photos = new Resource$Photos(this.context);
      this.photoSequence = new Resource$Photosequence(this.context);
      this.photoSequences = new Resource$Photosequences(this.context);
    }
  }

  /**
   * Request to delete multiple Photos.
   */
  export interface Schema$BatchDeletePhotosRequest {
    /**
     * Required. IDs of the Photos. HTTP GET requests require the following syntax for the URL query parameter: `photoIds=&photoIds=&...`.
     */
    photoIds?: string[] | null;
  }
  /**
   * Response to batch delete of one or more Photos.
   */
  export interface Schema$BatchDeletePhotosResponse {
    /**
     * The status for the operation to delete a single Photo in the batch request.
     */
    status?: Schema$Status[];
  }
  /**
   * Response to batch get of Photos.
   */
  export interface Schema$BatchGetPhotosResponse {
    /**
     * List of results for each individual Photo requested, in the same order as the requests in BatchGetPhotos.
     */
    results?: Schema$PhotoResponse[];
  }
  /**
   * Request to update the metadata of photos. Updating the pixels of photos is not supported.
   */
  export interface Schema$BatchUpdatePhotosRequest {
    /**
     * Required. List of UpdatePhotoRequests.
     */
    updatePhotoRequests?: Schema$UpdatePhotoRequest[];
  }
  /**
   * Response to batch update of metadata of one or more Photos.
   */
  export interface Schema$BatchUpdatePhotosResponse {
    /**
     * List of results for each individual Photo updated, in the same order as the request.
     */
    results?: Schema$PhotoResponse[];
  }
  /**
   * A connection is the link from a source photo to a destination photo.
   */
  export interface Schema$Connection {
    /**
     * Required. The destination of the connection from the containing photo to another photo.
     */
    target?: Schema$PhotoId;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Details related to ProcessingFailureReason#GPS_DATA_GAP. If there are multiple GPS data gaps, only the one with the largest duration is reported here.
   */
  export interface Schema$GpsDataGapFailureDetails {
    /**
     * The duration of the gap in GPS data that was found.
     */
    gapDuration?: string | null;
    /**
     * Relative time (from the start of the video stream) when the gap started.
     */
    gapStartTime?: string | null;
  }
  /**
   * IMU data from the device sensors.
   */
  export interface Schema$Imu {
    /**
     * The accelerometer measurements in meters/sec^2 with increasing timestamps from devices.
     */
    accelMpsps?: Schema$Measurement3d[];
    /**
     * The gyroscope measurements in radians/sec with increasing timestamps from devices.
     */
    gyroRps?: Schema$Measurement3d[];
    /**
     * The magnetometer measurements of the magnetic field in microtesla (uT) with increasing timestamps from devices.
     */
    magUt?: Schema$Measurement3d[];
  }
  /**
   * Details related to ProcessingFailureReason#IMU_DATA_GAP. If there are multiple IMU data gaps, only the one with the largest duration is reported here.
   */
  export interface Schema$ImuDataGapFailureDetails {
    /**
     * The duration of the gap in IMU data that was found.
     */
    gapDuration?: string | null;
    /**
     * Relative time (from the start of the video stream) when the gap started.
     */
    gapStartTime?: string | null;
  }
  /**
   * Details related to ProcessingFailureReason#INSUFFICIENT_GPS.
   */
  export interface Schema$InsufficientGpsFailureDetails {
    /**
     * The number of GPS points that were found in the video.
     */
    gpsPointsFound?: number | null;
  }
  /**
   * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
   */
  export interface Schema$LatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number | null;
    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number | null;
  }
  /**
   * A rectangle in geographical coordinates.
   */
  export interface Schema$LatLngBounds {
    /**
     * The northeast corner of these bounds.
     */
    northeast?: Schema$LatLng;
    /**
     * The southwest corner of these bounds.
     */
    southwest?: Schema$LatLng;
  }
  /**
   * Level information containing level number and its corresponding name.
   */
  export interface Schema$Level {
    /**
     * Required. A name assigned to this Level, restricted to 3 characters. Consider how the elevator buttons would be labeled for this level if there was an elevator.
     */
    name?: string | null;
    /**
     * Optional. Floor number, used for ordering. 0 indicates the ground level, 1 indicates the first level above ground level, -1 indicates the first level under ground level. Non-integer values are OK.
     */
    number?: number | null;
  }
  /**
   * Response to list all photo sequences that belong to a user.
   */
  export interface Schema$ListPhotoSequencesResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * List of photo sequences via Operation interface. The maximum number of items returned is based on the pageSize field in the request. Each item in the list can have three possible states, * `Operation.done` = false, if the processing of PhotoSequence is not finished yet. * `Operation.done` = true and `Operation.error` is populated, if there was an error in processing. * `Operation.done` = true and `Operation.response` contains a PhotoSequence message, In each sequence, only Id is populated.
     */
    photoSequences?: Schema$Operation[];
  }
  /**
   * Response to list all photos that belong to a user.
   */
  export interface Schema$ListPhotosResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * List of photos. The pageSize field in the request determines the number of items returned.
     */
    photos?: Schema$Photo[];
  }
  /**
   * A Generic 3d measurement sample.
   */
  export interface Schema$Measurement3d {
    /**
     * The timestamp of the IMU measurement.
     */
    captureTime?: string | null;
    /**
     * The sensor measurement in the x axis.
     */
    x?: number | null;
    /**
     * The sensor measurement in the y axis.
     */
    y?: number | null;
    /**
     * The sensor measurement in the z axis.
     */
    z?: number | null;
  }
  /**
   * Details related to PhotoSequenceProcessingFailureReason#NO_OVERLAP_GPS.
   */
  export interface Schema$NoOverlapGpsFailureDetails {
    /**
     * Time of last recorded GPS point.
     */
    gpsEndTime?: string | null;
    /**
     * Time of first recorded GPS point.
     */
    gpsStartTime?: string | null;
    /**
     * End time of video.
     */
    videoEndTime?: string | null;
    /**
     * Start time of video.
     */
    videoStartTime?: string | null;
  }
  /**
   * Details related to ProcessingFailureReason#NOT_OUTDOORS. If there are multiple indoor frames found, the first frame is recorded here.
   */
  export interface Schema$NotOutdoorsFailureDetails {
    /**
     * Relative time (from the start of the video stream) when an indoor frame was found.
     */
    startTime?: string | null;
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
   * Photo is used to store 360 photos along with photo metadata.
   */
  export interface Schema$Photo {
    /**
     * Optional. Absolute time when the photo was captured. When the photo has no exif timestamp, this is used to set a timestamp in the photo metadata.
     */
    captureTime?: string | null;
    /**
     * Optional. Connections to other photos. A connection represents the link from this photo to another photo.
     */
    connections?: Schema$Connection[];
    /**
     * Output only. The download URL for the photo bytes. This field is set only when GetPhotoRequest.view is set to PhotoView.INCLUDE_DOWNLOAD_URL.
     */
    downloadUrl?: string | null;
    /**
     * Output only. Status in Google Maps, whether this photo was published or rejected.
     */
    mapsPublishStatus?: string | null;
    /**
     * Required. Output only. Required when updating a photo. Output only when creating a photo. Identifier for the photo, which is unique among all photos in Google.
     */
    photoId?: Schema$PhotoId;
    /**
     * Optional. Places where this photo belongs.
     */
    places?: Schema$Place[];
    /**
     * Optional. Pose of the photo.
     */
    pose?: Schema$Pose;
    /**
     * Output only. The share link for the photo.
     */
    shareLink?: string | null;
    /**
     * Output only. The thumbnail URL for showing a preview of the given photo.
     */
    thumbnailUrl?: string | null;
    /**
     * Output only. Status of rights transfer on this photo.
     */
    transferStatus?: string | null;
    /**
     * Input only. Required when creating a photo. Input only. The resource URL where the photo bytes are uploaded to.
     */
    uploadReference?: Schema$UploadRef;
    /**
     * Output only. Time when the image was uploaded.
     */
    uploadTime?: string | null;
    /**
     * Output only. View count of the photo.
     */
    viewCount?: string | null;
  }
  /**
   * Identifier for a Photo.
   */
  export interface Schema$PhotoId {
    /**
     * A unique identifier for a photo.
     */
    id?: string | null;
  }
  /**
   * Response payload for a single Photo in batch operations including BatchGetPhotos and BatchUpdatePhotos.
   */
  export interface Schema$PhotoResponse {
    /**
     * The Photo resource, if the request was successful.
     */
    photo?: Schema$Photo;
    /**
     * The status for the operation to get or update a single photo in the batch request.
     */
    status?: Schema$Status;
  }
  /**
   * A sequence of 360 photos along with metadata.
   */
  export interface Schema$PhotoSequence {
    /**
     * Optional. Absolute time when the photo sequence starts to be captured. If the photo sequence is a video, this is the start time of the video. If this field is populated in input, it overrides the capture time in the video or XDM file.
     */
    captureTimeOverride?: string | null;
    /**
     * Output only. The computed distance of the photo sequence in meters.
     */
    distanceMeters?: number | null;
    /**
     * Output only. If this sequence has `failure_reason` set, this may contain additional details about the failure.
     */
    failureDetails?: Schema$ProcessingFailureDetails;
    /**
     * Output only. If this sequence has processing_state = FAILED, this will contain the reason why it failed. If the processing_state is any other value, this field will be unset.
     */
    failureReason?: string | null;
    /**
     * Output only. The filename of the upload. Does not include the directory path. Only available if the sequence was uploaded on a platform that provides the filename.
     */
    filename?: string | null;
    /**
     * Input only. If both raw_gps_timeline and the Camera Motion Metadata Track (CAMM) contain GPS measurements, indicate which takes precedence.
     */
    gpsSource?: string | null;
    /**
     * Output only. Unique identifier for the photo sequence. This also acts as a long running operation ID if uploading is performed asynchronously.
     */
    id?: string | null;
    /**
     * Input only. Three axis IMU data for the collection. If this data is too large to put in the request, then it should be put in the CAMM track for the video. This data always takes precedence over the equivalent CAMM data, if it exists.
     */
    imu?: Schema$Imu;
    /**
     * Output only. Photos with increasing timestamps.
     */
    photos?: Schema$Photo[];
    /**
     * Output only. The processing state of this sequence.
     */
    processingState?: string | null;
    /**
     * Input only. Raw GPS measurements with increasing timestamps from the device that aren't time synced with each photo. These raw measurements will be used to infer the pose of each frame. Required in input when InputType is VIDEO and raw GPS measurements are not in Camera Motion Metadata Track (CAMM). User can indicate which takes precedence using gps_source if raw GPS measurements are provided in both raw_gps_timeline and Camera Motion Metadata Track (CAMM).
     */
    rawGpsTimeline?: Schema$Pose[];
    /**
     * Output only. A rectangular box that encapsulates every image in this photo sequence.
     */
    sequenceBounds?: Schema$LatLngBounds;
    /**
     * Input only. Required when creating photo sequence. The resource name where the bytes of the photo sequence (in the form of video) are uploaded.
     */
    uploadReference?: Schema$UploadRef;
    /**
     * Output only. The time this photo sequence was created in uSV Store service.
     */
    uploadTime?: string | null;
    /**
     * Output only. The total number of views that all the published images in this PhotoSequence have received.
     */
    viewCount?: string | null;
  }
  /**
   * Place metadata for an entity.
   */
  export interface Schema$Place {
    /**
     * Output only. The language_code that the name is localized with. This should be the language_code specified in the request, but may be a fallback.
     */
    languageCode?: string | null;
    /**
     * Output only. The name of the place, localized to the language_code.
     */
    name?: string | null;
    /**
     * Place identifier, as described in https://developers.google.com/places/place-id.
     */
    placeId?: string | null;
  }
  /**
   * Raw pose measurement for an entity.
   */
  export interface Schema$Pose {
    /**
     * The estimated horizontal accuracy of this pose in meters with 68% confidence (one standard deviation). For example, on Android, this value is available from this method: https://developer.android.com/reference/android/location/Location#getAccuracy(). Other platforms have different methods of obtaining similar accuracy estimations.
     */
    accuracyMeters?: number | null;
    /**
     * Altitude of the pose in meters above WGS84 ellipsoid. NaN indicates an unmeasured quantity.
     */
    altitude?: number | null;
    /**
     * Time of the GPS record since UTC epoch.
     */
    gpsRecordTimestampUnixEpoch?: string | null;
    /**
     * The following pose parameters pertain to the center of the photo. They match https://developers.google.com/streetview/spherical-metadata. Compass heading, measured at the center of the photo in degrees clockwise from North. Value must be \>=0 and <360. NaN indicates an unmeasured quantity.
     */
    heading?: number | null;
    /**
     * Latitude and longitude pair of the pose, as explained here: https://cloud.google.com/datastore/docs/reference/rest/Shared.Types/LatLng When creating a Photo, if the latitude and longitude pair are not provided, the geolocation from the exif header is used. A latitude and longitude pair not provided in the photo or exif header causes the photo process to fail.
     */
    latLngPair?: Schema$LatLng;
    /**
     * Level (the floor in a building) used to configure vertical navigation.
     */
    level?: Schema$Level;
    /**
     * Pitch, measured at the center of the photo in degrees. Value must be \>=-90 and <= 90. A value of -90 means looking directly down, and a value of 90 means looking directly up. NaN indicates an unmeasured quantity.
     */
    pitch?: number | null;
    /**
     * Roll, measured in degrees. Value must be \>= 0 and <360. A value of 0 means level with the horizon. NaN indicates an unmeasured quantity.
     */
    roll?: number | null;
  }
  /**
   * Additional details to accompany the ProcessingFailureReason enum. This message is always expected to be used in conjunction with ProcessingFailureReason, and the oneof value set in this message should match the FailureReason.
   */
  export interface Schema$ProcessingFailureDetails {
    /**
     * See GpsDataGapFailureDetails.
     */
    gpsDataGapDetails?: Schema$GpsDataGapFailureDetails;
    /**
     * See ImuDataGapFailureDetails.
     */
    imuDataGapDetails?: Schema$ImuDataGapFailureDetails;
    /**
     * See InsufficientGpsFailureDetails.
     */
    insufficientGpsDetails?: Schema$InsufficientGpsFailureDetails;
    /**
     * See NoOverlapGpsFailureDetails.
     */
    noOverlapGpsDetails?: Schema$NoOverlapGpsFailureDetails;
    /**
     * See NotOutdoorsFailureDetails.
     */
    notOutdoorsDetails?: Schema$NotOutdoorsFailureDetails;
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
   * Request to update the metadata of a Photo. Updating the pixels of a photo is not supported.
   */
  export interface Schema$UpdatePhotoRequest {
    /**
     * Required. Photo object containing the new metadata.
     */
    photo?: Schema$Photo;
    /**
     * Required. Mask that identifies fields on the photo metadata to update. If not present, the old Photo metadata is entirely replaced with the new Photo metadata in this request. The update fails if invalid fields are specified. Multiple fields can be specified in a comma-delimited list. The following fields are valid: * `pose.heading` * `pose.lat_lng_pair` * `pose.pitch` * `pose.roll` * `pose.level` * `pose.altitude` * `connections` * `places` \> Note: When updateMask contains repeated fields, the entire set of repeated values get replaced with the new contents. For example, if updateMask contains `connections` and `UpdatePhotoRequest.photo.connections` is empty, all connections are removed.
     */
    updateMask?: string | null;
  }
  /**
   * Upload reference for media files.
   */
  export interface Schema$UploadRef {
    /**
     * An upload reference should be unique for each user. It follows the form: "https://streetviewpublish.googleapis.com/media/user/{account_id\}/photo/{upload_reference\}"
     */
    uploadUrl?: string | null;
  }

  export class Resource$Photo {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * After the client finishes uploading the photo with the returned UploadRef, CreatePhoto publishes the uploaded Photo to Street View on Google Maps. Currently, the only way to set heading, pitch, and roll in CreatePhoto is through the [Photo Sphere XMP metadata](https://developers.google.com/streetview/spherical-metadata) in the photo bytes. CreatePhoto ignores the `pose.heading`, `pose.pitch`, `pose.roll`, `pose.altitude`, and `pose.level` fields in Pose. This method returns the following error codes: * google.rpc.Code.INVALID_ARGUMENT if the request is malformed or if the uploaded photo is not a 360 photo. * google.rpc.Code.NOT_FOUND if the upload reference does not exist. * google.rpc.Code.RESOURCE_EXHAUSTED if the account has reached the storage limit.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/streetviewpublish.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const streetviewpublish = google.streetviewpublish('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/streetviewpublish'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await streetviewpublish.photo.create({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "captureTime": "my_captureTime",
     *       //   "connections": [],
     *       //   "downloadUrl": "my_downloadUrl",
     *       //   "mapsPublishStatus": "my_mapsPublishStatus",
     *       //   "photoId": {},
     *       //   "places": [],
     *       //   "pose": {},
     *       //   "shareLink": "my_shareLink",
     *       //   "thumbnailUrl": "my_thumbnailUrl",
     *       //   "transferStatus": "my_transferStatus",
     *       //   "uploadReference": {},
     *       //   "uploadTime": "my_uploadTime",
     *       //   "viewCount": "my_viewCount"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "captureTime": "my_captureTime",
     *   //   "connections": [],
     *   //   "downloadUrl": "my_downloadUrl",
     *   //   "mapsPublishStatus": "my_mapsPublishStatus",
     *   //   "photoId": {},
     *   //   "places": [],
     *   //   "pose": {},
     *   //   "shareLink": "my_shareLink",
     *   //   "thumbnailUrl": "my_thumbnailUrl",
     *   //   "transferStatus": "my_transferStatus",
     *   //   "uploadReference": {},
     *   //   "uploadTime": "my_uploadTime",
     *   //   "viewCount": "my_viewCount"
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
      params: Params$Resource$Photo$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Photo$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Photo>>;
    create(
      params: Params$Resource$Photo$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Photo$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Photo>,
      callback: BodyResponseCallback<Schema$Photo>
    ): void;
    create(
      params: Params$Resource$Photo$Create,
      callback: BodyResponseCallback<Schema$Photo>
    ): void;
    create(callback: BodyResponseCallback<Schema$Photo>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Photo$Create
        | BodyResponseCallback<Schema$Photo>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Photo>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Photo>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Photo>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Photo$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photo$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photo').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Photo>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Photo>(parameters);
      }
    }

    /**
     * Deletes a Photo and its metadata. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo. * google.rpc.Code.NOT_FOUND if the photo ID does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/streetviewpublish.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const streetviewpublish = google.streetviewpublish('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/streetviewpublish'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await streetviewpublish.photo.delete({
     *     // Required. ID of the Photo.
     *     photoId: 'placeholder-value',
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
      params: Params$Resource$Photo$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Photo$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Photo$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Photo$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Photo$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Photo$Delete
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
      let params = (paramsOrCallback || {}) as Params$Resource$Photo$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photo$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photo/{photoId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['photoId'],
        pathParams: ['photoId'],
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
     * Gets the metadata of the specified Photo. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested Photo. * google.rpc.Code.NOT_FOUND if the requested Photo does not exist. * google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/streetviewpublish.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const streetviewpublish = google.streetviewpublish('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/streetviewpublish'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await streetviewpublish.photo.get({
     *     // The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used.
     *     languageCode: 'placeholder-value',
     *     // Required. ID of the Photo.
     *     photoId: 'placeholder-value',
     *     // Required. Specifies if a download URL for the photo bytes should be returned in the Photo response.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "captureTime": "my_captureTime",
     *   //   "connections": [],
     *   //   "downloadUrl": "my_downloadUrl",
     *   //   "mapsPublishStatus": "my_mapsPublishStatus",
     *   //   "photoId": {},
     *   //   "places": [],
     *   //   "pose": {},
     *   //   "shareLink": "my_shareLink",
     *   //   "thumbnailUrl": "my_thumbnailUrl",
     *   //   "transferStatus": "my_transferStatus",
     *   //   "uploadReference": {},
     *   //   "uploadTime": "my_uploadTime",
     *   //   "viewCount": "my_viewCount"
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
      params: Params$Resource$Photo$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Photo$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Photo>>;
    get(
      params: Params$Resource$Photo$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Photo$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Photo>,
      callback: BodyResponseCallback<Schema$Photo>
    ): void;
    get(
      params: Params$Resource$Photo$Get,
      callback: BodyResponseCallback<Schema$Photo>
    ): void;
    get(callback: BodyResponseCallback<Schema$Photo>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Photo$Get
        | BodyResponseCallback<Schema$Photo>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Photo>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Photo>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Photo>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Photo$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photo$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photo/{photoId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['photoId'],
        pathParams: ['photoId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Photo>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Photo>(parameters);
      }
    }

    /**
     * Creates an upload session to start uploading photo bytes. The method uses the upload URL of the returned UploadRef to upload the bytes for the Photo. In addition to the photo requirements shown in https://support.google.com/maps/answer/7012050?ref_topic=6275604, the photo must meet the following requirements: * Photo Sphere XMP metadata must be included in the photo metadata. See https://developers.google.com/streetview/spherical-metadata for the required fields. * The pixel size of the photo must meet the size requirements listed in https://support.google.com/maps/answer/7012050?ref_topic=6275604, and the photo must be a full 360 horizontally. After the upload completes, the method uses UploadRef with CreatePhoto to create the Photo object entry.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/streetviewpublish.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const streetviewpublish = google.streetviewpublish('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/streetviewpublish'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await streetviewpublish.photo.startUpload({
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
    startUpload(
      params: Params$Resource$Photo$Startupload,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    startUpload(
      params?: Params$Resource$Photo$Startupload,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UploadRef>>;
    startUpload(
      params: Params$Resource$Photo$Startupload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    startUpload(
      params: Params$Resource$Photo$Startupload,
      options: MethodOptions | BodyResponseCallback<Schema$UploadRef>,
      callback: BodyResponseCallback<Schema$UploadRef>
    ): void;
    startUpload(
      params: Params$Resource$Photo$Startupload,
      callback: BodyResponseCallback<Schema$UploadRef>
    ): void;
    startUpload(callback: BodyResponseCallback<Schema$UploadRef>): void;
    startUpload(
      paramsOrCallback?:
        | Params$Resource$Photo$Startupload
        | BodyResponseCallback<Schema$UploadRef>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UploadRef>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UploadRef>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UploadRef>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Photo$Startupload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photo$Startupload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photo:startUpload').replace(
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
        createAPIRequest<Schema$UploadRef>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UploadRef>(parameters);
      }
    }

    /**
     * Updates the metadata of a Photo, such as pose, place association, connections, etc. Changing the pixels of a photo is not supported. Only the fields specified in the updateMask field are used. If `updateMask` is not present, the update applies to all fields. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo. * google.rpc.Code.INVALID_ARGUMENT if the request is malformed. * google.rpc.Code.NOT_FOUND if the requested photo does not exist. * google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/streetviewpublish.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const streetviewpublish = google.streetviewpublish('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/streetviewpublish'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await streetviewpublish.photo.update({
     *     // A unique identifier for a photo.
     *     id: 'placeholder-value',
     *     // Required. Mask that identifies fields on the photo metadata to update. If not present, the old Photo metadata is entirely replaced with the new Photo metadata in this request. The update fails if invalid fields are specified. Multiple fields can be specified in a comma-delimited list. The following fields are valid: * `pose.heading` * `pose.lat_lng_pair` * `pose.pitch` * `pose.roll` * `pose.level` * `pose.altitude` * `connections` * `places` \> Note: When updateMask contains repeated fields, the entire set of repeated values get replaced with the new contents. For example, if updateMask contains `connections` and `UpdatePhotoRequest.photo.connections` is empty, all connections are removed.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "captureTime": "my_captureTime",
     *       //   "connections": [],
     *       //   "downloadUrl": "my_downloadUrl",
     *       //   "mapsPublishStatus": "my_mapsPublishStatus",
     *       //   "photoId": {},
     *       //   "places": [],
     *       //   "pose": {},
     *       //   "shareLink": "my_shareLink",
     *       //   "thumbnailUrl": "my_thumbnailUrl",
     *       //   "transferStatus": "my_transferStatus",
     *       //   "uploadReference": {},
     *       //   "uploadTime": "my_uploadTime",
     *       //   "viewCount": "my_viewCount"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "captureTime": "my_captureTime",
     *   //   "connections": [],
     *   //   "downloadUrl": "my_downloadUrl",
     *   //   "mapsPublishStatus": "my_mapsPublishStatus",
     *   //   "photoId": {},
     *   //   "places": [],
     *   //   "pose": {},
     *   //   "shareLink": "my_shareLink",
     *   //   "thumbnailUrl": "my_thumbnailUrl",
     *   //   "transferStatus": "my_transferStatus",
     *   //   "uploadReference": {},
     *   //   "uploadTime": "my_uploadTime",
     *   //   "viewCount": "my_viewCount"
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
      params: Params$Resource$Photo$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Photo$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Photo>>;
    update(
      params: Params$Resource$Photo$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Photo$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Photo>,
      callback: BodyResponseCallback<Schema$Photo>
    ): void;
    update(
      params: Params$Resource$Photo$Update,
      callback: BodyResponseCallback<Schema$Photo>
    ): void;
    update(callback: BodyResponseCallback<Schema$Photo>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Photo$Update
        | BodyResponseCallback<Schema$Photo>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Photo>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Photo>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Photo>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Photo$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photo$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photo/{id}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Photo>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Photo>(parameters);
      }
    }
  }

  export interface Params$Resource$Photo$Create extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$Photo;
  }
  export interface Params$Resource$Photo$Delete extends StandardParameters {
    /**
     * Required. ID of the Photo.
     */
    photoId?: string;
  }
  export interface Params$Resource$Photo$Get extends StandardParameters {
    /**
     * The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used.
     */
    languageCode?: string;
    /**
     * Required. ID of the Photo.
     */
    photoId?: string;
    /**
     * Required. Specifies if a download URL for the photo bytes should be returned in the Photo response.
     */
    view?: string;
  }
  export interface Params$Resource$Photo$Startupload
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$Empty;
  }
  export interface Params$Resource$Photo$Update extends StandardParameters {
    /**
     * A unique identifier for a photo.
     */
    id?: string;
    /**
     * Required. Mask that identifies fields on the photo metadata to update. If not present, the old Photo metadata is entirely replaced with the new Photo metadata in this request. The update fails if invalid fields are specified. Multiple fields can be specified in a comma-delimited list. The following fields are valid: * `pose.heading` * `pose.lat_lng_pair` * `pose.pitch` * `pose.roll` * `pose.level` * `pose.altitude` * `connections` * `places` \> Note: When updateMask contains repeated fields, the entire set of repeated values get replaced with the new contents. For example, if updateMask contains `connections` and `UpdatePhotoRequest.photo.connections` is empty, all connections are removed.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Photo;
  }

  export class Resource$Photos {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a list of Photos and their metadata. Note that if BatchDeletePhotos fails, either critical fields are missing or there is an authentication error. Even if BatchDeletePhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchDeletePhotosResponse.results. See DeletePhoto for specific failures that can occur per photo.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/streetviewpublish.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const streetviewpublish = google.streetviewpublish('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/streetviewpublish'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await streetviewpublish.photos.batchDelete({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "photoIds": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "status": []
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
    batchDelete(
      params: Params$Resource$Photos$Batchdelete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchDelete(
      params?: Params$Resource$Photos$Batchdelete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchDeletePhotosResponse>>;
    batchDelete(
      params: Params$Resource$Photos$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Photos$Batchdelete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchDeletePhotosResponse>,
      callback: BodyResponseCallback<Schema$BatchDeletePhotosResponse>
    ): void;
    batchDelete(
      params: Params$Resource$Photos$Batchdelete,
      callback: BodyResponseCallback<Schema$BatchDeletePhotosResponse>
    ): void;
    batchDelete(
      callback: BodyResponseCallback<Schema$BatchDeletePhotosResponse>
    ): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Photos$Batchdelete
        | BodyResponseCallback<Schema$BatchDeletePhotosResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchDeletePhotosResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchDeletePhotosResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchDeletePhotosResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Photos$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photos$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photos:batchDelete').replace(
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
        createAPIRequest<Schema$BatchDeletePhotosResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchDeletePhotosResponse>(parameters);
      }
    }

    /**
     * Gets the metadata of the specified Photo batch. Note that if BatchGetPhotos fails, either critical fields are missing or there is an authentication error. Even if BatchGetPhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchGetPhotosResponse.results. See GetPhoto for specific failures that can occur per photo.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/streetviewpublish.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const streetviewpublish = google.streetviewpublish('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/streetviewpublish'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await streetviewpublish.photos.batchGet({
     *     // Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used.
     *     languageCode: 'placeholder-value',
     *     // Required. IDs of the Photos. For HTTP GET requests, the URL query parameter should be `photoIds=&photoIds=&...`.
     *     photoIds: 'placeholder-value',
     *     // Required. Specifies if a download URL for the photo bytes should be returned in the Photo response.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "results": []
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
    batchGet(
      params: Params$Resource$Photos$Batchget,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchGet(
      params?: Params$Resource$Photos$Batchget,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchGetPhotosResponse>>;
    batchGet(
      params: Params$Resource$Photos$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Photos$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchGetPhotosResponse>,
      callback: BodyResponseCallback<Schema$BatchGetPhotosResponse>
    ): void;
    batchGet(
      params: Params$Resource$Photos$Batchget,
      callback: BodyResponseCallback<Schema$BatchGetPhotosResponse>
    ): void;
    batchGet(
      callback: BodyResponseCallback<Schema$BatchGetPhotosResponse>
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Photos$Batchget
        | BodyResponseCallback<Schema$BatchGetPhotosResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchGetPhotosResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchGetPhotosResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchGetPhotosResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Photos$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photos$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photos:batchGet').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$BatchGetPhotosResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchGetPhotosResponse>(parameters);
      }
    }

    /**
     * Updates the metadata of Photos, such as pose, place association, connections, etc. Changing the pixels of photos is not supported. Note that if BatchUpdatePhotos fails, either critical fields are missing or there is an authentication error. Even if BatchUpdatePhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchUpdatePhotosResponse.results. See UpdatePhoto for specific failures that can occur per photo. Only the fields specified in updateMask field are used. If `updateMask` is not present, the update applies to all fields. The number of UpdatePhotoRequest messages in a BatchUpdatePhotosRequest must not exceed 20. \> Note: To update Pose.altitude, Pose.latLngPair has to be filled as well. Otherwise, the request will fail.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/streetviewpublish.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const streetviewpublish = google.streetviewpublish('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/streetviewpublish'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await streetviewpublish.photos.batchUpdate({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "updatePhotoRequests": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "results": []
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
      params: Params$Resource$Photos$Batchupdate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchUpdate(
      params?: Params$Resource$Photos$Batchupdate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchUpdatePhotosResponse>>;
    batchUpdate(
      params: Params$Resource$Photos$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Photos$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchUpdatePhotosResponse>,
      callback: BodyResponseCallback<Schema$BatchUpdatePhotosResponse>
    ): void;
    batchUpdate(
      params: Params$Resource$Photos$Batchupdate,
      callback: BodyResponseCallback<Schema$BatchUpdatePhotosResponse>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$BatchUpdatePhotosResponse>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Photos$Batchupdate
        | BodyResponseCallback<Schema$BatchUpdatePhotosResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchUpdatePhotosResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchUpdatePhotosResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchUpdatePhotosResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Photos$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photos$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photos:batchUpdate').replace(
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
        createAPIRequest<Schema$BatchUpdatePhotosResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchUpdatePhotosResponse>(parameters);
      }
    }

    /**
     * Lists all the Photos that belong to the user. \> Note: Recently created photos that are still being indexed are not returned in the response.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/streetviewpublish.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const streetviewpublish = google.streetviewpublish('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/streetviewpublish'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await streetviewpublish.photos.list({
     *     // Optional. The filter expression. For example: `placeId=ChIJj61dQgK6j4AR4GeTYWZsKWw`. The filters supported are: `placeId`, `min_latitude`, `max_latitude`, `min_longitude`, `max_longitude`. See https://google.aip.dev/160 for more information.
     *     filter: 'placeholder-value',
     *     // Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used.
     *     languageCode: 'placeholder-value',
     *     // Optional. The maximum number of photos to return. `pageSize` must be non-negative. If `pageSize` is zero or is not provided, the default page size of 100 is used. The number of photos returned in the response may be less than `pageSize` if the number of photos that belong to the user is less than `pageSize`.
     *     pageSize: 'placeholder-value',
     *     // Optional. The nextPageToken value returned from a previous ListPhotos request, if any.
     *     pageToken: 'placeholder-value',
     *     // Required. Specifies if a download URL for the photos bytes should be returned in the Photos response.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "photos": []
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
      params: Params$Resource$Photos$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Photos$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListPhotosResponse>>;
    list(
      params: Params$Resource$Photos$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Photos$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListPhotosResponse>,
      callback: BodyResponseCallback<Schema$ListPhotosResponse>
    ): void;
    list(
      params: Params$Resource$Photos$List,
      callback: BodyResponseCallback<Schema$ListPhotosResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListPhotosResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Photos$List
        | BodyResponseCallback<Schema$ListPhotosResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPhotosResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPhotosResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListPhotosResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Photos$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photos$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photos').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListPhotosResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPhotosResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Photos$Batchdelete
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchDeletePhotosRequest;
  }
  export interface Params$Resource$Photos$Batchget extends StandardParameters {
    /**
     * Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used.
     */
    languageCode?: string;
    /**
     * Required. IDs of the Photos. For HTTP GET requests, the URL query parameter should be `photoIds=&photoIds=&...`.
     */
    photoIds?: string[];
    /**
     * Required. Specifies if a download URL for the photo bytes should be returned in the Photo response.
     */
    view?: string;
  }
  export interface Params$Resource$Photos$Batchupdate
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchUpdatePhotosRequest;
  }
  export interface Params$Resource$Photos$List extends StandardParameters {
    /**
     * Optional. The filter expression. For example: `placeId=ChIJj61dQgK6j4AR4GeTYWZsKWw`. The filters supported are: `placeId`, `min_latitude`, `max_latitude`, `min_longitude`, `max_longitude`. See https://google.aip.dev/160 for more information.
     */
    filter?: string;
    /**
     * Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used.
     */
    languageCode?: string;
    /**
     * Optional. The maximum number of photos to return. `pageSize` must be non-negative. If `pageSize` is zero or is not provided, the default page size of 100 is used. The number of photos returned in the response may be less than `pageSize` if the number of photos that belong to the user is less than `pageSize`.
     */
    pageSize?: number;
    /**
     * Optional. The nextPageToken value returned from a previous ListPhotos request, if any.
     */
    pageToken?: string;
    /**
     * Required. Specifies if a download URL for the photos bytes should be returned in the Photos response.
     */
    view?: string;
  }

  export class Resource$Photosequence {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * After the client finishes uploading the PhotoSequence with the returned UploadRef, CreatePhotoSequence extracts a sequence of 360 photos from a video or Extensible Device Metadata (XDM, http://www.xdm.org/) to be published to Street View on Google Maps. `CreatePhotoSequence` returns an Operation, with the PhotoSequence Id set in the `Operation.name` field. This method returns the following error codes: * google.rpc.Code.INVALID_ARGUMENT if the request is malformed. * google.rpc.Code.NOT_FOUND if the upload reference does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/streetviewpublish.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const streetviewpublish = google.streetviewpublish('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/streetviewpublish'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await streetviewpublish.photoSequence.create({
     *     // Required. The input form of PhotoSequence.
     *     inputType: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "captureTimeOverride": "my_captureTimeOverride",
     *       //   "distanceMeters": {},
     *       //   "failureDetails": {},
     *       //   "failureReason": "my_failureReason",
     *       //   "filename": "my_filename",
     *       //   "gpsSource": "my_gpsSource",
     *       //   "id": "my_id",
     *       //   "imu": {},
     *       //   "photos": [],
     *       //   "processingState": "my_processingState",
     *       //   "rawGpsTimeline": [],
     *       //   "sequenceBounds": {},
     *       //   "uploadReference": {},
     *       //   "uploadTime": "my_uploadTime",
     *       //   "viewCount": "my_viewCount"
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
      params: Params$Resource$Photosequence$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Photosequence$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Photosequence$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Photosequence$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Photosequence$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Photosequence$Create
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
        {}) as Params$Resource$Photosequence$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photosequence$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photoSequence').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a PhotoSequence and its metadata. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo sequence. * google.rpc.Code.NOT_FOUND if the photo sequence ID does not exist. * google.rpc.Code.FAILED_PRECONDITION if the photo sequence ID is not yet finished processing.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/streetviewpublish.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const streetviewpublish = google.streetviewpublish('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/streetviewpublish'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await streetviewpublish.photoSequence.delete({
     *     // Required. ID of the PhotoSequence.
     *     sequenceId: 'placeholder-value',
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
      params: Params$Resource$Photosequence$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Photosequence$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Photosequence$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Photosequence$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Photosequence$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Photosequence$Delete
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
        {}) as Params$Resource$Photosequence$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photosequence$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photoSequence/{sequenceId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['sequenceId'],
        pathParams: ['sequenceId'],
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
     * Gets the metadata of the specified PhotoSequence via the Operation interface. This method returns the following three types of responses: * `Operation.done` = false, if the processing of PhotoSequence is not finished yet. * `Operation.done` = true and `Operation.error` is populated, if there was an error in processing. * `Operation.done` = true and `Operation.response` is poulated, which contains a PhotoSequence message. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested PhotoSequence. * google.rpc.Code.NOT_FOUND if the requested PhotoSequence does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/streetviewpublish.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const streetviewpublish = google.streetviewpublish('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/streetviewpublish'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await streetviewpublish.photoSequence.get({
     *     // Optional. The filter expression. For example: `published_status=PUBLISHED`. The filters supported are: `published_status`. See https://google.aip.dev/160 for more information.
     *     filter: 'placeholder-value',
     *     // Required. ID of the photo sequence.
     *     sequenceId: 'placeholder-value',
     *     // Specifies if a download URL for the photo sequence should be returned in `download_url` of individual photos in the PhotoSequence response. \> Note: Currently not implemented.
     *     view: 'placeholder-value',
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
      params: Params$Resource$Photosequence$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Photosequence$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    get(
      params: Params$Resource$Photosequence$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Photosequence$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Photosequence$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Photosequence$Get
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
        {}) as Params$Resource$Photosequence$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photosequence$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photoSequence/{sequenceId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['sequenceId'],
        pathParams: ['sequenceId'],
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
     * Creates an upload session to start uploading photo sequence data. The upload URL of the returned UploadRef is used to upload the data for the `photoSequence`. After the upload is complete, the UploadRef is used with CreatePhotoSequence to create the PhotoSequence object entry.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/streetviewpublish.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const streetviewpublish = google.streetviewpublish('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/streetviewpublish'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await streetviewpublish.photoSequence.startUpload({
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
    startUpload(
      params: Params$Resource$Photosequence$Startupload,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    startUpload(
      params?: Params$Resource$Photosequence$Startupload,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UploadRef>>;
    startUpload(
      params: Params$Resource$Photosequence$Startupload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    startUpload(
      params: Params$Resource$Photosequence$Startupload,
      options: MethodOptions | BodyResponseCallback<Schema$UploadRef>,
      callback: BodyResponseCallback<Schema$UploadRef>
    ): void;
    startUpload(
      params: Params$Resource$Photosequence$Startupload,
      callback: BodyResponseCallback<Schema$UploadRef>
    ): void;
    startUpload(callback: BodyResponseCallback<Schema$UploadRef>): void;
    startUpload(
      paramsOrCallback?:
        | Params$Resource$Photosequence$Startupload
        | BodyResponseCallback<Schema$UploadRef>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UploadRef>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UploadRef>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UploadRef>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Photosequence$Startupload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photosequence$Startupload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photoSequence:startUpload').replace(
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
        createAPIRequest<Schema$UploadRef>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UploadRef>(parameters);
      }
    }
  }

  export interface Params$Resource$Photosequence$Create
    extends StandardParameters {
    /**
     * Required. The input form of PhotoSequence.
     */
    inputType?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PhotoSequence;
  }
  export interface Params$Resource$Photosequence$Delete
    extends StandardParameters {
    /**
     * Required. ID of the PhotoSequence.
     */
    sequenceId?: string;
  }
  export interface Params$Resource$Photosequence$Get
    extends StandardParameters {
    /**
     * Optional. The filter expression. For example: `published_status=PUBLISHED`. The filters supported are: `published_status`. See https://google.aip.dev/160 for more information.
     */
    filter?: string;
    /**
     * Required. ID of the photo sequence.
     */
    sequenceId?: string;
    /**
     * Specifies if a download URL for the photo sequence should be returned in `download_url` of individual photos in the PhotoSequence response. \> Note: Currently not implemented.
     */
    view?: string;
  }
  export interface Params$Resource$Photosequence$Startupload
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$Empty;
  }

  export class Resource$Photosequences {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all the PhotoSequences that belong to the user, in descending CreatePhotoSequence timestamp order.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/streetviewpublish.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const streetviewpublish = google.streetviewpublish('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/streetviewpublish'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await streetviewpublish.photoSequences.list({
     *     // Optional. The filter expression. For example: `imagery_type=SPHERICAL`. The filters supported are: `imagery_type`, `processing_state`, `min_latitude`, `max_latitude`, `min_longitude`, `max_longitude`, `filename_query`, `min_capture_time_seconds`, `max_capture_time_seconds. See https://google.aip.dev/160 for more information. Filename queries should sent as a Phrase in order to support multiple words and special characters by adding escaped quotes. Ex: filename_query="example of a phrase.mp4"
     *     filter: 'placeholder-value',
     *     // Optional. The maximum number of photo sequences to return. `pageSize` must be non-negative. If `pageSize` is zero or is not provided, the default page size of 100 is used. The number of photo sequences returned in the response may be less than `pageSize` if the number of matches is less than `pageSize`. This is currently unimplemented but is in process.
     *     pageSize: 'placeholder-value',
     *     // Optional. The nextPageToken value returned from a previous ListPhotoSequences request, if any.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "photoSequences": []
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
      params: Params$Resource$Photosequences$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Photosequences$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListPhotoSequencesResponse>>;
    list(
      params: Params$Resource$Photosequences$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Photosequences$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPhotoSequencesResponse>,
      callback: BodyResponseCallback<Schema$ListPhotoSequencesResponse>
    ): void;
    list(
      params: Params$Resource$Photosequences$List,
      callback: BodyResponseCallback<Schema$ListPhotoSequencesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPhotoSequencesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Photosequences$List
        | BodyResponseCallback<Schema$ListPhotoSequencesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPhotoSequencesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPhotoSequencesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListPhotoSequencesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Photosequences$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Photosequences$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://streetviewpublish.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/photoSequences').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListPhotoSequencesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPhotoSequencesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Photosequences$List
    extends StandardParameters {
    /**
     * Optional. The filter expression. For example: `imagery_type=SPHERICAL`. The filters supported are: `imagery_type`, `processing_state`, `min_latitude`, `max_latitude`, `min_longitude`, `max_longitude`, `filename_query`, `min_capture_time_seconds`, `max_capture_time_seconds. See https://google.aip.dev/160 for more information. Filename queries should sent as a Phrase in order to support multiple words and special characters by adding escaped quotes. Ex: filename_query="example of a phrase.mp4"
     */
    filter?: string;
    /**
     * Optional. The maximum number of photo sequences to return. `pageSize` must be non-negative. If `pageSize` is zero or is not provided, the default page size of 100 is used. The number of photo sequences returned in the response may be less than `pageSize` if the number of matches is less than `pageSize`. This is currently unimplemented but is in process.
     */
    pageSize?: number;
    /**
     * Optional. The nextPageToken value returned from a previous ListPhotoSequences request, if any.
     */
    pageToken?: string;
  }
}
